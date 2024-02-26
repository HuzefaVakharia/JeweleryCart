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
import {
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
  Text,
  
} from 'react-native';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AnimatedTextInputFile from '../components/AnimatedTextInputFile';
import AllUITogether from '../components/AllUITogether';
import FetchDynamicAPIs from '../components/FetchDynamicAPIs';
import { TextInput } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { Button, Card } from '@rneui/themed';

let { height, width } = Dimensions.get('window');



const staffRoleArray = [
  {type:'Staff'},
  {type: 'Admin'},


  
];

const EditStaffScreen = ({navigation }) => {
const route = useRoute();
  /* let id = '',
    orderPerson = '',
    mobileNumber = '',
    orderPersonNumber = '',
    address = '',
    city = '',
    state = '';
    contact_no = '',
    email = '',
    password = '',
    stateWithID='';
    cityWithID='';
    supplierCode=''; */

    const { 
    accessTokenSentToEditStaffScreen,
    staffID,
    name_ofStaffPerson,
    contactNumber,
    email,
    password,
    contact_personName,
    contact_person_no,
    address,
    state,
    role,
    city,
    pincode,
    stateIDInEditStaffScreen,
    cityIDInEditStaffScreen, 
      previousScreenName, 
    } = route.params; 

  

//alert('Name of supplier is:'+name+'State name is:'+state+' State ID is:'+stateWithID+' City name is:'+city+' City ID is:'+cityWithID);

  //alert('Name got is:'+name);


  
  const [selectedCaratFromListInEditStaffScreen, setselectedCaratFromListInEditStaffScreen] = useState('Carat');
  let [selectedCaratIDInEditStaffScreen, setselectedCaratIDInEditStaffScreen] = useState(-1);


  const [selectedStateFromList, setselectedStateFromList] = useState(state);

  const [editsupplierScreenModal, setEditsupplierScreenModal] = useState(true);

  const [selectedCityFromList, setselectedCityFromList] = useState(city);

  const [callFetchDynamicAPIsInEditStaffScreen,setcallFetchDynamicAPIsInEditStaffScreen] = useState(false);

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

  //console.log(route.params.namePropslabel);
  /* let [fontsLoaded] = useFonts({
    'raleway-extraLight': require('../assets/fonts/Raleway-ExtraLight.ttf'),
    'raleway-light': require('../assets/fonts/Raleway-Light.ttf'),
    'raleway-bold': require('../assets/fonts/Raleway-Bold.ttf'),
    'raleway-medium': require('../assets/fonts/Raleway-Medium.ttf'),
    'raleway-black': require('../assets/fonts/Raleway-Black.ttf'),
  }); */

  const contactPersonNoTextInputRef = useRef();

  let [isUpdateProcessRunning, setIsUpdateProcessRunning] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
        setSearchTextInputForStateGotFocus(true);
        setSearchTextInputForCityGotFocus(true);
        //fetchState();
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
        setSearchTextInputForStateGotFocus(false);
        setSearchTextInputForCityGotFocus(false);
        //alert('Keyboard hided....')
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

/* 

 staffID,
    name_ofStaffPerson,
    contactNumber,
    email,
    password,
    contact_personName,
    contact_person_no,
    address,
    state,
    city,
    pincode,
    stateIDInEditStaffScreen,
    cityIDInEditStaffScreen, 

 */
  

  let [nameAfterEdit, setnameAfterEdit] = useState(name_ofStaffPerson);
  let [contactNumberAfterEdit, setContactNumberAfterEdit] = useState(contactNumber);
  let [emailAfterEdit, setEmailAfterEdit] = useState(email);
  
  let [passwordAfterEdit, setPasswordAfterEdit] = useState('');
  
  let [contact_personNameAfterEdit, setContactPersonNameAfterEdit] = useState(contact_personName);
  let [contact_person_noAfterEdit, setContactPersonNoAfterEdit] = useState(contact_person_no);
  let [addressAfterEdit, setAddressAfterEdit] = useState(address);
  let [stateAfterEdit, setStateAfterEdit] = useState('');
  let [cityAfterEdit, setCityAfterEdit] = useState('');
  let [pincodeAfterEdit, setPincodeAfterEdit] = useState(pincode);   
  let [stateIDInEditCustomerScreenAfterEdit, setStateIDInEditCustomerScreenAfterEdit] = useState(stateIDInEditStaffScreen);
 let [cityIDInEditCustomerScreenAfterEdit, setCityIDInEditCustomerScreenAfterEdit] = useState(cityIDInEditStaffScreen);
const [dataForSelectStaffRoleAfterEdit, setdataForSelectStaffRoleAfterEdit] = useState(staffRoleArray);
  const [selectedStaffRoleAfterEdit, setselectedStaffRoleAfterEdit] = useState(role);    





  const chkAllFieldsEnteredInEditStaffScreen = () => {
    if (!nameAfterEdit.trim()) {
      //alert('Please Enter Website');
      ToastAndroid.showWithGravity(
        'Please Enter Name',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      setIsUpdateProcessRunning(false);
      return;
      
    }
    if (!passwordAfterEdit.trim()) {
      //alert('Please Enter Website');
      ToastAndroid.showWithGravity(
        'Please Enter Password',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      setIsUpdateProcessRunning(false);
      return;
      
    }

    if (!contactNumberAfterEdit.trim()) {
      //alert('Please Enter Website');
      ToastAndroid.showWithGravity(
        'Please Enter Contact Number',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      setIsUpdateProcessRunning(false);
      return;
      
    }

    if (!emailAfterEdit.trim()) {
      //alert('Please Enter Website');
      ToastAndroid.showWithGravity(
        'Please Enter Email',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      setIsUpdateProcessRunning(false);
      return;
      
    }

    if (!addressAfterEdit.trim()) {
      //alert('Please Enter Website');
      ToastAndroid.showWithGravity(
        'Please Enter Address',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      setIsUpdateProcessRunning(false);
      return;
      
    }

    if (!contact_personNameAfterEdit.trim()) {
      //alert('Please Enter Website');
      ToastAndroid.showWithGravity(
        'Please Enter Contact Person Name',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      setIsUpdateProcessRunning(false);
      return;
      
    }

    if (!contact_person_noAfterEdit.trim()) {
      //alert('Please Enter Website');
      ToastAndroid.showWithGravity(
        'Please Enter Contact Person Number',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      setIsUpdateProcessRunning(false);
      return;
      
    }else if (contact_person_noAfterEdit.length < 10)
    {
      //alert('Please Enter Mobile Number with Minimum 10 digits');
      ToastAndroid.showWithGravity(
        'Please Enter Contact Person Number with Minimum 10 digits',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    } else if (contact_person_noAfterEdit.length > 10)
    {
      //alert('Please Enter Mobile Number with Minimum 10 digits');
      ToastAndroid.showWithGravity(
        'Please Enter Contact Person Number with Maximum 10 digits only',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    }

    if (!pincodeAfterEdit.trim()) {
      //alert('Please Enter Website');
      ToastAndroid.showWithGravity(
        'Please Enter Pincode',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      setIsUpdateProcessRunning(false);
      return;
      
    }    


    

    setcallFetchDynamicAPIsInEditStaffScreen(true);
  };

  /*  useEffect(() => {
    alert(
      'supplierCodeToBeEdited got is:'+supplierCodeToBeEdited+'\n'+
      'supplierIDToBeEdited got is:'+supplierIDToBeEdited+'\n'
    );       
    
     //alert('Name of supplier is:'+name+'State name is:'+stateInEditStaffScreen+' State ID is:'+stateIDInEditStaffScreen+' City name is:'+cityInEditStaffScreen+' City ID is:'+cityIDInEditStaffScreen); 
  }, []);*/     

  const gotoAddStaffScreen = () => {
    //alert('Btn clicked....');
     navigation.replace("AddStaffScreen", {     
      accessTokenSentToAddStaffScreen: accessTokenSentToEditStaffScreen,
      previousScreenName:previousScreenName    
    }); 
    //setEditsupplierScreenModal(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
        <StatusBar backgroundColor="#283E65" barStyle={'light-content'} />

        {/* <AllUITogether show="ImageBackgroundWhichContainsChildren">
        </AllUITogether> */}

        <ImageBackground
          source={ require('../images/background.png') }
          resizeMode="cover"
          style={ {
           marginTop: responsiveHeight(-1),      

            //When using this code for making apk just uncomment this above marginTop:responsiveHeight(-5)
            //because this marginTop: responsiveHeight(-5), is perfect for VSCode but not perfect for
            //expo snake
            height: responsiveHeight(35),

            //marginBottom:responsiveHeight(-30),         
          } }/>

          


          {/*View which will hold back arrow image and ADD ORDER text starts here  */}
                <View style={{
                  
                  marginTop:responsiveHeight(-31),        
                  //backgroundColor:'purple',
                  }}>
                <View
                  style={{
                    marginTop: responsiveHeight(0),
                    marginLeft: responsiveWidth(-4),
                    //marginBottom: responsiveHeight(10),
                    marginBottom: responsiveHeight(0),    
                    //backgroundColor:'red',
                    flexDirection: 'row',                   
                  }}>
                  

                  <View
                    style={{
                      marginTop: responsiveHeight(0),
                      //backgroundColor:'cyan'
                    }}>
                    {/*<AllUITogether
                      show={'AntIconBtn'}
                      dothisProps={gotoAddStaffScreen}   
                      iconDesignName={'left'}
                colorForIconinAntDesignBtn={'gold'}
                backgroundColorForIconinAntDesignBtn={'transparent'}
                sizeForIconinAntDesignBtn={26}
                boardRadiusForIconinAntDesignBtn={10}
                widthForIconinAntDesignBtn={11}
                heightForIconinAntDesignBtn={6}
                marginLeftForIconinAntDesignBtn={5}
                marginTopForIconinAntDesignBtn={0}
                boardColorForIconinAntDesignBtn={'transparent'}
                boardWidthForIconinAntDesignBtn={0}
                    />*/}
                    <AllUITogether
            show={'AntIconBtn'}
              //dothisProps={gotoSupplierScreen}    
            dothisProps={gotoAddStaffScreen}
            iconDesignName={'left'}
            colorForIconinAntDesignBtn={'gold'}
            backgroundColorForIconinAntDesignBtn={'transparent'}
            sizeForIconinAntDesignBtn={26}
            boardRadiusForIconinAntDesignBtn={10}
            widthForIconinAntDesignBtn={responsiveWidth(11)}
            heightForIconinAntDesignBtn={responsiveHeight(6)}
            marginLeftForIconinAntDesignBtn={responsiveWidth(5)}
            marginTopForIconinAntDesignBtn={responsiveHeight(0)}   
            boardColorForIconinAntDesignBtn={'transparent'}
            boardWidthForIconinAntDesignBtn={responsiveWidth(0)}
                />
                  </View>

                  <View
                    style={
                      {
                        //backgroundColor:'purple'
                      }
                    }>
                    <AllUITogether
                      show={'CenterTopTextForPageName'}
                      topPageName={'EDIT STAFF'}
                      marginLeftPropsForCenterTopTextForPageName={-7}
                      marginTopPropsForCenterTopTextForPageName={0}
                    />

                      
                  </View>
                </View>
                </View>

                {/*View which will hold back arrow image and EDIT ORDER text ends here   */ }




                <ScrollView    
       keyboardShouldPersistTaps="always"
          
        showsVerticalScrollIndicator={false}
        bounces={false}
        >

         <View
                style={ {
                  
                  flex: 1,
                  height: height-responsiveHeight(10), 

                  /* We have to give minus responsiveHeight(10) inside 'height: height-responsiveHeight(10),' as shown above so that when we open our keyboard to type inside any TextInput and if we move Scroll our Card up and down then the card do not show too much space below while scrolling full card.  */  

                  /* This View will give our ScrollBar space to move up and down while user Types there details inside TextInput so this is how we can specify area for our Scroll, we can not directly put style={} props inside <ScrollView> tag so we have to put one direct child inside <ScrollView> tag which will specify height for how much ScrollView should scroll. */ 
                  
                   /*Since Our Card tag (which is just below this <View> tag) size will not be equal or more than the size of our mobile device, so we can not give our Card 
                   size to be height:height, but if we do not give our Card size height:height then we will see gray colour horizontal 
                   borader below our Card, so to avoid that horizontal boarder of gray colour below our Card we have to give this View 
                   inside our Parent ScrollView so that our Parent ScrollView can occupy height which is equal to our device height, and so we will not see any gray horizontal boarder below where our Card ends or where our ScrollView ends. But if we have kept our Card height equal to our device height and not of height:responsiveHeight(82) then we do not need to give this View because you can see that inside our Parent ScrollView there is only one direct tag which is <Card> tag and inside that <Card> tag every other UI tags are present, so if we have kept height of our <Card> tag of device height then we will not see any gray boarder below our ScrollView, that kind of example is done inside screen for PlatinumEditOrderTwo.js where our <Card> size is very large,larger than our device height also, then also we have kept our <Card> tag height:height and so there we do not need to use this View inside our Root ScrollView which specify that our ScrollView will be equal to height of our device height. 
                    */ 
                } }> 

       
  <Card
    containerStyle={{
      //height:responsiveHeight(78),    
      //height:height,
      width: responsiveWidth(91),
      borderRadius: responsiveWidth(6),
      elevation: responsiveWidth(1),
      marginTop: responsiveHeight(4.5),    
      //marginBottom:responsiveHeight(40),      
      //marginLeft: responsiveWidth(7.5),
    }}>

    <ScrollView
      keyboardShouldPersistTaps="always"
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}
      bounces={false}>
                
                
                
                
                
                {/*Our UI in Card starts here  */}
                  {/* Code to include Select Priority text and its drop down starts here */}

                  {/* <Text style={styles.dropDownTopSideLabels}>Select Priority</Text> */}

                  {/* <TouchableOpacity
                    onPress={() => {
                      alert('Select Priority');
                    }}> */}
                    <View>
                     
                      <AllUITogether
                        show={'ddLforlocalData'}
                        fetchLocalDataDDLDownArrowMarginLeft={responsiveWidth(22)}
                        fetchLocalDataDDLWidth={responsiveWidth(81)}
                        fetchLocalDataDDLTextmarginLeft={responsiveWidth(-9)}
                        //largeDropDownListTopLabel={'Select Priority'}
                        itemIconPropslabel={null}
                        itemNamePropslabel={'Normal'}
						fontForDDLTextInsideModal={'raleway-medium'}
                    fontForDDLInsideText={'raleway-light'}
                    dataForFlatListprops={dataForSelectStaffRoleAfterEdit}
                    setterMethodInDropDownTextArea={setselectedStaffRoleAfterEdit}
                    valueForDropDownToShowInText={selectedStaffRoleAfterEdit}
                    //Next time when we use this Reusable component, give all the 
                        //required numberic parameter in props using 
                        //responssiveHeight and responsiveWidth.
                        marginbetweenTopLabelandTouchableOpactiy={responsiveHeight(0.9)}
                    largeDropDownModalMarginTopProps={200}           
                    largeDropDownModalMarginLeftProps={27}   
                    largeDropDownModalHeightProps={100}      
                    largeDropDownModalWidthProps={300}  
                    borderRadiusPropsForDDLModal={responsiveHeight(2)}
                      />
                    </View>
                  {/* </TouchableOpacity> */}

                  {/* Code to include Select Priority text and its drop down ends here */}


                    <View style={{marginTop:responsiveHeight(3)}}>
                    <TextInput
                      style={styles.textInputStyleOnlyForName}
                      //onFocus={()=>setTypingName(true)}
                      //onBlur={()=>setTypingName(false)}
                      //style={ styles.textInputStyle }
                      label="Name"
                      mode="outlined"
                      value={nameAfterEdit}
                      onChangeText={(value) =>
                        setnameAfterEdit(value)        
                      }
                      theme={{
                        roundness: responsiveWidth(10),
                        colors: {
                          primary: '#2B95E1',
                          underlineColor: 'transparent',
                        },
                      }}
                    />


                    <TextInput
                      style={styles.textInputStyleOnlyForName}
                      //onFocus={()=>setTypingName(true)}
                      //onBlur={()=>setTypingName(false)}
                      //style={ styles.textInputStyle }
                      label="Password"
                      mode="outlined"
                      value={passwordAfterEdit}
                      onChangeText={(value) =>
                        setPasswordAfterEdit(value)        
                      }
                      theme={{
                        roundness: responsiveWidth(10),
                        colors: {
                          primary: '#2B95E1',
                          underlineColor: 'transparent',
                        },
                      }}
                    />

                    <TextInput
                      style={styles.textInputStyleOnlyForName}
                      //onFocus={()=>setTypingName(true)}
                      //onBlur={()=>setTypingName(false)}
                      //style={ styles.textInputStyle }
                      label="Contact No"
                      mode="outlined"
                      value={contactNumberAfterEdit}
                      onChangeText={(value) =>
                        setContactNumberAfterEdit(value)        
                      }
                      theme={{
                        roundness: responsiveWidth(10),
                        colors: {
                          primary: '#2B95E1',
                          underlineColor: 'transparent',
                        },
                      }}
                    />





                  <TextInput
                      style={styles.textInputStyleOnlyForName}
                      //onFocus={()=>setTypingName(true)}
                      //onBlur={()=>setTypingName(false)}
                      //style={ styles.textInputStyle }
                      label="Email"
                      mode="outlined"
                      value={emailAfterEdit}
                      onChangeText={(value) =>
                        setEmailAfterEdit(value)        
                      }
                      theme={{
                        roundness: responsiveWidth(10),
                        colors: {
                          primary: '#2B95E1',
                          underlineColor: 'transparent',
                        },
                      }}
                    />


                    <TextInput
                      style={styles.textInputStyleOnlyForName}
                      //onFocus={()=>setTypingName(true)}
                      //onBlur={()=>setTypingName(false)}
                      //style={ styles.textInputStyle }
                      label="Address"
                      mode="outlined"
                      value={addressAfterEdit}
                      onChangeText={(value) =>
                        setAddressAfterEdit(value)        
                      }
                      theme={{
                        roundness: responsiveWidth(10),
                        colors: {
                          primary: '#2B95E1',
                          underlineColor: 'transparent',
                        },
                      }}
                    />


                    <TextInput
                      style={styles.textInputStyleOnlyForName}
                      //onFocus={()=>setTypingName(true)}
                      //onBlur={()=>setTypingName(false)}
                      //style={ styles.textInputStyle }
                      label="Contact Person Name"
                      mode="outlined"
                      value={contact_personNameAfterEdit}
                      onChangeText={(value) =>
                        setContactPersonNameAfterEdit(value)        
                      }
                      theme={{
                        roundness: responsiveWidth(10),
                        colors: {
                          primary: '#2B95E1',
                          underlineColor: 'transparent',
                        },
                      }}
                    />


                  <TextInput
                      style={styles.textInputStyleOnlyForName}
                      //onFocus={()=>setTypingName(true)}
                      //onBlur={()=>setTypingName(false)}
                      //style={ styles.textInputStyle }
                      label="Contact Person no"
                      mode="outlined"
                      value={contact_person_noAfterEdit}
                      onChangeText={(value) =>
                        setContactPersonNoAfterEdit(value)        
                      }
                      theme={{
                        roundness: responsiveWidth(10),
                        colors: {
                          primary: '#2B95E1',
                          underlineColor: 'transparent',
                        },
                      }}
                    />



                  {/* Drop Down for State List starts here */ }
                    
                    <AnimatedTextInputFile
                      show={ 'AnimatedTextInputDDL' }
                      heightOfDDLprops={responsiveHeight(7)} 
                        marginTopPropsForDDL={responsiveHeight(1)}    
                        widthForTextInDDLprops={responsiveWidth(81)}
                      ddlWidth={ 290 }
                      ddlTextmarginLeft={ responsiveWidth(-7) }
                      ddlDownArrowIconmarginLeft={ responsiveWidth(22) }
                      ddlInsideTextFontSize={ responsiveFontSize(2) }
                      //marginVerticalPropsForDDL={0.9}
                      dropdownIconProps={require('../images/dropdowncurved.png')}
                     // heightOfDDLprops={7}
                      //marginTopPropsForDDL={1}
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
                      setselectedStateIDFromListProps={setStateIDInEditCustomerScreenAfterEdit}
                       

                    />
                   

                    {/* DropDown for State List Ends Here */ }



                    {/* Drop Down for City List starts here */ }

                    <AnimatedTextInputFile
                      show={ 'AnimatedTextInputDDL' }
                      ddlWidth={ 290 }
                      heightOfDDLprops={responsiveHeight(7)} 
                        marginTopPropsForDDL={responsiveHeight(4)}    
                        widthForTextInDDLprops={responsiveWidth(81)}
                      ddlTextmarginLeft={ responsiveWidth(-7) }
                      ddlDownArrowIconmarginLeft={ responsiveWidth(22) }
                      ddlInsideTextFontSize={ responsiveFontSize(2) }
                      //marginVerticalPropsForDDL={0.9}
                      //marginTopPropsForDDL={4}
                      dropdownIconProps={require('../images/dropdowncurved.png')}
                      //heightOfDDLprops={7}
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
                      setselectedCityIDFromListProps={setCityIDInEditCustomerScreenAfterEdit}
                    />



                    {/* DropDown for City List Ends Here */ }







                    <TextInput
                      style={[styles.textInputStyleOnlyForName,{marginTop:responsiveHeight(3)}]}  
                      //onFocus={()=>setTypingName(true)}
                      //onBlur={()=>setTypingName(false)}
                      //style={ styles.textInputStyle }
                      label="PinCode"
                      mode="outlined"
                      value={pincodeAfterEdit}
                      onChangeText={(value) =>
                        setPincodeAfterEdit(value)        
                      }
                      theme={{
                        roundness: responsiveWidth(10),
                        colors: {
                          primary: '#2B95E1',
                          underlineColor: 'transparent',
                        },
                      }}
                    />




                    </View>

                    

                    {isUpdateProcessRunning == true ? (
                      <ActivityIndicator size="large" color="#013F66" />
                    ) : (
                      <>
                        <Button
                          title="UPDATE STAFF"
                          onPress={() => {
                           setIsUpdateProcessRunning(true);

                            chkAllFieldsEnteredInEditStaffScreen();
                          }}
                          titleStyle={{ fontWeight: '700' }}
                          buttonStyle={{
                            backgroundColor: '#283E65',
                            borderColor: 'transparent',
                            borderWidth: 0,
                            borderRadius: 30,
                            height: responsiveHeight(7),
                            width: responsiveWidth(81),
                            marginTop: responsiveHeight(2),
                            marginBottom: responsiveHeight(1),   
                          }}   
                        />
                      </>
                    )}

                    {callFetchDynamicAPIsInEditStaffScreen == true ? (   
                      
                      
                      <FetchDynamicAPIs
                        urlToFetchProps={'manage_staff'}
                        screenNameProps={'EditStaffScreen'}
                        accessTokenForFetchingAPIProps={
                          accessTokenSentToEditStaffScreen
                        }
                        //accessTokenForFetchingAPIProps={''}
                        namePropsToEdit={nameAfterEdit}
                        mobilenoPropsToEdit={contactNumberAfterEdit}
                        passwordProps={passwordAfterEdit}
                        emailProps={emailAfterEdit}
                        stateIDPropsToEdit={stateIDInEditCustomerScreenAfterEdit}
                        cityIDPropsToEdit={cityIDInEditCustomerScreenAfterEdit}
                        addressPropsToEdit={addressAfterEdit}
                        orderPersonIEContactPersonPropsToEdit={contact_personNameAfterEdit}
                        orderPersonNumberIEContactMobileNumberPropsToEdit={contact_person_noAfterEdit}
                        roleProps={selectedStaffRoleAfterEdit}
                        pincodeProps={pincodeAfterEdit}
                        staffIDProps={staffID}

                        actionProps={'edit'}   
                        setloaderActiviteOrNotProps={setIsUpdateProcessRunning}  
                        gotoAddStaffScreenAfterEditProps={gotoAddStaffScreen} 
                        callFetchDynamicAPIsInEditStaffScreenprops={callFetchDynamicAPIsInEditStaffScreen}
                        setcallFetchDynamicAPIsInEditStaffScreenprops={setcallFetchDynamicAPIsInEditStaffScreen}
                      />
                      
                    ) : null}

                {/*Our UI in Card ends here  */}

                </ScrollView>
    </Card>
 </View>    
  </ScrollView>
      
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
    marginTop: responsiveHeight(1),
  },
  textInputStyleOnlyForName: {
    fontFamily: 'raleway-light',
    marginBottom:responsiveHeight(3),
    backgroundColor: 'white',
    marginTop: responsiveHeight(0.5),
  },
});

export default EditStaffScreen;    


