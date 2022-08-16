import { Box } from '@mui/system';
import axios from 'axios';
import { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddNote } from '../../components/AddNote/AddNote.component';
import { AddWorkout } from '../../components/AddWorkout/AddWorkout.component';
import { AddWorkoutBar } from '../../components/AddWorkoutBar/AddWorkoutBar.component';
import { AddWorkoutTabs } from '../../components/AddWorkoutTabs/AddWorkoutTabs.component';
import { TabPanel } from '../../components/AddWorkoutTabs/TabPanel.component';
import { Note } from '../../components/Note/Note.component';
import { OneColumnLayout } from '../../components/OneColumnLayout/OneColumnLayout.component';
import { Workout } from '../../components/Workout/Workout.component';
import { SnackBarContext } from '../../context/SnackBarContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useTranslations } from '../../translations/src';
import { handleAxiosError } from '../../utils/handleAxiosError';
import { CenteredPaper } from '../CenteredPaper/CenteredPaper.component';

export interface UserDataInterface {
  email: string;
  id: string;
  name: string;
  surname: string;
  userRole: {
    role: string;
    id: string;
  };
}

export interface WorkoutSession {
  coach: UserDataInterface;
  swimmer: UserDataInterface;
  date: string;
  id: string;
  message: string;
}

export interface Note {
  note: string;
  id: string;
}

export interface WorkoutType {
  id: string;
  type: string;
}

export interface SwimmingStyle {
  id: string;
  style: string;
}

export interface PoolLength {
  id: string;
  length: number;
}

export interface Workout {
  id: string;
  time: string;
  averageSpeed: number;
  averagePace: number;
  distance: number;
  poolLength: PoolLength;
  swimmingStyle: SwimmingStyle;
  workoutTypes: WorkoutType;
}

export function isWorkoutSession(obj: any): obj is WorkoutSession {
  return 'id' in obj && 'coach' in obj && 'swimmer' in obj && 'date' in obj;
}

export const AddWorkoutPage = () => {
  const translate = useTranslations();
  const { setSnackBar } = useContext(SnackBarContext);
  const [tabValue, setTabValue] = useState(0);
  const [notes, setNotes] = useState<Note[]>([]);
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [poolLengths, setPoolLengths] = useState<PoolLength[]>([]);
  const [swimmingStyles, setSwimmingStyles] = useState<SwimmingStyle[]>([]);
  const [workoutTypes, setWorkoutTypes] = useState<WorkoutType[]>([]);
  const [addingWorkout, setAddingWorkout] = useState(false);
  const [addingNote, setAddingNote] = useState(false);
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

  const handleAddWorkoutClick = () => {
    setTabValue(0);
    setAddingWorkout(true);
  };

  const handleAddNoteClick = () => {
    setTabValue(1);
    setAddingNote(true);
  };

  const handleAddNote = (note: Note) => {
    setNotes([note, ...notes]);
  };

  const handleRemoveNote = (note: Note) => {
    const index = notes.indexOf(note);
    notes.splice(index, 1);
    setNotes(notes);
  };

  const handleAddWorkout = (workout: Workout) => {
    setWorkouts([workout, ...workouts]);
  };

  const handleRemoveWorkout = (workout: Workout) => {
    const index = workouts.indexOf(workout);
    workouts.splice(index, 1);
    setWorkouts(workouts);
  };

  const closeAddingWorkout = () => {
    setAddingWorkout(false);
  };

  const closeAddingNote = () => {
    setAddingNote(false);
  };

  const getNotes = async () => {
    try {
      const result = await axios.get('http://localhost:3001/notes', {
        params: { workoutSessionId: storedSession.id },
        withCredentials: true,
      });
      setNotes(result.data.notes);
    } catch (error) {
      const errorMsg = translate('addWorkoutPage.sessionRemoveError');
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
      const errorMsg = translate('addWorkoutPage.sessionRemoveError');
      handleAxiosError(error, setSnackBar, errorMsg);
    }
  };

  const getPoolLengths = async () => {
    try {
      const result = await axios.get(
        'http://localhost:3001/workouts/poolLengths',
        {
          withCredentials: true,
        },
      );
      setPoolLengths(result.data.poolLengths);
    } catch (error) {
      const errorMsg = translate('addWorkoutPage.sessionRemoveError');
      handleAxiosError(error, setSnackBar, errorMsg);
    }
  };

  const getSwimmingStyles = async () => {
    try {
      const result = await axios.get(
        'http://localhost:3001/workouts/swimmingStyles',
        {
          withCredentials: true,
        },
      );
      setSwimmingStyles(result.data.swimmingStyles);
    } catch (error) {
      const errorMsg = translate('addWorkoutPage.sessionRemoveError');
      handleAxiosError(error, setSnackBar, errorMsg);
    }
  };

  const getWorkoutTypes = async () => {
    try {
      const result = await axios.get(
        'http://localhost:3001/workouts/workoutTypes',
        {
          withCredentials: true,
        },
      );
      setWorkoutTypes(result.data.workoutTypes);
    } catch (error) {
      const errorMsg = translate('addWorkoutPage.sessionRemoveError');
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
      navigate(`/coach/my-swimmers`, { replace: true });
      setStoredValue({});
    } catch (error) {
      const errorMsg = translate('addWorkoutPage.sessionRemoveError');
      handleAxiosError(error, setSnackBar, errorMsg);
    }
  };

  useEffect(() => {
    getNotes();
    getWorkouts();
    getPoolLengths();
    getSwimmingStyles();
    getWorkoutTypes();
  }, []);

  return (
    <CenteredPaper>
      <OneColumnLayout>
        <AddWorkoutBar
          addNote={handleAddNoteClick}
          addWorkout={handleAddWorkoutClick}
          deleteWorkout={handleDeleteWorkoutSession}
          addingWorkout={addingWorkout}
          addingNote={addingNote}
          workoutSession={workoutSession}
        />
        <AddWorkoutTabs
          handleChange={handleTabChange}
          value={tabValue}
          addingWorkout={addingWorkout}
          addingNote={addingNote}
        >
          {addingWorkout && (
            <Box sx={{ p: '3rem' }}>
              <AddWorkout
                workoutSessionId={storedSession.id}
                closeAddingWorkout={closeAddingWorkout}
                addWorkout={handleAddWorkout}
                poolLengths={poolLengths}
                swimmingStyles={swimmingStyles}
                workoutTypes={workoutTypes}
              />
            </Box>
          )}

          {addingNote && (
            <Box sx={{ p: '3rem' }}>
              <AddNote
                closeAddingNote={closeAddingNote}
                addNote={handleAddNote}
                sessionId={storedSession.id}
              />
            </Box>
          )}
          <TabPanel value={tabValue} index={0}>
            {workouts.length
              ? workouts.map((workout) => (
                  <Workout
                    key={workout.id}
                    workout={workout}
                    handleRemoveWorkout={handleRemoveWorkout}
                  />
                ))
              : translate('addWorkoutPage.workouts.emptyArray')}
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            {notes.length
              ? notes.map((note) => (
                  <Note
                    key={note.id}
                    note={note}
                    handleRemoveNote={handleRemoveNote}
                  />
                ))
              : translate('addWorkoutPage.notes.emptyArray')}
          </TabPanel>
        </AddWorkoutTabs>
      </OneColumnLayout>
    </CenteredPaper>
  );
};
