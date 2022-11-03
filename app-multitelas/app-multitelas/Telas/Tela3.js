import * as React from 'react';
import { Button, View, Text } from 'react-native';
  
   function Tela3({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#09F2E4'}}>
      
      <Button title="Ir para o primeira tela" onPress={() => navigation.navigate('Multitelas')} />
      <br/>
      <Button title="Ir para outra tela" onPress={() => navigation.push('OutraTela')}/>
      <br/>
       <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}


  
export default Tela3;