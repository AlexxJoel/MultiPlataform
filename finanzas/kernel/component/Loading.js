import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Overlay } from '@rneui/base'

const Loading = (props) => {
    console.log(props)
    const {show,text}= props
  return (
    <Overlay isVisible={show} windowsBackgroundColor='#0003'
    overlayBackgroundColor='transparent'
    overlayStyle={styles.overlay}>
        <View style={styles.container}>
            <ActivityIndicator size='large' color='#007bff'/>
            {text && <Text style={styles.text}>{text}</Text>}
        </View>
    </Overlay>
  )
}

export default Loading

const styles = StyleSheet.create({
    overlay:{
        height:150,
        width:250, 
        backgroundColor: '#FFF',
        borderColor: '#FFF',
        borderWidth:2, 
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center'
    },container:{
        flex:1,
        justifyContent: 'center', 
        alignItems:'center'

    },text:{
        color:'#007bff', 
        textTransform:'uppercase',
        marginTop:10, 
        textAlign:'center'
    }
})