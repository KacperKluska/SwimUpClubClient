import { Alert, Button, Snackbar, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslations } from '../../translations/src';
import { getTimeString } from '../../utils/getTimeString';
import { StyledTimer, StyledHeader, StyledButtons } from './Timer.styles';
import { useTimer } from './useTimer';

export const Timer = () => {
  const { time, setTime, timerOn, setTimerOn, meantime, setMeantime } =
    useTimer();
  const [open, setOpen] = useState(false);
  const translate = useTranslations();

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
          <Button
            type="button"
            variant="outlined"
            color="success"
            onClick={() => setTimerOn(true)}
          >
            {translate('timer.start')}
          </Button>
        )}
        {timerOn && (
          <Button
            type="button"
            variant="outlined"
            color="success"
            onClick={() => setTimerOn(false)}
          >
            {translate('timer.pause')}
          </Button>
        )}
        {timerOn && (
          <Button
            type="button"
            variant="outlined"
            color="primary"
            onClick={() => setMeantime([...meantime, time])}
          >
            {translate('timer.split')}
          </Button>
        )}
        {!timerOn && time > 0 && (
          <Button
            type="button"
            variant="outlined"
            color="error"
            onClick={() => {
              setTime(0);
              setMeantime([0]);
            }}
          >
            {translate('timer.reset')}
          </Button>
        )}
        {!timerOn && time > 0 && (
          <Button
            type="button"
            variant="outlined"
            color="success"
            onClick={() => setTimerOn(true)}
          >
            {translate('timer.resume')}
          </Button>
        )}
        {/* {!timerOn && time > 0 && (
          <Button
            type="button"
            variant="outlined"
            color="primary"
            onClick={() => {
              navigator.clipboard.writeText(`${time}`);
              handleSnackBarClick();
            }}
          >
            {translate('timer.copy')}
          </Button>
        )} */}
      </StyledButtons>
      <section>
        {meantime.length > 1 && (
          <Typography variant="h5">{translate('timer.meantimes')}</Typography>
        )}
        {meantime.map((item, index) =>
          index ? (
            <div>
              {`#${index}. ${getTimeString(item)} `}
              {/* <Button
                type="button"
                variant="outlined"
                color="primary"
                onClick={() => {
                  navigator.clipboard.writeText(`${item}`);
                  handleSnackBarClick();
                }}
              >
                {translate('timer.copy')}
              </Button> */}
            </div>
          ) : null,
        )}
      </section>
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
          {translate('timer.copiedMessage')}
        </Alert>
      </Snackbar>
    </StyledTimer>
  );
};
