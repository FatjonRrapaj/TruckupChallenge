import React from 'react';
import {View, StyleSheet} from 'react-native';
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
  const times = Array.from({length: 96}, (_, i) => {
    const hour = Math.floor(i / 4);
    const minute = (i % 4) * 15;
    const period = hour >= 12 ? 'pm' : 'am';
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${formattedHour}:${minute.toString().padStart(2, '0')} ${period}`;
  });

  const handleChange = (change: any) => {
    const snappedTime = times[change % times.length];
    onSelectTime(snappedTime);
    HapticFeedback.trigger('selection');
  };

  const renderTime = (item: string) => {
    const isSelected = selectedTime === item;
    const [hourMinute, period] = item.split(' ');

    return (
      <View style={styles.item}>
        <TextAtom
          fontWeight="heavy"
          style={[styles.timeText, isSelected && {color: Colors.secondary}]}>
          {hourMinute}
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

  return (
    <View style={styles.container}>
      <HorizontalPicker
        bounces={false}
        data={times}
        renderItem={renderTime}
        animatedScrollToDefaultIndex
        defaultIndex={selectedIndex}
        itemWidth={ITEM_WIDTH}
        onChange={position => {
          handleChange(position);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginVertical: 24},
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
