import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
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

interface ServerCalendarEvent {
  id: string;
  coach: UserDataInterface;
  swimmer: UserDataInterface;
  dateStart: string;
  dateEnd: string;
  title: string;
}

export const CalendarPage = () => {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const { setSnackBar } = useContext(SnackBarContext);
  const { userData } = useContext(UserContext);
  const { user } = userData;
  const translate = useTranslations();

  const getUsers = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        'http://localhost:3001/events/forSwimmer',
        {
          withCredentials: true,
          params: { email: user?.email ?? '' },
        },
      );
      setEvents(
        result.data.events.map(
          (event: ServerCalendarEvent): CalendarEvent => ({
            start: new Date(event.dateStart),
            end: new Date(event.dateEnd),
            title: event.title,
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
    getUsers();
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <CenteredPaper>
      <div>
        <Typography variant="h4">{translate('calendarPage.title')}</Typography>
        <MyCalendar events={events} />
      </div>
    </CenteredPaper>
  );
};
