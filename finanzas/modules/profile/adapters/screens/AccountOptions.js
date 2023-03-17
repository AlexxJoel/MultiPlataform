import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Icon } from '@rneui/themed'
import { map } from 'lodash'
import React, { useState, useEffect } from 'react';
import Modal from '../../../../kernel/components/Modal';
import ChangeDisplayName from './components/ChangeDisplayName';
import ChangePassword from './components/ChangePassword';
import ChangeAddress from './components/ChangeAddress';


const AccountOptions = ({ userInfo , setNameUser , setReload  }) => {
  const [showModal, setShowModal] = useState(false)
  const [renderComponent, setRenderComponent] = useState(null)

  const selectComponent = (key) => {
    switch (key) {
      case 'displayName':
        setRenderComponent(<ChangeDisplayName user={userInfo} setShowModal={setShowModal} setReload={setReload}  />)
        setShowModal(true)
        break;
      case 'password':
        setRenderComponent(<ChangePassword userInfo={userInfo} setShowModal={setShowModal} />)
        setShowModal(true)
  
        break;
      case 'address':
        setRenderComponent(<ChangeAddress />)
        setShowModal(true)
  
        break;
  
      default: setRenderComponent(null); setShowModal(false)
        break;
    }
  }

  const menuOptions = generateOptions(selectComponent) //save as array

  return (
    <View>

      {
        map(menuOptions, (option, index) => (

          <ListItem containerStyle={styles.menuIteam} key={index} onPress={option.onPress}>
            <Icon
              name={option.iconLeft} type={option.iconType} color={option.iconColorLeft} />

            <ListItem.Content>
              <ListItem.Title>
                {option.title}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))
      }

      {renderComponent && (
        <Modal show={showModal} setShow={setShowModal} >
          {renderComponent}
        </Modal>
      )}
    </View>
  )
}

const generateOptions = (selectComponent) => (
  [
    {
      title: "Actualizar nombre completo",
      iconType: "material-community",
      iconLeft: "account-circle",
      iconColorLeft: "tomate",
      iconNameRigth: "chevron-right",
      iconColorRigth: "#CCC",
      onPress: () => selectComponent("displayName")

    },
    {
      title: "Actualizar contraseña",
      iconType: "material-community",
      iconLeft: "lock-reset",
      iconColorLeft: "tomate",
      iconNameRigth: "chevron-right",
      iconColorRigth: "#CCC",
      onPress: () => selectComponent("password")

    },
    {
      title: "Actualizar ubicación",
      iconType: "material-community",
      iconLeft: "map-marker",
      iconColorLeft: "tomate",
      iconNameRigth: "chevron-right",
      iconColorRigth: "#CCC",
      onPress: () => selectComponent("address")

    },
  ]
)


const styles = StyleSheet.create({
  menuOptions: {
    borderBottomWidth: 1,
    borderBottomColor: "#E3E3E3"
  }
})
export default AccountOptions