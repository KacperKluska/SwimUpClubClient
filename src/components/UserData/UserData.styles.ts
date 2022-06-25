import { Button, Paper, Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledUserDataWrapper = styled(Paper)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3rem;
  position: relative;

  padding: 3rem;
  height: auto;
`;

export const StyledHeader = styled(Typography)``;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 175px;
  max-height: 250px;

  object-fit: contain;

  background-color: gray;
`;

export const StyledData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;

  width: 500px;
`;

export const StyledEditButton = styled(Button)`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
