/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React, {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
} from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
//import { useFonts } from 'expo-font';

const FloatingLabelInput=(props)=> {


//Light brown color = '#A3A3A3'
//Dark brown color = '#7E7E7E'

//let [boarderColorForTextInput, setBoarderColorTextInput] = useState(props.valueForCFTI!=''?'#2B95E1':'#A3A3A3');
let [state, setState] = useState(props.valueForCFTI!=''?'outsideTextInput':'insideTextInput');
//let [boarderColorForTextInput, setBoarderColorTextInput] = useState(props.valueForCFTI!=''?'#2B95E1':'#7E7E7E');
let [boarderColorForTextInput, setBoarderColorTextInput] = useState('#7E7E7E');
//let [colorForLabelText, setColorForLabelText] = useState(props.valueForCFTI!=''?'#2B95E1':'#7E7E7E');
let [colorForLabelText, setColorForLabelText] = useState('#7E7E7E');
//let [boarderWidthForTextInput, setBoarderWidthTextInput] = useState(props.valueForCFTI!=''?responsiveWidth(0.6):responsiveWidth(0.3));
let [boarderWidthForTextInput, setBoarderWidthTextInput] = useState(responsiveWidth(0.3));   
  //#2B95E1



/* let [fontsLoaded] = useFonts({
    'raleway-extraLight': require('../assets/fonts/Raleway-ExtraLight.ttf'),
    'raleway-light': require('../assets/fonts/Raleway-Light.ttf'),
    'raleway-bold': require('../assets/fonts/Raleway-Bold.ttf'),
    'raleway-medium': require('../assets/fonts/Raleway-Medium.ttf'),
    'raleway-black': require('../assets/fonts/Raleway-Black.ttf'),
    'raleway-semibold': require('../assets/fonts/Raleway-SemiBold.ttf'),
    'raleway-regular': require('../assets/fonts/Raleway-Regular.ttf'),
  });
 */







  handleFocus = () => {
    //alert('Focus is in TextInput box.')

    setBoarderColorTextInput('#2B95E1');
    setState('outsideTextInput');
    setBoarderWidthTextInput(responsiveWidth(0.6));
    setColorForLabelText('#2B95E1');
     
     
     /* if(props.valueForCFTI=='')
     {
       setState('outsideTextInput')
      }else if(props.valueForCFTI!=''){setState('outsideTextInput')} */
        
    
    }
  
  
  
  handleBlur = () => {
    //alert('Focus is not in TextInput box.')  
    //setBoarderColorTextInput('#7E7E7E');
    
    if(props.valueForCFTI!='')
      {
      setState('outsideTextInput')
      setBoarderColorTextInput('#2B95E1');
      setColorForLabelText('#2B95E1');
      setBoarderWidthTextInput(responsiveWidth(0.6));
      }else if(props.valueForCFTI==''){
        setBoarderColorTextInput('#7E7E7E');
        setColorForLabelText('#7E7E7E');
        setState('insideTextInput');
        setBoarderWidthTextInput(responsiveWidth(0.3));
      }
      
    
    }

  
    
    const labelStyle = {
      position: 'absolute',
      left: responsiveWidth(3),
      //top: state=='insideTextInput'?responsiveHeight(1.5) :responsiveHeight(-2),
      top: state=='insideTextInput'?responsiveHeight(1.5) :responsiveHeight(-2.5),
      //To change the height of Text Label moving up and down can be changed from here i think.
      //fontSize: state=='insideTextInput'? 18 : 14,
      fontSize: state=='insideTextInput'? responsiveFontSize(2.2):responsiveFontSize(1.5),    
      //lineHeight: 84,   
      //backgroundColor: '#000000c0',
      color:colorForLabelText,
      fontFamily: 'raleway-regular',    
       
        
    };
    return (
      <View style={{ paddingTop: 0}}>
         
          <Text style={labelStyle}>
          {props.labelForCustomFloatingTextInputProps}
        </Text>
       
        
        
       
        <TextInput
          
          style={{ 
            //height:responsiveHeight(21),     
            //width:responsiveWidth(66),     
            height:props.heightOfFloatingLabelInput,     
            width:props.widthOfFloatingLabelInput,
            
            
            fontSize: 20, 
            //color: 'purple', 
            borderStyle:'solid',
            
            //borderRadius:5,
            borderRadius:props.boarderRadiusForFloatingLabelInput,
            borderWidth:boarderWidthForTextInput,
            borderColor:boarderColorForTextInput, 
            textAlignVertical: 'top',
            padding:responsiveWidth(2.5),
            }}
          onFocus={handleFocus}
          multiline={true}
           //numberOfLines={5}
           maxLength={100}
           
          onBlur={handleBlur}
          value={props.valueForCFTI}
          onChangeText={(text)=>props.onChangeTextForCFTI(text)}
          //blurOnSubmit
        />
      </View>
    );


  
};


export default FloatingLabelInput;