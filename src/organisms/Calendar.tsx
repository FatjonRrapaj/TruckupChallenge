import React, {useCallback, useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {CalendarList, DateData} from 'react-native-calendars';
import {format} from 'date-fns';
import CalendarHeader from '../molecules/CalendarHeader';
import CalendarDay from '../molecules/CalendarDay';
import {Colors} from '../constants/colors';
import {DayProps} from 'react-native-calendars/src/calendar/day';

interface CalendarProps {
  onSelectDate: (date: DateData) => void;
}

const Calendar: React.FC<CalendarProps> = ({onSelectDate}) => {
  const [_, setSelectedDate] = useState<string | null>(null);

  const handleDayPress = (date: DateData) => {
    setSelectedDate(date.dateString);
    onSelectDate(date);
  };

  const onDayPress = useCallback((date: DateData) => {
    setSelectedDate(date.dateString);
  }, []);

  const dayComponent = useCallback(
    (
      props: React.JSX.IntrinsicAttributes &
        DayProps & {date?: DateData | undefined},
    ) => (
      <CalendarDay
        key={props.date?.timestamp}
        {...props}
        onDayPress={onDayPress}
      />
    ),
    [onDayPress],
  );

  return (
    <>
      <CalendarHeader />
      <CalendarList
        current={format(new Date(), 'yyyy-MM-dd')}
        pastScrollRange={0}
        hideExtraDays={true}
        snapToAlignment="center"
        onDayPress={handleDayPress}
        calendarWidth={Dimensions.get('screen').width}
        disableArrowLeft={true}
        // markedDates={{
        //   [selectedDate || '']: {
        //     selected: true,
        //   },
        // }}
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
