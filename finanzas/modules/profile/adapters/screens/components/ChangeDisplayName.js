import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Icon, Input } from '@rneui/base'
import Loading from '../../../../../kernel/components/Loading'
import { getStorage } from 'firebase/storage'
import { getAuth, updateProfile } from 'firebase/auth'

const ChangeDisplayName = ({ user, setShowModal, setNameUser, setReload }) => {
  const auth = getAuth();
  console.log("name", user.displayName)
  const [show, setShow] = useState(false)
  const [name, setName] = useState(user.displayName)


  const changeName = () => {
    setShow(true)
    const storage = getStorage();
    console.log(storage);

    updateProfile(auth.currentUser, { displayName: name.trim() }).then(
      () => { setShow(false), setShowModal(false), setReload(true) }
    ).catch((error) => {
      setShow(false); console.log("Fallo", error)
    })

  }

  return (
    <View>

      <Input
        placeholder='nombre'
        label={"Name"}
        keyboardType='displayName'
        rightIcon={
          <Icon type='material-community' name='account' size={22} />
        }
        value={name}
        containerStyle={styles.input}
        onChange={(event) => setName(event.nativeEvent.text)}
        autoCapitalize='none'
      />

      <Button
        title='Cambiar nombre'
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={changeName}
      />

      <Loading show={show} text='Cargando cambioos..' />
    </View>
  )
}

export default ChangeDisplayName

const styles = StyleSheet.create({

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
    marginVertical: 10,
    marginBottom: 0
  },
  btnContainer: {
    marginBottom: 20,
    width: '100%'
  },
  btn: {
    backgroundColor: '#28a745'
  },
})