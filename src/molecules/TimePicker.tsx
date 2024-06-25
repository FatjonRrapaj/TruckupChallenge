import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native';
import HapticFeedback from 'react-native-haptic-feedback';

interface TimePickerProps {
  selectedTime: string;
  onSelectTime: (time: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({
  selectedTime,
  onSelectTime,
}) => {
  const times = Array.from({length: 96}, (_, i) => {
    const hour = Math.floor(i / 4);
    const minute = (i % 4) * 15;
    return `${hour.toString().padStart(2, '0')}:${minute
      .toString()
      .padStart(2, '0')}`;
  });

  const flatListRef = useRef<FlatList>(null);

  const handleScrollEnd = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / ITEM_WIDTH);
    const snappedTime = times[index];
    onSelectTime(snappedTime);
    HapticFeedback.trigger('selection');
  };

  const renderTime = ({item}: ListRenderItemInfo<string>) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.timeText}>{item}</Text>
    </TouchableOpacity>
  );

  const ITEM_WIDTH = 80;
  const selectedIndex = times.findIndex(time => time === selectedTime);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        horizontal
        data={times}
        renderItem={renderTime}
        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        onMomentumScrollEnd={handleScrollEnd}
        initialScrollIndex={selectedIndex}
        getItemLayout={(data, index) => ({
          length: ITEM_WIDTH,
          offset: ITEM_WIDTH * index,
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 16,
  },
});

export default TimePicker;
