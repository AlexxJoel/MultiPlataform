import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { isEmpty } from 'lodash';
import { ScrollView } from 'react-native';
import { Image, Input, Icon, Button } from 'react-native-elements';


export default function Login(props) {
    const [error, setError] = useState('');
    const[email,setEmail] = useState('');
    const[password, setPassword]= useState('');
    const login = ()=>{

      if(!(isEmpty(email) || isEmpty(password))){
        console.log('Ready to start session');
      }else setError('Obligatory field')

    }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={require('../../../../assets/finanzas.png')}
          resizeMode='contain' style={styles.logotype}
        ></Image>
        <Input
        placeholder='Email' keyboardType='email-address' containerStyle={styles.input} onChange={(e)=>{
          setEmail(e.nativeEvent.text)
        }}
        errorMessage={error}
        ></Input>
        <Button title={'Start'} Icon={ <Icon type='material-community' name='login' size={22} color='#FFF'></Icon>} onPress={login}></Button>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "FFF", 
    height: '100%'
  }, 
  logotype:{
    width:"100%", 
    height:150,
    marginTop: 16,
    marginBottom: 16
  }
})

