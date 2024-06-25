import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {getTimezone} from '../utils/date';

const Timezone = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Solid.png')} />
      <Text style={{color: 'white'}}>{getTimezone()}</Text>
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
