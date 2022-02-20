import { useIntl } from 'react-intl';

export const useTranslations = () => {
  const { formatMessage } = useIntl();

  return (
    path: string,
    values?: {
      [key: string]: string | number;
    },
  ) => formatMessage({ id: path }, values);
};
