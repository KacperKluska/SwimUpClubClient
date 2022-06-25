import { TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { useTranslations } from '../../translations/src';
import {
  StyledData,
  StyledImage,
  StyledUserDataWrapper,
  StyledEditButton,
  StyledHeader,
} from './UserData.styles';
import { Data } from '../../pages/SettingsPage/SettingsPage.component';

interface Props {
  data: Data | null;
}

export const UserData = ({ data }: Props) => {
  const [editing, setEditing] = useState(false);
  const translate = useTranslations();

  const inputs = [
    { label: 'name', value: data?.name },
    { label: 'surname', value: data?.surname },
    { label: 'email', value: data?.email },
  ];

  return (
    <StyledUserDataWrapper>
      <StyledImage src="" alt="user image" />
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
