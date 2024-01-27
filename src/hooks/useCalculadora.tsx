import {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const ultimaOperacion = useRef<Operadores>();
  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const armarNumero = (numeroText: string) => {
    if (numero.includes('.') && numeroText === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (numeroText === '.') {
        setNumero(numero + numeroText);
      } else if (numeroText === '0' && numero.includes('.')) {
        setNumero(numero + numeroText);
      } else if (numeroText !== '0' && !numero.includes('.')) {
        setNumero(numeroText);
      } else if (numeroText === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroText);
      }
    } else {
      setNumero(numero + numeroText);
    }
  };

  const posNeg = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const delEndEntrance = () => {
    let negativo = '';
    let numeroTemp = numero;

    if (numero.includes('-')) {
      negativo = '-';
      numeroTemp = numero.substring(1);
    }

    if (numeroTemp.length > 1) {
      setNumero(negativo + numeroTemp.slice(0, -1));
    } else {
      setNumero('0');
    }
  };

  const changeNumAnte = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const btnDividir = () => {
    changeNumAnte();
    ultimaOperacion.current = Operadores.dividir;
  };
  const btnMultiplicar = () => {
    changeNumAnte();
    ultimaOperacion.current = Operadores.multiplicar;
  };
  const btnSumar = () => {
    changeNumAnte();
    ultimaOperacion.current = Operadores.sumar;
  };
  const btnRestar = () => {
    changeNumAnte();
    ultimaOperacion.current = Operadores.restar;
  };

  const calcular = () => {
    const num1 = Number(numeroAnterior);
    const num2 = Number(numero);

    const {dividir, multiplicar, sumar, restar} = Operadores;
    switch (ultimaOperacion.current) {
      case dividir:
        setNumero(`${num1 / num2}`);
        break;
      case multiplicar:
        setNumero(`${num1 * num2}`);
        break;
      case sumar:
        setNumero(`${num1 + num2}`);
        break;
      case restar:
        setNumero(`${num1 - num2}`);
        break;
      default:
        break;
    }
    setNumeroAnterior('0');
  };

  return {
    numero,
    numeroAnterior,
    limpiar,
    posNeg,
    armarNumero,
    delEndEntrance,
    calcular,
    btnDividir,
    btnMultiplicar,
    btnSumar,
    btnRestar,
  };
};
