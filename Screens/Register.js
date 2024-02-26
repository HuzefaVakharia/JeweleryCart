/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { BackHandler, Dimensions, Image, ImageBackground, KeyboardAvoidingView, Modal, SafeAreaView, ScrollView, StatusBar,Keyboard, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';


import
{
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions';


//import { useFonts } from 'expo-font';
import { TextInput } from 'react-native-paper';



import { Button, Card } from '@rneui/themed';

let { height, width } = Dimensions.get('window');

const Register = ({ route, navigation }) =>
{


  let contactNoSame = 0, emailIDSame = 0;
  let [typingInRegister, settypingInRegister] = useState(false);
  const [isKeyboardVisibleInRegister, setKeyboardVisibleInRegister] = useState(false);
  contactNoSame = route.params.sameContactNoPropslabel;
  emailIDSame = route.params.sameEmailPropslabel;


  const contactNoTextInputRef = React.useRef();
  const emailIDTextInputRef = React.useRef();









  /* useEffect(() =>
  {
    getData();
  }, []); */

  const getData = () =>
  {
    try
    {
      AsyncStorage.getItem('NewRegisterationFirstPageData')
        .then(value =>
        {
          if (value != null)
          {
            let user = JSON.parse(value);
            setName(user.Name);
            setPassword(user.Password);
            setShopName(user.Shop_Name);
            setContactNumber(user.Contact_No);
            setEmail(user.Email);

          }
        })
    } catch (error)
    {
      console.log(error);
    }
  }







useEffect(() =>
  {
    getData();
  }, []);







  React.useEffect(() =>
  {
    if (contactNoTextInputRef.current && contactNoSame == 1)
    {
      const unsubscribe = navigation.addListener('focus', () =>
      {
        contactNoTextInputRef.current.focus()
      });
      return unsubscribe;
    }
  }, [navigation, contactNoTextInputRef.current]);


  React.useEffect(() =>
  {
    if (emailIDTextInputRef.current && emailIDSame == 2)
    {
      const unsubscribe = navigation.addListener('focus', () =>
      {
        emailIDTextInputRef.current.focus()
      });
      return unsubscribe;
    }
  }, [navigation, emailIDTextInputRef.current]);


  useEffect(() =>
  {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () =>
      {
        
        //settypingInRegister(true);
        //fetchState();
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () =>
      {
        
        settypingInRegister(false);
        //alert('Keyboard hided....')
      }
    );

    return () =>
    {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);









  /* useEffect(() =>
  {
    const backAction = () =>
    {
      BackHandler.exitApp()

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();     
  }, []); */




  /* let [fontsLoaded] = useFonts({
    'raleway-extraLight': require('../assets/fonts/Raleway-ExtraLight.ttf'),
    'raleway-light': require('../assets/fonts/Raleway-Light.ttf'),
    'raleway-bold': require('../assets/fonts/Raleway-Bold.ttf'),
    'raleway-medium': require('../assets/fonts/Raleway-Medium.ttf'),
    'raleway-black': require('../assets/fonts/Raleway-Black.ttf'),

  }); */



  let [name, setName] = useState('');
  let [shopName, setShopName] = useState('');
  let [contactNumber, setContactNumber] = useState('');
  let [email, setEmail] = useState('');




  let [mobile_no, setMobile_no] = useState('');
  let [password, setPassword] = useState('');


  const [registerFirstScreenModalVisible, setRegisterFirstScreenModalVisible] = useState(true);

  console.log('Mobile Number which received is: ' + mobile_no + ' And password which received is: ' + password)













  const chkAllFieldsEnteredInFirstRegisterScreen = () =>
  {
    //Check for the Name TextInput
    if (!name.trim())
    {
      //alert('Please Enter Name');
      ToastAndroid.showWithGravity(
        'Please Enter Name',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    }
    //Check for the Email TextInput

    if (!password.trim())
    {
      //alert('Please Enter Password');
      ToastAndroid.showWithGravity(
        'Please Enter Password',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    } else if (password.length < 5)
    {
      //alert('Please Enter Password with Minimum 5 characters');
      ToastAndroid.showWithGravity(
        'Please Enter Password with Minimum 5 characters',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    }

    if (!shopName.trim())
    {
      //alert('Please Enter Shop Name');
      ToastAndroid.showWithGravity(
        'Please Enter Shop Name',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    }
    if (!contactNumber.trim())
    {
      //alert('Please Enter Contact Number');
      ToastAndroid.showWithGravity(
        'Please Enter Contact Number',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    } else if (contactNumber.length < 10)
    {
      //alert('Please Enter Mobile Number with Minimum 10 digits');
      ToastAndroid.showWithGravity(
        'Please Enter Mobile Number with Minimum 10 digits',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    } else if (contactNumber.length > 10)
    {
      //alert('Please Enter Mobile Number with Minimum 10 digits');
      ToastAndroid.showWithGravity(
        'Please Enter Mobile Number with Maximum 10 digits only',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    }

    if (!email.trim())
    {
      //alert('Please Enter Email');
      ToastAndroid.showWithGravity(
        'Please Enter Email',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    } else if (!email.match(/\S+@\S+\.\S+/))
    {
      //alert('Please input a valid email');
      ToastAndroid.showWithGravity(
        'Please input a valid email',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    }

    //Checked Successfully
    //Do whatever you want
    //alert('Successfully entered all fields in first Register Page...');
    //setRegisterFirstScren(false);
    navigation.replace('NextRegisterScreen', {
      namePropslabel: name,
      passwordPropslabel: password,
      shopNamePropsLabel: shopName,
      contactNumberPropsLabel: contactNumber,
      emailPropsLabel: email,

    });
    setRegisterFirstScreenModalVisible(false);
  };









  return (
    <SafeAreaView style={ { flex: 1 } }>

      <KeyboardAvoidingView behavior={ "height" } enabled style=
        { { flexGrow: 1, height: height } }>


        <View style={ { height: height, width: width } }>

          <StatusBar backgroundColor="#283E65" barStyle={ 'light-content' } />

          <ImageBackground
            source={ require('../images/login_background.png') }
            resizeMode="cover"
            style={ styles.image }>






























            <Modal
              animationType="slide"
              onRequestClose={ () => BackHandler.exitApp() }
              //Since we are using BackHandler.exitApp() our app from this Register screen will exit when back button pressed.
              transparent={ true }
              visible={ registerFirstScreenModalVisible }
            >
              <View
                style={ {

                  flex: 1,
                  justifyContent: 'center',
                } }>

                 <Image
                  source={ require('../images/main_logo_white.png') }
                  style={ styles.success } />  


                <Card
                  containerStyle={ {
                    height: responsiveHeight(63),
                    width: responsiveWidth(85),
                    borderRadius: responsiveWidth(9),
                    elevation: responsiveWidth(1),
                    marginTop: responsiveHeight(-5),
                    marginLeft: responsiveWidth(7.5),
                   
                  } }>

                  <ScrollView
                    keyboardShouldPersistTaps="always"
                    showsVerticalScrollIndicator={ false }
                    bounces={ false }>

                    <View
                style={ {
                  //backgroundColor: 'cyan',
                  flex: 1,
                  
                  
                  height:typingInRegister==false?responsiveHeight(60):responsiveHeight(76),   

                     /* This View will give our ScrollBar space to move up and down while user Types there details inside TextInput so this is how we can specify area for our Scroll, we can not directly put style={} props inside <ScrollView> tag so we have to put one direct child inside <ScrollView> tag which will specify height for how much ScrollView should scroll. */ 
                    
                } }>

                    <Text style={ styles.textGray }>Sign Up to Continue</Text>







                    <TextInput   
                      style={ styles.textInputStyleOnlyForName }

                      label="Name"
                      onFocus={()=>settypingInRegister(true)}
                      onBlur={()=>settypingInRegister(false)}
                      mode="outlined"
                      value={ name }
                      onChangeText={ (value) => setName(value) }
                      theme={ { roundness: responsiveWidth(10), colors: { primary: '#2B95E1', underlineColor: 'transparent' } } }


                      left={ <TextInput.Icon icon={ require('../images/customer.png') } /> }
                    />










                    <TextInput
                      label="Password"
                      onFocus={()=>settypingInRegister(true)}
                      onBlur={()=>settypingInRegister(false)}
                      style={ styles.textInputStyle }
                      mode="outlined"
                      theme={ { roundness: responsiveWidth(10), colors: { primary: '#2B95E1', underlineColor: 'transparent' } } }
                      value={ password }
                      onChangeText={ (value) => setPassword(value) }
                      secureTextEntry
                      left={ <TextInput.Icon icon={ require('../images/lock.png') } /> }
                    />






                    <TextInput
                      onFocus={()=>settypingInRegister(true)}
                      onBlur={()=>settypingInRegister(false)}
                      style={ styles.textInputStyle }
                      label="Shop Name"

                      mode="outlined"
                      value={ shopName }
                      onChangeText={ (value) => setShopName(value) }
                      theme={ { roundness: responsiveWidth(10), colors: { primary: '#2B95E1', underlineColor: 'transparent' } } }


                      left={ <TextInput.Icon icon={ require('../images/shop_icon.png') } /> }
                    />















                    <TextInput
                      //onFocus={()=>settypingInRegister(true)}
                      //onBlur={()=>settypingInRegister(false)}
                      /* Since Whilte typing Contact Number small keyboard only showing numbers opens, and if we set typingInRegister to true on Focus in this Contact Number TextInput then since the keyboard of number is small, so we see too much space below the Next Button, so do not set typingInRegister to true while typing Contact Number */ 
                      style={ styles.textInputStyleForContactNumber }
                      ref={ contactNoTextInputRef }


                      label="Contact Number"
                      keyboardType={ 'phone-pad' }
                      mode="outlined"
                      value={ contactNumber }
                      onChangeText={ (value) => setContactNumber(value) }
                      theme={ { roundness: responsiveWidth(10), colors: { primary: '#2B95E1', underlineColor: 'transparent' } } }


                      left={ <TextInput.Icon icon={ require('../images/mobile.png') } /> }
                    />
















                    <TextInput
                      style={ [styles.textInputStyle, { backgroundColor: emailIDSame == 'make Red Email field' ? 'red' : 'white' }] }
                      label="Email"
                      onFocus={()=>settypingInRegister(true)}
                      //onBlur={()=>settypingInRegister(false)}
                      ref={ emailIDTextInputRef }
                      onBlur={ () => {
                        emailIDSame = 0;
                         settypingInRegister(false);
                      } }
                      mode="outlined"
                      autoCapitalize='none'
                      value={ email }
                      onChangeText={ (value) => setEmail(value) }
                      theme={ { roundness: responsiveWidth(10), colors: { primary: '#2B95E1', underlineColor: 'transparent' } } }


                      left={ <TextInput.Icon icon={ require('../images/email.png') } /> }
                    />
















                    <Button
                      title="NEXT"
                      onPress={


                        () => { chkAllFieldsEnteredInFirstRegisterScreen() }
                      }

                      titleStyle={ { fontWeight: '700' } }
                      buttonStyle={ {
                        backgroundColor: '#283E65',//#013F66
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 30,
                        height: responsiveHeight(7),
                        width: responsiveWidth(75),
                        marginTop: responsiveHeight(3),
                        marginBottom: responsiveHeight(0),
                      } }

                    />


                  </View>
                  </ScrollView>
                </Card>
                <View 
                style={ styles.doesnothaveAccountStyle }
                
                >
                  <Text >Already have account?</Text>


                  <TouchableOpacity onPress={ () => navigation.replace('LoginScreen') }>
                    <Text style={ styles.signUpStyle }>Sign In</Text>

                  </TouchableOpacity>
                </View>
              </View>
            </Modal>



























          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({



  image: {
    marginTop: responsiveHeight(-5),

    height: responsiveHeight(55),

  },
  success: {
    width: responsiveWidth(60),
    height: responsiveHeight(30),
    marginLeft: responsiveWidth(20),
    marginTop: responsiveHeight(4),

  },
  textInputStyle: {

    marginTop: responsiveHeight(0.2),
    backgroundColor: 'white',

  },
  textInputStyleForContactNumber: {

    marginTop: responsiveHeight(0.2),
    marginBottom: responsiveHeight(3.5),
    backgroundColor: 'white',

  },
  textInputStyleOnlyForName: {


    backgroundColor: 'white',

  },

  textGray: {
    marginTop: responsiveHeight(-0.5),
    fontSize: responsiveHeight(2.5),
    fontFamily: 'raleway-light',
    marginLeft: responsiveWidth(3),

    color: '#808080',


  },

  doesnothaveAccountStyle: {

    fontSize: responsiveWidth(4),
    fontFamily: 'raleway-medium',
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(2),
    flexDirection: 'row',

  },
  signUpStyle: {

    fontSize: responsiveWidth(4.5),
    fontFamily: 'raleway-medium',
    marginLeft: responsiveWidth(2),
    color: 'rgb(50,146, 220)',
    fontStyle: 'bold',


  },
});


export default Register;
