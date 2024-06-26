import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {DateData} from 'react-native-calendars';

import Calendar from '../organisms/Calendar';
import BottomSheet from '../organisms/BottomSheet';
import TextAtom from '../atoms/TextAtom';
import Timezone from '../molecules/Timezone';

const CalendarScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<DateData | null>(null);
  const [savedShift, setSavedShift] = useState<Shift>({
    date: null,
    startTime: null,
    endTime: null,
  });

  const handleSaveTime = (shift: Shift) => {
    setSavedShift(shift);
  };

  return (
    <View style={styles.container}>
      <TextAtom fontWeight="bold" style={styles.screenTitle}>
        Availability
      </TextAtom>
      <Calendar
        onSelectDate={date => setSelectedDate(date)}
        savedShift={savedShift}
      />
      <Timezone />
      {selectedDate && (
        <BottomSheet
          date={selectedDate}
          onClose={() => setSelectedDate(null)}
          onSave={handleSaveTime}
          savedShift={savedShift}
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
    marginBottom: 30,
    marginTop: 18,
    fontSize: 16,
    lineHeight: 16,
  },
});

export default CalendarScreen;
