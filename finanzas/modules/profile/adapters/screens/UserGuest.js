import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Image, Button } from '@rneui/base'

const UserGuest = (props) => {
    const {navigation} = props
    return (
        <View style={styles.container}>
            <ScrollView centerContent={true} style={styles.mx}>
                {/* <Image source={{uri : ''}}></Image> */}
                <Image source={require('../../../../assets/finanzas.png')} resizeMode='contain' style={styles.img}></Image>
                <Text style={styles.title}>Welcome to MoneyPig </Text>
                <Text style={styles.description}>Would you like to save Money?. We can help you, to do or start accout in our  app and discoverd the best way of saving  your money</Text>
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
                        onPress={()=> navigation.navigate('loginStack')}
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
        marginTop:155
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
        margin: 5

    },
    description: {
        textAlign: 'center',
        marginBottom: 20
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
