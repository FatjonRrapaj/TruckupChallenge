import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {CalendarList, DateData} from 'react-native-calendars';
import {format} from 'date-fns';
import CalendarHeader from '../molecules/CalendarHeader';
import TextAtom from '../atoms/TextAtom';
import CalendarDay from '../molecules/CalendarDay';

interface CalendarProps {
  onSelectDate: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({onSelectDate}) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDayPress = (day: DateData) => {
    setSelectedDate(day.dateString);
    onSelectDate(new Date(day.dateString));
  };

  const screenWidth = Dimensions.get('screen').width;
  const calendarWidth = screenWidth - 24 * 2;

  return (
    <View style={styles.calendar}>
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
        style={{height: 320}}
        dayComponent={CalendarDay}
        hideDayNames
        theme={{
          todayTextColor: '#fff',
          todayBackgroundColor: '#FF5F5F',

          //   textDayFontFamily: 'YourFontFamily',
          //   textMonthFontFamily: 'YourFontFamily',
          //   textDayHeaderFontFamily: 'YourFontFamily',
          backgroundColor: '#010203',
          calendarBackground: '#010203',
          monthTextColor: '#DFDFDF',
        }}
        scrollEnabled
        pagingEnabled
        hideArrows
        showScrollIndicator={false}
        horizontal={false}
        calendarHeight={320}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  calendar: {
    flex: 1,
  },
});

export default Calendar;
