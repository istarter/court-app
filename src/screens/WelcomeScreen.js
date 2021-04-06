import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CommonButton from '../components/CommonButton';
import CommonHeader from '../components/CommonHeader';
import CommonInput from '../components/CommonInput';
import HeaderTitle from '../components/HeaderTitle';
import {STYLES} from '../res/Constant';

const WelcomeScreen = () => {
  return (
    <View style={STYLES.container}>
      <CommonHeader btnText={'New here?'} />
      <View style={styles.hero}>
        <HeaderTitle titleText="Welcome back" />

        <CommonInput />
        <CommonButton />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  hero: {
    flex: 0.45,
    // borderWidth: 1,
    justifyContent: 'space-between',
  },
});
