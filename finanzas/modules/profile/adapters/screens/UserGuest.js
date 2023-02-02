import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Image, Button } from '@rneui/base'

const UserGuest = () => {
    return (
        <View style={styles.container}>
            <ScrollView centerContent={true} style={styles.mx}>
                {/* <Image source={{uri : ''}}></Image> */}
                <Image source={require('../../../../assets/finanzas.png')} resizeMode='contain' style={styles.img}></Image>
                <Text style={styles.title}>Welcome to MoneyPig </Text>
                <Text style={styles.description}>Would you like to save Money?. We can help you, do or start session in our  app and discoverd the best way of saving  your money</Text>
                <View style={styles.viewBtnContainer}>
                    <Button
                        title='Log In'
                        icon={{
                            name: 'login',
                            type: 'material-community',
                            color: 'white',
                            size: 18
                        }}
                        buttonStyle={styles.btn} containerStyle={styles.btnContainer}
                    ></Button>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        flex: 1, 
        justifyContent: 'center', 
        alignItems:'center'
       
    },
    mx: {
        marginLeft: 32,
        marginRight: 32,
    },
    img: {
        width: '100%',
        height: 150,
        marginTop: 10,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        margin: 16

    },
    description: {
        textAlign: 'center',
        marginBottom: 16
    },
    viewBtnContainer:{
        flex:1, 
        alignItems: 'center'

    },
    btn:{
        backgroundColor: 'tomato', 
        color: 'white',
        
    }
})

export default UserGuest
