import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../utils/ColorTheme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const Button = (props) => {
  const {title, buttonStyle, textStyle, onPress } = props
  return (
    <TouchableOpacity
      onPress={()=>onPress()}
      style={[styles.btn, buttonStyle]}
    >
      <Text style={[styles.text,textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  btn:{
    backgroundColor:colors.blue,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:wp(6),
    paddingVertical:hp(2),
  },
  text:{
    color:colors.lightOrange,
    fontSize:wp(4)
  }
})