import { Typography } from '@mui/material';
import axios from 'axios';
import { useContext } from 'react';
import { SnackBarContext } from '../../context/SnackBarContext';
import { Note as NoteI } from '../../pages/AddWorkoutPage/AddWorkoutPage';
import { StyledNote, StyledRemoveButton } from './Note.styles';
import { handleAxiosError } from '../../utils/handleAxiosError';

interface Props {
  note: NoteI;
  handleRemoveNote: (note: NoteI) => void;
}

export const Note = ({ note, handleRemoveNote }: Props) => {
  const { setSnackBar } = useContext(SnackBarContext);

  const handleNoteRemove = async () => {
    try {
      await axios.delete('http://localhost:3001/notes', {
        params: { noteId: note.id },
        withCredentials: true,
      });
      handleRemoveNote(note);
      setSnackBar('removed', 'success');
    } catch (error) {
      const errorMsg = 'not removed';
      handleAxiosError(error, setSnackBar, errorMsg);
    }
  };

  return (
    <StyledNote>
      <Typography>{note.note}</Typography>
      <StyledRemoveButton
        color="error"
        variant="outlined"
        onClick={handleNoteRemove}
      >
        Remove
      </StyledRemoveButton>
    </StyledNote>
  );
};
