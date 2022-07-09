import { TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslations } from '../../translations/src';
import {
  StyledData,
  StyledImage,
  StyledUserDataWrapper,
  StyledEditButton,
  StyledHeader,
  StyledImageFrame,
  StyledRemoveButton,
} from './UserData.styles';
import { Data } from '../../pages/SettingsPage/SettingsPage.component';
import { useUserImage } from '../../hooks/useImage';
import { AddProfilePicture } from '../AddProfilePicture/AddProfilePicture.component';

interface Props {
  data: Data | null;
}

export const UserData = ({ data }: Props) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const translate = useTranslations();
  const img = useUserImage(data?.photo || '');
  const originalEmail = data?.email;

  const removeImage = async () => {
    await axios.delete('http://localhost:3001/uploads/file', {
      withCredentials: true,
    });
    window.location.reload();
  };

  const handleUpdate = async () => {
    const result = await axios.patch(
      'http://localhost:3001/users/user',
      {
        newName: name,
        newSurname: surname,
        newEmail: email,
      },
      { withCredentials: true },
    );
    setEditing(false);
    if (email !== originalEmail) {
      await axios.delete('http://localhost:3001/auth/logout', {
        withCredentials: true,
      });
    }
    window.location.reload();
  };

  const handleInputChange = (event: any, label: string) => {
    if (label === 'name') {
      setName(event.target.value);
    } else if (label === 'surname') {
      setSurname(event.target.value);
    } else if (label === 'email') {
      setEmail(event.target.value);
    }
  };

  const inputs = [
    { label: 'name', value: name },
    { label: 'surname', value: surname },
    { label: 'email', value: email },
  ];

  useEffect(() => {
    setName(data?.name || '');
    setSurname(data?.surname || '');
    setEmail(data?.email || '');
  }, []);

  return (
    <StyledUserDataWrapper>
      {img ? (
        <StyledImageFrame>
          <StyledImage src={img} alt="user image" />
          <StyledRemoveButton type="button" onClick={removeImage}>
            X
          </StyledRemoveButton>
        </StyledImageFrame>
      ) : (
        <AddProfilePicture />
      )}
      <StyledData>
        <StyledHeader variant="h4">
          {translate(`settingsPage.profile`)}
        </StyledHeader>
        {inputs.map((input) => (
          <TextField
            key={input.label}
            fullWidth
            label={translate(`settingsPage.${input.label}`)}
            value={input.value}
            disabled={!editing}
            onChange={(e) => handleInputChange(e, input.label)}
          />
        ))}
      </StyledData>
      {!editing ? (
        <StyledEditButton variant="outlined" onClick={() => setEditing(true)}>
          <EditIcon /> {translate(`settingsPage.edit`)}
        </StyledEditButton>
      ) : (
        <StyledEditButton
          variant="outlined"
          color="success"
          onClick={handleUpdate}
        >
          <DoneIcon /> {translate(`settingsPage.save`)}
        </StyledEditButton>
      )}
    </StyledUserDataWrapper>
  );
};
