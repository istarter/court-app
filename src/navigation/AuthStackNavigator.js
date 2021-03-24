import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {/* <Stack.Screen name="welcome" component={WelcomeScreen} /> */}
        <Stack.Screen name="register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStackNavigator;

const styles = StyleSheet.create({});
