import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { ChangeEvent, useContext, useState } from 'react';
import { SnackBarContext } from '../../context/SnackBarContext';
import { UserContext } from '../../context/UserContext';
import { useTranslations } from '../../translations/src';
import { handleAxiosError } from '../../utils/handleAxiosError';
import { StyledAddEvent, StyledForm } from './AddEvent.styles';

interface Props {
  swimmerEmail?: string;
}

export const AddEvent = ({ swimmerEmail }: Props) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 16));
  const [duration, setDuration] = useState(1);
  const translate = useTranslations();
  const { setSnackBar } = useContext(SnackBarContext);
  const { userData } = useContext(UserContext);
  const { user: coach } = userData;

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleDurationChange = (event: SelectChangeEvent) => {
    setDuration(Number(event.target.value));
  };

  const addEvent = async (e: any) => {
    e.preventDefault();

    const temp = new Date(date);
    const endDate = temp;
    endDate.setHours(temp.getHours() + duration);
    const body = {
      swimmerEmail,
      coachEmail: coach?.email,
      title,
      startDate: date,
      endDate: endDate.toString(),
    };
    try {
      await axios.post('http://localhost:3001/events', body, {
        withCredentials: true,
      });

      setSnackBar(translate('settingsPage.addEvent.eventAdded'), 'success');
    } catch (error) {
      const errorMsg = translate('settingsPage.addEvent.eventAddingError');
      handleAxiosError(error, setSnackBar, errorMsg);
    }
  };

  const actualDate = new Date();
  const minDate = actualDate.toISOString().slice(0, 16);
  const maxDateString = actualDate;
  maxDateString.setMonth(actualDate.getMonth() + 3);
  const maxDate = maxDateString.toISOString().slice(0, 16);

  return (
    <StyledAddEvent>
      <StyledForm onSubmit={addEvent}>
        <Typography variant="h4">
          {translate('settingsPage.addEvent.title')}
        </Typography>
        <TextField
          id="title"
          label={translate('settingsPage.addEvent.text')}
          type="text"
          defaultValue=""
          value={title}
          onChange={handleTitleChange}
          required
        />
        <TextField
          id="datetime-local"
          label={translate('settingsPage.addEvent.dateAndTime')}
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: minDate,
            max: maxDate,
          }}
          value={date}
          onChange={handleDateChange}
          required
        />
        <FormControl fullWidth required>
          <InputLabel id="duration-select-label">
            {translate('settingsPage.addEvent.duration')}
          </InputLabel>
          <Select
            labelId="duration-select-label"
            id="duration-select"
            value={`${duration}`}
            label={translate('settingsPage.addEvent.duration')}
            onChange={handleDurationChange}
            required
          >
            <MenuItem value={1}>
              {translate('settingsPage.addEvent.durationValues.hour')}
            </MenuItem>
            <MenuItem value={2}>
              {translate('settingsPage.addEvent.durationValues.twoHours')}
            </MenuItem>
            <MenuItem value={3}>
              {translate('settingsPage.addEvent.durationValues.threeHours')}
            </MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="outlined" color="success">
          {translate('settingsPage.addEvent.button')}
        </Button>
      </StyledForm>
    </StyledAddEvent>
  );
};
