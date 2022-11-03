import React from 'react';
import { View, Image, StyleSheet, imager } from 'react-native';



function Imagem({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('@expo/snack-static/react-native-logo.png')}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://th.bing.com/th/id/OIP.QAjTFzT-W0h-L3mf8PJGogHaGF?pid=ImgDet&rs=1 ',
        }}
      />
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.ytimg.com/vi/Qu5WG9uJwVw/maxresdefault.jpg',
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#09F2E4",
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  logo: {
    width: 300,
    height: 200,
  },
});
export default Imagem;
 