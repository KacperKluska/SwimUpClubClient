import { ErrorStatus } from './RegisterBox.component';

export const validateFields = (
  name: string,
  surname: string,
  email: string,
  password: string,
  passwordRepeated: string,
  phoneNumber: string,
): { isValid: boolean; message: ErrorStatus } => {
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneNumberPattern = /^\d{9}$/;
  let isValid = false;

  if (
    name === '' ||
    surname === '' ||
    email === '' ||
    password === '' ||
    passwordRepeated === '' ||
    phoneNumber === ''
  ) {
    return { isValid, message: 'EMPTY_FIELDS' };
  }
  if (!emailPattern.test(email)) {
    return { isValid, message: 'WRONG_EMAIL' };
  }
  if (!phoneNumberPattern.test(phoneNumber)) {
    return { isValid, message: 'PHONE_NUMBER_INVALID' };
  }
  if (password !== passwordRepeated) {
    return { isValid, message: 'NOT_IDENTICAL_PASSWORDS' };
  }
  if (!passwordPattern.test(password)) {
    return { isValid, message: 'PASSWORD_INVALID' };
  }
  isValid = true;
  return { isValid, message: 'NONE' };
};
