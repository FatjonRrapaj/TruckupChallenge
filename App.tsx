import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CalendarScreen from './src/templates/CalendarScreen';
import {Colors} from './src/constants/colors';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <CalendarScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkBackground,
    flex: 1,
  },
});

export default App;
