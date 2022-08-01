import { Paper } from '@mui/material';
import styled from 'styled-components';
import { minPageHeight } from '../../theme';

export const StyledPaper = styled(Paper)`
  display: flex;
  justify-content: center;

  width: 100%;
  height: auto;
  ${minPageHeight}

  padding: 3rem;

  border-radius: 0;
`;
