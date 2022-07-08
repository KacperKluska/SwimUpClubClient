import { TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
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
  const translate = useTranslations();
  const img = useUserImage(data?.photo || '');

  const removeImage = async () => {
    await axios.delete('http://localhost:3001/uploads/file', {
      withCredentials: true,
    });
    window.location.reload();
  };

  const inputs = [
    { label: 'name', value: data?.name },
    { label: 'surname', value: data?.surname },
    { label: 'email', value: data?.email },
  ];

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
          />
        ))}
      </StyledData>
      <StyledEditButton onClick={() => setEditing(true)}>
        <EditIcon /> {translate(`settingsPage.edit`)}
      </StyledEditButton>
    </StyledUserDataWrapper>
  );
};
