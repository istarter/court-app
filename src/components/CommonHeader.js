import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
const CommonHeader = ({btnText}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="ios-arrow-undo-outline" size={20} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.textButton}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  container: {
    height: scale(105),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: scale(10),
  },
  buttonContainer: {
    height: scale(45),
    width: scale(100),
    borderWidth: 1,
    borderRadius: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {},
});
