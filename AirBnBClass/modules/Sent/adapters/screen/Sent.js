import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Button , Image} from '@rneui/themed'
import GaleryImagePicker from '../../../../kernel/components/GaleryImagePicker'
import PhotoImage from '../../../../kernel/components/PhotoImage'

const Sent = () => {

  const [image, setImage] = useState(null)

  return (
    <View style={styles.container}> 
      <GaleryImagePicker setImage={setImage}/>
      <PhotoImage setImage={setImage}/>

        <Image source={{uri: image}}  style={{height:150, width:150}}/>

        
        <Image resizeMode='containt' source={require('../../../../assets/logoooooo.png')} style={styles.img}/>
    </View>
  )
}

export default Sent

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    
  }, img: {
    width: 100,
    height: 60,
    resizeMode: 'stretch',
  },
})