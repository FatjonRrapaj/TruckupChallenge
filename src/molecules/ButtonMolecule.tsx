import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import {Colors} from '../constants/colors';
import TextAtom from '../atoms/TextAtom';

interface ButtonAtomProps extends TouchableOpacityProps {
  title: string;
  style?: any;
}

const ButtonAtom: React.FC<ButtonAtomProps> = ({title, onPress, style}) => (
  <TouchableOpacity
    activeOpacity={0.7}
    style={[styles.button, style]}
    onPress={onPress}>
    <TextAtom fontWeight="bold" style={styles.text}>
      {title}
    </TextAtom>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.secondary,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
  },
  text: {
    color: Colors.darkBackground,
    fontSize: 16,
  },
});

export default ButtonAtom;
