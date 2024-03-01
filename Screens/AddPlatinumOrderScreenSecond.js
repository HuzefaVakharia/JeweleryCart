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
  Switch,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AnimatedTextInputFile from '../components/AnimatedTextInputFile';
import AllUITogether from '../components/AllUITogether';
import FetchDynamicAPIs from '../components/FetchDynamicAPIs';
import { TextInput } from 'react-native-paper';
import FloatingLabelInput from '../components/FloatingLabelInput';
import { Button, Card } from '@rneui/themed';
import FetchDynamicAPIsTwo from '../components/FetchDynamicAPIsTwo';
let { height, width } = Dimensions.get('window');
import DatePicker from 'react-native-modern-datepicker';
import { getFormatedDate } from 'react-native-modern-datepicker';


const priorityArray = [
  { type: 'Normal' },
  { type: 'Medium' },
  { type: 'High' },
];

const AddPlatinumOrderScreenSecond = ({navigation}) => {
  const route = useRoute();

  /*  const accessTokenSentToPlatinumAddOrderScreenSecond='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMGVjYWFhZGFkMDZlZmE1M2RkMjczMWIyNTZkYTU0ZDRjOTg3MDVlYzFmMTQ0OTBmMTJiZDM1MTc5NjlkZGQ2MjcwMGJkZTZkNThhNGZkZTQiLCJpYXQiOjE2ODcyNTM3NzYsIm5iZiI6MTY4NzI1Mzc3NiwiZXhwIjoxNzE4ODc2MTc2LCJzdWIiOiI0OSIsInNjb3BlcyI6W119.VZMdFA8V71J_4wKl08S7-Zh0MNAx_120jClfIaXizFiULrMji6nQinfwPa23iVj1y4vj_RENEik-UyAAyPAnX5l0rn5aRuxOfRwuT5vS7q2vd8mDzyl_3vjMYlK6EBEIXcc7pdB4CenUIwvbFHqo1W4l3PdJNIDtnUSGlwocI1cuwgLO1p6bkQdMF-nYh8jLql4p9u2D0L7F782BIPL6bpuDv-wZD7Fk33ZJflfLlQFF3TfhjWDFKyiAvgQ3Suq-lWJxtj7kKaimAaYEvNrT7Of14sj-IB3YEYX6ZNDkRRQRdKt25N2eYaw3mEe98WADCsVUJjgUtGWkRSYXRolYJKkBwGmT-B4GyyptjZFd9v90hRgmMj4z1kfotIm3ulV8LYlFhQvJU0uTOtu5TCPtemYGLt6KUc5ptEJdt3Xt0umsU6K_k5ONXtnJvXIPTkq_ZfxEotjQ-n6sD5PclKksZ8dRYnhk3satA875VvTmDbcYXqY6pM-SiZhkI7VZ_v6DCJSAGVjOFIwqWVVD0y9at0TgauWlS0Ca7-k1I4fTncZjdlCmnJirJwbKGVqnv2VTGhycu88rhvKxofBwfeZZ8M5L3xA7Mi7ZZRfB0w80BLsQT08xNjEYLBtdN2IwM0kxw5xv_dUhwVEpWMdNP2LcKkZvhBzWEhAlEMpTHLKyZec'; 

   let itemImageSentToPlatinumAddOrderSecond=[];
   let customerIDSentToPlatinumAddOrderSecond="1";
   let supplierIDSentToPlatinumAddOrderSecond=1;
   let categoryIDSentToPlatinumAddOrderSecond=1;
   let orderDateSentToPlatinumAddOrderSecond='2023/06/20';
   let orderForSentToPlatinumAddOrderSecond='Stock';
   let typeOfOrderSentToPlatinumAddOrderSecond='Platinum';*/

  const { 
    accessTokenSentToPlatinumAddOrderScreenSecond,
    itemImageSentToPlatinumAddOrderSecond,
    customerIDSentToPlatinumAddOrderSecond,
    combineImagesFromGalleryAndCamera,
    supplierIDSentToPlatinumAddOrderSecond,
    categoryIDSentToPlatinumAddOrderSecond,
    orderDateSentToPlatinumAddOrderSecond,
    orderForSentToPlatinumAddOrderSecond,
    typeOfOrderSentToPlatinumAddOrderSecond, 
    } = route.params; 
  

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const daysName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let [bellNotificationNumber, setBellNotificationNumber] = useState(0);
  /* Delivery date picker useState and functions */
  /* Methods and useState Hooks for Delivery Date picker starts here  */
  let [platinumEditOrderNarration, setplatinumEditOrderNarration] =useState('');
  const [dataForSelectPriority, setDataForSelectPriority] =
    useState(priorityArray);
  const [selectedPriority, setSelectedPriority] = useState('Normal');

  const today = new Date();
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false); // open close modal
  const [
    openStartDatePickerWithTextInput,
    setOpenStartDatePickerWithTextInput,
  ] = useState(false); // open close modal

  let dateEnteredOutOfRange = 'no';
  let [dateTypedByUser, setDateTypedByUser] = useState('');

  const startDate = getFormatedDate(
    today.setDate(today.getDate()),   
    'YYYY/MM/DD'
  );

  const inputRef = useRef();

  const [todaysDate, settodaysDate] = useState(today.getDate());
  const [currentMonthName, setcurrentMonthName] = useState(
    monthNames[new Date().getMonth()]
  );
  const [weekday, setweekday] = useState(daysName[new Date().getDay()]);

  const [
    selectedDeliveryDateForPlatinumAddOrder,
    setselectedDeliveryDateForPlatinumAddOrder,
  ] = useState('Delivery Date');

  const [startedDate, setStartedDate] = useState(startDate);

  let givenDate = '';


let [isLoading, setIsLoading] = useState(false);


 const gotoOrderScreen = () => {
   navigation.navigate("Order", {
      accessTokenSentToOrderScreen: accessTokenSentToPlatinumAddOrderScreenSecond,
    });
  }



