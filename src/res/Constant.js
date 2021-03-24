import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export const COLORS = {
  primary: '#284053',
  secondary: '#ef4f4e',
  tertiary: '#ffc10e',
  white: '#FFFFFF',
  grey: '#A0A0A1',
  blue: '#728CFF',
  lightGrey: '#F1F1F1',
};
// export const FONTS = {
//   bold: 'WorkSans-SemiBold',
//   light: 'WorkSans-Light',
//   regular: 'WorkSans-Regular',
// };
// export const IMAGES = {
//   profileImage: require('../assets/profile_client_icon.png'),
//   sliderOne: require('../assets/slider1.png'),
//   sliderTwo: require('../assets/slider2.png'),
//   icon: require('../assets/support_icon.png'),
// };

export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
