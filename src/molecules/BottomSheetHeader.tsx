import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {format} from 'date-fns';
import TextAtom from '../atoms/TextAtom';
import {DateData} from 'react-native-calendars';
import {Colors} from '../constants/colors';

interface BottomSheetHeaderProps {
  date: DateData;
  onClose: () => void;
}

const BottomSheetHeader: React.FC<BottomSheetHeaderProps> = ({
  date,
  onClose,
}) => (
  <View style={styles.container}>
    <View style={styles.bar} />
    <View style={styles.horizontalContainer}>
      <TextAtom style={styles.title}>
        Set availability on {format(date.timestamp, 'MMM dd, yyyy')}
      </TextAtom>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onClose}
        style={styles.closeButton}>
        <Image source={require('../../assets/img/closeX.png')} />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 73,
    borderTopColor: Colors.grayBorder,
    borderBottomColor: Colors.grayBorder,
    borderWidth: 1,
    paddingHorizontal: 20,
  },
  bar: {
    backgroundColor: Colors.grayBackground,
    width: 36,
    height: 5,
    borderRadius: 2.5,
    marginHorizontal: 'auto',
    marginTop: 8,
    marginBottom: 16,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {padding: 4},
});

export default BottomSheetHeader;
