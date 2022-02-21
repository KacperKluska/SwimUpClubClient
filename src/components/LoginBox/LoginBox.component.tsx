import { Button, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { useTranslations } from '../../translations/src';
import { StyledBox, StyledError, StyledHeader } from './LoginBox.styles';

export const LoginBox = () => {
  const [wrongData, setWrongData] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLogged } = useContext(UserContext);
  const { setUserLogged } = { ...isLogged };
  const translate = useTranslations();

  const handleLogin = () => {
    if (setUserLogged !== undefined) setUserLogged(true);
  };

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPassword(event.target.value);
  };

  return (
    <StyledBox>
      <StyledHeader variant="h4">{translate('loginPage.title')}</StyledHeader>
      <TextField
        error={wrongData}
        id="outlined-error"
        label={translate('loginPage.email')}
        value={email}
        placeholder={translate('loginPage.emailPrompt')}
        onChange={(event) => handleEmailChange(event)}
      />
      <TextField
        error={wrongData}
        id="outlined-error-helper-text"
        label={translate('loginPage.password')}
        value={password}
        placeholder={translate('loginPage.passwordPrompt')}
        onChange={(event) => handlePasswordChange(event)}
      />
      {wrongData ? (
        <StyledError>{translate('loginPage.wrongData')}</StyledError>
      ) : null}
      <Button onClick={handleLogin}>{translate('loginPage.signIn')}</Button>
    </StyledBox>
  );
};
