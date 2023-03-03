import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Button } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import {getAuth, updateProfile} from 'firebase/auth'
import * as Imagepicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { doc, setDoc, getFirestore } from "firebase/firestore";


import Loading from '../../../../kernel/components/Loading'

export default function UserLogged({setReload, user}) {

    const [show, setShow] = useState(false)
    const [text, setText] = useState('Procesando..')

    const removeValue = async () => {
        try {
          setShow(true)
          await AsyncStorage.removeItem('@session')
          setShow(false)
          setReload(true)
        } catch(e) {console.log}
    }

    const uploadImage = async (uri) => {
        setShow(true ); 
        const response = await fetch(uri); 
        // console.log("res", response)

        const {_bodyBlob} = response; 
        const storage = getStorage(); 
        const storageRef = ref(storage, `avatars/${user.uid}`)

        return uploadBytes(storageRef, _bodyBlob); 
    }

    const changeAvatar = async () => {
        const resultPermission = await Permissions.askAsync(Permissions.CAMERA)


        if (resultPermission.permissions.camera.status !== "denied") {
            let result = await Imagepicker.launchImageLibraryAsync({
                mediaTypes: Imagepicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 1, 
                // base64: true,  

            })
    
            if (!result.canceled ) {
                uploadImage(result.assets[0].uri).then((response) => {

                    console.log("imagen actualizada")
                    uploadPhotoProfile()

                } ).catch((err) =>  console.log("error", err))

            }else { console.err("NO IMAGE");  setShow(false)}
        }

    }

    const uploadPhotoProfile = () => {
        const storage = getStorage(); 
        console.log(storage);

        getDownloadURL(ref(storage , `avatars/${user.uid}`)).then( async (url) =>{

            const db = getFirestore(); 

            const response = await addDoc(doc(db, `${user.uid}`), {
                displayName: "",
                photo: "url"
              });

              console.log("respuesta: ", response);
        }).catch((e) => console.log("error", err) )
    }

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Avatar
                    size={"large"}
                    rounded
                    source={ {uri: "https://firebasestorage.googleapis.com/v0/b/finanzas-e7859.appspot.com/o/Profile%2FJZ2h179pX1faAPCcNmARPXy0LsP2.gif?alt=media&token=f844a42a-1766-4c14-9f7d-5b4e3cf55f95"} }
                    containerStyle={styles.avatar}
                >
                    <Avatar.Accessory size={22} onPress={ changeAvatar }/>
                </Avatar>
              
                <View >
                    <Text style={styles.displayName}>{ user.providerData[0].displayName? user.providerData[0].displayName : "Anónimo " }</Text>
                    <Text >{ user.providerData[0].email }</Text>
                </View>
            </View>

            <Button title={"Cerrar Sesión"} buttonStyle={styles.btn}
             onPress={ removeValue }/>

             <Loading show={show} text={text}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        minHeight: "100%", 
        backfaceVisibility: "#FFF"
    }, 
    btn: {
        marginTop: 30, 
        borderRadius: 0, 
        backgroundColor: "tomato", 
        paddingVertical: 10
    }, 
    infoContainer: {
        alignItems: "center", 
        justifyContent: "center", 
        flexDirection:"row",
        paddingVertical: 30
    }, 
    avatar:{
        marginRight: 16, 

    },
 
    displayName: {
        fontWeight: "bold", 
        paddingBottom: 5
    }
})