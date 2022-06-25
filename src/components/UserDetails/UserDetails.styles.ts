import { Button, Paper, Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledUserDetails = styled(Paper)`
  position: relative;

  padding: 3rem;
  height: auto;
`;

export const StyledEditButton = styled(Button)`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const StyledHeader = styled(Typography)`
  margin-bottom: 1rem;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;
