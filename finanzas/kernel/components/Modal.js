import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Overlay } from '@rneui/base'


const Modal = ({show, setShow, children}) => {
    


  return (
    <Overlay isVisible={show} windowsBackgroundColor="rgba(0,0,0,0.5" overlayStyle={styles.overlay}
    overlayBackgroundColor="transparent"
    onBackdropPress={() => setShow(false)}> 
    {
        children 
    }
    </Overlay>
  )
}

export default Modal

const styles = StyleSheet.create({
    overlay: {
        height:"auto", 
        width: "90%", 
        backgroundColor: "#fff"
    }
})