import { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { colors } from '../../utils/ColorTheme';

export const styles = StyleSheet.create({
  container:{
    flex:1,
    // alignItems:'center',
    paddingHorizontal:wp(2),
    
  },
  contentContainer:{
    justifyContent:'space-around',
    height:hp(95),
    paddingBottom:hp(13),
  },
  title:{
    fontSize:wp(8),
    textAlign:'center',
    color:colors.navy,
  },
  textContainer:{
    flexDirection:'row',
    alignSelf:'center'
  },
  text:{
    color:colors.navy,
    fontSize:wp(4,)
  },
  textSignup:{
    color:colors.orange,
    fontSize:wp(4),
  }
})