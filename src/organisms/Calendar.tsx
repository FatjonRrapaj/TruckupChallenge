import React, {useCallback} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {CalendarList, DateData} from 'react-native-calendars';
import {DayProps} from 'react-native-calendars/src/calendar/day';

import {format} from 'date-fns';
import CalendarHeader from '../molecules/CalendarHeader';
import CalendarDay from '../molecules/CalendarDay';
import {Colors} from '../constants/colors';

interface CalendarProps {
  onSelectDate: (date: DateData) => void;
  savedShift: Shift;
}

const Calendar: React.FC<CalendarProps> = ({onSelectDate, savedShift}) => {
  const onDayPress = useCallback(
    (date: DateData) => {
      onSelectDate(date);
    },
    [onSelectDate],
  );

  const dayComponent = useCallback(
    (
      props: React.JSX.IntrinsicAttributes &
        DayProps & {date?: DateData | undefined},
    ) => (
      <CalendarDay
        isSelectedDate={savedShift.date?.dateString === props.date?.dateString}
        key={props.date?.timestamp}
        {...props}
        onDayPress={onDayPress}
      />
    ),
    [onDayPress, savedShift],
  );

  return (
    <>
      <CalendarHeader />
      <CalendarList
        current={format(new Date(), 'yyyy-MM-dd')}
        pastScrollRange={0}
        hideExtraDays={true}
        snapToAlignment="center"
        onDayPress={onDayPress}
        calendarWidth={Dimensions.get('screen').width}
        disableArrowLeft={true}
        style={styles.calendar}
        dayComponent={dayComponent}
        hideDayNames
        theme={{
          textMonthFontFamily: 'Lazzer-Semibold',
          backgroundColor: Colors.darkBackground,
          calendarBackground: Colors.darkBackground,
          monthTextColor: Colors.primary,
          textMonthFontSize: 16,
          textMonthFontWeight: 600,
        }}
        scrollEnabled
        pagingEnabled
        hideArrows
        showScrollIndicator={false}
        horizontal={false}
        calendarHeight={320}
      />
    </>
  );
};

const styles = StyleSheet.create({
  calendar: {height: 320},
});

export default Calendar;
