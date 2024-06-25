import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextAtom from '../atoms/TextAtom';
import {calculateCalendarDimensions} from '../utils/calendarDimensions';
import {Colors} from '../constants/colors';

const CalendarHeader: React.FC = () => {
  const {calendarWidth, dayWidth} = calculateCalendarDimensions();

  return (
    <View style={styles.outerContainer}>
      <View style={[styles.header, {width: calendarWidth}]}>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <View
            key={index}
            style={[
              styles.dayContainer,
              {
                width: dayWidth,
              },
            ]}>
            <TextAtom style={styles.day}>{day}</TextAtom>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    borderTopColor: Colors.grayBorder,
    borderBottomColor: Colors.grayBorder,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
  },
  dayContainer: {justifyContent: 'center', alignItems: 'center'},
  day: {
    color: '#AAAAAB',
    fontSize: 14,
  },
});

export default CalendarHeader;
