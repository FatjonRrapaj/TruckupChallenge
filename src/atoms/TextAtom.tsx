import React from 'react';
import {Text, StyleSheet, TextProps} from 'react-native';

const fontMappings = {
  lazzer: {
    regular: 'Lazzer-Regular',
    bold: 'Lazzer-Bold',
    light: 'Lazzer-Light',
    semiBold: 'Lazzer-SemiBold',
  },
  firaCode: {
    regular: 'FiraCode-Regular',
    bold: 'FiraCode-Bold',
    light: 'FiraCode-Light',
    semiBold: 'FiraCode-SemiBold',
  },
};

interface TextAtomProps extends TextProps {
  fontFamily?: 'lazzer' | 'firaCode';
  fontWeight: 'regular' | 'bold' | 'light' | 'semiBold';
}

const TextAtom: React.FC<TextAtomProps> = ({
  children,
  style,
  fontFamily = 'lazzer',
  fontWeight = 'semiBold',
}) => {
  const selectedFontFamily = fontMappings[fontFamily][fontWeight];

  return (
    <Text style={[styles.text, {fontFamily: selectedFontFamily}, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default TextAtom;
