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
import { useRoute } from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import { Card, Button, Icon } from '@rneui/themed';

let { height, width } = Dimensions.get('window');

const orderForArray = [{ who: 'Client' }, { who: 'Stock' }];


const hallmarkYesNoArray = [{ type: 'Yes' }, { type: 'No' }];

const priorityArray = [
  {type:'Normal'},
  {type: 'Medium'},
  {type: 'High'},

  
];

const AddOrderScreenSecond = ({navigation }) => {
   const route = useRoute();
  const { 
    accessTokenSentToAddOrderScreenSecond,
    itemImageSentToAddOrderSecond,
    combineImagesFromGalleryAndCamera,
     customerIDSentToAddOrderSecond,
    supplierIDSentToAddOrderSecond,
    categoryIDSentToAddOrderSecond,
    orderDateSentToAddOrderSecond,
    orderForSentToAddOrderSecond,
    typeOfOrderSentToAddOrderSecond,
     } = route.params;



/* const today = new Date();
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false); // open close modal
  const startDate = getFormatedDate(
    today.setDate(today.getDate()),
    'YYYY/MM/DD'
  );
  
  const [startedDate, setStartedDate] = useState('12/12/2023');
  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  function handleChangeStartDate(propDate){
      setStartedDate(propDate)
    }


const [selectedStartDate, setSelectedStartDate] = useState('Select Date'); */
let [isLoading, setIsLoading] = useState(false);
let [bellNotificationNumber, setBellNotificationNumber] = useState(0);
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];


  const daysName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


/* First date picker useState and functions */
  /* Methods and useState Hooks for First Date picker for Delivery Date Range starts here  */




  const today = new Date();
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false); // open close modal
  const [openStartDatePickerWithTextInput, setOpenStartDatePickerWithTextInput] = useState(false); // open close modal

  let dateEnteredOutOfRange = 'no';
  let [dateTypedByUser, setDateTypedByUser] = useState('');



  const startDate = getFormatedDate(
    today.setDate(today.getDate()), 'YYYY/MM/DD'

  );






  const inputRef = useRef();

  const [todaysDate, settodaysDate] = useState(today.getDate());
  const [currentMonthName, setcurrentMonthName] = useState(monthNames[new Date().getMonth()]);
  const [weekday, setweekday] = useState(daysName[new Date().getDay()]);




  const [selectedDeliveryDate, setselectedDeliveryDate] = useState('Select Date');

  const [startedDate, setStartedDate] = useState(startDate);

  let givenDate = '';







