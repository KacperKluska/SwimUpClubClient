import { Paper } from '@mui/material';
import styled, { css } from 'styled-components';

const row = css`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const StyledPaper = styled(Paper)`
  ${row}
  justify-content: space-between;
  padding: 1rem;
  max-width: 800px;
  min-width: 400px;
`;

export const StyledButtons = styled.section`
  width: 100%;
  justify-content: flex-end;
  ${row}
  max-height: 50px;

  @media (max-width: 1064px) {
    flex-direction: column;
    justify-content: space-evenly;
    max-height: none;
  }
`;
