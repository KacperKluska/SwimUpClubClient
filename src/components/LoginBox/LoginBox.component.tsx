import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useTranslations } from '../../translations/src';
import { StyledBox, StyledError, StyledHeader } from './LoginBox.styles';

type ErrorStatus = 'EMPTY_FIELDS' | 'WRONG_DATA';

export const LoginBox = () => {
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState<ErrorStatus>('EMPTY_FIELDS');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLogged, userData } = useContext(UserContext);
  const { setUserLogged } = { ...isLogged };
  const { setUser } = { ...userData };
  const translate = useTranslations();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (email === '' || password === '') {
      setError(true);
      setErrorType('EMPTY_FIELDS');
      return;
    }
    const result = await axios.get('http://localhost:3001/auth/login', {
      withCredentials: true,
      params: {
        email,
        password,
      },
    });
    if (result.data.status !== 200) {
      setError(true);
      setErrorType('WRONG_DATA');
      return;
    }
    if (setUserLogged !== undefined) setUserLogged(true);
    setError(false);
    if (setUser !== undefined) setUser(result.data.data.user);
    navigate('../main-menu', { replace: true });
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

  const ErrorMessage =
    errorType === 'WRONG_DATA' ? (
      <StyledError>{translate('loginPage.wrongData')}</StyledError>
    ) : (
      <StyledError>{translate('loginPage.emptyData')}</StyledError>
    );

  return (
    <StyledBox>
      <StyledHeader variant="h4">{translate('loginPage.title')}</StyledHeader>
      <TextField
        error={error}
        id="email"
        label={translate('loginPage.email')}
        value={email}
        placeholder={translate('loginPage.emailPrompt')}
        onChange={(event) => handleEmailChange(event)}
        type="email"
      />
      <TextField
        error={error}
        id="password"
        label={translate('loginPage.password')}
        value={password}
        placeholder={translate('loginPage.passwordPrompt')}
        onChange={(event) => handlePasswordChange(event)}
        type="password"
      />
      {error ? ErrorMessage : null}
      <Button onClick={handleLogin}>{translate('loginPage.signIn')}</Button>
    </StyledBox>
  );
};
