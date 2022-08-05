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
  console.log(
    '🚀 ~ file: Workout.component.tsx ~ line 16 ~ Workout ~ workout',
    workout,
  );
  const { setSnackBar } = useContext(SnackBarContext);
  const translate = useTranslations();

  const handleWorkoutRemove = async () => {
    try {
      await axios.delete('http://localhost:3001/notes', {
        params: { noteId: workout.id },
        withCredentials: true,
      });
      handleRemoveWorkout(workout);
      setSnackBar('removed', 'success');
    } catch (error) {
      const errorMsg = 'not removed';
      handleAxiosError(error, setSnackBar, errorMsg);
    }
  };

  return (
    <StyledWorkout>
      <Typography>{workout.id}</Typography>
      <div>Time: {workout.time}</div>
      <div>Distance: {workout.distance}</div>
      <div>Style: {workout.swimmingStyle.style}</div>
      <div>Type: {workout.workoutTypes.type}</div>
      <StyledRemoveButton
        color="error"
        variant="outlined"
        onClick={handleWorkoutRemove}
      >
        {translate('common.delete')}
      </StyledRemoveButton>
    </StyledWorkout>
  );
};
