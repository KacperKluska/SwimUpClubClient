import { TextareaAutosize } from '@mui/material';
import styled from 'styled-components';

export const StyledTextArea = styled(TextareaAutosize)`
  resize: none;
  padding: 0.5rem;
  border: 1px solid black;
  outline: none;
  line-height: 1.3;
  letter-spacing: 5.3;
`;

export const StyledButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  padding: 1rem;
`;
