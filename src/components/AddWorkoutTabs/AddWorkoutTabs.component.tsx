/* eslint-disable react/jsx-props-no-spreading */
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { SyntheticEvent } from 'react';
import { useTranslations } from '../../translations/src';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface Props {
  children: React.ReactNode;
  value: number;
  handleChange: (event: SyntheticEvent, newValue: number) => void;
  addingNote?: boolean;
  addingWorkout?: boolean;
}

export const AddWorkoutTabs = ({
  children,
  handleChange,
  value,
  addingWorkout,
  addingNote,
}: Props) => {
  const translate = useTranslations();

  return (
    <Box sx={{ width: '100%', mt: '1rem', maxWidth: '800px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="basic tabs example"
        >
          <Tab
            label={translate('addWorkoutPage.workoutsTab')}
            {...a11yProps(0)}
            disabled={addingNote}
          />
          <Tab
            label={translate('addWorkoutPage.notesTab')}
            {...a11yProps(1)}
            disabled={addingWorkout}
          />
        </Tabs>
      </Box>
      {children}
    </Box>
  );
};
