// In a new file, BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Using Expo's vector icons for simplicity
import MainScreen from '../screens/MainScreen';

const Tab = createBottomTabNavigator();

// Dummy screen components

const SearchScreen = () => (
  <View style={styles.center}><Text>Search Screen</Text></View>
);
const ProfileScreen = () => (
  <View style={styles.center}><Text>Profile Screen</Text></View>
);

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            // Updated icons to match your request
            if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
            else if (route.name === 'Search') iconName = focused ? 'search' : 'search-outline';
            else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';
            // Applying the purple color when focused
            color = focused ? '#E0B0FF' : color;
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#E0B0FF', // Setting active tint color for icons and text
          tabBarInactiveTintColor: 'gray', // Setting inactive tint color for icons and text
        })}
      >
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };
  
  const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default BottomTabNavigator;
