import { Typography } from '@mui/material';
import axios from 'axios';
import { useContext } from 'react';
import { SnackBarContext } from '../../context/SnackBarContext';
import { Workout as WorkoutI } from '../../pages/AddWorkoutPage/AddWorkoutPage';
import { StyledWorkout, StyledRemoveButton } from './Workout.styles';
import { handleAxiosError } from '../../utils/handleAxiosError';
import { useTranslations } from '../../translations/src';

interface Props {
  workout: WorkoutI;
  handleRemoveWorkout: (workout: WorkoutI) => void;
}

export const Workout = ({ workout, handleRemoveWorkout }: Props) => {
  const { setSnackBar } = useContext(SnackBarContext);
  const translate = useTranslations();

  const handleWorkoutRemove = async () => {
    try {
      await axios.delete(`http://localhost:3001/workouts/${workout.id}`, {
        withCredentials: true,
      });
      handleRemoveWorkout(workout);
      setSnackBar(
        translate('addWorkoutPage.workouts.workoutRemoved'),
        'success',
      );
    } catch (error) {
      const errorMsg = translate(
        'addWorkoutPage.workouts.workoutRemovingError',
      );
      handleAxiosError(error, setSnackBar, errorMsg);
    }
  };

  return (
    <StyledWorkout>
      <Typography>{workout.id}</Typography>
      <div>
        {translate('addWorkoutPage.workouts.time')}&nbsp;{workout.time}
      </div>
      <div>
        {translate('addWorkoutPage.workouts.distance')}&nbsp;{workout.distance}
      </div>
      <div>
        {translate('addWorkoutPage.workouts.style')}&nbsp;
        {workout.swimmingStyle.style}
      </div>
      <div>
        {translate('addWorkoutPage.workouts.type')}&nbsp;
        {workout.workoutTypes.type}
      </div>
      <StyledRemoveButton
        color="error"
        variant="outlined"
        onClick={handleWorkoutRemove}
      >
        {translate('common.remove')}
      </StyledRemoveButton>
    </StyledWorkout>
  );
};
