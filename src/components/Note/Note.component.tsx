import { Typography } from '@mui/material';
import axios from 'axios';
import { useContext } from 'react';
import { SnackBarContext } from '../../context/SnackBarContext';
import { Note as NoteI } from '../../pages/AddWorkoutPage/AddWorkoutPage';
import { StyledNote, StyledRemoveButton } from './Note.styles';
import { handleAxiosError } from '../../utils/handleAxiosError';
import { useTranslations } from '../../translations/src';

interface Props {
  note: NoteI;
  handleRemoveNote: (note: NoteI) => void;
}

export const Note = ({ note, handleRemoveNote }: Props) => {
  const { setSnackBar } = useContext(SnackBarContext);
  const translate = useTranslations();

  const handleNoteRemove = async () => {
    try {
      await axios.delete('http://localhost:3001/notes', {
        params: { noteId: note.id },
        withCredentials: true,
      });
      handleRemoveNote(note);
      setSnackBar(translate('addWorkoutPage.notes.noteRemoved'), 'success');
    } catch (error) {
      const errorMsg = translate('addWorkoutPage.notes.noteRemovingError');
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
        {translate('common.remove')}
      </StyledRemoveButton>
    </StyledNote>
  );
};
