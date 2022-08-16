import { Button } from '@mui/material';
import { ReactNode } from 'react';
import { WorkoutSession as WorkoutSessionI } from '../../pages/AddWorkoutPage/AddWorkoutPage';
import { useTranslations } from '../../translations/src';
import { StyledWorkoutSession, StyledButtons } from './WorkoutSession.styles';

interface Props {
  children: ReactNode;
  handleView?: (workoutSession: WorkoutSessionI) => void;
  workoutSession: WorkoutSessionI;
}

export const WorkoutSession = ({
  children,
  handleView,
  workoutSession,
}: Props) => {
  const translate = useTranslations();

  return (
    <StyledWorkoutSession>
      <div>{children}</div>
      <StyledButtons>
        {handleView && (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleView(workoutSession)}
          >
            {translate('myWorkoutSessionsPage.view')}
          </Button>
        )}
      </StyledButtons>
    </StyledWorkoutSession>
  );
};
