import { Button } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AddWorkoutBar } from '../../components/AddWorkoutBar/AddWorkoutBar.component';
import { AddWorkoutTabs } from '../../components/AddWorkoutTabs/AddWorkoutTabs.component';
import { TabPanel } from '../../components/AddWorkoutTabs/TabPanel.component';
import { OneColumnLayout } from '../../components/OneColumnLayout/OneColumnLayout.component';
import { UserData } from '../../components/UserData/UserData.component';
import { UserDetails } from '../../components/UserDetails/UserDetails.component';
import { SnackBarContext } from '../../context/SnackBarContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useTranslations } from '../../translations/src';
import { handleAxiosError } from '../../utils/handleAxiosError';
import { CenteredPaper } from '../CenteredPaper/CenteredPaper.component';
import { Data, Details } from '../SettingsPage/SettingsPage.component';

interface UserData {
  email: string;
  id: string;
  name: string;
  surname: string;
  password: string;
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
  const { userEmail } = useParams();
  const translate = useTranslations();
  const { setSnackBar } = useContext(SnackBarContext);
  const [tabValue, setTabValue] = useState(0);
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

  const handleAddWorkout = () => {
    setTabValue(0);
    setAddingWorkout(true);
  };

  const handleAddNote = () => {
    setTabValue(1);
    setAddingNote(true);
  };

  const handleDeleteWorkout = async () => {
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

  return (
    <CenteredPaper>
      <OneColumnLayout>
        <AddWorkoutBar
          addNote={handleAddNote}
          addWorkout={handleAddWorkout}
          deleteWorkout={handleDeleteWorkout}
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
              Tutaj dodaje notatkę
              <Button
                variant="outlined"
                color="error"
                onClick={() => setAddingNote(false)}
              >
                X
              </Button>
            </Box>
          )}
          <TabPanel value={tabValue} index={0}>
            Workouts TabPanel
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            Notes TabPanel
          </TabPanel>
        </AddWorkoutTabs>
      </OneColumnLayout>
    </CenteredPaper>
  );
};
