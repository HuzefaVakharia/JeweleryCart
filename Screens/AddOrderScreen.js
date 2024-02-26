/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React, { useEffect, useState } from 'react';
import
 {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
   PermissionsAndroid,
  FlatList,
  Image,
  Alert,
  TouchableOpacity,
  ImageBackground,   
  ToastAndroid,
  View,
  Modal,
 } from 'react-native';

//import { Camera } from 'expo-camera';

//import * as MediaLibrary from 'expo-media-library';
import { getFormatedDate } from 'react-native-modern-datepicker';
import AllUITogether from '../components/AllUITogether';
import CameraFullScreen from './CameraFullScreen';
import AnimatedTextInputFile from '../components/AnimatedTextInputFile';
//import * as DocumentPicker from 'expo-document-picker';
import { useRoute } from '@react-navigation/native';
import
 {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
 } from 'react-native-responsive-dimensions';

import { Card } from '@rneui/themed';

let { height, width } = Dimensions.get('window');

const typeOfOrderArray = [
  { type: 'Platinum' },
 { type: 'Type of Order' },
 { type: 'Gold' },
 
];

const orderForArray = [{ type: 'Client' }, { type: 'Stock' }];




let arrayOfImages = [];
let singleFileButArray=[];  
let combineImagesArray=[];
let arrayOfImagesSelectedDirectlyFromGallery=[];





