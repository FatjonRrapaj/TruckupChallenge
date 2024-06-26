import React, {useState} from 'react';
import {View, StyleSheet, Modal, Image} from 'react-native';
import {DateData} from 'react-native-calendars';

import BottomSheetHeader from '../molecules/BottomSheetHeader';
import TimePicker from '../molecules/TimePicker';
import ButtonAtom from '../molecules/ButtonMolecule';
import TextAtom from '../atoms/TextAtom';
import {Colors} from '../constants/colors';
import {compareTimes} from '../utils/date';

interface BottomSheetProps {
  date: DateData;
  onClose: () => void;
  onSave: (shift: Shift) => void;
  savedShift: Shift;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  date,
  savedShift,
  onClose,
  onSave,
}) => {
  const hasOpenedSelectedDay = savedShift.date?.dateString === date.dateString;
  const hasStartTime = hasOpenedSelectedDay && savedShift.startTime;
  const hasEndTime = hasOpenedSelectedDay && savedShift.endTime;
  const [startTime, setStartTime] = useState(
    hasStartTime ? savedShift.startTime : '6:00 am',
  );
  const [endTime, setEndTime] = useState(
    hasEndTime ? savedShift.endTime : '8:00 pm',
  );

  const isIntervalCorrect = compareTimes(startTime!, endTime!) < 0;

  return (
    <Modal visible animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.overlay} />
      <View style={styles.sheet}>
        <BottomSheetHeader date={date} onClose={onClose} />
        <View style={styles.timePicker}>
          <TextAtom style={styles.startEndWork}>Start work at:</TextAtom>
          <TimePicker selectedTime={startTime!} onSelectTime={setStartTime} />
        </View>
        <View style={styles.timePicker}>
          <TextAtom style={styles.startEndWork}>End work by:</TextAtom>
          <TimePicker selectedTime={endTime!} onSelectTime={setEndTime} />
        </View>

        {!isIntervalCorrect && (
          <View style={styles.warningContainer}>
            <Image
              style={styles.img}
              source={require('../../assets/img/warning.png')}
            />
            <TextAtom
              fontFamily="firaCode"
              fontWeight="regular"
              style={styles.warningText}>
              Select an end time that’s later than your start time.
            </TextAtom>
          </View>
        )}
        <View style={styles.bottomSheetFooter}>
          <ButtonAtom
            disabled={!isIntervalCorrect}
            title="Set time"
            onPress={() => {
              onSave({date, startTime, endTime});
              onClose();
            }}
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
  warningContainer: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  warningText: {
    color: Colors.primaryRed,
    fontSize: 14,
    lineHeight: 20,
  },
  img: {marginTop: 6},
});

export default BottomSheet;
