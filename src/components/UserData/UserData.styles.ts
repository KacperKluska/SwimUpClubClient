import { Button, Paper, Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledUserDataWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;

  padding: 3rem;
  height: auto;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const StyledHeader = styled(Typography)`
  margin-bottom: 1rem;
`;

export const StyledImage = styled.img`
  width: 175px;
  height: 250px;

  object-fit: cover;

  background-color: gray;
`;

export const StyledData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  min-width: 60%;
  width: auto;
  max-width: 500px;
`;

export const StyledEditButton = styled(Button)`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const StyledImageFrame = styled.div`
  position: relative;

  width: 175px;
  height: 250px;

  z-index: 2;

  background-color: transparent;
`;

export const StyledRemoveButton = styled(Button)`
  position: absolute;
  top: -11px;
  right: -11px;
  min-width: 0;
  width: 30px;
  height: 30px;

  padding: 0;
  background-color: red;
  border-radius: 15px;

  z-index: 10;

  &:hover {
    background-color: pink;
  }
`;

export const StyledTwoColumnsLayout = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  width: 100%;
`;
