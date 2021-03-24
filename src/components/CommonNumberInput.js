import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {COLORS} from '../res/Constant';

const CommonNumberInput = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mobile}>Mobile number</Text>
      <TextInput placeholder="Enter number/email" style={styles.input} />
    </View>
  );
};

export default CommonNumberInput;

const styles = StyleSheet.create({
  container: {
    height: scale(100),
    justifyContent: 'center',
  },
  mobile: {
    color: COLORS.grey,
    paddingBottom: scale(7),
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    height: scale(55),
    borderRadius: scale(5),
    borderColor: COLORS.grey,
    paddingLeft: 13,
    fontSize: scale(14.5),
  },
});
