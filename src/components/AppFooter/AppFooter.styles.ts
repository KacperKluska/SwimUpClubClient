import { Paper } from '@mui/material';
import styled from 'styled-components';

export const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 0;
  border-top: 1px solid black;
`;

export const StyledCopyright = styled.div`
  width: 100%;
  padding: 0.5rem;

  font-weight: bold;
  text-align: center;
`;

export const StyledData = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5rem;

  margin: 2rem auto;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const StyledColumnHeader = styled.div`
  font-weight: bold;
  font-size: 1.25rem;

  margin-bottom: 1rem;
`;

export const StyledSocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
