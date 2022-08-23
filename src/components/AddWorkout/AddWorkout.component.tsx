import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useContext, useState } from 'react';
import {
  PoolLength,
  SwimmingStyle,
  Workout,
  WorkoutType,
} from '../../pages/AddWorkoutPage/AddWorkoutPage';
import { useTranslations } from '../../translations/src';
import { RadioGroupComponent } from '../RadioGroup/RadioGroup.component';
import {
  StyledAddWorkout,
  StyledButtons,
  StyledInputs,
} from './AddWorkout.styles';
import { handleAxiosError } from '../../utils/handleAxiosError';
import { SnackBarContext } from '../../context/SnackBarContext';

interface Props {
  closeAddingWorkout: () => void;
  addWorkout: (workout: Workout) => void;
  workoutSessionId: string;
  swimmingStyles: SwimmingStyle[];
  workoutTypes: WorkoutType[];
  poolLengths: PoolLength[];
}

const minDistance = 0;
const maxDistance = 10000;

export const AddWorkout = ({
  closeAddingWorkout,
  addWorkout,
  workoutSessionId,
  swimmingStyles,
  workoutTypes,
  poolLengths,
}: Props) => {
  const translate = useTranslations();
  const [swimmingStyle, setSwimmingStyle] = useState('');
  const [poolLength, setPoolLength] = useState(0);
  const [workoutType, setWorkoutType] = useState('');
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState('');
  const { setSnackBar } = useContext(SnackBarContext);

  const handleAddWorkout = async (e: any) => {
    e.preventDefault();
    const workoutToSend = {
      workoutSessionId,
      time,
      distance,
      workoutType,
      swimmingStyle,
      poolLength,
    };

    try {
      const result = await axios.post(
        'http://localhost:3001/workouts',
        workoutToSend,
        { withCredentials: true },
      );
      const workoutToAdd = result.data.workout;

      addWorkout(workoutToAdd);
      setSnackBar(translate('addWorkoutPage.workouts.workoutAdded'), 'success');
      closeAddingWorkout();
    } catch (error) {
      const errorMsg = translate('addWorkoutPage.workouts.workoutAddingError');
      handleAxiosError(error, setSnackBar, errorMsg);
    }
  };

  const handleRadioValueChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: string,
  ) => {
    const newValue = event.target.value;
    if (type === 'swimmingStyle') {
      setSwimmingStyle(newValue.toLowerCase());
    } else if (type === 'workoutType') {
      setWorkoutType(newValue.toLowerCase());
    } else if (type === 'poolLength') {
      setPoolLength(Number(newValue));
    } else if (type === 'distance') {
      setDistance(Number(newValue));
    } else if (type === 'time') {
      setTime(`00:${newValue}`);
    } else {
      console.error('error');
    }
  };

  return (
    <StyledAddWorkout onSubmit={handleAddWorkout}>
      <Typography variant="h4">
        {translate('addWorkoutPage.workouts.title')}
      </Typography>
      <RadioGroupComponent
        values={swimmingStyles.map((st) => st.style)}
        onValueChange={(e) => handleRadioValueChange(e, 'swimmingStyle')}
        name="swimming-styles"
        title={translate('addWorkoutPage.workouts.swimmingStyle')}
        required
        translatePrefix="addWorkoutPage.swimmingStyles"
      />
      <RadioGroupComponent
        values={poolLengths.map((pl) => pl.length)}
        onValueChange={(e) => handleRadioValueChange(e, 'poolLength')}
        name="pool-lengths"
        title={translate('addWorkoutPage.workouts.poolLength')}
        required
      />
      <RadioGroupComponent
        values={workoutTypes.map((wt) => wt.type)}
        onValueChange={(e) => handleRadioValueChange(e, 'workoutType')}
        name="workout-types"
        title={translate('addWorkoutPage.workouts.workoutType')}
        required
        translatePrefix="addWorkoutPage.workoutTypes"
      />
      <StyledInputs>
        <TextField
          type="number"
          label={translate('addWorkoutPage.workouts.distance')}
          id="distance"
          InputProps={{
            inputProps: {
              max: maxDistance,
              min: minDistance,
            },
          }}
          required
          fullWidth
          onChange={(e) => handleRadioValueChange(e, 'distance')}
        />
        <TextField
          type="time"
          label={translate('addWorkoutPage.workouts.time')}
          id="time"
          required
          fullWidth
          onChange={(e) => handleRadioValueChange(e, 'time')}
        />
      </StyledInputs>
      <StyledButtons>
        <Button type="submit" variant="outlined" color="success">
          {translate('common.add')}
        </Button>
        <Button variant="outlined" color="error" onClick={closeAddingWorkout}>
          {translate('common.cancel')}
        </Button>
      </StyledButtons>
    </StyledAddWorkout>
  );
};
