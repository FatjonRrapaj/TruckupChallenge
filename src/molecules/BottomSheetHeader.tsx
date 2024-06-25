import React from 'react';
import {View, StyleSheet} from 'react-native';
import {format} from 'date-fns';
import TextAtom from '../atoms/TextAtom';
import {DateData} from 'react-native-calendars';

interface BottomSheetHeaderProps {
  date: DateData;
}

const BottomSheetHeader: React.FC<BottomSheetHeaderProps> = ({date}) => (
  <View style={styles.header}>
    <TextAtom style={styles.title}>
      Set availability on {format(date.timestamp, 'MMM dd, yyyy')}
    </TextAtom>
  </View>
);

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BottomSheetHeader;
