import {Dimensions} from 'react-native';

export const calculateCalendarDimensions = () => {
  const screenWidth = Dimensions.get('screen').width;
  const horizontalPadding = 20;

  const calendarWidth = screenWidth - 2 * horizontalPadding;
  const dayWidth = calendarWidth / 7;

  return {calendarWidth, dayWidth};
};
