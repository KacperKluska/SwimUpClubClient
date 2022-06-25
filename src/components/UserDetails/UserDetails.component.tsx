import { TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { useTranslations } from '../../translations/src';
import {
  StyledEditButton,
  StyledHeader,
  StyledUserDetails,
  StyledGrid,
} from './UserDetails.styles';
import { OneColumnLayout } from '../OneColumnLayout/OneColumnLayout.component';
import { Details } from '../../pages/SettingsPage/SettingsPage.component';

interface Props {
  details: Details | null;
}

export const UserDetails = ({ details }: Props) => {
  const [editing, setEditing] = useState(false);
  const translate = useTranslations();
  
  const inputs = [
    { label: 'age', value: details?.age || undefined },
    { label: 'phoneNumber', value: details?.phoneNumber || undefined },
    { label: 'weight', value: details?.weight || undefined },
    { label: 'height', value: details?.height || undefined },
    { label: 'gender', value: details?.gender || undefined },
  ];

  return (
    <StyledUserDetails>
      <OneColumnLayout>
        <StyledHeader variant="h4">
          {translate(`settingsPage.profileDetails`)}
        </StyledHeader>
        <StyledGrid>
          {inputs.map((input) => (
            <TextField
              key={input.label}
              fullWidth
              label={translate(`settingsPage.${input.label}`)}
              value={input.value}
              disabled={!editing}
            />
          ))}
          <StyledEditButton onClick={() => setEditing(true)}>
            <EditIcon /> {translate(`settingsPage.edit`)}
          </StyledEditButton>
        </StyledGrid>
      </OneColumnLayout>
    </StyledUserDetails>
  );
};
