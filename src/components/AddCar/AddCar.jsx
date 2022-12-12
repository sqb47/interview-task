import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { carCategory } from '../../utils/constants';
import { colors } from '../../utils/ColorTheme';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextBox } from '../TextBox/TextBox';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Button } from '../Button/Button';
import { validateEmpty, validateNumber } from '../../utils/validations';

export const AddCar = (props) => {
  const {visible,setVisible,onSave} = props
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(null);
  const [items, setItems] = useState(carCategory);
  const [categoryValid, setCategoryValid] = useState(true);
  const [color, setColor] = useState('');
  const [colorValid, setColorValid] = useState(true);
  const [model, setMode] = useState('');
  const [modelValid, setModeValid] = useState(true);
  const [horsePower, setHorsePower] = useState('');
  const [horsePowerValid, setHorsePowerValid] = useState(true);

  function _onSave(){
    setCategoryValid(category?true:false)
    setColorValid(validateEmpty(color))
    setModeValid(validateEmpty(model))
    setHorsePowerValid(validateNumber(horsePower))
    if(category &&
      validateEmpty(color) &&
      validateEmpty(model) &&
      validateNumber(horsePower)){
        setCategory(null)
        setColor('')
        setHorsePower('')
        setMode('')
        onSave({
          id:Math.random(),
          model:model,
          horsepower:horsePower,
          color:color,
          category:category,
        })
      }
    console.log('value',category)
    // onSave()
  }

  return (
    <Modal
      onBackButtonPress={()=>{setVisible(false)}}
      onBackdropPress={()=>{setVisible(false)}}
      isVisible={visible}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.heading}>Add New Car</Text>
        <ScrollView>
          <View style={styles.contentContainer}>
            <DropDownPicker
              placeholder='Select Category'
              open={open}
              value={category}
              items={items}
              setOpen={setOpen}
              setValue={setCategory}
              setItems={setItems}
              style={styles.picker}
              dropDownContainerStyle={{}}
            />
            {!categoryValid &&<Text style={styles.errorMessage}>Please Select Category</Text>}
            <TextBox
              text={color}
              containerStyle={styles.textbox}
              onTextChange={(text)=>setColor(text)}
              placeholder={'Enter Color'}
              isvalid={colorValid}
              validMessage='Please Enter Valid Color'
            />
            <TextBox
              text={model}
              containerStyle={styles.textbox}
              onTextChange={(text)=>setMode(text)}
              placeholder={'Enter Car Model'}
              isvalid={modelValid}
              validMessage='Please Enter Valid Car Model'
            />
            <TextBox
              type={'numeric'}
              text={horsePower}
              containerStyle={styles.textbox}
              onTextChange={(text)=>setHorsePower(text)}
              placeholder={'Enter Horse Power'}
              isvalid={horsePowerValid}
              validMessage='Please Enter Valid Horse Power'
            />
            <Button
              title={'Save'}
              onPress={()=>_onSave()}
              buttonStyle={styles.btn}
            />
          </View>
        </ScrollView>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer:{
    backgroundColor:'white',
    borderRadius:wp(3),
    width:wp(90),
    height:'75%',
    paddingHorizontal:wp(3)
  },
  contentContainer:{
    height:hp(70),
    marginTop:hp(4)
  },
  heading:{
    fontSize:wp(7),
    textAlign:'center',
    color:colors.navy,
  },
  textbox:{
    marginHorizontal:0,
    marginVertical:hp(2)
  },
  picker:{
    borderWidth:0, 
    borderBottomWidth:1,
    borderRadius:0, 
    borderBottomColor:'grey',
  },
  btn:{
    marginTop:hp(10),
  },
  errorMessage:{
    color:'#ED4337',
    fontSize:wp(3),
  }
})