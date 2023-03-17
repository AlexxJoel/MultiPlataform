import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { isEmpty, size } from 'lodash'
import { Image, Input, Button, Icon, Text, Card, Divider } from '@rneui/base'
import Loading from '../../../../../kernel/components/Loading'
import { getAuth, updatePassword, reauthenticateWithCredential, signInWithEmailAndPassword, EmailAuthProvider } from "firebase/auth";


export default function ChangePassword({ userInfo }) {
  const payLoad = {
    password: '',
    repeatPassword: '',
    oldPassword: '',
  }

  const [show, setShow] = useState(false)
  const [error, setError] = useState(payLoad)
  const [data, setData] = useState(payLoad)
  const [showPassword, setShowPassword] = useState(true)
  const [showRepeatPassword, setShowRepeatPassword] = useState(true)
  const auth = getAuth()


  const changePayLoad = (e, type) => {
    setData({ ...data, [type]: e.nativeEvent.text })
  }

  const changePassword = () => {
    if ((size(data.password)) >= 6) {
      setError(payLoad)
      if (data.password == data.repeatPassword && !isEmpty(data.oldPassword)) {
        setError(payLoad)

        setShow(true)

        signInWithEmailAndPassword(auth, userInfo.email, data.oldPassword)
          .then(async (userCredential) => {
            // Signed in     // reauthenticateWithCredential(user, userCredential).then(() => {
            updatePassword(auth.currentUser, data.repeatPassword).then(() => {
              console.log("Password has changed")

              const x = setInterval(function () {
                clearInterval(x)
                setShow(false)
                auth.signOut()
              }, 900)

            }).catch(console.log);   // }).catch(console.log);
          })
          .catch(console.log);

      } else {
        setError({
          password: 'No coinciden las contraseña ',
          repeatPassword: 'No coinciden las contraseña '
        })
      }

    } else {
      setError({
        password: 'Logitud de por lo menos 6 carácteres',
        repeatPassword: 'Logitud de por lo menos 6 carácteres'
      })
    }

  }


  return (
    <KeyboardAwareScrollView>
      <View style={styles.viewForm}>
        <View style={styles.container}>
          <Text style={{ textAlign: "center", fontSize: 22, borderBottomWidth: 1, width: "100%", paddingBottom: 10, marginBottom: 20 }}>Cambiar contraseña</Text>


          <Input
            placeholder='Contraseña actual'
            containerStyle={styles.input}
            rightIcon={
              <Icon
                type='material-community'
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                onPress={() => setShowPassword(!showPassword)}
                size={22}
              />
            }
            secureTextEntry={showPassword}
            onChange={(e) => changePayLoad(e, 'oldPassword')}
            errorMessage={error.oldPassword}
          />

          <Input
            placeholder='Nueva Contraseña'
            containerStyle={styles.input}
            rightIcon={
              <Icon
                type='material-community'
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                onPress={() => setShowPassword(!showPassword)}
                size={22}
              />
            }
            secureTextEntry={showPassword}
            onChange={(e) => changePayLoad(e, 'password')}
            errorMessage={error.password}
          />
          <Input
            placeholder='Repetir Nueva Contraseña'
            containerStyle={styles.input}
            rightIcon={
              <Icon
                type='material-community'
                name={showRepeatPassword ? 'eye-off-outline' : 'eye-outline'}
                onPress={() => setShowRepeatPassword(!showRepeatPassword)}
                size={22}
              />
            }
            secureTextEntry={showRepeatPassword}
            onChange={(e) => changePayLoad(e, 'repeatPassword')}
            errorMessage={error.repeatPassword}
          />
          <Button
            title='Guardar'
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn}
            onPress={changePassword}
          />
        </View>
      </View>
      <Loading show={show} text='Actualizando... Favor de inciar sesión nuevamente' />
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 159,
    marginTop: 60
  },
  viewForm: {
    marginHorizontal: 30
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  input: {
    width: '100%',
    marginVertical: 10
  },
  btnContainer: {
    marginBottom: 20,
    width: '95%'
  },
  btn: {
    backgroundColor: '#28a745'
  }
})