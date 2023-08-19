import React from 'react'
import { View,Text,StyleSheet,Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!!</Text>
      <Text >Warm Regards from Sakshi Mulekar</Text>
      <StatusBar style="auto" />
      <Button title='Go to Details' onPress={()=>navigation.navigate('detail')}/>
      <Button title='Go to counter' onPress={()=>navigation.navigate('counter')}/>
    </View>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'cyan',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      color:'blue'
    }
  });
  