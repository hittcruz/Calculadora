import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {BotonCalc} from '../components/BotonCalc';
import {useCalculadora} from '../hooks/useCalculadora';
{
  /*gris oscuro -> #2D2D2D*/
  /*gris oscuro -> #FF9427*/
}

export const CalculatorScreen = () => {
  const {
    numero,
    numeroAnterior,
    limpiar,
    posNeg,
    delEndEntrance,
    armarNumero,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculatorContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultado}>{numeroAnterior}</Text>
      )}
      <Text style={styles.entrada} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.fila}>
        <BotonCalc text="C" color="#9B9B9B" action={limpiar} />
        <BotonCalc text="+/-" color="#9B9B9B" action={posNeg} />
        <BotonCalc text="del" color="#9B9B9B" action={delEndEntrance} />
        <BotonCalc
          text="÷"
          color="#FF9427"
          textColor="white"
          action={btnDividir}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="7" textColor="white" action={armarNumero} />
        <BotonCalc text="8" textColor="white" action={armarNumero} />
        <BotonCalc text="9" textColor="white" action={armarNumero} />
        <BotonCalc
          text="X"
          color="#FF9427"
          textColor="white"
          action={btnMultiplicar}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="4" textColor="white" action={armarNumero} />
        <BotonCalc text="5" textColor="white" action={armarNumero} />
        <BotonCalc text="6" textColor="white" action={armarNumero} />
        <BotonCalc
          text="—"
          color="#FF9427"
          textColor="white"
          action={btnRestar}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="1" textColor="white" action={armarNumero} />
        <BotonCalc text="2" textColor="white" action={armarNumero} />
        <BotonCalc text="3" textColor="white" action={armarNumero} />
        <BotonCalc
          text="＋"
          color="#FF9427"
          textColor="white"
          action={btnSumar}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="0" textColor="white" ancho action={armarNumero} />
        <BotonCalc text="." textColor="white" action={armarNumero} />
        <BotonCalc
          text="＝"
          color="#FF9427"
          textColor="white"
          action={calcular}
        />
      </View>
    </View>
  );
};

//const styles = StyleSheet.create({});
