import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { minPageHeight } from '../../theme';
import { StyledPaper } from '../CenteredPaper/CenteredPaper.styles';

const StyledPage = styled(StyledPaper)`
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  ${minPageHeight}

  padding: 2rem;

  font-size: 3rem;

  span {
    font-size: 2rem;
  }
`;

export const NotFoundPage = () => {
  const location = useLocation();
  const errorMsg = "Couldn't find page: ";

  return (
    <StyledPage>
      <p>
        {errorMsg}
        {location.pathname}
      </p>
      <span>
        Back to <a href="/">home page</a>
      </span>
    </StyledPage>
  );
};
