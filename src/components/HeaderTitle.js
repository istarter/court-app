import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {COLORS} from '../res/Constant';

const HeaderTitle = ({titleText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{titleText}</Text>
      <Text style={styles.numberText}>Enter your number to continue</Text>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  container: {
    height: scale(60),
    justifyContent: 'space-evenly',
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: scale(23),
  },
  numberText: {
    color: COLORS.grey,
    paddingTop: scale(10),
    fontSize: scale(13),
  },
});
