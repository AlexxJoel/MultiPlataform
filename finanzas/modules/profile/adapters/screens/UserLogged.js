import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function UserLogged() {
    return (
        <View>
            <Text style={styles.a}>Perfil</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    a:{
        marginTop: 30, 
        fontSize: 30,
        textAlign: "center"
    }
})