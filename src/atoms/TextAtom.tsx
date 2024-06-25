import React from 'react';
import {Text, StyleSheet, TextProps} from 'react-native';

interface TextAtomProps extends TextProps {
  fontFamily?: string;
}

const TextAtom: React.FC<TextAtomProps> = ({children, style, fontFamily}) => {
  return <Text style={[styles.text, {fontFamily}, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default TextAtom;
