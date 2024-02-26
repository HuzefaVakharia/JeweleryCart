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
  Alert,
  Text,
  Button,
  Modal,
  TouchableOpacity,
  ImageBackground,   
  View,
  LogBox,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import FetchDynamicAPIs from '../components/FetchDynamicAPIs';
import ActualSideNavigationMenu from './ActualSideNavigationMenu';

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

const HomeScreen = ({ route, navigation }) => {
  let [new_orderKey, setnew_orderKey] = useState(0);
  let [process_orderKey, setprocess_orderKey] = useState(0);
  let [duein_thisweekKey, setduein_thisweekKey] = useState(0);
  let [over_dueKey, setover_dueKey] = useState(0);
  let [total_orderKey, settotal_orderKey] = useState(0);
  let [duein_todayKey, setduein_todayKey] = useState(0);
  let [customer_pendingKey, setcustomer_pendingKey] = useState(0);
  let [customerKey, setcustomerKey] = useState(0);
  let [supplierKey, setsupplierKey] = useState(0);
  let [instance_idKey, setinstance_idKey] = useState(0);

  const { accessTokenKey } = route.params;




  useEffect(() => {
    getLoggedInPersonData();
    getDashBoardData();
  }, []);


  useEffect(() => {
    //LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreAllLogs();
}, []);
























  


















  /*let accessTokenKey='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDQxZjY5ODg1ZjBjNDQ0ZDkyOGRiMTM1NGFhNjEyZDQxM2EwMmE4NzQ1OGMwMmY1NDU5YjUxMTAxM2Q2NDIxMzc4ZTRlMzViYzQ0MTRiMTUiLCJpYXQiOjE2ODYzMDg2NzIsIm5iZiI6MTY4NjMwODY3MiwiZXhwIjoxNzE3OTMxMDcyLCJzdWIiOiIxNyIsInNjb3BlcyI6W119.R-cujkUaUx8ix8QzvfN04A9iDdjxDslvmY2Xf8Fjhuo6r18DrCteb_pVTaN1NGkC2Vvl1rRFTlZykfPOfPkxnlLYXTz-a6XjRBQIW50wIbKbHHnsj1MPgc36fcPbi-BhhcVPcPWb1b6RVbl5jy_9XrEDNq3wCC3yEYApo3IS3BQrp081vrqOQfMypRtJyVaYTvbx4M1KMIO5x4b0NVAlz42hb7Dz-tYDog1A1ZiN4yMMyllFzC6v4JxlcWDhivVZC7L9o11wU6-3hFTF03fTjCiG41sVhybWmZsRwHM6dTkoQEQP36FhIXPFVKJu1JGz-p88bgt0UdPjKkdxGBgwrhtmeiWxSzmzlZAqAUx0DF5Bk9PWUK23eAhvPV9DqOiIUJPVE_755jXHBK6W8Toz46HmbOaS3_IsdHKqcopCYMpDcEkl_CVz_oI_qd3-4ZYR3F9Qtxl20VJVFi94eu0aC7UNjIhVw7LKR49KMAkh41umDoZDYWPTeWISsVD_eL2IyhoXsWkGzETvaCemwgokdKSHF6dvqwvHZv2mhqNJR23BQ9trFoh9VfHDgTNrYkJ7GQLMXyTqjvJcATszdAdTntvmVAZNWeDUCr_ZonWTNu1n5472Rd3vSRqFrV1sxkJah3SuA51nSeW6xVYs9dVf2Pgx36mItpQKKQnG1wZr-u0'; */

  const homeIconClickedDoThis = () => {
    //When creating final apk for JewelCart remove the navigation from any screen to itself by making this homeIconClickedDoThis()
    //function blank so that when user clicks on navigation to screen at which he or she is already present will do nothing.
    //For Temperary we are using navigation from homeScreen to it self to reload our app if our fonts are not loaded properly.
    navigation.replace('HomeScreen', {
      accessTokenKey: accessTokenKey,
    });
  };

  const orderIconClickedDoThis = () => {
    navigation.navigate('Order', {
      accessTokenSentToOrderScreen: accessTokenKey,
    });
  };

  const addOrderIconClickedDoThis = () => {
    navigation.navigate('AddOrderScreen', {
      accessTokenSentToAddOrderScreen: accessTokenKey,
    });
  };

  const customerIconClickedDoThis = () => {
    navigation.navigate('CustomerScreen', {
      accessTokenSentToCustomerScreen: accessTokenKey,
    });
  };

  const supplierIconClickedDoThis = () => {
    navigation.navigate('SupplierScreen', {
      accessTokenSentToSupplierScreen: accessTokenKey,
    });
  };

  const translateX = useSharedValue(0);

  





    const openingSideDrawerMenu = () => {
    ChildRef.current.openSideNavigationMethod() ||
      setthreeLineButtonClicked(ChildRef.current.bringGrayColor);
  }; 






  const gesture = Gesture.Pan().onUpdate((event) => {
    runOnJS(openingSideDrawerMenu)();
  });

  const ChildRef = useRef();

  const goToCategoryScreen = () => {
    navigation.navigate('Category', {
      accessTokenSentToCategoryScreen: accessTokenKey,
      previousScreenName: 'HomeScreen',
    });
    ChildRef.current.closeSideNavigationMethod();
  };

  const goToCaratScreen = () => {
    navigation.navigate('CaratScreen', {
      accessTokenSentToCaratScreen: accessTokenKey,
      previousScreenName: 'HomeScreen',
    });
    ChildRef.current.closeSideNavigationMethod();
  };

  const goToColorScreen = () => {
    navigation.navigate('ColorScreen', {
      accessTokenSentToColorScreen: accessTokenKey,
      previousScreenName: 'HomeScreen',
    });
    ChildRef.current.closeSideNavigationMethod();
  };

  const goToSettingsScreen = () => {
    Alert.alert('Clicked...');
    navigation.navigate('Settings', {
      accessTokenSentToColorScreen: accessTokenKey,
      previousScreenName: 'HomeScreen',
    });
    ChildRef.current.closeSideNavigationMethod();
  };

  const goToAddStaffScreen = () => {
    navigation.navigate('AddStaffScreen', {
      accessTokenSentToAddStaffScreen: accessTokenKey,
      previousScreenName: 'HomeScreen',
    });
    ChildRef.current.closeSideNavigationMethod();
  };

  const goToChangePasswordScreen = () => {
    navigation.navigate('ChangePassword');
    ChildRef.current.closeSideNavigationMethod();
  };

  const [selectedMenuItem, setSelectedMenuItem] = useState(0);
  const [threeLineButtonClicked, setthreeLineButtonClicked] = useState(false);

  const [hideFlatList,sethideFlatList] = useState(false);

  let [bellNotificationNumber, setBellNotificationNumber] = useState(0);

  const [logedInPersonName, setLogedInPersonName] = useState('');
  const [logedInPersonContact_No, setLogedInPersonContact_No] = useState('');
  const [callFetchDynamicAPIs, setcallFetchDynamicAPIs] = useState(true);

  let new_orderCount = 423;

  

  
  
  
  
  



    



      

                   

    
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const getLoggedInPersonData = () => {
    try {
      AsyncStorage.getItem('LoggedInPersonDataKey').then((value) => {
        if (value != null) {
          //navigation.navigate('HomeScreen');
          //setLoginModalVisible(false);
          //setLoaderModalVisible(true);
          let user = JSON.parse(value);

          //setMobile_no(user.MobileNumberForLogin);
          //setPasswordForLogin(user.PasswordForLoginKey);

          setLogedInPersonName(user.Name);
          setLogedInPersonContact_No(
            user.Contact_No_To_toShowInDrawerNavigation
          );

          //To just see the first modal where our loader is running
          //when we open our app once loged in previously
          //just comment this below login() function call.

          //login(user.MobileNumberForLogin, user.PasswordForLoginKey);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getDashBoardData = () => {
    try {
      AsyncStorage.getItem('dashBoardDataKey').then((value) => {
        if (value != null) {
          //navigation.navigate('HomeScreen');
          //setLoginModalVisible(false);
          //setLoaderModalVisible(true);
          let user = JSON.parse(value);

          setnew_orderKey(user.New_orderCount);
          setprocess_orderKey(user.Process_orderCount);
          setduein_thisweekKey(user.Duein_thisweekCount);
          setover_dueKey(user.Over_dueCount);
          settotal_orderKey(user.Total_orderCount);
          setduein_todayKey(user.Duein_todayCount);
          setcustomer_pendingKey(user.Customer_pendingCount);

          setcustomerKey(user.CustomerCount);
          setsupplierKey(user.SupplierCount);
          //setdue_dayKey(user.Due_dayCount);

          setinstance_idKey(user.Instance_idText);

          //alert(' Process_order key got by user.Process_orderKey getdashboardData function:'+user.Process_orderKey);

          //alert(' Process_order Count got:'+process_orderKey);
        }
      });

      //alert(' Process_orderKey got in Homescreen after getdashboardData function:'+process_orderKey);
    } catch (error) {
      console.log('Error while Fetching Dashboard Count is:',error);
      alert('Error while Fetching Dashboard Count is:'+error);
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.clear();
      /* This above clear() method will clear all the AsyncStorage data but if we want to delete particular key's data then we will do like this as shown below */
      //Alert.alert('Logout button clicked')
      //await AsyncStorage.removeItem('LoggedInPersonNameKey');
      navigation.navigate('LoginScreen');
    } catch (error) {
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

  let menuItemsOne_Two = [
    {
      title: 'Customer Pending Order',
      iconforMenu: require('../images/order.png'),
      numberCount: customer_pendingKey,
    },

    {
      title: 'New Order',
      iconforMenu: require('../images/order.png'),
      numberCount: new_orderKey,
    },

    {
      title: 'In Process',
      iconforMenu: require('../images/processP.png'),
      numberCount: process_orderKey,
    },

    {
      title: "Today's   Due Order",
      iconforMenu: require('../images/countP.png'),
      numberCount: duein_todayKey,
    },

    {
      title: 'Total     Order',
      iconforMenu: require('../images/listP.png'),
      numberCount: total_orderKey,
    },

    {
      title: 'Due In     This Week',
      iconforMenu: require('../images/due_in_weekP.png'),
      numberCount: duein_thisweekKey,
    },

    {
      title: 'Customer Count',
      iconforMenu: require('../images/order.png'),
      numberCount: customerKey,
    },

    {
      title: 'Supplier Count',
      iconforMenu: require('../images/listP.png'),
      numberCount: supplierKey,
    },

    {
      title: 'Over Due',
      iconforMenu: require('../images/timeP.png'),
      numberCount: over_dueKey,
    },
  ];

  const removingNowGrayColor = () => {
    setthreeLineButtonClicked(false);
    
    //alert("Removing Gray Color");
  };

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const bellIconPressedInHomeScreenDoThis = () => {
    alert('Bell icon button pressed From Home Screen...');
    //navigation.navigate('UploadImage');
  };

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
          style={{
           // marginTop: responsiveHeight(-5),      

            //When using this code for making apk just uncomment this above marginTop:responsiveHeight(-5)
            //because this marginTop: responsiveHeight(-5), is perfect for VSCode but not perfect for
            //expo snake
            //height: responsiveHeight(35),
            height: responsiveHeight(29),
            //marginBottom:responsiveHeight(-30),         
          }}/>    











         
                  
        

            {/* <AllUITogether show="ImageBackgroundWhichContainsChildren">  */}
              {/*Another Module for curve background Ends here: */}

              <GestureDetector gesture={gesture}>
                <Animated.View>
                  {/*View to hold our created Drawer Navigation Three line image button */}

                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: responsiveHeight(-27),
                      //marginTop: responsiveHeight(-31),        
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

                  
                  
                  {/* Another Module for JEWEL CART text starts here: */}
                  <View>
                    <AllUITogether
                      show={'TopLabelForPagesListedInBottomNavigation'}
                      topLabelForPagesListedInBottomNavProps={'JEWEL CART'}
                      marginLeftPropsForTopLabelForPagesInBottomNav={responsiveWidth(31)}
                    />
                  </View>
                  {/* Another Module for JEWEL CART text Ends here: */}

                  {/* Another Module for Bell icon starts here: */}
                  <View>
                    <AllUITogether
                      show={'TopSmallIcon'}
                      dothisWhenTopSmallIconPressedProps={
                        bellIconPressedInHomeScreenDoThis
                      }
                      bellNotificationNumberProps={bellNotificationNumber}
                      iconToDisplayPathProps={require('../images/bell.png')}
                      showBadgeAlsoprops={true}
                      widthOfTopSmallIconprops={25}
                      heightOfTopSmallIconprops={30}
                      //marginTopOfTopSmallIconprops={-4}
                      //marginLeftOfTopSmallIconprops={85}
                      marginTopOfTopSmallIconprops={responsiveHeight(-4)}
                            marginLeftOfTopSmallIconprops={responsiveWidth(85)}
                    />
                  </View>
                  {/* Another Module for Bell icon Ends here: */}
                </Animated.View>
              </GestureDetector>



              {/* Another Module for Welcome LoggedIn Person Name text starts here: */ }
              <View>
                      <Text
                        style={ {
                          fontSize: responsiveHeight(3.5),
                          fontFamily: "raleway-regular",
                          marginLeft: responsiveWidth(16),
                          marginTop: responsiveHeight(-20),         
                          color: "white",
                        } }
                      >
                        Welcome, { }
                        <Text
                          style={ {
                            fontSize: responsiveHeight(3.5),
                            fontFamily: "raleway-medium",
                            //marginLeft:responsiveWidth(10),
                            marginTop: responsiveHeight(3),
                            color: "white",
                          } }
                        >
                          { logedInPersonName }
                        </Text>
                      </Text>
                    </View>
                    {/* Another Module for Welcome LoggedIn Person Name text Ends here: */ }

             {/*  
             
             This is working but Side Drawer Navigation Menu is opening behind FlatList and not above Flatlist
             
             <ActualSideNavigationMenu
              ref={ ChildRef }
              removeGraycolorPropsLabel={ removingNowGrayColor }
              gotoCategoryScreenPropsLabel={ goToCategoryScreen }   
              //gotoSettingsScreenPropsLabel={ goToSettingsScreen }
              gotoChangePasswordScreenPropsLabel={ goToChangePasswordScreen }    
              
              removeAllAsyncStorageInformation={ removeData }
            />   */}

              {/* Another Module for FlatList starts here: */ }
                    
                    <FlatList
                      style={ { 
                        marginTop: responsiveHeight(-11.5),
                        marginLeft: responsiveWidth(5),
                        marginBottom:responsiveHeight(16),  
                        height:responsiveHeight(40),
                         } }   
                      numColumns={ 2 }
                      data={ menuItemsOne_Two }
                      showsVerticalScrollIndicator={ false }
                      renderItem={ ({ item, index }) =>
                      {
                        return (
                          
                          <TouchableOpacity
                            onPress={ () =>
                            {
                              
                              index==6?customerIconClickedDoThis()
                              :index==7?supplierIconClickedDoThis()
                              :orderIconClickedDoThis()
                            } }
                          >
                            <View
                              style={ {
                                width: responsiveWidth(40),
                                height: responsiveHeight(24),
                                //backgroundColor: '#fff',
                                borderRadius: responsiveWidth(9),
                                elevation: responsiveWidth(3),
                                //margin:responsiveHeight(1),     
                                marginRight:responsiveHeight(1.5),   
                                marginLeft:responsiveHeight(1.4),
                                marginBottom:responsiveHeight(1.8),                
                                //margin: 10,
                                backgroundColor: threeLineButtonClicked
                                  ? "#757575"
                                  : "#fff",
                              } }
                            >
                              <View
                                style={ {
                                  flex: 1,
                                  justifyContent: "center",
                                } }
                              >
                                <Text
                                  style={ {
                                    fontSize: responsiveHeight(2.9),
                                    fontFamily: "raleway-regular",
                                    textAlign: "center",
                                  } }
                                >
                                  { item.title }
                                </Text>

                                {/*View to display image inside card starts here  */ }

                                {/* Code to include icon & number count in one row starts here */ }

                                <View
                                  style={ {
                                    flexDirection: "row",
                                    //marginTop: responsiveHeight(0.9),
                                  } }
                                >
                                  {/* Code to include icon starts here */ }

                                  <View
                                    style={ {
                                      borderRadius: 10,
                                      //backgroundColor: '#E5E6E7',
                                      width: responsiveWidth(11.5),
                                      height: responsiveHeight(7.5),
                                      marginLeft: responsiveWidth(5),
                                      marginTop: responsiveHeight(2),
                                      backgroundColor: threeLineButtonClicked
                                        ? "#757575"
                                        : "#E5E6E7",
                                    } }
                                  >
                                    <View
                                      style={ {
                                        flex: 1,
                                        justifyContent: "center",
                                        alignSelf: "center",
                                      } }
                                    >
                                      <Image
                                        source={ item.iconforMenu }
                                        style={ {
                                          width: responsiveWidth(8.5),
                                          height: responsiveHeight(5.7),
                                        } }
                                      />
                                      {/*Image Tag ends here  */ }
                                    </View>

                                    {/*View to display image inside card ends here  */ }
                                  </View>

                                  {/* Code to include icon ends here */ }

                                  {/* Code to include number count starts here */ }
                                  <View
                                    style={ {
                                      //backgroundColor:'blue',
                                      marginLeft: responsiveWidth(2.5),
                                    } }
                                  >
                                    <View
                                      style={ {
                                        flex: 1,
                                        justifyContent: "center",
                                        alignSelf: "center",
                                      } }
                                    >
                                      <Text
                                        style={ {
                                          fontSize: responsiveHeight(4),
                                          marginLeft: responsiveWidth(4),
                                          //cccccccc
                                          fontFamily: "raleway-medium",
                                          textAlign: "center",
                                        } }
                                      >
                                        { item.numberCount }
                                      </Text>
                                    </View>
                                  </View>
                                  {/* Code to include number count ends here */ }
                                </View>

                                {/* Code to include icon and number count in one row ends here */ }

                                {/*View to hold text and image icon ends here   */ }
                              </View>

                              {/*Root View inside FlatList return() ends here  */ }
                            </View>
                          </TouchableOpacity>
                          
                        );
                      } }
                    />
                    
                    {/*Flat list inside the Root View for Cards ends here  */ }




              




                    {/*Rounded Bottom Tab Bar code starts here */ }
              {/* <GestureDetector gesture={ gesture }>
                 <View style={ {
                 marginTop: responsiveHeight(-20),         
                  //backgroundColor:'purple',     
                  marginBottom:responsiveHeight(6),    
                  //CCCCCCCCCCCCC
                } }> */}
                    <AllUITogether
                    show={ "CustomeRoundBottomNavBar" }
                    onPressOnHome={ homeIconClickedDoThis }
                    homeIconColorprops={ "#F1CB8C" }
                    homeTextColorProps={ "#F1CB8C" }
                    onPressOnOrder={ orderIconClickedDoThis }
                    //onPressOnOrder={getDashBoardData}
                    orderIconColorprops={ "#fff" }
                    orderTextColorProps={ "#fff" }
                    onPressOnAddOrder={ addOrderIconClickedDoThis }
                    onPressOnCustomer={ customerIconClickedDoThis }
                    customerIconColorprops={ "#fff" }
                    customerTextColorprops={ "#fff" }
                    onPressOnSupplier={ supplierIconClickedDoThis }
                    supplierIconColorprops={ "#fff" }
                    supplierTextColorprops={ "#fff" }
                  /> 


               
                  
                  
                  
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

                  { callFetchDynamicAPIs == true ? (
                    <FetchDynamicAPIs
                      urlToFetchProps={ "dashboard_count" }
                      mobileNumberForAuthentication={ "" }
                      passwordForAuthentication={ "" }
                      accessTokenForFetchingAPIProps={ accessTokenKey }
                      getData={ getDashBoardData }
                      screenNameProps={ 'HomeScreen' }
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
                  screenNameProps={'HomeScreen'}
                />
              ) : null} */}    

                









             {/* </AllUITogether> */}      
             


          </View>
          
        
            
      </GestureHandlerRootView>


        



    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    height: height+500,
    width: width,
    backgroundColor: 'purple',
  },

  scrollViewStyle: { 
    //height: responsiveHeight(71)     
    },
});
