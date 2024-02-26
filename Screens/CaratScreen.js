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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const CaratScreen = ({ navigation }) => {
  const route = useRoute();
    
  
  const { 
        
     accessTokenSentToCaratScreen, 
     previousScreenName,
      } = route.params;
  
  
  
  
  
  
    let selectedIndexNumberToSendDataInEditCaratScreen = -1;
    
    let caratnameForCaratScreen = '';
    //let caratIDForCaratScreen = -1;
    let selectedIndexNumberToDeleteDataInCaratScreen = -1;
    let orderIDForDeletingOrder = '';
    let [categoryIDNowToDeleteIt, setcategoryIDNowToDeleteIt] = useState('');
    /* let [caratnameForCaratScreen, setcategorynameForCategoryScreen] = useState(null);
    let [caratIDForCaratScreen, setcaratIDForCaratScreen] = useState(null); */
    const [callFetchDynamicAPIsInCaratScreen,setcallFetchDynamicAPIsInCaratScreen]=useState(false);  
    const [callFetchDynamicAPIsInCaratScreenToDelete,setcallFetchDynamicAPIsInCaratScreenToDelete] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState(0);
    const [threeLineButtonClicked, setthreeLineButtonClicked] = useState(false);     
    const [noDataFoundForFlatListInCaratScreen,setNoDataFoundForFlatListInCaratScreen] = useState(false);
    let [resultFetchedFromCaratAPI, setResultFetchedFromCaratAPI] = useState([]);
  
    let [bellNotificationNumber, setBellNotificationNumber] = useState(0);
    const [askDeleteOrNotModalInCaratScreen,setaskDeleteOrNotModalInCaratScreen] = useState(false);
    
     //const [lastCaratInFlatListIsToBeDeleted,setlastCaratInFlatListIsToBeDeleted] = useState(false);
    const [lastCaratInFlatListIsToBeDeleted,setLastCaratInFlatListIsToBeDeleted] = useState(false);     
  
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
      alert('UseEffect called...');
      setcallFetchDynamicAPIsInCaratScreen(true);  
    }, []); 
  
  
  
  const yesDelete = () => {
      setaskDeleteOrNotModalInCaratScreen(false);
      setcallFetchDynamicAPIsInCaratScreenToDelete(true);
    };
  
    const noDelete = () => {
      setaskDeleteOrNotModalInCaratScreen(false);
      //alert('Second Option from Order screen in Interactive modal selected.');
    };
  
    const closeDeleteModalInCaratScreen = () => {
      setaskDeleteOrNotModalInCaratScreen(false);
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
        accessTokenKey: accessTokenSentToCaratScreen,
      });
      }else if(previousScreenName=='Order'){
        navigation.navigate('Order', {
        accessTokenSentToOrderScreen: accessTokenSentToCaratScreen,
      });
      }else if(previousScreenName=='CustomerScreen'){
        navigation.navigate('CustomerScreen', {
        accessTokenSentToCustomerScreen: accessTokenSentToCaratScreen,
      });
      }else if(previousScreenName=='SupplierScreen'){
        navigation.navigate('SupplierScreen', {
        accessTokenSentToSupplierScreen: accessTokenSentToCaratScreen,
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
  
     navigation.navigate('AddCaratScreen', {
     accessTokenSentToAddCaratScreen: accessTokenSentToCaratScreen,
     previousScreenName:previousScreenName    
    });       
   };
  
  
  
  /* const getCategoryScreenAsynData = () => {
      try {
        AsyncStorage.getItem('orderScreenFullDataKey').then((value) => {
          if (value != null) {
            //setNoDataFoundForFlatListInCaratScreen(false);
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
            //setNoDataFoundForFlatListInCaratScreen(true);
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
                topPageName={'CARATS'} 
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
           //marginTopOfTopSmallIconprops={ -3.5 }
           //marginLeftOfTopSmallIconprops={ 74 }
           marginTopOfTopSmallIconprops={responsiveHeight(-3.5)}
          marginLeftOfTopSmallIconprops={responsiveWidth(74)}
          />
            </View>
            </View>
            </View>
  
        {/*View which will hold back arrow image and EDIT ORDER text ends here   */}
  
  
        {callFetchDynamicAPIsInCaratScreen == true ? (
                  <FetchDynamicAPIs
                    urlToFetchProps={'carat_list'}
                    
                    accessTokenForFetchingAPIProps={accessTokenSentToCaratScreen}
                        
                    screenNameProps={'CaratScreen'}
                    setterForFillingFetchDataFromAPIInFlatListDirectly={setResultFetchedFromCaratAPI}
                    //getData={getCategoryScreenAsynData}
                    setterToStopCallingFetchDynamicAPIsInCaratScreenprops={
                      setcallFetchDynamicAPIsInCaratScreen    
                    }
                  />
                ) : null}
  
  
  
  
  
  
  
  
  
  
  
  
  
                {callFetchDynamicAPIsInCaratScreenToDelete ==
                                    true ? (
                                      <>
                                        <FetchDynamicAPIs
                                          urlToFetchProps={'manage_carat'}
                                          accessTokenForFetchingAPIProps={
                                            accessTokenSentToCaratScreen
                                          }
                                          actionProps={'delete'}
                                          //orderIDProps={categoryIDNowToDeleteIt}
                                          //idProps={caratIDForCaratScreen}  
                                          caratIDProps={caratIDForCaratScreen}  
                                          screenNameProps={'caratScreenForDelete'}   
                                          setNowcallingDeleteAPIVariableProps={
                                            setcallFetchDynamicAPIsInCaratScreenToDelete
                                          }
                                          setterForRefreshingOurFlatList={     
                                            setcallFetchDynamicAPIsInCaratScreen
                                          }
                                          setterForLastFlatListDataisToBeDeletedProps={
                                            setLastCaratInFlatListIsToBeDeleted
                                          }
                                          variableForLastFlatListDataisToBeDeletedProps={
                                            lastCaratInFlatListIsToBeDeleted
                                          }
                                          //removeFlatListDataFromAsynProps={removeDataForOrderScreenFromAsync}
                                          refreshOnLastFlatListDeletedSuccessfully={
                                            setResultFetchedFromCaratAPI
                                          }
                                          //changeTotalOrderProps={setResultForNo_Of_Order}
                                          setterForshowNoDataProps={
                                            setNoDataFoundForFlatListInCaratScreen
                                          }
                                          setNoDataToTrueInCaratScreen={
                                            setNoDataFoundForFlatListInCaratScreen
                                          }
                                          
                                        />
                                      </>
                                    ) : null}
  
  
  
  
  
  
  
  
  
  
  
  
                                    {askDeleteOrNotModalInCaratScreen == true ? (
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
                                          closeDeleteModalInCaratScreen
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
            data={resultFetchedFromCaratAPI}
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
                  height:responsiveHeight(6),
                 //flexDirection: 'row',
                 marginLeft: responsiveWidth(2),
                 //marginVertical: responsiveHeight(1),
                 flex:1,
                 justifyContent:'center',  
                 //backgroundColor:'purple',      
                }}>
  
  
  
  
                {/* Module for CaratScreen names starts here: */}
                
                 {/* <AllUITogether
                  show={'SimpleViewWithTextInside'}
                  showThisText={item.carat_name}    
                  textAlignProps={'left'}
                  backgroundColorPropsForSimpleViewWithTextInside={'white'}
                  widthPropsForSimpleViewWithTextInside={38}    
                  heightPropsForSimpleViewWithTextInside={3.1}                 
                  marginLeftPropsForSimpleViewWithTextInside={0}       
                  marginTopPropsForSimpleViewWithTextInside={0}           
                  fontSizePropsForSimpleViewWithTextInside={1.9}
  
  
                  color: '#A3A3A3',
                /> */}
                <AllUITogether
                  show={ 'SingleLineToShowAPIFetchedData' }
                  singleLineLabelProps={ 'Carat' }
                  //marginLeftProps={ 18 }    
                  marginLeftProps={ responsiveWidth(18) }
                  fetchedValueFromAPI={ item.carat_name }
                  colorPropsForValue={'black'}
                  //colorPropsForValue={'#A3A3A3'}
                  //fontFamilyProps={'raleway-semibold'}
                  fontFamilyProps={'raleway-regular'}
                  marginBottomProps={0}
                 />
                
                {/* Module for CaratScreen names Ends here: */}
  
                
               
               
               
               
               
               
               
                 
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
                    selectedIndexNumberToSendDataInEditCaratScreen =
                      index;
  
                    selectedIndexNumberToSendDataInEditCaratScreen ==
                    index
                      ? (
                        (caratnameForCaratScreen = item.carat_name),
                      (caratIDForCaratScreen = item.id)
                      )
                      : null;
  
                    alert(
                      '1. CaratScreen Name is:'+caratnameForCaratScreen+'\n'+
                      '2. CaratScreen ID is:'+caratIDForCaratScreen
                      
                    );   
  
                     navigation.replace('EditCaratScreen', {
                     accessTokenSentToEditCaratScreen: accessTokenSentToCaratScreen,
                      caratnameToBeEdited:caratnameForCaratScreen,
                      caratIDToBeEdited:caratIDForCaratScreen,
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
                     //alert('CaratScreen ID Selected is:'+item.id);    
                    setaskDeleteOrNotModalInCaratScreen(true);
                    selectedIndexNumberToDeleteDataInCaratScreen =index;
                      //alert('selectedIndexNumberToDeleteDataInCaratScreen is:'+selectedIndexNumberToDeleteDataInCaratScreen);     
                      if(resultFetchedFromCaratAPI?.length==1){
                         //alert('resultFetchedFromCaratAPI.length is:'+resultFetchedFromCaratAPI.length);   
                    selectedIndexNumberToDeleteDataInCaratScreen ==index
                      ?
                       (
                        (caratIDForCaratScreen =item.id),
                        //setcategoryIDNowToDeleteIt(caratIDForCaratScreen),
                        alert('1. caratIDForCaratScreen variable initially got this value using item.id:'+caratIDForCaratScreen)
  
                      )
                        
                        
                        
                      : null;
      
                      setLastCaratInFlatListIsToBeDeleted(true);
                      
                      
                      
                      
                      }else{
                        //alert('resultFetchedFromCaratAPI.length is:'+resultFetchedFromCaratAPI.length);
                        selectedIndexNumberToDeleteDataInCaratScreen ==index
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
  
  export default CaratScreen;
  
  
  
  const styles = StyleSheet.create({
    container: { flex: 1,height: height, width: width,backgroundColor:'purple'},
  
    
  
    image: {
      height: responsiveHeight(35),
      
      
    },
    
  });
  