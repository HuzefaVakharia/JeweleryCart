/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { useFonts } from 'expo-font';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  BackHandler,
  Text,
  Button,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
  ImageBackground,   
  View,
  Alert,
  LogBox,
} from 'react-native';   
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,  
} from 'react-native-responsive-dimensions';
import FetchDynamicAPIs from '../components/FetchDynamicAPIs';
import ActualSideNavigationMenu from './ActualSideNavigationMenu';
import FloatingLabelInput from '../components/FloatingLabelInput';
import BottomModalScreen from './BottomModalScreen';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import AllUITogether from '../components/AllUITogether';
let { height, width } = Dimensions.get('window');

import React, { useEffect, useRef, useState } from 'react';


let isEnd=-99;

let milisecondsToRunLoader=0;    

const SupplierScreen = ({ route, navigation }) => {
  


  

const { accessTokenSentToSupplierScreen } = route.params;    


  const translateX = useSharedValue(0);




  const openingSideDrawerMenu = () => {
    ChildRef.current.openSideNavigationMethod() ||
      setthreeLineButtonClicked(ChildRef.current.bringGrayColor);
  };





  const gesture = Gesture.Pan().onUpdate((event) => {
    runOnJS(openingSideDrawerMenu)();
  });


 





  const ChildRef = useRef();

  /* const goToCategoryScreen = () => {
    navigation.navigate("Category",{
      accessTokenSentToCategoryScreen:accessTokenSentToCustomerScreen,
      previousScreenName:'SupplierScreen'
      });
    ChildRef.current.closeSideNavigationMethod();
  };



  const goToCaratScreen = () =>
  {
    navigation.navigate("CaratScreen",{
      accessTokenSentToCaratScreen:accessTokenSentToCustomerScreen,
      previousScreenName:'SupplierScreen'
      });
    ChildRef.current.closeSideNavigationMethod();   
  };



  



  
  const goToChangePasswordScreen = () =>
  {
    navigation.navigate("ChangePassword");
    ChildRef.current.closeSideNavigationMethod();   
  }; */


  const goToCategoryScreen = () => {
    navigation.navigate('Category', {
      accessTokenSentToCategoryScreen: accessTokenSentToSupplierScreen,
      previousScreenName: 'SupplierScreen',
    });
    ChildRef.current.closeSideNavigationMethod();
  };

  const goToCaratScreen = () => {
    navigation.navigate('CaratScreen', {
      accessTokenSentToCaratScreen: accessTokenSentToSupplierScreen,
      previousScreenName: 'SupplierScreen',
    });
    ChildRef.current.closeSideNavigationMethod();
  };

  const goToColorScreen = () => {
    navigation.navigate('ColorScreen', {
      accessTokenSentToColorScreen: accessTokenSentToSupplierScreen,
      previousScreenName: 'SupplierScreen',
    });
    ChildRef.current.closeSideNavigationMethod();
  };

  const goToSettingsScreen = () => {
    Alert.alert('Clicked...');
    navigation.navigate('Settings', {
      accessTokenSentToColorScreen: accessTokenSentToSupplierScreen,
      previousScreenName: 'SupplierScreen',
    });
    ChildRef.current.closeSideNavigationMethod();
  };

  const goToAddStaffScreen = () => {
    navigation.navigate('AddStaffScreen', {
      accessTokenSentToAddStaffScreen: accessTokenSentToSupplierScreen,
      previousScreenName: 'SupplierScreen',
    });
    ChildRef.current.closeSideNavigationMethod();
  };

  const goToChangePasswordScreen = () => {
    navigation.navigate('ChangePassword');
    ChildRef.current.closeSideNavigationMethod();
  };
               
               


   let [customerIDNowToDeleteIt, setCustomerIDNowToDeleteIt] = useState('');             
const [
    callFetchDynamicAPIsInSupplierScreenToDelete,
    setcallFetchDynamicAPIsInSupplierScreenToDelete,
  ] = useState(false);
let customerIDForDeletingCustomer='';
  let [resultsecondForSupplierScreen, setResultsecondForSupplierScreen] =
    useState([]);
 const [lastCustomerInFlatListIsToBeDeleted, setLastCustomerInFlatListIsToBeDeleted] = useState(false);  
const [askDeleteOrNotModal, setAskDeleteOrNotModal] = useState(false);
 const [threeLineButtonClicked, setthreeLineButtonClicked] = useState(false);
let [isLoadingSupplierScreenData, setIsLoadingSupplierScreenData] = useState(false);
 let [selectedIndexNumber, setSelectedIndexNumber] = useState(1000);
 let selectedIndexNumberToDeleteDataInEditCustomer = 1000;
 const [cardSize, setCardSize] = useState(26);

 let [bellNotificationNumber, setBellNotificationNumber] = useState(0);

 const getSupplierScreenData = () =>
 {
  try
  {
   AsyncStorage.getItem('supplierScreenFullDataKey').then((value) =>
   {
    if (value != null)
    {
     //navigation.navigate('HomeScreen');
     //setLoginModalVisible(false);
     //setLoaderModalVisible(true);
     let user = JSON.parse(value);

     setResultsecondForSupplierScreen(user.SupplierSearchDataTake);
     setIsLoadingSupplierScreenData(false);
     //resultsecondForSupplierScreen
     //setResultForNo_Of_Order(user.No_of_orderDataTake);

     //alert(' Process_order key got by user.Process_orderKey getdashboardData function:'+user.Process_orderKey);

     //alert(' Process_order Count got:'+process_orderKey);
    }
   });

   //alert(' Process_orderKey got in Homescreen after getdashboardData function:'+process_orderKey);
  } catch (error)
  {
   console.log(error);
  }
 };

 const removeData = async () =>
 {
  try
  {
   await AsyncStorage.clear();
   /* This above clear() method will clear all the AsyncStorage data but if we want to delete particular key's data then we will do like this as shown below */
   //Alert.alert('Logout button clicked')
   //await AsyncStorage.removeItem('LoggedInPersonNameKey');
   navigation.navigate('LoginScreen');
  } catch (error)
  {
   console.log(error);
  }
 };







 const removeDataForCustomerScreenFromAsync = async () =>
  {
    try
    {
      //await AsyncStorage.clear();
      /* This above clear() method will clear all the AsyncStorage data but if we want to delete particular key's data then we will do like this as shown below */
      //Alert.alert('Logout button clicked')
      await AsyncStorage.removeItem('supplierScreenFullDataKey');
      //navigation.navigate("LoginScreen");
    } catch (error)
    {
      console.log(error);
    }
  };


  

 /* let [fontsLoaded] = useFonts({
  'raleway-extraLight': require('../assets/fonts/Raleway-ExtraLight.ttf'),
  'raleway-light': require('../assets/fonts/Raleway-Light.ttf'),
  'raleway-bold': require('../assets/fonts/Raleway-Bold.ttf'),
  'raleway-medium': require('../assets/fonts/Raleway-Medium.ttf'),
  'raleway-black': require('../assets/fonts/Raleway-Black.ttf'),
  'raleway-semibold': require('../assets/fonts/Raleway-SemiBold.ttf'),
  'raleway-regular': require('../assets/fonts/Raleway-Regular.ttf'),
 }); */

 const removingNowGrayColor = () =>
 {
  setthreeLineButtonClicked(false);
  //alert("Removing Gray Color");
 };

 //let selectedIndexNumberToSendDataInEditSupplier = 1000;
 let selectedIndexNumberToSendDataInEditSupplier = -1;
  let cityForSupplierScreen = '';
  let stateForSupplierScreen = '';
  let stateIDForSupplierScreen ='';
  let cityIDForSupplierScreen ='';
   let supplierCodeForSupplierScreen='';
   let supplierIDForSupplierScreen='';
   let addressForSupplierScreen='';

 let [result, setResult] = useState([]);
 let [nameForSupplierScreen, setNameForSupplierScreen] = useState(null);
 let [mobileNumberForSupplierScreen, setMobileNumberForSupplierScreen] =
  useState(null);
 let [orderPersonForSupplierScreen, setOrderPersonForSupplierScreen] =
  useState(null);
 let [
  orderPersonNumberForSupplierScreen,
  setOrderPersonNumberForSupplierScreen,
 ] = useState(null);
 let [
  labelofCustomerCodeForSupplierScreen,
  setLabelofCustomerCodeForSupplierScreen,
 ] = useState(null);

 let [resultfirst, setResultFirst] = useState('');
 let [toggleShowMoreBtn, setToggleShowMoreBtn] = useState(false);
 //setToggleShowMoreBtn
 let [showMoreClickedInSupplierScreen, setShowMoreClickedInSupplierScreen] =
  useState(false);

 //let [resultsecondForSupplierScreen, setResultsecondForSupplierScreen] =
 // useState([]);

 const [
  callFetchDynamicAPIsInSupplierScreen,
  setcallFetchDynamicAPIsInSupplierScreen,
 ] = useState(false);

 useEffect(() =>
 {
   setIsLoadingSupplierScreenData(true);
   //alert('Refreshing Supplier list...');
  setcallFetchDynamicAPIsInSupplierScreen(true);
  getSupplierScreenData();
 }, []);


 useEffect(() => {
  //LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  LogBox.ignoreAllLogs();
}, []);




 const homeIconClickedDoThis = () =>
 {
  navigation.replace('HomeScreen', {
   accessTokenKey: accessTokenSentToSupplierScreen,
  });
 };

 const orderIconClickedDoThis = () =>
 {
  navigation.replace('Order', {
   accessTokenSentToOrderScreen: accessTokenSentToSupplierScreen,
  });
 };

 const addOrderIconClickedDoThis = () =>
 {
  navigation.replace('AddOrderScreen', {
   accessTokenSentToAddOrderScreen: accessTokenSentToSupplierScreen,
  });
 };

 const customerIconClickedDoThis = () =>
 {
  navigation.replace('CustomerScreen', {
   accessTokenSentToCustomerScreen: accessTokenSentToSupplierScreen,
  });
 };

 const supplierIconClickedDoThis = () =>
 {
  
 };  

 
 
 const dothisOnSelectingFirstOptionForInteractiveModal=()=>{
    setcallFetchDynamicAPIsInSupplierScreenToDelete(true);
    setAskDeleteOrNotModal(false);
  }


  const dothisOnSelectingSecondOptionForInteractiveModal=()=>{
    //alert('Second Option from Interactive modal selected.');
    setAskDeleteOrNotModal(false);
  }

  const dothisOnBackButtonPressedInteractiveModal=()=>{
    setAskDeleteOrNotModal(false)
    //alert('Back Btn pressed');
  }
 
 
 
 
 
 
 
 const searchTopSmallIconPressedDoThis = () =>
 {
  alert('search icon button pressed...');
 };

 const plusTopSmallIconPressedDoThis = () =>
 {
  //alert('plus icon button pressed...');
  navigation.navigate('AddSupplierScreen', {
   accessTokenSentToAddSupplier: accessTokenSentToSupplierScreen
   
  }); 
 };

 const onPressPendingInSupplierScreen = () =>
 {
  alert('Pending button pressed In Order Screen...');
 };

 const onPressDeleteInSupplierScreen = () =>
 {
  alert('Delete button pressed In Supplier Screen...');
 };

 const onPressEditInSupplierScreen = () =>
 {
  //alert('Edit button pressed In Supplier Screen...');
   navigation.navigate('EditSupplierScreen', {
   accessTokenSentToEditSupplier: accessTokenSentToSupplierScreen
   
  }); 
 };

 const onPressMoreDetailsInSupplierScreen = () =>
 {
  setCardSize(40);
  setShowMoreClickedInSupplierScreen(true);
  //alert('Index selected is:'+index);
  //setSelectedIndexNumber(index);
 };

 const onPressLessDetailsInSupplierScreen = () =>
 {
  setCardSize(26);
  setShowMoreClickedInSupplierScreen(false);
  //setSelectedIndexNumber(1000);
 };

 const onPressShareInSupplierScreen = () =>
 {
  alert('Share button pressed In Order Screen...');
 };




  

  return (
    
      <SafeAreaView style={{
        flex: 1,
        //backgroundColor: 'red',
      }}>
        <GestureHandlerRootView style={{
          flex: 1,
          height: height,
          width: width,
          //backgroundColor: 'purple',
        }}>
          <View style={styles.container}>
            <StatusBar backgroundColor="#283E65" barStyle={'light-content'} />
            <View
              style={{
                //flex: 1,
                width: width,
                backgroundColor: threeLineButtonClicked ? '#757575' : '#FBF8F1',
                //backgroundColor: 'green',
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}>
              {/* Another Module for curve background starts here: */}
              <ImageBackground
                source={require('../images/background.png')}
                resizeMode="cover"
                style={{
                  // marginTop: responsiveHeight(-5),      
  
                  //When using this code for making apk just uncomment this above marginTop:responsiveHeight(-5)
                  //because this marginTop: responsiveHeight(-5), is perfect for VSCode but not perfect for
                  //expo snake
                  //height: responsiveHeight(35),
                  height: responsiveHeight(37),
                  //marginBottom:responsiveHeight(-30),         
                }} />
              {/*Module for curve background Ends here: */}
  
              <GestureDetector gesture={gesture}>
                {/* Above is Starting of First GestureDetector */}
  
                <Animated.View>
                  {/*First View to hold our created Drawer Navigation Three line image button */}
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: responsiveHeight(-33),
                      //marginTop: responsiveHeight(-31),
                      //backgroundColor:'red',        
                    }}>
                    <TouchableOpacity
                      style={{ marginLeft: 20 }}
                      onPress={() =>
                        ChildRef.current.openSideNavigationMethod() ||
                        setthreeLineButtonClicked(
                          ChildRef.current.bringGrayColor
                        )
                      }>
                      <AllUITogether show={'SideDrawerThreeLineImage'} />
                    </TouchableOpacity>
                  </View>
                  {/*First View to hold Side Drawer Opening Icon ends here at below View  */}
  
  
  
  
  
  
                  {/* Second View for JEWEL CART text starts here: */}
                  <View>
                    <AllUITogether
                      show={'TopLabelForPagesListedInBottomNavigation'}
                      topLabelForPagesListedInBottomNavProps={'SUPPLIER'}
                      marginLeftPropsForTopLabelForPagesInBottomNav={responsiveWidth(31)}
                    />
                  </View>
                  {/* Second View for JEWEL CART text Ends here: */}
  
  
  
  
                  {/* Another Module for Search, Filter and Plus icon starts here: */ }
       <View styles={ { flexDirection: 'row' } }>
        <AllUITogether
         show={ 'TopSmallIcon' }
         dothisWhenTopSmallIconPressedProps={
          searchTopSmallIconPressedDoThis
         }
         bellNotificationNumberProps={ bellNotificationNumber }
         iconToDisplayPathProps={ require('../images/search_golden.png') }
         showBadgeAlsoprops={ false }
         widthOfTopSmallIconprops={ 22 }
         heightOfTopSmallIconprops={ 22 }
         //marginTopOfTopSmallIconprops={ -3.5 }
         //marginLeftOfTopSmallIconprops={ 71 }
         marginTopOfTopSmallIconprops={responsiveHeight(-3.5)}
                            marginLeftOfTopSmallIconprops={responsiveWidth(71)}
        />

        <AllUITogether
         show={ 'TopSmallIcon' }
         dothisWhenTopSmallIconPressedProps={
          searchTopSmallIconPressedDoThis
         }
         bellNotificationNumberProps={ bellNotificationNumber }
         iconToDisplayPathProps={ require('../images/filter_golden.png') }
         showBadgeAlsoprops={ false }
         widthOfTopSmallIconprops={ 22 }
         heightOfTopSmallIconprops={ 22 }
         //marginTopOfTopSmallIconprops={ -3.5 }
         //marginLeftOfTopSmallIconprops={ 80 }
         marginTopOfTopSmallIconprops={responsiveHeight(-3.5)}
                            marginLeftOfTopSmallIconprops={responsiveWidth(80)}
        />

        <AllUITogether
         show={ 'TopSmallIcon' }
         dothisWhenTopSmallIconPressedProps={
          plusTopSmallIconPressedDoThis
         }
         bellNotificationNumberProps={ bellNotificationNumber }
         iconToDisplayPathProps={ require('../images/plus.png') }
         showBadgeAlsoprops={ false }
         widthOfTopSmallIconprops={ 22 }
         heightOfTopSmallIconprops={ 22 }
         //marginTopOfTopSmallIconprops={ -3.5 }
         //marginLeftOfTopSmallIconprops={ 89 }
         marginTopOfTopSmallIconprops={responsiveHeight(-3.5)}
                            marginLeftOfTopSmallIconprops={responsiveWidth(89)}
        />
       </View>
       {/* Another Module for Search, Filter and Plus icon Ends here: */ }




       {callFetchDynamicAPIsInSupplierScreen == true ? (
        <FetchDynamicAPIs
         urlToFetchProps={ 'manage_supplier' }
         //mobileNumberForAuthentication={''}
         //passwordForAuthentication={''}
         accessTokenForFetchingAPIProps={
          accessTokenSentToSupplierScreen    
         }
         startProps={ '0' }
         limitProps={ '1000' }
         actionProps={ 'search' }
         sortByProps={ 'desc' }
         screenNameProps={ 'SupplierScreen' }
         getData={ getSupplierScreenData }
         /* This below props setterToStopCallingFetchDynamicAPIsInSupplierScreenprops is useful to pass, if we will not pass this props then once our Supplier screen will open, and our Flatlist with data of Supplier will get fetched, then if we will not make our callFetchDynamicAPIsInSupplierScreen variable to false, by sending this below props then when we will do any modification in our FlatList data of Supplier, like deleting any entry from flatlist, editing any entery or inserting any new entery in our Supplier list then our Flatlist will not get refreshed at the time of our changes done spontaniously because to refresh our flat list we have to call our FetchDynamicAPIs tag, and this tag will only be called when callFetchDynamicAPIsInSupplierScreen will be true, and if once we have filled our full FlatList of Supplier in our Screen and if we do not make callFetchDynamicAPIsInSupplierScreen to false by passing  setcallFetchDynamicAPIsInSupplierScreen as props then callFetchDynamicAPIsInSupplierScreen variable will store always true value, and when any changes will be done in our Flatlist like delete or edit or insert new data then our FetchDynamicAPIs tag will not be called because our Flatlist will never get refreshed.Because we have to toggle our callFetchDynamicAPIsInSupplierScreen variable to false to true everytime when we have to refresh our flatlist when any changes will be done, and if callFetchDynamicAPIsInSupplierScreen will only contain true everytime once our flatlist is called initially when screen opens then the callFetchDynamicAPIsInSupplierScreen will never get change to toggle and so when any changes will be done like edit or delete then our flatlist data will not be called again after any changes and so we will not see any rapid changes in flatlist when we will perform delete or edit.  */
         setterToStopCallingFetchDynamicAPIsInSupplierScreenprops={setcallFetchDynamicAPIsInSupplierScreen}
        />
       ) : null }
  
                 
  
  
  
  
                </Animated.View>
  
                {/* Below is Ending of First GestureDetector */}
              </GestureDetector>
  
              
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
              {isLoadingSupplierScreenData == true ? (
                    <ActivityIndicator size="large" color="#013F66" style={{marginTop:responsiveHeight(30)}} />
                  ) : (
                    <>
                     
         <FlatList
         style={{
                marginTop: responsiveHeight(-22.5),
                marginLeft: responsiveWidth(2.5),
                //marginBottom: responsiveHeight(16),
                height: responsiveHeight(60),
              }}
          numColumns={ 1 }
          data={ resultsecondForSupplierScreen }
          showsVerticalScrollIndicator={ false }
          renderItem={ ({ item, index }) =>
          {
           return (


            <View
             //Acutal View which is reponsible for all the items in card starts here
             style={ {
              width: responsiveWidth(90),
              //height: responsiveHeight(26),
              //height: responsiveHeight(cardSize),
              height:
               selectedIndexNumber == index
                ? responsiveHeight(44)
                : responsiveHeight(28),
              borderRadius: responsiveWidth(2),
              elevation: responsiveWidth(3),
              margin: 10,
              backgroundColor: threeLineButtonClicked
               ? '#757575'
               : '#fff',
             } }>
             {/*View to hold top view which is holding Number Label and Name, Mobile No. Order person details etc starts here*/ }
             <View
              style={
               {
                //flexDirection: 'row',
                //backgroundColor:'blue',
               }
              }>
              {/*View which will hold Number Label  starts here*/ }

              <AllUITogether
               show={ 'NumberLabelOnImage' }
               //numberLabelWidthProps={ 55 }
               numberLabelWidthProps={responsiveWidth(55)}
               numberFetchedFromAPIProps={
                'Supplier Code : ' + item.supplier_code
               }
               fontFamilyPropsforNumberLabel={
                'raleway-regular'
               }
              />
              {/*View which will hold Number Label  ends here*/ }

              {/*View which will hold Informations like Name, Mobile No. Order person starts here*/ }
              <View
               style={ {
                marginTop: responsiveHeight(4.5),
                marginLeft: responsiveWidth(2),
                //backgroundColor:'red'
               } }>
               {/*View to hold Category and its fetched name from api start here  */ }

               <AllUITogether
                show={ 'SingleLineToShowAPIFetchedData' }
                singleLineLabelProps={ 'Name' }
                //marginLeftProps={ 28.2 }
                marginLeftProps={ responsiveWidth(28.2) }
                fetchedValueFromAPI={ item.name }
                colorPropsForValue={'#A3A3A3'}
                fontFamilyProps={'raleway-regular'}
                //marginBottomProps={responsiveHeight(0)}
               />

               {/*View to hold Category and its fetched name from api ends here  */ }

               {/*View to hold Item and its fetched name from api start here  */ }

               <AllUITogether
                show={ 'SingleLineToShowAPIFetchedData' }
                singleLineLabelProps={ 'Mobile No.' }
                //marginLeftProps={ 18.2 }
                marginLeftProps={ responsiveWidth(18.2) }
                fetchedValueFromAPI={ item.mobileno }
                colorPropsForValue={'#A3A3A3'}
                fontFamilyProps={'raleway-regular'}
                //marginBottomProps={responsiveHeight(0)}
               />
               {/*View to hold Item and its fetched name from api ends here  */ }

               {/*View to hold Supplier and its fetched name from api start here  */ }

               <AllUITogether
                show={ 'SingleLineToShowAPIFetchedData' }
                singleLineLabelProps={ 'Order Person' }
                //marginLeftProps={ 13 }
                marginLeftProps={ responsiveWidth(13) }
                fetchedValueFromAPI={ item.contact_person }
                colorPropsForValue={'#A3A3A3'}
                fontFamilyProps={'raleway-regular'}
                //marginBottomProps={responsiveHeight(0)}
               />
               {/*View to hold Supplier and its fetched name from api ends here  */ }

               {/*View to hold Supplier and its fetched name from api start here  */ }

               <AllUITogether
                show={ 'SingleLineToShowAPIFetchedData' }
                singleLineLabelProps={ 'Order Person No.' }
                //marginLeftProps={ 4.9 }
                marginLeftProps={ responsiveWidth(4.9) }
                fetchedValueFromAPI={
                 item.contact_person_mobile
                }
                colorPropsForValue={'#A3A3A3'}
                fontFamilyProps={'raleway-regular'}
                //marginBottomProps={responsiveHeight(0)}
               />
               {/*View to hold Supplier and its fetched name from api ends here  */ }
              </View>
              {/*View which will hold Informations Name, Mobile No. Order person etc as stack one on other ends here*/ }
             </View>
             {/*View to hold top view which is holding Number Label and Name, Mobile No. Order person details etc ends here*/ }

             {/*Straight line starts here*/ }
             <View
              style={ {
               //backgroundColor:'purple',
               marginTop: responsiveHeight(1),
              } }>
              <AllUITogether show={ 'StraightLineDivider' } />
             </View>
             {/*Straight line ends here*/ }

             {/*View which will hold Address, City and State starts here*/ }
             {/* {showMoreClickedInSupplierScreen==true? */ }
             { selectedIndexNumber == index ? (
              <>
               <View
                style={ {
                 marginTop: responsiveHeight(1),
                 marginLeft: responsiveWidth(2),
                 //backgroundColor:'red'
                } }>
                {/*View to hold Item and its fetched name from api start here  */}

                <AllUITogether
                 show={ 'SingleLineToShowAPIFetchedData' }
                 singleLineLabelProps={ 'Address' }
                 //marginLeftProps={ 2 }
                 marginLeftProps={ responsiveWidth(2) }
                 fetchedValueFromAPI={ item.address }
                 colorPropsForValue={'#A3A3A3'}
                 fontFamilyProps={'raleway-regular'}
                //marginBottomProps={responsiveHeight(0)}
                />
                {/*View to hold Item and its fetched name from api ends here  */ }

                {/*View to hold Supplier and its fetched name from api start here  */ }

                <AllUITogether
                 show={ 'SingleLineToShowAPIFetchedData' }
                 singleLineLabelProps={ 'City' }
                 //marginLeftProps={ 11 }
                 marginLeftProps={ responsiveWidth(11) }
                 fetchedValueFromAPI={ item.city }
                 colorPropsForValue={'#A3A3A3'}
                 fontFamilyProps={'raleway-regular'}
                //marginBottomProps={responsiveHeight(0)}
                />
                {/*View to hold Supplier and its fetched name from api ends here  */ }

                {/*View to hold Supplier and its fetched name from api start here  */ }

                <AllUITogether
                 show={ 'SingleLineToShowAPIFetchedData' }
                 singleLineLabelProps={ 'State' }
                 //marginLeftProps={ 8.2 }
                 marginLeftProps={ responsiveWidth(8.2) }
                 fetchedValueFromAPI={ item.state }
                 colorPropsForValue={'#A3A3A3'}
                 fontFamilyProps={'raleway-regular'}
                //marginBottomProps={responsiveHeight(0)}
                />
                {/*View to hold Supplier and its fetched name from api ends here  */ }
               </View>

               {/*Straight line starts here*/ }
               <View
                style={ {
                 //backgroundColor:'purple',
                 marginTop: responsiveHeight(1),
                } }>
                <AllUITogether show={ 'StraightLineDivider' } />
               </View>
               {/*Straight line ends here*/ }
              </>
             ) : null }
             {/*View which will hold Address, City and State as stack one on other ends here*/ }










             {/*All Buttons in Order Screen starts here*/ }
             <View
              style={ {
               flexDirection: 'row',
               marginLeft: responsiveWidth(2),
               marginVertical: responsiveHeight(1.2),
              } }>

              <TouchableOpacity
               onPress={ () =>
               {
                toggleShowMoreBtn == false ? setSelectedIndexNumber(index) : setSelectedIndexNumber(1000)
                setToggleShowMoreBtn(true)

                toggleShowMoreBtn == true ? setToggleShowMoreBtn(false) : null





                //setShowMoreClickedInSupplierScreen(true);
               } }
               style={ {
                width: responsiveWidth(
                 30
                ),
                height: responsiveHeight(
                 4
                ),
                borderColor:
                 '#283E65',
                marginHorizontal: responsiveWidth(1),
                //borderWidth: responsiveWidth(0.4),
                borderWidth: responsiveWidth(
                 0.3
                ),
                justifyContent: 'center',
                alignItems: 'center',
                //padding:responsiveWidth(0.2),
                borderRadius: responsiveWidth(6),
                backgroundColor:
                 '#fff',
               } }>
               <Text
                style={ {
                 color:
                  '#283E65',
                 fontSize: responsiveFontSize(1.9),
                 fontFamily: 'raleway-regular',
                 marginTop: responsiveHeight(-0.5),
                 //alignItems: 'center',
                 textAlign: 'center',
                } }>
                { selectedIndexNumber == index ? 'Less Details' : 'More Details' }
               </Text>
              </TouchableOpacity>


              <View
               style={ {
                marginLeft: responsiveWidth(9),
                flexDirection: 'row',
               } }>
              {/*  <AllUITogether
                show={ 'SmallTouchableOpacity' }
                labelForSmallButton={ 'Edit' }
                todowhenSmallButtonClicked={
                 onPressEditInSupplierScreen
                }
                widthForSmallButton={ 20 }
                heightForSmallButton={ 4 }
                backgroundColorForSmallButtonProps={ '#00A410' }
                borderColorForSmallButtonProps={ '#00A410' }
                labelTextColorForSmallButtonProps={ 'white' }
                borderWidthForSmallTouchableOpacity={ 0.3 }
               /> */}
               <TouchableOpacity
                onPress={() => {
                  selectedIndexNumberToSendDataInEditSupplier =
                    index;

                  selectedIndexNumberToSendDataInEditSupplier ==
                  index
                    ? ((nameForSupplierScreen = item.name),
                      (supplierIDForSupplierScreen = item.id),
                      (mobileNumberForSupplierScreen =
                        item.mobileno),
                      (orderPersonForSupplierScreen =
                        item.contact_person),
                      (orderPersonNumberForSupplierScreen =
                        item.contact_person_mobile),
                      (addressForSupplierScreen = item.address),
                      (cityForSupplierScreen = item.city),
                      (stateForSupplierScreen = item.state),
                      (cityIDForSupplierScreen = item.city_id),
                      (stateIDForSupplierScreen = item.state_id),
                      (supplierCodeForSupplierScreen = item.supplier_code)
                      
                      )
                    : null;

                  alert(
                    'Name is:'+nameForSupplierScreen+'\n'+
                    'supplierIDForSupplierScreen is:'+supplierIDForSupplierScreen+'\n'+
                    'mobileNumberForSupplierScreen is:'+mobileNumberForSupplierScreen+'\n'+
                    'orderPersonForSupplierScreen is:'+orderPersonForSupplierScreen+'\n'+
                    'orderPersonNumberForSupplierScreen is:'+orderPersonNumberForSupplierScreen+'\n'+
                    'addressForSupplierScreen is:'+addressForSupplierScreen+'\n'+
                    'cityForSupplierScreen is:'+cityForSupplierScreen+'\n'+
                    'stateForSupplierScreen is:'+stateForSupplierScreen+'\n'+
                    'supplierCodeForSupplierScreen is:'+supplierCodeForSupplierScreen+'\n'+
                    'cityIDForSupplierScreen is:'+cityIDForSupplierScreen+'\n'+
                    'stateIDForSupplierScreen is:'+stateIDForSupplierScreen+'\n'
                    
                  );   

                   navigation.replace('EditSupplierScreen', {
                   accessTokenSentToEditSupplier: accessTokenSentToSupplierScreen,
                    nameToBeEdited: nameForSupplierScreen,
                    supplierIDToBeEdited:supplierIDForSupplierScreen,
                    mobileNumberToBeEdited:mobileNumberForSupplierScreen,
                    orderPersonToBeEdited:orderPersonForSupplierScreen,
                    orderPersonNumberToBeEdited:orderPersonNumberForSupplierScreen,
                    addressToBeEdited: addressForSupplierScreen,
                    cityToBeEdited: cityForSupplierScreen,
                    stateToBeEdited: stateForSupplierScreen,
                    cityIDToBeEdited: cityIDForSupplierScreen,
                    stateIDToBeEdited: stateIDForSupplierScreen,
                    supplierCodeToBeEdited: supplierCodeForSupplierScreen,   
                  }); 
                }}
                style={{
                  width: responsiveWidth(20),
                  height: responsiveHeight(4),
                  borderColor: '#00A410',
                  marginHorizontal: responsiveWidth(1),
                  //borderWidth: responsiveWidth(0.4),
                  borderWidth: responsiveWidth(0.3),
                  justifyContent: 'center',
                  alignItems: 'center',
                  //padding:responsiveWidth(0.2),
                  borderRadius: responsiveWidth(6),
                  backgroundColor: '#00A410',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: responsiveFontSize(1.9),
                    fontFamily: 'raleway-regular',
                    marginTop: responsiveHeight(-0.5),
                    //alignItems: 'center',
                    textAlign: 'center',
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>

              { /* <AllUITogether
                show={ 'SmallTouchableOpacity' }
                labelForSmallButton={ 'Delete' }
                todowhenSmallButtonClicked={
                 onPressDeleteInSupplierScreen
                }
                widthForSmallButton={ 20 }
                heightForSmallButton={ 4 }
                backgroundColorForSmallButtonProps={ '#C60001' }
                borderColorForSmallButtonProps={ '#C60001' }
                labelTextColorForSmallButtonProps={ 'white' }
                borderWidthForSmallTouchableOpacity={ 0.3 }
               /> */}

                <TouchableOpacity
                onPress={() => {
                  setAskDeleteOrNotModal(true);
                  selectedIndexNumberToDeleteDataInEditCustomer =
                    index;

                    if(resultsecondForSupplierScreen.length==1){

                  selectedIndexNumberToDeleteDataInEditCustomer ==
                  index
                    ?
                      (
                        customerIDForDeletingCustomer = item.id,  
                        setCustomerIDNowToDeleteIt(customerIDForDeletingCustomer)   
                      
                      )
                      
                      
                      
                    : null;
    
                    setLastCustomerInFlatListIsToBeDeleted(true);
                    
                    
                    
                    
                    }else{
                      selectedIndexNumberToDeleteDataInEditCustomer ==
                  index
                    ?
                      (
                        customerIDForDeletingCustomer = item.id,  
                        setCustomerIDNowToDeleteIt(customerIDForDeletingCustomer)   
                      
                      )
                      
                      
                         
                    : null;
                    }

                  //alert('Name which is being sent to Edit Customer Screen is:'+nameForCustomerScreen);

                  
                }}
                style={{
                  width: responsiveWidth(20),
                  height: responsiveHeight(4),
                  borderColor: '#C60001',
                  marginHorizontal: responsiveWidth(1),
                  //borderWidth: responsiveWidth(0.4),
                  borderWidth: responsiveWidth(0.3),
                  justifyContent: 'center',
                  alignItems: 'center',
                  //padding:responsiveWidth(0.2),
                  borderRadius: responsiveWidth(6),
                  backgroundColor: '#C60001',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: responsiveFontSize(1.9),
                    fontFamily: 'raleway-regular',
                    marginTop: responsiveHeight(-0.5),
                    //alignItems: 'center',
                    textAlign: 'center',
                  }}>
                  Delete   
                </Text>
              </TouchableOpacity>
              </View>
             </View>
             {/*All Buttons in Order Screen ends here*/ }
            </View>
            /*Acutal View which is reponsible for all the items in card ends here  */

            /*Root View inside FlatList return() ends here  */
           );
          } }
         />
         </>
                  )
          }
         
        
                  
       {/*View to end FlatList of Orders  */ }
  
  
  
       <AllUITogether
        show={ 'CustomeRoundBottomNavBar' }
        onPressOnHome={ homeIconClickedDoThis }
        homeIconColorprops={ '#fff' }
        homeTextColorProps={ '#fff' }
        onPressOnOrder={ orderIconClickedDoThis }
        orderIconColorprops={ '#fff' }
        orderTextColorProps={ '#fff' }
        onPressOnAddOrder={ addOrderIconClickedDoThis }
        onPressOnCustomer={ customerIconClickedDoThis }
        customerIconColorprops={ '#fff' }
        customerTextColorprops={ '#fff' }
        onPressOnSupplier={ supplierIconClickedDoThis }
        supplierIconColorprops={ '#F1CB8C' }
        supplierTextColorprops={ '#F1CB8C' }
       />
  
              <ActualSideNavigationMenu
                ref={ChildRef}
                removeGraycolorPropsLabel={removingNowGrayColor}
                gotoCategoryScreenPropsLabel={goToCategoryScreen}
                gotoCaratScreenPropsLabel={goToCaratScreen}
                goToAddStaffScreenPropsLabel={goToAddStaffScreen}
                gotoColorScreenPropsLabel={goToColorScreen}
                gotoSettingsScreenPropsLabel={goToSettingsScreen}
                gotoChangePasswordScreenPropsLabel={goToChangePasswordScreen}
  
                removeAllAsyncStorageInformation={removeData}
              />
  
  
  
              
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
            </View>
  
          </View>
  
  
        </GestureHandlerRootView>
      </SafeAreaView>
    );
};

export default SupplierScreen;    

const styles = StyleSheet.create({
 container: {
  //flex: 1,
  height: height,
  width: width,
  backgroundColor: 'purple',
 },

 flatListForOrdersViewStyle: {
  //height: responsiveHeight(75),
  //backgroundColor:'purple',
 },

 image: {
  height: responsiveHeight(35),
 },
 textlabelStyleForOrderScreen: {
  fontSize: responsiveHeight(2),
  fontFamily: 'raleway-regular',
  textAlign: 'center',
  marginLeft: responsiveWidth(1.5),
 },
 txtStyleWhichIsFetchedFromAPIInOrderScreen: {
  fontSize: responsiveHeight(2),
  fontFamily: 'raleway-regular',
  color: '#A3A3A3',
  textAlign: 'center',
  marginLeft: responsiveWidth(3),
 },
});   

