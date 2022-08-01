import { Card, Paper } from '@mui/material';
import styled from 'styled-components';
import { minPageHeight } from '../../theme';

export const StyledPaper = styled(Paper)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  ${minPageHeight}

  padding: 10rem;

  border-radius: 0;

  @media (max-width: 768px) {
    padding: 4rem;
    justify-content: center;
  }
`;

export const StyledItemsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1096px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

export const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 200px;

  padding: 1rem;

  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.2;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    font-size: 1.2rem;

    width: 150px;
    height: 150px;
  }
`;
