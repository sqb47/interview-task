import { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { colors } from '../../utils/ColorTheme';

export const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    paddingHorizontal:wp(3),
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:hp(3)
  },
  iconContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:wp(22)
  },
  imageIcon:{
    width:wp(10),
    height:wp(10),
  },
  heading:{
    fontSize:wp(7),
    color:colors.navy,
  },
  contentContainer:{
    paddingHorizontal:wp(3),
    paddingBottom:hp(10)
  },
  content:{
    marginVertical:hp(2),
    borderWidth:1,
    borderColor:'grey',
    borderRadius:wp(3),
    padding:wp(3),
  },
  detailContent:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  btnContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:hp(2)
  },
  btn:{
    width:wp(30),
    paddingVertical:hp(1),
  },
  text1:{
    color:'black'
  },
  text2:{
    color:colors.blue
  },

})