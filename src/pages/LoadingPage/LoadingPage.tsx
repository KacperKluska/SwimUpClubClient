import { CircularProgress } from '@mui/material';
import styled from 'styled-components';
import { minPageHeight } from '../../theme';
import { useTranslations } from '../../translations/src';
import { StyledPaper } from '../CenteredPaper/CenteredPaper.styles';

const StyledPage = styled(StyledPaper)`
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  ${minPageHeight}

  font-size: 2rem;
`;

export const LoadingPage = () => {
  const translate = useTranslations();
  return (
    <StyledPage>
      <CircularProgress />
      {translate('common.loading')}
    </StyledPage>
  );
};
