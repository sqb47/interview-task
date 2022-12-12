import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { colors } from '../../utils/ColorTheme'

export const TextBox = (props) => {
  const {placeholder, text, containerStyle, inputStyle, onTextChange, title, isvalid, validMessage, isPassword, type} = props
  const [textValue,setTextValue]=useState(text?text:'')
  const [focused,setFocused]=useState(false)
  const [isSecure,setIsSecure]=useState(isPassword?isPassword:false)

  return (
    <View style={[styles.container,containerStyle]}>
      {title && <Text style={styles.text}>{title}</Text>}
      <View style={focused?styles.inputFocused:styles.input}>
        <TextInput
          keyboardType={type?type:"default"}
          placeholder={placeholder?placeholder:'enter Text'}
          secureTextEntry={isSecure}
          placeholderTextColor={'grey'}
          value={textValue}
          style={[
            styles.inputText,
            inputStyle
          ]}
          onFocus={()=>setFocused(true)}
          onBlur={()=>setFocused(false)}
          onChangeText={(text)=>{
            setTextValue(text)
            onTextChange(text)
          }}
        />
        {isPassword&&
        <Text style={styles.passwordShow} onPress={()=>setIsSecure(!isSecure)}>
          {isSecure?'Show':'Hide'}
        </Text>}
      </View>
      {isvalid!==undefined &&
      <>
        {!isvalid && <Text style={styles.error}>{validMessage}</Text>}
      </>}
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal:wp(2),
    marginVertical:hp(1),
  },
  text:{
    color:colors.navy,
    fontSize:wp(4),
    fontWeight:'bold',
  },
  input:{
    borderColor:'grey',
    borderBottomWidth:1,
    flexDirection:'row', 
    alignItems:'center'
  },
  inputFocused:{
    borderColor:colors.blue,
    borderBottomWidth:1,
    flexDirection:'row', 
    alignItems:'center'
  },
  inputText:{
    color:'black',
    flex:1
  },
  passwordShow:{
    fontSize:wp(3),
    color:colors.blue
  },
  error:{
    color:'#ED4337',
    fontSize:wp(3),
  }
})