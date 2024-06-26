import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Colors} from '../constants/colors';
import TextAtom from '../atoms/TextAtom';

interface ButtonAtomProps extends TouchableOpacityProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const ButtonAtom: React.FC<ButtonAtomProps> = ({
  title,
  disabled,
  onPress,
  style,
}) => (
  <TouchableOpacity
    disabled={disabled}
    activeOpacity={0.7}
    style={[styles.button, disabled && styles.disabledButton, style]}
    onPress={onPress}>
    <TextAtom
      fontWeight="bold"
      style={[styles.text, disabled && styles.disabledText]}>
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
  disabledButton: {
    backgroundColor: Colors.grayBackground,
  },
  text: {
    color: Colors.darkBackground,
    fontSize: 16,
  },
  disabledText: {
    color: Colors.primaryDark,
  },
});

export default ButtonAtom;
