import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import HapticFeedback from 'react-native-haptic-feedback';
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import TextAtom from '../atoms/TextAtom';
import {Colors} from '../constants/colors';

interface TimePickerProps {
  selectedTime: string;
  onSelectTime: (time: string) => void;
}

const ITEM_WIDTH = 96;

const TimePicker: React.FC<TimePickerProps> = ({
  selectedTime,
  onSelectTime,
}) => {
  const times = Array.from({length: 48}, (_, i) => {
    const hour = Math.floor(i / 4);
    const minute = (i % 4) * 15;
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${formattedHour.toString()}:${minute.toString().padStart(2, '0')}`;
  });

  // Duplicate times array to create an infinite loop effect
  const infiniteTimes = [...times, ...times, ...times];

  const handleChange = (change: any) => {
    console.log('change: ', change);
    const snappedTime = infiniteTimes[change % times.length];
    console.log('snappedTime: ', snappedTime);
    onSelectTime(snappedTime);
    HapticFeedback.trigger('selection');
  };

  const renderTime = (item: string) => {
    console.log('item: ', item);
    const isSelected = selectedTime === item;
    const hour = Number(item.split(':')[0]);
    const period = hour >= 12 ? 'pm' : 'am';

    return (
      <View style={styles.item}>
        <TextAtom
          fontWeight="heavy"
          style={[styles.timeText, isSelected && {color: Colors.secondary}]}>
          {item}
        </TextAtom>
        <TextAtom
          fontWeight="bold"
          style={[styles.periodText, isSelected && {color: Colors.secondary}]}>
          {period}
        </TextAtom>
      </View>
    );
  };

  // Calculate initial scroll index
  const selectedIndex = times.findIndex(time => time === selectedTime);
  const initialIndex = selectedIndex + times.length; // Center in the middle set

  return (
    <View style={styles.container}>
      <HorizontalPicker
        bounces={false}
        data={infiniteTimes}
        renderItem={renderTime}
        animatedScrollToDefaultIndex
        defaultIndex={initialIndex}
        itemWidth={ITEM_WIDTH}
        onChange={position => {
          handleChange(position);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: 24},
  item: {
    width: ITEM_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 32,
    lineHeight: 36,
    color: Colors.grayText,
  },
  periodText: {
    fontSize: 16,
  },
});

export default TimePicker;
