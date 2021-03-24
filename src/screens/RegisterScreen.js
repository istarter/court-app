import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CommonButton from '../components/CommonButton';
import CommonHeader from '../components/CommonHeader';
import CommonNumberInput from '../components/CommonNumberInput';
import HeaderTitle from '../components/HeaderTitle';
import {STYLES} from '../res/Constant';
const RegisterScreen = () => {
  return (
    <View style={STYLES.container}>
      <CommonHeader btnText={'Go to login'} />
      <View
        style={{
          flex: 0.4,
          justifyContent: 'space-between',
        }}>
        <HeaderTitle titleText="New account" />
        <CommonNumberInput />
        <CommonButton />
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
