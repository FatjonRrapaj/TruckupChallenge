import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Calendar from '../organisms/Calendar';
import BottomSheet from '../organisms/BottomSheet';
import TextAtom from '../atoms/TextAtom';
import Timezone from '../molecules/Timezone';
import {Colors} from '../constants/colors';

const CalendarScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [_, setAvailability] = useState<
    Record<string, {startTime: string; endTime: string}>
  >({});

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setBottomSheetVisible(true);
  };

  const handleSaveTime = (date: Date, startTime: string, endTime: string) => {
    setAvailability(prev => ({
      ...prev,
      [date.toISOString().split('T')[0]]: {startTime, endTime},
    }));
    setBottomSheetVisible(false);
  };

  return (
    <View style={styles.container}>
      <TextAtom fontWeight="bold" style={styles.screenTitle}>
        Availability
      </TextAtom>
      <Calendar onSelectDate={handleSelectDate} />
      <Timezone />
      {selectedDate && (
        <BottomSheet
          visible={bottomSheetVisible}
          date={selectedDate}
          onClose={() => setBottomSheetVisible(false)}
          onSave={handleSaveTime}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenTitle: {
    marginHorizontal: 'auto',
    color: Colors.primary,
    marginBottom: 30,
    marginTop: 18,
    fontSize: 16,
    lineHeight: 16,
  },
});

export default CalendarScreen;
