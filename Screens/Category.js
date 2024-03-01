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

let categoryIDForCategoryScreen = -1;
















const Category = ({ navigation }) => {
const route = useRoute();
  

const { 
   
   accessTokenSentToCategoryScreen, 
   previousScreenName,
    } = route.params;






  let selectedIndexNumberToSendDataInEditCategoryScreen = -1;
  
  let categorynameForCategoryScreen = '';
  //let categoryIDForCategoryScreen = -1;
  let selectedIndexNumberToDeleteDataInCategoryScreen = -1;
  let orderIDForDeletingOrder = '';
  let [categoryIDNowToDeleteIt, setcategoryIDNowToDeleteIt] = useState('');
  /* let [categorynameForCategoryScreen, setcategorynameForCategoryScreen] = useState(null);
  let [categoryIDForCategoryScreen, setcategoryIDForCategoryScreen] = useState(null); */
  const [callFetchDynamicAPIsInCategoryScreen,setcallFetchDynamicAPIsInCategoryScreen]=useState(false);  
  const [callFetchDynamicAPIsInCategoryScreenToDelete,setcallFetchDynamicAPIsInCategoryScreenToDelete] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);
  const [threeLineButtonClicked, setthreeLineButtonClicked] = useState(false);     
  const [noDataFoundForFlatListInCategoryScreen,setNoDataFoundForFlatListInCategoryScreen] = useState(false);
  let [resultFetchedFromCategoryAPI, setResultFetchedFromCategoryAPI] = useState([]);

  let [bellNotificationNumber, setBellNotificationNumber] = useState(0);
  const [askDeleteOrNotModalInCategoryScreen,setaskDeleteOrNotModalInCategoryScreen] = useState(false);
  
   const [lastOrderInFlatListIsToBeDeleted,setLastOrderInFlatListIsToBeDeleted] = useState(false);
  const [lastCategoryInFlatListIsToBeDeleted,setLastCategoryInFlatListIsToBeDeleted] = useState(false);     

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
    setcallFetchDynamicAPIsInCategoryScreen(true);  
  }, []); 



