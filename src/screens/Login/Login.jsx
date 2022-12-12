import { View, Text, Platform, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, TextBox } from '../../components'
import { validateEmail, validateEmpty } from '../../utils/validations'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Login = (props) => {
  const [email,setEmail] =useState('')
  const [emailValid,setEmailValid] =useState(true)
  const [password,setPassword] =useState('')
  const [passwordValid,setPasswordValid] =useState(true)

  useEffect(()=>{
    AsyncStorage.getItem('user')
    .then((data)=>{
      if(data){
        props.navigation.replace('DashBoard')
      }
    })
    .catch((e)=>{
      console.log(e);
    })
  },[])

  async function login (){
    setEmailValid(validateEmail(email))
    setPasswordValid(validateEmpty(password))
    if(validateEmail(email) && validateEmpty(password)){
      let Data={
        email:email.toLowerCase(),
        password:password,
      }
      let registeredUser =await AsyncStorage.getItem('registeredUser')
      if(registeredUser){
        temp=JSON.parse(registeredUser)
        let user=temp.filter((d)=>d.email===email.toLowerCase())
        if(user.length===0){
          alert('User not registered')
        } else {
          if(user[0].password===password){
            console.log(user)
            AsyncStorage.setItem('user',JSON.stringify(user))
            props.navigation.replace('DashBoard')
          } else {
            alert('Incorrect Password')
          }
        }
        console.log(registeredUser)
      } else {
        alert('User not registered')
      }
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Login</Text>
          <TextBox
            text={email}
            onTextChange={(text)=>setEmail(text)}
            placeholder={'Enter Email'}
            title={'Email'}
            isvalid={emailValid}
            validMessage='Please Enter Valid Email'
          />
          <TextBox
            text={password}
            onTextChange={(text)=>setPassword(text)}
            placeholder={'Enter Password'}
            title={'Password'}
            isvalid={passwordValid}
            validMessage='Please Enter Valid Password'
            isPassword={true}
          />

          <View style={styles.textContainer}>
            <Text style={styles.text}>Donot Have an account? </Text>
            <Text style={styles.textSignup} onPress={()=>props.navigation.navigate('SignUp')}>Sign Up</Text>
          </View>

          <Button
            onPress={()=>login()}
            title='Login'
          />
        </View>
      </ScrollView>
      
    </KeyboardAvoidingView>
  )
}

export default Login