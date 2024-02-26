/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import {
    View,
    Dimensions,
    Text,
    ImageBackground,
    StyleSheet,
    Image,
    TouchableHighlight,
    //Animated,
    TouchableOpacity,
    FlatList,
    BackHandler,
    SafeAreaView,
    Modal,
    ActivityIndicator,
    Alert,
    StatusBar,
    KeyboardAvoidingView,
    DrawerContentScrollView,
    DrawerItemList,
    SimpleLineIcons,
    ScrollView,
    ToastAndroid,
    Easing,
  } from 'react-native';
  import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import FetchDynamicAPIs from '../components/FetchDynamicAPIs';
  //import { useFonts } from 'expo-font';
  import AllUITogether from '../components/AllUITogether';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  import { useRoute } from '@react-navigation/native';   
  
  
  
  
  import { Badge } from '@rneui/themed';
  
  
  
  
  let { height, width } = Dimensions.get('window');
  
  
  
  //import DrawerNavigationMenuItem from '../components/DrawerNavigationMenuItem';
  import React, { useState, useEffect, useRef,useCallback, } from 'react';
  
  let caratIDForCaratScreen = -1;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const AddStaffScreen = ({ navigation }) => {
  const route = useRoute();
    
  
  const { 
        
     accessTokenSentToAddStaffScreen, 
     previousScreenName,
      } = route.params;
  
  
  
  
  
  
    let selectedIndexNumberToSendDataInEditAddStaffScreen = -1;
    /* 
     let [name, setname] = useState('');
    let [contactNumber, setContactNumber] = useState('');
    let [email, setEmail] = useState('');
    
    let [password, setPassword] = useState('');
    
    let [contact_personName, setContactPersonName] = useState('');
    let [contact_person_no, setContactPersonNo] = useState('');
    let [address, setAddress] = useState('');
    let [state, setState] = useState('');
    let [city, setCity] = useState('');
    let [pincode, setPincode] = useState('');
    let [stateIDInEditStaffScreen, setStateIDInEditStaffScreen] = useState(0);
   let [cityIDInEditStaffScreen, setCityIDInEditStaffScreen] = useState(0);
    
     */
    let staffID = '';
    let name_ofStaffPerson='';
    let contactNumber='';
    let email='';
    let password='';
    let contact_personName='';
    let contact_person_no='';
    let address='';
    let state='';
    let city='';
    let pincode='';
    let stateIDInEditStaffScreen='';
    let cityIDInEditStaffScreen='';
    let role='';
    
  
  
  
  
  
  
  
  
    //let caratIDForCaratScreen = -1;
    let selectedIndexNumberToDeleteDataInAddStaff = -1;
    let orderIDForDeletingOrder = '';
    let [categoryIDNowToDeleteIt, setcategoryIDNowToDeleteIt] = useState('');
    /* let [caratnameForCaratScreen, setcategorynameForCategoryScreen] = useState(null);
    let [caratIDForCaratScreen, setcaratIDForCaratScreen] = useState(null); */
    const [callFetchDynamicAPIsInAddStaff,setcallFetchDynamicAPIsInAddStaff]=useState(false);  
    const [callFetchDynamicAPIsInAddStaffToDelete,setcallFetchDynamicAPIsInAddStaffToDelete] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState(0);
    const [threeLineButtonClicked, setthreeLineButtonClicked] = useState(false);     
    const [noDataFoundForFlatListInAddStaff,setNoDataFoundForFlatListInAddStaff] = useState(false);
    let [resultFetchedFromAddStaffAPI, setResultFetchedFromAddStaffAPI] = useState([]);
  
    let [bellNotificationNumber, setBellNotificationNumber] = useState(0);
    const [askDeleteOrNotModalInAddStaff,setaskDeleteOrNotModalInAddStaff] = useState(false);
    
     //const [lastStaffInFlatListIsToBeDeleted,setlastStaffInFlatListIsToBeDeleted] = useState(false);
    const [lastStaffInFlatListIsToBeDeleted,setlastStaffInFlatListIsToBeDeleted] = useState(false);     
  
    const [logedInPersonName, setLogedInPersonName] = useState('');
    const [logedInPersonContact_No, setLogedInPersonContact_No] = useState('');
  
  
    
  
     useEffect(() => {
      const backAction = () => {
        navigation.goBack();
        
        return true;
      };
  
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction
      );
  
      return () => backHandler.remove();
    }, []); 
  
  
  
  
  
  
    useEffect(() => {
      //alert('UseEffect called...');
      setcallFetchDynamicAPIsInAddStaff(true);  
    }, []); 
  
  
  
  const yesDelete = () => {
      setaskDeleteOrNotModalInAddStaff(false);
      setcallFetchDynamicAPIsInAddStaffToDelete(true);
    };
  
    const noDelete = () => {
      setaskDeleteOrNotModalInAddStaff(false);
      //alert('Second Option from Order screen in Interactive modal selected.');
    };
  
    const closeDeleteModalInAddStaff = () => {
      setaskDeleteOrNotModalInAddStaff(false);
      //alert('Back Btn pressed');      
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
  
    
  
  
  const gotoOrderScreen = () => {
     /*  navigation.navigate('Order', {
        accessTokenSentToOrderScreen: accessTokenSentToEditOrder,
      });
      singleFileButArrayForEdit=[]; */
      //arrayOfimagesCapturedUsingCamera=[];
  
    };
  
  
  
  
    const gotoPreviousScreen = () => {
  
      
  
       if(previousScreenName=='HomeScreen'){
        navigation.navigate('HomeScreen', {
        accessTokenKey: accessTokenSentToAddStaffScreen,
      });
      }else if(previousScreenName=='Order'){
        navigation.navigate('Order', {
        accessTokenSentToOrderScreen: accessTokenSentToAddStaffScreen,
      });
      }else if(previousScreenName=='CustomerScreen'){
        navigation.navigate('CustomerScreen', {
        accessTokenSentToCustomerScreen: accessTokenSentToAddStaffScreen,
      });
      }else if(previousScreenName=='SupplierScreen'){
        navigation.navigate('SupplierScreen', {
        accessTokenSentToSupplierScreen: accessTokenSentToAddStaffScreen,
      });
      }     
        //navigation.goBack();   
  
  
       /* navigation.navigate('Order', {
        accessTokenSentToOrderScreen: accessTokenSentToEditOrder,
      });
      singleFileButArrayForEdit=[]; */ 
      //arrayOfimagesCapturedUsingCamera=[];
  
    };
      
  
  
   const plusTopSmallIconPressedDoThis = () =>
   {
    alert('plus icon button pressed...');
  
     navigation.navigate('AddStaffFormScreen',{
     accessTokenSentToAddStaffFormScreen: accessTokenSentToAddStaffScreen,
     previousScreenName:previousScreenName    
    });       
   };
  
  
  
  
  
  
  
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
  
    
  
  
  
                    
        <StatusBar backgroundColor="#283E65" barStyle={'light-content'} />
        {/* <AllUITogether show="ImageBackgroundWhichContainsChildren"></AllUITogether> */}
  
        <ImageBackground
            source={ require('../images/background.png') }
            resizeMode="cover"
            style={ {
             marginTop: responsiveHeight(-5),      
  
              //When using this code for making apk just uncomment this above marginTop:responsiveHeight(-5)
              //because this marginTop: responsiveHeight(-5), is perfect for VSCode but not perfect for
              //expo snake
              height: responsiveHeight(35),
  
              //marginBottom:responsiveHeight(-30),         
            } }/>
  
  
        {/*View which will hold back arrow image and EDIT ORDER text starts here  */}
                  <View style={{
                    marginTop:responsiveHeight(-27),    
                    //backgroundColor:'purple',
                    }}>
                  <View
                    style={{
                      marginTop: responsiveHeight(0.5),
                      marginLeft: responsiveWidth(-4),
                      //marginBottom: responsiveHeight(10),
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
                          //dothisProps={gotoCategoryScreen}    
                        dothisProps={gotoPreviousScreen}
                        iconDesignName={'left'}
                  colorForIconinAntDesignBtn={'gold'}
                  backgroundColorForIconinAntDesignBtn={'transparent'}
                  sizeForIconinAntDesignBtn={26}
                  boardRadiusForIconinAntDesignBtn={10}
                  widthForIconinAntDesignBtn={11}
                  heightForIconinAntDesignBtn={6}
                  marginLeftForIconinAntDesignBtn={5}
                  marginTopForIconinAntDesignBtn={1.5}   
                  boardColorForIconinAntDesignBtn={'transparent'}
                  boardWidthForIconinAntDesignBtn={0}
                      />*/}
                      <AllUITogether
            show={'AntIconBtn'}
              dothisProps={gotoPreviousScreen}    
            //dothisProps={gotoPreviousScreen}
            iconDesignName={'left'}
            colorForIconinAntDesignBtn={'gold'}
            backgroundColorForIconinAntDesignBtn={'transparent'}
            sizeForIconinAntDesignBtn={26}
            boardRadiusForIconinAntDesignBtn={10}
            widthForIconinAntDesignBtn={responsiveWidth(11)}
            heightForIconinAntDesignBtn={responsiveHeight(6)}
            marginLeftForIconinAntDesignBtn={responsiveWidth(5)}
            marginTopForIconinAntDesignBtn={responsiveHeight(1.5)}   
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
                        topPageName={'ADD'}
                        marginLeftPropsForCenterTopTextForPageName={-7}
                        marginTopPropsForCenterTopTextForPageName={0}
                      />
  
                      <AllUITogether
                        show={'CenterTopTextForPageName'}
                        topPageName={'STAFF'}
                        marginLeftPropsForCenterTopTextForPageName={-7}
                        marginTopPropsForCenterTopTextForPageName={-2}
                      />
  
  
  
                     
                    </View>
                     
                     
                     
                  </View>
                  
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
                      //marginTopOfTopSmallIconprops={ -7 }
                      //marginLeftOfTopSmallIconprops={ 90 }
                      marginTopOfTopSmallIconprops={responsiveHeight(-7)}
                  marginLeftOfTopSmallIconprops={responsiveWidth(90)}
                      />
                     
                  </View>
  
                  {/*View which will hold back arrow image and EDIT ORDER text ends here   */ }
  
  
        {callFetchDynamicAPIsInAddStaff == true ? (
                  <FetchDynamicAPIs
                    urlToFetchProps={'manage_staff'}
                    actionProps={'search'}
                    startProps={'0'}
                    limitProps={'10000'}
                    
                    accessTokenForFetchingAPIProps={accessTokenSentToAddStaffScreen}
                        
                    screenNameProps={'AddStaffScreen'}
                    setterForFillingFetchDataFromAPIInFlatListDirectly={setResultFetchedFromAddStaffAPI}
                    //getData={getCategoryScreenAsynData}
                    setterToStopCallingFetchDynamicAPIsInAddStaffprops={
                      setcallFetchDynamicAPIsInAddStaff    
                    }
                  />
                ) : null}
  
  
  
  
  
  
  
  
  
  
  
  
  
                {callFetchDynamicAPIsInAddStaffToDelete ==
                                    true ? (
                                      <>
                                        <FetchDynamicAPIs
                                          urlToFetchProps={'manage_carat'}
                                          accessTokenForFetchingAPIProps={
                                            accessTokenSentToAddStaffScreen
                                          }
                                          actionProps={'delete'}
                                          //orderIDProps={categoryIDNowToDeleteIt}
                                          //idProps={caratIDForCaratScreen}  
                                          caratIDProps={caratIDForCaratScreen}  
                                          screenNameProps={'caratScreenForDelete'}   
                                          setNowcallingDeleteAPIVariableProps={
                                            setcallFetchDynamicAPIsInAddStaffToDelete
                                          }
                                          setterForRefreshingOurFlatList={     
                                            setcallFetchDynamicAPIsInAddStaff
                                          }
                                          setterForLastFlatListDataisToBeDeletedProps={
                                            setlastStaffInFlatListIsToBeDeleted
                                          }
                                          variableForLastFlatListDataisToBeDeletedProps={
                                            lastStaffInFlatListIsToBeDeleted
                                          }
                                          //removeFlatListDataFromAsynProps={removeDataForOrderScreenFromAsync}
                                          refreshOnLastFlatListDeletedSuccessfully={
                                            setResultFetchedFromAddStaffAPI
                                          }
                                          //changeTotalOrderProps={setResultForNo_Of_Order}
                                          setterForshowNoDataProps={
                                            setNoDataFoundForFlatListInAddStaff
                                          }
                                          setNoDataToTrueInAddStaff={
                                            setNoDataFoundForFlatListInAddStaff
                                          }
                                          
                                        />
                                      </>
                                    ) : null}
  
  
  
  
  
  
  
  
  
  
  
  
                                    {askDeleteOrNotModalInAddStaff == true ? (
                                      <AllUITogether
                                        show={'InteractiveModalWithTwoOptions'}
                                        //widthPropsForInteractiveModal={78}
                                        //heightPropsForInteractiveModal={19}
                                        widthPropsForInteractiveModal={responsiveWidth(78)}
                                        heightPropsForInteractiveModal={responsiveHeight(19)}
                                        questionToAskForInteractiveModalProps={
                                          'Do you really want to ' +
                                          '\n' +
                                          'delete?'
                                        }
                                        interactiveModalFirstOptionLabelProps={
                                          'Yes'
                                        }
                                        interactiveModalSecondOptionLabelProps={
                                          'No'
                                        }
                                        tasktoDowhenFirstOptionSelectedProps={
                                          yesDelete
                                        }
                                        tasktoDowhenSecondOptionSelectedProps={
                                          noDelete
                                        }
                                        doWhenBackBtnPressedOnInteractiveModalWithTwoOptions={
                                          closeDeleteModalInAddStaff
                                        }
                                      />
                                    ) : null}
  
        <View style={{
          marginTop:responsiveHeight(3.5),
          flex:1,
          alignItems:'center',    
          //justifyContent:'center',
          }}>
        {/*FlatList code starts here  */}
         <FlatList
            numColumns={ 1 }
            data={resultFetchedFromAddStaffAPI}
            //data={[1,1,1,1]}
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
                
                borderRadius: responsiveWidth(3),
                elevation: responsiveWidth(3),
                //margin: 10,
                marginBottom:responsiveHeight(1),   
                //marginTop:responsiveHeight(2),    
                backgroundColor:'#fff',     
                //backgroundColor:'purple',
               } }>
               {/*View to hold top view which is holding Number Label and Name, Mobile No. Order person details etc starts here*/ }
                 
  
                
              
  
  
  
  
  
  
  
               {/*All Buttons in Order Screen starts here*/ }
               <View
                style={{    
                  //height:responsiveHeight(6),
                 //flexDirection: 'row',
                 marginLeft: responsiveWidth(2),
                 //marginVertical: responsiveHeight(1),
                 flex:1,
                 justifyContent:'center',  
                 //backgroundColor:'purple',      
                }}>
  
  
  
  
                {/* Module for AddStaffScreen names starts here: */}
                
                 
                <AllUITogether
                  show={ 'SingleLineToShowAPIFetchedData' }
                  singleLineLabelProps={ 'Name' }
                  //marginLeftProps={ 15 }
                  marginLeftProps={ responsiveWidth(15) }    
                  fetchedValueFromAPI={ item.name }
                  colorPropsForValue={'black'}
                  fontFamilyProps={'raleway-semibold'}
                  //fontFamilyProps={'raleway-regular'}  
                  marginBottomProps={0.5}     
                  //colorPropsForValue={'#A3A3A3'}
                 />
  
                 <AllUITogether
                  show={ 'PlusNineOneBeforInSingleLineToShowAPIFetchedData' }
                  singleLineLabelProps={ 'Mobile No.' }
                      
                  fetchedValueFromAPI={ item.mobileno }
                  colorPropsForValue={'black'}
                  fontFamilyProps={'raleway-semibold'}
                  //fontFamilyProps={'raleway-regular'}
                  marginBottomProps={responsiveHeight(0.5)}
                  marginLeftProps={ responsiveWidth(5) }
                  //colorPropsForValue={'#A3A3A3'}
                 />
  
                 <AllUITogether
                  show={ 'SingleLineToShowAPIFetchedData' }
                  singleLineLabelProps={ 'State' }
                  //marginLeftProps={ 17 }    
                  marginLeftProps={ responsiveWidth(17) }
                  fetchedValueFromAPI={ item.state }
                  colorPropsForValue={'black'}
                  fontFamilyProps={'raleway-semibold'}
                  //fontFamilyProps={'raleway-regular'}
                  marginBottomProps={0.5}
                  //colorPropsForValue={'#A3A3A3'}
                 />
  
                 <AllUITogether
                  show={ 'SingleLineToShowAPIFetchedData' }
                  singleLineLabelProps={ 'City' }
                  //marginLeftProps={ 20 }        
                  marginLeftProps={ responsiveWidth(20) }
                  fetchedValueFromAPI={ item.city }
                  colorPropsForValue={'black'}
                  fontFamilyProps={'raleway-semibold'}
                  //fontFamilyProps={'raleway-regular'}
                  marginBottomProps={0.5}
                  //colorPropsForValue={'#A3A3A3'}
                 />
                
                {/* Module for AddStaffScreen names Ends here: */}
  
                
               
               
               
               
               
               
               
                 
               </View>
  
               
               
               
               
               
               
               
               
               
               
               
               
               {/*Straight line starts here*/ }   
               <View
                style={ {
                 //backgroundColor:'purple',
                 marginTop: responsiveHeight(-0.5),
                } }>
                <AllUITogether show={ 'StraightLineDivider' } />
               </View>
               {/*Straight line ends here*/ }
  
  
  
  
  
  
  
  
  
                <View
                 style={{
                  marginLeft: responsiveWidth(2),   
                  flexDirection: 'row', 
                  marginTop:responsiveHeight(2),
                  marginBottom:responsiveHeight(2),
                 }}>
  
  
  
                 
                
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                  <TouchableOpacity
                   onPress={() => {
                    selectedIndexNumberToSendDataInEditAddStaffScreen =
                      index;
  
                    selectedIndexNumberToSendDataInEditAddStaffScreen ==
                    index
                      ? (
                        /* 
                         let staffID = '';
                          let name_ofStaffPerson='';
                          let contactNumber='';
                          let email='';
                          let password='';
                          let contact_personName='';
                          let contact_person_no='';
                          let address='';
                          let state='';
                          let city='';
                          let pincode='';
                          let stateIDInEditStaffScreen='';
                          let cityIDInEditStaffScreen='';
  
  
  
  
                          "id": 1,
                  "name": "Staff",
                  "mobileno": "9979629966",
                  "city_id": "4478",
                  "state_id": "12",
                  "state": "Gujarat",
                  "city": "Rajkot",
                  "address": "123456",
                  "contact_person": "Staff",
                  "pincode": "360001",
                  "email": "staff@gmail.com",
                  "role": "Staff",
                  "password": "$2y$10$0tykoXIKaMscOm5lL7K6AeqiQ29lkVV8ocHv0X0vHhC5X.ID5sxC6",
                  "contact_person_mobile": "9979629966"
                         */
                      
                        (staffID = item.id),
                      (name_ofStaffPerson = item.name),
                      (contactNumber = item.mobileno),
                      (email = item.email),
                      (password = item.password),
                      (contact_personName = item.contact_person),
                      (contact_person_no = item.contact_person_mobile),
                      (address = item.address),
                      (state = item.state),
                      (city = item.city),
                      (pincode = item.pincode),
                      (stateIDInEditStaffScreen = item.state_id),
                      (cityIDInEditStaffScreen = item.city_id),
                      (role = item.role)
                      )
                      : null;
  
                   /*  alert(
                      '1. AddStaffScreen Name is:'+caratnameForCaratScreen+'\n'+
                      '2. AddStaffScreen ID is:'+caratIDForCaratScreen
                      
                    );    */
  
                     navigation.replace('EditStaffScreen', {
                     accessTokenSentToEditStaffScreen: accessTokenSentToAddStaffScreen,
                      staffID:staffID,
                      name_ofStaffPerson:name_ofStaffPerson,
                      contactNumber:contactNumber,
                      email:email,
                      password:password,
                      contact_personName:contact_personName,
                      contact_person_no:contact_person_no,
                      address:address,
                      state:state,
                      city:city,
                      pincode:pincode,
                      role:role,
                      stateIDInEditStaffScreen:stateIDInEditStaffScreen,
                      cityIDInEditStaffScreen:cityIDInEditStaffScreen,
                      previousScreenName:previousScreenName
                         
                    }); 
                  }} 
                  style={{
                    width: responsiveWidth(20),
                    height: responsiveHeight(4),
                    borderColor: '#00A410',
                    //marginHorizontal: responsiveWidth(1),
                    marginLeft:responsiveWidth(2),     
                    marginRight:responsiveWidth(36),   
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
  
                
  
                  
                
                
                
                
                
                
                <TouchableOpacity
                   onPress={() => {
                     //alert('AddStaffScreen ID Selected is:'+item.id);    
                    setaskDeleteOrNotModalInAddStaff(true);
                    selectedIndexNumberToDeleteDataInAddStaff =index;
                      //alert('selectedIndexNumberToDeleteDataInAddStaff is:'+selectedIndexNumberToDeleteDataInAddStaff);     
                      if(resultFetchedFromAddStaffAPI?.length==1){
                         //alert('resultFetchedFromAddStaffAPI.length is:'+resultFetchedFromAddStaffAPI.length);   
                    selectedIndexNumberToDeleteDataInAddStaff ==index
                      ?
                       (
                        (caratIDForCaratScreen =item.id),
                        //setcategoryIDNowToDeleteIt(caratIDForCaratScreen),
                        alert('1. caratIDForCaratScreen variable initially got this value using item.id:'+caratIDForCaratScreen)
  
                      )
                        
                        
                        
                      : null;
      
                      setlastStaffInFlatListIsToBeDeleted(true);
                      
                      
                      
                      
                      }else{
                        //alert('resultFetchedFromAddStaffAPI.length is:'+resultFetchedFromAddStaffAPI.length);
                        selectedIndexNumberToDeleteDataInAddStaff ==index
                      ?    
                        (
                        (caratIDForCaratScreen =item.id),
                        //setcategoryIDNowToDeleteIt(caratIDForCaratScreen),
                        alert('1. caratIDForCaratScreen variable initially got this value using item.id:'+caratIDForCaratScreen)
                        )
                        
                        
                           
                      : null;
                      }
  
                    //alert('Name which is being sent to Edit Customer Screen is:'+nameForCustomerScreen);
  
                    
                  } 
                  
                  
                  }
                  style={{
                    //position: 'absolute',
                      //left: responsiveWidth(20),
                      //top:responsiveHeight(-0.4),                 
                      //zIndex: 1,        
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
               {/*All Buttons in Order Screen ends here*/ }
              </View>
              /*Acutal View which is reponsible for all the items in card ends here  */
  
              /*Root View inside FlatList return() ends here  */
             );
            } }
           />
           </View>
        {/*  */}
  
  
        
  
        </SafeAreaView>
      
    );
  };
  
  export default AddStaffScreen;
  
  
  
  const styles = StyleSheet.create({
    container: { flex: 1,height: height, width: width,backgroundColor:'purple'},
  
    
  
    image: {
      height: responsiveHeight(35),
      
      
    },
    
  });
  
  
  
  /* 
  {
      "result": true,
      "data": {
          "staff": [
              {
                  "id": 1,
                  "name": "Staff",
                  "mobileno": "9979629966",
                  "city_id": "4478",
                  "state_id": "12",
                  "state": "Gujarat",
                  "city": "Rajkot",
                  "address": "123456",
                  "contact_person": "Staff",
                  "pincode": "360001",
                  "email": "staff@gmail.com",
                  "role": "Staff",
                  "password": "$2y$10$0tykoXIKaMscOm5lL7K6AeqiQ29lkVV8ocHv0X0vHhC5X.ID5sxC6",
                  "contact_person_mobile": "9979629966"
              },
              {
                  "id": 3,
                  "name": "Staff2",
                  "mobileno": "997894",
                  "city_id": "1693",
                  "state_id": "5",
                  "state": "Bihar",
                  "city": "Lauriya",
                  "address": "Rajkot",
                  "contact_person": "Staff",
                  "pincode": "360001",
                  "email": "12345",
                  "role": "Staff",
                  "password": "$2y$10$thdQuLvxq0HGJmcER7dDye8CElL8ToQxXcFuZdVLLdLixYtVZ0X9q",
                  "contact_person_mobile": "99795"
              }
          ],
          "is_nextpage": "No"
      },
      "message": "staff List"
  }
  
  
  
  
   */
  