const yesDeleteOrder = () => {
    setaskDeleteOrNotModalInCategoryScreen(false);
    setcallFetchDynamicAPIsInCategoryScreenToDelete(true);
  };

  const noDeleteOrder = () => {
    setaskDeleteOrNotModalInCategoryScreen(false);
    //alert('Second Option from Order screen in Interactive modal selected.');
  };

  const closeDeleteModalInCategoryScreen = () => {
    setaskDeleteOrNotModalInCategoryScreen(false);
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
      accessTokenKey: accessTokenSentToCategoryScreen,
    });
    }else if(previousScreenName=='Order'){
      navigation.navigate('Order', {
      accessTokenSentToOrderScreen: accessTokenSentToCategoryScreen,
    });
    }else if(previousScreenName=='CustomerScreen'){
      navigation.navigate('CustomerScreen', {
      accessTokenSentToCustomerScreen: accessTokenSentToCategoryScreen,
    });
    }else if(previousScreenName=='SupplierScreen'){
      navigation.navigate('SupplierScreen', {
      accessTokenSentToSupplierScreen: accessTokenSentToCategoryScreen,
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

   navigation.navigate('AddCategoryScreen', {
   accessTokenSentToAddCategoryScreen: accessTokenSentToCategoryScreen,
   previousScreenName:previousScreenName
  });       
 };



const getCategoryScreenAsynData = () => {
    try {
      AsyncStorage.getItem('orderScreenFullDataKey').then((value) => {
        if (value != null) {
          //setNoDataFoundForFlatListInCategoryScreen(false);
          //navigation.navigate('HomeScreen');
          //setLoginModalVisible(false);
          //setLoaderModalVisible(true);
          //alert('Value have data this:'+value);
          let user = JSON.parse(value);

          //setResultsecond(user.OrderListDataTake);
          //setResultForNo_Of_Order(user.No_of_orderDataTake);
          //setIsLoadingOrderScreenData(false);

          //alert(' Process_order key got by user.Process_orderKey getdashboardData function:'+user.Process_orderKey);

          //alert(' Process_order Count got:'+process_orderKey);
        } else {
          //setNoDataFoundForFlatListInCategoryScreen(true);
        }
      });

      //alert(' Process_orderKey got in Homescreen after getdashboardData function:'+process_orderKey);
    } catch (error) {
      console.log(error);
    }
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
              topPageName={'CATEGORY'}
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


      {callFetchDynamicAPIsInCategoryScreen == true ? (
                <FetchDynamicAPIs
                  urlToFetchProps={'category_list'}
                  
                  accessTokenForFetchingAPIProps={accessTokenSentToCategoryScreen}
                      
                  screenNameProps={'CategoryScreen'}
                  setterForFillingFetchDataFromAPIInFlatListDirectly={setResultFetchedFromCategoryAPI}
                  //getData={getCategoryScreenAsynData}
                  setterToStopCallingFetchDynamicAPIsInCategoryScreenprops={
                    setcallFetchDynamicAPIsInCategoryScreen
                  }
                />
              ) : null}













              {callFetchDynamicAPIsInCategoryScreenToDelete ==
                                  true ? (
                                    <>
                                      <FetchDynamicAPIs
                                        urlToFetchProps={'manage_category'}
                                        accessTokenForFetchingAPIProps={
                                          accessTokenSentToCategoryScreen
                                        }
                                        actionProps={'delete'}
                                        //orderIDProps={categoryIDNowToDeleteIt}
                                        idProps={categoryIDForCategoryScreen}
                                        screenNameProps={'categoryScreenForDelete'}   
                                        setNowcallingDeleteAPIVariableProps={
                                          setcallFetchDynamicAPIsInCategoryScreenToDelete
                                        }
                                        setterForRefreshingOurFlatList={     
                                          setcallFetchDynamicAPIsInCategoryScreen
                                        }
                                        setterForLastFlatListDataisToBeDeletedProps={
                                          setLastCategoryInFlatListIsToBeDeleted
                                        }
                                        variableForLastFlatListDataisToBeDeletedProps={
                                          lastOrderInFlatListIsToBeDeleted
                                        }
                                        //removeFlatListDataFromAsynProps={removeDataForOrderScreenFromAsync}
                                        refreshOnLastFlatListDeletedSuccessfully={
                                          setResultFetchedFromCategoryAPI
                                        }
                                        //changeTotalOrderProps={setResultForNo_Of_Order}
                                        setterForshowNoDataProps={
                                          setNoDataFoundForFlatListInCategoryScreen
                                        }
                                        setNoDataToTrueInCategoryScreen={
                                          setNoDataFoundForFlatListInCategoryScreen
                                        }
                                        
                                      />
                                    </>
                                  ) : null}












                                  {askDeleteOrNotModalInCategoryScreen == true ? (
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
                                        yesDeleteOrder
                                      }
                                      tasktoDowhenSecondOptionSelectedProps={
                                        noDeleteOrder
                                      }
                                      doWhenBackBtnPressedOnInteractiveModalWithTwoOptions={
                                        closeDeleteModalInCategoryScreen
                                      }
                                    />
                                  ) : null}


      {/*FlatList code starts here  */}
       <FlatList
          numColumns={ 1 }
          data={resultFetchedFromCategoryAPI}
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
              margin: 10,
              backgroundColor:'#fff',
             } }>
             {/*View to hold top view which is holding Number Label and Name, Mobile No. Order person details etc starts here*/ }
               

              
            







             {/*All Buttons in Order Screen starts here*/ }
             <View
              style={ {
               flexDirection: 'row',
               marginLeft: responsiveWidth(2),
               marginVertical: responsiveHeight(0.5),        
              } }>




              {/* Module for Category names starts here: */}
              
               <AllUITogether
                show={'SimpleViewWithTextInside'}
                showThisText={item.category_name}
                textAlignProps={'left'}
                backgroundColorPropsForSimpleViewWithTextInside={'white'}
                widthPropsForSimpleViewWithTextInside={responsiveWidth(38)}    
                heightPropsForSimpleViewWithTextInside={responsiveHeight(3.1)}                 
                marginLeftPropsForSimpleViewWithTextInside={responsiveWidth(0)}       
                marginTopPropsForSimpleViewWithTextInside={responsiveHeight(0)}           
                fontSizePropsForSimpleViewWithTextInside={responsiveFontSize(1.9)}
              />
              
              {/* Module for Category names Ends here: */}

              


              <View
               style={ {
                marginLeft: responsiveWidth(2),   
                flexDirection: 'row',
               } }>



               
              
               
               
               
               
               <TouchableOpacity
                 onPress={() => {
                   //alert('Category ID Selected is:'+item.id);    
                  setaskDeleteOrNotModalInCategoryScreen(true);
                  selectedIndexNumberToDeleteDataInCategoryScreen =index;
                    //alert('selectedIndexNumberToDeleteDataInCategoryScreen is:'+selectedIndexNumberToDeleteDataInCategoryScreen);     
                    if(resultFetchedFromCategoryAPI?.length==1){
                       //alert('resultFetchedFromCategoryAPI.length is:'+resultFetchedFromCategoryAPI.length);   
                  selectedIndexNumberToDeleteDataInCategoryScreen ==index
                    ?
                     (
                      (categoryIDForCategoryScreen =item.id)
                      

                    )
                      
                      
                      
                    : null;
    
                    setLastCategoryInFlatListIsToBeDeleted(true);
                    
                    
                    
                    
                    }else{
                      //alert('resultFetchedFromCategoryAPI.length is:'+resultFetchedFromCategoryAPI.length);
                      selectedIndexNumberToDeleteDataInCategoryScreen ==index
                    ?
                      (
                      (categoryIDForCategoryScreen =item.id)
                      
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
               
               
               
               
               
               
               
               
               
                <TouchableOpacity
                 onPress={() => {
                  selectedIndexNumberToSendDataInEditCategoryScreen =
                    index;

                  selectedIndexNumberToSendDataInEditCategoryScreen ==
                  index
                    ? (
                      (categorynameForCategoryScreen = item.category_name),
                    (categoryIDForCategoryScreen = item.id)
                    )
                    : null;

                  /*alert(
                    '1. Category Name is:'+categorynameForCategoryScreen+'\n'+
                    '2. Category ID is:'+categoryIDForCategoryScreen
                    
                  );*/   

                   navigation.replace('EditCategoryScreen', {
                   accessTokenSentToEditCategoryScreen: accessTokenSentToCategoryScreen,
                    categorynameToBeEdited: categorynameForCategoryScreen,
                    categoryIDToBeEdited:categoryIDForCategoryScreen,
                    previousScreenName:previousScreenName
                       
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

              

                
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              </View>
             </View>
             {/*All Buttons in Order Screen ends here*/ }
            </View>
            /*Acutal View which is reponsible for all the items in card ends here  */

            /*Root View inside FlatList return() ends here  */
           );
          } }
         />
      {/*  */}


      

      </SafeAreaView>
    
  );
};

export default Category;



const styles = StyleSheet.create({
  container: { flex: 1,height: height, width: width,backgroundColor:'purple'},

  

  image: {
    height: responsiveHeight(35),
    
    
  },
  
});