const chkAllFieldsEnteredInAddOrderScreenSecond = () =>
  {
    //Check for the Name TextInput
    if (!itemName.trim())
    {
      //alert('Please Enter Name');
      ToastAndroid.showWithGravity(
        'Please Enter Item Name',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    }
    //Check for the Email TextInput

    if (selectedCaratIDInAddOrderScreenSecond==-1)
    {
      //setselectedCaratIDInAddOrderScreenSecond(2);
      alert('Please Enter Password');
       ToastAndroid.showWithGravity(
        'Please Select Carat',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return; 
    } 

    if (selectedColorIDInAddOrderScreenSecond==-1)
    {
      //setselectedColorIDInAddOrderScreenSecond(1);
      alert('Please Enter Shop Name');
       ToastAndroid.showWithGravity(
        'Please Select Color',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return; 
    }
    if (quantity=='')
    {
      //alert('Please Enter Contact Number');
      ToastAndroid.showWithGravity(
        'Please Enter Quantity',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    } 

    if (size=='')
    {
      //alert('Please Enter Email');
      ToastAndroid.showWithGravity(
        'Please Enter Size',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    } 

    if (selectedDeliveryDate=='Select Date')
    {
      //alert('Please Enter Email');
      ToastAndroid.showWithGravity(
        'Please Enter Delivery Date',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    } 


     

    if (narration=='')
    {
      //alert('Please Enter Email');
      ToastAndroid.showWithGravity(
        'Please Enter Narration',
        ToastAndroid.LONG,
        ToastAndroid.CENTER  
      );
      return;
    } 

    //Checked Successfully
    //Do whatever you want
    //alert('Successfully entered all fields in first Register Page...');
    
   uploadImageAndStringForAddNewOrder();
  };














  const uploadImageAndStringForAddNewOrder = async () => {
    //alert('delivery_date'+selectedDeliveryDate);   
   setIsLoading(true);
    //gotoOrderScreen();    
//alert('Order ID is:'+orderIDToEdit);
    
    
    // Check if any file is selected or not
    
     // alert('Single file is not null');
     
      const data = new FormData();

      for (let i = 0; i < combineImagesFromGalleryAndCamera.length; i++) {
        alert(
          'For Image number:' +
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
        );
        data.append(
          'image_file[]',
  
          {
            uri: combineImagesFromGalleryAndCamera[i].path,
            type: combineImagesFromGalleryAndCamera[i].type,
            name: combineImagesFromGalleryAndCamera[i].path,
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
      
      /* for(i=0;i<itemImageSentToAddOrderSecond.length;i++){
        //alert('For Image number:'+i+'\n'+'File uri is:'+singleFileButArray[i].uri+'\n'+'File Name is:'+singleFileButArray[i].name+'\n'+'File mimeType is:'+singleFileButArray[i].mimeType);    


      data.append('image_file[]',

        {
        uri: itemImageSentToAddOrderSecond[i].uri,
        name: itemImageSentToAddOrderSecond[i].name,
        type: itemImageSentToAddOrderSecond[i].mimeType,
      }
       );     
      } */
      
      /* 
       customerIDSentToAddOrderSecond,
    supplierIDSentToAddOrderSecond,
    categoryIDSentToAddOrderSecond,
    orderDateSentToAddOrderSecond,
    orderForSentToAddOrderSecond,
    typeOfOrderSentToAddOrderSecond,
       */



      data.append('customer_id',customerIDSentToAddOrderSecond); 
      data.append('supplier_id',supplierIDSentToAddOrderSecond);
       data.append('category_id',categoryIDSentToAddOrderSecond);
        data.append('order_date',orderDateSentToAddOrderSecond);
        data.append('order_for',orderForSentToAddOrderSecond);
      data.append('order_type',typeOfOrderSentToAddOrderSecond);
      data.append('item',itemName);
      data.append('carret_id',selectedCaratIDInAddOrderScreenSecond);
      data.append('color_id',selectedColorIDInAddOrderScreenSecond);
      data.append('qty',quantity);
      data.append('size',size);
      data.append('narration',narration);
      data.append('delivery_date',selectedDeliveryDate);
      
      data.append('hallmark',selectedHallmark);
      data.append('priority',selectedPriority);
      //data.append('design_no','1');
      //data.append('broadness','1');   
      //data.append('diamond_weight','1');
      //data.append('diamond_quality','1');
      //data.append('diamond_pcs','1');
      //data.append('party_diamond','1');
      //data.append('stone_weight','1');
      //data.append('stone_pcs','1');
      //data.append('party_stone','1');
      //data.append('pt_polish','1');
      //data.append('kt18_polish','1');
      //data.append('engraving_details','1');
      
      //data.append('unique_id','1');
     
     
            
      

      //if(callEditOrderAPIToUploadImage=='NOW'){
      try {
        let res = await fetch('https://rajeshwersoftsolution.com/jwelcart/api/insert_order', {
          method: 'post',
          body: data,
          headers: {
             Authorization: 'Bearer ' +accessTokenSentToAddOrderScreenSecond,
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          timeout: 5000,
        });

        let result = await res.json();
        console.log('result', result);
        alert('Info after Uploading Image:'+result.message); 
        setIsLoading(false);
        gotoOrderScreen();
        
      } catch (error) {
        
        console.log('error upload', error);
      }

      //gotoOrderScreen();
         
    
    
  };











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



  /* Methods and useState Hooks for First Date picker for  Delivery Date  Range ends here  */




const [selectedCaratFromListInAddOrderScreenSecond, setselectedCaratFromListInAddOrderScreenSecond] = useState('Carat');
let [selectedCaratIDInAddOrderScreenSecond, setselectedCaratIDInAddOrderScreenSecond] = useState(-1);

const [selectedColorFromListInAddOrderScreenSecond, setselectedColorFromListInAddOrderScreenSecond] = useState('Color');
let [selectedColorIDInAddOrderScreenSecond, setselectedColorIDInAddOrderScreenSecond] = useState(-1);


  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  
  const [itemName, setItemName] = useState('');
  
const [dataForSelectPriority, setDataForSelectPriority] = useState(priorityArray);
const [selectedPriority, setSelectedPriority] = useState('Normal');
  const [quantity, setQuantity] = useState('');
  const [size, setSize] = useState('');
  const [narration, setNarration] = useState('');
  
  const [dataForHallmark, setDataForHallmark] = useState(hallmarkYesNoArray);
  const [selectedHallmark, setselectedHallmark] = useState('Yes');
  
  

  useEffect(() => {

    /* 
    
    
    const [todaysDate, settodaysDate] = useState(today.getDate());
  const [currentMonthName, setcurrentMonthName] = useState(monthNames[new Date().getMonth()]);
  const [weekday, setweekday] = useState(daysName[new Date().getDay()]);
    
    
    */


    //alert('WeekDay is:'+weekday+'Current Month name is:'+monthNames[new Date().getMonth()]+'Todays date is:'+today.getDate());
    
    
    
    
    
    //alert('Array got is:'+JSON.stringify(itemImageSentToAddOrderSecond));   
    //accessTokenSentToAddOrderScreenSecond


     /* alert(
    
      '1.combine images length is:'+combineImagesFromGalleryAndCamera.length
      
      ); */
  }, []);

 

  

  

  

  

  const updateBtnPressed = () => {
    
    alert('updating....');
  };

  const gotoFirstAddOrderScreen = () => {
    navigation.navigate('AddOrderScreen',{accessTokenSentToAddOrderScreen:accessTokenSentToAddOrderScreenSecond,itemImage:itemImageSentToAddOrderSecond});
  };



  const gotoOrderScreen = () => {
   navigation.navigate("Order", {
      accessTokenSentToOrderScreen: accessTokenSentToAddOrderScreenSecond,
    });
  }





  const uploadImageAndStringForEditOrder = async () => {


   /*  alert(
      '1. color_id number which is appending is:'+selectedColorIDInEditOrderScreenSecond+'\n'+
      '2. carret_id number which is appending is:'+selectedCaratIDInEditOrderScreenSecond+'\n'+
      '3. order_id number which is appending is:'+orderIDSentToEditOrderSecond+'\n'+
      '4. Access Token is:'+accessTokenSentToEditOrderSecond)   */     





    //alert('delivery_date'+selectedDeliveryDate);   
   setIsLoading(true);
    //gotoOrderScreen();    
//alert('Order ID is:'+orderIDToEdit);
    
    
    // Check if any file is selected or not
    
     // alert('Single file is not null');
     
      const data = new FormData();

     
      
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
      //data.append('order_id',orderIDSentToEditOrderSecond);   
        //data.append('customer_id',customerIDSentToEditOrderSecond); 
     
     
        /* data.append('supplier_id',supplierIDSentToEditOrderSecond);
       data.append('category_id',categoryIDSentToEditOrderSecond);
        data.append('order_date',orderDateSentToEditOrderSecond);
        data.append('order_for',orderForSentToEditOrderSecond);    
      data.append('order_type',typeOfOrderSentToEditOrderSecond); */
      
      
      
      
      data.append('item',itemName);
      
      
      
      
      /* data.append('carret_id',selectedCaratIDInEditOrderScreenSecond);
      data.append('color_id',selectedColorIDInEditOrderScreenSecond); */
      
      
      
      
      data.append('qty',quantity);
      data.append('size',size);
      data.append('narration',narration);
      data.append('delivery_date',selectedDeliveryDate);
      
      data.append('hallmark',selectedHallmark);
      data.append('priority',selectedPriority);    
      
     
     
            
      

      //if(callEditOrderAPIToUploadImage=='NOW'){
     /*  try {
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
        alert('JSON Info after Uploading Image:'+JSON.stringify(result));   
        //alert('Info after Uploading Image:'+result.message); 
        setIsLoading(false);
        gotoOrderScreen();
        
      } catch (error) {
        
        console.log('error upload', error);
      } */

      //gotoOrderScreen();
         
    
    
  };

  return (
    <SafeAreaView style={ { flex: 1 } }>
    <StatusBar backgroundColor="#283E65" barStyle={'light-content'} />
    {/* <AllUITogether show="ImageBackgroundWhichContainsChildren">
    </AllUITogether> */}


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













{ isLoading == true ? (
                  <ActivityIndicator size="large" color="#013F66" style={ { marginTop: responsiveHeight(40) } } />    
                ) : (
                  <>

                  {/*View which will hold back arrow image and ADD ORDER text starts here  */}
                <View style={{
                  
                  marginTop:responsiveHeight(-27),        
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
                      dothisProps={gotoFirstAddOrderScreen}   
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
                        dothisProps={gotoFirstAddOrderScreen}    
                      //dothisProps={gotoPreviousScreen}
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
                      topPageName={'ADD ORDER'}
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

       
  <Card
    containerStyle={{
      //height:responsiveHeight(200),    
      height:height,
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
                    //noAnimatedTextInputKeyboardTypeprops={'numeric'}
                    noAnimatedTextInputKeyboardTypeprops={'default'}
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
                    noAnimatedTextInputplaceholderprops={'Item Name'}
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
                      <Text style={styles.dropDownTopSideLabels}>
                        Select Carat
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
                        ddlInsideTextFontName={'raleway-light'}
                        ddlBoarderColor={'#8e8e8e'}
                        ddlboarderThickness={0.5}
                        ddlInsideTextFontColor={'#2D2D2D'}
                        itemIconPropslabel={''}
                        dropdownIconProps={require('../images/dropdowncurved.png')}
                      //heightOfDDLprops={7}
                        largeDropDownListOnPressCallThisAPI={'carat_list'}
                        actionprops={'search'}
                        selectSetter={'ForCaratList'}
                        modalToplabelProps={'Select Carat'}
                        accessTokenprops={accessTokenSentToAddOrderScreenSecond}
                        startprops={'0'}
                        limitprops={'100000'}
                        state_idprops={'545'}
                        city_idprops={'454'}
                        search_allprops={'gg'}
                        sortby_nameprops={'desc'}    
                        
                        selectedCaratListFromListProps={ selectedCaratFromListInAddOrderScreenSecond }
                        setselectedCaratListFromListProps={ setselectedCaratFromListInAddOrderScreenSecond }    
                        

                        setselectedCaratIDFromListProps={setselectedCaratIDInAddOrderScreenSecond}
                        selectedCaratIDFromListProps={selectedCaratIDInAddOrderScreenSecond}

                        //marginTopPropsForDDL={1}
                        tintColorForDDLIconLeft={'#283E65'}
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
                          ddlInsideTextFontName={'raleway-light'}
                          ddlBoarderColor={'#8e8e8e'}
                          ddlboarderThickness={0.5}
                          ddlInsideTextFontColor={'#2D2D2D'}
                          itemIconPropslabel={''}
                          dropdownIconProps={require('../images/dropdowncurved.png')}
                     // heightOfDDLprops={7}
                          largeDropDownListOnPressCallThisAPI={'color_list'}
                          actionprops={'search'}
                          selectSetter={'ForColorList'}
                          modalToplabelProps={'Select Color'}
                          accessTokenprops={accessTokenSentToAddOrderScreenSecond}
                          startprops={'0'}
                          limitprops={'100000'}
                          state_idprops={''}
                          city_idprops={''}
                          search_allprops={''}
                          sortby_nameprops={'desc'}
                          mobile_noprops={''}
                          passwordprops={''}
                          selectedColorFromListProps={ selectedColorFromListInAddOrderScreenSecond }
                        setselectedColorFromListProps={ setselectedColorFromListInAddOrderScreenSecond }    


                         setselectedColorIDFromListProps={setselectedColorIDInAddOrderScreenSecond}
                        selectedColorIDFromListProps={selectedColorIDInAddOrderScreenSecond}

                        
                       // marginTopPropsForDDL={1}
                        tintColorForDDLIconLeft={'#283E65'}
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
                        noAnimatedTextInputKeyboardTypeprops={'numeric'}
                        //noAnimatedTextInputKeyboardTypeprops={'default'}
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
                        noAnimatedTextInputplaceholderprops={'1'}
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
                        noAnimatedTextInputKeyboardTypeprops={'numeric'}   
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


                        {/* <Text style={ styles.datePickerUpperHeaderSectionDateText }>{ weekday},{ currentMonthName } { todaysDate }{today.getDate()}</Text> */}


                       
                        
                         <Text style={ styles.datePickerUpperHeaderSectionDateText }>{ daysName[new Date().getDay()]},{ monthNames[new Date().getMonth()] } {today.getDate()}</Text>

                         

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
                          <Text style={ styles.datePickerUpperHeaderSectionDateText }>{ daysName[new Date().getDay()]},{ monthNames[new Date().getMonth()] } {today.getDate()}</Text>



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
                            //marginTopOfTopSmallIconprops={ -5 }
                            //marginLeftOfTopSmallIconprops={ 79 }
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
                  
                      

        {/* <TouchableOpacity
          style={ styles.inputBtn }
          onPress={ handleOnPressStartDate }>
          <Text
            style={ {
              fontSize: responsiveHeight(1.9),
              fontFamily: 'raleway-light',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            } }>
            {startDate}
            
          </Text>
        </TouchableOpacity>

         Create modal for date picker starts here 
         <Modal
          animationType="slide"
          transparent={ true }
          visible={ openStartDatePicker }>
          <View style={ styles.centeredView }>
            <View style={ styles.modalView }>
              <DatePicker
                mode="calendar"
                minimumDate={ startDate }
                selected={ startedDate }
                onDateChanged={ handleChangeStartDate }
                onSelectedChange={ (date) =>
                  setSelectedStartDate(date)
                }
                options={ {
                  backgroundColor: '#080516',
                  textHeaderColor: '#469ab6',
                  textDefaultColor: '#FFFFFF',
                  selectedTextColor: '#FFF',
                  mainColor: '#469ab6',
                  textSecondaryColor: '#FFFFFF',
                  borderColor: 'rgba(122, 146, 165, 0.1)',
                } }
              />

              <TouchableOpacity onPress={ handleOnPressStartDate }>
                <Text style={ { color: 'white' } }>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> */}

                       
                    </View>
                    
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
                        //largeDropDownListTopLabel={'\n'+'Hallmark'}
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

                  {/* <TouchableOpacity
                    onPress={() => {
                      alert('Select Priority');
                    }}> */}
                    <View>
                      <Text style={ styles.dropDownTopSideLabels }>
                      Select Priority
                      </Text>
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
                  {/* </TouchableOpacity> */}

                  {/* Code to include Select Priority text and its drop down ends here */}

                  {/* TextInput for Narration starts here */}

                   {/* <AllUITogether
                        show={'largeTextInput'}
                        setterForLargeTextInput={setNarration}
                        largeTextInputValueProps={narration}
                      /> */}
                      <AllUITogether
                    show={'noAnimatedTextInput'}
                    //noAnimatedTextInputKeyboardTypeprops={'numeric'}
                    noAnimatedTextInputKeyboardTypeprops={'default'}
                    noAnimatedTextInputmarginTop={responsiveHeight(0.9)}
                    noAnimatedTextInputheight={responsiveHeight(15)}
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
                      marginTop: responsiveHeight(4),
                      //backgroundColor:'yellow',   
                    }}>
                    {/* Code to include Back btn starts here */}
                    <View>     
                      
                      {/*<AllUITogether
                        show={'ThickRoundedBtn'}
                        widthPropsForthickbtn={38}  
                        marginLeftPropsForthickbtn={0}
                        marginTopPropsForthickbtn={1}
                        heightPropsForthickbtn={8}
                        backgroundColorPropsForthickbtn={'#283E65'}
                        borderRadiusPropsForthickbtn={10}
                        thickbtnOnpressprops={gotoFirstAddOrderScreen}
                        thickbtnTitleprops={'NEXT'}
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
                        //thickbtnOnpressprops={gotoPlatinumAddOrderSecondPage}
                        //thickbtnOnpressprops={gotoAddOrderSecondPage}
                        thickbtnOnpressprops={gotoFirstAddOrderScreen}
                        thickbtnTitleprops={'NEXT'}
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
                        //marginBottom:responsiveHeight(10)   
                      }}>
                     
                      {/*<AllUITogether
                        show={'ThickRoundedBtn'}
                        widthPropsForthickbtn={38}  
                        marginLeftPropsForthickbtn={0}
                        marginTopPropsForthickbtn={1}
                        heightPropsForthickbtn={8}
                        backgroundColorPropsForthickbtn={'#283E65'}
                        borderRadiusPropsForthickbtn={10}
                        thickbtnOnpressprops={chkAllFieldsEnteredInAddOrderScreenSecond}
                        //thickbtnOnpressprops={uploadImageAndStringForAddNewOrder}   
                        thickbtnTitleprops={'ADD ORDER'}
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
                        //thickbtnOnpressprops={gotoPlatinumAddOrderSecondPage}
                        //thickbtnOnpressprops={gotoAddOrderSecondPage}
                        thickbtnOnpressprops={chkAllFieldsEnteredInAddOrderScreenSecond}
                        thickbtnTitleprops={'ADD ORDER'}
                        fontFamilyPropsForthickbtn={'raleway-semibold'}
                        fontcolorPropsForthickbtn={'white'}
                        fontSizePropsForthickbtn={responsiveFontSize(2.2)}   
                        paddingForthickbtn={responsiveHeight(2)}
                        />   
                    </View>
                    {/* Code to include Update btn ends here */}
                  </View>
                
                {/* Code to include Back & Update buttons in one row ends here */}
                     
                     
                     </View>
                     
                     {/*Our UI in Card ends here  */}
                     </ScrollView>
    </Card>
  
  </ScrollView>    

                  </>
                ) }





















       
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
    fontSize: responsiveFontSize(3.5),
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

export default AddOrderScreenSecond;
