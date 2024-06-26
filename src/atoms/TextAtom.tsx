import React from 'react';
import {Text, StyleSheet, TextProps} from 'react-native';

import {Colors} from '../constants/colors';

const fontMappings = {
  lazzer: {
    regular: 'Lazzer-Regular',
    bold: 'Lazzer-Bold',
    light: 'Lazzer-Light',
    semiBold: 'Lazzer-SemiBold',
    heavy: 'Lazzer-Heavy',
  },
  firaCode: {
    regular: 'FiraCode-Regular',
    bold: 'FiraCode-Bold',
    light: 'FiraCode-Light',
    semiBold: 'FiraCode-SemiBold',
    heavy: 'FiraCode-Bold',
  },
};

interface TextAtomProps extends TextProps {
  fontFamily?: 'lazzer' | 'firaCode';
  fontWeight?: 'regular' | 'bold' | 'light' | 'semiBold' | 'heavy';
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
    color: Colors.primary,
  },
});

export default TextAtom;
