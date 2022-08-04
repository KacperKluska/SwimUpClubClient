import { Button, Paper } from '@mui/material';
import styled from 'styled-components';

export const StyledNote = styled(Paper)`
  position: relative;

  min-height: 5rem;

  padding: 1rem;
  padding-bottom: 3rem;
  margin-top: 1rem;
`;

export const StyledRemoveButton = styled(Button)`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
`;
