const getMinutes = (time: number) =>
  `0${Math.floor((time / 60000) % 60)}`.slice(-2);
const getSeconds = (time: number) =>
  `0${Math.floor((time / 1000) % 60)}`.slice(-2);

const getMiliSeconds = (time: number) => `0${(time / 10) % 100}`.slice(-2);

export const getTimeString = (time: number): string =>
  `${getMinutes(time)}:${getSeconds(time)}:${getMiliSeconds(time)}`;
