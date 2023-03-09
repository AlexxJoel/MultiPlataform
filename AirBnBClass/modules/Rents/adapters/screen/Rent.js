import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'

const Rent = ({navigation}) => {

  return (
    <View>
      <Text>Rent</Text>
      <Button on onPress={() => navigation.navigate("soldStack")}>Subir mi depa</Button>
    </View>
  )
}

export default Rent

const styles = StyleSheet.create({})