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

const Order = ({ route, navigation }) => {
  


  const { accessTokenSentToOrderScreen } = route.params;


  //let selectedIndexNumberToSendDataInEditOrder = 1000;
  //let selectedIndexNumberToDeleteDataInOrderScreen = 1000;
  //let selectedIndexNumberToShareDataInOrderScreen = 1000;



  //let customerNameFromOrderScreen = '';

  //let customerIDFromOrderScreen = '';
  //let supplierIDFromOrderScreen = '';
  //let categoryIDFromOrderScreen = '';


  //let typeOfOrderSentToEditOrderScreen='';
  //let orderDateVariableToBeSentToEditOrderScreen='';


  /*  */
  //let itemNameFromOrderScreen = '';
  //let qtyFromOrderScreen = '';
  //let sizeFromOrderScreen = '';
  //let narrationFromOrderScreen = '';
  //let priorityFromOrderScreen = '';
  //let deliveryDateFromOrderScreen = '';
  //let designNoFromOrderScreen = '';
  //let broadnessFromOrderScreen = '';
  /* let diamondweightFromOrderScreen = '';
  let diamondqualityFromOrderScreen = '';
  let diamondpcsFromOrderScreen = '';
  let partydiamondFromOrderScreen = '';
  let stoneweightFromOrderScreen = '';
  let stonequalityFromOrderScreen = '';
  let stonepcsFromOrderScreen = '';
  let partystoneFromOrderScreen = '';
  let ptpolishFromOrderScreen = '';
  let kt18polishFromOrderScreen = '';
  let engravingdetailsFromOrderScreen = '';
  let orderforFromOrderScreen = '';
  let suppliernameFromOrderScreen = '';
  let categorynameFromOrderScreen = '';
  let hallmarkFromOrderScreen = '';
  let orderIDFromOrderScreen = ''; */




  const translateX = useSharedValue(0);




  const openingSideDrawerMenu = () => {
    ChildRef.current.openSideNavigationMethod() ||
      setthreeLineButtonClicked(ChildRef.current.bringGrayColor);
  };





  const gesture = Gesture.Pan().onUpdate((event) => {
    runOnJS(openingSideDrawerMenu)();
  });


 /*  const gesture = Gesture.Pan().onUpdate((event) =>
  {
    console.log(translateX.value);

    //alert('Gesture onUpdate function executing... ')
  }); */

  //const ref = useRef(null);



  /* 
  When to use AsyncStorage and when to just pass props to next page
  
  1. We picked All data from API for the Order card clicked using Edit Button. 
  
  2. Then we have to send all the data to First EditOrderScreen using navigation.
  
  3. In EditOrderScreen,(Now here two path are created) (first Path is that) first of all, all the data which is being sent from Order screen has to be received using route.params.
  
  4. Then The data which we have to show in our EditOrderScreenSecond has to be kept inside an AsyncStorage, so that if we go from our first EditOrderScreen to EditOrderScreenSecond and again come back from EditOrderScreenSecond to EditOrderScreen and then again go forward from EditOrderScreen to EditOrderScreenSecond then all our UI like TextInputs will get clear and we will not see data which has to be loaded inside TextInputs directly from OrderScreen API data, so we have to put EditOrderScreenSecond data inside an AsyncStorage so that whenever we go from EditOrderScreen to EditOrderScreenSecond then we can use useEffect and call getData() function which will load all the data sent from OrderScreen inside EditOrderScreenSecond.
  
  5. Again comming to the Second Path from our step 3 is that, those data which has to be shown inside UI like TextInputs in our First EditOrderScreen has to be filled inside useState variable using again two ways, one is directly passing the values fetched from OrderScreen using route.params inside the round brackets of useState hook when we initialize the useState hook variables, or second way is that we can create useState() hook variables and initialize them with blank '', and to fill the data in our UI of First EditOrderScreen we can use useEffect and in useEffect we will call setter methods of all useState hooks and pass in those setter methods the values fetched from OrderScreen using routes.params.
  
  6. Now when we will go from First EditOrderScreen to EditOrderScreenSecond then we have to pass all the data that has to be UPDATED, so we will now not send those data using navigation which we have store in AsyncStorage, but we will only send that useState variables from EditOrderScreen to EditOrderScreenSecond which are declared inside our First EditOrderScreen.
  
   
  
  
   */





  const ChildRef = useRef();

  
  
  
  
  
  /*const goToCategoryScreen = () =>
  {
    navigation.navigate("Category", {
      accessTokenSentToCategoryScreen: accessTokenSentToOrderScreen,
      previousScreenName: 'Order'
    });
    //navigation.navigate('Category');
    ChildRef.current.closeSideNavigationMethod();
  };



  const goToSettingsScreen = () =>
  {
    navigation.navigate("Settings");
    ChildRef.current.closeSideNavigationMethod();
  };


  const goToChangePasswordScreen = () =>
  {
    navigation.navigate("ChangePassword");
    ChildRef.current.closeSideNavigationMethod();
  };*/


  const goToCategoryScreen = () => {
    navigation.navigate('Category', {
      accessTokenSentToCategoryScreen: accessTokenSentToOrderScreen,
      previousScreenName: 'Order',
    });
    ChildRef.current.closeSideNavigationMethod();
  };

  const goToCaratScreen = () => {
    navigation.navigate('CaratScreen', {
      accessTokenSentToCaratScreen: accessTokenSentToOrderScreen,
      previousScreenName: 'Order',
    });
    ChildRef.current.closeSideNavigationMethod();
  };

  const goToColorScreen = () => {
    navigation.navigate('ColorScreen', {
      accessTokenSentToColorScreen: accessTokenSentToOrderScreen,
      previousScreenName: 'Order',
    });
    ChildRef.current.closeSideNavigationMethod();
  };

  const goToSettingsScreen = () => {
    Alert.alert('Clicked...');
    navigation.navigate('Settings', {
      accessTokenSentToColorScreen: accessTokenSentToOrderScreen,
      previousScreenName: 'Order',
    });
    ChildRef.current.closeSideNavigationMethod();
  };

  const goToAddStaffScreen = () => {
    navigation.navigate('AddStaffScreen', {
      accessTokenSentToAddStaffScreen: accessTokenSentToOrderScreen,
      previousScreenName: 'Order',
    });
    ChildRef.current.closeSideNavigationMethod();
  };

  const goToChangePasswordScreen = () => {
    navigation.navigate('ChangePassword');
    ChildRef.current.closeSideNavigationMethod();
  };


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //setNoDataFoundForFlatListInOrderScreen
  const [
    noDataFoundForFlatListInOrderScreen,
    setNoDataFoundForFlatListInOrderScreen,
  ] = useState(false);
  const [threeLineButtonClicked, setthreeLineButtonClicked] = useState(false);
  const [pendingBtnModalVisible, setPendingBtnModalVisible] = useState(false);

  const [pendingBtnClickedInsideModal, setpendingBtnClickedInsideModal] = useState(false);
  const [errorBtnClickedInsideModal, seterrorBtnClickedInsideModal] = useState(false);
  const [dispatchBtnClickedInsideModal, setdispatchBtnClickedInsideModal] = useState(false);
  const [processBtnClickedInsideModal, setprocessBtnClickedInsideModal] = useState(false);
  const [cancelBtnClickedInsideModal, setcancelBtnClickedInsideModal] = useState(false);
  const [deliveredBtnClickedInsideModal, setdeliveredBtnClickedInsideModal] = useState(false);
  const [confirmBtnInCancelModalClicked, setConfirmBtnInCancelModalClicked] = useState(false);
  const [confirmBtnInErrorModalClicked, setConfirmBtnInErrorModalClicked] = useState(false);


  let [orderIDToEditOrder, setorderIDToEditOrder] = useState('');
  let [orderIDNowToPendingItsStatus, setorderIDNowToPendingItsStatus] = useState('');
  let [orderIDNowToProcessItsStatus, setorderIDNowToProcessItsStatus] = useState('');
  let [orderIDNowToDispatchItsStatus, setorderIDNowToDispatchItsStatus] = useState('');
  let [orderIDNowToDeliveredItsStatus, setorderIDNowToDeliveredItsStatus] = useState('');
  let [orderIDNowToCancelItsStatus, setorderIDNowToCancelItsStatus] = useState('');
  let [orderIDNowToErrorItsStatus, setorderIDNowToErrorItsStatus] = useState('');


  let tempData;
  let temp;

  const [cancelOrderRemark, setcancelOrderRemark] = useState('');
  const [errorOrderRemark, seterrorOrderRemark] = useState('');

  const [lastOrderInFlatListIsToBeChangeStatusToPending, setLastOrderInFlatListIsToBeChangeStatusToPending] = useState(false);
  const [lastOrderInFlatListIsToBeChangeStatusToDelivered, setLastOrderInFlatListIsToBeChangeStatusToDelivered] = useState(false);
  const [lastOrderInFlatListIsToBeChangeStatusToCancel, setLastOrderInFlatListIsToBeChangeStatusToCancel] = useState(false);
  //setLastOrderInFlatListIsToBeChangeStatusToDelivered


  let [customerSelectedForFilterProcess, setCustomerSelectedForFilterProcess] = useState('Customer');
  let [supplierSelectedForFilterProcess, setSupplierSelectedForFilterProcess] = useState('Supplier');
  let [categorySelectedForFilterProcess, setCategorySelectedForFilterProcess] = useState('Category');



  const [whatIsTheStatusForThisOrder, setwhatIsTheStatusForThisOrder] = useState('');
  //whatIsTheStatusForThisOrder  
  let selectedIndexNumberToChangeItsStatusInOrderScreen = 1000;
  /* let selectedIndexNumberToPendingItsStatusInOrderScreen = 1000;
  let selectedIndexNumberToProcessItsStatusInOrderScreen = 1000;
  let selectedIndexNumberToDispatchItsStatusInOrderScreen = 1000;
  let selectedIndexNumberToDeliveredItsStatusInOrderScreen = 1000;
  let selectedIndexNumberToCancelItsStatusInOrderScreen = 1000;
  let selectedIndexNumberToErrorItsStatusInOrderScreen = 1000; */





  let orderIDForChangingOrderStatus = '';


  const [
    lastOrderInFlatListIsToBeDeleted,
    setLastOrderInFlatListIsToBeDeleted,
  ] = useState(false);
  const [
    callFetchDynamicAPIsInOrderScreenToDelete,
    setcallFetchDynamicAPIsInOrderScreenToDelete,
  ] = useState(false);
  let [bellNotificationNumber, setBellNotificationNumber] = useState(0);
  const [
    askDeleteOrNotModalInOrderScreen,
    setaskDeleteOrNotModalInOrderScreen,
  ] = useState(false);
  let orderIDForDeletingOrder = '';
  let [orderIDNowToDeleteIt, setorderIDNowToDeleteIt] = useState('');
  let [cancelOrderModalVisible, setCancelOrderModalVisible] = useState(false);
  let [errorOrderModalVisible, setErrorOrderModalVisible] = useState(false);










  //let [fullDetails, setfullDetails] = useState('');
  let fullDetails = '';
  //fullDetails
  const getOrderScreenData = () =>
  {
    try
    {
      AsyncStorage.getItem('orderScreenFullDataKey').then((value) =>
      {
        if (value != null)
        {
          //setNoDataFoundForFlatListInOrderScreen(false);
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
        } else
        {
          //setNoDataFoundForFlatListInOrderScreen(true);
        }
      });

      //alert(' Process_orderKey got in Homescreen after getdashboardData function:'+process_orderKey);
    } catch (error)
    {
      console.log(error);
    }
  };




  const closePendingModal = () =>
  {
    setPendingBtnModalVisible(false);
  };


  const closeCancelOrderModal = () =>
  {
    setCancelOrderModalVisible(false);
  };


  const closeErrorOrderModal = () =>
  {
    setErrorOrderModalVisible(false);
  };



  

  const yesDeleteOrder = () =>
  {
    setaskDeleteOrNotModalInOrderScreen(false);
    setcallFetchDynamicAPIsInOrderScreenToDelete(true);
  };

  const noDeleteOrder = () =>
  {
    setaskDeleteOrNotModalInOrderScreen(false);
    //alert('Second Option from Order screen in Interactive modal selected.');
  };

  const closeDeleteModalInOrderScreen = () =>
  {
    setaskDeleteOrNotModalInOrderScreen(false);
    //alert('Back Btn pressed');
  };

  const removeDataForOrderScreenFromAsync = async () =>
  {
    try
    {
      //await AsyncStorage.clear();
      /* This above clear() method will clear all the AsyncStorage data but if we want to delete particular key's data then we will do like this as shown below */
      //Alert.alert('Logout button clicked')
      await AsyncStorage.removeItem('orderScreenFullDataKey');
      //navigation.navigate("LoginScreen");
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
  let selectedIndexNumberToSendDataInEditOrder = 1000;
  let selectedIndexNumberToDeleteDataInOrderScreen = 1000;
  let selectedIndexNumberToShareDataInOrderScreen = 1000;



  let customerNameFromOrderScreen = '';

  let customerIDFromOrderScreen = '';
  let supplierIDFromOrderScreen = '';
  let categoryIDFromOrderScreen = '';

  let colorIDFromOrderScreen = '';
  let colorNameFromOrderScreen = '';

  let carretIDFromOrderScreen = '';
  let carretNameFromOrderScreen = '';




  let typeOfOrderSentToEditOrderScreen = '';
  let orderDateVariableToBeSentToEditOrderScreen = '';


  /*  */
  let itemNameFromOrderScreen = '';
  let qtyFromOrderScreen = '';
  let sizeFromOrderScreen = '';
  let narrationFromOrderScreen = '';
  let priorityFromOrderScreen = '';
  let deliveryDateFromOrderScreen = '';
  let designNoFromOrderScreen = '';
  let broadnessFromOrderScreen = '';
  let diamondweightFromOrderScreen = '';
  let diamondqualityFromOrderScreen = '';
  let diamondpcsFromOrderScreen = '';
  let partydiamondFromOrderScreen = '';
  let stoneweightFromOrderScreen = '';
  let stonequalityFromOrderScreen = '';
  let stonepcsFromOrderScreen = '';
  let partystoneFromOrderScreen = '';
  let ptpolishFromOrderScreen = '';
  let kt18polishFromOrderScreen = '';
  let engravingdetailsFromOrderScreen = '';
  let orderforFromOrderScreen = '';
  let suppliernameFromOrderScreen = '';
  let categorynameFromOrderScreen = '';
  let hallmarkFromOrderScreen = '';
  let orderIDFromOrderScreen = '';


  /*  */

  let [productOrderDate, setProductOrderDate] = useState('');
  //let [customerName, setCustomerName] = useState(null);
  //let [categoryName, setCategoryName] = useState(null);
  //let [itemData, setItemData] = useState(null);
  //let [supplierData, setSupplierData] = useState(null);
  //let [priorityData, setPriorityData] = useState(null);
  let [orderDateData, setOrderDateData] = useState(null);
  let [deliveryDateData, setDeliveryDateData] = useState(null);
  let [priorityDataForTestingDash, setpriorityDataForTestingDash] = useState(null);

  //let [resultfirst, setResultFirst] = useState('');
  let resultfirst;
  let imageBaseAPI = 'https://rajeshwersoftsolution.com/jwelcart/public';
  let imageFromOrderScreen = '';

  let [resultsecond, setResultsecond] = useState([]);
  let [isLoadingOrderScreenData, setIsLoadingOrderScreenData] = useState(false);
  let [resultForNo_Of_Order, setResultForNo_Of_Order] = useState(0);
  //milisecondsToRunLoader=resultForNo_Of_Order;       
  let [loaderForFlatListItemsMoreThanTen, setLoaderForFlatListItemsMoreThanTen] = useState(true);
  const [
    callFetchDynamicAPIsInOrderScreen,
    setcallFetchDynamicAPIsInOrderScreen,
  ] = useState(false);

  useEffect(() =>
  {
    setIsLoadingOrderScreenData(true);
    setcallFetchDynamicAPIsInOrderScreen(true);
    getOrderScreenData();
  }, []);







 useEffect(() => {



      


   
    
     const timer = setTimeout(() => {
      //setCount('Timeout called!');   
      setLoaderForFlatListItemsMoreThanTen(false);
    },10000);     



    return () => clearTimeout(timer);
    
    
  
  
  }, []);      





  useEffect(() => {
    //LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreAllLogs();
}, []);





  const homeIconClickedDoThis = () =>
  {
    navigation.replace('HomeScreen', {
      accessTokenKey: accessTokenSentToOrderScreen,
    });
  };

  const showingAlert = () =>
  {
    alert('Last FlatList data deleted successfully.');
  };

  const orderIconClickedDoThis = () =>
  {
    navigation.navigate('Order', {
      accessTokenSentToOrderScreen: accessTokenSentToOrderScreen,
    });
  };

  const addOrderIconClickedDoThis = () =>
  {
    navigation.replace('AddOrderScreen', {
      accessTokenSentToAddOrderScreen: accessTokenSentToOrderScreen,
    });
  };

  const customerIconClickedDoThis = () =>
  {
    //alert('icon button pressed...');
    navigation.navigate('CustomerScreen', {
      accessTokenSentToCustomerScreen: accessTokenSentToOrderScreen,
    });
  };

  const supplierIconClickedDoThis = () =>
  {
    navigation.replace('SupplierScreen', {
      accessTokenSentToSupplierScreen: accessTokenSentToOrderScreen,
    });
  };

  const Footer_Component = () =>
  {

    return (

      <View
        style={ {
          height: responsiveHeight(12.5),
          width: '100%',
          //backgroundColor: "#00BFA5",
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom:responsiveHeight(5),   
          //marginBottom:responsiveHeight(1),   
        } }>
        {loaderForFlatListItemsMoreThanTen==true?
        
        
        <>
        <ActivityIndicator
          size="large"
          color="#013F66"
          style={ { marginTop: responsiveHeight(0.5) } }    
        />    
        </>     
        :
        <>
           
       <Text style={ { fontSize: responsiveFontSize(2), color: '#A3A3A3' } }>
          No More Data
        </Text>
               
            
        {/*https://blog.logrocket.com/build-customized-react-native-activity-indicator/ ref this to show activity indicator only for certain amount of time seconds.  */}
            
                      
        </>
        }
      </View>
    );

  };













  const ShowLoaderLoading = () =>
  {

    return (

      <View
        style={ {
          height: responsiveHeight(12.5),
          width: '100%',
          //backgroundColor: "#00BFA5",
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom:responsiveHeight(1),   
        } }>
       {/*  <Text style={ { fontSize: responsiveFontSize(2), color: '#A3A3A3' } }>
          { resultsecond.length == 1 ? '' : 'No More Data' }
        </Text> */}



        
        <ActivityIndicator
        size="large"
        color="#013F66"
        style={ { marginTop: responsiveHeight(0.5) } }    
      />     
      </View>
    );

  };

  const searchTopSmallIconPressedDoThis = () =>
  {
    alert('search icon button pressed...');
  };

  const onPressPendingInOrderScreen = () =>
  {
    alert('Pending button pressed In Order Screen...');
  };

  const onPressDeleteInOrderScreen = () =>
  {
    alert('Delete button pressed In Order Screen...');
  };



  const onPressShareInOrderScreen = () =>
  {
    onShare();
    //alert('Share button pressed In Order Screen...');
  };    





   /* const plusTopSmallIconPressedDoThis = () => {
    //alert('plus icon button pressed...');
    navigation.navigate('AddCustomerScreen', {
      accessTokenSentToAddCustomerScreen: accessTokenSentToCustomerScreen,
    });   
  }; */




  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1, height: height, width: width }}>






          








        <View style={styles.container}>
          <StatusBar backgroundColor="#283E65" barStyle={'light-content'} />

          <View
            style={{
              //flex: 1,
              width: width,
              backgroundColor: threeLineButtonClicked ? '#757575' : '#FBF8F1',

              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}>
            {/* Another Module for curve background starts here: */}










             <ImageBackground
          source={ require('../images/background.png') }
          resizeMode="cover"
          style={ {
           // marginTop: responsiveHeight(-5),      

            //When using this code for making apk just uncomment this above marginTop:responsiveHeight(-5)
            //because this marginTop: responsiveHeight(-5), is perfect for VSCode but not perfect for
            //expo snake
            height: responsiveHeight(35),
            
            //marginBottom:responsiveHeight(-30),         
          } }/>



         
                  
        

            {/* <AllUITogether show="ImageBackgroundWhichContainsChildren">  */}
              {/*Another Module for curve background Ends here: */}

              <GestureDetector gesture={gesture}>
                <Animated.View>
                  {/*View to hold our created Drawer Navigation Three line image button */}

                  <View
                    style={{
                      flexDirection: 'row',
                      //marginTop: responsiveHeight(-27),
                      marginTop: responsiveHeight(-32.5),        
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

                    {/*View to hold Side Drawer Opening Icon ends here at below View  */}
                  </View>



                  {/* Another Module for ORDER text starts here: */ }
              <AllUITogether
                show={ 'TopLabelForPagesListedInBottomNavigation' }
                topLabelForPagesListedInBottomNavProps={ 'ORDERS' }
                marginLeftPropsForTopLabelForPagesInBottomNav={ responsiveWidth(36)}
              />

              {/* Another Module for JEWEL CART text Ends here: */ }
                  
                  
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
                  //marginLeftOfTopSmallIconprops={ 80 }
                  marginTopOfTopSmallIconprops={responsiveHeight(-3.5)}
                            marginLeftOfTopSmallIconprops={responsiveWidth(80)}
                />


                {/* This BottomModalScreen Tag is working but when i open Drop down list to select any customer or supplier then i get errors which is not getting understood why i am getting this error so, temperarily i have commented this tag. 
                
                
                
                <BottomModalScreen
                  showBottomModalScreenForProps={ 'OrderScreen' }
                  accessTokenForBottomModalScreenProps={ accessTokenSentToOrderScreen }
                  customerSelectedForFilterProcessProps={ customerSelectedForFilterProcess }
                  setCustomerSelectedForFilterProcessProps={ setCustomerSelectedForFilterProcess }
                  supplierSelectedForFilterProcessProps={ supplierSelectedForFilterProcess }
                  setSupplierSelectedForFilterProcessProps={ setSupplierSelectedForFilterProcess }
                  categorySelectedForFilterProcessProps={ categorySelectedForFilterProcess }
                  setCategorySelectedForFilterProcessProps={ setCategorySelectedForFilterProcess }
                /> */}



                

                { /* <AllUITogether
                  show={'TopSmallIcon'}
                  dothisWhenTopSmallIconPressedProps={
                    searchTopSmallIconPressedDoThis
                  }
                  bellNotificationNumberProps={bellNotificationNumber}
                  iconToDisplayPathProps={require('../images/filter_golden.png')}
                  showBadgeAlsoprops={false}
                  widthOfTopSmallIconprops={22}
                  heightOfTopSmallIconprops={22}
                  marginTopOfTopSmallIconprops={-3.5}
                  marginLeftOfTopSmallIconprops={89}
                /> */}
              </View>
              {/* Another Module for Bell icon Ends here: */ }









              {/* Another Module for Number of orders starts here: */ }

              {/*<AllUITogether
                show={ 'SimpleViewWithTextInside' }
                showThisText={ 'Total : ' + resultForNo_Of_Order }
                textAlignProps={ 'center' }
                backgroundColorPropsForSimpleViewWithTextInside={ 'white' }
                widthPropsForSimpleViewWithTextInside={ 20 }
                heightPropsForSimpleViewWithTextInside={ 5 }
                marginLeftPropsForSimpleViewWithTextInside={ 78 }
                marginTopPropsForSimpleViewWithTextInside={ 1 }
                fontSizePropsForSimpleViewWithTextInside={ 1.9 }
              />*/}
              <AllUITogether
                show={'SimpleViewWithTextInside'}
                showThisText={ 'Total : ' + resultForNo_Of_Order }
                textAlignProps={ 'center' }
                backgroundColorPropsForSimpleViewWithTextInside={'white'}
                widthPropsForSimpleViewWithTextInside={responsiveWidth(20)}    
                heightPropsForSimpleViewWithTextInside={responsiveHeight(5)}                 
                marginLeftPropsForSimpleViewWithTextInside={responsiveWidth(78)}       
                marginTopPropsForSimpleViewWithTextInside={responsiveHeight(1)}           
                //fontSizePropsForSimpleViewWithTextInside={1.9}
                fontSizePropsForSimpleViewWithTextInside={responsiveFontSize(1.9)}
              />

              {/* Another Module for Number of orders Ends here: */ }




                </Animated.View>
              </GestureDetector>



              

              <View style={ styles.flatListForOrdersViewStyle }>
                {/* Another Module for Cards starts here   : */ }



                <View
                  style={ {
                    //marginTop: responsiveHeight(0),
                    marginTop: responsiveHeight(-23),       
                    alignItems: 'center',
                    height: responsiveHeight(80),
                    //marginBottom:responsiveHeight(1),    
                    // backgroundColor:'yellow',
                  } }>
                  { isLoadingOrderScreenData == true ? (
                    <>
                      <ActivityIndicator
                        size="large"
                        color="#013F66"
                        style={ { marginTop: responsiveHeight(30) } }
                      />

                      {/*<AllUITogether
                        show="SimpleViewWithTextInside"
                        showThisText={ 'Fetching Data' }   
                        textAlignProps={ 'center' }
                        backgroundColorPropsForSimpleViewWithTextInside={
                          'transparent'
                        }
                        widthPropsForSimpleViewWithTextInside={ 50 }
                        heightPropsForSimpleViewWithTextInside={ 5 }
                        marginLeftPropsForSimpleViewWithTextInside={ 5 }
                        marginTopPropsForSimpleViewWithTextInside={ 5 }
                        fontSizePropsForSimpleViewWithTextInside={ 3 }
                      />*/}
                      <AllUITogether
                      show={'SimpleViewWithTextInside'}
                      showThisText={ 'Fetching Data' }
                      textAlignProps={ 'center' }
                      backgroundColorPropsForSimpleViewWithTextInside={'transparent'}
                      widthPropsForSimpleViewWithTextInside={responsiveWidth(50)}    
                      heightPropsForSimpleViewWithTextInside={responsiveHeight(5)}                 
                      marginLeftPropsForSimpleViewWithTextInside={responsiveWidth(5)}       
                      marginTopPropsForSimpleViewWithTextInside={responsiveHeight(5)}           
                      //fontSizePropsForSimpleViewWithTextInside={3}
                      fontSizePropsForSimpleViewWithTextInside={responsiveFontSize(3)}
                    />
                    </>
                  ) : noDataFoundForFlatListInOrderScreen == true ? (
                    <>
                      {/*<AllUITogether
                        show="SimpleViewWithTextInside"
                        showThisText={ 'No Data' }
                        backgroundColorPropsForSimpleViewWithTextInside={
                          'transparent'
                        }
                        widthPropsForSimpleViewWithTextInside={ 50 }
                        heightPropsForSimpleViewWithTextInside={ 5 }
                        marginLeftPropsForSimpleViewWithTextInside={ 5 }
                        marginTopPropsForSimpleViewWithTextInside={ 35 }
                        fontSizePropsForSimpleViewWithTextInside={ 3 }
                      />*/}
                      <AllUITogether
                      show={'SimpleViewWithTextInside'}
                      showThisText={ 'No Data' }
                      textAlignProps={ 'center' }
                      backgroundColorPropsForSimpleViewWithTextInside={'transparent'}
                      widthPropsForSimpleViewWithTextInside={responsiveWidth(50)}    
                      heightPropsForSimpleViewWithTextInside={responsiveHeight(5)}                 
                      marginLeftPropsForSimpleViewWithTextInside={responsiveWidth(5)}       
                      marginTopPropsForSimpleViewWithTextInside={responsiveHeight(5)}           
                      //fontSizePropsForSimpleViewWithTextInside={3}
                      fontSizePropsForSimpleViewWithTextInside={responsiveFontSize(3)}
                    />
                    </>
                  ) : (
                    <>
                      {/* <ScrollView
                        keyboardShouldPersistTaps="always"
                        nestedScrollEnabled={ true }
                        showsVerticalScrollIndicator={ false }
                        bounces={ false }> */}
                        <FlatList
                          numColumns={ 1 }
                          data={ resultsecond }
                          showsVerticalScrollIndicator={ false }
                          //ListFooterComponent={resultForNo_Of_Order==index.length?Footer_Component:ShowLoaderLoading }         
                          //ListFooterComponent={resultForNo_Of_Order==(resultsecond.length - 1)?Footer_Component:ShowLoaderLoading }
                          ListFooterComponent={Footer_Component}       
                          //ListFooterComponentStyle={styles.footerStyle}
                          renderItem={ ({ item, index }) =>
                          {
                            isEnd = index === resultsecond.length - 1;   
                            return (
                              <TouchableOpacity onPress={ () => { } }>
                                {/*Acutal View which is reponsible for all the items in card starts here  */ }
                                <View
                                  style={ {
                                    width: responsiveWidth(90),
                                    //height: responsiveHeight(36),
                                    /* 
                                    As you can see we have not given any height of our View in which all other child Views and UI tag will be placed because to increase the height of this parent view as per the information obtained from API in Item row, because if the user name data fro Item row more than of 15 characters then we have to print that in two lines and so if we will give some specific height to our View then if our data of Item row will increase then our View will not increase its height, it will remain of constant height which we have provided, so to make height of the parent view dynamic we have not given any height of our parent view, and if we will not give any height to our view tag then that view tag will become automatically wrap content,i.e. it will increase or decrease its height as per inner child view tags present in it. 
                                     */
                                    borderRadius: responsiveWidth(2),
                                    elevation: responsiveWidth(3),
                                    margin: 10,
                                    backgroundColor: threeLineButtonClicked
                                      ? '#757575'
                                      : '#fff',
                                  } }>
                                  {/*View to hold top view which is holding large image and category,items, customer details etc starts here*/ }
                                  <View
                                    style={ {
                                      flexDirection: 'row',
                                      //backgroundColor:'blue',
                                    } }>
                                    {/*View which will hold Image starts here*/ }
                                    <View>
                                      {/*Image to display inside card starts here  */ }


                                      {

                                        item.order_images.slice(0, 1).map((x) => { resultfirst = x.image })

                                        //alert('Index number for item is:'+index)

                                      }


                                      <AllUITogether
                                        show={
                                          'ImageToShowInFlatListForPagesListedInBottomNavBar'
                                        }
                                        imageVariableProps={ resultfirst }

                                      />

                                      {/*Image Tag ends here  */ }
                                    </View>
                                    {/*View which will hold Image ends here*/ }

                                    {/*View which will hold Number Label On Image starts here*/ }

                                    <AllUITogether
                                      show={ 'NumberLabelOnImage' }
                                      //numberLabelWidthProps={ 25 }
                                      numberLabelWidthProps={responsiveWidth(25)}
                                      numberFetchedFromAPIProps={ item.order_no }
                                      fontFamilyPropsforNumberLabel={
                                        'raleway-semibold'
                                      }
                                    />
                                    {/*View which will hold Number Label On Image ends here*/ }

                                    {/*View which will hold Informations like Category,Item etc as stack one on other starts here*/ }
                                    <View
                                      style={
                                        {
                                          //backgroundColor:'red'
                                        }
                                      }>
                                      {/*View to hold Category and its fetched name from api start here  */ }

                                      <AllUITogether
                                        show={ 'SingleLineToShowAPIFetchedData' }
                                        singleLineLabelProps={ 'Category' }
                                        //marginLeftProps={ 2.9 }
                                        marginLeftProps={ responsiveWidth(2.9) }
                                        fetchedValueFromAPI={ item.category_name }
                                      />

                                      {/* {item.order_images.map((x) =>
                                      setResultFirst(x.image)
                                    )} */}





                                      {/* {

                                      tempData=resultfirst,
                                      
                                      
                                      tempData.push(item.order_images.map((x) =>
                                      x.image
                                    )),

                                    temp=[],

                                    tempData.map(item=>{temp.push(item)}),
                                      resultfirst=temp
                                    //setResultFirst(temp)



                                    } */}
                                      {/*problem of setProductOrderDate   */ }
                                      { setProductOrderDate(item.order_date) }

                                      {/*View to hold Category and its fetched name from api ends here  */ }

                                      {/*View to hold Item and its fetched name from api start here  */ }

                                      <AllUITogether
                                        show={ 'SingleLineToShowAPIFetchedData' }
                                        singleLineLabelProps={ 'Item' }
                                        //marginLeftProps={ 13 }
                                        marginLeftProps={ responsiveWidth(13) }
                                        fetchedValueFromAPI={ item.item }
                                      />
                                      {/*View to hold Item and its fetched name from api ends here  */ }

                                      {/*View to hold Customer and its fetched name from api start here  */ }

                                      <AllUITogether
                                        show={ 'SingleLineToShowAPIFetchedData' }
                                        singleLineLabelProps={ 'Customer' }
                                        //marginLeftProps={ 1.8 }
                                        marginLeftProps={ responsiveWidth(1.8) }
                                        fetchedValueFromAPI={ item.customer_name }
                                      />
                                      {/*View to hold Customer and its fetched name from api ends here  */ }

                                      {/*View to hold Supplier and its fetched name from api start here  */ }

                                      <AllUITogether
                                        show={ 'SingleLineToShowAPIFetchedData' }
                                        singleLineLabelProps={ 'Supplier' }
                                        //marginLeftProps={ 5 }
                                        marginLeftProps={ responsiveWidth(5) }
                                        fetchedValueFromAPI={ item.supplier_name }
                                      />
                                      {/*View to hold Supplier and its fetched name from api ends here  */ }

                                      {/*View to hold Priority and its fetched name from api start here  */ }

                                      {/* <AllUITogether
                                      show={'SingleLineToShowAPIFetchedData'}
                                      singleLineLabelProps={'Priority'}
                                      marginLeftProps={7.9}
                                      fetchedValueFromAPI={item.priority}
                                    /> */}


                                      <AllUITogether
                                        show={ 'SingleLineToShowAPIFetchedDataForTestingDashForNoValue' }
                                        singleLineLabelProps={ 'Priority' }
                                        marginLeftProps={responsiveWidth(7.9)}
                                        fetchedValueFromAPIForTestingDashForNoValue={ item.priority }
                                        setSingleLineValueFetchedForTestingDashForNoValue={ setpriorityDataForTestingDash }
                                        singleLineValuePropsForTestingDashForNoValue={ item.priority }

                                      />

                                      {/*View to hold Priority and its fetched name from api ends here  */ }
                                    </View>
                                    {/*View which will hold Informations like Category,Item etc as stack one on other ends here*/ }
                                  </View>
                                  {/*View to hold top view which is holding large image and category,items, customer details etc ends here*/ }

                                  {/*Straight line starts here*/ }
                                  <View
                                    style={ {
                                      //backgroundColor:'purple',
                                      marginTop: responsiveHeight(1),
                                    } }>
                                    <AllUITogether show={ 'StraightLineDivider' } />
                                  </View>
                                  {/*Straight line ends here*/ }

                                  {/*Order Date and Delivery Date in one row starts here*/ }
                                  <View
                                    style={ {
                                      flexDirection: 'row',
                                      marginTop: responsiveHeight(4),
                                      //flex: 2,
                                    } }>
                                    <View
                                      style={ {
                                        flex: 1,
                                      } }>
                                      <AllUITogether
                                        show={
                                          'ShowAPIFetchedDateWithLabelInOneRow'
                                        }
                                        singleLineLabelProps={ 'Order Date :' }
                                        setSingleLineValueFetched={
                                          setOrderDateData
                                        }
                                        fetchedValueFromAPI={ item.order_date }
                                        //singleLineValueProps={orderDateData}
                                        singleLineValueProps={ item.order_date }
                                        paddingRightPropsForShowdate={responsiveWidth(6)}
                                      />
                                    </View>

                                    <View
                                      style={ {
                                        flex: 1,
                                        marginLeft: responsiveWidth(-12),
                                      } }>
                                      <AllUITogether
                                        show={
                                          'ShowAPIFetchedDateWithLabelInOneRow'
                                        }
                                        singleLineLabelProps={ 'Delivery Date :' }
                                        setSingleLineValueFetched={
                                          setDeliveryDateData
                                        }
                                        fetchedValueFromAPI={ item.delivery_date }
                                        //singleLineValueProps={deliveryDateData}
                                        singleLineValueProps={ item.delivery_date }
                                        //paddingRightPropsForShowdate={ 0 }
                                        paddingRightPropsForShowdate={responsiveWidth(0)}
                                      />
                                    </View>
                                  </View>
                                  {/*Order Date and Delivery Date in one row ends here*/ }

                                  {/*Straight line starts here*/ }
                                  <View
                                    style={ { marginTop: responsiveHeight(4) } }>
                                    <AllUITogether show={ 'StraightLineDivider' } />
                                  </View>
                                  {/*Straight line ends here*/ }

                                  {/*All Buttons in Order Screen starts here*/ }
                                  <View
                                    style={ {
                                      flexDirection: 'row',
                                      marginLeft: responsiveWidth(1),
                                      marginVertical: responsiveHeight(1),
                                    } }>


                                    <TouchableOpacity
                                      onPress={ () =>
                                      {
                                        setPendingBtnModalVisible(true);
                                        selectedIndexNumberToChangeItsStatusInOrderScreen = index;

                                        //alert('Index number selected for Changing Status is:'+index);

                                        if (resultsecond.length == 1)
                                        {
                                          selectedIndexNumberToChangeItsStatusInOrderScreen ==
                                            index
                                            ? (
                                              (orderIDForChangingOrderStatus = item.id),
                                              setorderIDNowToPendingItsStatus(orderIDForChangingOrderStatus),
                                              setorderIDNowToProcessItsStatus(orderIDForChangingOrderStatus),
                                              setorderIDNowToDispatchItsStatus(orderIDForChangingOrderStatus),
                                              setorderIDNowToCancelItsStatus(orderIDForChangingOrderStatus),
                                              setorderIDNowToErrorItsStatus(orderIDForChangingOrderStatus),
                                              setorderIDNowToDeliveredItsStatus(orderIDForChangingOrderStatus)


                                              //alert('order ID For Changing Order Status is:' +orderIDForChangingOrderStatus)
                                            )
                                            : null;

                                          //removeData();
                                          //removeDataForOrderScreenFromAsync();
                                          setLastOrderInFlatListIsToBeChangeStatusToPending(
                                            true
                                          );

                                          setLastOrderInFlatListIsToBeChangeStatusToDelivered(
                                            true
                                          );

                                          setLastOrderInFlatListIsToBeChangeStatusToCancel(true);
                                        } else
                                        {
                                          selectedIndexNumberToChangeItsStatusInOrderScreen ==
                                            index
                                            ? ((orderIDForChangingOrderStatus =
                                              item.id),
                                              setorderIDNowToPendingItsStatus(
                                                orderIDForChangingOrderStatus
                                              ),
                                              setorderIDNowToProcessItsStatus(orderIDForChangingOrderStatus),
                                              setorderIDNowToDispatchItsStatus(orderIDForChangingOrderStatus),
                                              setorderIDNowToCancelItsStatus(orderIDForChangingOrderStatus),
                                              setorderIDNowToErrorItsStatus(orderIDForChangingOrderStatus),
                                              setorderIDNowToDeliveredItsStatus(orderIDForChangingOrderStatus)
                                              //alert('order ID For Changing Order Status is:' +orderIDForChangingOrderStatus)
                                            )
                                            : null;
                                        }

                                        //alert('Name which is being sent to Edit Customer Screen is:'+nameForCustomerScreen);
                                      } }
                                      style={ {
                                        width: responsiveWidth(20),
                                        height: responsiveHeight(4),
                                        //borderColor: '#C60001',
                                        borderColor: item.order_status == 'Process' ? 'blue'
                                          : item.order_status == 'Dispatch' ? 'green'
                                            : item.order_status == 'Error' ? 'green'
                                              : '#C60001',
                                        marginHorizontal: responsiveWidth(1),
                                        //borderWidth: responsiveWidth(0.4),
                                        borderWidth: responsiveWidth(0.3),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        //padding:responsiveWidth(0.2),
                                        borderRadius: responsiveWidth(6),
                                        backgroundColor: '#fff',
                                      } }>
                                      <Text
                                        style={ {
                                          //color: '#C60001',
                                          color: item.order_status == 'Process' ? 'blue'
                                            : item.order_status == 'Dispatch' ? 'green'
                                              : item.order_status == 'Error' ? 'green'
                                                : '#C60001',
                                          fontSize: responsiveFontSize(1.9),
                                          fontFamily: 'raleway-regular',
                                          marginTop: responsiveHeight(-0.5),
                                          //alignItems: 'center',
                                          textAlign: 'center',
                                        } }>
                                        {
                                          item.order_status
                                        }
                                      </Text>
                                    </TouchableOpacity>















                                    <Modal

                                      transparent={ true }
                                      visible={ pendingBtnModalVisible }
                                      onRequestClose={ () =>
                                        setPendingBtnModalVisible(false)
                                      }>
                                      <View
                                        style={ {
                                          backgroundColor: 'rgba(0,0,0,0.01)',
                                          flex: 1,
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                        } }>
                                        <View
                                          style={ {
                                            backgroundColor: 'white',

                                            width: responsiveWidth(
                                              78
                                            ),
                                            height: responsiveHeight(
                                              25
                                            ),
                                            borderRadius: responsiveWidth(1),
                                          } }>

                                          {/*View to hold Change Status text and Ant icon to close modal starts here  */ }
                                          <View style={ { flexDirection: 'row' } }>
                                            <Text
                                              style={ {
                                                fontSize: responsiveWidth(4.6),
                                                fontFamily: 'raleway-light',
                                                marginLeft: responsiveWidth(6),
                                                marginTop: responsiveHeight(4),
                                                marginBottom: responsiveHeight(3),
                                              } }>

                                              Change Status

                                            </Text>



                                           {/* <AllUITogether
                                              show={ 'AntIconBtn' }
                                              dothisProps={ closePendingModal }
                                              iconDesignName={ 'close' }
                                              colorForIconinAntDesignBtn={ 'white' }
                                              backgroundColorForIconinAntDesignBtn={ 'red' }
                                              sizeForIconinAntDesignBtn={ 24 }
                                              boardRadiusForIconinAntDesignBtn={ 50 }
                                              widthForIconinAntDesignBtn={ 9 }
                                              heightForIconinAntDesignBtn={ 4.5 }
                                              marginLeftForIconinAntDesignBtn={ 20 }
                                              marginTopForIconinAntDesignBtn={ 2 }
                                              boardColorForIconinAntDesignBtn={ '#283E65' }
                                              boardWidthForIconinAntDesignBtn={ 0.3 }
                                            />*/}
                                            <AllUITogether
                                            show={'AntIconBtn'}
                                              dothisProps={closePendingModal}    
                                            //dothisProps={gotoAddStaffScreen}
                                            iconDesignName={'close'}
                                            colorForIconinAntDesignBtn={'white'}
                                            backgroundColorForIconinAntDesignBtn={'red'}
                                            sizeForIconinAntDesignBtn={24}
                                            boardRadiusForIconinAntDesignBtn={50}
                                            widthForIconinAntDesignBtn={responsiveWidth(9)}
                                            heightForIconinAntDesignBtn={responsiveHeight(4.5)}
                                            marginLeftForIconinAntDesignBtn={responsiveWidth(20)}
                                            marginTopForIconinAntDesignBtn={responsiveHeight(2)}   
                                            boardColorForIconinAntDesignBtn={'#283E65'}
                                            boardWidthForIconinAntDesignBtn={responsiveWidth(0.3)}
                                                />




                                          </View>
                                          {/*View to hold Change Status text and Ant icon to close modal ends here  */ }






                                          {/*View to hold pending, process & dispatch buttons in Pending modal starts here*/ }
                                          <View
                                            style={ {
                                              marginTop: responsiveHeight(1),
                                              alignItems: 'center',
                                              flexDirection: 'row',
                                              //justifyContent:'center',
                                              //justifyContent:'space-around',
                                            } }>


                                            <TouchableOpacity
                                              style={ {
                                                width: responsiveWidth(21),
                                                marginLeft: responsiveWidth(5),

                                                height: responsiveHeight(4.5),


                                                backgroundColor: '#283E65',
                                                elevation: responsiveWidth(1),
                                                borderWidth: 0,
                                                borderRadius: responsiveWidth(10),



                                                alignItems: 'center',

                                                padding: responsiveHeight(0.5),

                                              } }
                                              onPress={ () =>
                                              {

                                                setpendingBtnClickedInsideModal(true);
                                                //alert('Pending Btn clicked from inside Modal')
                                              } }>
                                              <Text
                                                style={ {
                                                  //fontWeight: '500',
                                                  fontFamily: 'raleway-medium',
                                                  color: 'white',
                                                  fontSize: responsiveFontSize(1.9),


                                                } }>
                                                Pending
                                              </Text>
                                            </TouchableOpacity>






















                                            <TouchableOpacity
                                              style={ {
                                                width: responsiveWidth(21),
                                                marginLeft: responsiveWidth(2),

                                                height: responsiveHeight(4.5),


                                                backgroundColor: '#283E65',
                                                elevation: responsiveWidth(1),
                                                borderWidth: 0,
                                                borderRadius: responsiveWidth(10),



                                                alignItems: 'center',

                                                padding: responsiveHeight(0.5),
                                              } }
                                              onPress={ () =>
                                              {

                                                //alert('Process btn clicked in Modal')
                                                setprocessBtnClickedInsideModal(true);
                                              } }>
                                              <Text
                                                style={ {
                                                  fontSize: responsiveFontSize(1.9),
                                                  fontFamily: 'raleway-medium',
                                                  color: 'white',
                                                } }>
                                                Process
                                              </Text>
                                            </TouchableOpacity>





                                            <TouchableOpacity
                                              style={ {
                                                width: responsiveWidth(21),
                                                marginLeft: responsiveWidth(2),

                                                height: responsiveHeight(4.5),


                                                backgroundColor: '#283E65',
                                                elevation: responsiveWidth(1),
                                                borderWidth: 0,
                                                borderRadius: responsiveWidth(10),



                                                alignItems: 'center',

                                                padding: responsiveHeight(0.5),
                                              } }
                                              onPress={ () =>
                                              {

                                                //alert('Process btn clicked in Modal')
                                                setdispatchBtnClickedInsideModal(true);
                                              } }>
                                              <Text
                                                style={ {
                                                  fontSize: responsiveFontSize(1.9),
                                                  fontFamily: 'raleway-medium',
                                                  color: 'white',
                                                } }>
                                                Dispatch
                                              </Text>
                                            </TouchableOpacity>















                                          </View>
                                          {/*View to hold pending, process & dispatch buttons in Pending modal ends here*/ }





                                          {/*View to hold Delivered, Cancel & Error buttons in Pending modal starts here*/ }
                                          <View
                                            style={ {
                                              marginTop: responsiveHeight(1),
                                              alignItems: 'center',
                                              flexDirection: 'row',
                                              //justifyContent:'center',
                                              //justifyContent:'space-around',
                                            } }>


                                            <TouchableOpacity
                                              style={ {
                                                width: responsiveWidth(21),
                                                marginLeft: responsiveWidth(5),

                                                height: responsiveHeight(4.5),


                                                backgroundColor: '#283E65',
                                                elevation: responsiveWidth(1),
                                                borderWidth: 0,
                                                borderRadius: responsiveWidth(10),



                                                alignItems: 'center',

                                                padding: responsiveHeight(0.5),

                                              } }
                                              onPress={ () =>
                                              {

                                                //setcallFetchDynamicAPIsInCustomerScreenToDelete(true)
                                                //alert('Pending Btn clicked from inside Modal')
                                                setdeliveredBtnClickedInsideModal(true);
                                              } }>
                                              <Text
                                                style={ {
                                                  //fontWeight: '500',
                                                  fontFamily: 'raleway-medium',
                                                  color: 'white',
                                                  fontSize: responsiveFontSize(1.7),


                                                } }>
                                                Delivered
                                              </Text>
                                            </TouchableOpacity>






















                                            <TouchableOpacity
                                              style={ {
                                                width: responsiveWidth(21),
                                                marginLeft: responsiveWidth(2),

                                                height: responsiveHeight(4.5),


                                                backgroundColor: '#283E65',
                                                elevation: responsiveWidth(1),
                                                borderWidth: 0,
                                                borderRadius: responsiveWidth(10),



                                                alignItems: 'center',

                                                padding: responsiveHeight(0.5),
                                              } }
                                              onPress={ () =>
                                              {
                                                setPendingBtnModalVisible(false);
                                                setCancelOrderModalVisible(true);
                                                //alert('Process btn clicked in Modal')
                                              } }>
                                              <Text
                                                style={ {
                                                  fontSize: responsiveFontSize(1.9),
                                                  fontFamily: 'raleway-medium',
                                                  color: 'white',
                                                } }>
                                                Cancel
                                              </Text>
                                            </TouchableOpacity>





                                            <TouchableOpacity
                                              style={ {
                                                width: responsiveWidth(21),
                                                marginLeft: responsiveWidth(2),

                                                height: responsiveHeight(4.5),


                                                backgroundColor: '#283E65',
                                                elevation: responsiveWidth(1),
                                                borderWidth: 0,
                                                borderRadius: responsiveWidth(10),



                                                alignItems: 'center',

                                                padding: responsiveHeight(0.5),
                                              } }
                                              onPress={ () =>
                                              {
                                                setErrorOrderModalVisible(true);
                                                setPendingBtnModalVisible(false);
                                                //alert('Process btn clicked in Modal')
                                              } }>
                                              <Text
                                                style={ {
                                                  fontSize: responsiveFontSize(1.9),
                                                  fontFamily: 'raleway-medium',
                                                  color: 'white',
                                                } }>
                                                Error
                                              </Text>
                                            </TouchableOpacity>















                                          </View>
                                          {/*View to hold Delivered, Cancel & Error buttons in Pending modal ends here*/ }






                                        </View>
                                      </View>
                                    </Modal>
























                                    <Modal
                                      transparent={ true }
                                      visible={ cancelOrderModalVisible }
                                      onRequestClose={ () =>
                                        setCancelOrderModalVisible(false)
                                      }>
                                      <View
                                        style={ {
                                          backgroundColor: 'rgba(0,0,0,0.01)',
                                          flex: 1,
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                        } }>
                                        <View
                                          style={ {
                                            backgroundColor: 'white',

                                            width: responsiveWidth(
                                              78
                                            ),
                                            height: responsiveHeight(
                                              50
                                            ),
                                            borderRadius: responsiveWidth(1),
                                          } }>

                                          {/*View to hold Change Status text and Ant icon to close modal starts here  */ }
                                          <View style={ { flexDirection: 'row' } }>
                                            <Text
                                              style={ {
                                                fontSize: responsiveWidth(5.2),
                                                fontFamily: 'raleway-medium',
                                                marginLeft: responsiveWidth(6),
                                                marginTop: responsiveHeight(4),
                                                marginBottom: responsiveHeight(3),
                                              } }>

                                              Cancel reason

                                            </Text>



                                            {/*<AllUITogether
                                              show={ 'AntIconBtn' }
                                              dothisProps={ closeCancelOrderModal }
                                              iconDesignName={ 'close' }
                                              colorForIconinAntDesignBtn={ 'white' }
                                              backgroundColorForIconinAntDesignBtn={ 'red' }
                                              sizeForIconinAntDesignBtn={ 24 }
                                              boardRadiusForIconinAntDesignBtn={ 50 }
                                              widthForIconinAntDesignBtn={ 9 }
                                              heightForIconinAntDesignBtn={ 4.5 }
                                              marginLeftForIconinAntDesignBtn={ 16 }
                                              marginTopForIconinAntDesignBtn={ 4 }
                                              boardColorForIconinAntDesignBtn={ '#283E65' }
                                              boardWidthForIconinAntDesignBtn={ 0.3 }
                                            />*/}
                                            <AllUITogether
                                            show={'AntIconBtn'}
                                              dothisProps={closeCancelOrderModal}    
                                            //dothisProps={gotoAddStaffScreen}
                                            iconDesignName={'close'}
                                            colorForIconinAntDesignBtn={'white'}
                                            backgroundColorForIconinAntDesignBtn={'red'}
                                            sizeForIconinAntDesignBtn={24}
                                            boardRadiusForIconinAntDesignBtn={50}
                                            widthForIconinAntDesignBtn={responsiveWidth(9)}
                                            heightForIconinAntDesignBtn={responsiveHeight(4.5)}
                                            marginLeftForIconinAntDesignBtn={responsiveWidth(16)}
                                            marginTopForIconinAntDesignBtn={responsiveHeight(4)}   
                                            boardColorForIconinAntDesignBtn={'#283E65'}
                                            boardWidthForIconinAntDesignBtn={responsiveWidth(0.3)}
                                                />





                                          </View>
                                          {/*View to hold Change Status text and Ant icon to close modal ends here  */ }






                                          {/*View to hold Remark TextInput, number of text entered counter and Confirm btn in Cancel Order modal starts here*/ }
                                          <View
                                            style={ {
                                              marginTop: responsiveHeight(1),
                                              alignItems: 'center',
                                              //flexDirection: 'row',
                                              //justifyContent:'center',
                                              //justifyContent:'space-around',
                                            } }>








                                            <FloatingLabelInput
                                              labelForCustomFloatingTextInputProps={ 'Remarks' }
                                              valueForCFTI={ cancelOrderRemark }
                                              onChangeTextForCFTI={ setcancelOrderRemark }
                                              //heightOfFloatingLabelInput={ 21 }
                                              //widthOfFloatingLabelInput={ 66 }
                                              //boarderRadiusForFloatingLabelInput={ 2 }
                                              heightOfFloatingLabelInput={responsiveHeight(21)}
                                              widthOfFloatingLabelInput={responsiveWidth(66)}
                                              boarderRadiusForFloatingLabelInput={responsiveWidth(2)}
                                            />

                                            <Text
                                              style={ {
                                                marginLeft: responsiveWidth(48),
                                                fontSize: responsiveFontSize(1.8),
                                                color: '#7E7E7E',
                                                fontFamily: 'raleway-regular',
                                              } }
                                            >{ 0 + cancelOrderRemark.length }/100</Text>






























                                            <TouchableOpacity
                                              style={ {
                                                width: responsiveWidth(66),
                                                marginLeft: responsiveWidth(5),
                                                marginTop: responsiveHeight(3),
                                                height: responsiveHeight(7.5),


                                                backgroundColor: '#283E65',
                                                elevation: responsiveWidth(1),
                                                borderWidth: 0,
                                                borderRadius: responsiveWidth(10),



                                                alignItems: 'center',

                                                padding: responsiveHeight(1.6),

                                              } }
                                              onPress={ () =>
                                              {

                                                setConfirmBtnInCancelModalClicked(true);
                                                setCancelOrderModalVisible(false);
                                                //setPendingBtnModalVisible(false);
                                                //alert('Pending Btn clicked from inside Modal')
                                              } }>
                                              <Text
                                                style={ {
                                                  //fontWeight: '500',
                                                  fontFamily: 'raleway-semibold',
                                                  color: 'white',
                                                  fontSize: responsiveFontSize(2.2),


                                                } }>
                                                Confirm
                                              </Text>
                                            </TouchableOpacity>










































                                          </View>
                                          {/*View to hold Remark TextInput, number of text entered counter and Confirm btn in Cancel Order modal ends here*/ }












                                        </View>
                                      </View>
                                    </Modal>
















                                    <Modal
                                      transparent={ true }
                                      visible={ errorOrderModalVisible }
                                      onRequestClose={ () =>
                                        setErrorOrderModalVisible(false)
                                      }>




                                      <View
                                        style={ {
                                          backgroundColor: 'rgba(0,0,0,0.01)',
                                          flex: 1,
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                        } }>
                                        <View
                                          style={ {
                                            backgroundColor: 'white',

                                            width: responsiveWidth(
                                              78
                                            ),
                                            height: responsiveHeight(
                                              50
                                            ),
                                            borderRadius: responsiveWidth(1),
                                          } }>

                                          {/*View to hold Change Status text and Ant icon to close modal starts here  */ }
                                          <View style={ { flexDirection: 'row' } }>
                                            <Text
                                              style={ {
                                                fontSize: responsiveWidth(5.2),
                                                fontFamily: 'raleway-medium',
                                                marginLeft: responsiveWidth(6),
                                                marginTop: responsiveHeight(4),
                                                marginBottom: responsiveHeight(3),
                                              } }>

                                              Error reason

                                            </Text>



                                            {/*<AllUITogether
                                              show={ 'AntIconBtn' }
                                              dothisProps={ closeErrorOrderModal }
                                              iconDesignName={ 'close' }
                                              colorForIconinAntDesignBtn={ 'white' }
                                              backgroundColorForIconinAntDesignBtn={ 'red' }
                                              sizeForIconinAntDesignBtn={ 24 }
                                              boardRadiusForIconinAntDesignBtn={ 50 }
                                              widthForIconinAntDesignBtn={ 9 }
                                              heightForIconinAntDesignBtn={ 4.5 }
                                              marginLeftForIconinAntDesignBtn={ 16 }
                                              marginTopForIconinAntDesignBtn={ 4 }
                                              boardColorForIconinAntDesignBtn={ '#283E65' }
                                              boardWidthForIconinAntDesignBtn={ 0.3 }
                                            />*/}
                                            <AllUITogether
                                            show={'AntIconBtn'}
                                              dothisProps={closeErrorOrderModal}    
                                            //dothisProps={gotoAddStaffScreen}
                                            iconDesignName={'close'}
                                            colorForIconinAntDesignBtn={'white'}
                                            backgroundColorForIconinAntDesignBtn={'red'}
                                            sizeForIconinAntDesignBtn={24}
                                            boardRadiusForIconinAntDesignBtn={50}
                                            widthForIconinAntDesignBtn={responsiveWidth(9)}
                                            heightForIconinAntDesignBtn={responsiveHeight(4.5)}
                                            marginLeftForIconinAntDesignBtn={responsiveWidth(16)}
                                            marginTopForIconinAntDesignBtn={responsiveHeight(4)}   
                                            boardColorForIconinAntDesignBtn={'#283E65'}
                                            boardWidthForIconinAntDesignBtn={responsiveWidth(0.3)}
                                                />





                                          </View>
                                          {/*View to hold Change Status text and Ant icon to close modal ends here  */ }






                                          {/*View to hold Remark TextInput, number of text entered counter and Confirm btn in Cancel Order modal starts here*/ }
                                          <View
                                            style={ {
                                              marginTop: responsiveHeight(1),
                                              alignItems: 'center',
                                              //flexDirection: 'row',
                                              //justifyContent:'center',
                                              //justifyContent:'space-around',
                                            } }>








                                            <FloatingLabelInput
                                              labelForCustomFloatingTextInputProps={ 'Remarks' }
                                              valueForCFTI={ errorOrderRemark }
                                              onChangeTextForCFTI={ seterrorOrderRemark }
                                              //heightOfFloatingLabelInput={ 21 }
                                              //widthOfFloatingLabelInput={ 66 }
                                              //boarderRadiusForFloatingLabelInput={ 2 }
                                              heightOfFloatingLabelInput={responsiveHeight(21)}
                                              widthOfFloatingLabelInput={responsiveWidth(66)}
                                              boarderRadiusForFloatingLabelInput={responsiveWidth(2)}
                                            />




                                            <Text
                                              style={ {
                                                marginLeft: responsiveWidth(48),
                                                fontSize: responsiveFontSize(1.8),
                                                color: '#7E7E7E',
                                                fontFamily: 'raleway-regular',
                                              } }
                                            >{ 0 + errorOrderRemark.length }/100</Text>






























                                            <TouchableOpacity
                                              style={ {
                                                width: responsiveWidth(66),
                                                marginLeft: responsiveWidth(5),
                                                marginTop: responsiveHeight(3),
                                                height: responsiveHeight(7.5),


                                                backgroundColor: '#283E65',
                                                elevation: responsiveWidth(1),
                                                borderWidth: 0,
                                                borderRadius: responsiveWidth(10),



                                                alignItems: 'center',

                                                padding: responsiveHeight(1.5),

                                              } }
                                              onPress={ () =>
                                              {

                                                setConfirmBtnInErrorModalClicked(true);
                                                setErrorOrderModalVisible(false);
                                                setPendingBtnModalVisible(false);
                                                //alert('Pending Btn clicked from inside Modal')
                                              } }>
                                              <Text
                                                style={ {
                                                  //fontWeight: '500',
                                                  fontFamily: 'raleway-semibold',
                                                  color: 'white',
                                                  fontSize: responsiveFontSize(2.2),


                                                } }>
                                                Confirm
                                              </Text>
                                            </TouchableOpacity>








































                                          </View>
                                          {/*View to hold Remark TextInput, number of text entered counter and Confirm btn in Cancel Order modal ends here*/ }












                                        </View>
                                      </View>

                                    </Modal>























                                    <TouchableOpacity
                                      onPress={ () =>
                                      {
                                        setaskDeleteOrNotModalInOrderScreen(true);
                                        selectedIndexNumberToDeleteDataInOrderScreen = index;
                                        //alert('Index number selected for starting process of delete is:'+index);

                                        if (resultsecond.length == 1)
                                        {
                                          selectedIndexNumberToDeleteDataInOrderScreen ==
                                            index
                                            ? ((orderIDForDeletingOrder =
                                              item.id),
                                              setorderIDNowToDeleteIt(
                                                orderIDForDeletingOrder
                                              )
                                              //alert('order ID For Deleting Order is:' +orderIDForDeletingOrder)

                                            )
                                            : null;

                                          //removeData();
                                          //removeDataForOrderScreenFromAsync();
                                          setLastOrderInFlatListIsToBeDeleted(
                                            true
                                          );
                                        } else
                                        {
                                          selectedIndexNumberToDeleteDataInOrderScreen ==
                                            index
                                            ? ((orderIDForDeletingOrder =
                                              item.id),
                                              setorderIDNowToDeleteIt(
                                                orderIDForDeletingOrder
                                              )
                                              //alert('order ID For Deleting Order is:' +orderIDForDeletingOrder)
                                            )
                                            : null;
                                        }

                                        //alert('Name which is being sent to Edit Customer Screen is:'+nameForCustomerScreen);
                                      } }
                                      style={ {
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
                                      } }>
                                      <Text
                                        style={ {
                                          color: 'white',
                                          fontSize: responsiveFontSize(1.9),
                                          fontFamily: 'raleway-regular',
                                          marginTop: responsiveHeight(-0.5),
                                          //alignItems: 'center',
                                          textAlign: 'center',
                                        } }>
                                        Delete
                                      </Text>
                                    </TouchableOpacity>

                                    { callFetchDynamicAPIsInOrderScreenToDelete ==
                                      true ? (
                                      <>
                                        <FetchDynamicAPIs
                                          urlToFetchProps={ 'delete_order' }
                                          accessTokenForFetchingAPIProps={
                                            accessTokenSentToOrderScreen
                                          }
                                          actionProps={ 'delete' }
                                          orderIDProps={ orderIDNowToDeleteIt }
                                          screenNameProps={ 'OrderScreenForDelete' }
                                          setNowcallingDeleteAPIVariableProps={
                                            setcallFetchDynamicAPIsInOrderScreenToDelete
                                          }
                                          setterForRefreshingOurFlatList={
                                            setcallFetchDynamicAPIsInOrderScreen
                                          }
                                          setterForLastFlatListDataisToBeDeletedProps={
                                            setLastOrderInFlatListIsToBeDeleted
                                          }
                                          variableForLastFlatListDataisToBeDeletedProps={
                                            lastOrderInFlatListIsToBeDeleted
                                          }
                                          removeFlatListDataFromAsynProps={
                                            removeDataForOrderScreenFromAsync
                                          }
                                          refreshOnLastFlatListDeletedSuccessfully={
                                            setResultsecond
                                          }
                                          changeTotalOrderProps={
                                            setResultForNo_Of_Order
                                          }
                                          setterForshowNoDataProps={
                                            setNoDataFoundForFlatListInOrderScreen
                                          }
                                          setNoDataToTrueInOrderScreen={
                                            setNoDataFoundForFlatListInOrderScreen
                                          }

                                        />
                                      </>
                                    ) : null }











                                    { pendingBtnClickedInsideModal ==
                                      true ? (
                                      <>
                                        <FetchDynamicAPIs
                                          urlToFetchProps={ 'change_order_status' }
                                          accessTokenForFetchingAPIProps={
                                            accessTokenSentToOrderScreen
                                          }
                                          orderStatusProps={ 'Pending' }
                                          setterForPendingBtnModalVisibleProps={ setPendingBtnModalVisible }

                                          orderIDProps={ orderIDNowToPendingItsStatus }
                                          screenNameProps={ 'OrderScreenForPending' }
                                          setPendingBtnClickedInsideModalProps={
                                            setpendingBtnClickedInsideModal
                                          }
                                          setterForRefreshingOurFlatList={
                                            setcallFetchDynamicAPIsInOrderScreen
                                          }
                                          /*setterForLastFlatListDataisToBeChangeStatusToPendingProps={
                                            setLastOrderInFlatListIsToBeChangeStatusToPending
                                          }*/
                                          variableForLastFlatListDataisToBeChangeStatusToPendingProps={
                                            lastOrderInFlatListIsToBeChangeStatusToPending
                                          }


                                        />
                                      </>
                                    ) : null }









                                    { processBtnClickedInsideModal ==
                                      true ? (
                                      <>
                                        <FetchDynamicAPIs
                                          urlToFetchProps={ 'change_order_status' }
                                          accessTokenForFetchingAPIProps={
                                            accessTokenSentToOrderScreen
                                          }
                                          orderStatusProps={ 'Process' }
                                          setterForPendingBtnModalVisibleProps={ setPendingBtnModalVisible }

                                          //orderIDProps={orderIDNowToPendingItsStatus}
                                          orderIDProps={ orderIDNowToProcessItsStatus }
                                          screenNameProps={ 'OrderScreenForProcess' }
                                          setProcessBtnClickedInsideModalProps={
                                            setprocessBtnClickedInsideModal
                                          }
                                          setterForRefreshingOurFlatList={
                                            setcallFetchDynamicAPIsInOrderScreen
                                          }


                                        />
                                      </>
                                    ) : null }




                                    { dispatchBtnClickedInsideModal ==
                                      true ? (
                                      <>
                                        <FetchDynamicAPIs
                                          urlToFetchProps={ 'change_order_status' }
                                          accessTokenForFetchingAPIProps={
                                            accessTokenSentToOrderScreen
                                          }
                                          orderStatusProps={ 'Dispatch' }
                                          setterForPendingBtnModalVisibleProps={ setPendingBtnModalVisible }


                                          orderIDProps={ orderIDNowToDispatchItsStatus }
                                          screenNameProps={ 'OrderScreenForDispatch' }
                                          setDispatchBtnClickedInsideModalProps={
                                            setdispatchBtnClickedInsideModal
                                          }
                                          setterForRefreshingOurFlatList={
                                            setcallFetchDynamicAPIsInOrderScreen
                                          }


                                        />
                                      </>
                                    ) : null }



                                    { confirmBtnInErrorModalClicked ==
                                      true ? (
                                      <>
                                        <FetchDynamicAPIs
                                          urlToFetchProps={ 'change_order_status' }
                                          accessTokenForFetchingAPIProps={
                                            accessTokenSentToOrderScreen
                                          }
                                          orderStatusProps={ 'Error' }
                                          setterForPendingBtnModalVisibleProps={ setPendingBtnModalVisible }
                                          remarksTextProps={ errorOrderRemark }

                                          orderIDProps={ orderIDNowToDispatchItsStatus }
                                          screenNameProps={ 'OrderScreenForError' }
                                          setConfirmBtnInErrorModalClickedProps={

                                            setConfirmBtnInErrorModalClicked
                                          }
                                          setterForRefreshingOurFlatList={
                                            setcallFetchDynamicAPIsInOrderScreen
                                          }


                                          setterForMakingRemarkTextToBlankAfterConfirmProps={ seterrorOrderRemark }

                                        />
                                      </>
                                    ) : null }




                                    { deliveredBtnClickedInsideModal ==
                                      true ? (
                                      <>
                                        <FetchDynamicAPIs
                                          urlToFetchProps={ 'change_order_status' }
                                          accessTokenForFetchingAPIProps={
                                            accessTokenSentToOrderScreen
                                          }
                                          orderStatusProps={ 'Delivered' }
                                          setterForPendingBtnModalVisibleProps={ setPendingBtnModalVisible }


                                          orderIDProps={ orderIDNowToDeliveredItsStatus }
                                          screenNameProps={ 'OrderScreenForDelivered' }
                                          setDeliveredBtnClickedInsideModalProps={
                                            setdeliveredBtnClickedInsideModal
                                          }
                                          setterForRefreshingOurFlatList={
                                            setcallFetchDynamicAPIsInOrderScreen
                                          }
                                          setterForLastFlatListDataisToBeChangeStatusToDeliveredProps={
                                            setLastOrderInFlatListIsToBeChangeStatusToDelivered
                                          }
                                          variableForLastFlatListDataisToBeChangeStatusToDeliveredProps={
                                            lastOrderInFlatListIsToBeChangeStatusToDelivered
                                          }
                                          removeFlatListDataFromAsynProps={
                                            removeDataForOrderScreenFromAsync
                                          }
                                          refreshOnLastFlatListDeletedSuccessfully={
                                            setResultsecond
                                          }
                                          changeTotalOrderProps={
                                            setResultForNo_Of_Order
                                          }
                                          setterForshowNoDataProps={
                                            setNoDataFoundForFlatListInOrderScreen
                                          }


                                        />
                                      </>
                                    ) : null }





                                    { confirmBtnInCancelModalClicked ==
                                      true ? (
                                      <>
                                        <FetchDynamicAPIs
                                          urlToFetchProps={ 'change_order_status' }
                                          accessTokenForFetchingAPIProps={
                                            accessTokenSentToOrderScreen
                                          }
                                          orderStatusProps={ 'Cancel' }
                                          setterForPendingBtnModalVisibleProps={ setPendingBtnModalVisible }
                                          remarksTextProps={ cancelOrderRemark }

                                          orderIDProps={ orderIDNowToCancelItsStatus }
                                          screenNameProps={ 'OrderScreenForCancel' }
                                          setConfirmBtnInsideCancelModalClickedProps={

                                            setConfirmBtnInCancelModalClicked
                                          }
                                          setterForRefreshingOurFlatList={
                                            setcallFetchDynamicAPIsInOrderScreen
                                          }
                                          setterForLastFlatListDataisToBeChangeStatusToCancelProps={
                                            setLastOrderInFlatListIsToBeChangeStatusToCancel
                                          }
                                          variableForLastFlatListDataisToBeChangeStatusToCancelProps={
                                            lastOrderInFlatListIsToBeChangeStatusToCancel
                                          }
                                          removeFlatListDataFromAsynProps={
                                            removeDataForOrderScreenFromAsync
                                          }
                                          refreshOnLastFlatListCancelSuccessfully={
                                            setResultsecond
                                          }
                                          changeTotalOrderProps={
                                            setResultForNo_Of_Order
                                          }
                                          setterForshowNoDataProps={
                                            setNoDataFoundForFlatListInOrderScreen
                                          }

                                          setterForMakingRemarkTextToBlankAfterConfirmProps={ setcancelOrderRemark }


                                        />
                                      </>
                                    ) : null }






                                    { askDeleteOrNotModalInOrderScreen == true ? (
                                      <AllUITogether
                                        show={ 'InteractiveModalWithTwoOptions' }
                                        //widthPropsForInteractiveModal={ 78 }
                                        //heightPropsForInteractiveModal={ 19 }
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
                                          closeDeleteModalInOrderScreen
                                        }
                                      />
                                    ) : null }

                                    {/* item.order_images.map((x) =>(imageFromOrderScreen = x.image))  */ }

                                    <TouchableOpacity
                                      onPress={ () =>    
                                      {
                                        selectedIndexNumberToSendDataInEditOrder =
                                          index;

                                        selectedIndexNumberToSendDataInEditOrder ==
                                          index
                                          ? (
                                            (customerNameFromOrderScreen = item.customer_name),
                                            (suppliernameFromOrderScreen = item.supplier_name),
                                            (categorynameFromOrderScreen = item.category_name),

                                            (customerIDFromOrderScreen = item.customer_id),
                                            (supplierIDFromOrderScreen = item.supplier_id),
                                            (categoryIDFromOrderScreen = item.category_id),

                                            (colorIDFromOrderScreen = item.color_id),
                                            (colorNameFromOrderScreen = item.color_name),

                                            (carretIDFromOrderScreen = item.carret_id),
                                            (carretNameFromOrderScreen = item.carret_name),

                                            (imageFromOrderScreen = item.order_images),

                                            (orderDateVariableToBeSentToEditOrderScreen = item.order_date),
                                            (typeOfOrderSentToEditOrderScreen = item.order_type),
                                            (itemNameFromOrderScreen = item.item),
                                            (qtyFromOrderScreen = item.qty),
                                            (sizeFromOrderScreen = item.size),
                                            (narrationFromOrderScreen = item.narration),
                                            (deliveryDateFromOrderScreen = item.delivery_date),
                                            (priorityFromOrderScreen = item.priority),
                                            (designNoFromOrderScreen = item.design_no),
                                            (broadnessFromOrderScreen = item.broadness),
                                            (diamondweightFromOrderScreen = item.diamond_weight),
                                            (diamondqualityFromOrderScreen = item.diamond_quality),
                                            (diamondpcsFromOrderScreen = item.diamond_pcs),
                                            (partydiamondFromOrderScreen = item.party_diamond),
                                            (stoneweightFromOrderScreen = item.stone_weight),
                                            (stonequalityFromOrderScreen = item.stone_quality),
                                            (stonepcsFromOrderScreen = item.stone_pcs),
                                            (partystoneFromOrderScreen = item.party_stone),
                                            (ptpolishFromOrderScreen = item.pt_polish),
                                            (kt18polishFromOrderScreen = item.kt18_polish),
                                            (engravingdetailsFromOrderScreen = item.engraving_details),
                                            (orderforFromOrderScreen = item.order_for),

                                            (hallmarkFromOrderScreen = item.hallmark),
                                            (orderIDFromOrderScreen = item.id)
                                          )
                                          : null;

                                        alert(
                                          '1. Order ID which is being sent to Edit Customer Screen is:' + orderIDFromOrderScreen + '\n' +
                                          '2. Category which is being sent to Edit Customer Screen is:' + categorynameFromOrderScreen + '\n' +

                                          '3. Color Name which is being sent to Edit Customer Screen is:' + colorNameFromOrderScreen + '\n' +
                                          '4. Color ID which is being sent to Edit Customer Screen is:' + colorIDFromOrderScreen + '\n' +
                                          '5. Carret Name which is being sent to Edit Customer Screen is:' + carretNameFromOrderScreen + '\n' +
                                          '6. Carret ID which is being sent to Edit Customer Screen is:' + carretIDFromOrderScreen + '\n' +

                                          '7. Category ID which is being sent to Edit Customer Screen is:' + categoryIDFromOrderScreen + '\n' +

                                          '8. partydiamondFromOrderScreen which is being sent to Edit Customer Screen is:' + partydiamondFromOrderScreen + '\n' +

                                          '9. partystoneFromOrderScreen which is being sent to Edit Customer Screen is:' + partystoneFromOrderScreen
                                        );

                                        navigation.replace('EditOrderScreen', {
                                          accessTokenSentToEditOrder: accessTokenSentToOrderScreen,
                                          orderIDSentToEditOrder: orderIDFromOrderScreen,
                                          itemImage: imageFromOrderScreen,
                                          orderDateSentFromOrderScreen: orderDateVariableToBeSentToEditOrderScreen,
                                          nameToBeEditedForEditOrder: customerNameFromOrderScreen,


                                          customerIDSentToEditOrder: customerIDFromOrderScreen,
                                          supplierIDSentToEditOrder: supplierIDFromOrderScreen,
                                          categoryIDSentToEditOrder: categoryIDFromOrderScreen,


                                          typeOfOrderFromOrderScreen: typeOfOrderSentToEditOrderScreen,
                                          itemNameReceivedFromOrderScreen: itemNameFromOrderScreen,



                                          colorIDSentToEditOrder: colorIDFromOrderScreen,
                                          colorNameSentToEditOrder: colorNameFromOrderScreen,

                                          carretIDSentToEditOrder: carretIDFromOrderScreen,
                                          carretNameSentToEditOrder: carretNameFromOrderScreen,






                                          qtyReceivedFromOrderScreen: qtyFromOrderScreen,
                                          sizeReceivedFromOrderScreen: sizeFromOrderScreen,
                                          narrationReceivedFromOrderScreen: narrationFromOrderScreen,
                                          deliveryDateReceivedFromOrderScreen: deliveryDateFromOrderScreen,
                                          priorityReceivedFromOrderScreen: priorityFromOrderScreen,
                                          designNoReceivedFromOrderScreen: designNoFromOrderScreen,
                                          broadnessReceivedFromOrderScreen: broadnessFromOrderScreen,
                                          diamondweightReceivedFromOrderScreen: diamondweightFromOrderScreen,
                                          diamondqualityReceivedFromOrderScreen: diamondqualityFromOrderScreen,
                                          diamondpcsReceivedFromOrderScreen: diamondpcsFromOrderScreen,
                                          partydiamondReceivedFromOrderScreen: partydiamondFromOrderScreen,
                                          stoneweightReceivedFromOrderScreen: stoneweightFromOrderScreen,
                                          stonequalityReceivedFromOrderScreen: stonequalityFromOrderScreen,
                                          stonepcsReceivedFromOrderScreen: stonepcsFromOrderScreen,
                                          partystoneReceivedFromOrderScreen: partystoneFromOrderScreen,
                                          ptpolishReceivedFromOrderScreen: ptpolishFromOrderScreen,
                                          kt18polishReceivedFromOrderScreen: kt18polishFromOrderScreen,
                                          engravingdetailsReceivedFromOrderScreen: engravingdetailsFromOrderScreen,
                                          orderforFromOrderScreenReceivedFromOrderScreen: orderforFromOrderScreen,
                                          suppliernameReceivedFromOrderScreen: suppliernameFromOrderScreen,
                                          categorynameReceivedFromOrderScreen: categorynameFromOrderScreen,
                                          hallmarkReceivedFromOrderScreen: hallmarkFromOrderScreen,
                                        });
                                      } }
                                      style={ {
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
                                      } }>
                                      <Text
                                        style={ {
                                          color: 'white',
                                          fontSize: responsiveFontSize(1.9),
                                          fontFamily: 'raleway-regular',
                                          marginTop: responsiveHeight(-0.5),
                                          //alignItems: 'center',
                                          textAlign: 'center',
                                        } }>
                                        Edit
                                      </Text>
                                    </TouchableOpacity>



                                    <TouchableOpacity
                                      onPress={ () =>
                                      {
                                        selectedIndexNumberToShareDataInOrderScreen =
                                          index;

                                        selectedIndexNumberToShareDataInOrderScreen ==
                                          index
                                          ? (fullDetails =
                                            'Order Number:' +
                                            item.order_no +
                                            '\n' +
                                            'Item:' +
                                            item.item +
                                            '\n' +
                                            ' Category:' +
                                            item.category_name +
                                            '\n' +
                                            ' Priority:' +
                                            item.priority +
                                            '\n' +
                                            ' Order Date:' +
                                            item.order_date +
                                            '\n' +
                                            ' Order Status:' +
                                            item.order_status +
                                            '\n' +
                                            ' Design No:' +
                                            item.design_no +
                                            '\n' +
                                            ' Size:' +
                                            item.size +
                                            '\n' +
                                            ' Broadness:' +
                                            item.broadness +
                                            '\n' +
                                            ' Diamond Weight:' +
                                            item.diamond_weight +
                                            '\n' +
                                            ' Diamond Quality:' +
                                            item.diamond_quality +
                                            '\n' +
                                            ' Diamond PCS:' +
                                            item.diamond_pcs +
                                            '\n' +
                                            ' Party Diamond:' +
                                            item.party_diamond +
                                            '\n' +
                                            ' Stone Weight:' +
                                            item.stone_weight +
                                            '\n' +
                                            ' Stone Quality:' +
                                            item.stone_quality +
                                            '\n' +
                                            ' Party PCS:' +
                                            item.party_stone +
                                            '\n' +
                                            ' Party Stone:' +
                                            item.party_stone +
                                            '\n' +
                                            ' PT Polish:' +
                                            item.pt_polish +
                                            '\n' +
                                            ' KT18 Polish:' +
                                            item.kt18_polish +
                                            '\n' +
                                            ' Engraving Details:' +
                                            item.engraving_details +
                                            '\n' +
                                            ' Delivery Date:' +
                                            item.delivery_date +
                                            '\n' +
                                            ' Order For:' +
                                            item.order_for +
                                            '\n' +
                                            ' Narration:' +
                                            item.narration +
                                            '\n')
                                          : null;

                                        //onShare();
                                      } }
                                      style={ {
                                        width: responsiveWidth(20),
                                        height: responsiveHeight(4),
                                        borderColor: '#283E65',
                                        marginHorizontal: responsiveWidth(1),
                                        //borderWidth: responsiveWidth(0.4),
                                        borderWidth: responsiveWidth(0.3),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        //padding:responsiveWidth(0.2),
                                        borderRadius: responsiveWidth(6),
                                        backgroundColor: '#283E65',
                                      } }>
                                      <Text
                                        style={ {
                                          color: 'white',
                                          fontSize: responsiveFontSize(1.9),
                                          fontFamily: 'raleway-regular',
                                          marginTop: responsiveHeight(-0.5),
                                          //alignItems: 'center',
                                          textAlign: 'center',
                                        } }>
                                        Share
                                      </Text>
                                    </TouchableOpacity>
                                  </View>
                                  {/*All Buttons in Order Screen ends here*/ }
                                </View>
                                {/*Acutal View which is reponsible for all the items in card ends here  */ }
                              </TouchableOpacity>

                              /*Root View inside FlatList return() ends here  */
                            );
                          } }
                        />
                      {/* </ScrollView> */}    
                    </>
                  ) }
                  {/*Flat list inside the Root View for Cards ends here  */ }
                </View>
                {/*Root View for Cards ends here  */ }
                </View>




              




                    {/*Rounded Bottom Tab Bar code starts here */ }
              {/* <GestureDetector gesture={ gesture }>
                 <View style={ {
                 marginTop: responsiveHeight(-23),               
                  //backgroundColor:'purple',     
                  //marginBottom:responsiveHeight(6),        
                  //CCCCCCCCCCCCC
                } }> */}
                 <AllUITogether
                show={ 'CustomeRoundBottomNavBar' }
                onPressOnHome={ homeIconClickedDoThis }
                homeIconColorprops={ '#fff' }
                homeTextColorProps={ '#fff' }
                onPressOnOrder={ orderIconClickedDoThis }
                orderIconColorprops={ '#F1CB8C' }
                orderTextColorProps={ '#F1CB8C' }
                onPressOnAddOrder={ addOrderIconClickedDoThis }
                onPressOnCustomer={ customerIconClickedDoThis }
                customerIconColorprops={ '#fff' }
                customerTextColorprops={ '#fff' }
                onPressOnSupplier={ supplierIconClickedDoThis }
                supplierIconColorprops={ '#fff' }
                supplierTextColorprops={ '#fff' }
              />     
 

               
                  
                  
                  
                  {/*<ActualSideNavigationMenu
              ref={ ChildRef }
              removeGraycolorPropsLabel={ removingNowGrayColor }
              gotoCategoryScreenPropsLabel={ goToCategoryScreen }   
              //gotoSettingsScreenPropsLabel={ goToSettingsScreen }
              gotoChangePasswordScreenPropsLabel={ goToChangePasswordScreen }    
              
              removeAllAsyncStorageInformation={ removeData }
            />*/}
            <ActualSideNavigationMenu
              ref={ ChildRef }
              removeGraycolorPropsLabel={ removingNowGrayColor }
              gotoCategoryScreenPropsLabel={ goToCategoryScreen }   
              gotoCaratScreenPropsLabel={ goToCaratScreen }
                goToAddStaffScreenPropsLabel={ goToAddStaffScreen }
                gotoColorScreenPropsLabel={ goToColorScreen }
              gotoSettingsScreenPropsLabel={ goToSettingsScreen }
              gotoChangePasswordScreenPropsLabel={ goToChangePasswordScreen }    
              
              removeAllAsyncStorageInformation={ removeData }
            />

                 { callFetchDynamicAPIsInOrderScreen == true ? (
                <FetchDynamicAPIs
                  urlToFetchProps={ 'order_list' }
                  mobileNumberForAuthentication={ '' }
                  passwordForAuthentication={ '' }
                  accessTokenForFetchingAPIProps={ accessTokenSentToOrderScreen }
                  startProps={ '0' }
                  limitProps={ '1000' }
                  screenNameProps={ 'OrderScreen' }
                  getData={ getOrderScreenData }
                  setterToStopCallingFetchDynamicAPIsInOrderScreenprops={
                    setcallFetchDynamicAPIsInOrderScreen
                  }
                />
              ) : null }
                 </View>


                
              {/*</GestureDetector>*/}

              {/*Rounded Bottom Tab Bar code ends here*/ }

             {/* <ActualSideNavigationMenu
              ref={ ChildRef }
              removeGraycolorPropsLabel={ removingNowGrayColor }
              gotoCategoryScreenPropsLabel={ goToCategoryScreen }   
              //gotoSettingsScreenPropsLabel={ goToSettingsScreen }
              gotoChangePasswordScreenPropsLabel={ goToChangePasswordScreen }    
              
              removeAllAsyncStorageInformation={ removeData }
            />    */} 

              

             {/*  {callFetchDynamicAPIs == true ? (
                <FetchDynamicAPIs
                  urlToFetchProps={'dashboard_count'}
                  mobileNumberForAuthentication={''}
                  passwordForAuthentication={''}
                  accessTokenForFetchingAPIProps={accessTokenKey}
                  getData={getDashBoardData}
                  screenNameProps={'Order'}
                />
              ) : null} */}    

                









             {/* </AllUITogether> */}      
             


          </View>
          
        
            
      </GestureHandlerRootView>


        



    </SafeAreaView>
  );
};

export default Order;    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    //backgroundColor: 'purple',
  },

  flatListForOrdersViewStyle: {
    height: responsiveHeight(75),
    //backgroundColor:'purple',
  },
  footerStyle: {
    //borderTopColor: 'red',
    //borderTopWidth: 2,
    //borderBottomColor: 'red',
    //borderBottomWidth: 2
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
  textInputStyleOnlyForLoginPasswordTextInput: {
    fontFamily: 'raleway-light',
    backgroundColor: 'white',
    marginTop: responsiveHeight(0.2),
    width: responsiveWidth(30),
  },
  signUpStyle: {

    fontSize: responsiveWidth(4.5),
    fontFamily: 'raleway-medium',
    marginLeft: responsiveWidth(2.5),

    color: '#2B95E1',
    fontStyle: 'bold',

  },
});

