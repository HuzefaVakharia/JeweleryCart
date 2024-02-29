/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
//import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
import
{
  ActivityIndicator,
  BackHandler,
  Dimensions,
  Image,
  ImageBackground,
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';

import { Badge } from '@rneui/themed';

import AsyncStorage from '@react-native-async-storage/async-storage';
import
{
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions';

import { TextInput } from 'react-native-paper';



import { Button, Card } from '@rneui/themed';

let { height, width } = Dimensions.get('window');


















const LoginScreen = ({ navigation }) =>
{


















  let [isLoading, setIsLoading] = useState(false);











































  /* let [fontsLoaded] = useFonts({
    'raleway-extraLight': require('../assets/fonts/Raleway-ExtraLight.ttf'),
    'raleway-light': require('../assets/fonts/Raleway-Light.ttf'),
    'raleway-bold': require('../assets/fonts/Raleway-Bold.ttf'),
    'raleway-medium': require('../assets/fonts/Raleway-Medium.ttf'),
    'raleway-black': require('../assets/fonts/Raleway-Black.ttf'),
    'raleway-semibold': require('../assets/fonts/Raleway-SemiBold.ttf'),
  }); */


  let [mobile_no, setMobile_no] = useState('');
  let [password, setPassword] = useState('');
  let [passwordForLogin, setPasswordForLogin] = useState('');
  let [result, setResult] = useState([]);

  const [hasMobileNumberErrors, setMobileNumberErrors] = useState(false);
  const [mobileNumberErrorsText, setmobileNumberErrorsText] = useState(false);

  const [hasMobileNumberErrorsWhileLogin, setMobileNumberErrorsWhileLogin] =
    useState(false);
  const [
    mobileNumberErrorsTextWhileLogin,
    setmobileNumberErrorsTextWhileLogin,
  ] = useState(false);



  const [hasPasswordErrorsWhileLogin,setHasPasswordErrorsWhileLogin] =
    useState(false);
  const [passwordErrorsTextWhileLogin, setPasswordErrorsTextWhileLogin] =
    useState(false);

  const [loginResult, setLoginResult] = useState(false);
  const [forgotPasswordResult, setForgotPasswordResult] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(true);
  const [loaderModalVisible, setLoaderModalVisible] = useState(false);





  let nameFour = '';
  let accessTokenFour = '';
  let contact_no_toShowInDrawerNavigationFour = '';




  console.log(
    'Mobile Number which received is: ' +
    mobile_no +
    ' And password which received is: ' +
    password
  );


  useEffect(() =>
  {

    getData();


  }, []);



  /*  useEffect(() => {    
    printingNow();
    backButtonOnPressDo();    
    
  }, []);  */


  /* useEffect(() => {    
    //printingNow();
    backButtonOnPressDo();    
    //In LoginScreen and In Register screen in Original Jewel Cart app, when we click on back button the orignal app is not asking to exit or not, but it is directly put in background ie. app exits so in this LoginScreen backButtonOnPressDo() is not require. and in our Modal tag we have use BackHandler.exitApp() which exit the app when user clicks on backbutton from Login Screen as shown below:

            <Modal
            animationType="slide"
            onRequestClose={ () => BackHandler.exitApp() }


            
  }, []); */






















  const getData = () =>
  {
    try
    {
      AsyncStorage.getItem('LoggedInPersonDataKey')
        .then(value =>
        {
          if (value != null)
          {

            setLoginModalVisible(false);
            setLoaderModalVisible(true);

            let user = JSON.parse(value);
            accessTokenFour = user.Access_Token;

            navigation.replace('HomeScreen', { accessTokenKey: accessTokenFour, });








          }
        })
    } catch (error)
    {
      console.log(error);
    }
  }











































  const login = async (mobile_no, passwordForLogin) =>
  {
    console.log('Login function executing..');

    setIsLoading(true);

    await fetch('https://rajeshwersoftsolution.com/jwelcart/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobile_no: mobile_no,
        password: passwordForLogin,
      }),
    })
      .then((response) =>
      {
        result = response.json();
        setIsLoading(false);
        result.then((values) =>
        {
          console.log(values);



          setLoginResult(values.result);



          {
            !loginResult == true
              ? ToastAndroid.showWithGravity(
                values.message,
                ToastAndroid.LONG,
                ToastAndroid.CENTER
              )
              : ToastAndroid.showWithGravity(
                'Welcome To Jewel Cart',
                ToastAndroid.LONG,
                ToastAndroid.CENTER
              );
            //alert('Going to HomeScreen');
            nameFour = values.data.name;
            accessTokenFour = values.data.access_token;
            contact_no_toShowInDrawerNavigationFour = values.data.contact_no;
            //alert('AC:'+accessTokenFour+'\n'+'Name:'+nameFour+'\n'+'Contact Number:'+'\n'+contact_no_toShowInDrawerNavigationFour);   
            var userLoggedInData = {
              Name: nameFour,
              Contact_No_To_toShowInDrawerNavigation: contact_no_toShowInDrawerNavigationFour,
              Access_Token: accessTokenFour,
              MobileNumberForLogin: mobile_no,
              PasswordForLoginKey: passwordForLogin,


            }


            AsyncStorage.setItem('LoggedInPersonDataKey', JSON.stringify(userLoggedInData));
            //fetchAPIUsingAccessToken();

            //navigation.navigate('HomeScreen', {accessTokenKey:accessTokenFour,});
            navigation.replace('HomeScreen', { accessTokenKey: accessTokenFour, });
            //navigation.replace('HomeScreen');




          }


        });
      })

      .catch((error) =>
      {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
        /* ToastAndroid.showWithGravity(
          'Error:',JSON.stringify(error),
          ToastAndroid.LONG,
          ToastAndroid.CENTER
        ); */
      });


  };

  const forgotPasswordAPICallMethod = (mobile_no) =>
  {
    console.log('Forgot Password API Call function executing..');

    fetch('https://rajeshwersoftsolution.com/jwelcart/api/forget_password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobile_no: mobile_no,
      }),
    })
      .then((response) =>
      {
        result = response.json();
        result.then((values) =>
        {
          console.log(values);
          //Alert.alert(values.message);
          setForgotPasswordResult(values.message);
          {
            !forgotPasswordResult == 'Password Updated Successfully'
              ? ToastAndroid.showWithGravity(
                'Invalid Mobile Number',
                ToastAndroid.LONG,
                ToastAndroid.CENTER
              )
              : ToastAndroid.showWithGravity(
                values.message,
                ToastAndroid.LONG,
                ToastAndroid.CENTER
              );
          }


        });
      })

      .catch((error) =>
      {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!',JSON.stringify(error));
        /* ToastAndroid.showWithGravity(
          'Error:', error,
          ToastAndroid.LONG,
          ToastAndroid.CENTER
        ); */
      });
  };



  const homeIconClickedDoThis = () =>
  {

    alert('Fetching Information Please Wait');
  };

  const orderIconClickedDoThis = () =>
  {
    alert('Fetching Information Please Wait');

  };

  const addOrderIconClickedDoThis = () =>
  {
    alert('Fetching Information Please Wait');
  };

  const customerIconClickedDoThis = () =>
  {
    alert('Fetching Information Please Wait');
  };

  const supplierIconClickedDoThis = () =>
  {
    alert('Fetching Information Please Wait');
  };

  return (
    <SafeAreaView style={ { flex: 1 } }>
      <View style={ { height: height, width: width } }>

        <StatusBar backgroundColor="#283E65" barStyle={ 'light-content' } />


        <ImageBackground
          source={ loaderModalVisible == true ? null : require('../images/login_background.png') }
          resizeMode="cover"
          style={ styles.image }>

          <Image
            source={ loaderModalVisible == true ? null : require('../images/main_logo_white.png') }
            style={ {
              width: responsiveWidth(60),
              height: responsiveHeight(30),
              marginLeft: responsiveWidth(25),
              //marginTop: responsiveHeight(10),
              marginTop: responsiveHeight(8),

            } }
          />

          {/*Modal for Home screen with blank view starts here: */ }
          <Modal
            animationType="slide"

            onRequestClose={ () => BackHandler.exitApp() }

            transparent={ true }
            visible={ loaderModalVisible }
          >


            <View style={ styles.container }>

              <View
                style={ {
                  //flex: 1,
                  width: width,
                  backgroundColor: '#FBF8F1',

                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,

                } }>


                {/* Another Module for curve background starts here: */ }
                <ImageBackground
                  source={ require('../images/background.png') }
                  resizeMode="cover"
                  style={ { marginTop: responsiveHeight(-5), height: responsiveHeight(35) } }>


                  <View>
                    {/*View to hold our created Drawer Navigation Three line image button */ }


                    <View style={ { flexDirection: 'row', marginTop: responsiveHeight(6.5), marginLeft: responsiveWidth(4) } }>

                      <Image
                        source={ require('../images/drawer.png') }
                        style={ {
                          width: responsiveWidth(8),
                          height: responsiveHeight(4),
                        } }
                      />

                    </View>


                    {/* Another Module for JEWEL CART text starts here: */ }
                    <View>
                      <Text
                        style={ {
                          fontSize: responsiveHeight(3),
                          fontFamily: 'raleway-medium',
                          marginLeft: responsiveWidth(30),
                          marginTop: responsiveHeight(-5),
                          color: 'white',
                        } }
                      >
                        JEWEL CART
                      </Text>

                      {/* <AlbumList/> */ }
                      {/* <AlbumDetail/> */ }




                      {/* Another Module for Bell icon starts here: */ }
                      <View>

                        <Image
                          source={ require('../images/bell.png') }
                          style={ {
                            width: responsiveWidth(7),
                            height: responsiveHeight(4),
                            marginTop: responsiveHeight(-4),
                            marginLeft: responsiveWidth(85),
                          } }
                        />
                        <Badge
                          status="error"
                          value={ 0 }
                          //value={bellNotificationNumber}

                          containerStyle={ {
                            position: 'absolute',
                            top: responsiveHeight(-5),
                            right: responsiveWidth(6),
                          } }
                        />




                      </View>
                      {/* Another Module for Bell icon Ends here: */ }



                    </View>
                    {/* Another Module for JEWEL CART text Ends here: */ }



                  </View>




                  <ActivityIndicator size="large" color="#013F66" style={ { marginTop: responsiveHeight(32) } } />












                </ImageBackground>




              </View>

            </View>


          </Modal>
          {/*Modal for Home screen with blank view ends here: */ }










































          <Modal
            animationType="slide"
            onRequestClose={ () => BackHandler.exitApp() }

            transparent={ true }
            visible={ loginModalVisible }
          >
            <View
              style={ {
                flex: 1,
                justifyContent: 'center',
                //alignItems: 'center',
                //backgroundColor: 'rgba(0,0,0,0.4)', 
              } }>

              <Card
                containerStyle={ {
                  height: mobileNumberErrorsTextWhileLogin ? responsiveHeight(60) : responsiveHeight(49),

                  width: responsiveWidth(85),
                  borderRadius: responsiveWidth(9),
                  elevation: responsiveWidth(1),
                  marginTop: mobileNumberErrorsTextWhileLogin ? responsiveHeight(33) : responsiveHeight(40),

                  marginLeft: responsiveWidth(7.5),
                } }>

                <Text style={ styles.text }>Welcome Back
                </Text>
                <Text style={ styles.textGray }>Sign in to Continue</Text>


















                <TextInput
                  style={ styles.textInputStyle }
                  label="Mobile Number"
                  keyboardType={ 'phone-pad' }
                  mode="outlined"
                  value={ mobile_no }
                  onChangeText={ (value) => setMobile_no(value) }
                  theme={ {
                    roundness: responsiveWidth(10),
                    colors: {
                      primary: '#2B95E1',
                      underlineColor: 'transparent',
                    },
                  } }
                  error={ hasMobileNumberErrorsWhileLogin }
                  left={
                    <TextInput.Icon icon={ require('../images/mobile.png') } />
                  }
                />

                { mobileNumberErrorsTextWhileLogin ? (
                  <Text
                    style={
                      styles.textErrorStyleForNoMobileORPasswordWhileLogin
                    }>
                    This field can't be empty!
                  </Text>
                ) : null }

                <TextInput
                  label="Password"
                  style={ styles.textInputStyleOnlyForLoginPasswordTextInput }
                  mode="outlined"
                  error={ false }
                  theme={ {
                    roundness: responsiveWidth(10),
                    colors: {
                      primary: '#2B95E1',
                      underlineColor: 'transparent',
                    },
                  } }
                  value={ passwordForLogin }
                  onChangeText={ (value) => setPasswordForLogin(value) }
                  secureTextEntry
                  left={
                    <TextInput.Icon icon={ require('../images/lock.png') } />
                  }
                />

                { passwordErrorsTextWhileLogin ? (
                  <Text
                    style={
                      styles.textErrorStyleForNoMobileORPasswordWhileLogin
                    }>
                    This field can't be empty!
                  </Text>
                ) : null }

                <TouchableOpacity onPress={ () => setModalVisible(true) }>
                  <Text
                    style={ [
                      styles.textForgotPasswordStyle,
                      {
                        marginTop:
                          hasMobileNumberErrorsWhileLogin == false
                            ? responsiveHeight(2.5)
                            : responsiveHeight(2.5),
                      },
                    ] }>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>




                { isLoading == true ? (
                  <ActivityIndicator size="large" color="#013F66" style={ { marginTop: responsiveHeight(2) } } />
                ) : (
                  <>

                    <Button
                      title="SIGN IN"
                      onPress={
                        !mobile_no.trim() || !passwordForLogin.trim()
                          ? () =>
                            setMobileNumberErrorsWhileLogin(true) ||
                            setmobileNumberErrorsTextWhileLogin(true) ||
                            setPasswordErrorsTextWhileLogin(true) ||
                            setHasPasswordErrorsWhileLogin(true)
                          : () => login(mobile_no, passwordForLogin)
                      }
                      titleStyle={ { fontWeight: '700' } }
                      buttonStyle={ {
                        backgroundColor: '#283E65',//#013F66
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 30,
                        height: responsiveHeight(7),
                        width: responsiveWidth(75),
                        marginTop: responsiveHeight(4),
                        //CCCCCCCCCCCCCCCCCCCCC
                        marginBottom: responsiveHeight(0),
                      } }



                    />

                  </>
                ) }











              </Card>

              <View style={ styles.doesnothaveAccountStyle }>

                <Text>Does not have account?</Text>

                <TouchableOpacity
                  onPress={ () =>
                  {
                    navigation.replace('Register', {
                      sameContactNoPropslabel: 0,
                      sameEmailPropslabel: 0,

                    }) || setLoginModalVisible(false)
                  } }>
                  <Text style={ styles.signUpStyle }>Sign Up</Text>
                </TouchableOpacity>

              </View>






            </View>

          </Modal>

          <Modal
            transparent={ true }
            visible={ modalVisible }
            onRequestClose={ () => setModalVisible(false) }>
            <View
              style={ {
                backgroundColor: 'rgba(0,0,0,0.4)',
                flex: 1,
                justifyContent: 'center',
              } }>
              <View
                style={ { backgroundColor: 'white', padding: 13, margin: 40 } }>
                <Text style={ styles.textForgotPasswordModalStyle }>
                  Forgot Password
                </Text>

                <TextInput
                  style={ styles.textInputStyleForMobileNumberInModal }
                  label="Mobile Number"
                  keyboardType={ 'numeric' }
                  mode="outlined"
                  error={ hasMobileNumberErrors }
                  value={ mobile_no }
                  onChangeText={ (value) => setMobile_no(value) }
                  theme={ {
                    roundness: responsiveWidth(10),
                    colors: {
                      primary: '#2B95E1',
                      underlineColor: 'transparent',
                    },
                  } }
                  left={
                    <TextInput.Icon icon={ require('../images/mobile.png') } />
                  }
                />

                { mobileNumberErrorsText ? (
                  <Text style={ styles.textErrorStyleForMobileNumberInModal }>
                    Enter Mobile number
                  </Text>
                ) : (
                  <Text> </Text>
                ) }

                <View style={ { alignItems: 'center' } }>
                  <Button
                    title="SUBMIT"
                    onPress={
                      !mobile_no.trim()
                        ? () =>
                          setMobileNumberErrors(!hasMobileNumberErrors) ||
                          setmobileNumberErrorsText(true)
                        : () =>
                          forgotPasswordAPICallMethod(mobile_no) ||
                          setMobileNumberErrors(false) ||
                          setModalVisible(false) ||
                          setmobileNumberErrorsText(false)
                    }
                    titleStyle={ {
                      fontWeight: '500',
                      fontFamily: 'raleway-medium',
                    } }
                    buttonStyle={ {
                      width: responsiveWidth(30),
                      backgroundColor: '#283E65',//#013F66
                      borderColor: 'transparent',
                      borderWidth: 0,
                      borderRadius: 5,
                    } }
                  />
                </View>
              </View>
            </View>
          </Modal>



        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    //backgroundColor: 'rgba(0,0,0,0.4)',
    //justifyContent: 'center',
    //alignItems: 'center',   
  },



  image: {

    height: responsiveHeight(52),
    marginTop: responsiveHeight(-4),

  },

  textInputStyle: {
    fontFamily: 'raleway-light',
    backgroundColor: 'white',
  },
  textInputStyleOnlyForLoginPasswordTextInput: {
    fontFamily: 'raleway-light',
    backgroundColor: 'white',
    marginTop: responsiveHeight(0.2),
  },


  textInputStyleForMobileNumberInModal: {
    fontFamily: 'raleway-light',
    backgroundColor: 'white',
  },
  textErrorStyleForMobileNumberInModal: {
    color: 'red',
    fontFamily: 'raleway-medium',
    marginBottom: responsiveHeight(5),
    marginLeft: responsiveWidth(4),
  },
  textErrorStyleForNoMobileORPasswordWhileLogin: {
    color: 'red',
    fontFamily: 'raleway-medium',
    marginBottom: responsiveHeight(0.3),
    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(0.3),
  },

  text: {
    fontSize: responsiveHeight(3),
    fontFamily: 'raleway-light',
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(1),
  },
  textGray: {
    fontSize: responsiveHeight(2.5),
    fontFamily: 'raleway-light',
    marginLeft: responsiveWidth(3),
    marginBottom: responsiveHeight(2),
    //marginTop:responsiveHeight(-0.5),
    color: '#B8B8B8',
  },
  textForgotPasswordStyle: {
    fontSize: responsiveWidth(3.8),
    fontFamily: 'raleway-semibold',
    marginLeft: responsiveWidth(37.5),
    marginTop: responsiveHeight(2),
  },

  textForgotPasswordModalStyle: {
    fontSize: responsiveWidth(5),
    fontFamily: 'raleway-light',
    marginLeft: responsiveWidth(11),

    marginBottom: responsiveHeight(3),
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
    marginLeft: responsiveWidth(2.5),

    color: '#2B95E1',
    //fontStyle: 'bold',

  },
});

export default LoginScreen;


