import { Typography } from '@mui/material';
import axios from 'axios';
import { useContext } from 'react';
import { SnackBarContext } from '../../context/SnackBarContext';
import { Workout as WorkoutI } from '../../pages/AddWorkoutPage/AddWorkoutPage';
import {
  StyledWorkout,
  StyledRemoveButton,
  StyledData,
} from './Workout.styles';
import { handleAxiosError } from '../../utils/handleAxiosError';
import { useTranslations } from '../../translations/src';
import { nameToSymbol } from '../../utils/nameToSymbol';

interface Props {
  workout: WorkoutI;
  handleRemoveWorkout?: (workout: WorkoutI) => void;
}

export const Workout = ({ workout, handleRemoveWorkout }: Props) => {
  const { setSnackBar } = useContext(SnackBarContext);
  const translate = useTranslations();
  const minutes = Math.floor(workout.averagePace / 60);
  const seconds = workout.averagePace - minutes * 60;
  const averagePaceTime = `${minutes < 10 ? '0' : ''}${minutes}:${
    seconds < 10 ? '0' : ''
  }${seconds}`;

  const handleWorkoutRemove = async () => {
    try {
      await axios.delete(`http://localhost:3001/workouts/${workout.id}`, {
        withCredentials: true,
      });
      if (handleRemoveWorkout) handleRemoveWorkout(workout);
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
      <StyledData>
        <div>
          {translate('addWorkoutPage.workouts.time')}&nbsp;{workout.time}
        </div>
        <div>
          {translate('addWorkoutPage.workouts.averageSpeed', {
            value: workout.averageSpeed,
          })}
        </div>
        <div>
          {translate('addWorkoutPage.workouts.distance')}&nbsp;
          {workout.distance}
        </div>
        <div>
          {translate('addWorkoutPage.workouts.averagePace', {
            value: averagePaceTime,
          })}
        </div>
        <div>
          {translate('addWorkoutPage.workouts.poolLength')}&nbsp;
          {workout.poolLength.length}
        </div>
        <div>
          {translate('addWorkoutPage.workouts.type')}&nbsp;
          {translate(
            `addWorkoutPage.workoutTypes.${nameToSymbol(
              workout.workoutTypes.type,
            )}`,
          )}
        </div>
        <div>
          {translate('addWorkoutPage.workouts.style')}&nbsp;
          {translate(
            `addWorkoutPage.swimmingStyles.${nameToSymbol(
              workout.swimmingStyle.style,
            )}`,
          )}
        </div>
      </StyledData>
      {handleRemoveWorkout && (
        <StyledRemoveButton
          color="error"
          variant="outlined"
          onClick={handleWorkoutRemove}
        >
          {translate('common.remove')}
        </StyledRemoveButton>
      )}
    </StyledWorkout>
  );
};
