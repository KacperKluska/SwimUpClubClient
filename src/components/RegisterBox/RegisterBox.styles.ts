import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  height: 100%;
`;


export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  height: 100%;
`;

export const StyledHeader = styled(Typography)`
  margin-bottom: 1rem;
`;

export const StyledError = styled(Typography)`
  color: red;

  padding: 0.5rem;
`;
