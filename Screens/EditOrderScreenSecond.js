/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  View,
  Dimensions,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableHighlight,
  Animated,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Alert,
  ScrollView,
  StatusBar,
  SectionList,
  FlatList,
  ToastAndroid,
  BackHandler,
  Keyboard,
  KeyboardAvoidingView,
  ActivityIndicator,
  TextInput,
  Platform,
} from 'react-native';
import AllUITogether from '../components/AllUITogether';
import AnimatedTextInputFile from '../components/AnimatedTextInputFile';
import DatePicker from 'react-native-modern-datepicker';
import { getFormatedDate } from 'react-native-modern-datepicker';
//import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import { Card, Button, Icon } from '@rneui/themed';
import FetchDynamicAPIsTwo from '../components/FetchDynamicAPIsTwo';
import { useRoute } from '@react-navigation/native';
let { height, width } = Dimensions.get('window');

const orderForArray = [{ who: 'Client' }, { who: 'Stock' }];

const hallmarkYesNoArray = [{ type: 'Yes' }, { type: 'No' }];

const priorityArray = [
  { type: 'Normal' },
  { type: 'Medium' },
  { type: 'High' },
];

const EditOrderScreenSecond = ({navigation }) => {

  const route = useRoute();


   const {
     
    accessTokenSentToEditOrderSecond,
    orderIDSentToEditOrderSecond,
    itemImageSentToEditOrderSecond,
    colorIDSentToEditOrderSecond,
    colorNameSentToEditOrderSecond,
    //singleFileButArrayKey,
    carretIDSentToEditOrderSecond,
    carretNameSentToEditOrderSecond,
    itemNameSentToEditOrderSecond,
    qtySentToEditOrderSecond,
    sizeSentToEditOrderSecond,
    deliveryDateSentToEditOrderSecond,
    hallmarkSentToEditOrderSecond,     
    prioritySentToEditOrderSecond,
    narrationSentToEditOrderSecond,
    combineImagesFromGalleryAndCamera,
    
    customerIDSentToEditOrderSecond,
      supplierIDSentToEditOrderSecond,
      categoryIDSentToEditOrderSecond,
      orderDateSentToEditOrderSecond,
      orderForSentToEditOrderSecond,
      typeOfOrderSentToEditOrderSecond,
     //fullArrayOfImagesSentToEditOrderSecond,


  } = route.params; 



/* const formdata=new FormData();
formdata.append('image_file[]',{
  uri:route.params.fullArrayOfImagesSentToEditOrderSecond.uri,
  type:route.params.fullArrayOfImagesSentToEditOrderSecond.type,
  name:route.params.fullArrayOfImagesSentToEditOrderSecond.fileName,
}) */



let [bellNotificationNumber, setBellNotificationNumber] = useState(0);
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];


  const daysName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


/* First date picker useState and functions */
  /* Methods and useState Hooks for First Date picker for 'From' in Order Date Range starts here  */




  const today = new Date();
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false); // open close modal
  const [openStartDatePickerWithTextInput, setOpenStartDatePickerWithTextInput] = useState(false); // open close modal

  let dateEnteredOutOfRange = 'no';
  let [dateTypedByUser, setDateTypedByUser] = useState('');



  const startDate = getFormatedDate(
    today.setDate(today.getDate()), 'YYYY/MM/DD'

  );


let [selectedCaratIDInEditOrderScreenSecond, setselectedCaratIDInEditOrderScreenSecond] = useState(-1);
let [selectedColorIDInEditOrderScreenSecond, setselectedColorIDInEditOrderScreenSecond] = useState(-1);


  const inputRef = useRef();

  const [todaysDate, settodaysDate] = useState(today.getDate());
  const [currentMonthName, setcurrentMonthName] = useState(monthNames[new Date().getMonth()]);
  const [weekday, setweekday] = useState(daysName[new Date().getDay()]);



