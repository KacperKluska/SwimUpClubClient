import { Paper } from '@mui/material';
import styled from 'styled-components';
import { minPageHeight } from '../../theme';

export const StyledTimerPage = styled(Paper)`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  height: auto;
  ${minPageHeight}

  padding: 3rem 0;

  border-radius: 0;
`;
