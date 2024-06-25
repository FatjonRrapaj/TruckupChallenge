import React, {useState} from 'react';
import {View, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import BottomSheetHeader from '../molecules/BottomSheetHeader';
import TimePicker from '../molecules/TimePicker';
import ButtonAtom from '../atoms/ButtonAtom';
import TextAtom from '../atoms/TextAtom';
import {DateData} from 'react-native-calendars';

interface BottomSheetProps {
  visible: boolean;
  date: DateData;
  onClose: () => void;
  onSave: (date: DateData, startTime: string, endTime: string) => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  visible,
  date,
  onClose,
  onSave,
}) => {
  const [startTime, setStartTime] = useState('06:00');
  const [endTime, setEndTime] = useState('20:00');

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <BottomSheetHeader date={date} />
          <View style={styles.timePicker}>
            <TextAtom>Start work at:</TextAtom>
            <TimePicker selectedTime={startTime} onSelectTime={setStartTime} />
          </View>
          <View style={styles.timePicker}>
            <TextAtom>End work by:</TextAtom>
            <TimePicker selectedTime={endTime} onSelectTime={setEndTime} />
          </View>
          <ButtonAtom
            title="Set time"
            onPress={() => onSave(date, startTime, endTime)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.background} onPress={onClose} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  timePicker: {
    marginVertical: 10,
  },
  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default BottomSheet;
