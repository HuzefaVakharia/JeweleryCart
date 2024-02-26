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
  
  let colorIDForColorScreen = -1;
  
  //let colorIDForColorScreen =-1;    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const ColorScreen = ({ navigation }) => {
  const route = useRoute();
    
  
  const { 
        
     accessTokenSentToColorScreen, 
     previousScreenName,
      } = route.params;    
  
  
  
  
  
  
    let selectedIndexNumberToSendDataInEditColorScreen = -1;
    
    let colornameForColorScreen = '';
    //let colorIDForColorScreen =-1;
    let caratIDForColorScreen=-1;
    //let colorIDForColorScreen = -1;
    let selectedIndexNumberToDeleteDataInColorScreen = -1;
    let orderIDForDeletingOrder = '';
    let [categoryIDNowToDeleteIt, setcategoryIDNowToDeleteIt] = useState('');
    /* let [colornameForColorScreen, setcategorynameForCategoryScreen] = useState(null);
    let [colorIDForColorScreen, setcolorIDForColorScreen] = useState(null); */
    const [callFetchDynamicAPIsInColorScreen,setcallFetchDynamicAPIsInColorScreen]=useState(false);  
    const [callFetchDynamicAPIsInColorScreenToDelete,setcallFetchDynamicAPIsInColorScreenToDelete] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState(0);
    const [threeLineButtonClicked, setthreeLineButtonClicked] = useState(false);     
    const [noDataFoundForFlatListInColorScreen,setNoDataFoundForFlatListInColorScreen] = useState(false);
    let [resultFetchedFromColorAPI, setResultFetchedFromColorAPI] = useState([]);
  
    let [bellNotificationNumber, setBellNotificationNumber] = useState(0);
    const [askDeleteOrNotModalInColorScreen,setaskDeleteOrNotModalInColorScreen] = useState(false);
    
     //const [lastColorInFlatListIsToBeDeleted,setlastColorInFlatListIsToBeDeleted] = useState(false);
    const [lastColorInFlatListIsToBeDeleted,setLastColorInFlatListIsToBeDeleted] = useState(false);     
  
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
      alert('UseEffect got this access token: '+accessTokenSentToColorScreen);
      setcallFetchDynamicAPIsInColorScreen(true);
      /* if(callFetchDynamicAPIsInColorScreen==false)
      {
        //alert('callFetchDynamicAPIsInColorScreen is: '+callFetchDynamicAPIsInColorScreen);
        setcallFetchDynamicAPIsInColorScreen(true);
        //alert('callFetchDynamicAPIsInColorScreen after calling setter method is: '+callFetchDynamicAPIsInColorScreen);
      } */   
      //setcallFetchDynamicAPIsInColorScreen(true);  
      
    }, []); 
  
  
  
  const yesDelete = () => {
      setaskDeleteOrNotModalInColorScreen(false);
      setcallFetchDynamicAPIsInColorScreenToDelete(true);
    };
  
    const noDelete = () => {
      setaskDeleteOrNotModalInColorScreen(false);
      //alert('Second Option from Order screen in Interactive modal selected.');
    };
  
    const closeDeleteModalInColorScreen = () => {
      setaskDeleteOrNotModalInColorScreen(false);
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
  
      alert('From ColorScreen Left Back Button Pressed...');
  
       if(previousScreenName=='HomeScreen'){
        navigation.navigate('HomeScreen', {
        accessTokenKey: accessTokenSentToColorScreen,
      });
      }else if(previousScreenName=='Order'){
        navigation.navigate('Order', {
        accessTokenSentToOrderScreen: accessTokenSentToColorScreen,
      });
      }else if(previousScreenName=='CustomerScreen'){
        navigation.navigate('CustomerScreen', {
        accessTokenSentToCustomerScreen: accessTokenSentToColorScreen,
      });
      }else if(previousScreenName=='SupplierScreen'){
        navigation.navigate('SupplierScreen', {
        accessTokenSentToSupplierScreen: accessTokenSentToColorScreen,
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
  
     navigation.navigate('AddColorScreen', {
     accessTokenSentToAddColorScreen: accessTokenSentToColorScreen,
     previousScreenName:previousScreenName       
    });       
   };
  
  
  
  /* const getCategoryScreenAsynData = () => {
      try {
        AsyncStorage.getItem('orderScreenFullDataKey').then((value) => {
          if (value != null) {
            //setNoDataFoundForFlatListInColorScreen(false);
            //navigation.navigate('HomeScreen');
            //setLoginModalVisible(false);
            //setLoaderModalVisible(true);
            //alert('Value have data this:'+value);
            let user = JSON.parse(value);
  
            setResultsecond(user.OrderListDataTake);
            setResultForNo_Of_Order(user.No_of_orderDataTake);
            setIsLoadingOrderScreenData(false);
  
            //alert(' Process_order key got by user.Process_orderKey getdashboardData function:'+user.Process_orderKey);
  
            //alert(' Process_order Count got:'+process_orderKey);
          } else {
            //setNoDataFoundForFlatListInColorScreen(true);
          }
        });
  
        //alert(' Process_orderKey got in Homescreen after getdashboardData function:'+process_orderKey);
      } catch (error) {
        console.log(error);
      }
    };
   */
  
  
  
  
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
        <View
          style={{
            marginTop: responsiveHeight(-27),    
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
                dothisProps={gotoPreviousScreen}
                //dothisProps={gotoPreviousScreen}    
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
            dothisProps={gotoPreviousScreen}
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
                topPageName={'COLORS'} 
                marginLeftPropsForCenterTopTextForPageName={-7}
                marginTopPropsForCenterTopTextForPageName={0}
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
          // marginTopOfTopSmallIconprops={ -3.5 }
          // marginLeftOfTopSmallIconprops={ 74 }
          marginTopOfTopSmallIconprops={responsiveHeight(-3.5)}
          marginLeftOfTopSmallIconprops={responsiveWidth(74)}
          />
            </View>
            </View>
            </View>
  
        {/*View which will hold back arrow image and EDIT ORDER text ends here   */}
  
  
        {callFetchDynamicAPIsInColorScreen == true ? (
                  <FetchDynamicAPIs
                    urlToFetchProps={'color_list'}
                    
                    accessTokenForFetchingAPIProps={accessTokenSentToColorScreen}
                        
                    screenNameProps={'ColorScreen'}   
                    setterForFillingFetchDataFromAPIInFlatListDirectly={setResultFetchedFromColorAPI}
                    //getData={getCategoryScreenAsynData}
                    setterToStopCallingFetchDynamicAPIsInColorScreenprops={
                      setcallFetchDynamicAPIsInColorScreen    
                    }
                  />
                ) : null}
  
  
  
  
  
  
  
  
  
  
  
  
  
                {callFetchDynamicAPIsInColorScreenToDelete ==
                                    true ? (
                                      <>
                                        <FetchDynamicAPIs
                                          urlToFetchProps={'manage_color'}
                                          accessTokenForFetchingAPIProps={
                                            accessTokenSentToColorScreen
                                          }
                                          actionProps={'delete'}
                                          //orderIDProps={categoryIDNowToDeleteIt}
                                          //idProps={colorIDForColorScreen}   
                                          colorIDProps={colorIDForColorScreen}
                                          screenNameProps={'colorScreenForDelete'}   
                                          setNowcallingDeleteAPIVariableProps={
                                            setcallFetchDynamicAPIsInColorScreenToDelete
                                          }
                                          setterForRefreshingOurFlatList={     
                                            setcallFetchDynamicAPIsInColorScreen
                                          }
                                          setterForLastFlatListDataisToBeDeletedProps={
                                            setLastColorInFlatListIsToBeDeleted
                                          }
                                          variableForLastFlatListDataisToBeDeletedProps={   
                                            lastColorInFlatListIsToBeDeleted
                                          }
                                          //removeFlatListDataFromAsynProps={removeDataForOrderScreenFromAsync}
                                          refreshOnLastFlatListDeletedSuccessfully={
                                            setResultFetchedFromColorAPI
                                          }
                                          //changeTotalOrderProps={setResultForNo_Of_Order}
                                          setterForshowNoDataProps={
                                            setNoDataFoundForFlatListInColorScreen
                                          }
                                          setNoDataToTrueInColorScreen={
                                            setNoDataFoundForFlatListInColorScreen
                                          }
                                          
                                        />
                                      </>
                                    ) : null}
  
  
  
  
  
  
  
  
  
  
  
  
                                    {askDeleteOrNotModalInColorScreen == true ? (
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
                                          closeDeleteModalInColorScreen
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
            data={resultFetchedFromColorAPI}
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
                  height:responsiveHeight(9), 
                 //flexDirection: 'row',
                 marginLeft: responsiveWidth(2),
                 //marginVertical: responsiveHeight(1),
                 flex:1,
                 justifyContent:'center',  
                 //backgroundColor:'purple',      
                }}>
  
  
  
  
                {/* Module for ColorScreen names starts here: */}
                
                 
                <AllUITogether
                  show={ 'SingleLineToShowAPIFetchedData' }
                  singleLineLabelProps={ 'Color' }
                  //marginLeftProps={ 18 }
                  marginLeftProps={ responsiveWidth(18) }    
                  fetchedValueFromAPI={ item.color_name }
                  colorPropsForValue={'black'}
                  //colorPropsForValue={'#A3A3A3'}
                  fontFamilyProps={'raleway-regular'}
                  marginBottomProps={0}
                 />
  
  
  
  
                 <View style={{marginTop:responsiveHeight(1)}}> 
                 <AllUITogether
                  show={ 'SingleLineToShowAPIFetchedData' }
                  singleLineLabelProps={ 'Carat' }
                  //marginLeftProps={ 18 }  
                  marginLeftProps={ responsiveWidth(18) }  
                  fetchedValueFromAPI={ item.carat_name }
                  colorPropsForValue={'black'}
                  //colorPropsForValue={'#A3A3A3'}
                  fontFamilyProps={'raleway-regular'}
                  marginBottomProps={0}
                 />
                 </View>
                 
                
                {/* Module for ColorScreen names Ends here: */}
  
                
               
               
               
               
               
               
               
                 
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
                 style={ {
                  marginLeft: responsiveWidth(2),   
                  flexDirection: 'row',
                  marginTop:responsiveHeight(2),
                  marginBottom:responsiveHeight(2),
                 } }>
  
  
  
                 
                
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                  <TouchableOpacity
                   onPress={() => {
                    selectedIndexNumberToSendDataInEditColorScreen =
                      index;
  
                    selectedIndexNumberToSendDataInEditColorScreen ==
                    index
                      ? (
                        (colornameForColorScreen = item.color_name),
                        (colorIDForColorScreen=item.id),
                      (caratIDForColorScreen = item.carat_id)
                      )
                      : null;
  
                    alert(
                      '1. Color Name is:'+colornameForColorScreen+'\n'+
                      '2. Color ID is:'+colorIDForColorScreen+'\n'+
                      '3. Carrat ID is:'+caratIDForColorScreen    
                      
                    );   
  
                     navigation.replace('EditColorScreen', {
                     accessTokenSentToEditColorScreen: accessTokenSentToColorScreen,
                      colornameToBeEdited: colornameForColorScreen,
                      colorIDToBeEdited: colorIDForColorScreen,
                      caratIDToBeEdited:caratIDForColorScreen,
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
                     //alert('ColorScreen ID Selected is:'+item.id);    
                    setaskDeleteOrNotModalInColorScreen(true);
                    selectedIndexNumberToDeleteDataInColorScreen =index;
                      //alert('selectedIndexNumberToDeleteDataInColorScreen is:'+selectedIndexNumberToDeleteDataInColorScreen);     
                      if(resultFetchedFromColorAPI?.length==1){
                         //alert('resultFetchedFromColorAPI.length is:'+resultFetchedFromColorAPI.length);   
                    selectedIndexNumberToDeleteDataInColorScreen ==index
                      ?
                       (
                        (colorIDForColorScreen =item.id),
                        //setcategoryIDNowToDeleteIt(colorIDForColorScreen),
                        alert('1. colorIDForColorScreen variable initially got this value using item.id:'+colorIDForColorScreen)
  
                      )
                        
                        
                        
                      : null;
      
                      setLastColorInFlatListIsToBeDeleted(true);
                      
                      
                      
                      
                      }else{   
                        //alert('resultFetchedFromColorAPI.length is:'+resultFetchedFromColorAPI.length);
                        selectedIndexNumberToDeleteDataInColorScreen ==index
                      ?    
                        (
                        (colorIDForColorScreen =item.id),
                        //setcategoryIDNowToDeleteIt(colorIDForColorScreen),
                        alert('1. colorIDForColorScreen variable initially got this value using item.id:'+colorIDForColorScreen)
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
  
  export default ColorScreen;
  
  
  
  const styles = StyleSheet.create({
    container: { flex: 1,height: height, width: width,backgroundColor:'purple'},
  
    
  
    image: {
      height: responsiveHeight(35),
      
      
    },
    
  });
  