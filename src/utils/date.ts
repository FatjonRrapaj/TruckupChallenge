export const getTimezone = (): string => {
  const zone = new Date()
    .toLocaleTimeString('en-us', {timeZoneName: 'long'})
    .split(' ')
    .slice(1)
    .join(' ');
  return zone;
};
