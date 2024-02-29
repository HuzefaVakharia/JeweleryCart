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
  SafeAreaView,
  TouchableHighlight,
  PermissionsAndroid,
  Animated,
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
  Platform,
  Button,
  //TextInput,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
//import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { Camera } from 'expo-camera';
import CameraFullScreen from './CameraFullScreen';
//import * as MediaLibrary from 'expo-media-library';
//import { shareAsync } from 'expo-sharing';
import { getFormatedDate } from 'react-native-modern-datepicker';
import AllUITogether from '../components/AllUITogether';
//import * as DocumentPicker from 'expo-document-picker';
import AnimatedTextInputFile from '../components/AnimatedTextInputFile';
import { useRoute } from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import { Card } from '@rneui/themed';

let { height, width } = Dimensions.get('window');

const typeOfOrderArray = [
  { type: 'Type of Order' },
  { type: 'Gold' },
  { type: 'Platinum' },
];

const orderForArray = [{ type: 'Client' }, { type: 'Stock' }];


let arrayOfImages = [];
let singleFileButArrayForEdit = [];
let combineImagesArray = [];
//let imageName = '';
let imageList = [];

let i = 0;

const EditOrderScreen = ({ navigation }) => {
  const route = useRoute();
  const {
    accessTokenSentToEditOrder,
    orderIDSentToEditOrder,
    itemImage,
    orderDateSentFromOrderScreen,
    nameToBeEditedForEditOrder,
    categorynameReceivedFromOrderScreen,
    typeOfOrderFromOrderScreen,
    //singleFileButArrayForEditKey,
    customerIDSentToEditOrder,
    supplierIDSentToEditOrder,
    categoryIDSentToEditOrder,
    partydiamondFromOrderScreen,
    partystoneFromOrderScreen,


    itemNameReceivedFromOrderScreen,




    colorIDSentToEditOrder,
    colorNameSentToEditOrder,

    carretIDSentToEditOrder,
    carretNameSentToEditOrder,
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
  } = route.params;

  let imageName = '';

  let imageBaseAPI = 'https://rajeshwersoftsolution.com/jwelcart/public';
  var userOrderDataGotFromOrderScreen = {

    OrderID: orderIDSentToEditOrder,


    ItemName: itemNameReceivedFromOrderScreen,
    Qty: qtyReceivedFromOrderScreen?.toString(),
    Size: sizeReceivedFromOrderScreen,
    Narration: narrationReceivedFromOrderScreen,
    DeliveryDate: deliveryDateReceivedFromOrderScreen,
    Priority: priorityReceivedFromOrderScreen,
    DesignNo: designNoReceivedFromOrderScreen,
    Broadness: broadnessReceivedFromOrderScreen,
    Diamondweight: diamondweightReceivedFromOrderScreen,
    Diamondquality: diamondqualityReceivedFromOrderScreen,
    Diamondpcs: diamondpcsReceivedFromOrderScreen,
    Partydiamond: partydiamondReceivedFromOrderScreen,
    Stoneweight: stoneweightReceivedFromOrderScreen,
    Stonequality: stonequalityReceivedFromOrderScreen,
    Stonepcs: stonepcsReceivedFromOrderScreen,
    Partystone: partystoneReceivedFromOrderScreen,
    Ptpolish: ptpolishReceivedFromOrderScreen,
    Kt18polish: kt18polishReceivedFromOrderScreen,
    Engravingdetails: engravingdetailsReceivedFromOrderScreen,
    //ItemName:orderforFromOrderScreenReceivedFromOrderScreen,
    //ItemName:suppliernameReceivedFromOrderScreen,
    Hallmark: hallmarkReceivedFromOrderScreen,


  }




  const storeEditOrderScreenSecondAndPlatinumScreenDataInAsyncStorage = async () => {

    AsyncStorage.setItem('EditOrderDataForSecondPageDataAndPlatinumPage', JSON.stringify(userOrderDataGotFromOrderScreen));
    //alert('storeEditOrderScreenSecondAndPlatinumScreenDataInAsyncStorage done');
  }







  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('NewRegisterationFirstPageData');
      await AsyncStorage.removeItem('NewRegisterationSecondPageData');
      //navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  }
  const [isLoadingForGalleryImages, setIsLoadingForGalleryImages] =
    useState(false);

  const [isCameraButtonClicked, setisCameraButtonClicked] =
    useState(false);
  //setisCameraButtonClicked

  let [doneAddingImage, setdoneAddingImage] = useState('blank');

  const [showSelectedImagesFlatList, setShowSelectedImagesFlatList] = useState(true);

  const [singleFile, setSingleFile] = useState(null);
  const [singleFileTwo, setSingleFileTwo] = useState('');

  const [openFullScreenCameraTrueOrFalse, setopenFullScreenCameraTrueOrFalse] = useState(false);
  const [filePath, setFilePath] = useState({});
  //const [images, setImages] = useState([]);




  let cameraRef = useRef();
  const [previousImage, setPreviousImage] = useState(null);
  const [previousImages, setPreviousImages] = useState([]);
  const [cameraOrGalleryOptionsModal, setcameraOrGalleryOptionsModal] =
    useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  /* Using MediaLibrary we can save captured photos from camera to our gallery. */

  const [
    orderDateReveivedFromOrderScreen,
    setOrderDateReveivedFromOrderScreen,
  ] = useState('');

  const [collectionOfAllImagesToSendToSecondEditScreen, setCollectionOfAllImagesToSendToSecondEditScreen] = useState([]);


  const [imageGotFromOrderScreen, setImageGotFromOrderScreen] = useState('');
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);

  const [imageSecond, setImageSecond] = useState(null);



  const [imageThird, setImageThird] = useState(null);


  const [imageFourth, setImageFourth] = useState(null);

  /* const today = new Date();
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false); // open close modal
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    'YYYY/MM/DD'
  );

  const [startedDate, setStartedDate] = useState('12/12/2023'); */

  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);


  let [result, setResult] = useState([]);

  const [logedInPersonAccessToken, setLogedInPersonAccessToken] = useState('');
  const [dataForTypeOfOrder, setDataForTypeOfOrder] =
    useState(typeOfOrderArray);
  const [data, setData] = useState(orderForArray);
  const [selectedTypeOfOrderValue, setSelectedTypeOfOrderValue] =
    useState('Type Of Order');
  //const [selectedOrderForValue, setselectedOrderForValue] = useState('Client');
  const [selectedOrderForValue, setselectedOrderForValue] = useState(orderforFromOrderScreenReceivedFromOrderScreen);

  const [selectedCustomerFromList, setselectedCustomerFromList] = useState('');
  const [selectedCustomerIDFromList, setselectedCustomerIDFromList] = useState(customerIDSentToEditOrder);

  /* 
  
  selectedCustomerIDFromList
   */



  let singleImage = '';


  const [selectedSupplierFromList, setselectedSupplierFromList] = useState(suppliernameReceivedFromOrderScreen);
  const [selectedSupplierIDFromList, setselectedSupplierIDFromList] = useState(supplierIDSentToEditOrder);




  const [selectedCategoryFromList, setselectedCategoryFromList] = useState(categorynameReceivedFromOrderScreen);
  const [selectedCategoryIDFromList, setselectedCategoryIDFromList] = useState(categoryIDSentToEditOrder);


  let callEditOrderAPIToUploadImage = 'WAIT';




  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    //alert('Order ID Received from Order Screen is:'+orderIDSentToEditOrder);

    //alert('Carret ID Received is:'+carretIDSentToEditOrder);



    setLogedInPersonAccessToken(accessTokenSentToEditOrder);
    setOrderDateReveivedFromOrderScreen(orderDateSentFromOrderScreen);
    setSelectedTypeOfOrderValue(typeOfOrderFromOrderScreen);
    setselectedCustomerFromList(nameToBeEditedForEditOrder);
    setImageGotFromOrderScreen(itemImage);


    requestPermission();
    // const { accessTokenSentToEditOrder, itemImage,orderDateSentFromOrderScreen,nameToBeEditedForEditOrder,typeOfOrderFromOrderScreen } = route.params;
  }, []);

  /*  useEffect(() => {
     //getData();
     //alert('Order ID selected to edit is:'+orderIDSentToEditOrder);
     console.log('Length of Image Array got from Order Screen is:'+itemImage.length);
     storeEditOrderScreenSecondAndPlatinumScreenDataInAsyncStorage();
     setLogedInPersonAccessToken(accessTokenSentToEditOrder);
     setOrderDateReveivedFromOrderScreen(orderDateSentFromOrderScreen);
     setSelectedTypeOfOrderValue(typeOfOrderFromOrderScreen);
     setselectedCustomerFromList(nameToBeEditedForEditOrder);
 
     
 
 
 
     setCollectionOfAllImagesToSendToSecondEditScreen(itemImage);
     console.log('Url is:'+itemImage[0].image);    
     setselectedSupplierFromList(suppliernameReceivedFromOrderScreen);
     // const { accessTokenSentToEditOrder, itemImage,orderDateSentFromOrderScreen,nameToBeEditedForEditOrder,typeOfOrderFromOrderScreen } = route.params;
   }, []); */

  useEffect(() => {
    //alert('Array Length of Images captured using camera is...');       
    //getEditOrderImagesData();

    /*  if(arrayOfimagesCapturedUsingCamera?.length>0){
      singleFileButArrayForEdit.push(arrayOfimagesCapturedUsingCamera);
    }   */


    combineImagesArray = [];
    singleFileButArrayForEdit = [];

    //alert('singleFileButArrayForEdit made blank in useEffect of AddOrderScreen file...');

  }, []);




  /* if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  } */

  /* let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  }; */






  /* const openFullSizeCameraToTakeImageOnScreen=()=>{
     return (
    <Camera style={styles.containerStyleForFullScreenCamera} ref={cameraRef}>
      <View style={styles.buttonContainerStyleForFullScreenCamera}>
        <Button title="Take Pic" onPress={takePic} />
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
  } */


  /* useEffect(() =>
  {
    setSelectedTypeOfOrderValue(typeOfOrderFromOrderScreen);
  }, []); */

  //orderDateSentToEditOrderSecond:xyz

  //const gotoEditOrderSecondPage = (orderIDGot,arrayOfimagesCapturedUsingCamera,singleFileButArrayForEdit) => {

  //const gotoEditOrderSecondPage=(orderIDGotWhileCallingGoToEditOrderSecondPage)=>{

  const gotoEditOrderSecondPage = () => {

    //alert('Length of Images Array inside imageList is:'+imageList.length);

    /* alert('Length of images Captured Using Camera is:' + arrayOfimagesCapturedUsingCamera?.length + '\n' +
      'Length of Images from Gallery Directly is:' + singleFileButArrayForEdit?.length
    )

    if (combineImagesArray?.length > 0) {
      combineImagesArray.push(...arrayOfimagesCapturedUsingCamera);
    }


    if (combineImagesArray?.length > 0) {
      combineImagesArray.push(...singleFileButArrayForEdit);
    }





    if (combineImagesArray?.length > 0) {
      alert('Length of combineImagesArray Captured Using Camera is:' + combineImagesArray.length);
    }
 */
    //console.log('Information: '+collectionOfAllImagesToSendToSecondEditScreen);

    /* uploadImage(orderIDGot);*/
    /* 
    Now while uploading our new selected images from our Gallery and Camera, remember that we do not have to send our itemImage which we have fetched from our Server while fetching full Order list data, because , the API of our JewelCart EditOrder require only new Images which we want to add in our Server data, and when we will call API to Edit our Order list data, then the API will take only new images which we want to add to our already present images in Server and the API will just add our new Images to our Old previously present image in Server, Note that the Edit order API will not replace our Old image of that Order with our New images selected using Camera or Gallery, it will just add new image with old images.
     */

    /* alert('orderIDSentToEditOrder which is being sent to EditOrderScreenSecond is:'+orderIDGotWhileCallingGoToEditOrderSecondPage); */



    /* alert(
      'orderIDSentToEditOrder which is being sent to EditOrderScreenSecond is:' + orderIDSentToEditOrder + '\n' +

      'Quantity which is being sent to Edit Order Second Screen is:' + qtyReceivedFromOrderScreen
    ); */



    navigation.navigate('EditOrderScreenSecond', {
      accessTokenSentToEditOrderSecond: accessTokenSentToEditOrder,
      orderIDSentToEditOrderSecond: orderIDSentToEditOrder,
      //orderIDSentToEditOrderSecond:orderIDGot,        




      //combineImagesFromGalleryAndCamera:combineImagesArray,
      combineImagesFromGalleryAndCamera: imageList,
      itemImageSentToEditOrderSecond: itemImage,



      itemNameSentToEditOrderSecond: itemNameReceivedFromOrderScreen,

      colorIDSentToEditOrderSecond: colorIDSentToEditOrder,
      colorNameSentToEditOrderSecond: colorNameSentToEditOrder,

      carretIDSentToEditOrderSecond: carretIDSentToEditOrder,
      carretNameSentToEditOrderSecond: carretNameSentToEditOrder,


      qtySentToEditOrderSecond: qtyReceivedFromOrderScreen,
      sizeSentToEditOrderSecond: sizeReceivedFromOrderScreen,
      deliveryDateSentToEditOrderSecond: deliveryDateReceivedFromOrderScreen,
      hallmarkSentToEditOrderSecond: hallmarkReceivedFromOrderScreen,
      prioritySentToEditOrderSecond: priorityReceivedFromOrderScreen,
      narrationSentToEditOrderSecond: narrationReceivedFromOrderScreen,




      customerIDSentToEditOrderSecond: selectedCustomerIDFromList,
      supplierIDSentToEditOrderSecond: selectedSupplierIDFromList,
      categoryIDSentToEditOrderSecond: selectedCategoryIDFromList,
      orderDateSentToEditOrderSecond: orderDateReveivedFromOrderScreen,
      orderForSentToEditOrderSecond: selectedOrderForValue,
      typeOfOrderSentToEditOrderSecond: selectedTypeOfOrderValue,
      //fullArrayOfImagesSentToEditOrderSecond:arrayOfImages,
      fullArrayOfImagesSentToEditOrderSecond: singleFileTwo,
      //singleFileButArrayForEditKey:singleFileButArrayForEdit,


      //The image we have to send using props because when we are saving the image got from Order screen inside any useState variable using useEffect then also when we move from second Edit order screen to first edit order screen then image is not comming and it remains blank, so we have to do props drilling for image, and as we have to use our accessToken in second Edit order screen also, so we have to send our accessToken using props, so we have to do props drilling of two things i.e. accessToken and image received from Order screen, but rest of things like .... we can save inside an useState variable using useEffect so that when we come back from second Edit order page to first Edit order page then that value is not seen blank in UI and it get filled using useEffect.
    });


    setShowSelectedImagesFlatList(false);
    combineImagesArray = [];
    singleFileButArrayForEdit = [];


  };







  const requestPermission = async () => {
    try {
      console.log('asking for permission');
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
      if (
        granted['android.permission.CAMERA'] &&
        granted['android.permission.WRITE_EXTERNAL_STORAGE']
      ) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (error) {
      console.log('permission error', error);
    }
  };

  const uploadORActuallyOpenGallery = () => {
    //let imageList = [];
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
      compressImageQuality: 0.8,
      maxFiles: 10,
      mediaType: 'photo',
      //width: 300,
      //height: 400,
      cropping: true,
      //includeBase64: true,
    })
      .then(response => {
        console.log('Response:', JSON.stringify(response));
        /* using above console.log we are displaying all the response that we got after selecting multiple images from gallery
        Then in next step we will iterate each image selected using map() function and for each image we will create an array of name
        imageList and in that array we will put single file name, its path and its data, and after filling this array with single image
        information like filename,path and data we will use setImages() method of useState which will pass this single image
        array information inside images variable, and this images variable will be used in FlatList data to show us preview of
        that single image that we have selected. The very important information which we have to pass inside imageList array is
        path of image which we are passing using synatx path: image.path, and this path is the data which will be used to display
        image in our FlatList. */
        response.map(image => {
          imageList.push({
            //filename: image.filename,
            path: image.path,
            //data: image.data,
            type: image.mime,
          });
          //imageName = image.path;
          //console.log('filename -> ', imageName.slice(30, 50));
          console.log('FileName ->', image.path);
          console.log('path -> ', image.path);
          console.log('Type -> ', image.mime);
        });
        //By below syntax code of setImages(imageList) we will pass all the images data that we select from gallery in our images variable which is going to use in our Flatlist data
        setImages(imageList);

        //console.log(response.path);
        //setFilePath(response.path);
      })
      .catch(error =>
        console.log(
          'Error while executing uploadORActuallyOpenGallery is:',
          error,
        ),
      );
  };










  const gotoEditOrderSecondPageWithPlatinum = () => {
    //uploadImage(orderIDGot);
    /* 
    
    This is useful
    
    alert('Length of images Captured Using Camera is:'+arrayOfimagesCapturedUsingCamera?.length+'\n'+
      'Length of Images from Gallery Directly is:'+singleFileButArrayForEdit?.length
      ) */

    if (arrayOfimagesCapturedUsingCamera?.length > 0) {
      combineImagesArray.push(...arrayOfimagesCapturedUsingCamera);
    }


    if (singleFileButArrayForEdit?.length > 0) {
      combineImagesArray.push(...singleFileButArrayForEdit);
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
      'orderIDSentToEditOrder which is being sent to EditOrderScreenSecond is:' + orderIDSentToEditOrder + '\n' +

      'Category ID which is being sent to Edit Order Second Screen is:' + selectedCategoryIDFromList
    ); */



    navigation.navigate('PlatinumEditOrderTwo', {
      accessTokenSentToPlatinumEditOrderScreen: accessTokenSentToEditOrder,
      itemImageSentToEditOrderSecond: itemImage,
      orderIDSentToPlatinumEditOrderTwo: orderIDSentToEditOrder,
      //combineImagesFromGalleryAndCamera:combineImagesArray,
      combineImagesFromGalleryAndCamera: imageList,
      customerIDSentToPlatinumEditOrderTwo: selectedCustomerIDFromList,
      supplierIDSentToPlatinumEditOrderTwo: selectedSupplierIDFromList,
      categoryIDSentToPlatinumEditOrderTwo: selectedCategoryIDFromList,
      orderDateSentToPlatinumEditOrderTwo: orderDateReveivedFromOrderScreen,
      orderForSentToPlatinumEditOrderTwo: selectedOrderForValue,
      typeOfOrderSentToPlatinumEditOrderTwo: selectedTypeOfOrderValue,
      fullArrayOfImagesSentToPlatinumEditOrderTwo: arrayOfImages,
      partydiamondSentToPlatinumEditOrderTwo: partydiamondReceivedFromOrderScreen,
      partystoneSentToPlatinumEditOrderTwo: partystoneReceivedFromOrderScreen,


      itemNameSentToPlatinumEditOrderTwo: itemNameReceivedFromOrderScreen,



      /*  colorIDSentToPlatinumEditOrderTwo:colorIDFromOrderScreen,
       colorNameSentToPlatinumEditOrderTwo:colorNameFromOrderScreen,
   
       carretIDSentToPlatinumEditOrderTwo:carretIDFromOrderScreen,
       carretNameSentToPlatinumEditOrderTwo:carretNameFromOrderScreen, */



      qtySentToPlatinumEditOrderTwo: qtyReceivedFromOrderScreen,
      sizeSentToPlatinumEditOrderTwo: sizeReceivedFromOrderScreen,
      narrationSentToPlatinumEditOrderTwo: narrationReceivedFromOrderScreen,
      deliveryDateSentToPlatinumEditOrderTwo: deliveryDateReceivedFromOrderScreen,
      prioritySentToPlatinumEditOrderTwo: priorityReceivedFromOrderScreen,
      designNoSentToPlatinumEditOrderTwo: designNoReceivedFromOrderScreen,
      broadnessSentToPlatinumEditOrderTwo: broadnessReceivedFromOrderScreen,
      diamondweightSentToPlatinumEditOrderTwo: diamondweightReceivedFromOrderScreen,
      diamondqualitySentToPlatinumEditOrderTwo: diamondqualityReceivedFromOrderScreen,
      diamondpcsSentToPlatinumEditOrderTwo: diamondpcsReceivedFromOrderScreen,
      //partydiamondSentToPlatinumEditOrderTwo:partydiamondReceivedFromOrderScreen,
      stoneweightSentToPlatinumEditOrderTwo: stoneweightReceivedFromOrderScreen,
      stonequalitySentToPlatinumEditOrderTwo: stonequalityReceivedFromOrderScreen,
      stonepcsSentToPlatinumEditOrderTwo: stonepcsReceivedFromOrderScreen,
      //partystoneSentToPlatinumEditOrderTwo:partystoneReceivedFromOrderScreen,
      ptpolishSentToPlatinumEditOrderTwo: ptpolishReceivedFromOrderScreen,
      kt18polishSentToPlatinumEditOrderTwo: kt18polishReceivedFromOrderScreen,
      engravingdetailsSentToPlatinumEditOrderTwo: engravingdetailsReceivedFromOrderScreen,
      //orderforSentToPlatinumEditOrderTwo:orderforFromOrderScreenReceivedFromOrderScreen,



    });


    setShowSelectedImagesFlatList(false);
    singleFileButArrayForEdit = [];
  };










  /* if (hasGalleryPermission === false) {
    return <Text>No Access To Internal Storage</Text>;
  }*/

  const gotoOrderScreen = () => {
    navigation.navigate('Order', {
      accessTokenSentToOrderScreen: accessTokenSentToEditOrder,
    });
    singleFileButArrayForEdit = [];
    //arrayOfimagesCapturedUsingCamera=[];

  };




  const uploadImage = async (orderIDToEdit) => {

    //alert('Order ID is:' + orderIDToEdit);


    // Check if any file is selected or not

    // alert('Single file is not null');
    // If file selected then create FormData
    const data = new FormData();

    for (let i = 0; i < images.length; i++) {
      /* alert(
        'For Image number:' +
        i +
        '\n' +
        'File uri is:' +
        images[i].path +
        '\n' +
        'File Name is:' +
        images[i].path +
        '\n' +
        'File mimeType is:' +
        images[i].type,
      ); */
      data.append(
        'image_file[]',

        {
          uri: images[i].path,
          type: images[i].type,
          name: images[i].path,
        },
      );
    }


    /* for(i=0;i<singleFileButArrayForEdit.length;i++){
          


    data.append('image_file[]',

      {
      uri: singleFileButArrayForEdit[i].uri,
      name: singleFileButArrayForEdit[i].name,
      type: singleFileButArrayForEdit[i].mimeType,
    }
     );     
    } */







    data.append('order_id', orderIDToEdit);


    //if(callEditOrderAPIToUploadImage=='NOW'){
    try {
      let res = await fetch('https://rajeshwersoftsolution.com/jwelcart/api/edit_order', {
        method: 'post',
        body: data,
        headers: {
          Authorization: 'Bearer ' + accessTokenSentToEditOrder,
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        timeout: 5000,
      });

      let result = await res.json();
      console.log('result', result);
      //alert('Info after Uploading Image:' + result.message);

    } catch (error) {

      console.log('error upload', error);
    }

    /* }else{
      alert('callEditOrderAPIToUploadImage useState variable is on WAIT');
    } */



  };



































































  const getEditOrderImagesData = () => {
    try {
      AsyncStorage.getItem('imagesForEditOrderScreen').then((value) => {
        if (value != null) {
          let user = JSON.parse(value);
          setPreviousImages(user.GalleryImages);
          setPreviousImage(user.CameraImage);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };




  const openFullScreenCamera = () => {


    setopenFullScreenCameraTrueOrFalse(true);
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


























  return (
    <SafeAreaView style={{ flex: 1 }}>

      {openFullScreenCameraTrueOrFalse == true ?
        (
          <>
            <View style={{ width: width, height: height + responsiveHeight(5) }}>
              <CameraFullScreen
                singleFileButArrayProps={singleFileButArrayForEdit}
                openFullScreenCameraTrueOrFalseProps={setopenFullScreenCameraTrueOrFalse}

              />
            </View>
          </>
        ) :
        null
      }




      <StatusBar backgroundColor="#283E65" barStyle={'light-content'} />
      {/* <AllUITogether show="ImageBackgroundWhichContainsChildren"></AllUITogether> */}
      <ImageBackground
        source={require('../images/background.png')}
        resizeMode="cover"
        style={{
          marginTop: responsiveHeight(-1),

          //When using this code for making apk just uncomment this above marginTop:responsiveHeight(-5)
          //because this marginTop: responsiveHeight(-5), is perfect for VSCode but not perfect for
          //expo snake
          height: responsiveHeight(35),

          //marginBottom:responsiveHeight(-30),         
        }} />

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
              dothisProps={gotoOrderScreen}
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
              dothisProps={gotoOrderScreen}
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




             
           
           
           
           <AllUITogether
                    show={ "AddImages" }
                    textToShowProps={ singleFileButArrayForEdit?.length > 0 ? 'Add More'
                      : arrayOfimagesCapturedUsingCamera?.length > 0 ? 'Add More'
                        : 'Add Images' }
                    //setdoneAddingImageProps={ setdoneAddingImage }
                    //doneAddingImageprops={ 'secondTime' }
                    //itemImageprops={ itemImage }
                    //imageProps={ images }
                    //setImageProps={ setImages }
                    openDocumentPickerprops={uploadORActuallyOpenGallery}
                    //openCameraFullScreenprops={openFullScreenCamera}
                    openCameraFullScreenprops={uploadORActuallyOpenGallery}
                    //imagePropsOnlyForCamera={ image }
                    //setImagePropsOnlyForCamera={ setImage }
                    

                    //imagePropsOnlyForCameraSecond={ imageSecond }
                    //setImagePropsOnlyForCameraSecond={ setImageSecond }


                    //imagePropsOnlyForCameraThird={ imageThird }
                    //setImagePropsOnlyForCameraThird={ setImageThird }


                    //imagePropsOnlyForCameraFourth={ imageFourth }
                    //setImagePropsOnlyForCameraFourth={ setImageFourth }



                  />
 


            

              <View style={{ flexDirection: 'row' }}>

                {/*  <Image
                source={ { uri:imageBaseAPI+itemImage } }
                
                style={ {
                  borderRadius: responsiveWidth(2),
                  width: responsiveWidth(18),
                  height: responsiveHeight(13),
                  marginLeft: responsiveWidth(2),
                  marginRight: responsiveWidth(2),
                  marginBottom: responsiveHeight(1.9),
                } }
              />     */}

                <FlatList
                  data={itemImage}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => (
                    <>

                      <Image
                        source={{ uri: imageBaseAPI + item.image }}

                        style={{
                          borderRadius: responsiveWidth(2),
                          width: responsiveWidth(18),
                          height: responsiveHeight(13),
                          marginLeft: responsiveWidth(2),
                          marginRight: responsiveWidth(2),
                          marginBottom: responsiveHeight(1.9),
                        }}
                      />
                    </>
                  )



                  }
                  //numColumns={2}
                  keyExtractor={(item) => item.uri}
                //contentContainerStyle={{ marginVertical: 50, paddingBottom: 100 }}
                />


                <FlatList
                  //data={singleFileButArrayForEdit}
                  data={images}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => (
                    <Image
                      //source={ { uri: singleFileButArrayForEdit[index].uri} }
                      source={{ uri: item.path }}
                      style={{
                        borderRadius: responsiveWidth(2),
                        width: responsiveWidth(18),
                        height: responsiveHeight(13),
                        marginLeft: responsiveWidth(2),
                        marginRight: responsiveWidth(2),
                        marginBottom: responsiveHeight(1.9),
                      }}
                    />
                  )}
                  //numColumns={2}
                  keyExtractor={(item) => item.uri}
                //contentContainerStyle={{ marginVertical: 50, paddingBottom: 100 }}
                />



                { /* <FlatList
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
                //numColumns={2}
                keyExtractor={ (item) => item.uri }
              //contentContainerStyle={{ marginVertical: 50, paddingBottom: 100 }}
              /> */}



              </View>

              {/*Add Images section ends here  */}
              {/* <View>
            <TouchableOpacity onPress={()=>setisCameraButtonClicked(true)}>    

            <Text>OPEN CAMERA</Text>     
            </TouchableOpacity>


          {isCameraButtonClicked==true?
          (
            <>
            <Camera style={styles.containerStyleForFullScreenCamera} ref={cameraRef}>
      <View style={styles.buttonContainerStyleForFullScreenCamera}>
        <Button title="Take Pic" onPress={takePic} />
      </View>
      <StatusBar style="auto" />
    </Camera>
            </>
          ):null}



            </View> */}

              {/* Drop Down for Customer List starts here */}

              <View>
                <Text style={styles.dropDownTopSideLabels}>Select Customer</Text>

                <AnimatedTextInputFile
                  show={'AnimatedTextInputDDL'}
                  ddlWidth={responsiveWidth(81)}
                  heightOfDDLprops={responsiveHeight(7)}
                  marginTopPropsForDDL={responsiveHeight(1)}
                  widthForTextInDDLprops={responsiveWidth(81)}
                  ddlTextmarginLeft={responsiveWidth(2)}
                  ddlDownArrowIconmarginLeft={responsiveWidth(22)}
                  //marginVerticalPropsForDDL={0.9}
                  // marginTopPropsForDDL={1}
                  ddlInsideTextFontSize={responsiveFontSize(2)}
                  ddlInsideTextFontName={'raleway-light'}
                  ddlBoarderColor={'#8e8e8e'}
                  ddlboarderThickness={responsiveWidth(0.15)}
                  ddlInsideTextFontColor={'#2D2D2D'}
                  dropdownIconProps={require('../images/dropdowncurved.png')}
                  //heightOfDDLprops={7}
                  largeDropDownListTopLabel={'Customer'}
                  itemIconPropslabel={require('../images/customer_whiteR.png')}
                  tintColorForDDLIconLeft={'#283E65'}
                  largeDropDownListOnPressCallThisAPI={'manage_customer'}
                  actionprops={'search'}
                  selectSetter={'ForCustomer'}
                  //setterPathToFetchAPIResult={customer}
                  modalToplabelProps={'Select Customer'}
                  accessTokenprops={logedInPersonAccessToken}
                  startprops={'0'}
                  limitprops={'100000'}
                  state_idprops={''}
                  city_idprops={''}
                  search_allprops={''}
                  sortby_nameprops={'desc'}
                  mobile_noprops={''}
                  passwordprops={''}
                  selectedCustomerFromListProps={selectedCustomerFromList}
                  setselectedCustomerFromListProps={setselectedCustomerFromList}

                  selectedCustomerIDFromListProps={selectedCustomerIDFromList}
                  setselectedCustomerIDFromListProps={setselectedCustomerIDFromList}
                />
              </View>

              {/* DropDown for Customer List Ends Here */}

              {/* Drop Down for Supplier List starts here */}

              <View>
                <Text style={styles.dropDownTopSideLabels}>Select Supplier</Text>

                <AnimatedTextInputFile
                  show={'AnimatedTextInputDDL'}
                  ddlWidth={responsiveWidth(81)}
                  heightOfDDLprops={responsiveHeight(7)}
                  marginTopPropsForDDL={responsiveHeight(1)}
                  widthForTextInDDLprops={responsiveWidth(81)}
                  ddlboarderThickness={responsiveWidth(0.15)}
                  ddlTextmarginLeft={responsiveWidth(2)}
                  //marginVerticalPropsForDDL={0.9}
                  //marginTopPropsForDDL={1}
                  ddlDownArrowIconmarginLeft={responsiveWidth(22)}
                  dropdownIconProps={require('../images/dropdowncurved.png')}
                  //heightOfDDLprops={7}
                  ddlInsideTextFontSize={responsiveFontSize(2)}
                  ddlInsideTextFontName={'raleway-light'}
                  ddlBoarderColor={'#8e8e8e'}
                  largeDropDownListTopLabel={'Supplier'}
                  itemIconPropslabel={require('../images/supplier_whiteR.png')}
                  tintColorForDDLIconLeft={'#283E65'}
                  ddlInsideTextFontColor={'#2D2D2D'}
                  accessTokenprops={logedInPersonAccessToken}
                  modalToplabelProps={'Select Supplier'}
                  selectSetter={'ForSupplier'}
                  largeDropDownListOnPressCallThisAPI={'manage_supplier'}
                  actionprops={'search'}
                  startprops={'0'}
                  limitprops={'100000'}
                  state_idprops={''}
                  city_idprops={''}
                  search_allprops={''}
                  sortby_nameprops={'desc'}
                  mobile_noprops={'4343'}
                  passwordprops={'34343'}
                  selectedSupplierFromListProps={selectedSupplierFromList}
                  setselectedSupplierFromListProps={setselectedSupplierFromList}

                  selectedSupplierIDFromListProps={selectedSupplierIDFromList}
                  setselectedSupplierIDFromListProps={setselectedSupplierIDFromList}
                />
              </View>

              {/* DropDown for Supplier List Ends Here */}

              {/* Drop Down for Select Category List starts here */}

              <View>
                <Text style={styles.dropDownTopSideLabels}>Select Category</Text>
              </View>

              <AnimatedTextInputFile
                show={'AnimatedTextInputDDL'}
                ddlWidth={responsiveWidth(81)}
                heightOfDDLprops={responsiveHeight(7)}
                marginTopPropsForDDL={responsiveHeight(1)}
                widthForTextInDDLprops={responsiveWidth(81)}
                ddlboarderThickness={responsiveWidth(0.15)}
                ddlTextmarginLeft={responsiveWidth(2)}
                //marginVerticalPropsForDDL={0.9}
                //marginTopPropsForDDL={1}
                ddlDownArrowIconmarginLeft={responsiveWidth(22)}
                dropdownIconProps={require('../images/dropdowncurved.png')}
                // heightOfDDLprops={7}
                ddlInsideTextFontSize={responsiveFontSize(2)}
                ddlInsideTextFontName={'raleway-light'}
                ddlBoarderColor={'#8e8e8e'}
                largeDropDownListTopLabel={'Category'}
                itemIconPropslabel={require('../images/category.png')}
                tintColorForDDLIconLeft={'#283E65'}
                modalToplabelProps={'Select Category'}
                ddlInsideTextFontColor={'#2D2D2D'}
                largeDropDownListOnPressCallThisAPI={'category_list'}
                actionprops={'search'}
                selectSetter={'ForCategory'}
                accessTokenprops={logedInPersonAccessToken}
                startprops={'0'}
                limitprops={'100000'}
                state_idprops={''}
                city_idprops={''}
                search_allprops={''}
                sortby_nameprops={'desc'}
                mobile_noprops={''}
                passwordprops={''}
                selectedCategoryFromListProps={selectedCategoryFromList}
                setselectedCategoryFromListProps={setselectedCategoryFromList}

                selectedCategoryIDFromListProps={selectedCategoryIDFromList}
                setselectedCategoryIDFromListProps={setselectedCategoryIDFromList}
              />

              {/* DropDown for Select Category List Ends Here */}

              {/* Code to include Order Date , date selector and Order for text and Client drop down in one row starts here */}

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: responsiveHeight(0),
                }}>
                {/* Code to include Order Date , date selector starts here */}
                <View>
                  <Text style={styles.dropDownTopSideLabels}>Order Date</Text>

                  <View style={styles.inputBtn}>
                    <Text
                      style={{
                        fontSize: responsiveHeight(1.9),
                        fontFamily: 'raleway-light',
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      {orderDateReveivedFromOrderScreen}
                    </Text>
                  </View>
                </View>
                {/*  orderDateSentFromOrderScreen       Code to include Order Date , date selector ends here */}

                {/* Code to include Order for text and Client drop down starts here */}
                <View
                  style={{
                    //backgroundColor:'blue',
                    marginLeft: responsiveWidth(2.5),
                  }}>
                  {/* <Text style={styles.dropDownTopSideLabels}>Order For</Text> */}
                  <Text style={styles.dropDownTopSideLabels}>
                    Order For
                  </Text>
                  <AllUITogether
                    show={'ddLforlocalData'}
                    fetchLocalDataDDLDownArrowMarginLeft={responsiveWidth(-18)}
                    fetchLocalDataDDLWidth={responsiveWidth(38.5)}
                    fetchLocalDataDDLTextmarginLeft={responsiveWidth(-8)}
                    largeDropDownListTopLabel={'Order For'}
                    itemIconPropslabel={null}
                    itemNamePropslabel={'Normal'}
                    fontForDDLTextInsideModal={'raleway-medium'}
                    fontForDDLInsideText={'raleway-light'}
                    dataForFlatListprops={data}
                    setterMethodInDropDownTextArea={setselectedOrderForValue}
                    valueForDropDownToShowInText={selectedOrderForValue}
                    marginbetweenTopLabelandTouchableOpactiy={responsiveHeight(0.9)}
                    largeDropDownModalMarginTopProps={responsiveHeight(81)}
                    largeDropDownModalMarginLeftProps={responsiveWidth(48)}
                    largeDropDownModalHeightProps={responsiveHeight(15)}
                    largeDropDownModalWidthProps={responsiveWidth(48)}
                    ddlForLocalDataIconHeightProps={23}
                    ddlForLocalDataIconWidthProps={23}
                    borderRadiusPropsForDDLModal={responsiveHeight(0)}
                  />
                </View>
                {/* Code to include Order for text and Client drop down ends here */}
              </View>

              {/* Code to include Order Date , date selector and Order for text and Client drop down in one row ends here */}

              {/* DropDown for Type of Order and its List starts here */}

              <View>
                <Text style={styles.dropDownTopSideLabels}>
                  Type of Order
                </Text>
                <AllUITogether
                  show={'ddLforlocalData'}
                  //largeDropDownListTopLabel={'Type of Order'}
                  fetchLocalDataDDLDownArrowMarginLeft={responsiveWidth(22)}
                  fetchLocalDataDDLWidth={responsiveWidth(81)}
                  fetchLocalDataDDLTextmarginLeft={responsiveWidth(2)}
                  itemIconPropslabel={require('../images/orderTypeBlue.png')}
                  itemNamePropslabel={'Type of Order'}
                  fontForDDLTextInsideModal={'raleway-medium'}
                  fontForDDLInsideText={'raleway-light'}
                  dataForFlatListprops={dataForTypeOfOrder}
                  setterMethodInDropDownTextArea={setSelectedTypeOfOrderValue}
                  valueForDropDownToShowInText={selectedTypeOfOrderValue}
                  //Next time when we use this Reusable component, give all the
                  //required numberic parameter in props using
                  //responssiveHeight and responsiveWidth.
                  marginbetweenTopLabelandTouchableOpactiy={responsiveHeight(0.9)}
                  largeDropDownModalMarginTopProps={560}
                  largeDropDownModalMarginLeftProps={18}
                  largeDropDownModalHeightProps={150}
                  largeDropDownModalWidthProps={324}
                  ddlForLocalDataIconHeightProps={23}
                  ddlForLocalDataIconWidthProps={30}
                  borderRadiusPropsForDDLModal={responsiveHeight(0)}
                />
              </View>

              {/* DropDown for Type of Order and its List Ends Here */}
              <View
                style={{
                  marginLeft: responsiveWidth(1),
                  marginBottom: responsiveHeight(8),
                }}>
                {/*  This below is perfect example of how to SHOW THAT THERE IS SAME UI LIKE GIVEN BELOW NEXT BUTTON, BUT ON DIFFERENT CONDITION THIS BUTTON PERFORMS DIFFERENT TASK, BY USING TERNARRY OPERATOR AND USING ONE VARIABLE LIKE selectedTypeOfOrderValue to select different kind of task in onPress event but both button looks exectly same when running app.*/}
                {selectedTypeOfOrderValue != 'Platinum' ? (

                  <AllUITogether
                    show={'ThickRoundedBtn'}
                    widthPropsForthickbtn={responsiveWidth(81)}
                    marginLeftPropsForthickbtn={responsiveWidth(0)}
                    marginTopPropsForthickbtn={responsiveHeight(3)}
                    heightPropsForthickbtn={responsiveHeight(8)}
                    backgroundColorPropsForthickbtn={'#283E65'}
                    borderRadiusPropsForthickbtn={responsiveWidth(10)}

                    thickbtnOnpressprops={() => { gotoEditOrderSecondPage() }}
                    thickbtnTitleprops={'NEXT'}
                    fontFamilyPropsForthickbtn={'raleway-semibold'}
                    fontcolorPropsForthickbtn={'white'}
                    fontSizePropsForthickbtn={responsiveFontSize(2.2)}
                    paddingForthickbtn={responsiveHeight(2)}
                  />
                ) : (

                  <AllUITogether
                    show={'ThickRoundedBtn'}
                    widthPropsForthickbtn={responsiveWidth(81)}
                    marginLeftPropsForthickbtn={responsiveWidth(0)}
                    marginTopPropsForthickbtn={responsiveHeight(3)}
                    heightPropsForthickbtn={responsiveHeight(8)}
                    backgroundColorPropsForthickbtn={'#283E65'}
                    borderRadiusPropsForthickbtn={responsiveWidth(10)}

                    thickbtnOnpressprops={() => { gotoEditOrderSecondPageWithPlatinum() }}
                    thickbtnTitleprops={'NEXT'}
                    fontFamilyPropsForthickbtn={'raleway-semibold'}
                    fontcolorPropsForthickbtn={'white'}
                    fontSizePropsForthickbtn={responsiveFontSize(2.2)}
                    paddingForthickbtn={responsiveHeight(2)}
                  />
                )}
              </View>
              {/*Our UI in Card ends here  */}
          </ScrollView>
        </Card>
        {/* </View> */}
      </ScrollView>
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

  containerStyleForFullScreenCamera: {
    flex: 1,
    //width:width,
    //height:height,   
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainerStyleForFullScreenCamera: {
    backgroundColor: '#fff',
    alignSelf: 'flex-end'
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  }

});

export default EditOrderScreen;
