import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {COLORS} from '../res/Constant';

const CommonButton = ({title}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  button: {
    height: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: scale(7),
  },
  buttonText: {
    color: COLORS.white,
    fontSize: scale(15),
    fontWeight: '500',
  },
});
