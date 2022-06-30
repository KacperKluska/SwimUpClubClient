import { Card, Paper } from '@mui/material';
import styled from 'styled-components';

export const StyledPaper = styled(Paper)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  height: auto;

  padding: 10rem;

  border-radius: 0;

  @media (max-width: 768px) {
    padding: auto;
    justify-content: center;
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
`;
