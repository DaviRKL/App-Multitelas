import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaIN from './Telas/TelaIN';
import OutraTela from './Telas/OutraTela';
import Tela3 from './Telas/Tela3';
import Imagem from './Telas/Imagem'
import Calc from './Telas/Calculadora'
import TelaInicial from './Telas/TelaInicial'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela inicial">
      <Stack.Screen name="Tela inicial" component={TelaInicial} />
        <Stack.Screen name="Multitelas" component={TelaIN} />
        <Stack.Screen name="Imagens" component={Imagem} />
        <Stack.Screen name="OutraTela" component={OutraTela} />
        <Stack.Screen name="Tela 3" component={Tela3} />
        <Stack.Screen name="Calculadora" component={Calc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
