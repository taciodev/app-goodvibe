import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Area,
  Title,
  Button,
  TextButton
} from './styles';

export function Login() {
  const navigation = useNavigation();

  const openScreen = () => {
    navigation.navigate('home');
  }

  const pressHandler = () => {
    Alert.alert("Alerta", "Botão pressionado", [
      { text: "Ok", style: 'default' }
    ])
  }

  return (
    <Container>
      <Area>
        <Title>
          Login
        </Title>
        <Button onPress={() => openScreen()}>
          <TextButton>
            Entrar
          </TextButton>
        </Button>
        <Button onPress={() => pressHandler()}>
          <TextButton>
            Alerta
          </TextButton>
        </Button>
      </Area>
    </Container>
  );
}