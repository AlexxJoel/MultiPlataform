import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../../../../config/utils/firebase';
import { Button } from '@rneui/base';

const Profile = () => {
  const logout = () =>{
    auth.signOut()
    .then(console.log("Salio"))
    .catch(console.log("Fallo su salida"))
  } 
 
   return(
     <View>
       <Text>Perfil</Text>
       <Button onPress={logout}>Salir</Button>
     </View>
   )
}

export default Profile

const styles = StyleSheet.create({})