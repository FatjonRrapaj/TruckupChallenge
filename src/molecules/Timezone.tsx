import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {getTimezone} from '../utils/date';
import TextAtom from '../atoms/TextAtom';

const Timezone = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/img/Solid.png')} />
      <TextAtom style={{color: 'white'}}>{getTimezone()}</TextAtom>
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
    backgroundColor: '#55555650',
    borderTopColor: '#F4F4F424',
    borderBottomColor: '#F4F4F424',
    borderWidth: 1,
    marginTop: 30,
  },
});
