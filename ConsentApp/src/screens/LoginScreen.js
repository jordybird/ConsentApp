import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Protect Yourself,</Text>
      <Text style={[styles.title, { marginBottom: 50 }]}>practice safely.</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={() => console.log('Login logic here')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.dividerLine} />
      </View>
      <TouchableOpacity style={styles.googleButton} onPress={() => console.log('Google Login logic here')}>
        <Image
          source={require('../../assets/google.png')}
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Login with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
        <Text style={styles.accountText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#E0B0FF',
    textAlign: 'center',
    
  },
  input: {
    height: 50,
    width: '85%',
    marginVertical: 12,
    borderWidth: 2,
    borderColor: '#E0B0FF',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  loginButton: {
    marginTop: 30,
    backgroundColor: '#E0B0FF',
    borderRadius: 20,
    width: '85%',
    paddingVertical: 10,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    height: 1,
    flex: 1,
    backgroundColor: '#E0B0FF',
  },
  dividerText: {
    width: 50,
    textAlign: 'center',
    color: '#E0B0FF',
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0B0FF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  accountText: {
    color: '#000000', // Black text
    marginTop: 20, // Adjust the margin as needed
    fontSize: 16, // Adjust the font size as needed
  },
});

export default LoginScreen;

