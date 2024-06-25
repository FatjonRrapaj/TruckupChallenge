import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  Dimensions,
} from 'react-native';
import {format, isToday, isBefore} from 'date-fns';
import {DateData} from 'react-native-calendars';

interface CalendarDayProps {
  date?: DateData;
  onSelect: (date: DateData) => void;
  isSelected: boolean;
}

const CalendarDay: React.FC<CalendarDayProps> = ({
  date,
  onSelect,
  isSelected,
}) => {
  if (!date) {
    return null;
  }

  const screenWidth = Dimensions.get('screen').width;
  const calendarWidth = screenWidth - 24 * 2;
  const dayWidth = calendarWidth / 7;
  const today = new Date();

  const isTodayDay = isToday(date.timestamp);
  const isBeforeDay = isBefore(date.timestamp, today);
  //   const isAfterDay = isAfter(date.timestamp, today);

  const innerDayContainerStyle = [
    styles.innerDayContainer,
    isTodayDay && styles.todayContainer,
  ];

  const dayTextStyle = [
    styles.text,
    isBeforeDay && styles.beforeText,
    isTodayDay && styles.todayText,
  ];

  return (
    <TouchableOpacity style={[styles.container, {width: dayWidth}]}>
      <View style={innerDayContainerStyle as ViewStyle}>
        <Text style={dayTextStyle as ViewStyle}>
          {format(date.timestamp, 'd')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerDayContainer: {
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    //TODO: Colors
    borderRadius: 35 / 2,
  },
  todayContainer: {
    backgroundColor: 'red',
  },
  pastDay: {
    color: 'grey',
  },
  selectedDay: {
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '600',
    color: 'white',
  },
  beforeText: {
    color: '#F4F4F432',
  },
  todayText: {color: 'white'},
});

export default CalendarDay;
