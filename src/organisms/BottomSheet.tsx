import React, {useState} from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import BottomSheetHeader from '../molecules/BottomSheetHeader';
import TimePicker from '../molecules/TimePicker';
import ButtonAtom from '../molecules/ButtonMolecule';
import TextAtom from '../atoms/TextAtom';
import {DateData} from 'react-native-calendars';
import {Colors} from '../constants/colors';

interface BottomSheetProps {
  date: DateData;
  onClose: () => void;
  onSave: (date: DateData, startTime: string, endTime: string) => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({date, onClose, onSave}) => {
  const [startTime, setStartTime] = useState('6:00 am');
  const [endTime, setEndTime] = useState('8:00 pm');

  return (
    <Modal visible animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.overlay} />
      <View style={styles.sheet}>
        <BottomSheetHeader date={date} onClose={onClose} />
        <View style={styles.timePicker}>
          <TextAtom style={styles.startEndWork}>Start work at:</TextAtom>
          <TimePicker selectedTime={startTime} onSelectTime={setStartTime} />
        </View>
        <View style={styles.timePicker}>
          <TextAtom style={styles.startEndWork}>End work by:</TextAtom>
          <TimePicker selectedTime={endTime} onSelectTime={setEndTime} />
        </View>
        <View style={styles.bottomSheetFooter}>
          <ButtonAtom
            title="Set time"
            onPress={() => onSave(date, startTime, endTime)}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: Colors.darkOverlay,
  },
  sheet: {
    backgroundColor: Colors.grayBackgroundNonTransparent,
    justifyContent: 'space-between',
  },
  startEndWork: {
    marginLeft: 20,
    fontSize: 14,
    marginTop: 20,
  },
  timePicker: {},
  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bottomSheetFooter: {
    padding: 20,
    borderTopColor: Colors.grayBorder,
    borderTopWidth: 1,
  },
});

export default BottomSheet;
