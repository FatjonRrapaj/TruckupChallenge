import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {getTimezone} from '../utils/date';
import TextAtom from '../atoms/TextAtom';
import {Colors} from '../constants/colors';

const Timezone = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/img/globe.png')} />
      <TextAtom>{getTimezone()}</TextAtom>
    </View>
  );
};

export default Timezone;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 12,
    backgroundColor: Colors.grayBackground,
    borderTopColor: Colors.grayBorder,
    borderBottomColor: Colors.grayBorder,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: 30,
  },
});