const AddOrderScreen = ({navigation }) =>
{
  const route = useRoute();
 const { 
   
   accessTokenSentToAddOrderScreen, 
   itemImage,
   arrayOfimagesCapturedUsingCamera,
   //openFullScreenCameraForSameOrderKey,
    } = route.params;   

const [cameraOrGalleryOptionsModal, setcameraOrGalleryOptionsModal]=useState(false);
const [selectedCustomerFromListInAddOrderScreen, setselectedCustomerFromListInAddOrderScreen] = useState('Customer');
const [selectedSupplierFromListInAddOrderScreen, setselectedSupplierFromListInAddOrderScreen] = useState('Supplier');
const [selectedCategoryFromListInAddOrderScreen, setselectedCategoryFromListInAddOrderScreen] = useState('Category');
 
let [selectedCustomerIDFromList, setselectedCustomerIDFromList] = useState(-1);
let [selectedSupplierIDFromList, setselectedSupplierIDFromList] = useState(-1);
let [selectedCategoryIDFromList, setselectedCategoryIDFromList] = useState(-1);






 const [showSelectedImagesFlatList, setShowSelectedImagesFlatList] = useState(true);

const [singleFile, setSingleFile] = useState(null);
const [singleFileTwo, setSingleFileTwo] = useState('');

    



let i=0;
 
 const [hasCameraPermission, setHasCameraPermission] = useState();
 const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();

 const [image, setImage] = useState(null);
 const [images, setImages] = useState([]);

 const [imageSecond, setImageSecond] = useState(null);

 const [imageThird, setImageThird] = useState(null);

 const [imageFourth, setImageFourth] = useState(null);

 const today = new Date();

 const startDate = getFormatedDate(
  today.setDate(today.getDate()),
  'YYYY/MM/DD'
 );


  //let openFullScreenCameraForSameOrderValue='Yes'
  let openFullScreenCameraForSameOrderValue='No';
 const [hasGalleryPermission, setHasGalleryPermission] = useState(null);

 const [logedInPersonAccessToken, setLogedInPersonAccessToken] = useState('');

 const [openFullScreenCameraTrueOrFalse, setopenFullScreenCameraTrueOrFalse] = useState(false);
 //let openFullScreenCameraTrueOrFalse='False';
  const [dataForTypeOfOrder, setDataForTypeOfOrder]=useState(typeOfOrderArray);
  
 const [data, setData] = useState(orderForArray);
 const [selectedTypeOfOrderValue, setSelectedTypeOfOrderValue] =
  useState('Type Of Order');
 const [selectedOrderForValue, setselectedOrderForValue] = useState('Client');

 let [doneAddingImage, setdoneAddingImage] = useState('blank');

 useEffect(() =>
 {
   //alert('Size of arrayOfimagesCapturedUsingCamera from useEffect is: '+arrayOfimagesCapturedUsingCamera?.length);    
  setLogedInPersonAccessToken(accessTokenSentToAddOrderScreen);
  /* Below we have passed empty array to singleFileButArray so that once user have created new order, and when he clicks on New order second time, then he will get empty array of image otherwise if we will not do this old selected image will be displayed for everytime.   */
  //singleFileButArray=[];
  combineImagesArray = [];    
  singleFileButArray=[];  
  alert('singleFileButArray made blank in useEffect of AddOrderScreen file...');
  //arrayOfImagesSelectedDirectlyFromGallery=arrayOfimagesCapturedUsingCamera;
 }, []);

 



const openFullScreenCamera=()=>{
//openFullScreenCameraTrueOrFalse='True';
//alert('Value of openFullScreenCameraTrueOrFalse is: '+openFullScreenCameraTrueOrFalse);   
setopenFullScreenCameraTrueOrFalse(true);
  //singleFileButArray=[];    
 /*  alert('Size of arrayOfimagesCapturedUsingCamera from openFullScreenCamera is: '+arrayOfimagesCapturedUsingCamera?.length);   

   navigation.navigate('CameraFullScreen', {
      accessTokenSentToCameraFullScreen: accessTokenSentToAddOrderScreen,
      cameraOpenedFromScreen:'AddOrderScreen',
      openFullScreenCameraForSameOrder:openFullScreenCameraForSameOrderValue});  */



/* navigation.navigate('CameraFullScreen', {
      accessTokenSentToCameraFullScreen: accessTokenSentToEditOrder,
      itemImageSentToCameraFullScreen: itemImage,
      orderIDSentToCameraFullScreen:orderIDSentToEditOrder,

      orderDateSentToCameraFullScreen:orderDateSentFromOrderScreen,
    nameSentToCameraFullScreen:nameToBeEditedForEditOrder,
    categorynameSentToCameraFullScreen:categorynameReceivedFromOrderScreen,
    typeOfOrderSentToCameraFullScreen:typeOfOrderFromOrderScreen,

     customerIDSentToCameraFullScreen:customerIDSentToEditOrder,
    supplierIDSentToCameraFullScreen:supplierIDSentToEditOrder,
    categoryIDSentToCameraFullScreen:categoryIDSentToEditOrder,



    itemNameSentToCameraFullScreen:itemNameReceivedFromOrderScreen,
    qtySentToCameraFullScreen:qtyReceivedFromOrderScreen,
    sizeSentToCameraFullScreen:sizeReceivedFromOrderScreen,
    narrationSentToCameraFullScreen:narrationReceivedFromOrderScreen,
    deliveryDateSentToCameraFullScreen:deliveryDateReceivedFromOrderScreen,
    prioritySentToCameraFullScreen:priorityReceivedFromOrderScreen,
    designNoSentToCameraFullScreen:designNoReceivedFromOrderScreen,
    broadnessSentToCameraFullScreen:broadnessReceivedFromOrderScreen,
    diamondweightSentToCameraFullScreen:diamondweightReceivedFromOrderScreen,
    diamondqualitySentToCameraFullScreen:diamondqualityReceivedFromOrderScreen,
    diamondpcsSentToCameraFullScreen:diamondpcsReceivedFromOrderScreen,
    partydiamondSentToCameraFullScreen:partydiamondReceivedFromOrderScreen,
    stoneweightSentToCameraFullScreen:stoneweightReceivedFromOrderScreen,
    stonequalitySentToCameraFullScreen:stonequalityReceivedFromOrderScreen,
    stonepcsSentToCameraFullScreen:stonepcsReceivedFromOrderScreen,
    partystoneSentToCameraFullScreen:partystoneReceivedFromOrderScreen,
    ptpolishSentToCameraFullScreen:ptpolishReceivedFromOrderScreen,
    kt18polishSentToCameraFullScreen:kt18polishReceivedFromOrderScreen,
    engravingdetailsSentToCameraFullScreen:engravingdetailsReceivedFromOrderScreen,
    orderforSentToCameraFullScreen:orderforFromOrderScreenReceivedFromOrderScreen,
    suppliernameSentToCameraFullScreen:suppliernameReceivedFromOrderScreen,
    hallmarkSentToCameraFullScreen:hallmarkReceivedFromOrderScreen,
    arrayOfimagesSentToCameraFullScreen:arrayOfimagesCapturedUsingCamera,
    }); */
/* 

    orderDateSentFromOrderScreen,
    nameToBeEditedForEditOrder,
    categorynameReceivedFromOrderScreen,
    typeOfOrderFromOrderScreen,

     customerIDSentToEditOrder,
    supplierIDSentToEditOrder,
    categoryIDSentToEditOrder,



    itemNameReceivedFromOrderScreen,
    qtyReceivedFromOrderScreen,
    sizeReceivedFromOrderScreen,
    narrationReceivedFromOrderScreen,
    deliveryDateReceivedFromOrderScreen,
    priorityReceivedFromOrderScreen,
    designNoReceivedFromOrderScreen,
    broadnessReceivedFromOrderScreen,
    diamondweightReceivedFromOrderScreen,
    diamondqualityReceivedFromOrderScreen,
    diamondpcsReceivedFromOrderScreen,
    partydiamondReceivedFromOrderScreen,
    stoneweightReceivedFromOrderScreen,
    stonequalityReceivedFromOrderScreen,
    stonepcsReceivedFromOrderScreen,
    partystoneReceivedFromOrderScreen,
    ptpolishReceivedFromOrderScreen,
    kt18polishReceivedFromOrderScreen,
    engravingdetailsReceivedFromOrderScreen,
    orderforFromOrderScreenReceivedFromOrderScreen,
    suppliernameReceivedFromOrderScreen,
    hallmarkReceivedFromOrderScreen,
    arrayOfimagesCapturedUsingCamera,

 */



  
}








const chkAllFieldsEnteredInAddOrderScreen = () =>
  {
    //Check for the Name TextInput
    /*if (singleFileButArray.length<=0)
    {
      //alert('Please Enter Name');
      ToastAndroid.showWithGravity(
        'Please Select Image',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    }*/
    //Check for the Email TextInput

    if (selectedCustomerIDFromList==-1)
    {
      setselectedCustomerIDFromList(1);
      //alert('Please Enter Password');
      /* ToastAndroid.showWithGravity(
        'Please Select Customer',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return; */
    } 

    if (selectedSupplierIDFromList==-1)
    {
      //alert('Please Enter Shop Name');
      ToastAndroid.showWithGravity(
        'Please Select Supplier',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    }
    if (selectedCategoryIDFromList==-1)
    {
      //alert('Please Enter Contact Number');
      ToastAndroid.showWithGravity(
        'Please Select Category',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    } 

    if (selectedTypeOfOrderValue=='Type Of Order')
    {
      //alert('Please Enter Email');
      ToastAndroid.showWithGravity(
        'Please Select TypeOfOrder',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      return;
    } 

    //Checked Successfully
    //Do whatever you want
    //alert('Successfully entered all fields in first Register Page...');
    
   if(selectedTypeOfOrderValue=='Platinum'){
     //openFullScreenCameraForSameOrderValue='Yes';
      gotoPlatinumAddOrderSecondPage();
   }else{
     //openFullScreenCameraForSameOrderValue='Yes';
     gotoAddOrderSecondPage();
   }
  };













 const gotoAddOrderSecondPage = () =>
 {

/* Here before calling this function our old image selected from camera section is getting added to our new image selected using our camera section. So empty array of our  arrayOfimagesCapturedUsingCamera before calling this function*/


alert('Length of images Captured Using Camera is:'+arrayOfimagesCapturedUsingCamera?.length+'\n'+
      'Length of Images from Gallery Directly is:'+singleFileButArray?.length
      )   

      if(arrayOfimagesCapturedUsingCamera?.length>0)
      {
        combineImagesArray.push(...arrayOfimagesCapturedUsingCamera);
      }


      if(singleFileButArray?.length>0)
      {
      combineImagesArray.push(...singleFileButArray);
      }

    
      
      
      
      if(combineImagesArray?.length>0){
       alert('Length of combineImagesArray Captured Using Camera is:'+combineImagesArray.length);  
    }

//console.log('Information: '+collectionOfAllImagesToSendToSecondEditScreen);

      /* uploadImage(orderIDGot);*/
      /* 
      Now while uploading our new selected images from our Gallery and Camera, remember that we do not have to send our itemImage which we have fetched from our Server while fetching full Order list data, because , the API of our JewelCart EditOrder require only new Images which we want to add in our Server data, and when we will call API to Edit our Order list data, then the API will take only new images which we want to add to our already present images in Server and the API will just add our new Images to our Old previously present image in Server, Note that the Edit order API will not replace our Old image of that Order with our New images selected using Camera or Gallery, it will just add new image with old images.
       */
     
     /* alert('orderIDSentToEditOrder which is being sent to EditOrderScreenSecond is:'+orderIDGotWhileCallingGoToEditOrderSecondPage); */



    /* alert(
      'orderIDSentToEditOrder which is being sent to EditOrderScreenSecond is:'+orderIDSentToEditOrder+'\n'+
      
      'Quantity which is being sent to Edit Order Second Screen is:'+qtyReceivedFromOrderScreen  
    ); */



  navigation.navigate('AddOrderScreenSecond', {
   accessTokenSentToAddOrderScreenSecond: accessTokenSentToAddOrderScreen,
   //itemImageSentToAddOrderSecond: singleFileButArray,
   combineImagesFromGalleryAndCamera:combineImagesArray,
    customerIDSentToAddOrderSecond:selectedCustomerIDFromList,
    supplierIDSentToAddOrderSecond:selectedSupplierIDFromList,
    categoryIDSentToAddOrderSecond:selectedCategoryIDFromList,
    orderDateSentToAddOrderSecond:startDate,
    orderForSentToAddOrderSecond:selectedOrderForValue,
    typeOfOrderSentToAddOrderSecond:selectedTypeOfOrderValue,
  });



  //combineImagesArray = [];    
//singleFileButArray=[]; 
//alert('singleFileButArray made blank in navigation of AddOrderScreenSecond...');
 };


 const gotoPlatinumAddOrderSecondPage = () =>
 {



   if(arrayOfimagesCapturedUsingCamera?.length>0)
      {
        combineImagesArray.push(...arrayOfimagesCapturedUsingCamera);
      }


      if(singleFileButArray?.length>0)
      {
      combineImagesArray.push(...singleFileButArray);     
      }

    
      
      
      
      /*This is useful 
      
      
      
      if(combineImagesArray?.length>0)
      {
       alert('Length of combineImagesArray Captured Using Camera is:'+combineImagesArray.length);  
      } */

//console.log('Information: '+collectionOfAllImagesToSendToSecondEditScreen);

      /* uploadImage(orderIDGot);*/
      /* 
      Now while uploading our new selected images from our Gallery and Camera, remember that we do not have to send our itemImage which we have fetched from our Server while fetching full Order list data, because , the API of our JewelCart EditOrder require only new Images which we want to add in our Server data, and when we will call API to Edit our Order list data, then the API will take only new images which we want to add to our already present images in Server and the API will just add our new Images to our Old previously present image in Server, Note that the Edit order API will not replace our Old image of that Order with our New images selected using Camera or Gallery, it will just add new image with old images.
       */
     
     /* This is useful
     
     
     alert('orderIDSentToEditOrder which is being sent to EditOrderScreenSecond is:'+orderIDGotWhileCallingGoToEditOrderSecondPage); */



    //alert('orderIDSentToEditOrder which is being sent to EditOrderScreenSecond is:'+orderIDSentToEditOrder);    


     /* alert(   
      'orderIDSentToEditOrder which is being sent to EditOrderScreenSecond is:'+orderIDSentToEditOrder+'\n'+
      
      'Category ID which is being sent to Edit Order Second Screen is:'+selectedCategoryIDFromList  
    ); */



  navigation.navigate('AddPlatinumOrderScreenSecond', {
   accessTokenSentToPlatinumAddOrderScreenSecond: accessTokenSentToAddOrderScreen,
   //itemImageSentToPlatinumAddOrderSecond: singleFileButArray,
   combineImagesFromGalleryAndCamera:combineImagesArray,
   customerIDSentToPlatinumAddOrderSecond:selectedCustomerIDFromList,
    supplierIDSentToPlatinumAddOrderSecond:selectedSupplierIDFromList,
    categoryIDSentToPlatinumAddOrderSecond:selectedCategoryIDFromList,
    orderDateSentToPlatinumAddOrderSecond:startDate,
    orderForSentToPlatinumAddOrderSecond:selectedOrderForValue,
    typeOfOrderSentToPlatinumAddOrderSecond:selectedTypeOfOrderValue,
  });
 };




 if (hasGalleryPermission === false)
 {
  return <Text>No Access To Internal Storage</Text>;
 }

 const gotoHomeScreen = () =>
 {
  navigation.navigate('HomeScreen', {
   accessTokenKey: accessTokenSentToAddOrderScreen,
  });
 };




 /* const uploadImage = async () => {
    
//alert('Order ID is:'+orderIDToEdit);
    
    
    // Check if any file is selected or not
    
     // alert('Single file is not null');
     
      const data = new FormData();
      
      for(i=0;i<singleFileButArray.length;i++){
        //alert('For Image number:'+i+'\n'+'File uri is:'+singleFileButArray[i].uri+'\n'+'File Name is:'+singleFileButArray[i].name+'\n'+'File mimeType is:'+singleFileButArray[i].mimeType);    


      data.append('image_file[]',

        {
        uri: singleFileButArray[i].uri,
        name: singleFileButArray[i].name,
        type: singleFileButArray[i].mimeType,
      }
       );     
      }
      
      



      data.append('customer_id','1');           
      

      //if(callEditOrderAPIToUploadImage=='NOW'){
      try {
        let res = await fetch('https://rajeshwersoftsolution.com/jwelcart/api/insert_order', {
          method: 'post',
          body: data,
          headers: {
             Authorization: 'Bearer ' +accessTokenSentToAddOrderScreen,
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          timeout: 5000,
        });

        let result = await res.json();
        console.log('result', result);
        alert('Info after Uploading Image:'+result.message); 
        
      } catch (error) {
        
        console.log('error upload', error);
      }

      
         
    
    
  }; */







































  




 




  





  

 return (

   
  <SafeAreaView style={ { flex: 1 } }>

  
{openFullScreenCameraTrueOrFalse==true?
                  (
                  <>
                  <View style={{width:width,height:height+responsiveHeight(5)}}>
                  <CameraFullScreen
                  singleFileButArrayProps={singleFileButArray}
                  openFullScreenCameraTrueOrFalseProps={setopenFullScreenCameraTrueOrFalse}

                  />
                  </View>   
                  </>
                  ):
                  null
                  }


   <StatusBar backgroundColor="#283E65" barStyle={'light-content'} />
  { /* <AllUITogether show="ImageBackgroundWhichContainsChildren">
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
            //height: responsiveHeight(29),
            //marginBottom:responsiveHeight(-30),         
          } }/>



   

   {/*View which will hold back arrow image and EDIT ORDER text starts here  */}
                <View style={{
                  
                  //marginTop:responsiveHeight(-0.5),
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
                   {/* <AllUITogether
                      show={'AntIconBtn'}
                      dothisProps={gotoHomeScreen}
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
                        dothisProps={gotoHomeScreen}    
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
      height:responsiveHeight(93),    
      //height:height,
      width: responsiveWidth(91),
      borderRadius: responsiveWidth(6),
      elevation: responsiveWidth(1),
      marginTop: responsiveHeight(1),
      //marginBottom:responsiveHeight(40),      
      //marginLeft: responsiveWidth(7.5),
    }}>

    <ScrollView
      keyboardShouldPersistTaps="always"
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}
      bounces={false}>


       {/*Our UI in Card starts here  */}

    {/*Add Images section starts here  */}




          


			<View>
			<Text
            style={ {
              marginLeft: responsiveWidth(46),
              fontSize: responsiveFontSize(2.5),
              color: '#283E65',
              fontFamily: 'raleway-light',
            } }
            onPress={ () =>
              setcameraOrGalleryOptionsModal(!cameraOrGalleryOptionsModal)
            }>
            { singleFileButArray?.length > 0 ? 'Add More'
                      : arrayOfimagesCapturedUsingCamera?.length > 0 ? 'Add More'
                        : 'Add Images' }
          </Text>

          <View
            style={ { flexDirection: 'row', marginTop: responsiveHeight(3.5) } }>
            <ScrollView horizontal={ true }>

            {singleFileButArray?.length > 0 ?
            (
              <>
              <FlatList
                data={singleFileButArray}
                horizontal
                showsHorizontalScrollIndicator={ false }
                renderItem={ ({ item, index }) => (
                  <Image
                    source={ { uri: singleFileButArray[index].uri} }
                    style={ {
                      borderRadius: responsiveWidth(2),
                      width: responsiveWidth(18),
                      height: responsiveHeight(13),
                      marginLeft: responsiveWidth(2),
                      marginRight: responsiveWidth(2),
                      marginBottom: responsiveHeight(1.9),
                    } }
                  />
                ) }   
                //numColumns={2}
                keyExtractor={ (item) => item.uri }
              //contentContainerStyle={{ marginVertical: 50, paddingBottom: 100 }}
              />

              {/* <FlatList
                data={arrayOfimagesCapturedUsingCamera}
                horizontal
                showsHorizontalScrollIndicator={ false }
                renderItem={ ({ item, index }) => (
                  <Image
                    source={ { uri: arrayOfimagesCapturedUsingCamera[index].uri } }
                    style={ {
                      borderRadius: responsiveWidth(2),
                      width: responsiveWidth(18),
                      height: responsiveHeight(13),
                      marginLeft: responsiveWidth(2),
                      marginRight: responsiveWidth(2),
                      marginBottom: responsiveHeight(1.9),
                    } }
                  />
                ) }   
               
                keyExtractor={ (item) => item.uri }
              //contentContainerStyle={{ marginVertical: 50, paddingBottom: 100 }}
              /> */}
               
                  </>
            )
                  :arrayOfimagesCapturedUsingCamera?.length > 0 ?
                  (
              <>

              <FlatList
                data={singleFileButArray}
                horizontal
                showsHorizontalScrollIndicator={ false }
                renderItem={ ({ item, index }) => (
                  <Image
                    source={ { uri: singleFileButArray[index].uri} }
                    style={ {
                      borderRadius: responsiveWidth(2),
                      width: responsiveWidth(18),
                      height: responsiveHeight(13),
                      marginLeft: responsiveWidth(2),
                      marginRight: responsiveWidth(2),
                      marginBottom: responsiveHeight(1.9),
                    } }
                  />
                ) }   
                //numColumns={2}
                keyExtractor={ (item) => item.uri }
              //contentContainerStyle={{ marginVertical: 50, paddingBottom: 100 }}
              />

              {/* <FlatList
                data={arrayOfimagesCapturedUsingCamera}
                horizontal
                showsHorizontalScrollIndicator={ false }
                renderItem={ ({ item, index }) => (
                  <Image
                    source={ { uri: arrayOfimagesCapturedUsingCamera[index].uri } }
                    style={ {
                      borderRadius: responsiveWidth(2),
                      width: responsiveWidth(18),
                      height: responsiveHeight(13),
                      marginLeft: responsiveWidth(2),
                      marginRight: responsiveWidth(2),
                      marginBottom: responsiveHeight(1.9),
                    } }
                  />
                ) }   
               
                keyExtractor={ (item) => item.uri }
              //contentContainerStyle={{ marginVertical: 50, paddingBottom: 100 }}
              /> */}
               
                  </>
            )
            :
            (
               <>
               <TouchableOpacity
                    onPress={ () => setcameraOrGalleryOptionsModal(true)}>    
                     <View style={ { flexDirection: 'row' } }>
                      <Image
                        source={ require('../images/threeGalleryIcon.png') }
                        style={ {
                          borderRadius: responsiveWidth(2),
                          width: responsiveWidth(80),
                          height: responsiveHeight(13),
                          marginLeft: responsiveWidth(0),
                          marginRight: responsiveWidth(2),
                          marginBottom: responsiveHeight(1.9),
                        } }
                      />



                    </View>
                  </TouchableOpacity>
                 
               </> 

            )
                  }
                  
                  </ScrollView>
                  </View>     



                  

                  {/* Modal for Select Camera or Gallery starts here */ }
          <Modal
            transparent={ true }
            visible={ cameraOrGalleryOptionsModal }
            onRequestClose={ () => setcameraOrGalleryOptionsModal(false) }>
            <View
              style={ {
                backgroundColor: 'rgba(0,0,0,0.4)',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              } }>
              <View
                style={ {
                  borderRadius: responsiveWidth(1),
                  backgroundColor: 'white',
                  padding: 13,
                  margin: 40,
                  height: responsiveHeight(22),
                  width: responsiveWidth(80),
                } }>
                <Text style={ styles.textCameraOrGalleryModalStyle }>
                  Camera/Gallery
                </Text>

                {/*Camera Text With Image in one row starts here  */ }

                <View
                  style={ {
                    flexDirection: 'row',
                    //justifyContent: 'center',
                    //alignSelf: 'center',
                    marginLeft: responsiveWidth(2),
                  } }>
                  <Image
                    source={ require('../images/CameraCircle.png') }
                    style={ {
                      height: responsiveHeight(3),
                      width: responsiveWidth(6),
                      marginTop: responsiveHeight(1),
                    } }
                  />

                  <Text
                    style={ styles.textCameraOrGalleryModalStyle }
                    onPress={ () =>
                    {

                      openFullScreenCamera();
                      //props.openCameraFullScreenprops();
                      //showMyCamera();
                      setcameraOrGalleryOptionsModal(
                        !cameraOrGalleryOptionsModal
                      );
                      //props.setdoneAddingImageProps(props.doneAddingImageprops);
                    } }>
                    Camera
                  </Text>
                </View>
                {/*Text With Image in one row ends here  */ }

                {/*Gallery Text With Image second in one row starts here  */ }

                <View
                  style={ {
                    //flex: 1,
                    flexDirection: 'row',
                    //justifyContent: 'center',
                    //alignSelf: 'center',
                    marginLeft: responsiveWidth(2),
                  } }>
                  <Image
                    source={ require('../images/selectGalleryIcon.png') }
                    style={ {
                      height: responsiveHeight(4),
                      width: responsiveWidth(6),
                      //marginTop:responsiveHeight(1),
                    } }
                  />

                  <Text
                    style={ styles.textCameraOrGalleryModalStyle }
                    onPress={ () =>
                    {
                      //selectFile();
                      //pickImage();
                      // props.openDocumentPickerprops();
                      setcameraOrGalleryOptionsModal(
                        !cameraOrGalleryOptionsModal
                      );
                      //props.setdoneAddingImageProps(props.doneAddingImageprops);
                    } }>
                    Gallery
                  </Text>
                </View>
                {/*Text With Image second in one row ends here  */ }
              </View>
            </View>
          </Modal>
          {/* Modal for Select Camera or Gallery ends here */ }
                  </View>




           {/* <AllUITogether
                    show={ "AddImages" }
                    textToShowProps={ singleFileButArray?.length > 0 ? 'Add More'
                      : arrayOfimagesCapturedUsingCamera?.length > 0 ? 'Add More'
                        : 'Add Images' }
                    
                    openDocumentPickerprops={selectFile}
                    openCameraFullScreenprops={openFullScreenCamera}
                    galleryImagesprops={singleFileButArray}
                    combineImagesArrayprops={combineImagesArray}
                    



                  />


                  <View style={{flexDirection:'row'}}>

                  


                

             





                    
                   
              
              </View> */}

            
        {/*Add Images section ends here  */}

          {/* Drop Down for Customer List starts here */ }

         <View>
          <Text style={ [styles.dropDownTopSideLabels,{marginTop:responsiveHeight(-1.5)}] }>
           Select Customer
          </Text>

          <AnimatedTextInputFile
           show={ 'AnimatedTextInputDDL' }
           ddlWidth={ responsiveWidth(81) }
           heightOfDDLprops={responsiveHeight(7)} 
          marginTopPropsForDDL={responsiveHeight(1)}    
            widthForTextInDDLprops={responsiveWidth(81)}
           ddlTextmarginLeft={ responsiveWidth(2) }
           ddlDownArrowIconmarginLeft={ responsiveWidth(22) }
           ddlInsideTextFontSize={ responsiveFontSize(2) }
           ddlInsideTextFontName={ 'raleway-light' }
           ddlBoarderColor={ '#8e8e8e' }
           ddlboarderThickness={ responsiveWidth(0.15) }
           ddlInsideTextFontColor={ '#2D2D2D' }
           largeDropDownListTopLabel={ 'Select Customer' }
           itemIconPropslabel={ require('../images/customer_whiteR.png') }
            dropdownIconProps={require('../images/dropdowncurved.png')}
           // heightOfDDLprops={7}
            
           largeDropDownListOnPressCallThisAPI={ 'manage_customer' }
           actionprops={ 'search' }
           selectSetter={ 'ForCustomer' }
           //setterPathToFetchAPIResult={customer}
           modalToplabelProps={ 'Select Customer' }
           accessTokenprops={ logedInPersonAccessToken }
           startprops={ '0' }
           limitprops={ '100000' }
           state_idprops={ '' }
           city_idprops={ '' }
           search_allprops={ '' }
           sortby_nameprops={ 'desc' }
           mobile_noprops={ '' }
           passwordprops={ '' }
           selectedCustomerFromListProps={ selectedCustomerFromListInAddOrderScreen }
            setselectedCustomerFromListProps={ setselectedCustomerFromListInAddOrderScreen }
          
          
           selectedCustomerIDFromListProps={selectedCustomerIDFromList}
            setselectedCustomerIDFromListProps={setselectedCustomerIDFromList}
            
            //marginTopPropsForDDL={1}
          tintColorForDDLIconLeft={'#283E65'}
          />
         </View>

         {/* DropDown for Customer List Ends Here */ }

         {/* Drop Down for Supplier List starts here */ }

         <View>
          <Text style={ styles.dropDownTopSideLabels }>
           Select Supplier
          </Text>

          <AnimatedTextInputFile
           show={ 'AnimatedTextInputDDL' }
           ddlWidth={ responsiveWidth(81) }
           heightOfDDLprops={responsiveHeight(7)} 
          marginTopPropsForDDL={responsiveHeight(1)}    
          widthForTextInDDLprops={responsiveWidth(81)}
           ddlboarderThickness={ responsiveWidth(0.15) }
           ddlTextmarginLeft={ responsiveWidth(2) }
           ddlDownArrowIconmarginLeft={ responsiveWidth(22) }
           ddlInsideTextFontSize={ responsiveFontSize(2) }
           ddlInsideTextFontName={ 'raleway-light' }
           ddlBoarderColor={ '#8e8e8e' }
           largeDropDownListTopLabel={ 'Select Supplier' }
           itemIconPropslabel={ require('../images/supplier_whiteR.png') }
           dropdownIconProps={require('../images/dropdowncurved.png')}
            //heightOfDDLprops={7}
           ddlInsideTextFontColor={ '#2D2D2D' }
           accessTokenprops={ logedInPersonAccessToken }
           modalToplabelProps={ 'Select Supplier' }
           selectSetter={ 'ForSupplier' }
           largeDropDownListOnPressCallThisAPI={ 'manage_supplier' }
           actionprops={ 'search' }
           startprops={ '0' }
           limitprops={ '100000' }
           state_idprops={ '' }
           city_idprops={ '' }
           search_allprops={ '' }
           sortby_nameprops={ 'desc' }
           mobile_noprops={ '4343' }
           passwordprops={ '34343' }
           selectedSupplierFromListProps={selectedSupplierFromListInAddOrderScreen}
            setselectedSupplierFromListProps={setselectedSupplierFromListInAddOrderScreen}



            selectedSupplierIDFromListProps={selectedSupplierIDFromList}
            setselectedSupplierIDFromListProps={setselectedSupplierIDFromList}
            
            //marginTopPropsForDDL={1}
          tintColorForDDLIconLeft={'#283E65'}
          />
         </View>

         {/* DropDown for Supplier List Ends Here */ }

         {/* Drop Down for Select Category List starts here */ }

         <View>
          <Text style={ styles.dropDownTopSideLabels }>
           Select Category
          </Text>
         </View>

         <AnimatedTextInputFile
          show={ 'AnimatedTextInputDDL' }
          ddlWidth={ responsiveWidth(81) }
          heightOfDDLprops={responsiveHeight(7)} 
          marginTopPropsForDDL={responsiveHeight(1)}    
          widthForTextInDDLprops={responsiveWidth(81)}
          ddlboarderThickness={ responsiveWidth(0.15) }
          dropdownIconProps={require('../images/dropdowncurved.png')}
          ddlTextmarginLeft={ responsiveWidth(2) }
          ddlDownArrowIconmarginLeft={ responsiveWidth(22) }
          ddlInsideTextFontSize={ responsiveFontSize(2) }
          ddlInsideTextFontName={ 'raleway-light' }
          ddlBoarderColor={ '#8e8e8e' }
          largeDropDownListTopLabel={ 'Select Category' }
          itemIconPropslabel={ require('../images/category.png') }
          
          modalToplabelProps={ 'Select Category' }
          ddlInsideTextFontColor={ '#2D2D2D' }
          largeDropDownListOnPressCallThisAPI={ 'category_list' }
          actionprops={ 'search' }
          selectSetter={ 'ForCategory' }
          accessTokenprops={ logedInPersonAccessToken }
          startprops={ '0' }
          limitprops={ '100000' }
          state_idprops={ '' }
          city_idprops={ '' }
          search_allprops={ '' }
          sortby_nameprops={ 'desc' }
          mobile_noprops={ '' }
          passwordprops={ '' }
          selectedCategoryFromListProps={selectedCategoryFromListInAddOrderScreen}
          setselectedCategoryFromListProps={setselectedCategoryFromListInAddOrderScreen}

          selectedCategoryIDFromListProps={selectedCategoryIDFromList}
          setselectedCategoryIDFromListProps={setselectedCategoryIDFromList}


          //marginTopPropsForDDL={1}
          tintColorForDDLIconLeft={'#283E65'}
         />

         {/* DropDown for Select Category List Ends Here */ }

         {/* Code to include Order Date , date selector and Order for text and Client drop down in one row starts here */ }

         <View
          style={ {
           flexDirection: 'row',
           marginTop: responsiveHeight(0),
          } }>
          {/* Code to include Order Date , date selector starts here */ }
          <View>
           <Text style={ styles.dropDownTopSideLabels }>
            Order Date
           </Text>

           <TouchableOpacity style={ styles.inputBtn }>
            <Text
             style={ {
              fontSize: responsiveHeight(1.9),
              fontFamily: 'raleway-light',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
             } }>
             { startDate }
            </Text>
           </TouchableOpacity>
          </View>
          {/* Code to include Order Date , date selector ends here */ }

          {/* Code to include Order for text and Client drop down starts here */ }
          <View
           style={ {
            //backgroundColor:'blue',
            marginLeft: responsiveWidth(2.5),
            marginTop:responsiveHeight(0.5),
           } }>
            <Text style={ styles.dropDownTopSideLabels }>
                      Order For
                      </Text>
           <AllUITogether
            show={ 'ddLforlocalData' }
            fetchLocalDataDDLDownArrowMarginLeft={ responsiveWidth(
             -18
            ) }
            fetchLocalDataDDLWidth={ responsiveWidth(38.5) }
            fetchLocalDataDDLTextmarginLeft={ responsiveWidth(-8) }
            //largeDropDownListTopLabel={ 'Order For' }
            itemIconPropslabel={ null }
            itemNamePropslabel={ 'Normal' }
            fontForDDLTextInsideModal={ 'raleway-medium' }
            fontForDDLInsideText={ 'raleway-light' }
            dataForFlatListprops={ data }
            setterMethodInDropDownTextArea={
             setselectedOrderForValue
            }
            valueForDropDownToShowInText={ selectedOrderForValue }
            marginbetweenTopLabelandTouchableOpactiy={0.9}    
            largeDropDownModalMarginTopProps={ responsiveHeight(81) }
            largeDropDownModalMarginLeftProps={ responsiveWidth(48) }
            largeDropDownModalHeightProps={ responsiveHeight(15) }
            largeDropDownModalWidthProps={ responsiveWidth(48) }
            borderRadiusPropsForDDLModal={0}
           />
          </View>
          {/* Code to include Order for text and Client drop down ends here */ }
         </View>

         {/* Code to include Order Date , date selector and Order for text and Client drop down in one row ends here */ }

         {/* DropDown for Type of Order and its List starts here */ }

         <View>
         <Text style={ styles.dropDownTopSideLabels }>
                      Type of Order
                      </Text>
          <AllUITogether
           show={ 'ddLforlocalData' }
           //largeDropDownListTopLabel={ 'Type of Order' }
           fetchLocalDataDDLDownArrowMarginLeft={ responsiveWidth(22) }
           fetchLocalDataDDLWidth={ responsiveWidth(81) }
           fetchLocalDataDDLTextmarginLeft={ responsiveWidth(2) }
           itemIconPropslabel={ require('../images/orderTypeBlue.png') }
           itemNamePropslabel={ 'Type of Order' }
           fontForDDLTextInsideModal={ 'raleway-medium' }
           fontForDDLInsideText={ 'raleway-light' }
           dataForFlatListprops={ dataForTypeOfOrder }
           setterMethodInDropDownTextArea={
            setSelectedTypeOfOrderValue
           }
           valueForDropDownToShowInText={ selectedTypeOfOrderValue }
           //Next time when we use this Reusable component, give all the
           //required numberic parameter in props using
           //responssiveHeight and responsiveWidth.
           marginbetweenTopLabelandTouchableOpactiy={0.9}
           largeDropDownModalMarginTopProps={ 560 }
           largeDropDownModalMarginLeftProps={ 18 }
           largeDropDownModalHeightProps={ 150 }

           largeDropDownModalWidthProps={ 324 }
            ddlForLocalDataIconHeightProps={23}
            ddlForLocalDataIconWidthProps={30}
            borderRadiusPropsForDDLModal={0}
          />
         </View>

         {/* DropDown for Type of Order and its List Ends Here */ }
         <View style={ { 
           marginLeft: responsiveWidth(1),
           marginTop: responsiveHeight(2), 
           //backgroundColor:'purple',
         //marginBottom:responsiveHeight(10), 
         } }>


          <AllUITogether
            show={'ThickRoundedBtn'}
            widthPropsForthickbtn={responsiveWidth(81)}  
            marginLeftPropsForthickbtn={responsiveWidth(0)}
            marginTopPropsForthickbtn={responsiveHeight(1)}
            heightPropsForthickbtn={responsiveHeight(8)}
            backgroundColorPropsForthickbtn={'#283E65'}
            borderRadiusPropsForthickbtn={responsiveWidth(10)}
            //thickbtnOnpressprops={gotoPlatinumAddOrderSecondPage}
            //thickbtnOnpressprops={gotoAddOrderSecondPage}
            thickbtnOnpressprops={chkAllFieldsEnteredInAddOrderScreen}
            thickbtnTitleprops={'NEXT'}
            fontFamilyPropsForthickbtn={'raleway-semibold'}
            fontcolorPropsForthickbtn={'white'}
            fontSizePropsForthickbtn={responsiveFontSize(2.2)}   
            paddingForthickbtn={responsiveHeight(2)}
            />
            </View>
      
                    
                    
                           
    
    {/*Our UI in Card endss here  */}
    
    </ScrollView>
    </Card>
  
  </ScrollView>
  </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 dropDownTopSideLabels: {
  color: 'black',
  marginTop:responsiveHeight(0.5),
  //#5A5A5A
  fontSize: responsiveFontSize(1.9),
  fontFamily: 'raleway-light',
  //backgroundColor:'red',
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
 textCameraOrGalleryModalStyle: {
    fontSize: responsiveWidth(5),
    fontFamily: 'raleway-regular',
    marginLeft: responsiveWidth(2),

    marginBottom: responsiveHeight(2.5),
  },

});

export default AddOrderScreen;    
