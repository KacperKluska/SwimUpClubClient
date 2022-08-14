import { Typography } from '@mui/material';
import { UserDataInterface } from '../../pages/AddWorkoutPage/AddWorkoutPage';
import { useTranslations } from '../../translations/src';
import { StyledSessionDetails } from './WorkoutSessionDetails.styles';

interface Props {
  coach?: UserDataInterface;
  swimmer?: UserDataInterface;
  dateToShow?: string;
  index?: number;
}

export const WorkoutSessionDetails = ({
  coach,
  swimmer,
  dateToShow,
  index,
}: Props) => {
  const translate = useTranslations();

  return (
    <StyledSessionDetails>
      <Typography variant="h4">
        {typeof index !== 'number'
          ? translate('addWorkoutPage.session')
          : translate('addWorkoutPage.sessionId', { value: index + 1 })}
      </Typography>
      <div>
        {translate('common.date')}:&nbsp;<span>{dateToShow}</span>
      </div>
      <div>
        {translate('common.swimmer')}:&nbsp;
        <span>
          {swimmer?.name}&nbsp;
          {swimmer?.surname}
        </span>
      </div>
      <div>
        {translate('common.coach')}:&nbsp;
        <span>
          {coach?.name}&nbsp;{coach?.surname}
        </span>
      </div>
    </StyledSessionDetails>
  );
};
