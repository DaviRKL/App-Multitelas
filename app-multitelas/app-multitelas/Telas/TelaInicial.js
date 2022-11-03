import * as React from 'react';
import { Button, View, Text } from 'react-native';
  function TelaInicial({ navigation }) {
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: '#09F2E4' }}>
    
        <Button color="#4682B4" title="Ir para multi telas" onPress={() => navigation.navigate('Multitelas')} />
        <br/>
        <Button color="#4682B4" title="Ir para imagens"onPress={() => navigation.navigate('Imagens')} />
        <br/>
        <Button color="#4682B4" title="Ir para calculadora"onPress={() => navigation.navigate('Calculadora')} />
    </View>
  );
}

 
 export default TelaInicial;  