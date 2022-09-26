import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CenteredPaper } from '../../CenteredPaper/CenteredPaper.component';
import { useTranslations } from '../../../translations/src';
import { LoadingPage } from '../../LoadingPage/LoadingPage';
import {
  CalendarEvent,
  MyCalendar,
} from '../../../components/MyCalendar/MyCalendar.component';
import { UserContext } from '../../../context/UserContext';
import { handleAxiosError } from '../../../utils/handleAxiosError';
import { SnackBarContext } from '../../../context/SnackBarContext';
import { UserDataInterface } from '../../AddWorkoutPage/AddWorkoutPage';
import { useLocalStorage } from '../../../hooks/useLocalStorage';

interface ServerCalendarEvent {
  id: string;
  coach: UserDataInterface;
  swimmer: UserDataInterface;
  dateStart: string;
  dateEnd: string;
  title: string;
}

export const CalendarPage = () => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const { setSnackBar } = useContext(SnackBarContext);
  const { userData } = useContext(UserContext);
  const { user } = userData;
  const translate = useTranslations();
  const navigate = useNavigate();
  const [, setWorkoutSession] = useLocalStorage('workoutSession', {});

  const handleStartWorkoutSession = async (
    swimmerEmail: string,
    coachEmail: string,
  ) => {
    try {
      const result = await axios.post(
        'http://localhost:3001/workout-sessions',
        { swimmerEmail, coachEmail },
        { withCredentials: true },
      );
      setWorkoutSession(result.data);
      setSnackBar(
        translate('mySwimmersPage.addedWorkoutSession', {
          value: swimmerEmail,
        }),
        'success',
      );
      navigate(`/coach/add-workout/${swimmerEmail}`, { replace: true });
    } catch (error) {
      setSnackBar(
        translate('mySwimmersPage.addWorkoutSessionError', {
          value: swimmerEmail,
        }),
        'error',
      );
    }
  };

  const getEvents = async () => {
    try {
      setLoading(true);
      const result = await axios.get('http://localhost:3001/events/forCoach', {
        withCredentials: true,
        params: { email: user?.email ?? '' },
      });
      setEvents(
        result.data.events.map(
          (event: ServerCalendarEvent): CalendarEvent => ({
            start: new Date(event.dateStart),
            end: new Date(event.dateEnd),
            title: `Title: ${event.title},\nCoach: ${event.coach.name} ${event.coach.surname},\nSwimmer: ${event.swimmer.name} ${event.swimmer.surname},`,
            coachEmail: event.coach.email,
            swimmerEmail: event.swimmer.email,
          }),
        ),
      );
      setLoading(false);
    } catch (error) {
      const errorMsg = translate('calendarPage.loadingError');
      handleAxiosError(error, setSnackBar, errorMsg);
      setLoading(false);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <CenteredPaper>
      <div>
        <Typography variant="h4">{translate('calendarPage.title')}</Typography>
        <MyCalendar events={events} onClickEvent={handleStartWorkoutSession} />
      </div>
    </CenteredPaper>
  );
};
