import { Button } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddNote } from '../../components/AddNote/AddNote.component';
import { AddWorkoutBar } from '../../components/AddWorkoutBar/AddWorkoutBar.component';
import { AddWorkoutTabs } from '../../components/AddWorkoutTabs/AddWorkoutTabs.component';
import { TabPanel } from '../../components/AddWorkoutTabs/TabPanel.component';
import { Note } from '../../components/Note/Note.component';
import { OneColumnLayout } from '../../components/OneColumnLayout/OneColumnLayout.component';
import { UserData } from '../../components/UserData/UserData.component';
import { SnackBarContext } from '../../context/SnackBarContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useTranslations } from '../../translations/src';
import { handleAxiosError } from '../../utils/handleAxiosError';
import { CenteredPaper } from '../CenteredPaper/CenteredPaper.component';

interface UserData {
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
  coach: UserData;
  swimmer: UserData;
  date: string;
  id: string;
  message: string;
}

export interface Note {
  note: string;
  id: string;
}

function isWorkoutSession(obj: any): obj is WorkoutSession {
  return (
    'id' in obj &&
    'coach' in obj &&
    'swimmer' in obj &&
    'date' in obj &&
    'message' in obj
  );
}

export const AddWorkoutPage = () => {
  const translate = useTranslations();
  const { setSnackBar } = useContext(SnackBarContext);
  const [tabValue, setTabValue] = useState(0);
  const [notes, setNotes] = useState<Note[]>([]);
  const [workouts, setWorkouts] = useState([]);
  const [addingWorkout, setAddingWorkout] = useState(false);
  const [addingNote, setAddingNote] = useState(false);
  const [storedValue, setStoredValue] = useLocalStorage('workoutSession', {});
  const navigate = useNavigate();

  const storedSession = storedValue.data;
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
    setNotes([...notes, note]);
  };

  const handleRemoveNote = (note: Note) => {
    const index = notes.indexOf(note);
    notes.splice(index, 1);
    setNotes(notes);
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
              Tutaj jest formularz treningu
              <Button
                variant="outlined"
                color="error"
                onClick={() => setAddingWorkout(false)}
              >
                X
              </Button>
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
            Workouts TabPanel
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            {notes.map((note) => (
              <Note
                key={note.id}
                note={note}
                handleRemoveNote={handleRemoveNote}
              />
            ))}
          </TabPanel>
        </AddWorkoutTabs>
      </OneColumnLayout>
    </CenteredPaper>
  );
};
