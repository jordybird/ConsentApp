import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      {/* Clickable card in the middle of the screen */}
      <TouchableOpacity style={styles.card} onPress={() => alert('Card clicked!')}>
        <Text>Click Me!</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers the card vertically in the container
    alignItems: 'center', // Centers the card horizontally in the container
  },
  card: {
    margin: 20,
    padding: 20,
    borderRadius: 8,
    width: 300,
    height: 500,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // alignItems and justifyContent removed from here since the container takes care of centering
  },
});

export default MainScreen;
