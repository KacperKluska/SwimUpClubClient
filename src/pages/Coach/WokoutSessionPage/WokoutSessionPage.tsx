import { SyntheticEvent, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AddWorkoutBar } from '../../../components/AddWorkoutBar/AddWorkoutBar.component';
import { AddWorkoutTabs } from '../../../components/AddWorkoutTabs/AddWorkoutTabs.component';
import { TabPanel } from '../../../components/AddWorkoutTabs/TabPanel.component';
import { Note } from '../../../components/Note/Note.component';
import { OneColumnLayout } from '../../../components/OneColumnLayout/OneColumnLayout.component';
import { Workout } from '../../../components/Workout/Workout.component';
import { SnackBarContext } from '../../../context/SnackBarContext';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { useTranslations } from '../../../translations/src';
import { CenteredPaper } from '../../CenteredPaper/CenteredPaper.component';
import {
  Workout as WorkoutI,
  Note as NoteI,
  isWorkoutSession,
} from '../../AddWorkoutPage/AddWorkoutPage';
import { handleAxiosError } from '../../../utils/handleAxiosError';

export const WorkoutSessionPage = () => {
  const translate = useTranslations();
  const { setSnackBar } = useContext(SnackBarContext);
  const [tabValue, setTabValue] = useState(0);
  const [notes, setNotes] = useState<NoteI[]>([]);
  const [workouts, setWorkouts] = useState<WorkoutI[]>([]);
  const [storedValue, setStoredValue] = useLocalStorage('workoutSession', {});
  const navigate = useNavigate();

  const storedSession = storedValue;
  let workoutSession;
  if (isWorkoutSession(storedSession)) {
    workoutSession = storedSession;
  }

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const getNotes = async () => {
    try {
      const result = await axios.get('http://localhost:3001/notes', {
        params: { workoutSessionId: storedSession.id },
        withCredentials: true,
      });
      setNotes(result.data.notes);
    } catch (error) {
      const errorMsg = translate(
        'myWorkoutSessionsPage.sessionPage.notesLoadingError',
      );
      handleAxiosError(error, setSnackBar, errorMsg);
    }
  };

  const getWorkouts = async () => {
    try {
      const result = await axios.get('http://localhost:3001/workouts', {
        params: { workoutSessionId: storedSession.id },
        withCredentials: true,
      });
      setWorkouts(result.data.workouts);
    } catch (error) {
      const errorMsg = translate(
        'myWorkoutSessionsPage.sessionPage.workoutsLoadingError',
      );
      handleAxiosError(error, setSnackBar, errorMsg);
    }
  };

  const handleDeleteWorkoutSession = async () => {
    try {
      await axios.delete('http://localhost:3001/workout-sessions', {
        params: { id: storedSession.id },
        withCredentials: true,
      });
      setSnackBar(translate('addWorkoutPage.sessionRemoved'), 'success');
      setStoredValue({});
      navigate(`/coach/my-workout-sessions`, { replace: true });
    } catch (error) {
      const errorMsg = translate('addWorkoutPage.sessionRemoveError');
      handleAxiosError(error, setSnackBar, errorMsg);
    }
  };

  useEffect(() => {
    getNotes();
    getWorkouts();
  }, []);

  return (
    <CenteredPaper>
      <OneColumnLayout>
        <AddWorkoutBar
          workoutSession={workoutSession}
          deleteWorkout={handleDeleteWorkoutSession}
        />
        <AddWorkoutTabs handleChange={handleTabChange} value={tabValue}>
          <TabPanel value={tabValue} index={0}>
            {workouts.length
              ? workouts.map((workout) => (
                  <Workout key={workout.id} workout={workout} />
                ))
              : translate('addWorkoutPage.workouts.emptyArray')}
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            {notes.length
              ? notes.map((note) => <Note key={note.id} note={note} />)
              : translate('addWorkoutPage.notes.emptyArray')}
          </TabPanel>
        </AddWorkoutTabs>
      </OneColumnLayout>
    </CenteredPaper>
  );
};
