import { Alert, Snackbar } from '@mui/material';
import { useState } from 'react';
import { translate } from '../../translations/src';
import { getTimeString } from '../../utils/getTimeString';
import { StyledTimer, StyledHeader, StyledButtons } from './Timer.styles';
import { useTimer } from './useTimer';

export const Timer = () => {
  const { time, setTime, timerOn, setTimerOn, meantime, setMeantime } =
    useTimer();
  const [open, setOpen] = useState(false);

  const handleSnackBarClick = () => {
    setOpen(true);
  };

  const handleSnackBarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <StyledTimer>
      <StyledHeader>
        <div>{translate('timer.timer')}</div>
        {getTimeString(time)}
      </StyledHeader>
      <StyledButtons>
        {!timerOn && time === 0 && (
          <button type="button" onClick={() => setTimerOn(true)}>
            {translate('timer.start')}
          </button>
        )}
        {timerOn && (
          <button type="button" onClick={() => setTimerOn(false)}>
            {translate('timer.pause')}
          </button>
        )}
        {timerOn && (
          <button
            type="button"
            onClick={() => setMeantime([...meantime, time])}
          >
            {translate('timer.split')}
          </button>
        )}
        {!timerOn && time > 0 && (
          <button
            type="button"
            onClick={() => {
              setTime(0);
              setMeantime([0]);
            }}
          >
            {translate('timer.reset')}
          </button>
        )}
        {!timerOn && time > 0 && (
          <button type="button" onClick={() => setTimerOn(true)}>
            {translate('timer.resume')}
          </button>
        )}
        {!timerOn && time > 0 && (
          <button
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(`${time}`);
              handleSnackBarClick();
            }}
          >
            {translate('timer.copy')}
          </button>
        )}
      </StyledButtons>
      <div>
        {meantime.map((item, index) =>
          index ? (
            <div>
              {`#${index} ${getTimeString(item)} `}
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(`${item}`);
                  handleSnackBarClick();
                }}
              >
                {translate('timer.copy')}
              </button>
            </div>
          ) : null,
        )}
      </div>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleSnackBarClose}
      >
        <Alert
          onClose={handleSnackBarClose}
          severity="success"
          sx={{ width: '100%' }}
        >
          Midtime copied!
        </Alert>
      </Snackbar>
    </StyledTimer>
  );
};
