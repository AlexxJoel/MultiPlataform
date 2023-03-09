import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Image } from '@rneui/base'
import * as Permissions from 'expo-permissions'
//npm i expo-permissions
import * as ImagePicker from 'expo-image-picker'
import { result } from 'lodash'
// npm i expo-image-picker
//npx expo install expo-image-picker@~14.0.2 expo-permissions@~14.0.0

const PhotoImage = ({setImage}) => {



  const handleImage = async () =>{
    const resultPermission = await Permissions.askAsync(Permissions.CAMERA)

    if(resultPermission.permissions.camera.status !== "denied"){
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images, 
            allowsEditing: true,
            quality: 1,
            base64: false
        })

        if (!result.canceled) {
            console.log(result.assets)
            setImage(result.assets[0].uri)
        }else console.log("No Selecciono imagen")
    }
  } 

  return (
    <View>
        <Button onPress={handleImage}>Toma foto</Button>
    </View>
  )
}

export default PhotoImage

const styles = StyleSheet.create({})