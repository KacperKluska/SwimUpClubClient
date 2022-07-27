import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useTranslations } from '../../translations/src';
import { Buttons, StyledPaper } from './ChangePassword.styles';

interface Props {
  handlePasswordChangeCallback: (newPassword: string) => void;
}

export const ChangePassword = ({ handlePasswordChangeCallback }: Props) => {
  const translate = useTranslations();
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordRepeated, setPasswordRepeated] = useState('');

  const handleInputChange = (event: any, label: string) => {
    if (label === 'password') {
      setPassword(event.target.value);
    } else if (label === 'passwordRepeated') {
      setPasswordRepeated(event.target.value);
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handlePasswordChange = () => {
    console.log('password', password);
    console.log('passwordRepeated', passwordRepeated);
    if (password === passwordRepeated) {
      setError(false);
      handlePasswordChangeCallback(password);
    } else {
      setError(true);
    }
  };

  return (
    <StyledPaper>
      <TextField
        key="password"
        fullWidth
        label={translate(`settingsPage.password`)}
        placeholder={translate(`settingsPage.passwordPlaceholder`)}
        value={password}
        onChange={(e) => handleInputChange(e, 'password')}
        type={showPassword ? 'text' : 'password'}
      />
      <TextField
        key="passwordRepeated"
        fullWidth
        error={error}
        label={translate(`settingsPage.passwordRepeated`)}
        placeholder={translate(`settingsPage.passwordRepeatedPlaceholder`)}
        value={passwordRepeated}
        onChange={(e) => handleInputChange(e, 'passwordRepeated')}
        type={showPassword ? 'text' : 'password'}
      />
      <Buttons>
        <Button onClick={handleShowPassword}>
          {!showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </Button>
        <Button onClick={handlePasswordChange}>
          {translate(`settingsPage.changePassword`)}
        </Button>
      </Buttons>
    </StyledPaper>
  );
};
