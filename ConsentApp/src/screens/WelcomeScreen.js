import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consent IT</Text>
      <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')} // Navigate to LoginScreen
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CreateAccount')} // Navigate to CreateAccountScreen
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF', // Adjusted the comment to match the HEX value
    },
    title: {
      fontSize: 52,
      fontWeight: 'bold',
      color: '#E0B0FF', // This color is now used for the text
      marginBottom: 40,
      marginTop: -150,
      letterSpacing: 0.5,
      
    },
    button: {
      marginVertical: 13,
      padding: 15,
      backgroundColor: '#E0B0FF', // Semi-transparent white button
      borderRadius: 12,
      width: '85%',
      alignItems: 'center',
      marginTop: 15,
      borderWidth: 2, // Set the border width
      borderColor: '#E0B0FF', // A purple border similar to the button text color
      
    },
    buttonText: {
      color: 'white', // Purple text for the buttons
      fontWeight: 'bold', // Keep button text bold
    },
    guestText: {
      color: '#FFFFFF', // White text for "Continue as guest"
      marginTop: 20,
      textDecorationLine: 'underline',
      fontWeight: 'bold', // Keep the text bold
    },
  });
  

export default WelcomeScreen;




