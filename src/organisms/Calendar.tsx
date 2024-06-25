import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {CalendarList, DateData} from 'react-native-calendars';
import {format} from 'date-fns';
import CalendarHeader from '../molecules/CalendarHeader';
import CalendarDay from '../molecules/CalendarDay';
import {Colors} from '../constants/colors';

interface CalendarProps {
  onSelectDate: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({onSelectDate}) => {
  const [_, setSelectedDate] = useState<string | null>(null);

  const handleDayPress = (day: DateData) => {
    setSelectedDate(day.dateString);
    onSelectDate(new Date(day.dateString));
  };

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
        style={{height: 320}}
        dayComponent={CalendarDay as any}
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

export default Calendar;