const chkAllFieldsEnteredInAddOrderScreenSecond = () =>
  {
    //Check for the Name TextInput
    if (!itemname.trim())
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

    /* 
    data.append('item',itemname);
      //data.append('carret_id',selectedCaratIDInAddOrderScreenSecond);
      //data.append('color_id',selectedColorIDInAddOrderScreenSecond);
      //data.append('qty',quantity);
      data.append('size',size);
      data.append('narration',platinumEditOrderNarration);
      data.append('delivery_date',selectedDeliveryDateForPlatinumAddOrder);
      //data.append('delivery_date','today');    
      
      //data.append('hallmark',selectedHallmark);
      data.append('priority',selectedPriority);
      data.append('design_no',designNumber);
      data.append('broadness',broadness);       
      data.append('diamond_weight',diamondweight);
      data.append('diamond_quality',diamondquality);
      data.append('diamond_pcs',diamondpcs);
      data.append('party_diamond',isEnabledMeansDiamondisFromParty==true?'Yes':'No');
      data.append('stone_weight',stoneweight);
      data.append('stone_quality',stonequality);
      data.append('stone_pcs',stonepcs);
      data.append('party_stone',isEnabledMeansStoneisFromParty==true?'Yes':'No');
      data.append('pt_polish',ptpolish);
      data.append('kt18_polish',kt18);
      data.append('engraving_details',engravingdetails);
      
      data.append('unique_id',uniqueid);
    
     */

    if (designNumber=='')
    {
      //alert('Please Enter Password');
      ToastAndroid.showWithGravity(
        'Please Select Design Number',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    } 

    if (size=='')
    {
      //alert('Please Enter Shop Name');
      ToastAndroid.showWithGravity(
        'Please Enter Size',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    }
    if (broadness=='')
    {
      //alert('Please Enter Contact Number');
      ToastAndroid.showWithGravity(
        'Please Enter Broadness',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    } 

    if (uniqueid=='')
    {
      //alert('Please Enter Email');
      ToastAndroid.showWithGravity(
        'Please Enter Unique ID',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    } 

    if (diamondweight=='')
    {
      //alert('Please Enter Email');
      ToastAndroid.showWithGravity(
        'Please Enter Diamond Weight',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    } 


     

    if (diamondquality=='')
    {
      //alert('Please Enter Email');
      ToastAndroid.showWithGravity(
        'Please Enter Diamond Quality',
        ToastAndroid.LONG,
        ToastAndroid.CENTER  
      );
      return;
    }

    if (diamondpcs=='')
    {
      //alert('Please Enter Email');
      ToastAndroid.showWithGravity(
        'Please Enter Diamond Pieces',
        ToastAndroid.LONG,
        ToastAndroid.CENTER  
      );
      return;
    }

    if (stoneweight=='')
    {
      //alert('Please Enter Email');
      ToastAndroid.showWithGravity(
        'Please Enter Stone Weight',
        ToastAndroid.LONG,
        ToastAndroid.CENTER  
      );
      return;
    }

    if (stonequality=='')
    {
      //alert('Please Enter Email');
      ToastAndroid.showWithGravity(
        'Please Enter Stone Quality',
        ToastAndroid.LONG,
        ToastAndroid.CENTER  
      );
      return;
    }

    if (stonepcs=='')
    {
      //alert('Please Enter Email');
      ToastAndroid.showWithGravity(
        'Please Enter Stone Pieces',
        ToastAndroid.LONG,
        ToastAndroid.CENTER  
      );
      return;
    }

    if (ptpolish=='')
    {
      //alert('Please Enter Email');
      ToastAndroid.showWithGravity(
        'Please Enter Polish Details',
        ToastAndroid.LONG,
        ToastAndroid.CENTER  
      );
      return;
    }
    if (kt18=='')
    {
      //alert('Please Enter Email');
      ToastAndroid.showWithGravity(
        'Please Enter Karat',
        ToastAndroid.LONG,
        ToastAndroid.CENTER  
      );
      return;
    }
    if (engravingdetails=='')
    {
      //alert('Please Enter Email');
      ToastAndroid.showWithGravity(
        'Please Enter Engraving Details',
        ToastAndroid.LONG,
        ToastAndroid.CENTER  
      );
      return;
    }
//selectedDeliveryDateForPlatinumAddOrder
   if (selectedDeliveryDateForPlatinumAddOrder=='Delivery Date')
    {
      //alert('Please Enter Email');
      ToastAndroid.showWithGravity(
        'Please Select Delivery Date',
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
  setIsLoading(true);
  //alert('Delivery Date is:'+selectedDeliveryDateForPlatinumAddOrder);  
  /* alert('Upload started...');
   alert('customer_id:'+customerIDSentToPlatinumAddOrderSecond+'\n'+
   'supplier_id is:'+supplierIDSentToPlatinumAddOrderSecond+'\n'+
      'category_id is:'+categoryIDSentToPlatinumAddOrderSecond+'\n'+
      'order_date is:'+orderDateSentToPlatinumAddOrderSecond+'\n'+
      'order_type is:'+typeOfOrderSentToPlatinumAddOrderSecond+'\n'+
      
      'order_for is:'+orderForSentToPlatinumAddOrderSecond+'\n'+
      'itemname is:'+itemname+'\n'+
      'designNumber is:'+designNumber+'\n'+
      'size is:'+size+'\n'+
      'broadness is:'+broadness+'\n'+
      'uniqueid is:'+uniqueid+'\n'+
      'diamondweight is:'+diamondweight+'\n'+
      'diamondquality is:'+diamondquality+'\n'+
      'diamondpcs is:'+diamondpcs+'\n'+
      
      'diamondFromPartyTrueOrFalse is:'+isEnabledMeansDiamondisFromParty+'\n'+



      'stoneweight is:'+stoneweight+'\n'+
      'stonequality is:'+stonequality+'\n'+
      'stonepcs is:'+stonepcs+'\n'+
      
      'stoneFromPartyTrueOrFalse is:'+isEnabledMeansStoneisFromParty+'\n'+ 


      'ptpolish is:'+ptpolish+'\n'+
      'kt18 is:'+kt18+'\n'+
      'engravingdetails is:'+engravingdetails+'\n'+
      

      'platinumEditOrderNarration is:'+platinumEditOrderNarration+'\n'
      
      
      
      
      
      ); */   
     /*  
      
      +
      +
      'selectedDeliveryDate is:'+selectedDeliveryDate+'\n'+
      'selectedPriority is:'+selectedPriority+'\n'+
      'designNumber is:'+designNumber+'\n'+
      'broadness is:'+broadness+'\n'+
      'diamondweight is:'+diamondweight+'\n'+
      'diamondquality is:'+diamondquality+'\n'+
      'diamondpcs is:'+diamondpcs+'\n'+
      'diamondFromPartyYesOrNo is:'+diamondFromPartyYesOrNo+'\n'+
      'stoneweight is:'+stoneweight+'\n'+
      'stonequality is:'+stonequality+'\n'+
      'stonepcs is:'+stonepcs+'\n'+
      'stoneFromPartyYesOrNo is:'+stoneFromPartyYesOrNo+'\n'+
      'ptpolish is:'+ptpolish+'\n'+
      'kt18 is:'+kt18+'\n'+
      'engravingdetails is:'+engravingdetails+'\n'+
      'uniqueid is:'+uniqueid */
      
       
    //setIsLoading(true);
    //gotoOrderScreen();    

     
      const data = new FormData();

      for (let i = 0; i < combineImagesFromGalleryAndCamera.length; i++) {
        /* alert(
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
      

       /* for(i=0;i<combineImagesFromGalleryAndCamera.length;i++){
        


      data.append('image_file[]',

        {
        uri: combineImagesFromGalleryAndCamera[i].uri,
        name: combineImagesFromGalleryAndCamera[i].name,
        type: combineImagesFromGalleryAndCamera[i].mimeType,
      }    
       );     
      } 
 */

       /* for(i=0;i<itemImageSentToPlatinumAddOrderSecond.length;i++){
        //alert('For Image number:'+i+'\n'+'File uri is:'+singleFileButArray[i].uri+'\n'+'File Name is:'+singleFileButArray[i].name+'\n'+'File mimeType is:'+singleFileButArray[i].mimeType);

              


      data.append('image_file[]',

        {
        uri: itemImageSentToPlatinumAddOrderSecond[i].uri,
        name: itemImageSentToPlatinumAddOrderSecond[i].name,
        type: itemImageSentToPlatinumAddOrderSecond[i].mimeType,
      }
       );     
      }  */
      
      


        
       data.append('customer_id',customerIDSentToPlatinumAddOrderSecond); 
       data.append('supplier_id',supplierIDSentToPlatinumAddOrderSecond);
       data.append('order_type',typeOfOrderSentToPlatinumAddOrderSecond);  
       data.append('category_id',categoryIDSentToPlatinumAddOrderSecond);
        data.append('order_date',orderDateSentToPlatinumAddOrderSecond);
        data.append('order_for',orderForSentToPlatinumAddOrderSecond);
      
      data.append('item',itemname);
      //data.append('carret_id',selectedCaratIDInAddOrderScreenSecond);
      //data.append('color_id',selectedColorIDInAddOrderScreenSecond);
      //data.append('qty',quantity);
      data.append('size',size);
      data.append('narration',platinumEditOrderNarration);
      data.append('delivery_date',selectedDeliveryDateForPlatinumAddOrder);
      //data.append('delivery_date','today');    
      
      //data.append('hallmark',selectedHallmark);
      data.append('priority',selectedPriority);
      data.append('design_no',designNumber);
      data.append('broadness',broadness);       
      data.append('diamond_weight',diamondweight);
      data.append('diamond_quality',diamondquality);
      data.append('diamond_pcs',diamondpcs);
      data.append('party_diamond',isEnabledMeansDiamondisFromParty==true?'Yes':'No');
      data.append('stone_weight',stoneweight);
      data.append('stone_quality',stonequality);
      data.append('stone_pcs',stonepcs);
      data.append('party_stone',isEnabledMeansStoneisFromParty==true?'Yes':'No');
      data.append('pt_polish',ptpolish);
      data.append('kt18_polish',kt18);
      data.append('engraving_details',engravingdetails);
      
      data.append('unique_id',uniqueid); 
     
     
            
      

      //if(callEditOrderAPIToUploadImage=='NOW'){
      try {
        let res = await fetch('https://rajeshwersoftsolution.com/jwelcart/api/insert_order', {
          method: 'post',
          body: data,
          headers: {
             Authorization: 'Bearer ' +accessTokenSentToPlatinumAddOrderScreenSecond,
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          timeout: 15000,
        });

        let result = await res.json();
        console.log('result', result);
        //alert('Info after Uploading Image:'+result.message); 
        setIsLoading(false);

      setitemname('');
      setdesignNumber('');
      setsize('');
      setbroadness('');
      setuniqueid('');
      setdiamondweight('');
      setdiamondquality('');
      setdiamondpcs('');
      setstonequality('');
      setstonequality('');
      setstonepcs('');
      setptpolish('');
      setkt18('');
      setengravingdetails('');
      setselectedDeliveryDateForPlatinumAddOrder('Delivery Date');
      setnarrationForPlatinumEditOrder('');
      
      gotoOrderScreen();

      } catch (error) {
        
        console.log('error upload', error);
        /* ToastAndroid.showWithGravity(
          'Error:',JSON.stringify(error),
          ToastAndroid.LONG,
          ToastAndroid.CENTER
        ); */
        setIsLoading(false);
        gotoOrderScreen();
      }

      //gotoOrderScreen();
         
    
    
  };

















  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
    //alert('handleChangeStartDate(propDate) function called:'+propDate);
  }

  const editDateIconPressedDoThis = () => {
    setOpenStartDatePickerWithTextInput(true);
    setOpenStartDatePicker(!openStartDatePicker);
  };

  const calenderIconPressedDoThis = () => {
    setOpenStartDatePickerWithTextInput(false);
    setOpenStartDatePicker(!openStartDatePicker);
  };

  const dateEnteredIsOk = () => {
    //alert('Keyboard dismissed and showing alert at once')
    setselectedDeliveryDateForPlatinumAddOrder(dateTypedByUser),
      setOpenStartDatePickerWithTextInput(!openStartDatePickerWithTextInput);
  };

  /* Methods and useState Hooks for Delivery Date picker ends here  */

  let [itemname, setitemname] = useState('');
  let [designNumber, setdesignNumber] = useState('');
  let [size, setsize] = useState('');

  let [broadness, setbroadness] = useState('');
  let [uniqueid, setuniqueid] = useState('');
  let [diamondweight, setdiamondweight] = useState('');
  let [diamondquality, setdiamondquality] = useState('');
  let [diamondpcs, setdiamondpcs] = useState('');
  let [fromPartyForDiamondDetails, setfromPartyForDiamondDetails] =
    useState('');
  let [fromPartyForStoneDetails, setfromPartyForStoneDetails] = useState('');
  let [stoneweight, setstoneweight] = useState('');
  let [stonequality, setstonequality] = useState('');
  let [stonepcs, setstonepcs] = useState('');
  let [ptpolish, setptpolish] = useState('');
  let [kt18, setkt18] = useState('');
  let [engravingdetails, setengravingdetails] = useState('');
  const [
    callFetchDynamicAPIsInPlatinumEditOrderToUpdate,
    setcallFetchDynamicAPIsInPlatinumEditOrderToUpdate,
  ] = useState(false);
  let [deliverydateForPlatinumEditOrder, setdeliverydateForPlatinumEditOrder] =
    useState('');
  let [priorityForPlatinumEditOrder, setpriorityForPlatinumEditOrder] =
    useState('');
  let [narrationForPlatinumEditOrder, setnarrationForPlatinumEditOrder] =
    useState('');

  
  
  
  
  
  
 

   /* const [
    isEnabledMeansDiamondisFromParty,
    setisEnabledMeansDiamondisFromParty,
  ] = useState(partydiamondSentToPlatinumEditOrderTwo=='Yes'?true:false);  */

  const [
    isEnabledMeansDiamondisFromParty,
    setisEnabledMeansDiamondisFromParty,
  ] = useState(true); 



/* 
For Switch we can not make changes of keeping ON or OFF if we pass some value from EditOrder screen to this AddPlatinumOrderScreenSecond screen if we set the value of Switch which is isEnabledMeansDiamondisFromParty using setisEnabledMeansDiamondisFromParty() inside useEffect() hook, so we have to directly pass whatever value we have got from our EditOrderScreen inside round brackets of our useState hook from where our boolean value for our Switch is getting initialized for the first time, so this above is the only correct way to decide what state i.e. Switch should be kept on or off from the value got from previous screen i.e. EditOrderScreen 

Note that when we will come from EditOrderScreen to AddPlatinumOrderScreenSecond then the value from JewelCart API for Diamond is from Party or Not will be present in variable partydiamondSentToPlatinumEditOrderTwo, but when we will change the value of the Switch to make any Edit in our Order then the new value will get stored inside variable diamondFromPartyYesOrNo, so while clicking on UPDATE button, send the data of variable diamondFromPartyYesOrNo.
 */





  let diamondFromPartyYesOrNo='No';    
  //let diamondFromPartyYesOrNo=fromPartyForDiamondDetails;

//alert('Value for Diamond From Party Yes or No is:'+diamondFromPartyYesOrNo);




useEffect(() => {
    //alert('Array got is:'+JSON.stringify(itemImageSentToAddOrderSecond));   
    //accessTokenSentToAddOrderScreenSecond


     /* alert(
    
      '1.combine images length is:'+combineImagesFromGalleryAndCamera.length
      
      ); */
  }, []);








  

  const toggleSwitchForDiamondDetails = () => {
    
    if(isEnabledMeansDiamondisFromParty==false){
      
      diamondFromPartyYesOrNo='Yes';
      setisEnabledMeansDiamondisFromParty((previousState) => !previousState);
     
      }
    else{
      setisEnabledMeansDiamondisFromParty((previousState) => !previousState);
      
      diamondFromPartyYesOrNo='No';
      
      } 
    
    //alert('Diamond is from Party?'+diamondFromPartyYesOrNo);
    ToastAndroid.showWithGravity(
      'Diamond is from Party?'+diamondFromPartyYesOrNo,
      ToastAndroid.LONG,
      ToastAndroid.CENTER
    )
  
  
  
  };

  
  
  
  
  
  
  
  
  
  
  
  
  

  /* const [isEnabledMeansStoneisFromParty, setisEnabledMeansStoneisFromParty] =
    useState(partystoneSentToPlatinumEditOrderTwo=='Yes'?true:false); */

     const [isEnabledMeansStoneisFromParty, setisEnabledMeansStoneisFromParty] =
    useState(true);
  
  
  let stoneFromPartyYesOrNo='No';
  
  const toggleSwitchForStoneDetails = () =>
    {
    //setisEnabledMeansStoneisFromParty((previousState) => !previousState);
      if(isEnabledMeansStoneisFromParty==false){
      
      stoneFromPartyYesOrNo='Yes';
      setisEnabledMeansStoneisFromParty((previousState) => !previousState);
     
      }
    else{
      setisEnabledMeansStoneisFromParty((previousState) => !previousState);
      
      stoneFromPartyYesOrNo='No';
      
      } 
    
    //alert('Stone is from Party?'+stoneFromPartyYesOrNo);
    ToastAndroid.showWithGravity(
      'Stone is from Party?'+stoneFromPartyYesOrNo,
      ToastAndroid.LONG,
      ToastAndroid.CENTER
    )
    }
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  let [typingItemName, settypingItemName] = useState(false);
  const [platinumEditOrderScreenModal, setPlatinumEditOrderScreenModal] =
    useState(true);

   
  
  
   

  

  const goBackBtnPressed = () => {
    /* navigation.navigate('EditOrderScreen',{accessTokenSentToEditOrder:accessTokenSentToPlatinumEditOrderScreen,itemImage:itemImageSentToEditOrderSecond}); */

    //setPlatinumEditOrderScreenModal(false);

    //alert('Going back');
    ToastAndroid.showWithGravity(
      'Going back',
      ToastAndroid.LONG,
      ToastAndroid.CENTER
    )
  };

  const updateBtnPressed = () => {
    //navigation.navigate('PlatinumEditOrderScreen');
    //alert('updating....');
    setcallFetchDynamicAPIsInPlatinumEditOrderToUpdate(true);
  };

  const gotoFirstAddOrderScreen = () => {
    navigation.navigate('AddOrderScreen',{accessTokenSentToAddOrderScreen:accessTokenSentToPlatinumAddOrderScreenSecond,itemImage:itemImageSentToPlatinumAddOrderSecond});   
  };

  const image = { uri: 'https://reactjs.org/logo-og.png' };


  
const uploadImageAndStringForEditOrder = async () => {


  /*  alert('order_id number which is appending is:'+orderIDSentToEditOrderSecond+'\n'+'Access Token is:'+accessTokenSentToEditOrderSecond) */





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


     
      
      
      //data.append('order_id',orderIDSentToPlatinumEditOrderTwo);   
      //alert('order_id appended is:'+orderIDSentToPlatinumEditOrderTwo);
         //data.append('customer_id',customerIDSentToPlatinumEditOrderTwo); 
         //alert('customer_id appended is:'+customerIDSentToPlatinumEditOrderTwo);
      
      
      
      
      
      
       /* data.append('supplier_id',supplierIDSentToPlatinumEditOrderTwo);
       data.append('category_id',categoryIDSentToPlatinumEditOrderTwo);
        data.append('order_date',orderDateSentToPlatinumEditOrderTwo);
        data.append('order_for',orderForSentToPlatinumEditOrderTwo);
      data.append('order_type',typeOfOrderSentToPlatinumEditOrderTwo); */
      
      
      
      
      
      
      data.append('item',itemname);
      
      data.append('design_no',designNumber);
      data.append('size',size);
      data.append('broadness',broadness);

      data.append('unique_id',uniqueid);     

      data.append('diamond_weight',diamondweight);
      data.append('diamond_quality',diamondquality);
      data.append('diamond_pcs',diamondpcs);
      data.append('party_diamond',isEnabledMeansDiamondisFromParty==true?'Yes':'No');

      data.append('stone_weight',stoneweight);    
      data.append('stone_quality',stonequality);
      data.append('stone_pcs',stonepcs);
      data.append('party_stone',isEnabledMeansStoneisFromParty==true?'Yes':'No');


      data.append('pt_polish',ptpolish);
      data.append('kt18_polish',kt18);
      data.append('engraving_details',engravingdetails);

      data.append('narration',platinumEditOrderNarration);
      //data.append('delivery_date',selectedDeliveryDateForPlatinumEditOrder);
      
      //data.append('hallmark',selectedHallmark);
      data.append('priority',selectedPriority);       
      
     
     
            
      

      //if(callEditOrderAPIToUploadImage=='NOW'){
      /* try {
        let res = await fetch('https://rajeshwersoftsolution.com/jwelcart/api/edit_order', {
          method: 'post',
          body: data,
          headers: {
             Authorization: 'Bearer ' +accessTokenSentToPlatinumEditOrderScreen,
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          timeout: 5000,
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





    { isLoading == true ? (
                  <ActivityIndicator size="large" color="#013F66" style={ { marginTop: responsiveHeight(40) } } />    
                ) : (
                  <>
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

      {/*View which will hold back arrow image and EDIT ORDER text ends here   */}

      <ScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        bounces={false}>
        {/* <View
                style={ {
                  //backgroundColor: 'cyan',
                  flex: 1,
                  height: height-responsiveHeight(10),
                  

                    We have to give minus responsiveHeight(10) inside 'height: height-responsiveHeight(10),' as shown above so that when we open our keyboard to type inside any TextInput and if we move Scroll our Card up and down then the card do not show too much space below while scrolling full card.  
                  
                  
                  Since Our Card size will be equal to our mobile device, so we can give our Card 
                   size to be height:height, and if we give our Card size height:height then we will not see gray colour horizontal 
                   borader below our Card, so since we are not seeing any horizontal boarder below our Card or ScrollView then we have do not have to use this View 
                   inside our Parent ScrollView so that our Parent ScrollView can occupy height which is equal to our device height, . But if we had not kept our Card height equal to our device height like this height:height then we have to uncomment this View  
                    
                } }> */}

        <Card
          containerStyle={{
            //height:responsiveHeight(200),
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

            {/*Item Name TextInput and its top label starts here */}
            <Text
              style={[
                styles.textLabelStyle,
                { marginTop: responsiveHeight(0.5) },
              ]}>
              Item Name
            </Text>

            <TextInput
              style={styles.textInputStyleOnlyForName}
              //onFocus={()=>settypingItemName(true)}
              //onBlur={()=>settypingItemName(false)}
              //style={ styles.textInputStyle }
              //keyboardType='numeric'
              keyboardType='default'
              label="Item Name"
              mode="outlined"
              value={itemname}
              onChangeText={(value) => setitemname(value)}
              theme={styles.themeStyleForAnimatedTextInput}
            />
            {/*Item Name TextInput and its top label ends here */}

            {/*Design and Size two TextInput in single row and its top label starts here */}

            <View flexDirection="row">
              <View>
                <Text style={styles.textLabelStyle}>Design</Text>

                <TextInput
                  //style={styles.textInputStyleOnlyForName}
                  //onFocus={()=>settypingItemName(true)}
                  //onBlur={()=>settypingItemName(false)}
                  style={styles.smalltextInputStyle}
                  label="Desgin No."
                  keyboardType='numeric'
                  //keyboardType='default'
                  mode="outlined"
                  value={designNumber}
                  onChangeText={(value) => setdesignNumber(value)}
                  theme={styles.themeStyleForAnimatedTextInput}
                />
              </View>

              <View style={{ marginLeft: responsiveWidth(3.5) }}>
                <Text style={styles.textLabelStyle}>Size</Text>

                <TextInput
                  //style={styles.textInputStyleOnlyForName}
                  //onFocus={()=>settypingItemName(true)}
                  //onBlur={()=>settypingItemName(false)}
                  style={styles.smalltextInputStyle}
                  label="Size"
                  keyboardType='numeric'
                  //keyboardType='default'
                  mode="outlined"
                  value={size}
                  onChangeText={(value) => setsize(value)}
                  theme={styles.themeStyleForAnimatedTextInput}
                />
              </View>
            </View>
            {/*Design and Size two TextInput in single row and its top label ends here */}

            {/*Broadness TextInput and its top label starts here */}
            <Text
              style={[
                styles.textLabelStyle,
                { marginTop: responsiveHeight(0.5) },
              ]}>
              Broadness
            </Text>

            <TextInput
              style={styles.textInputStyleOnlyForName}
              //onFocus={()=>settypingItemName(true)}
              //onBlur={()=>settypingItemName(false)}
              //style={ styles.textInputStyle }
              label="Broadness"
              keyboardType='numeric'
                  //keyboardType='default'
              mode="outlined"
              value={broadness}
              onChangeText={(value) => setbroadness(value)}
              theme={styles.themeStyleForAnimatedTextInput}
            />
            {/*Broadness TextInput and its top label ends here */}

            {/*Unique Id TextInput and its top label starts here */}
            <Text
              style={[
                styles.textLabelStyle,
                { marginTop: responsiveHeight(0.5) },
              ]}>
              Unique Id
            </Text>

            <TextInput
              style={styles.textInputStyleOnlyForName}
              //onFocus={()=>settypingItemName(true)}
              //onBlur={()=>settypingItemName(false)}
              //style={ styles.textInputStyle }
              label="Unique Id"
              keyboardType='numeric'
                  //keyboardType='default'
              mode="outlined"
              value={uniqueid}
              onChangeText={(value) => setuniqueid(value)}
              theme={styles.themeStyleForAnimatedTextInput}
            />
            {/*Unique Id TextInput and its top label ends here */}

            <Text style={styles.sectionForUIStyle}>Diamond Details</Text>

            {/*Diamond Weight and Diamond Quality two TextInput in single row and its top label starts here */}

            <View flexDirection="row">
              <View>
                <Text style={styles.textLabelStyle}>Diamond Weight</Text>

                <TextInput
                  //style={styles.textInputStyleOnlyForName}
                  //onFocus={()=>settypingItemName(true)}
                  //onBlur={()=>settypingItemName(false)}
                  style={styles.smalltextInputStyle}
                  label="Weight"
                  keyboardType='numeric'
                  //keyboardType='default'
                  mode="outlined"
                  value={diamondweight}
                  onChangeText={(value) => setdiamondweight(value)}
                  theme={styles.themeStyleForAnimatedTextInput}
                />
              </View>

              <View style={{ marginLeft: responsiveWidth(3.5) }}>
                <Text style={styles.textLabelStyle}>Diamond Quality</Text>

                <TextInput
                  //style={styles.textInputStyleOnlyForName}
                  //onFocus={()=>settypingItemName(true)}
                  //onBlur={()=>settypingItemName(false)}
                  style={styles.smalltextInputStyle}
                  label="Quality"
                  //keyboardType='numeric'
                  keyboardType='default'
                  mode="outlined"
                  value={diamondquality}
                  onChangeText={(value) => setdiamondquality(value)}
                  theme={styles.themeStyleForAnimatedTextInput}
                />
              </View>
            </View>
            {/*Diamond Weight and Diamond Quality two TextInput in single row and its top label ends here */}

            {/*Diamond Pcs TextInput & Diamond From Party toggle button both in single row starts here */}

            <View flexDirection="row">
              <View>
                <Text style={styles.textLabelStyle}>Diamond Pcs</Text>

                <TextInput
                  //style={styles.textInputStyleOnlyForName}
                  //onFocus={()=>settypingItemName(true)}
                  //onBlur={()=>settypingItemName(false)}
                  style={styles.smalltextInputStyle}
                  label="Pcs"
                  keyboardType='numeric'
                  //keyboardType='default'
                  mode="outlined"
                  value={diamondpcs}
                  onChangeText={(value) => setdiamondpcs(value)}
                  theme={styles.themeStyleForAnimatedTextInput}
                />
              </View>

              <View
                style={{
                  marginLeft: responsiveWidth(3.5),
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={[
                    styles.textLabelStyle,
                    { marginTop: responsiveHeight(5) },
                  ]}>
                  From Party
                </Text>
                <Switch
                  trackColor={{ false: '#ADADAD', true: '#919DB3' }}
                  thumbColor={
                    isEnabledMeansDiamondisFromParty ? '#273F65' : '#757575'
                  }
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitchForDiamondDetails}
                  value={isEnabledMeansDiamondisFromParty}
                  style={{ marginTop: responsiveHeight(-0.5) }}
                />

                {/* {isEnabledMeansDiamondisFromParty == true
                  ? setDiamondFromPartyValueYes()
                  : setDiamondFromPartyValueNo()} */}

                {/*I think if we want to use inline ternerray operation to perfrom some process, then we can not put that process code inside directly after ? or :, it creates error, so to avoid error we have to put our code steps to perfrom on certain condition is satisfied inside another seperate function, and we can call that function on condition is satisfied in ternarry operation.  */}

                {/* {
                          isEnabledMeansDiamondisFromParty?
    
      (diamondisFromParty='Yes',
      alert('Diamond from Party? '+diamondisFromParty))  
      :   
        (diamondisFromParty='No',
        alert('Diamond from Party? '+diamondisFromParty))    
        

                      } */}
              </View>
            </View>
            {/*Diamond Pcs TextInput & Diamond From Party toggle button both in single row ends here */}

            <Text style={styles.sectionForUIStyle}>Stone Details</Text>

            {/*Stone Weight and Stone Quality two TextInput in single row and its top label starts here */}

            <View flexDirection="row">
              <View>
                <Text style={styles.textLabelStyle}>Stone Weight</Text>

                <TextInput
                  //style={styles.textInputStyleOnlyForName}
                  //onFocus={()=>settypingItemName(true)}
                  //onBlur={()=>settypingItemName(false)}
                  style={styles.smalltextInputStyle}
                  label="Weight"
                  keyboardType='numeric'
                  //keyboardType='default'
                  mode="outlined"
                  value={stoneweight}
                  onChangeText={(value) => setstoneweight(value)}
                  theme={styles.themeStyleForAnimatedTextInput}
                />
              </View>

              <View style={{ marginLeft: responsiveWidth(3.5) }}>
                <Text style={styles.textLabelStyle}>Stone Quality</Text>

                <TextInput
                  //style={styles.textInputStyleOnlyForName}
                  //onFocus={()=>settypingItemName(true)}
                  //onBlur={()=>settypingItemName(false)}
                  style={styles.smalltextInputStyle}
                  label="Quality"
                  //keyboardType='numeric'
                  keyboardType='default'
                  mode="outlined"
                  value={stonequality}
                  onChangeText={(value) => setstonequality(value)}
                  theme={styles.themeStyleForAnimatedTextInput}
                />
              </View>
            </View>
            {/*Stone Weight and Stone Quality two TextInput in single row and its top label ends here */}

            {/*Stone Pcs TextInput & Stone From Party toggle button both in single row starts here */}

            <View flexDirection="row">
              <View>
                <Text style={styles.textLabelStyle}>Stone Pcs</Text>

                <TextInput
                  //style={styles.textInputStyleOnlyForName}
                  //onFocus={()=>settypingItemName(true)}
                  //onBlur={()=>settypingItemName(false)}
                  style={styles.smalltextInputStyle}
                  label="Pcs"
                  keyboardType='numeric'
                  //keyboardType='default'
                  mode="outlined"
                  value={stonepcs}
                  onChangeText={(value) => setstonepcs(value)}
                  theme={styles.themeStyleForAnimatedTextInput}
                />
              </View>

              <View
                style={{
                  marginLeft: responsiveWidth(3.5),
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={[
                    styles.textLabelStyle,
                    { marginTop: responsiveHeight(5) },
                  ]}>
                  From Party
                </Text>
                <Switch
                  trackColor={{ false: '#ADADAD', true: '#919DB3' }}
                  thumbColor={
                    isEnabledMeansStoneisFromParty ? '#273F65' : '#757575'
                  }
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitchForStoneDetails}
                  value={isEnabledMeansStoneisFromParty}
                  style={{ marginTop: responsiveHeight(-0.5) }}
                />

                {/* {isEnabledMeansStoneisFromParty == true
                  ? setStoneFromPartyValueYes()
                  : setStoneFromPartyValueNo()} */}

                {/*I think if we want to use inline ternerray operation to perfrom some process, then we can not put that process code inside directly after ? or :, it creates error, so to avoid error we have to put our code steps to perfrom on certain condition is satisfied inside another seperate function, and we can call that function on condition is satisfied in ternarry operation.  */}

                {/* {
                          isEnabledMeansDiamondisFromParty?
    
      (diamondisFromParty='Yes',
      alert('Diamond from Party? '+diamondisFromParty))  
      :   
        (diamondisFromParty='No',
        alert('Diamond from Party? '+diamondisFromParty))    
        

                      } */}
              </View>
            </View>
            {/*Stone Pcs TextInput & Stone From Party toggle button both in single row ends here */}

            <Text style={styles.sectionForUIStyle}>Polishing Details</Text>

            {/*PT Polish TextInput and its top label starts here */}
            <Text
              style={[
                styles.textLabelStyle,
                { marginTop: responsiveHeight(0.5) },
              ]}>
              PT Polish
            </Text>

            <TextInput
              style={styles.textInputStyleOnlyForName}
              label="PT Polish"
              //keyboardType='numeric'
              keyboardType='default'
              mode="outlined"
              value={ptpolish}
              onChangeText={(value) => setptpolish(value)}
              theme={styles.themeStyleForAnimatedTextInput}
            />
            {/*PT Polish TextInput and its top label ends here */}

            {/*18 KT TextInput and its top label starts here */}
            <Text
              style={[
                styles.textLabelStyle,
                { marginTop: responsiveHeight(0.5) },
              ]}>
              18 KT
            </Text>

            <TextInput
              style={styles.textInputStyleOnlyForName}
              label="18 KT"
              //keyboardType='numeric'
              keyboardType='default'
              mode="outlined"
              value={kt18}
              onChangeText={(value) => setkt18(value)}
              theme={styles.themeStyleForAnimatedTextInput}
            />
            {/*18 KT TextInput and its top label ends here */}

            {/*Engraving Details TextInput and its top label starts here */}
            <Text
              style={[
                styles.textLabelStyle,
                { marginTop: responsiveHeight(0.5) },
              ]}>
              Engraving Details
            </Text>

            <TextInput
              style={styles.textInputStyleOnlyForName}
              label="Engraving Details"
              //keyboardType='numeric'
              keyboardType='default'
              mode="outlined"
              value={engravingdetails}
              onChangeText={(value) => setengravingdetails(value)}
              theme={styles.themeStyleForAnimatedTextInput}
            />
            {/*Engraving Details TextInput and its top label ends here */}

            {/*Straight line starts here*/}
            <View
              style={{
                //backgroundColor:'purple',
                marginTop: responsiveHeight(1.5),
              }}>
              <AllUITogether show={'StraightLineDivider'} />
            </View>
            {/*Straight line ends here*/}

            {/*Delivery Date starts here */}
            <Text
              style={[
                styles.textLabelStyle,
                { marginTop: responsiveHeight(2) },
              ]}>
              Delivery Date
            </Text>

            <TouchableOpacity
              style={styles.inputBtn}
              onPress={handleOnPressStartDate}>
              <Text style={styles.datePickerTouchableOpacityTextStyle}>
                {selectedDeliveryDateForPlatinumAddOrder}
              </Text>
            </TouchableOpacity>

            {/*Modal for first date with Calender starts here */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={openStartDatePicker}>
              <View style={styles.centeredViewForDatePickerModal}>
                <View style={styles.datePickerUpperHeaderSection}>
                  <Text style={styles.datePickerUpperHeaderSectionLabelText}>
                    SELECT DATE
                  </Text>

                  {/* <Text style={styles.datePickerUpperHeaderSectionDateText}>
                    {weekday},{currentMonthName} {todaysDate}
                  </Text> */}
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
                    //marginTopOfTopSmallIconprops={-4.5}
                   // marginLeftOfTopSmallIconprops={79}
                   marginTopOfTopSmallIconprops={responsiveHeight(-4.5)}
                  marginLeftOfTopSmallIconprops={responsiveWidth(79)}
                  />
                </View>

                <View style={styles.modalViewForDatePicker}>
                  <DatePicker
                    mode="calendar"
                    minimumDate={startDate}
                    //maximumDate={ startDate }
                    selected={startedDate}
                    onDateChanged={handleChangeStartDate}
                    onSelectedChange={(date) => {
                      setselectedDeliveryDateForPlatinumAddOrder(date);

                      settodaysDate(
                        new Date(
                          selectedDeliveryDateForPlatinumAddOrder
                        ).getDate()
                      );
                      /* 
                            The value stored inside selectedDeliveryDateForPlatinumAddOrder variable is in form of simple string. To get Date from that string we will first have to convert the selectedDeliveryDateForPlatinumAddOrder variable value from string to Date form, so we will put our selectedDeliveryDateForPlatinumAddOrder variable inside new Date() which will convert our selectedDeliveryDateForPlatinumAddOrder from String to Date and after converting it to Date we can use .getDate() method which will get Date from the selectedDeliveryDateForPlatinumAddOrder variable.
                             */
                      setcurrentMonthName(
                        monthNames[
                          new Date(
                            selectedDeliveryDateForPlatinumAddOrder
                          ).getMonth()
                        ]
                      );
                      setweekday(
                        daysName[
                          new Date(
                            selectedDeliveryDateForPlatinumAddOrder
                          ).getDay()
                        ]
                      );
                    }}
                    options={styles.datePickerOptionsStyle}
                  />
                </View>
              </View>

              <View style={{ flexDirection: 'row', backgroundColor: 'purple' }}>
                <TouchableOpacity
                  onPress={() => {
                    setOpenStartDatePicker(!openStartDatePicker);
                  }}>
                  <Text style={styles.datePickerModalCancelAndOKBtnStyle}>
                    CANCEL
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleOnPressStartDate}>
                  <Text
                    style={[
                      styles.datePickerModalCancelAndOKBtnStyle,
                      { marginLeft: responsiveWidth(10) },
                    ]}>
                    OK
                  </Text>
                </TouchableOpacity>
              </View>
            </Modal>
            {/*Modal for first date with Calender ends here */}

            {/*Modal for first date with TextInput starts here */}
            <Modal
              animationType="fade"
              transparent={true}
              onShow={() => inputRef.current.focus()}
              visible={openStartDatePickerWithTextInput}>
              <View style={styles.centeredViewForDatePickerModal}>
                <ScrollView keyboardShouldPersistTaps="always">
                  <View
                    style={[
                      styles.datePickerUpperHeaderSection,
                      { marginTop: responsiveHeight(5) },
                    ]}>
                    <Text style={styles.datePickerUpperHeaderSectionLabelText}>
                      SELECT DATE
                    </Text>
                    {/* <Text style={styles.datePickerUpperHeaderSectionDateText}>
                      {weekday},{currentMonthName} {todaysDate}
                    </Text> */}
                    <Text style={ styles.datePickerUpperHeaderSectionDateText }>{ daysName[new Date().getDay()]},{ monthNames[new Date().getMonth()] } {today.getDate()}</Text>


                    <AllUITogether
                      show={'TopSmallIcon'}
                      dothisWhenTopSmallIconPressedProps={
                        calenderIconPressedDoThis
                      }
                      bellNotificationNumberProps={bellNotificationNumber}
                      iconToDisplayPathProps={require('../images/calendar.png')}
                      showBadgeAlsoprops={false}
                      widthOfTopSmallIconprops={30}
                      heightOfTopSmallIconprops={30}
                      //marginTopOfTopSmallIconprops={-5}
                      //marginLeftOfTopSmallIconprops={79}
                      marginTopOfTopSmallIconprops={responsiveHeight(-5)}
                  marginLeftOfTopSmallIconprops={responsiveWidth(79)}
                    />
                  </View>

                  <View
                    style={[
                      styles.modalViewForDatePicker,
                      { height: responsiveHeight(27) },
                    ]}>
                    <Text style={styles.enterDateTextStyle}>Enter Date</Text>

                    <ScrollView keyboardShouldPersistTaps="always">
                      {/* <TextInput

                              ref={ inputRef }
                              // onLayout={()=> inputRef.current.focus()}
                               style={ {
                                marginTop: responsiveHeight(-1),
                                height: 50,
                                width: responsiveWidth(80),


                                //color: '#5A5A5A',

                                fontSize: responsiveFontSize(1.8),
                                fontFamily: 'raleway-medium',
                                padding: responsiveWidth(3),
                              } }  

                              placeholder='YYYY/MM/DD'
                              mode="disabled"
                              placeholderTextColor="#BBBBBB"

                              //underlineColorAndroid="#2196F3"
                               //underlineColorAndroid={ "black" }
                              //selectionColor="#2196F3"   
                              onChangeText={ (dateEnteredByUser) =>
                                setDateTypedByUser(dateEnteredByUser)
                              }
                              value={ dateTypedByUser }
                            /> */}

                      <TextInput
                        ref={inputRef}
                        style={[
                          styles.textInputStyleOnlyForName,
                          { marginTop: responsiveHeight(-2) },
                        ]}
                        placeholder="YYYY/MM/DD"
                        placeholderTextColor="#BBBBBB"
                        //label="Item Name"
                        //mode="outlined"
                        value={dateTypedByUser}
                        onChangeText={(value) => setDateTypedByUser(value)}
                        theme={styles.themeStyleForAnimatedTextInput}
                      />

                      <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                          onPress={() => {
                            dateEnteredOutOfRange == 'yes'
                              ? null
                              : setOpenStartDatePickerWithTextInput(
                                  !openStartDatePickerWithTextInput
                                );
                          }}>
                          <Text
                            style={[
                              styles.datePickerModalCancelAndOKBtnStyle,
                              {
                                marginTop:
                                  dateEnteredOutOfRange == 'yes'
                                    ? responsiveHeight(3.5)
                                    : responsiveHeight(6.5),
                                marginLeft: responsiveWidth(42),
                              },
                            ]}>
                            CANCEL
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => {
                            dateEnteredOutOfRange == 'yes'
                              ? null
                              : dateEnteredIsOk();
                          }}>
                          <Text
                            style={[
                              styles.datePickerModalCancelAndOKBtnStyle,
                              {
                                marginTop:
                                  dateEnteredOutOfRange == 'yes'
                                    ? responsiveHeight(3.5)
                                    : responsiveHeight(6.5),
                                marginLeft: responsiveWidth(10),
                              },
                            ]}>
                            OK
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </ScrollView>
                  </View>
                </ScrollView>
              </View>
            </Modal>
            {/*Modal for first date with TextInput ends here */}

            {/*Delivery Date ends here */}

            {/* Code to include Select Priority text and its drop down starts here */}

            {/* <Text style={styles.dropDownTopSideLabels}>Select Priority</Text> */}

            {/* <TouchableOpacity
                    onPress={() => {
                      //alert('Select Priority');
                    }}> */}
            <View style={{ marginTop: responsiveHeight(1.5) }}>
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
                fontForDDLInsideText={'raleway-medium'}
                dataForFlatListprops={dataForSelectPriority}
                setterMethodInDropDownTextArea={setSelectedPriority}
                valueForDropDownToShowInText={selectedPriority}
                //Next time when we use this Reusable component, give all the
                //required numberic parameter in props using
                //responssiveHeight and responsiveWidth.
                marginbetweenTopLabelandTouchableOpactiy={responsiveHeight(2)}
                largeDropDownModalMarginTopProps={445}
                largeDropDownModalMarginLeftProps={18}
                largeDropDownModalHeightProps={150}
                largeDropDownModalWidthProps={324}
                borderRadiusPropsForDDLModal={responsiveHeight(0)}
              />
            </View>
            {/*  </TouchableOpacity> */}

            {/* Code to include Select Priority text and its drop down ends here */}

            {/* Code For Narration starts here */}

            <Text
              style={[
                styles.textLabelStyle,
                { marginTop: responsiveHeight(2.5) },
              ]}>
              Narration
            </Text>

            <View style={{ marginTop: responsiveHeight(2) }}>
              <FloatingLabelInput
                labelForCustomFloatingTextInputProps={'Narration'}
                valueForCFTI={platinumEditOrderNarration}
                onChangeTextForCFTI={setplatinumEditOrderNarration}
                heightOfFloatingLabelInput={responsiveHeight(18)}
                widthOfFloatingLabelInput={responsiveWidth(80)}
                boarderRadiusForFloatingLabelInput={responsiveWidth(5)}
              />
            </View>
            {/* Code For Narration ends here */}

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
                  thickbtnOnpressprops={goBackBtnPressed}
                  thickbtnTitleprops={'BACK'}
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
                  //thickbtnOnpressprops={updateBtnPressed}
                  thickbtnOnpressprops={chkAllFieldsEnteredInAddOrderScreenSecond}    
                  thickbtnTitleprops={'Add Order'}
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
                 
                  thickbtnOnpressprops={chkAllFieldsEnteredInAddOrderScreenSecond}
                  thickbtnTitleprops={'Add Order'}
                  fontFamilyPropsForthickbtn={'raleway-semibold'}
                  fontcolorPropsForthickbtn={'white'}
                  fontSizePropsForthickbtn={responsiveFontSize(2.2)}   
                  paddingForthickbtn={responsiveHeight(2)}
                  />
              </View>
              {/* Code to include Update btn ends here */}
            </View>

            {/* Code to include Back & Update buttons in one row ends here */}

            {/*Our UI in Card ends here  */}
          </ScrollView>
        </Card>
        {/* </View> */}

        {callFetchDynamicAPIsInPlatinumEditOrderToUpdate ==
                                  true ? (
                                    <>
                                      <FetchDynamicAPIsTwo
                                     
                                        urlToFetchProps={'edit_order'}
                                        //accessTokenForFetchingAPIProps={accessTokenSentToEditOrderSecond}
                                        screenNameProps={'PlatinumEditOrderTwoScreen'}
                                        
                                        
                                        
                                        //orderIDProps={orderIDSentToPlatinumEditOrderTwo} 
                                        //customerIDProps={customerIDSentToPlatinumEditOrderTwo}
                                        //supplierIDProps={supplierIDSentToPlatinumEditOrderTwo}
                                        //categoryidProps={categoryIDSentToPlatinumEditOrderTwo}
                                        //orderdateProps={orderDateSentToPlatinumEditOrderTwo}
                                        //orderforProps={orderForSentToPlatinumEditOrderTwo}
                                        //ordertypeProps={typeOfOrderSentToPlatinumEditOrderTwo}
                                        
                                        
                                        
                                        itemProps={itemname}
                                        /* carretidProps={selectedCaratListFromList}
                                        coloridProps={selectedColorFromList}
                                        qtyProps={quantity} */
                                        sizeProps={size}
                                        //narrationProps={narration}
                                        deliverydateProps={selectedDeliveryDateForPlatinumAddOrder}
                                        //hallmarkProps={dataForHallmark}
                                        //priorityProps={selectedPriority}
                                         //mobilenoPropsToEdit={'989898'}
                                        designnoProps={designNumber}
                                        broadnessProps={broadness}
                                        diamondweightProps={diamondweight}
                                        diamondqualityProps={diamondquality}
                                        diamondpcsProps={diamondpcs}
                                        //partydiamondProps={} require to find which variable holds data
                                        stoneweightProps={stoneweight}
                                        stonequalityProps={stonequality}
                                        stonepcsProps={stonepcs}
                                        //partystoneProps={} require to find which variable holds data
                                        ptpolishProps={ptpolish}
                                        kt18_polishProps={kt18}
                                        engravingdetailsProps={engravingdetails} 
                                      
                                        
                                        uniqueidProps={uniqueid} 
                                        
                                        
                                        //imagefileProps={itemImageSentToEditOrderSecond}
                                        //imagefileProps={fullArrayOfImagesSentToPlatinumEditOrderTwo}



                                      />
                                    </>
                                  ) : null}
      </ScrollView>
                  </>
                )
    }  






      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: responsiveHeight(55),
    marginTop: responsiveHeight(-5),
  },
  themeStyleForAnimatedTextInput: {
    roundness: responsiveWidth(10),
    colors: {
      primary: '#2B95E1', //blue

      underlineColor: 'transparent',
    },
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
  smalltextInputStyle: {
    fontFamily: 'raleway-light',
    backgroundColor: 'white',
    marginTop: responsiveHeight(1),
    width: responsiveWidth(39),
  },
  textLabelStyle: {
    color: 'black',
    //#5A5A5A
    fontSize: responsiveFontSize(1.9),
    fontFamily: 'raleway-regular',
    marginTop: responsiveHeight(0.6),
    //backgroundColor:'red',
  },
  sectionForUIStyle: {
    color: 'black',
    //#5A5A5A
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'raleway-semibold',
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(1),
    //backgroundColor:'red',
  },
  textInputStyleOnlyForName: {
    fontFamily: 'raleway-light',

    backgroundColor: 'white',
    marginTop: responsiveHeight(0.5),
  },
  inputBtn: {
    //width: responsiveWidth(43),
    height: 50,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    //marginVertical: responsiveHeight(0.9),
    marginTop: responsiveHeight(2),
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    //backgroundColor:'purple',
  },
  datePickerTouchableOpacityTextStyle: {
    fontSize: responsiveHeight(2.3),
    fontFamily: 'raleway-light',
    //color: '#747474',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  centeredView: {
    flex: 1,
    //justifyContent: 'center',

    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    //marginTop: 22,
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

  modalView: {
    //margin: 20,
    backgroundColor: 'white',
    //borderRadius:responsiveHeight(10),
    borderTopLeftRadius: responsiveHeight(5),
    borderTopRightRadius: responsiveHeight(5),

    height: responsiveHeight(80),
    marginTop: responsiveHeight(21),
    width: width,
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

  textStyleForBottomModalScreen: {
    fontSize: responsiveHeight(2.8),
    fontFamily: 'raleway-semibold',
    marginTop: responsiveHeight(4),
  },
  datePickerModalCancelAndOKBtnStyle: {
    color: '#2196F3',
    marginTop: responsiveHeight(-14),
    marginLeft: responsiveWidth(55),
  },
  enterDateTextStyle: {
    color: '#2196F3',
    marginLeft: responsiveWidth(-60),
    fontFamily: 'raleway-regular',
    marginTop: responsiveHeight(6.5),
    //marginTop:responsiveHeight(0),
    fontSize: responsiveFontSize(1.6),
  },
});

export default AddPlatinumOrderScreenSecond;
