import { View, Text, Platform, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, TextBox } from '../../components'
import { validateEmail, validateEmpty, validatePassword } from '../../utils/validations'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignUp = (props) => {
  const [name,setName] =useState('')
  const [nameValid,setNamelValid] =useState(true)
  const [email,setEmail] =useState('')
  const [emailValid,setEmailValid] =useState(true)
  const [password,setPassword] =useState('')
  const [passwordValid,setPasswordValid] =useState(true)
  const [confirpassword,setConfirmPassword] =useState('')
  const [confirmpasswordValid,setConfirmPasswordValid] =useState(true)

  useEffect(()=>{

    return(()=>{
    })
  },[])

  async function signUp (){
    setEmailValid(validateEmail(email))
    setPasswordValid(validatePassword(password))
    setConfirmPasswordValid(password===confirpassword)
    setNamelValid(validateEmpty(name))
    if(
      validateEmail(email) && 
      validateEmpty(name) &&
      validatePassword(password) &&
      (password === confirpassword)
    ){
      let Data={
        email:email.toLowerCase(),
        password:password,
        name:name
      }
      let registeredUser =await AsyncStorage.getItem('registeredUser')
      if(registeredUser){
        let temp=JSON.parse(registeredUser)
        console.log('temp::',temp)
        if(temp.filter((d)=>d.email===email.toLowerCase()).length!==0){
          alert('User Already Exist')
          return
        }
        temp.push(Data)
        await AsyncStorage.setItem('registeredUser',JSON.stringify(temp))
        props.navigation.goBack()
      } else{
        await AsyncStorage.setItem('registeredUser',JSON.stringify([Data]))
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
          <Text style={styles.title}>Sign Up</Text>
          <TextBox
            text={name}
            onTextChange={(text)=>setName(text)}
            placeholder={'Enter Full Name'}
            title={'Name'}
            isvalid={nameValid}
            validMessage='Please Enter Valid Name'
          />
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
            validMessage='Password should contain minimum 8 character, alphabet, upper case alphabet, number, and special characters'
            isPassword={true}
          />
          <TextBox
            text={confirpassword}
            onTextChange={(text)=>setConfirmPassword(text)}
            placeholder={'Enter Password'}
            title={'Confirm Password'}
            isvalid={confirmpasswordValid}
            validMessage='Password donot match'
            isPassword={true}
          />

          <View style={styles.textContainer}>
            <Text style={styles.text}>Already Have an account? </Text>
            <Text style={styles.textSignup} onPress={()=>props.navigation.navigate('Login')}>Login</Text>
          </View>

          <Button
            onPress={()=>signUp()}
            title='Sign Up'
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default SignUp