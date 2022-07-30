import { Paper } from '@mui/material';
import styled, { css } from 'styled-components';

const centered = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const StyledPaper = styled(Paper)`
  ${centered}

  border-radius: 0;
  padding: 3rem;

  .MuiFormControl-fullWidth {
    width: auto;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-direction: column;

    padding: 1.5rem;

    .MuiFormControl-fullWidth {
      width: 100%;
    }
  }
`;

export const Buttons = styled.div`
  ${centered}

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;
