import { View, Text, KeyboardAvoidingView, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import DropDownPicker from 'react-native-dropdown-picker';
import { AddCar, Button } from '../../components';
import { addIcon, logoutIcon } from '../../assets';
import { colors } from '../../utils/ColorTheme';
import { carsData } from '../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';



const DashBoard = (props) => {
  const [modalVisible, setModalVisible]=useState(false)
  const [data, setData]=useState(carsData)
  const [editIndex, setEditIndex] = useState(-1);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.header}>
        <Text style={styles.heading}>Dashboard</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={()=>{
              setModalVisible(true)
              setEditIndex(-1)
            }}
          >
            <Image
              source={addIcon}
              resizeMode={'contain'}
              style={[styles.imageIcon,{tintColor:colors.blue}]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async ()=>{
              await AsyncStorage.removeItem('user')
              props.navigation.replace('Login')
            }}
          >
            <Image
              source={logoutIcon}
              resizeMode={'contain'}
              style={[styles.imageIcon,{tintColor:colors.orange}]}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView>
        <View style={styles.contentContainer}>
          {data.map((cars,i)=>(
            <View style={styles.content}>
              <Text style={styles.heading}>Car Details</Text>
              <View style={styles.detailContent}>
                <Text style={styles.text1}>Car Model:</Text>
                <Text style={styles.text2}>{cars.model}</Text>
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.text1}>Color:</Text>
                <Text style={styles.text2}>{cars.color}</Text>
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.text1}>Horsepower:</Text>
                <Text style={styles.text2}>{cars.horsepower}</Text>
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.text1}>Category:</Text>
                <Text style={styles.text2}>{cars.category}</Text>
              </View>
              <View style={styles.btnContainer}>
                <Button
                  buttonStyle={styles.btn}
                  title="Edit"
                  onPress={()=>{
                    setEditIndex(i)
                    setModalVisible(true)
                  }}
                />
                <Button
                  buttonStyle={styles.btn}
                  title="Delete"
                  onPress={()=>{
                    setData([...data.filter((d)=>d.id!==cars.id)])
                  }}
                />

              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <AddCar
        visible={modalVisible}
        setVisible={setModalVisible}
        onSave={(car)=>{
          if(editIndex>=0){
            let temp=data
            temp[editIndex]=car
            setEditIndex(-1)
            setData([...temp])
          }
          setModalVisible(false)
          data.push(car)
        }}
      />
    </KeyboardAvoidingView>
  )
}

export default DashBoard
