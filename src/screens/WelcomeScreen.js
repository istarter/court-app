import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CommonButton from '../components/CommonButton';
import CommonHeader from '../components/CommonHeader';
import CommonNumberInput from '../components/CommonNumberInput';
import HeaderTitle from '../components/HeaderTitle';
import {STYLES} from '../res/Constant';

const WelcomeScreen = () => {
  return (
    <View style={STYLES.container}>
      <CommonHeader btnText={'New here?'} />
      <View
        style={{
          flex: 0.45,
          borderWidth: 1,
          justifyContent: 'space-between',
        }}>
        <HeaderTitle />

        <CommonNumberInput />
        <CommonButton />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
