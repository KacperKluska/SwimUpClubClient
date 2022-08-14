import { Button } from '@mui/material';
import { ReactNode } from 'react';
import { useTranslations } from '../../translations/src';
import { StyledWorkoutSession, StyledButtons } from './WorkoutSession.styles';

interface Props {
  children: ReactNode;
  handleView?: (sessionId: string) => void;
  sessionId: string;
}

export const WorkoutSession = ({ children, handleView, sessionId }: Props) => {
  const translate = useTranslations();

  return (
    <StyledWorkoutSession>
      <div>{children}</div>
      <StyledButtons>
        {handleView && (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleView(sessionId)}
          >
            {translate('myWorkoutSessionsPage.view')}
          </Button>
        )}
      </StyledButtons>
    </StyledWorkoutSession>
  );
};
