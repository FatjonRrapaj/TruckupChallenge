export const getTimezone = (): string => {
  const zone = new Date()
    .toLocaleTimeString('en-us', {timeZoneName: 'long'})
    .split(' ')
    .slice(1)
    .join(' ');
  return zone;
};

const convertToMinutes = (time: string): number => {
  const [timePart, period] = time.split(' ');
  let [hours, minutes] = timePart.split(':').map(Number);

  if (period.toLowerCase() === 'pm' && hours !== 12) {
    hours += 12;
  } else if (period.toLowerCase() === 'am' && hours === 12) {
    hours = 0;
  }

  return hours * 60 + minutes;
};

export const compareTimes = (time1: string, time2: string): number => {
  const minutes1 = convertToMinutes(time1);
  const minutes2 = convertToMinutes(time2);

  return minutes1 - minutes2;
};
