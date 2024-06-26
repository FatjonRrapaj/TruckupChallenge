import {DateData} from 'react-native-calendars';

declare global {
  interface Shift {
    date: DateData | null;
    startTime: string | null;
    endTime: string | null;
  }
}
