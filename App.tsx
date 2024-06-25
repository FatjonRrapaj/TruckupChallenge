import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import CalendarScreen from './src/templates/CalendarScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <CalendarScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#010203',
    flex: 1,
  },
});

export default App;
