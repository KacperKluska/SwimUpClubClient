type Messages = { [key: string]: string | Messages };

export default function flattenMessages(nestedMessages: Messages, prefix = '') {
  return Object.keys(nestedMessages).reduce<{ [key: string]: string }>(
    (messages, key) => {
      const value = nestedMessages[key];
      const prefixedKey = prefix ? `${prefix}.${key}` : key;

      if (typeof value === 'string') {
        // eslint-disable-next-line no-param-reassign
        messages[prefixedKey] = value;
      } else {
        Object.assign(messages, flattenMessages(value, prefixedKey));
      }

      return messages;
    },
    {},
  );
}
