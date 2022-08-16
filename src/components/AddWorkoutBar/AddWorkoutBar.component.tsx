import { Button } from '@mui/material';
import { WorkoutSession } from '../../pages/AddWorkoutPage/AddWorkoutPage';
import { useTranslations } from '../../translations/src';
import { WorkoutSessionDetails } from '../WorkoutSessionDetails/WorkoutSessionDetails.component';
import { StyledButtons, StyledPaper } from './AddWorkoutBar.styles';

interface Props {
  addNote?: () => void;
  addWorkout?: () => void;
  deleteWorkout?: () => void;
  addingNote?: boolean;
  addingWorkout?: boolean;
  workoutSession?: WorkoutSession;
}

export const AddWorkoutBar = ({
  addNote,
  addWorkout,
  deleteWorkout,
  addingNote = false,
  addingWorkout = false,
  workoutSession,
}: Props) => {
  const translate = useTranslations();
  const dateToShow = workoutSession?.date.slice(0, 10);

  return (
    <StyledPaper>
      <WorkoutSessionDetails
        coach={workoutSession?.coach}
        swimmer={workoutSession?.swimmer}
        dateToShow={dateToShow}
      />
      <StyledButtons>
        {addWorkout && (
          <Button
            variant="outlined"
            color="primary"
            onClick={addWorkout}
            disabled={addingNote}
          >
            {translate('addWorkoutPage.addWorkout')}
          </Button>
        )}
        {addNote && (
          <Button
            variant="outlined"
            color="primary"
            onClick={addNote}
            disabled={addingWorkout}
          >
            {translate('addWorkoutPage.addNote')}
          </Button>
        )}
        {deleteWorkout && (
          <Button
            variant="outlined"
            color="error"
            onClick={deleteWorkout}
            disabled={addingWorkout || addingNote}
          >
            {translate('addWorkoutPage.deleteSession')}
          </Button>
        )}
      </StyledButtons>
    </StyledPaper>
  );
};
