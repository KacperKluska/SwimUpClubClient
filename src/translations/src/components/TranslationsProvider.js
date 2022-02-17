import { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import LOCALES from '../utils/locales.js';
import messages from '../messages/index.js';
import flattenMessages from '../services/flattenMessages.ts';

// eslint-disable-next-line react/prop-types
function TranslationsProvider({ children, locale = LOCALES.POLISH }) {
  return (
    <IntlProvider
      locale={locale}
      textComponent={Fragment}
      messages={flattenMessages(messages[locale])}
    >
      {children}
    </IntlProvider>
  );
}

export default TranslationsProvider;
