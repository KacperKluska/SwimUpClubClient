import { Typography } from '@mui/material';
import { UserDataInterface } from '../../pages/AddWorkoutPage/AddWorkoutPage';
import { useTranslations } from '../../translations/src';
import { StyledSessionDetails } from './WorkoutSessionDetails.styles';

interface Props {
  coach?: UserDataInterface;
  swimmer?: UserDataInterface;
  dateToShow?: string;
}

export const WorkoutSessionDetails = ({
  coach,
  swimmer,
  dateToShow,
}: Props) => {
  const translate = useTranslations();

  return (
    <StyledSessionDetails>
      <Typography variant="h4">
        {translate('addWorkoutPage.session')}
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
