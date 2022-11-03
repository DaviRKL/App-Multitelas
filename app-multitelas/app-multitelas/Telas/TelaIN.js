import * as React from 'react';
import { Button, View, Text } from 'react-native';
  function TelaIN({ navigation }) {
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: '#F2A809' }}>
    
       <Button color="#4682B4" title="Ir para outra tela" onPress={() => navigation.navigate('OutraTela')} />
      <br/>
       <Button color="#4682B4" title="Ir para tela 3"onPress={() => navigation.navigate('Tela 3')} />
       <br/>
        <Button color="#4682B4" title="Ir para tela inicial"onPress={() => navigation.navigate('Tela inicial')} />
        
    </View>
  );
}

 
 export default TelaIN;   