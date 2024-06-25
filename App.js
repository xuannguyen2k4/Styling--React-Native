import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';

// Square Component
const Square = ({ backgroundColor }) => {
  return <View style={[styles.square, { backgroundColor }]} />;
};

const App = () => {
  return (
    <View style={styles.container}>
      <Square backgroundColor="red" />
      <Square backgroundColor="green" />
      <Square backgroundColor="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default App;