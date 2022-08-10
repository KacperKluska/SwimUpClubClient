import { Button, Typography } from '@mui/material';
import { WorkoutSession } from '../../pages/AddWorkoutPage/AddWorkoutPage';
import { useTranslations } from '../../translations/src';
import {
  StyledButtons,
  StyledPaper,
  StyledSessionDetails,
} from './AddWorkoutBar.styles';

interface Props {
  addNote?: () => void;
  addWorkout?: () => void;
  deleteWorkout?: () => void;
  addingNote: boolean;
  addingWorkout: boolean;
  workoutSession?: WorkoutSession;
}

export const AddWorkoutBar = ({
  addNote,
  addWorkout,
  deleteWorkout,
  addingNote,
  addingWorkout,
  workoutSession,
}: Props) => {
  const translate = useTranslations();
  const dateToShow = workoutSession?.date.slice(0, 10);

  return (
    <StyledPaper>
      <StyledSessionDetails>
        <Typography variant="h4">
          {translate('addWorkoutPage.session')}
        </Typography>
        <div>
          {translate('common.date')}:&nbsp;<span>{dateToShow}</span>
        </div>
        <div>
          {translate('common.swimmer')}:&nbsp;
          <span>
            {workoutSession?.swimmer.name}&nbsp;
            {workoutSession?.swimmer.surname}
          </span>
        </div>
        <div>
          {translate('common.coach')}:&nbsp;
          <span>
            {workoutSession?.coach.name}&nbsp;{workoutSession?.coach.surname}
          </span>
        </div>
      </StyledSessionDetails>
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