//Correct just uncomment it
//const [selectedDeliveryDate, setselectedDeliveryDate] = useState('');
  const [selectedDeliveryDate, setselectedDeliveryDate] = useState(deliveryDateSentToEditOrderSecond);

  const [startedDate, setStartedDate] = useState(startDate);

  let givenDate = '';




  const handleOnPressStartDate = () =>
  {
    setOpenStartDatePicker(!openStartDatePicker);
  };





  function handleChangeStartDate(propDate)
  {
    setStartedDate(propDate);
    //alert('handleChangeStartDate(propDate) function called:'+propDate);



  }



  const editDateIconPressedDoThis = () =>
  {
    setOpenStartDatePickerWithTextInput(true);
    setOpenStartDatePicker(!openStartDatePicker);
  }



  const calenderIconPressedDoThis = () =>
  {
    setOpenStartDatePickerWithTextInput(false);
    setOpenStartDatePicker(!openStartDatePicker);
  }



  const dateEnteredIsOk = () =>
  {

    //alert('Keyboard dismissed and showing alert at once')
    setselectedDeliveryDate(dateTypedByUser),
      setOpenStartDatePickerWithTextInput(!openStartDatePickerWithTextInput)

  }



  /* Methods and useState Hooks for First Date picker for 'From' in Order Date Range ends here  */
   

  
  
  
  
  
  
  
  
  /* const today = new Date();
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false); //open close modal
  const startDate = getFormatedDate(
    today.setDate(today.getDate()),
    'YYYY/MM/DD'
  );

  const [startedDate, setStartedDate] = useState('12/12/2023');
  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  } */

  const [
    callFetchDynamicAPIsInEditOrderScreenSecondToUpdate,
    setcallFetchDynamicAPIsInEditOrderScreenSecondToUpdate,
  ] = useState(false);
  //const [selectedStartDate, setSelectedStartDate] = useState('Select Date');
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [completePackageOfImagesReceivedFromEditOrder, setcompletePackageOfImagesReceivedFromEditOrder] = useState([]);
  const [itemName, setItemName] = useState(itemNameSentToEditOrderSecond);

  const [dataForSelectPriority, setDataForSelectPriority] =
    useState(priorityArray);
  const [selectedPriority, setSelectedPriority] = useState(prioritySentToEditOrderSecond);
  //const [quantity, setQuantity] = useState(0);
  
  
  
  
  


  const [quantity, setQuantity] = useState(qtySentToEditOrderSecond?.toString());



  const [size, setSize] = useState(sizeSentToEditOrderSecond);
  const [narration, setNarration] = useState(narrationSentToEditOrderSecond);

  const [dataForHallmark, setDataForHallmark] = useState(hallmarkYesNoArray);
  const [selectedHallmark, setselectedHallmark] = useState(hallmarkSentToEditOrderSecond);

  const [selectedCaratListFromList, setselectedCaratListFromList] =
    useState(carretNameSentToEditOrderSecond);  
  const [isLoading, setIsLoading] = useState(false);
  const [selectedColorFromList, setselectedColorFromList] = useState(colorNameSentToEditOrderSecond);

  

  useEffect(() => {    



   /* alert(
    'Access Token is:'+accessTokenSentToEditOrderSecond+'\n'+
     '1.ORDER ID received from First Edit Order screen is: '+orderIDSentToEditOrderSecond+'\n'+
     '2.customerID is: '+customerIDSentToEditOrderSecond+'\n'+
      '3.supplierID is:'+supplierIDSentToEditOrderSecond+'\n'+
      '4.categoryid is:'+categoryIDSentToEditOrderSecond+'\n'+
      '5.color is:'+colorIDSentToEditOrderSecond+'\n'+
      '6.carret is:'+carretNameSentToEditOrderSecond+'\n'+
      '7.Quantity is:'+qtySentToEditOrderSecond+'\n'+    
      '8.combine images length is:'+combineImagesFromGalleryAndCamera.length+'\n'+
      '9. Item Image length is:'+itemImageSentToEditOrderSecond.length
      
      );  */  


   // getDataFromAsyncStorageForEditOrderScreenSecond();
   
   
   
   
   
   // setcompletePackageOfImagesReceivedFromEditOrder(fullArrayOfImagesSentToEditOrderSecond)
    //console.log('The length of Image Received from Edit Order screen is:',+fullArrayOfImagesSentToEditOrderSecond.length)     
    //console.log('The length of Image Received from Edit Order screen is:',+fullArrayOfImagesSentToEditOrderSecond.uri);
    //alert('The length of Image Received from Edit Order screen is:',+fullArrayOfImagesSentToEditOrderSecond.length)    
//console.log('The Image Details which are Received from Edit Order screen is:',+fullArrayOfImagesSentToEditOrderSecond)
   /*  setItemName(itemNameSentToEditOrderSecond);
    
    setQuantity(qtySentToEditOrderSecond?.toString());   
   
    
    
    setSize(sizeSentToEditOrderSecond);
    
    
    setSelectedPriority(route.params.prioritySentToEditOrderSecond);
    setNarration(route.params.narrationSentToEditOrderSecond); */
    //alert('Quantity:'+qtySentToEditOrderSecond);   
  }, []);

  const getDataFromAsyncStorageForEditOrderScreenSecond = () =>
  {
    try
    {
      AsyncStorage.getItem('EditOrderDataForSecondPageDataAndPlatinumPage')
        .then(value =>
        {
          if (value != null)
          {
            let user = JSON.parse(value);
            /* 

            sanitizer,
            
            setWebsite(user.Website);
            setContactPersonName(user.Contact_Person_Name);
            setContactPersonNo(user.Contact_Person_No);
            setAddress(user.Address);
            setState(user.State);
            setCity(user.City);
            setPincode(user.Pincode); 
            */
            setItemName(user.ItemName);
    
            setQuantity(user.Qty);   

            
            
            setSize(user.Size);
            
            
            setSelectedPriority(user.Priority);
            setNarration(user.Narration);
            setselectedDeliveryDate(user.DeliveryDate);

          }
        })
    } catch (error)
    {
      console.log(error);
    }

    //alert('Item Name Got from Async Storage is:'+itemName);
  }

  const goBackBtnPressed = () => {




    /* alert('1. Carret ID being sent back to Edit Order First is:'+carretIDSentToEditOrderSecond+'\n'+
          '2. Carret Name being sent back to Edit Order First is:'+carretNameSentToEditOrderSecond  
          
          ); */    
    
      


    navigation.navigate('EditOrderScreen', {
      accessTokenSentToEditOrder:accessTokenSentToEditOrderSecond,
      itemImage:itemImageSentToEditOrderSecond,
      orderIDSentToEditOrder:orderIDSentToEditOrderSecond,
    
    colorIDSentToEditOrder:selectedColorIDInEditOrderScreenSecond,
    colorNameSentToEditOrder:selectedColorFromList,
      
    carretIDSentToEditOrder:selectedCaratIDInEditOrderScreenSecond,
    carretNameSentToEditOrder:selectedCaratListFromList,

    //singleFileButArrayKey:singleFileButArray,
    itemNameReceivedFromOrderScreen:itemName,
    qtyReceivedFromOrderScreen:quantity,
    sizeReceivedFromOrderScreen:size,
    deliveryDateReceivedFromOrderScreen:selectedDeliveryDate,
    hallmarkReceivedFromOrderScreen:selectedHallmark,     
    priorityReceivedFromOrderScreen:selectedPriority,
    narrationReceivedFromOrderScreen:narration,
    }); 
  };



   const gotoOrderScreen = () => {
   navigation.navigate("Order", {
      accessTokenSentToOrderScreen: accessTokenSentToEditOrderSecond,
    });

    //alert('Going back');
  };

  const updateBtnPressed = () => {
    //navigation.navigate('EditOrderScreenSecond');
    //alert('The image size is:'+fullArrayOfImagesSentToEditOrderSecond.length);
    //console.log('Image Details:'+fullArrayOfImagesSentToEditOrderSecond);      
    
    //This below setcallFetchDynamicAPIsInEditOrderScreenSecondToUpdate(true); is correct. 
    //setcallFetchDynamicAPIsInEditOrderScreenSecondToUpdate(true);
    uploadImageAndStringForEditOrder();
    //gotoOrderScreen();
};//updateBtnPressed function ends here

