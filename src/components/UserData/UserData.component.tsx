import { TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { useEffect, useState } from 'react';
import { useTranslations } from '../../translations/src';
import {
  StyledData,
  StyledImage,
  StyledUserDataWrapper,
  StyledEditButton,
  StyledHeader,
  StyledImageFrame,
  StyledRemoveButton,
  StyledTwoColumnsLayout,
} from './UserData.styles';
import {
  Data,
  UpdatedData,
} from '../../pages/SettingsPage/SettingsPage.component';
import { useUserImage } from '../../hooks/useImage';
import { AddProfilePicture } from '../AddProfilePicture/AddProfilePicture.component';

interface Props {
  data: Data | null;
  handleUpdateCallback: (updatedData: UpdatedData) => void;
  removeImageCallback?: () => void;
  handleImageUpload?: (event: any) => void;
}

export const UserData = ({
  data,
  handleUpdateCallback,
  removeImageCallback,
  handleImageUpload,
}: Props) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const translate = useTranslations();
  const img = useUserImage(data?.photo || '');
  const originalEmail = data?.email;

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
      <StyledHeader variant="h4">
        {translate(`settingsPage.profile`)}
      </StyledHeader>
      <StyledTwoColumnsLayout>
        {img ? (
          <StyledImageFrame>
            <StyledImage src={img} alt="user image" />
            {removeImageCallback && (
              <StyledRemoveButton type="button" onClick={removeImageCallback}>
                X
              </StyledRemoveButton>
            )}
          </StyledImageFrame>
        ) : (
          <AddProfilePicture handleImageUpload={handleImageUpload} />
        )}
        <StyledData>
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
      </StyledTwoColumnsLayout>
      {!editing ? (
        <StyledEditButton variant="outlined" onClick={() => setEditing(true)}>
          <EditIcon /> {translate(`settingsPage.edit`)}
        </StyledEditButton>
      ) : (
        <StyledEditButton
          variant="outlined"
          color="success"
          onClick={() => {
            handleUpdateCallback({ name, surname, email, originalEmail });
            setEditing(false);
          }}
        >
          <DoneIcon /> {translate(`settingsPage.save`)}
        </StyledEditButton>
      )}
    </StyledUserDataWrapper>
  );
};
