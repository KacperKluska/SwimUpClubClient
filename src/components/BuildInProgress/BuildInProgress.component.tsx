import { translate } from '../../translations/src';
import { StyledBuildInProgress } from './BuildInProgress.styles';

interface BuildInProgressProps {
  text: string;
}

export const BuildInProgress = ({ text }: BuildInProgressProps) => (
  <StyledBuildInProgress>
    {translate('pageInProgress', { page: text })}
  </StyledBuildInProgress>
);
