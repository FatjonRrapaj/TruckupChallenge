import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonAtomProps extends TouchableOpacityProps {
  title: string;
  style?: any;
}

const ButtonAtom: React.FC<ButtonAtomProps> = ({title, onPress, style}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default ButtonAtom;
