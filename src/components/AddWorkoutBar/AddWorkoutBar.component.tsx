import { Button, Typography } from '@mui/material';
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
}

export const AddWorkoutBar = ({
  addNote,
  addWorkout,
  deleteWorkout,
  addingNote,
  addingWorkout,
}: Props) => {
  const translate = useTranslations();

  return (
    <StyledPaper>
      <StyledSessionDetails>
        <Typography variant="h4">
          {translate('addWorkoutPage.session')}
        </Typography>
        <div>
          Data:&nbsp;<span>02.08.2022</span>
        </div>
        <div>
          Zawodnik:&nbsp;<span>Kacper&nbsp;Kluska</span>
        </div>
        <div>
          Trener:&nbsp;<span>Kacper&nbsp;Kluska</span>
        </div>
      </StyledSessionDetails>
      <StyledButtons>
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
