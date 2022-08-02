import { Button } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AddWorkoutBar } from '../../components/AddWorkoutBar/AddWorkoutBar.component';
import { AddWorkoutTabs } from '../../components/AddWorkoutTabs/AddWorkoutTabs.component';
import { TabPanel } from '../../components/AddWorkoutTabs/TabPanel.component';
import { OneColumnLayout } from '../../components/OneColumnLayout/OneColumnLayout.component';
import { UserData } from '../../components/UserData/UserData.component';
import { UserDetails } from '../../components/UserDetails/UserDetails.component';
import { CenteredPaper } from '../CenteredPaper/CenteredPaper.component';
import { Data, Details } from '../SettingsPage/SettingsPage.component';

export const AddWorkoutPage = () => {
  const { userEmail } = useParams();
  const [tabValue, setTabValue] = useState(0);
  const [addingWorkout, setAddingWorkout] = useState(false);
  const [addingNote, setAddingNote] = useState(false);

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

  return (
    <CenteredPaper>
      <OneColumnLayout>
        <AddWorkoutBar
          addNote={handleAddNote}
          addWorkout={handleAddWorkout}
          deleteWorkout={() => null}
          addingWorkout={addingWorkout}
          addingNote={addingNote}
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
