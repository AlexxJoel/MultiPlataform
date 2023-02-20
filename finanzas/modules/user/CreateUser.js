import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { functions, isEmpty, size } from 'lodash'
import { Image, Input , Button, Icon } from '@rneui/base'
import Loading from '../../kernel/components/Loading'

const CreateUser = () => {
    const payload = {email:'', password:'', repeatPassword:''}

    const [showPassword, setShowPassword] = useState(true)
    const [showRepeatPassword, setShowRepeatPassword] = useState(true)
    const [show, setShow] = useState(false)
    const [error, setError] = useState(payload)
    const [data, setData] = useState(payload)


    const changePayload = (e, type) => {
      setData({...data, [type]: e.nativeEvent.text})
    } 

    const createUser = () => console.log("data", data)

  return (
    <KeyboardAwareScrollView>
        <Image source={require("../../../../assets/presupuesto.png")}  resizeMode="contains" styles={styles.logo}/>
        <View styles={styles.viewForm}>
            <View styles = {styles.container}>
              
              <Input  placeholder='correo' keyboardType='email-address'
                  rigthIcon = { <Icon type='material-community' name='email-outline' size={20} /> }
                  containerStyle = {styles.input} onChange={(e)=> changePayload(e, "email")}
                  errorMessage = {error.email}                />
                  
                  <Input placeholder='contraseña' containerStyle={styles.input} rigthIcon={
                    <Icon type='material-community' size={22} name={showPassword? 'eye-off-outline': 'eye-outline' } onPress={() => console.log(first)}/>
                  } secureTextEntry = {showPassword} onChange={e => changePayload(e, "password")} />

              <Input placeholder='Repetir cotraseña' containerStyle={styles.input} rigthIcon={
                    <Icon type='material-community' size={22} name={showRepeatPassword? 'eye-off-outline': 'eye-outline' } onPress={e=> showRepeatPassword()}/>
                  } secureTextEntry = {showRepeatPassword} onChange={e => changePayload(e, "repeatPAssword")} />

              
              <Button title= 'Crear cuenta' containerStyle={styles.btnContainer} buttonStyle={styles.btn} onPress={createUser} />

            </View>
        </View>
        <Loading show={show} text='Registrar usuario'/>
    </KeyboardAwareScrollView>
  )
}

export default CreateUser



const styles = StyleSheet.create({
  viewForm: {
  
  }, 
  input:{
    width : '100%',
    marginVertical : 28 
  }, 
  container: {

  }, 
  btnContainer:{
    marginVertical : 20, 
    width : '95%'
  }, 
  btn: {
    backgroundColor: '#282587'
  }

})