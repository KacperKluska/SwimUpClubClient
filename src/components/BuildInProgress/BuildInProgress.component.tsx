import { StyledBuildInProgress } from './BuildInProgress.styles';
import { useTranslations } from '../../translations/src';

interface BuildInProgressProps {
  text: string;
}

export const BuildInProgress = ({ text }: BuildInProgressProps) => {
  const translate = useTranslations();

  return (
    <StyledBuildInProgress>
      {translate('pageInProgress', { page: text })}
    </StyledBuildInProgress>
  );
};
