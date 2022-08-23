import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { WorkoutSession } from '../../../components/WorkoutSession/WorkoutSession.component';
import { WorkoutSessionDetails } from '../../../components/WorkoutSessionDetails/WorkoutSessionDetails.component';
import { SnackBarContext } from '../../../context/SnackBarContext';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { useTranslations } from '../../../translations/src';
import { handleAxiosError } from '../../../utils/handleAxiosError';
import { WorkoutSession as WorkoutSessionI } from '../../AddWorkoutPage/AddWorkoutPage';
import { CenteredPaper } from '../../CenteredPaper/CenteredPaper.component';
import { LoadingPage } from '../../LoadingPage/LoadingPage';

export const SwimmerWorkoutSessionsPage = () => {
  const [loading, setLoading] = useState(true);
  const [workoutSessions, setWorkoutSessions] = useState<WorkoutSessionI[]>([]);
  const translate = useTranslations();
  const { setSnackBar } = useContext(SnackBarContext);
  const navigate = useNavigate();
  const { userEmail } = useParams();
  const [, setStoredValue] = useLocalStorage('workoutSession', {});

  const getMyWorkoutSessions = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        `http://localhost:3001/workout-sessions/forSwimmer`,
        {
          withCredentials: true,
          params: { email: userEmail ?? '' },
        },
      );
      setWorkoutSessions(result.data.sessions);
    } catch (error) {
      const errorMsg = translate('myWorkoutSessionsPage.loadingError');
      handleAxiosError(error, setSnackBar, errorMsg);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMyWorkoutSessions();
  }, []);

  const handleView = (session: WorkoutSessionI) => {
    setStoredValue(session);
    navigate(`/coach/my-workout-sessions/${session.id}`, { replace: true });
  };

  if (loading) return <LoadingPage />;

  return (
    <CenteredPaper>
      <div>
        <Typography variant="h4">
          {translate('myWorkoutSessionsPage.title')}
        </Typography>
        {!workoutSessions.length && (
          <Box sx={{ mb: 2 }}>
            {translate('myWorkoutSessionsPage.noSessions')}
          </Box>
        )}
        {workoutSessions.map((ws, index) => (
          <Box sx={{ my: 2 }} key={ws.id}>
            <WorkoutSession workoutSession={ws} handleView={handleView}>
              <WorkoutSessionDetails
                coach={ws.coach}
                swimmer={ws.swimmer}
                dateToShow={ws.date.slice(0, 10)}
                index={index}
              />
            </WorkoutSession>
          </Box>
        ))}
      </div>
    </CenteredPaper>
  );
};
