/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
//import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { useFonts } from 'expo-font';
import React, { useEffect, useRef, useState } from 'react';
import
{
  ActivityIndicator,
  BackHandler,
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  View,

} from 'react-native';

import
{
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions';
import AnimatedTextInputFile from '../components/AnimatedTextInputFile';


import { TextInput } from 'react-native-paper';



import { Button, Card } from '@rneui/themed';



let { height, width } = Dimensions.get('window');

const NextRegisterScreen = ({ route, navigation }) =>
{
  let name = '',
    shop_name = '',
    contact_no = '',
    email = '',
    password = '',
    c_password = '';

  name = route.params.namePropslabel;
  password = route.params.passwordPropslabel;
  shop_name = route.params.shopNamePropsLabel;
  c_password = route.params.passwordPropslabel;
  contact_no = route.params.contactNumberPropsLabel;
  email = route.params.emailPropsLabel;

  var userNewRegisteration = {
    Name: name,
    Password: password,
    Shop_Name: shop_name,
    Contact_No: contact_no,
    Email: email,

  }

  AsyncStorage.setItem('NewRegisterationFirstPageData', JSON.stringify(userNewRegisteration));




  const removeData = async () =>
  {
    try
    {
      await AsyncStorage.removeItem('NewRegisterationFirstPageData');
      await AsyncStorage.removeItem('NewRegisterationSecondPageData');
      //navigation.navigate('Login');
    } catch (error)
    {
      console.log(error);
    }
  }

  const [
    selectedStateFromList,
    setselectedStateFromList,
  ] = useState('State');


  const [
    selectedCityFromList,
    setselectedCityFromList,
  ] = useState('City');

  let [stateIDInEditCustomerScreen, setStateIDInEditCustomerScreen] = useState(0);
  let [cityIDInEditCustomerScreen, setCityIDInEditCustomerScreen] = useState(0);
  let [typingInRegisterSecond, settypingInRegisterSecond] = useState(false);

  const [createNewUserResultTrueOrFalse, setCreateNewUserResultTrueOrFalse] =
    useState(false);
  const [createNewUserResultInDigit, setCreateNewUserResultInDigit] =
    useState(0);
  const [createNewUserResultInText, setCreateNewUserResultInText] =
    useState('');

  const [secondRegisterModalVisible, setSecondRegisterModalVisible] =
    useState(true);

  const [searchTextInputForStateGotFocus, setSearchTextInputForStateGotFocus] =
    useState(false);
  const [searchTextInputForCityGotFocus, setSearchTextInputForCityGotFocus] =
    useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  console.log(route.params.namePropslabel);
  /* let [fontsLoaded] = useFonts({
    'raleway-extraLight': require('../assets/fonts/Raleway-ExtraLight.ttf'),
    'raleway-light': require('../assets/fonts/Raleway-Light.ttf'),
    'raleway-bold': require('../assets/fonts/Raleway-Bold.ttf'),
    'raleway-medium': require('../assets/fonts/Raleway-Medium.ttf'),
    'raleway-black': require('../assets/fonts/Raleway-Black.ttf'),
  }); */





  const contactPersonNoTextInputRef = useRef();



  let [isLoading, setIsLoading] = useState(false);



  useEffect(() =>
  {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () =>
      {
        setKeyboardVisible(true); // or some other action
        setSearchTextInputForStateGotFocus(true);
        setSearchTextInputForCityGotFocus(true);
        //settypingInRegisterSecond(true);
        //fetchState();
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () =>
      {
        setKeyboardVisible(false); // or some other action
        setSearchTextInputForStateGotFocus(false);
        setSearchTextInputForCityGotFocus(false);
        settypingInRegisterSecond(false);
        //alert('Keyboard hided....')
      }
    );

    return () =>
    {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);









  useEffect(() =>
  {
    if (createNewUserResultInDigit == 1)
    {
      if (
        createNewUserResultInText == 'User Already exiest with this mobile no!'
      )
      {
        navigation.replace('Register', {
          sameContactNoPropslabel: 1,
          sameEmailPropslabel: 0,
        });

        //contactPersonNoTextInputRef.current?.focus()
      } else if (
        createNewUserResultInText == 'The email has already been taken.'
      )
      {
        navigation.replace('Register', {
          sameContactNoPropslabel: 0,
          sameEmailPropslabel: 2,
        });
      } else
      {
        if (createNewUserResultTrueOrFalse == true)
        {
          removeData();
          navigation.replace('LoginScreen');

        }
      }
    }
  });





  let [website, setWebsite] = useState('');
  let [contact_person, setContactPersonName] = useState('');
  let [contact_person_no, setContactPersonNo] = useState('');
  let [address, setAddress] = useState('');
  let [state, setState] = useState('');
  let [city, setCity] = useState('');
  let [pincode, setPincode] = useState('');




  let [resultForNewUserCreated, setResultForNewUserCreated] = useState([]);












  const registerNewUser = () =>
  {
    let data = {
      name,
      shop_name,
      address,
      contact_no,
      email,
      password,
      c_password,
      website,
      contact_person,
      contact_person_no,
      state,
      city,
      pincode,
    };

    console.log('Register function executing..');

    fetch('https://rajeshwersoftsolution.com/jwelcart/api/registershop', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) =>
    {
      resultForNewUserCreated = response.json();
      resultForNewUserCreated.then((values) =>
      {
        console.log(values);
        //Alert.alert(values.message);
        setIsLoading(false);
        setCreateNewUserResultInDigit(1);
        setCreateNewUserResultTrueOrFalse(values.result);
        setCreateNewUserResultInText(values.message);
        ToastAndroid.showWithGravity(
          values.message,
          ToastAndroid.LONG,
          ToastAndroid.CENTER
        );


      });
    });


  };







  const chkAllFieldsEnteredInNextRegisterScreen = () =>
  {
    //Check for the Name TextInput
    if (!website.trim())
    {
      //alert('Please Enter Website');
      ToastAndroid.showWithGravity(
        'Please Enter Website',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    }
    //Check for the Email TextInput
    if (!contact_person.trim())
    {
      //alert('Please Enter Contact Person Name');
      ToastAndroid.showWithGravity(
        'Please Enter Contact Person Name',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    }
    if (!contact_person_no.trim())
    {
      //alert('Please Enter Contact Person Number');
      ToastAndroid.showWithGravity(
        'Please Enter Contact Person Number',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    } else if (contact_person_no.length < 10)
    {
      //alert('Please Enter Mobile Number with Minimum 10 digits');
      ToastAndroid.showWithGravity(
        'Please Enter Contact Person Number with Minimum 10 digits',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    } else if (contact_person_no.length > 10)
    {
      //alert('Please Enter Mobile Number with Minimum 10 digits');
      ToastAndroid.showWithGravity(
        'Please Enter Contact Person Number with Maximum 10 digits Only',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    }

    if (!address.trim())
    {
      //alert('Please Enter Address');
      ToastAndroid.showWithGravity(
        'Please Enter Address',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    }
    if (!selectedStateFromList.trim())
    {
      //alert('Please Enter State');
      ToastAndroid.showWithGravity(
        'Please Enter State',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    }
    if (!selectedCityFromList.trim())
    {
      //alert('Please Enter City');
      ToastAndroid.showWithGravity(
        'Please Enter City',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    }
    if (!pincode.trim())
    {
      //alert('Please Enter Pincode');
      ToastAndroid.showWithGravity(
        'Please Enter Pincode',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    }
    //Checked Successfully
    //Do whatever you want
    //alert('Successfully entered all fields...');
    setIsLoading(true);

    var userNewRegisterationSecondPageData = {
      Website: website,
      Contact_Person_Name: contact_person,
      Contact_Person_No: contact_person_no,
      Address: address,
      State: state,
      City: city,
      Pincode: pincode,

    }

    AsyncStorage.setItem('NewRegisterationSecondPageData', JSON.stringify(userNewRegisterationSecondPageData));

    registerNewUser();

    //navigation.navigate('LoginScreen')
  };






  useEffect(() =>
  {
    getData();
  }, []);



  const getData = () =>
  {
    try
    {
      AsyncStorage.getItem('NewRegisterationSecondPageData')
        .then(value =>
        {
          if (value != null)
          {
            let user = JSON.parse(value);
            setWebsite(user.Website);
            setContactPersonName(user.Contact_Person_Name);
            setContactPersonNo(user.Contact_Person_No);
            setAddress(user.Address);
            setState(user.State);
            setCity(user.City);
            setPincode(user.Pincode);

          }
        })
    } catch (error)
    {
      console.log(error);
    }
  }




  return (
    <SafeAreaView style={ { flex: 1 } }>
      <View style={ { height: height, width: width } }>

        <StatusBar backgroundColor="#283E65" barStyle={ 'light-content' } />


        <ImageBackground
          source={ require('../images/login_background.png') }
          resizeMode="cover"
          style={ styles.image }>
          <KeyboardAvoidingView
            behavior={ 'height' }
            enabled
            style={ { flexGrow: 1, height: height } }>
            <Modal
              animationType="slide"
              onRequestClose={ () => BackHandler.exitApp() }
              transparent={ true }
              visible={ secondRegisterModalVisible }
              style={ { height: 50, width: 100 } }>
              <View
                style={ {
                  flex: 1,
                  justifyContent: 'center',
                } }>
                <View
                  style={ {
                    marginTop: responsiveHeight(0.5),
                    marginLeft: responsiveWidth(5),
                    marginBottom: responsiveHeight(10),
                  } }>
                  <TouchableOpacity
                    onPress={ () =>
                    {
                      navigation.replace('Register', {
                        sameContactNoPropslabel: '',
                        sameEmailPropslabel: '',
                      }) || setSecondRegisterModalVisible(false);
                    } }>
                    <AntDesign name="left" size={ 24 } color="white" />
                  </TouchableOpacity>
                </View>

                <Image
                  source={ require('../images/main_logo_white.png') }
                  style={ styles.success }
                />

                <Card
                  containerStyle={ {
                    height: responsiveHeight(68),
                    width: responsiveWidth(85),
                    borderRadius: responsiveWidth(9),
                    elevation: responsiveWidth(1),
                    marginTop: responsiveHeight(-7.5),
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


                        height: typingInRegisterSecond == false ? responsiveHeight(68) : responsiveHeight(88),

                        /* This View will give our ScrollBar space to move up and down while user Types there details inside TextInput so this is how we can specify area for our Scroll, we can not directly put style={} props inside <ScrollView> tag so we have to put one direct child inside <ScrollView> tag which will specify height for how much ScrollView should scroll. */

                      } }>
                      <TextInput
                        style={ styles.textInputStyleOnlyForWebsite }
                        label="Website"
                        onFocus={ () => settypingInRegisterSecond(true) }
                        onBlur={ () => settypingInRegisterSecond(false) }
                        mode="outlined"
                        value={ website }
                        onChangeText={ (value) => setWebsite(value) }
                        theme={ {
                          roundness: responsiveWidth(10),
                          colors: {
                            primary: '#2B95E1',
                            underlineColor: 'transparent',
                          },
                        } }
                        left={
                          <TextInput.Icon icon={ require('../images/website.png') } />
                        }
                      />

                      {/*  <Text>
          Values passed from First page: {route.params.namePropslabel}
        </Text> */}

                      <TextInput
                        label="Contact person name"
                        onFocus={ () => settypingInRegisterSecond(true) }
                        onBlur={ () => settypingInRegisterSecond(false) }
                        style={ styles.textInputStyle }
                        mode="outlined"
                        theme={ {
                          roundness: responsiveWidth(10),
                          colors: {
                            primary: '#2B95E1',
                            underlineColor: 'transparent',
                          },
                        } }
                        value={ contact_person }
                        onChangeText={ (value) => setContactPersonName(value) }
                        left={
                          <TextInput.Icon
                            icon={ require('../images/contact_person_name.png') }
                          />
                        }
                      />



                      <TextInput
                        style={ styles.textInputStyle }
                        ref={ contactPersonNoTextInputRef }

                        label="Contact person no"
                        keyboardType={ 'phone-pad' }
                        mode="outlined"
                        value={ contact_person_no }
                        onChangeText={ (value) => setContactPersonNo(value) }
                        theme={ {
                          roundness: responsiveWidth(10),
                          colors: {
                            primary: '#2B95E1',
                            underlineColor: 'transparent',
                          },
                        } }
                        left={
                          <TextInput.Icon
                            icon={ require('../images/contact_person_no.png') }
                          />
                        }
                      />

                      <TextInput
                        style={ styles.textInputStyle }
                        label="Address"
                        onFocus={ () => settypingInRegisterSecond(true) }
                        onBlur={ () => settypingInRegisterSecond(false) }
                        mode="outlined"
                        value={ address }
                        onChangeText={ (value) => setAddress(value) }
                        theme={ {
                          roundness: responsiveWidth(10),
                          colors: {
                            primary: '#2B95E1',
                            underlineColor: 'transparent',
                          },
                        } }
                        left={
                          <TextInput.Icon icon={ require('../images/address.png') } />
                        }
                      />

                      {/* Drop Down for State List starts here */ }

                      <AnimatedTextInputFile
                        show={ 'AnimatedTextInputDDL' }
                        ddlWidth={ 272 }
                        heightOfDDLprops={responsiveHeight(7)} 
                        marginTopPropsForDDL={responsiveHeight(1)}    
                        widthForTextInDDLprops={responsiveWidth(81)}
                        ddlTextmarginLeft={ responsiveWidth(-7) }
                        ddlDownArrowIconmarginLeft={ responsiveWidth(22) }
                        ddlInsideTextFontSize={ responsiveFontSize(2) }
                        //marginVerticalPropsForDDL={0.9}
                        //marginTopPropsForDDL={ 1 }
                        ddlInsideTextFontName={ 'raleway-light' }
                        largeDropDownListTopLabel={ '' }
                        itemIconPropslabel={ '' }
                        modalToplabelProps={ 'Select State' }
                        ddlBoarderColor={ '#8e8e8e' }
                        ddlboarderThickness={ 1 }
                        largeDropDownListOnPressCallThisAPI={
                          'fetch_state_new'
                        }

                        selectSetter={ 'ForState' }
                        selectedStateFromListProps={ selectedStateFromList }
                        setselectedStateFromListProps={ setselectedStateFromList }
                        setselectedStateIDFromListProps={ setStateIDInEditCustomerScreen }


                      />


                      {/* DropDown for State List Ends Here */ }



                      {/* Drop Down for City List starts here */ }

                      <AnimatedTextInputFile
                        show={ 'AnimatedTextInputDDL' }
                        ddlWidth={ 272 }
                        heightOfDDLprops={responsiveHeight(7)} 
                        marginTopPropsForDDL={responsiveHeight(2)}    
                        widthForTextInDDLprops={responsiveWidth(81)}
                        ddlTextmarginLeft={ responsiveWidth(-7) }
                        ddlDownArrowIconmarginLeft={ responsiveWidth(22) }
                        ddlInsideTextFontSize={ responsiveFontSize(2) }
                        //marginVerticalPropsForDDL={0.9}
                        //marginTopPropsForDDL={ 2 }
                        ddlInsideTextFontName={ 'raleway-light' }
                        largeDropDownListTopLabel={ '' }
                        itemIconPropslabel={ '' }
                        modalToplabelProps={ 'Select City' }
                        ddlBoarderColor={ '#8e8e8e' }
                        ddlboarderThickness={ 1 }
                        largeDropDownListOnPressCallThisAPI={
                          'fetch_city_new'
                        }
                        actionprops={ '' }
                        selectSetter={ 'ForCity' }



                        state_idprops={ '32432' }
                        selectedCityFromListProps={ selectedCityFromList }
                        setselectedCityFromListProps={ setselectedCityFromList }
                        setselectedCityIDFromListProps={ setCityIDInEditCustomerScreen }
                      />



                      {/* DropDown for City List Ends Here */ }

                      <TextInput
                        style={ styles.textInputStyle }
                        onFocus={ () => settypingInRegisterSecond(true) }
                        onBlur={ () => settypingInRegisterSecond(false) }
                        label="PinCode"
                        keyboardType={ 'numeric' }
                        mode="outlined"
                        value={ pincode }
                        onChangeText={ (value) => setPincode(value) }
                        theme={ {
                          roundness: responsiveWidth(10),
                          colors: {
                            primary: '#2B95E1',
                            underlineColor: 'transparent',
                          },
                        } }
                        left={
                          <TextInput.Icon icon={ require('../images/pincode.png') } />
                        }
                      />





                      { isLoading == true ? (
                        <ActivityIndicator size="large" color="#013F66" />
                      ) : (
                        <>
                          <Button
                            title="SIGN IN"
                            onPress={
                              () => chkAllFieldsEnteredInNextRegisterScreen()
                              //()=>navigation.navigate('LoginScreen')
                            }
                            titleStyle={ { fontWeight: '700' } }
                            buttonStyle={ {
                              backgroundColor: '#283E65', //#013F66
                              borderColor: 'transparent',
                              borderWidth: 0,
                              borderRadius: 30,
                              height: responsiveHeight(7),
                              width: responsiveWidth(75),
                              marginTop: responsiveHeight(1),
                              marginBottom: responsiveHeight(0),
                            } }

                          />
                        </>
                      ) }
                    </View>
                  </ScrollView>
                </Card>
              </View>
            </Modal>
          </KeyboardAvoidingView>















        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({


  image: {
    height: responsiveHeight(55),
    marginTop: responsiveHeight(-5),

  },
  success: {
    width: responsiveWidth(60),
    height: responsiveHeight(30),
    marginLeft: responsiveWidth(20),
    marginTop: responsiveHeight(-10),
  },
  textInputStyle: {
    fontFamily: 'raleway-light',
    backgroundColor: 'white',
    marginTop: responsiveHeight(0.2),
  },
  textInputStyleOnlyForWebsite: {
    fontFamily: 'raleway-light',

    backgroundColor: 'white',
    marginTop: responsiveHeight(-0.5),
  },


});

export default NextRegisterScreen;
