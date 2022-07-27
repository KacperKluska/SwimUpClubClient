import { TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { useEffect, useState } from 'react';
import { useTranslations } from '../../translations/src';
import {
  StyledEditButton,
  StyledHeader,
  StyledUserDetails,
  StyledGrid,
} from './UserDetails.styles';
import { OneColumnLayout } from '../OneColumnLayout/OneColumnLayout.component';
import {
  Details,
  UpdatedDetails,
} from '../../pages/SettingsPage/SettingsPage.component';

interface Props {
  details: Details | null;
  handleUpdateCallback: (updatedData: UpdatedDetails) => void;
}

export const UserDetails = ({ details, handleUpdateCallback }: Props) => {
  const [editing, setEditing] = useState(false);
  const [age, setAge] = useState<number | null>();
  const [weight, setWeight] = useState<number | null>();
  const [height, setHeight] = useState<number | null>();
  const [phoneNumber, setPhoneNumber] = useState('');
  const translate = useTranslations();

  const handleInputChange = (event: any, label: string) => {
    if (label === 'age') {
      setAge(event.target.value);
    } else if (label === 'phoneNumber') {
      setPhoneNumber(event.target.value);
    } else if (label === 'weight') {
      setWeight(event.target.value);
    } else if (label === 'height') {
      setHeight(event.target.value);
    }
  };

  useEffect(() => {
    setAge(details?.age);
    setPhoneNumber(details?.phoneNumber || '');
    setWeight(details?.weight);
    setHeight(details?.height);
  }, []);

  const inputs = [
    { label: 'age', value: age || undefined, editable: true },
    {
      label: 'phoneNumber',
      value: phoneNumber || undefined,
      editable: true,
    },
    { label: 'weight', value: weight || undefined, editable: true },
    { label: 'height', value: height || undefined, editable: true },
    { label: 'gender', value: details?.gender || undefined, editable: false },
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
              disabled={input.editable ? !editing : true}
              onChange={(e) => handleInputChange(e, input.label)}
            />
          ))}
          {!editing ? (
            <StyledEditButton
              variant="outlined"
              onClick={() => setEditing(true)}
            >
              <EditIcon /> {translate(`settingsPage.edit`)}
            </StyledEditButton>
          ) : (
            <StyledEditButton
              variant="outlined"
              color="success"
              onClick={() => {
                handleUpdateCallback({ age, weight, height, phoneNumber });
                setEditing(false);
              }}
            >
              <DoneIcon /> {translate(`settingsPage.save`)}
            </StyledEditButton>
          )}
        </StyledGrid>
      </OneColumnLayout>
    </StyledUserDetails>
  );
};
