import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CommonButton from '../components/CommonButton';
import CommonHeader from '../components/CommonHeader';
import CommonInput from '../components/CommonInput';
import HeaderTitle from '../components/HeaderTitle';
import {STYLES} from '../res/Constant';
const RegisterScreen = () => {
  return (
    <View style={STYLES.container}>
      <CommonHeader btnText={'Go to login'} />
      <View style={styles.container}>
        <HeaderTitle titleText="New account" />
        <CommonInput />
        <CommonButton />
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    justifyContent: 'space-between',
  },
});