const uploadImageAndStringForEditOrder = async () => {


    /* alert(
      '1. color_id number which is appending is:'+selectedColorIDInEditOrderScreenSecond+'\n'+
      '2. carret_id number which is appending is:'+selectedCaratIDInEditOrderScreenSecond+'\n'+
      '3. order_id number which is appending is:'+orderIDSentToEditOrderSecond+'\n'+
      '4. Access Token is:'+accessTokenSentToEditOrderSecond)  */      





    //alert('delivery_date'+selectedDeliveryDate);   
   setIsLoading(true);
    //gotoOrderScreen();    
//alert('Order ID is:'+orderIDToEdit);
    
    
    // Check if any file is selected or not
    
     // alert('Single file is not null');
     
      const data = new FormData();

      for (let i = 0; i < combineImagesFromGalleryAndCamera.length; i++) {
       /*  alert(
          'For Image number from combineImagesFromGalleryAndCamera:' +
            i +
            '\n' +
            'File uri is:' +
            combineImagesFromGalleryAndCamera[i].path +
            '\n' +
            'File Name is:' +
            combineImagesFromGalleryAndCamera[i].path +
            '\n' +
            'File mimeType is:' +
            combineImagesFromGalleryAndCamera[i].type,
        ); */
        data.append(
          'image_file[]',
  
          {
            uri: combineImagesFromGalleryAndCamera[i].path,
            type: combineImagesFromGalleryAndCamera[i].type,
            name: combineImagesFromGalleryAndCamera[i].path,
          },
        );
      }













      for (let i = 0; i < itemImageSentToEditOrderSecond.length; i++) {
        /* alert(
          'For Image number from itemImageSentToEditOrderSecond:' +
            i +
            '\n' +
            'File uri is:' +
            itemImageSentToEditOrderSecond[i].path +
            '\n' +
            'File Name is:' +
            itemImageSentToEditOrderSecond[i].path +
            '\n' +
            'File mimeType is:' +
            itemImageSentToEditOrderSecond[i].type,
        ); */
        data.append(
          'image_file[]',
  
          {
            uri: itemImageSentToEditOrderSecond[i].path,
            type: itemImageSentToEditOrderSecond[i].type,
            name: itemImageSentToEditOrderSecond[i].path,
          },
        );
      }



      
       /* for(i=0;i<combineImagesFromGalleryAndCamera.length;i++){
         


      data.append('image_file[]',

        {
        uri: combineImagesFromGalleryAndCamera[i].uri,
        name: combineImagesFromGalleryAndCamera[i].name,
        type: combineImagesFromGalleryAndCamera[i].mimeType,
      }    
       );     
      }  */


     
      
      //data.append('order_id','35');
      data.append('order_id',orderIDSentToEditOrderSecond);   
        data.append('customer_id',customerIDSentToEditOrderSecond); 
      data.append('supplier_id',supplierIDSentToEditOrderSecond);
       data.append('category_id',categoryIDSentToEditOrderSecond);
        data.append('order_date',orderDateSentToEditOrderSecond);
        data.append('order_for',orderForSentToEditOrderSecond);    
      data.append('order_type',typeOfOrderSentToEditOrderSecond);
      data.append('item',itemName);
      data.append('carret_id',selectedCaratIDInEditOrderScreenSecond);
      data.append('color_id',selectedColorIDInEditOrderScreenSecond);
      data.append('qty',quantity);
      data.append('size',size);
      data.append('narration',narration);
      data.append('delivery_date',selectedDeliveryDate);
      
      data.append('hallmark',selectedHallmark);
      data.append('priority',selectedPriority);    
      
     
     
            
      

      //if(callEditOrderAPIToUploadImage=='NOW'){
      try {
        let res = await fetch('https://rajeshwersoftsolution.com/jwelcart/api/edit_order', {
          method: 'post',
          body: data,
          headers: {
             Authorization: 'Bearer ' +accessTokenSentToEditOrderSecond,
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          timeout: 15000,
        });

        let result = await res.json();
        console.log('result', result);
        //alert('JSON Info after Uploading Image:'+JSON.stringify(result));   
        //alert('Info after Uploading Image:'+result.message); 
        setIsLoading(false);
        gotoOrderScreen();
        
      } catch (error) {
        
        console.log('error upload', error);
        /* ToastAndroid.showWithGravity(
          'Error upload',JSON.stringify(error),
          ToastAndroid.LONG,
          ToastAndroid.CENTER
        ); */
        setIsLoading(false);
        gotoOrderScreen();
      }

      //gotoOrderScreen();
         
    
    
  };












  const gotoFirstEditOrderScreen = () => {
    navigation.navigate('EditOrderScreen', {
      accessTokenSentToEditOrder:accessTokenSentToEditOrderSecond,
      itemImage: itemImageSentToEditOrderSecond,
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
           marginTop: responsiveHeight(-1),      

            //When using this code for making apk just uncomment this above marginTop:responsiveHeight(-5)
            //because this marginTop: responsiveHeight(-5), is perfect for VSCode but not perfect for
            //expo snake
            height: responsiveHeight(35),

            //marginBottom:responsiveHeight(-30),         
          } }/>





      { isLoading == true ? (
                  <ActivityIndicator size="large" color="#013F66" style={ { marginTop: responsiveHeight(40) } } />    
                ) : (
                  <>
      {/*View which will hold back arrow image and EDIT ORDER text starts here  */}
      <View
        style={{
          marginTop: responsiveHeight(-32),  
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
              //dothisProps={gotoFirstEditOrderScreen}
              dothisProps={goBackBtnPressed}
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
            dothisProps={goBackBtnPressed}
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
              topPageName={'EDIT ORDER'}
              marginLeftPropsForCenterTopTextForPageName={-7}
              marginTopPropsForCenterTopTextForPageName={0}
            />
          </View>
        </View>
      </View>

      {/*View which will hold back arrow image and EDIT ORDER text ends here*/}

      <ScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        bounces={false}>
        {/* <View
                style={ {
                  //backgroundColor: 'cyan',
                  flex: 1,
                  //height: height-responsiveHeight(10),
                  height: height,   

                     We have to give minus responsiveHeight(10) inside 'height: height-responsiveHeight(10),' as shown above so that when we open our keyboard to type inside any TextInput and if we move Scroll our Card up and down then the card do not show too much space below while scrolling full card.  
                  
                  
                  Since Our Card size will be equal to our mobile device, so we can give our Card 
                   size to be height:height, and if we give our Card size height:height then we will not see gray colour horizontal 
                   borader below our Card, so since we are not seeing any horizontal boarder below our Card or ScrollView then we have do not have to use this View 
                   inside our Parent ScrollView so that our Parent ScrollView can occupy height which is equal to our device height, . But if we had not kept our Card height equal to our device height like this height:height then we have to uncomment this View 
                    
                } }>  */}

        <Card
          containerStyle={{
            //height:responsiveHeight(90),
            height: height,
            width: responsiveWidth(91),
            borderRadius: responsiveWidth(6),
            elevation: responsiveWidth(1),
            marginTop: responsiveHeight(3),
            //marginBottom:responsiveHeight(40),
            //marginLeft: responsiveWidth(7.5),
          }}>
          <ScrollView
            keyboardShouldPersistTaps="always"
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
            bounces={false}>
            {/*Our UI in Card starts here  */}
            {/* TextInput for Item Name starts here */}
            <View style={{ marginLeft: responsiveWidth(1) }}>
              <AllUITogether
                show={'noAnimatedTextInput'}
                noAnimatedTextInputmarginTop={responsiveHeight(0.9)}
                noAnimatedTextInputheight={responsiveHeight(7)}
                noAnimatedTextInputwidth={responsiveWidth(80)}
                noAnimatedTextInputborderColor={'#8e8e8e'}
                noAnimatedTextInputborderWidth={responsiveWidth(0.2)}
                noAnimatedTextInputborderRadius={responsiveHeight(30)}
                noAnimatedTextInputcolor={'#5A5A5A'}
                noAnimatedTextInputfontSize={responsiveFontSize(1.8)}
                noAnimatedTextInputfontFamily={'raleway-medium'}
                noAnimatedTextInputpadding={responsiveWidth(3)}
                noAnimatedTextInputTopLabel={'Item Name'}
                noAnimatedTextInputplaceholderprops={'Test'}
                noAnimatedTextInputValueprops={itemName}
                noAnimatedTextInputsetterMethod={setItemName}
                textAlignVerticalprops={'center'}
                multilineTrueorFalseProps={false}
                numberOfLinesForLargeTextInput={1}
              />

              {/* TextInput for Item Name ends here */}

              {/* Code to include Select Carat text & its drop down and Weight text and its DDL in one row starts here */}

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: responsiveHeight(0.9),
                }}>
                {/* Code to include Select Carat text & its drop down starts here */}

                <View>
                  <Text style={styles.dropDownTopSideLabels}>Select Carat</Text>

                  <AnimatedTextInputFile
                    show={'AnimatedTextInputDDL'}
                    ddlWidth={responsiveWidth(38.5)}
                    heightOfDDLprops={responsiveHeight(7)} 
                        marginTopPropsForDDL={responsiveHeight(1)}    
                        widthForTextInDDLprops={responsiveWidth(81)}
                    ddlTextmarginLeft={responsiveWidth(-13)}
                    ddlDownArrowIconmarginLeft={responsiveWidth(-24)}
                    ddlInsideTextFontSize={responsiveFontSize(2)}
                    //marginVerticalPropsForDDL={0.9}
                    //marginTopPropsForDDL={1}
                    ddlInsideTextFontName={'raleway-light'}
                    dropdownIconProps={require('../images/dropdowncurved.png')}
                      //heightOfDDLprops={7}
                    ddlBoarderColor={'#8e8e8e'}
                    ddlboarderThickness={0.5}
                    ddlInsideTextFontColor={'#2D2D2D'}
                    itemIconPropslabel={''}
                    largeDropDownListOnPressCallThisAPI={'carat_list'}
                    actionprops={'search'}
                    selectSetter={'ForCaratList'}
                    modalToplabelProps={'Select Carat'}
                    accessTokenprops={accessTokenSentToEditOrderSecond}
                    startprops={'0'}
                    limitprops={'100000'}
                    state_idprops={''}
                    city_idprops={''}
                    search_allprops={''}
                    sortby_nameprops={'desc'}
                    mobile_noprops={''}
                    passwordprops={''}
                    setselectedCaratListFromListProps={
                      setselectedCaratListFromList
                    }
                    selectedCaratListFromListProps={selectedCaratListFromList}


                    setselectedCaratIDFromListProps={setselectedCaratIDInEditOrderScreenSecond}
                        selectedCaratIDFromListProps={selectedCaratIDInEditOrderScreenSecond}


                        
                  />
                </View>

                {/* Code to include Select Carat text & its drop down ends here */}

                {/* Code to include Weight text and its EditText starts here */}
                <View
                  style={{
                    //backgroundColor:'blue',
                    marginLeft: responsiveWidth(2.5),
                  }}>
                  <View>
                    <Text style={styles.dropDownTopSideLabels}>
                      Select Color
                    </Text>

                    <AnimatedTextInputFile
                      show={'AnimatedTextInputDDL'}
                      ddlWidth={responsiveWidth(38.5)}
                      heightOfDDLprops={responsiveHeight(7)} 
                        marginTopPropsForDDL={responsiveHeight(1)}    
                        widthForTextInDDLprops={responsiveWidth(81)}
                      ddlTextmarginLeft={responsiveWidth(-13)}
                      ddlDownArrowIconmarginLeft={responsiveWidth(-24)}
                      ddlInsideTextFontSize={responsiveFontSize(2)}
                      //marginVerticalPropsForDDL={0.9}
                      //marginTopPropsForDDL={1}
                      ddlInsideTextFontName={'raleway-light'}
                      ddlBoarderColor={'#8e8e8e'}
                      ddlboarderThickness={0.5}
                      dropdownIconProps={require('../images/dropdowncurved.png')}
                      //heightOfDDLprops={7}
                      ddlInsideTextFontColor={'#2D2D2D'}
                      itemIconPropslabel={''}
                      largeDropDownListOnPressCallThisAPI={'color_list'}
                      actionprops={'search'}
                      selectSetter={'ForColorList'}
                      modalToplabelProps={'Select Color'}
                      accessTokenprops={accessTokenSentToEditOrderSecond}
                      startprops={'0'}
                      limitprops={'100000'}
                      state_idprops={''}
                      city_idprops={''}
                      search_allprops={''}
                      sortby_nameprops={'desc'}
                      mobile_noprops={''}
                      passwordprops={''}
                      setselectedColorFromListProps={setselectedColorFromList}
                      selectedColorFromListProps={selectedColorFromList}

                      setselectedColorIDFromListProps={setselectedColorIDInEditOrderScreenSecond}
                        selectedColorIDFromListProps={selectedColorIDInEditOrderScreenSecond}
                    />
                  </View>
                </View>
                {/* Code to include Weight text and its EditText ends here */}
              </View>

              {/* Code to include Select Carat text & its drop down and Weight text and its EditText in one row ends here */}

              {/* Code to include Quantity text & its EditText and Size text and its EditText in one row starts here */}

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: responsiveHeight(0.9),
                }}>
                {/* Code to include Quantity text & its EditText starts here */}
                <View>
                   <AllUITogether
                    show={'noAnimatedTextInput'}
                    noAnimatedTextInputmarginTop={responsiveHeight(0.9)}
                    noAnimatedTextInputheight={responsiveHeight(7)}
                    noAnimatedTextInputwidth={responsiveWidth(38.5)}
                    noAnimatedTextInputborderColor={'#8e8e8e'}
                    noAnimatedTextInputborderWidth={responsiveWidth(0.2)}
                    noAnimatedTextInputborderRadius={responsiveHeight(30)}
                    noAnimatedTextInputcolor={'#5A5A5A'}
                    noAnimatedTextInputfontSize={responsiveFontSize(1.8)}
                    noAnimatedTextInputfontFamily={'raleway-medium'}
                    noAnimatedTextInputpadding={responsiveWidth(3)}
                    noAnimatedTextInputTopLabel={'Quantity'}
                    noAnimatedTextInputplaceholderprops={'121'}    
                    noAnimatedTextInputValueprops={quantity}
                    noAnimatedTextInputsetterMethod={setQuantity}
                    textAlignVerticalprops={'center'}
                    multilineTrueorFalseProps={false}
                    numberOfLinesForLargeTextInput={1}
                  />

                  
                </View>
                {/* Code to include Select Carat text & its drop down ends here */}

                {/* Code to include Size text and its EditText starts here */}
                <View
                  style={{
                    //backgroundColor:'blue',
                    marginLeft: responsiveWidth(2.5),
                  }}>
                  <AllUITogether
                    show={'noAnimatedTextInput'}
                    noAnimatedTextInputmarginTop={responsiveHeight(0.9)}
                    noAnimatedTextInputheight={responsiveHeight(7)}
                    noAnimatedTextInputwidth={responsiveWidth(38.5)}
                    noAnimatedTextInputborderColor={'#8e8e8e'}
                    noAnimatedTextInputborderWidth={responsiveWidth(0.2)}
                    noAnimatedTextInputborderRadius={responsiveHeight(30)}
                    noAnimatedTextInputcolor={'#5A5A5A'}
                    noAnimatedTextInputfontSize={responsiveFontSize(1.8)}
                    noAnimatedTextInputfontFamily={'raleway-medium'}
                    noAnimatedTextInputpadding={responsiveWidth(3)}
                    noAnimatedTextInputTopLabel={'Size'}
                    noAnimatedTextInputplaceholderprops={'12'}
                    noAnimatedTextInputValueprops={size}
                    noAnimatedTextInputsetterMethod={setSize}
                    textAlignVerticalprops={'center'}
                    multilineTrueorFalseProps={false}
                    numberOfLinesForLargeTextInput={1}
                  />
                </View>
                {/* Code to include Weight text and its EditText ends here */}
              </View>

              {/* Code to include Quantity text & its EditText and Size text and its EditText in one row ends here */}

              {/* Code to include Select Delivery Date and Hallmark and its DDL in one row starts here */}

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: responsiveHeight(0.9),
                }}>
                {/* Code to include Select Delivery Date starts here */}

               

                {/* One Date picker for  Delivery Date in EditOrderScreenSecond starts here */}
                  
                  <View>
                   <Text style={ styles.dropDownTopSideLabels }>
                         Select Delivery{'\n'}Date   
                      </Text>


                  <TouchableOpacity
                    style={ styles.inputBtn }
                    onPress={ handleOnPressStartDate }>
                    <Text style={ styles.datePickerTouchableOpacityTextStyle }>
                      { selectedDeliveryDate }

                    </Text>
                  </TouchableOpacity>





                  {/*Modal for first date with Calender starts here */ }
                  <Modal
                    animationType="slide"
                    transparent={ true }
                    visible={ openStartDatePicker }>
                    <View style={ styles.centeredViewForDatePickerModal }>


                      <View style={ styles.datePickerUpperHeaderSection }>

                        <Text

                          style={ styles.datePickerUpperHeaderSectionLabelText }>SELECT DATE</Text>


                        <Text style={ styles.datePickerUpperHeaderSectionDateText }>{ weekday },{ currentMonthName } { todaysDate }</Text>


                         <AllUITogether
                  show={'TopSmallIcon'}
                  dothisWhenTopSmallIconPressedProps={
                    editDateIconPressedDoThis
                  }
                  bellNotificationNumberProps={bellNotificationNumber}
                  iconToDisplayPathProps={require('../images/editIcon.png')}
                  showBadgeAlsoprops={false}
                  widthOfTopSmallIconprops={22}
                  heightOfTopSmallIconprops={22}
                  //marginTopOfTopSmallIconprops={-4.5}
                  //marginLeftOfTopSmallIconprops={79}
                  marginTopOfTopSmallIconprops={responsiveHeight(-4.5)}
                            marginLeftOfTopSmallIconprops={responsiveWidth(79)}
                /> 


                      </View>


                      <View style={ styles.modalViewForDatePicker }>




                        <DatePicker
                          mode="calendar"
                          minimumDate={ startDate }
                          //maximumDate={ startDate }  
                          selected={ startedDate }
                          onDateChanged={ handleChangeStartDate }
                          onSelectedChange={ (date) =>
                          {
                            setselectedDeliveryDate(date);

                            settodaysDate(new Date(selectedDeliveryDate).getDate());
                            /* 
                            The value stored inside selectedDeliveryDate variable is in form of simple string. To get Date from that string we will first have to convert the selectedDeliveryDate variable value from string to Date form, so we will put our selectedDeliveryDate variable inside new Date() which will convert our selectedDeliveryDate from String to Date and after converting it to Date we can use .getDate() method which will get Date from the selectedDeliveryDate variable.
                             */
                            setcurrentMonthName(monthNames[new Date(selectedDeliveryDate).getMonth()]);
                            setweekday(daysName[new Date(selectedDeliveryDate).getDay()]);

                          }
                          }
                          options={ styles.datePickerOptionsStyle }
                        />










                      </View>






                    </View>



                    <View style={ { flexDirection: 'row', backgroundColor: 'purple' } }>


                      <TouchableOpacity onPress={ () =>
                      {

                        setOpenStartDatePicker(!openStartDatePicker);


                      } }>
                        <Text style={ styles.datePickerModalCancelAndOKBtnStyle }>CANCEL</Text>
                      </TouchableOpacity>




                      <TouchableOpacity onPress={ handleOnPressStartDate }>
                        <Text style={ [styles.datePickerModalCancelAndOKBtnStyle, { marginLeft: responsiveWidth(10) }] }>OK</Text>
                      </TouchableOpacity>

                    </View>
                  </Modal>
                  {/*Modal for first date with Calender ends here */ }


















                  {/*Modal for first date with TextInput starts here */ }
                  <Modal
                    animationType="fade"
                    transparent={ true }
                    onShow={ () => inputRef.current.focus() }
                    visible={ openStartDatePickerWithTextInput }>



                    <View style={ styles.centeredViewForDatePickerModal }>


                      <ScrollView
                        keyboardShouldPersistTaps="always"
                      >
                        <View style={ [styles.datePickerUpperHeaderSection, { marginTop: responsiveHeight(5) }] }>

                          <Text

                            style={ styles.datePickerUpperHeaderSectionLabelText }>SELECT DATE</Text>
                          <Text style={ styles.datePickerUpperHeaderSectionDateText }>{ weekday },{ currentMonthName } { todaysDate }</Text>



                          <AllUITogether
                            show={ 'TopSmallIcon' }
                            dothisWhenTopSmallIconPressedProps={
                              calenderIconPressedDoThis
                            }
                            bellNotificationNumberProps={ bellNotificationNumber }
                            iconToDisplayPathProps={ require('../images/calendar.png') }
                            showBadgeAlsoprops={ false }
                            widthOfTopSmallIconprops={ 30 }
                            heightOfTopSmallIconprops={ 30 }
                           // marginTopOfTopSmallIconprops={ -5 }
                           // marginLeftOfTopSmallIconprops={ 79 }
                           marginTopOfTopSmallIconprops={responsiveHeight(-5)}
                            marginLeftOfTopSmallIconprops={responsiveWidth(79)}
                          />


                        </View>


                        <View style={ [styles.modalViewForDatePicker, { height: responsiveHeight(27) }] }>













                          <Text style={ styles.enterDateTextStyle }>Enter Date</Text>







                          <ScrollView keyboardShouldPersistTaps='always'>
                            <TextInput

                              ref={ inputRef }
                              // onLayout={()=> inputRef.current.focus()}
                              style={ {
                                marginTop: responsiveHeight(-1),
                                height: 50,
                                width: responsiveWidth(80),


                                color: '#5A5A5A',

                                fontSize: responsiveFontSize(1.8),
                                fontFamily: 'raleway-medium',
                                padding: responsiveWidth(3),
                              } }

                              placeholder='YYYY/MM/DD'
                              placeholderTextColor="#BBBBBB"

                              underlineColorAndroid={ "#2196F3" }
                              selectionColor="#2196F3"
                              onChangeText={ (dateEnteredByUser) =>
                                setDateTypedByUser(dateEnteredByUser)
                              }
                              value={ dateTypedByUser }
                            />












                            














                            <View style={ { flexDirection: 'row' } }>


                              <TouchableOpacity onPress={ () =>
                              {

                                dateEnteredOutOfRange == 'yes' ? null :
                                  setOpenStartDatePickerWithTextInput(!openStartDatePickerWithTextInput);


                              } }>
                                <Text style={ [
                                  styles.datePickerModalCancelAndOKBtnStyle,
                                  {
                                    marginTop:dateEnteredOutOfRange == 'yes' ? responsiveHeight(3.5) : responsiveHeight(6.5),
                                    marginLeft: responsiveWidth(42)
                                  }
                                ] }>
                                  CANCEL
                                </Text>
                              </TouchableOpacity>




                              <TouchableOpacity onPress={ () =>
                              {
                                dateEnteredOutOfRange == 'yes' ? null : (dateEnteredIsOk())

                              } }>
                                <Text style={ [
                                  styles.datePickerModalCancelAndOKBtnStyle,
                                  {
                                    marginTop: dateEnteredOutOfRange == 'yes' ? responsiveHeight(3.5) : responsiveHeight(6.5),
                                    marginLeft: responsiveWidth(10)
                                  }]
                                }>
                                  OK
                                </Text>
                              </TouchableOpacity>

                            </View>





                          </ScrollView>



                        </View>
                      </ScrollView>






                    </View>




                  </Modal>
                  {/*Modal for first date with TextInput ends here*/}
                  </View>
                  


                  {/* One Date picker for  Delivery Date in EditOrderScreenSecond ends here */ }

               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
                {/* Code to include Select Carat text & its drop down ends here */}

                {/* Code to include Hallmark and its DDL starts here */}
                <View
                  style={{
                    //backgroundColor:'blue',
                    marginLeft: responsiveWidth(2.5),
                  }}>
                   <Text style={ styles.dropDownTopSideLabels }>
                      {'\n'}Hallmark
                      </Text>
                  <AllUITogether
                    show={'ddLforlocalData'}
                    fetchLocalDataDDLDownArrowMarginLeft={responsiveWidth(-18)}
                    fetchLocalDataDDLWidth={responsiveWidth(38.5)}
                    fetchLocalDataDDLTextmarginLeft={responsiveWidth(-8)}
                    //largeDropDownListTopLabel={'\n' + 'Hallmark'}
                    itemIconPropslabel={null}
                    itemNamePropslabel={'Normal'}
                    fontForDDLTextInsideModal={'raleway-medium'}
                    fontForDDLInsideText={'raleway-light'}
                    dataForFlatListprops={dataForHallmark}
                    setterMethodInDropDownTextArea={setselectedHallmark}
                    valueForDropDownToShowInText={selectedHallmark}
                    marginbetweenTopLabelandTouchableOpactiy={responsiveHeight(0.9)}
                    largeDropDownModalMarginTopProps={responsiveHeight(60.9)}
                    largeDropDownModalMarginLeftProps={responsiveWidth(50)}
                    largeDropDownModalHeightProps={responsiveHeight(15)}
                    largeDropDownModalWidthProps={responsiveWidth(46)}
                    borderRadiusPropsForDDLModal={responsiveHeight(0)}
                  />
                </View>
                {/* Code to include Hallmark and its DDL ends here */}
              </View>

              {/* Code to include Select Delivery data and Hallmark and its DDL in one row ends here */}

              {/* Code to include Select Priority text and its drop down starts here */}

              {/* <Text style={styles.dropDownTopSideLabels}>Select Priority</Text> */}

              <TouchableOpacity
                onPress={() => {
                  alert('Select Priority');
                }}>
                <View>
                <Text style={ styles.dropDownTopSideLabels }>
                      Select Priority
                      </Text>
                  <AllUITogether
                    show={'ddLforlocalData'}
                    fetchLocalDataDDLDownArrowMarginLeft={responsiveWidth(22)}
                    fetchLocalDataDDLWidth={responsiveWidth(81)}
                    fetchLocalDataDDLTextmarginLeft={responsiveWidth(-9)}
                    largeDropDownListTopLabel={'Select Priority'}
                    itemIconPropslabel={null}
                    itemNamePropslabel={'Normal'}
                    fontForDDLTextInsideModal={'raleway-medium'}
                    fontForDDLInsideText={'raleway-light'}
                    dataForFlatListprops={dataForSelectPriority}
                    setterMethodInDropDownTextArea={setSelectedPriority}
                    valueForDropDownToShowInText={selectedPriority}
                    //Next time when we use this Reusable component, give all the
                    //required numberic parameter in props using
                    //responssiveHeight and responsiveWidth.
                    marginbetweenTopLabelandTouchableOpactiy={responsiveHeight(0.9)}
                    largeDropDownModalMarginTopProps={560}
                    largeDropDownModalMarginLeftProps={18}
                    largeDropDownModalHeightProps={150}
                    largeDropDownModalWidthProps={324}
                    borderRadiusPropsForDDLModal={responsiveHeight(0)}
                  />
                </View>
              </TouchableOpacity>

              {/* Code to include Select Priority text and its drop down ends here */}

              {/* TextInput for Narration starts here */}

              {/* <AllUITogether
                        show={'largeTextInput'}
                        setterForLargeTextInput={setNarration}
                        largeTextInputValueProps={narration}
                      /> */}
              <AllUITogether
                show={'noAnimatedTextInput'}
                noAnimatedTextInputmarginTop={responsiveHeight(0.9)}
                noAnimatedTextInputheight={responsiveHeight(16.5)}
                noAnimatedTextInputwidth={responsiveWidth(80)}
                noAnimatedTextInputborderColor={'#8e8e8e'}
                noAnimatedTextInputborderWidth={responsiveWidth(0.2)}
                noAnimatedTextInputborderRadius={responsiveHeight(2)}
                noAnimatedTextInputcolor={'#5A5A5A'}
                noAnimatedTextInputfontSize={responsiveFontSize(1.8)}
                noAnimatedTextInputfontFamily={'raleway-medium'}
                noAnimatedTextInputpadding={responsiveWidth(3)}
                noAnimatedTextInputTopLabel={'Narration'}
                noAnimatedTextInputplaceholderprops={'Narration Details...'}
                noAnimatedTextInputValueprops={narration}
                noAnimatedTextInputsetterMethod={setNarration}
                textAlignVerticalprops={'top'}
                multilineTrueorFalseProps={true}
                numberOfLinesForLargeTextInput={5}     
              />

              {/* TextInput for Narration ends here */}

              {/* Code to include Back & Update buttons in one row starts here */}

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: responsiveHeight(3),
                }}>
                {/* Code to include Back btn starts here */}
                <View>
                  
                 
                  <AllUITogether
                show={'ThickRoundedBtn'}
                widthPropsForthickbtn={responsiveWidth(38)}  
                marginLeftPropsForthickbtn={responsiveWidth(0)}
                marginTopPropsForthickbtn={responsiveHeight(1)}
                heightPropsForthickbtn={responsiveHeight(8)}
                backgroundColorPropsForthickbtn={'#283E65'}
                borderRadiusPropsForthickbtn={responsiveWidth(10)}
                
                thickbtnOnpressprops={goBackBtnPressed}
                thickbtnTitleprops={'BACK'}
                fontFamilyPropsForthickbtn={'raleway-semibold'}
                fontcolorPropsForthickbtn={'white'}
                fontSizePropsForthickbtn={responsiveFontSize(2.2)}   
                paddingForthickbtn={responsiveHeight(2)}
                />
                </View>
                {/* Code to include Back btn ends here */}

                {/* Code to include Update btn starts here */}
                <View
                  style={{
                    //backgroundColor:'blue',
                    marginLeft: responsiveWidth(3),
                    //marginBottom:responsiveHeight(10),
                  }}>
                  
                  {/*<AllUITogether
                    show={'ThickRoundedBtn'}
                    widthPropsForthickbtn={38}
                    marginLeftPropsForthickbtn={0}
                    marginTopPropsForthickbtn={1}
                    heightPropsForthickbtn={8}
                    backgroundColorPropsForthickbtn={'#283E65'}
                    borderRadiusPropsForthickbtn={10}
                    thickbtnOnpressprops={updateBtnPressed}
                    thickbtnTitleprops={'UPDATE'}
                    fontFamilyPropsForthickbtn={'raleway-semibold'}
                    fontcolorPropsForthickbtn={'white'}
                    fontSizePropsForthickbtn={2.2}
                    paddingForthickbtn={2}
                  />*/}
                  <AllUITogether
                show={'ThickRoundedBtn'}
                widthPropsForthickbtn={responsiveWidth(38)}  
                marginLeftPropsForthickbtn={responsiveWidth(0)}
                marginTopPropsForthickbtn={responsiveHeight(1)}
                heightPropsForthickbtn={responsiveHeight(8)}
                backgroundColorPropsForthickbtn={'#283E65'}
                borderRadiusPropsForthickbtn={responsiveWidth(10)}
                
                thickbtnOnpressprops={updateBtnPressed}
                thickbtnTitleprops={'UPDATE'}
                fontFamilyPropsForthickbtn={'raleway-semibold'}
                fontcolorPropsForthickbtn={'white'}
                fontSizePropsForthickbtn={responsiveFontSize(2.2)}   
                paddingForthickbtn={responsiveHeight(2)}
                />
                </View>
                {/* Code to include Update btn ends here */}
              </View>
            </View>
            {/* Code to include Back & Update buttons in one row ends here */}

            {/*DO NOT DELETE BELOW COMMENT FOR CALLING UPDATE API IT IS CORRECT BUT PENDING
                  
                  Now for calling edit_order api, for Type of Order = Gold, we do not have to send less details for Order edit, and for Type of Order = Platinum we have to provide all the details which are mentioned inside edit_order api body, so when we have to provide less body details, do not send some details because if we will send any body details with blank data like this ={''} then our api call will generate error that body got blank value and api will not get called.
                  
                    */}
              
              
              
              
              
               {callFetchDynamicAPIsInEditOrderScreenSecondToUpdate ==
                                  true ? (
                                    <>
                                    
                                       <FetchDynamicAPIsTwo
                                        urlToFetchProps={'edit_order'}
                                        accessTokenForFetchingAPIProps={accessTokenSentToEditOrderSecond}
                                        screenNameProps={'EditOrderScreen'}
                                        orderIDProps={orderIDSentToEditOrderSecond}   
                                        customerIDProps={customerIDSentToEditOrderSecond}
                                        supplierIDProps={supplierIDSentToEditOrderSecond}
                                        categoryidProps={categoryIDSentToEditOrderSecond}
                                        orderdateProps={orderDateSentToEditOrderSecond}   
                                        orderforProps={orderForSentToEditOrderSecond}
                                        ordertypeProps={typeOfOrderSentToEditOrderSecond}
                                        itemProps={itemName}
                                        carretidProps={selectedCaratListFromList}
                                        coloridProps={selectedColorFromList}
                                        qtyProps={quantity}
                                        sizeProps={size}
                                        narrationProps={narration}
                                        deliverydateProps={selectedDeliveryDate}
                                        hallmarkProps={selectedHallmark}
                                        priorityProps={selectedPriority}
                                        
                                        //imagefileProps={route.params.orderIDSentToEditOrderSecondroute.params.fullArrayOfImagesSentToEditOrderSecond}   
                                        



                                      /> 
                                    </>
                                  ) : null} 
            {/*Our UI in Card ends here  */}
          </ScrollView>
        </Card>
        {/* </View> */}
      </ScrollView>
      </>
                )
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dropDownTopSideLabels: {
    color: 'black',
    //#5A5A5A
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'raleway-light',
    //backgroundColor:'red',
  },

  image: {
    height: responsiveHeight(35),
    marginTop: responsiveHeight(-6),
  },

  inputBtn: {
    width: responsiveWidth(40),
    height: 50,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    marginVertical: responsiveHeight(0.9),
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    //backgroundColor:'purple',
  },

  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#080516',
    borderRadius: 20,
    width: '90%',
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  datePickerTouchableOpacityTextStyle: {
    fontSize: responsiveHeight(2.3),
    //fontFamily: 'raleway-semibold',
    fontFamily: 'raleway-regular',
    color: '#747474',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredViewForDatePickerModal: {
    //marginTop:responsiveHeight(30),
    flex: 1,
    justifyContent: 'center',

    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',

  },
  datePickerUpperHeaderSection: {
    backgroundColor: '#2196F3',
    height: responsiveHeight(16),
    width: responsiveWidth(91),
    borderTopLeftRadius: responsiveHeight(0.5),
    borderTopRightRadius: responsiveHeight(0.5),

  },
  datePickerUpperHeaderSectionDateText: {
    marginTop: responsiveHeight(4.5),
    marginLeft: responsiveWidth(5),
    fontFamily: 'raleway-regular',
    fontSize: responsiveFontSize(4.5),
    color: 'white',

  },
  datePickerOptionsStyle: {

    backgroundColor: 'white',
    //textHeaderColor: '#469ab6',
    textHeaderColor: '#646464',


    textDefaultColor: '#646464',
    selectedTextColor: '#FFF',

    mainColor: '#2196F3',
    textSecondaryColor: '#FFFFFF',
    borderColor: 'rgba(122, 146, 165, 0.1)',
  },
  datePickerModalCancelAndOKBtnStyle: {
    color: '#2196F3',
    marginTop: responsiveHeight(-14),
    marginLeft: responsiveWidth(55),
  },
  datePickerUpperHeaderSectionLabelText: {
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(5),
    fontFamily: 'raleway-light',
    fontSize: responsiveFontSize(1.4),
    color: 'white',

  },
  modalViewForDatePicker: {
    //margin: 20,
    backgroundColor: 'white',
    //borderRadius:responsiveHeight(10),
    //borderTopLeftRadius:responsiveHeight(5),
    //borderTopRightRadius:responsiveHeight(5),
    borderBottomLeftRadius: responsiveHeight(0.5),
    borderBottomRightRadius: responsiveHeight(0.5),
    height: responsiveHeight(66),
    //marginTop:responsiveHeight(10),



    width: responsiveWidth(91),
    //padding: 35,
    alignItems: 'center',
    //shadowColor: '#000',
    /* shadowOffset: {
      width: 0,
      height: 2,
    }, */
    //shadowOpacity: 0.25,
    //shadowRadius: 4,
    //elevation: 5,
  },
  enterDateTextStyle: {
    color: '#2196F3',
    marginLeft: responsiveWidth(-60),
    fontFamily: 'raleway-regular',
    marginTop: responsiveHeight(6.5),
    //marginTop:responsiveHeight(0),
    fontSize: responsiveFontSize(1.6)
  },
  
});

export default EditOrderScreenSecond;
