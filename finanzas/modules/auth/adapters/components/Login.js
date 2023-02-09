import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { isEmpty } from 'lodash';
import { ScrollView } from 'react-native';
import { Image, Input, Icon, Button } from 'react-native-elements';
import Loading from '../../../../kernel/component/Loading';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login(props) {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowpassword] = useState(true);
  const [show, setShow] = useState(false)
  const auth = getAuth();

  const login = () => {

    console.log(password , email);

    if (!(isEmpty(email) && isEmpty(password))) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });


    } else setError('Obligatory field')

  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={require('../../../../assets/finanzas.png')}
          resizeMode='contain' style={styles.logotype}
        ></Image>
        <Input
          placeholder='Email' keyboardType='email-address' containerStyle={styles.input} onChange={(e) => {
            setEmail(e.nativeEvent.text)
          }}
          errorMessage={error} autoCapitalize='none'
        ></Input>

        <Input
          placeholder='******' containerStyle={styles.input} onChange={(e) => {
            setPassword(e.nativeEvent.text)
          }}

          secureTextEntry={showPassword}
          rigthIcon={
            <Icon type='material-community' name={showPassword ? 'eye-off-outline' : 'eye-outline'} onPress={() => setShowpassword(!showPassword)} color='#007bff'></Icon>

          }
          errorMessage={error} />

        <Button title={'Start'} Icon={<Icon type='material-community' name='login' size={22} color='#FFF'></Icon>} onPress={login}></Button>

        <Text style={styles.createAccount} onPress={() => console.log("cheer up")}>

          Register!
        </Text>
        <Loading show={show} text='Starting....'></Loading>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "FFF",
    height: '100%'
  },
  logotype: {
    width: "100%",
    height: 150,
    marginTop: 16,
    marginBottom: 16
  }, input: {
    width: '100%',
    marginBottom: 16

  }, createAccount: {
    color: '#007nff',
  }, btnSucces: {
    color: '#FFF',
    backgroundColor: '#28a745'
  }, btnContainer: {
    width: '70%',
    marginStart: 50,
  }
})

