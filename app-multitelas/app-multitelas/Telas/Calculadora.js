import React, { useState } from 'react';
import { Button, TextInput, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

 function Calc({navigation}) {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  


  const calcular = () => {
    let resultado = x + y;
    alert(`${x} + ${y} = ${resultado}`);
    setX('');
    setY('');
    
  };
   const subtrair = () => {
    let resultado = x - y;
    alert(`${x} - ${y} = ${resultado}`);
    setX('');
    setY('');
    
  };
   const multiplicar = () => {
  
    let resultado = x*y;
    alert(`${x} x ${y} = ${resultado}`);
    setX('');
    setY('');
    
  };
   const dividir = () => {
    let resultado = x / y;
    alert(`${x} / ${y} = ${resultado}`);
    setX('');
    setY('');
    
  };
   const pot = () => {
    let r=1
     for(let i=0; i< y; i++)    {
      r*=x;
    }
    alert(`${x} elevado a ${y} é igual a = ${r}`);
    setX('');
    setY('');
    
  };
   const areaR = () => {
    let resultado = x * y;
    alert(`A área do retângulo é = ${resultado}`);
    setX('');
    setY('');
    
  };
   const areaL = () => {
    let resultado = x * y/2;
    alert(`A área do losango é = ${resultado}`);
    setX('');
    setY('');
    }
    const areaT = () => {

    let resultado = x * y /2;
    alert(`A área do triângulo é = ${resultado}`);
    setX('');
    setY('');
    
  };
  return (
    
    <View style={styles.container}>

      <Text style={{color:'#fff',fontSize:30}}>CALCULADORA</Text>
      <Text style={{color:'#fff',paddingTop:5}}>Digite um número</Text>
      <TextInput 
        style={styles.textInput}
        placeholder=" Número" placeholderTextColor="#fff"
        keyboardType="number-pad"
        onChangeText={(texto) => setX(parseInt(texto))}
        value={x}
      />
      <Text style={{color:'#fff'}}>Digite outro número</Text>
      <TextInput
        style={styles.textInput}
        placeholder=" Número" placeholderTextColor="#fff"
        keyboardType="number-pad"
        onChangeText={(texto) => setY(parseInt(texto))}
        value={y}
      />
      <View style={{marginTop:5}}>
      <Button color="#4682B4" title="Somar"  onPress={calcular}/>
      </View>
      <View style={{marginTop:5}}>
       <Button color="#4682B4" title="Subtrair" onPress={subtrair}/>
       </View>
        <View style={{marginTop:5}}>
       <Button color="#4682B4" title="Multiplicar" onPress={multiplicar}/>
       </View>
        <View style={{marginTop:5}}>
       <Button color="#4682B4" title="Dividir" onPress={dividir} />
       </View>
       <View style={{marginTop:5}}>
       <Button color="#4682B4" title="Potência" onPress={pot} />
       </View>
        <View style={{marginTop:5}}>
       <Button color="#4682B4" title="Área do retângulo" onPress={areaR}/>
       </View>
        <View style={{marginTop:5}}>
       <Button color="#4682B4" title="Área do losango" onPress={areaL} />
       </View>
         <View style={{marginTop:5}}>
       <Button color="#4682B4" title="Área do triângulo" onPress={areaT} />
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#363636',
    padding: 15
  },
  textInput: {
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#4682B4',
    borderRadius: 6,
    color:'#fff'
  },
});


export default Calc;