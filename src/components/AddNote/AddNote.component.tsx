import { Button, Typography } from '@mui/material';
import axios from 'axios';
import { useContext, useState } from 'react';
import { SnackBarContext } from '../../context/SnackBarContext';
import { Note } from '../../pages/AddWorkoutPage/AddWorkoutPage';
import { useTranslations } from '../../translations/src';
import { handleAxiosError } from '../../utils/handleAxiosError';
import { StyledTextArea, StyledButtons } from './AddNote.styles';

interface Props {
  closeAddingNote: () => void;
  addNote: (note: Note) => void;
  sessionId: string;
}

const limit = 500;

export const AddNote = ({ closeAddingNote, sessionId, addNote }: Props) => {
  const translate = useTranslations();
  const [text, setText] = useState('');
  const [textLength, setTextLength] = useState(0);
  const { setSnackBar } = useContext(SnackBarContext);

  const handleAddNote = async () => {
    if (text === '') {
      setSnackBar(translate('addWorkoutPage.notes.emptyNote'), 'warning');
      return;
    }
    try {
      const result = await axios.post(
        'http://localhost:3001/notes',
        { workoutSessionId: sessionId, text },
        {
          withCredentials: true,
        },
      );
      addNote({ note: text, id: result.data.id });
      setSnackBar(translate('addWorkoutPage.notes.noteAdded'), 'success');
      closeAddingNote();
    } catch (error) {
      const errorMsg = translate('addWorkoutPage.notes.noteAddingError');
      handleAxiosError(error, setSnackBar, errorMsg);
    }
  };

  const handleChange = (e: any) => {
    const note = e.target.value;
    setTextLength(note.length);
    setText(note);
  };

  return (
    <section>
      <Typography>
        {translate('addWorkoutPage.notes.label')}&nbsp;({textLength}/{limit})
      </Typography>
      <StyledTextArea
        minRows={5}
        placeholder={translate('addWorkoutPage.notes.placeholder')}
        style={{ width: '100%' }}
        maxLength={limit}
        value={text}
        onChange={handleChange}
      />
      <StyledButtons>
        <Button variant="outlined" color="success" onClick={handleAddNote}>
          {translate('common.add')}
        </Button>
        <Button variant="outlined" color="error" onClick={closeAddingNote}>
          {translate('common.cancel')}
        </Button>
      </StyledButtons>
    </section>
  );
};
