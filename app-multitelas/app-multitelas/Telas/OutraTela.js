import * as React from 'react';
import { Button, View, Text } from 'react-native';

   function OutraTela({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#6CF209'}}>
      <Text> </Text>
      <Button title="Ir para primeira tela" onPress={() => navigation.navigate('Multitelas')} />
       <br/>
      <Button title="Ir para tela 3" onPress={() => navigation.navigate('Tela 3')}/>
      <br/>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
  
export default OutraTela;