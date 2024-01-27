import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
  textColor?: string;
  ancho?: boolean;
  action: (action: string) => void;
}
export const BotonCalc = ({
  text,
  color = '#2D2D2D',
  textColor = 'black',
  ancho = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text style={{...styles.botonText, color: textColor}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