/* 

{
    "result": true,
    "data": {
        "order_list": [
            {
                "id": 22,
                "order_no": "05040002",
                "customer_id": 5,
                "supplier_id": 6,
                "order_type": "Gold",
                "item": "Test Item",
                "carret_id": 8,
                "color_id": 8,
                "qty": 1,
                "size": "test size",
                "narration": "Test urgent",
                "delivery_date": "2023-04-08",
                "order_status": "Pending",
                "hallmark": "No",
                "priority": "Normal",
                "design_no": null,
                "broadness": null,
                "diamond_weight": null,
                "diamond_quality": null,
                "diamond_pcs": null,
                "party_diamond": "No",
                "stone_weight": null,
                "stone_quality": null,
                "stone_pcs": null,
                "party_stone": "No",
                "pt_polish": null,
                "kt18_polish": null,
                "engraving_details": null,
                "is_active": 1,
                "is_delete": 0,    
                "created_at": "2023-04-05T00:00:00.000000Z",
                "updated_at": "2023-04-05T07:19:46.000000Z",
                "order_for": "Client",
                "unique_id": null,
                "order_date": "2023-04-05",
                "category_id": 8,
                "edit_order": null,
                "error_reason": null,
                "admin_id": 20,
                "customer_name": "Zaveri 33",
                "supplier_name": null,
                "category_name": "Ring",
                "carret_name": "22k",
                "color_name": "Rose gold",
                "order_images": [
                    {
                        "id": 24,
                        "image": "/order_images/1680678843206307.jpg",
                        "order_id": 22,
                        "created_at": "2023-04-05 12:44:03",
                        "updated_at": "2023-04-05 12:44:03"
                    }
                ]
            }
        ],
        "no_of_order": 1,
        "is_nextpage": "No"
    },
    "message": "Order List"
}
========================================================

{
    "result": true,
    "data": {
        "order_list": [
            {
                "id": 118,
                "order_no": "04050063",
                "customer_id": 13,
                "supplier_id": 17,
                "order_type": "Platinum",
                "item": "Abc",
                "carret_id": null,
                "color_id": null,
                "qty": 0,
                "size": "xl",
                "narration": "Sdf",
                "delivery_date": "2022-06-12",
                "order_status": "Pending",
                "hallmark": "Isi",
                "priority": "Low",
                "design_no": "1234",
                "broadness": "Sdfsdf",
                "diamond_weight": "22",
                "diamond_quality": "High",
                "diamond_pcs": "12",
                "party_diamond": "Yes",
                "stone_weight": "33",
                "stone_quality": "low",
                "stone_pcs": "11",
                "party_stone": "No",
                "pt_polish": "Dff",
                "kt18_polish": "Dfsfd",
                "engraving_details": "Adasdasd",
                "is_active": 1,
                "is_delete": 0,
                "created_at": "2023-05-04T00:00:00.000000Z",
                "updated_at": "2023-05-04T12:00:44.000000Z",
                "order_for": "Client",
                "unique_id": null,
                "order_date": "2022-12-30",
                "category_id": 2,
                "edit_order": null,
                "error_reason": null,
                "admin_id": 17,
                "customer_name": null,
                "supplier_name": null,
                "category_name": "Couple ring admin 2",
                "carret_name": null,
                "color_name": null,
                "order_images": []
            },
            {
                "id": 117,
                "order_no": "04050062",
                "customer_id": 13,
                "supplier_id": 17,
                "order_type": "Platinum",
                "item": "Abc",
                "carret_id": null,
                "color_id": null,
                "qty": 0,
                "size": "xl",
                "narration": "Sdf",
                "delivery_date": "2022-06-12",
                "order_status": "Pending",
                "hallmark": "Isi",
                "priority": "Low",
                "design_no": "1234",
                "broadness": "Sdfsdf",
                "diamond_weight": "22",
                "diamond_quality": "High",
                "diamond_pcs": "12",
                "party_diamond": "Yes",
                "stone_weight": "33",
                "stone_quality": "low",
                "stone_pcs": "11",
                "party_stone": "No",
                "pt_polish": "Dff",
                "kt18_polish": "Dfsfd",
                "engraving_details": "Adasdasd",
                "is_active": 1,
                "is_delete": 0,
                "created_at": "2023-05-04T00:00:00.000000Z",
                "updated_at": "2023-05-04T11:56:22.000000Z",
                "order_for": "Client",
                "unique_id": null,
                "order_date": "2022-12-30",
                "category_id": 2,
                "edit_order": null,
                "error_reason": null,
                "admin_id": 17,
                "customer_name": null,
                "supplier_name": null,
                "category_name": "Couple ring admin 2",
                "carret_name": null,
                "color_name": null,
                "order_images": []
            }
        ],
        "no_of_order": 2,
        "is_nextpage": "No"
    },
    "message": "Order List"
}

 */