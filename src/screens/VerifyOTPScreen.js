import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CommonButton from '../components/CommonButton';
import CommonHeader from '../components/CommonHeader';
import CommonInput from '../components/CommonInput';
import HeaderTitle from '../components/HeaderTitle';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {STYLES} from '../res/Constant';
import {scale} from 'react-native-size-matters';

const VerifyOTPScreen = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 6;
  return (
    <View style={STYLES.container}>
      <TouchableOpacity style={styles.container}>
        <Icon name="ios-arrow-undo-outline" size={20} />
      </TouchableOpacity>
      <View style={styles.hero}>
        <HeaderTitle titleText="Verify OTP" text="Verify your number" />
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <CommonButton title={'Login'} />
      </View>
    </View>
  );
};

export default VerifyOTPScreen;

const styles = StyleSheet.create({
  container: {
    height: scale(105),
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: scale(10),
  },
  hero: {
    flex: 0.45,
    // borderWidth: 1,
    justifyContent: 'space-between',
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});
