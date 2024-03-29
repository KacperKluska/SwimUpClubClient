import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import axios from 'axios';
import { useContext, useState } from 'react';
import { SnackBarContext } from '../../context/SnackBarContext';
import { useTranslations } from '../../translations/src';
import {
  StyledBox,
  StyledError,
  StyledForm,
  StyledHeader,
} from './RegisterBox.styles';
import { validateFields } from './RegisterBox.utils';

export type ErrorStatus =
  | 'EMPTY_FIELDS'
  | 'WRONG_EMAIL'
  | 'NOT_IDENTICAL_PASSWORDS'
  | 'PASSWORD_INVALID'
  | 'UNKNOWN_ERROR'
  | 'PHONE_NUMBER_INVALID'
  | 'NONE';
type Genders = 'Man' | 'Woman' | 'Not binary';
type Roles = 'ADMIN' | 'USER' | 'COACH';

export const RegisterBox = () => {
  // errors
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState<ErrorStatus>('EMPTY_FIELDS');

  // fields
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeated, setPasswordRepeated] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState<Genders>('Not binary');
  const [role, setRole] = useState<Roles>('USER');

  // other
  const translate = useTranslations();
  const { setSnackBar } = useContext(SnackBarContext);

  const handleSnackBarClick = (code: number, msg: string) => {
    if (code === 201) setSnackBar(msg, 'success');
    else setSnackBar(msg, 'error');
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    const validation = validateFields(
      name,
      surname,
      email,
      password,
      passwordRepeated,
      phoneNumber,
    );
    if (!validation.isValid) {
      setError(true);
      setErrorType(validation.message);
      return;
    }
    setError(false);

    try {
      const result = await axios.post(
        'http://localhost:3001/auth/register',
        {
          name,
          surname,
          email,
          password,
          role,
          phoneNumber,
          gender,
        },
        { withCredentials: true },
      );
      handleSnackBarClick(result.data.status, result.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSurname(event.target.value);
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

  const handlePasswordRepeatedChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPasswordRepeated(event.target.value);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPhoneNumber(event.target.value);
  };

  const handleGenderChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newValue = event.target.value;
    if (newValue === 'Man' || newValue === 'Woman' || newValue === 'Not binary')
      setGender(newValue);
  };

  const handleRoleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newValue = event.target.value;
    if (newValue === 'USER' || newValue === 'COACH' || newValue === 'ADMIN')
      setRole(newValue);
  };

  let ErrorMessage = null;
  switch (errorType) {
    case 'WRONG_EMAIL':
      ErrorMessage = (
        <StyledError>{translate('registerPage.wrongEmail')}</StyledError>
      );
      break;
    case 'EMPTY_FIELDS':
      ErrorMessage = (
        <StyledError>{translate('registerPage.emptyData')}</StyledError>
      );
      break;
    case 'NOT_IDENTICAL_PASSWORDS':
      ErrorMessage = (
        <StyledError>
          {translate('registerPage.notIdenticalPasswords')}
        </StyledError>
      );
      break;
    case 'PASSWORD_INVALID':
      ErrorMessage = (
        <StyledError>{translate('registerPage.passwordInvalid')}</StyledError>
      );
      break;
    case 'PHONE_NUMBER_INVALID':
      ErrorMessage = (
        <StyledError>
          {translate('registerPage.phoneNumberInvalid')}
        </StyledError>
      );
      break;
    default:
      ErrorMessage = null;
      break;
  }

  return (
    <StyledForm onSubmit={handleRegister}>
      <StyledBox>
        <StyledHeader variant="h4">
          {translate('registerPage.title')}
        </StyledHeader>
        <TextField
          error={error}
          id="name"
          label={translate('registerPage.name')}
          value={name}
          placeholder={translate('registerPage.namePrompt')}
          onChange={(event) => handleNameChange(event)}
          type="text"
        />
        <TextField
          error={error}
          id="surname"
          label={translate('registerPage.surname')}
          value={surname}
          placeholder={translate('registerPage.surnamePrompt')}
          onChange={(event) => handleSurnameChange(event)}
          type="text"
        />
        <TextField
          error={error}
          id="email"
          label={translate('registerPage.email')}
          value={email}
          placeholder={translate('registerPage.emailPrompt')}
          onChange={(event) => handleEmailChange(event)}
          type="email"
        />
        <TextField
          error={error}
          id="phoneNumber"
          label={translate('registerPage.phoneNumber')}
          value={phoneNumber}
          placeholder={translate('registerPage.phoneNumberPrompt')}
          onChange={(event) => handlePhoneNumberChange(event)}
          type="text"
        />
        <TextField
          error={error}
          id="password"
          label={translate('registerPage.password')}
          value={password}
          placeholder={translate('registerPage.passwordPrompt')}
          onChange={(event) => handlePasswordChange(event)}
          type="password"
        />
        <TextField
          error={error}
          id="passwordRepeated"
          label={translate('registerPage.passwordRepeated')}
          value={passwordRepeated}
          placeholder={translate('registerPage.passwordRepeatedPrompt')}
          onChange={(event) => handlePasswordRepeatedChange(event)}
          type="password"
        />
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue={gender}
            onChange={handleGenderChange}
          >
            <FormControlLabel value="Man" control={<Radio />} label="Male" />
            <FormControlLabel
              value="Woman"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              value="Not binary"
              control={<Radio />}
              label="Not binary"
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Role</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue={role}
            onChange={handleRoleChange}
          >
            <FormControlLabel value="USER" control={<Radio />} label="User" />
            <FormControlLabel value="COACH" control={<Radio />} label="Coach" />
            <FormControlLabel value="ADMIN" control={<Radio />} label="Admin" />
          </RadioGroup>
        </FormControl>
        {error ? ErrorMessage : null}
        <Button variant="outlined" color="primary" type="submit">
          {translate('registerPage.signUp')}
        </Button>
      </StyledBox>
    </StyledForm>
  );
};
