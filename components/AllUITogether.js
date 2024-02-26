/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import
  {
    Animated,
    Dimensions,
    FlatList,
    Image,
    ImageBackground,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
  } from 'react-native';

   //When we want to pass any numberic value as Props, so that it can be used inside any type of number value inside 
    //style for example inside responsiveWidth() then do not pass only number as props like this as shown below
    //marginLeftPropsForTopLabelForPagesInBottomNav={31}
    //because if we will send only number inside props then error will be generated of Not A Number i.e NaN
    //which means if we will send any number only inside props like this marginLeftPropsForTopLabelForPagesInBottomNav={31}
    //then this number 31 will not be taken as numeric value inside responsiveWidth().
    //So to adjust our style with different numeric value using props we have to pass 'responsiveWidth(31)' inside props
    //just as shown here: marginLeftPropsForTopLabelForPagesInBottomNav={responsiveWidth(31)}  

import
  {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
//import { TextInput } from 'react-native-paper';
//import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Badge, Button } from '@rneui/themed';
//import { useFonts } from 'expo-font';
//import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useRef, useState } from 'react';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';

//import { Camera } from 'expo-camera';
//import { shareAsync } from 'expo-sharing';
//import * as MediaLibrary from 'expo-media-library';


let { height, width } = Dimensions.get('window');






















export default function AllUITogether(props)
{
  /*Section for putting all const variable or hard coded value for all variable starts here  */
  /* let [fontsLoaded] = useFonts({
    'raleway-extraLight': require('../assets/fonts/Raleway-ExtraLight.ttf'),
    'raleway-light': require('../assets/fonts/Raleway-Light.ttf'),
    'raleway-bold': require('../assets/fonts/Raleway-Bold.ttf'),
    'raleway-medium': require('../assets/fonts/Raleway-Medium.ttf'),
    'raleway-black': require('../assets/fonts/Raleway-Black.ttf'),
    'raleway-semibold': require('../assets/fonts/Raleway-SemiBold.ttf'),
  }); */

  

  /* Section for putting all const variable or hard coded value for all variable ends here */

  /* Section for putting all useState starts here: find this section in this file using keyword 'all useState' */

  const today = new Date();
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false); // open close modal
 
  const [startedDate, setStartedDate] = useState('12/12/2023');
  const [isLoadingForGalleryImages, setIsLoadingForGalleryImages] =
    useState(false);
  
    const [selectedChip, setSelectedChip] = useState(-1);
  

  const [previousImage, setPreviousImage] = useState(null);
  const [previousImages, setPreviousImages] = useState([]);

 
  let imageBaseAPI = 'https://rajeshwersoftsolution.com/jwelcart/public';
  
  

 
  const [
    largeDropDownForFetchingLocalDataclicked,
    setLargeDropDownForFetchingLocalDataclicked,
  ] = useState(false);
  

  const [threeLineButtonClicked, setthreeLineButtonClicked] = useState(false);
  

  

 

 

  const [cameraOrGalleryOptionsModal, setcameraOrGalleryOptionsModal] =
    useState(false);

 

  

  /* Section for putting all useState ends here : find this section in this file using keyword 'all useState'*/

  useEffect(() =>
  {
    //alert('useEffect executed...');
    getEditOrderImagesData();
  }, []);

  /*Section for putting all functions which are reuseable starts here: find this section in this file using keyword 'all functions' */

  const startDate = getFormatedDate(
    today.setDate(today.getDate()),
    'YYYY/MM/DD'
  );

  const handleOnPressStartDate = () =>
  {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  function handleChangeStartDate(propDate)
  {
    setStartedDate(propDate);
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const setData = async () =>
  {
    if (previousImages.length == 0 || previousImage == null)
    {
      //Alert.alert('Warning!', 'Please Select Image for EditOrderScreen.')
    } else
    {
      try
      {
        var userSelectedImages = {
          CameraImage: previousImage,
          GalleryImages: previousImages,
        };
        await AsyncStorage.setItem(
          'imagesForEditOrderScreen',
          JSON.stringify(userSelectedImages)
        );
      } catch (error)
      {
        console.log(error);
      }
    }
  };

  const getEditOrderImagesData = () =>
  {
    try
    {
      AsyncStorage.getItem('imagesForEditOrderScreen').then((value) =>
      {
        if (value != null)
        {
          let user = JSON.parse(value);
          setPreviousImages(user.GalleryImages);
          setPreviousImage(user.CameraImage);
        }
      });
    } catch (error)
    {
      console.log(error);
    }
  };

  /* Section for putting all functions which are reuseable ends here: find this section in this file using keyword 'all functions' */

  if (props.show == 'CustomeRoundBottomNavBar')
  {
    return (
      <Animated.View
        style={ {
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'purple',
          alignItems: 'center',
          marginTop: responsiveHeight(7.5),
        } }>
        <View
          style={ {
            width: '100%',
            height: 100,
            marginTop: threeLineButtonClicked ? -7.5 : 40,
            //backgroundColor: 'yellow',
            backgroundColor: threeLineButtonClicked ? '#757575' : null,
            justifyContent: 'flex-end',
            alignItems: 'center',
            //Due to this above alignItems: 'center', only our centeral New Order button is comming in center of Round Bottom Nav.
            //And our view which contains rounded bar and all other buttons except centeral button also is comming in center
            //because of this above  alignItems: 'center',
            //If we remove this alignItems: 'center', then our rounded bar with other icons and cental icon will
            //come on top of each other in one vertical line
          } }>
          {/*View which will hold button in Rounded Bottom Tab Bar excluding center New Order button code starts here */ }
          <View
            style={ {
              width: '90%',
              height: 70,
              position: 'absolute',
              //This position: 'absolute', and bottom: 0, is responsible to put our round navigation bar in bottom of
              //second view which have color yellow, the bottom:0 is for not having any space i.e. having space
              //0 between bottom of our yellow view and round navigation bar
              //If we want to keep some little distance at bottom between our round navigation bar and our yellow view then we can
              //make bottom:10,
              //If we remove the position: 'absolute', and bottom: 0, then our round navigation bar will go at top of our
              //yellow  view
              bottom: 35,
              backgroundColor: '#283E65',
              //backgroundColor:threeLineButtonClicked ? '#757575':'#283E65',
              //backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              borderRadius: 40,
              paddingRight: 20,
              paddingLeft: 20,
            } }>
            <View
              onPress={ () =>
              {
                props.onPressOnHome();
              } }
              style={ {
                width: '33%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              } }>
              <TouchableOpacity
                onPress={ () =>
                {
                  props.onPressOnHome();
                } }>
                <Image
                  source={ require('../images/home_whiteR.png') }
                  style={ {
                    width: 25,
                    height: 25,
                    tintColor: props.homeIconColorprops,
                  } }
                />
              </TouchableOpacity>

              <Text
                onPress={ () =>
                {
                  props.onPressOnHome();
                } }
                style={ {
                  marginTop: 5,
                  color: props.homeTextColorProps,
                  fontSize: 10,
                } }>
                Home
              </Text>
            </View>

            <View
              onPress={ () =>
              {
                props.onPressOnOrder();
              } }
              style={ {
                width: '33%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              } }>
              <TouchableOpacity
                onPress={ () =>
                {
                  props.onPressOnOrder();
                } }>
                <Image
                  source={ require('../images/order_whiteR.png') }
                  onPress={ () =>
                  {
                    props.onPressOnOrder();
                  } }
                  style={ {
                    width: 25,
                    height: 25,
                    tintColor: props.orderIconColorprops,
                  } }
                />
              </TouchableOpacity>

              <Text
                onPress={ () =>
                {
                  props.onPressOnOrder();
                } }
                style={ {
                  marginTop: 5,
                  color: props.orderTextColorProps,
                  fontSize: 10,
                } }>
                Order
              </Text>
            </View>

            {/*Center Button in Rounded Bottom Tab Bar code starts here */ }
            <View style={ { alignSelf: 'center', height: '100%' } }>
              <View
                style={ {
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 0,
                  //backgroundColor:'yellow', not working here
                  //To bring centeral circle button out of rounded navigation bar from top side reduce this above given marginTop:0
                  //to -1
                } }>
                <View
                  onPress={ () =>
                  {
                    props.onPressOnAddOrder();
                  } }>
                  <TouchableOpacity
                    onPress={ () =>
                    {
                      props.onPressOnAddOrder();
                    } }>
                    <Image
                      source={ require('../images/cart_gold.png') }
                      style={ {
                        width: 50,
                        height: 50,
                        marginBottom: responsiveHeight(-0.5),
                        //CCCCCCCCCCCCCCC
                      } }
                    />
                  </TouchableOpacity>

                  <Text
                    onPress={ () =>
                    {
                      props.onPressOnAddOrder();
                    } }
                    style={ {
                      marginTop: 5,
                      color: '#fff',
                      zIndex: -1,
                      textAlign: 'center',
                      fontSize: 12,
                    } }></Text>
                </View>
              </View>
            </View>
            {/*Center Button in Rounded Bottom Tab Bar code Endss here  */ }

            <View
              onPress={ () =>
              {
                props.onPressOnCustomer();
              } }
              style={ {
                width: '33%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              } }>
              <TouchableOpacity
                onPress={ () =>
                {
                  props.onPressOnCustomer();
                } }>
                <Image
                  source={ require('../images/customer_whiteR.png') }
                  style={ {
                    width: 25,
                    height: 25,
                    tintColor: props.customerIconColorprops,
                  } }
                />
              </TouchableOpacity>

              <Text
                onPress={ () =>
                {
                  props.onPressOnCustomer();
                } }
                style={ {
                  marginTop: 5,
                  color: props.customerTextColorprops,
                  fontSize: 10,
                } }>
                Customer
              </Text>
            </View>

            <View
              onPress={ () =>
              {
                props.onPressOnSupplier();
              } }
              style={ {
                width: '33%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              } }>
              <TouchableOpacity
                onPress={ () =>
                {
                  props.onPressOnSupplier();
                } }>
                <Image
                  source={ require('../images/supplier_whiteR.png') }
                  style={ {
                    width: 35,
                    height: 35,
                    marginTop: -4,
                    tintColor: props.supplierIconColorprops,
                  } }
                />
              </TouchableOpacity>

              <Text
                onPress={ () =>
                {
                  props.onPressOnSupplier();
                } }
                style={ {
                  marginTop: -1,
                  color: props.supplierTextColorprops,
                  fontSize: 10,
                } }>
                Supplier
              </Text>
            </View>
          </View>
          {/*View which will hold button in Rounded Bottom Tab Bar excluding center New Order button code Ends here */ }
        </View>
      </Animated.View>
    );
  } else if (props.show == 'AntIconBtn')
  {
    return (
      <View
        style={ {
          
          backgroundColor:props.backgroundColorForIconinAntDesignBtn,
          borderRadius:props.boardRadiusForIconinAntDesignBtn,
          borderColor:props.boardColorForIconinAntDesignBtn,   
          borderWidth: props.boardWidthForIconinAntDesignBtn,
          width:props.widthForIconinAntDesignBtn,
          height:props.heightForIconinAntDesignBtn,
          marginLeft: props.marginLeftForIconinAntDesignBtn,
          marginTop: props.marginTopForIconinAntDesignBtn,
        } }>
        <View
          style={ {
            //This is view inside rounded box and we have given flex:1,justifyContent:'center' so that whatever image we put
            //inside this view will get justifyContent:'center'
            flex: 1,
            justifyContent: 'center',
            alignSelf: 'center',
            
          } }>
         
          {/* <AntDesign
            name={props.iconDesignName}
            size={props.sizeForIconinAntDesignBtn}
            color={props.colorForIconinAntDesignBtn}
            onPress={ () =>
            {
              //alert('Golden Back Btn pressed....')
              props.dothisProps();
            } }
          /> */}
         
        </View>
      </View>
    );
  } else if (props.show == 'CenterTopTextForPageName')
  {
    return (
      <View
        style={ {
          //This view is for holding EDIT ORDER text

          //backgroundColor:'yellow',
          width: responsiveWidth(80),
          height: responsiveHeight(5),
        } }>
        <View
          style={ {
            //flex: 1,
            //justifyContent: 'center',
            marginTop:props.marginTopPropsForCenterTopTextForPageName,
            marginLeft:props.marginLeftPropsForCenterTopTextForPageName,      
            //backgroundColor:'orange'
          } }>
          <Text
            style={ {
              fontSize: responsiveHeight(3),
              fontFamily: 'raleway-semibold',
              color: 'white',
              textAlign:'center',
            } }>
            { props.topPageName }
          </Text>
        </View>
      </View>
    );
  } else if (props.show == 'ddLforlocalData')
  {
    return (
      <>
        <Modal
          statusBarTranslucent={ true }
          transparent={ true }
          visible={ largeDropDownForFetchingLocalDataclicked }
        //style={{height:height}}
        //onRequestClose={ () => setModalVisible(false) }
        >
          <View
            style={ {
              elevation: 2,
              marginTop:props.largeDropDownModalMarginTopProps,
              //marginTop: responsiveHeight(74),
              marginLeft:props.largeDropDownModalMarginLeftProps,
              //marginLeft:responsiveWidth(4.5),
              height:props.largeDropDownModalHeightProps,
              //height: responsiveHeight(15),
              //alignSelf: 'center',
              width:props.largeDropDownModalWidthProps,
              //width:responsiveWidth(90),
              backgroundColor: 'white',
              borderRadius:props.borderRadiusPropsForDDLModal,
              borderColor: 'black',
            } }>
            <FlatList
              //data={dataForTypeOfOrder}
              /* To use this component 'largeDropDownListFetchDataLocally' we have to create an array to pass in the FlatList and that array should be kept in the file from where this component will be called and in that array we have to keep one key with name type so that FlatList can access that key and show its value using syntax: {item.type}  */
              data={ props.dataForFlatListprops }
              renderItem={ ({ item, index }) =>
              {
                return (
                  <TouchableOpacity
                    style={ {
                      width: '85%',
                      alignSelf: 'center',
                      height: 50,
                      justifyContent: 'center',
                      //borderBottomWidth: 0.5,
                      //borderColor: '#8e8e8e',
                    } }
                    onPress={ () =>
                    {
                      //setSelectedTypeOfOrderValue(item.type);
                      props.setterMethodInDropDownTextArea(item.type);
                      setLargeDropDownForFetchingLocalDataclicked(
                        !largeDropDownForFetchingLocalDataclicked
                      );
                    } }>
                    <Text
                      style={ {
                        fontWeight: '600',
                        color: '#696969',
                        fontFamily: 'raleway-medium',
                        marginLeft: responsiveWidth(2.5),
                      } }>
                      { item.type }
                    </Text>
                  </TouchableOpacity>
                );
              } }
            />
          </View>
        </Modal>

        {/* <Text style={ styles.dropDownTopSideLabels }>
          { props.largeDropDownListTopLabel }
        </Text> */}

        <TouchableOpacity
          onPress={ () =>
          {
            setLargeDropDownForFetchingLocalDataclicked(
              !largeDropDownForFetchingLocalDataclicked
            );
          } }>
          <View
            style={ {
              //width: responsiveWidth(81),
              width: props.fetchLocalDataDDLWidth,
              height: 50,
              borderRadius: 30,
              borderWidth: responsiveWidth(0.15),
              borderColor: '#8e8e8e',
              alignSelf: 'center',
              //marginVertical: responsiveHeight(0.9),
              marginTop: props.marginbetweenTopLabelandTouchableOpactiy,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 15,
              paddingRight: 15,
              //backgroundColor:'purple',
            } }>
            <View
              style={ {
                //This view is to give gray box which will hold first menu icon

                borderRadius: 10,
                //backgroundColor: '#E6E1DC',
                width: responsiveWidth(11),
                height: responsiveHeight(5),
                marginLeft: responsiveWidth(1),
                //marginTop: responsiveHeight(2),
              } }>
              <View
                style={ {
                  //This is view inside gray box and we have given flex:1,justifyContent:'center' so that whatever image we put
                  //inside this view will get justifyContent:'center'
                  flex: 1,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  //backgroundColor: 'red',
                  //flexDirection:'row',
                } }>
                <Image
                  source={ props.itemIconPropslabel }
                  style={ { width: props.ddlForLocalDataIconWidthProps, height: props.ddlForLocalDataIconHeightProps } }
                />
              </View>
            </View>

            <View
              style={ {
                //This view is for holding Drawer Navigation Menu Item Name

                //borderRadius: 10,
                //backgroundColor: '#E5E6E7',
                width: responsiveWidth(30),
                height: responsiveHeight(5),
                //marginLeft:props.itemIconPropslabel==null? responsiveWidth(-18):responsiveWidth(2),
                //marginLeft:responsiveWidth(5),
                //marginTop: responsiveHeight(2),
              } }>
              <View
                style={ {
                  flex: 1,
                  justifyContent: 'center',
                  //alignSelf: 'center',
                  marginLeft: props.fetchLocalDataDDLTextmarginLeft,
                  //backgroundColor: 'blue',
                  width: responsiveWidth(40),
                  //flexDirection:'row',
                } }>
                <Text
                  style={ {
                    color: 'black',
                    fontSize: responsiveFontSize(1.8),
                    fontFamily: 'raleway-light',
                  } }>
                  { props.valueForDropDownToShowInText }
                  {/* {selectedTypeOfOrderValue == '' ? 'Type Of Order' : selectedTypeOfOrderValue} */ }
                </Text>
              </View>
            </View>

            <View
              style={ {
                width: responsiveWidth(11),
                height: responsiveHeight(5),
                //marginLeft:props.itemIconPropslabel==null?responsiveWidth(22):responsiveWidth(22),
                marginLeft: props.fetchLocalDataDDLDownArrowMarginLeft,
                //backgroundColor: 'yellow',
                //marginTop: responsiveHeight(2),
              } }>
              <View
                style={ {
                  flex: 1,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  //flexDirection:'row',
                } }>
                <Image
                  source={ require('../images/dropdowncurved.png') }
                  style={ { width: 20, height: 20 } }
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  } else if (props.show == 'ThickRoundedBtn')
  {
    return (
      <>
        <View>
          {/* <Button
            title={ props.thickbtnTitleprops }
            onPress={ () =>
            {
              props.thickbtnOnpressprops();
            } }
            titleStyle={ { fontWeight: '700' } }
            buttonStyle={ {
              backgroundColor: '#283E65', //#013F66
              fontFamily: 'raleway-extraLight',
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 30,
              height: props.heightProps,
              width: props.widthProps,
              marginTop: props.marginTopProps,
              marginBottom: props.marginBottomProps,
            } }
          /> */}
          <TouchableOpacity
              style={{
                width: props.widthPropsForthickbtn,
                marginLeft: props.marginLeftPropsForthickbtn,
                marginTop:props.marginTopPropsForthickbtn,
                height: props.heightPropsForthickbtn,
                
                
                backgroundColor:props.backgroundColorPropsForthickbtn,
                elevation: responsiveWidth(1),
                borderWidth: 0,
                borderRadius:props.borderRadiusPropsForthickbtn,  



                alignItems: 'center',

                //padding:responsiveHeight(1.5),
                padding:props.paddingForthickbtn, 
                
              }}
              onPress={() => {
                
                props.thickbtnOnpressprops();
              }}>
              <Text
                style={{
                  //fontWeight: '500',
                  fontFamily:props.fontFamilyPropsForthickbtn,
                  color:props.fontcolorPropsForthickbtn, 
                  fontSize:props.fontSizePropsForthickbtn,  
                      
                  
                }}>
                { props.thickbtnTitleprops }
              </Text>
            </TouchableOpacity>
        </View>
      </>
    );
  } else if (props.show == 'noAnimatedTextInput')
  {
    return (
      <>
        <Text style={ styles.dropDownTopSideLabels }>
          { props.noAnimatedTextInputTopLabel }
        </Text>

        <TextInput
          style={ {
            marginTop: props.noAnimatedTextInputmarginTop,
            height: props.noAnimatedTextInputheight,
            width: props.noAnimatedTextInputwidth,
            textAlignVertical: props.textAlignVerticalprops,
            borderColor: props.noAnimatedTextInputborderColor,
            borderWidth: props.noAnimatedTextInputborderWidth,
            borderRadius: props.noAnimatedTextInputborderRadius,
            color: props.noAnimatedTextInputcolor,

            fontSize: props.noAnimatedTextInputfontSize,
            fontFamily: props.noAnimatedTextInputfontFamily,
            padding: props.noAnimatedTextInputpadding,
          } }
          // Adding hint in TextInput using Placeholder option.
          placeholder={ props.noAnimatedTextInputplaceholderprops }
          placeholderTextColor="#BBBBBB"
          //keyboardType='numeric'
          keyboardType={props.noAnimatedTextInputKeyboardTypeprops}
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
          multiline={ props.multilineTrueorFalseProps }
          numberOfLines={ props.numberOfLinesForLargeTextInput }
          onChangeText={ (textenteredbyUser) =>
          {
            props.noAnimatedTextInputsetterMethod(textenteredbyUser);
          } }
          value={ props.noAnimatedTextInputValueprops }
        />
      </>
    );
  }else if (props.show == 'AddImages')
  {
    return (
      <>
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
            { props.textToShowProps }
          </Text>

          <View
            style={ { flexDirection: 'row', marginTop: responsiveHeight(3.5) } }>
            <ScrollView horizontal={ true }>

            {props.galleryImagesprops?.length == 0 ?
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
                  :null}    

              {/* <FlatList
                data={ props.imageProps }
                horizontal
                showsHorizontalScrollIndicator={ false }
                renderItem={ ({ item, index }) => (
                  <Image
                    source={ { uri: props.imageProps[index].uri } }
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







             { /* <FlatList
                data={ props.cameraCapturedImageArray }
                horizontal
                showsHorizontalScrollIndicator={ false }
                renderItem={ ({ item, index }) => (
                  <Image
                    source={ { uri: props.cameraCapturedImageArray[index].uri } }
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

             { /* <Image
                source={
                  props.imagePropsOnlyForCamera != null
                    ? { uri: props.imagePropsOnlyForCamera }
                    : null
                }
                style={ {
                  borderRadius: responsiveWidth(2),
                  width: responsiveWidth(18),
                  height: responsiveHeight(13),
                  //marginTop: responsiveHeight(5.2),
                  marginLeft: responsiveWidth(2),
                  marginRight: responsiveWidth(2),
                  marginBottom: responsiveHeight(1.9),
                } }
              />

              <Image
                source={
                  props.imagePropsOnlyForCameraSecond != null
                    ? { uri: props.imagePropsOnlyForCameraSecond }
                    : null
                }
                style={ {
                  borderRadius: responsiveWidth(2),
                  width: responsiveWidth(18),
                  height: responsiveHeight(13),
                  //marginTop: responsiveHeight(5.2),
                  marginLeft: responsiveWidth(2),
                  marginRight: responsiveWidth(2),
                  marginBottom: responsiveHeight(1.9),
                } }
              />

              <Image
                source={
                  props.imagePropsOnlyForCameraThird != null
                    ? { uri: props.imagePropsOnlyForCameraThird }
                    : null
                }
                style={ {
                  borderRadius: responsiveWidth(2),
                  width: responsiveWidth(18),
                  height: responsiveHeight(13),
                  //marginTop: responsiveHeight(5.2),
                  marginLeft: responsiveWidth(2),
                  marginRight: responsiveWidth(2),
                  marginBottom: responsiveHeight(1.9),
                } }
              />

              <Image
                source={
                  props.imagePropsOnlyForCameraFourth != null
                    ? { uri: props.imagePropsOnlyForCameraFourth }
                    : null
                }
                style={ {
                  borderRadius: responsiveWidth(2),
                  width: responsiveWidth(18),
                  height: responsiveHeight(13),
                  //marginTop: responsiveHeight(5.2),
                  marginLeft: responsiveWidth(2),
                  marginRight: responsiveWidth(2),
                  marginBottom: responsiveHeight(1.9),
                } }
              /> */}
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
                      props.openCameraFullScreenprops();
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
                      //pickImage();
                       props.openDocumentPickerprops();
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
      </>
    );
  } else if (props.show == 'StraightLineDivider')
  {
    return (
      <>
        <View
          style={ {
            marginTop: responsiveHeight(0.5),
            height: 1,

            backgroundColor: '#A3A3A3',
            //backgroundColor: 'cyan',
          } }></View>
      </>
    );
  } else if (props.show == 'SingleLineToShowAPIFetchedData')
  {
    return (
      <>
        <View style={ { 
          flexDirection: 'row',
          //marginBottom:responsiveHeight(0.5)
          //marginBottom:props.marginBottomProps, 
          
          } }>
          <Text style={ styles.textlabelStyleForOrderScreen }>
            { props.singleLineLabelProps }
          </Text>




           <Text
          
            style={ [
              styles.txtStyleWhichIsFetchedFromAPIInOrderScreen,
              { 
                marginLeft: props.marginLeftProps,
                 color:props.colorPropsForValue,
              fontFamily:props.fontFamilyProps
              },
            ] }>
            :  { props.fetchedValueFromAPI?.length>14?
            props.fetchedValueFromAPI.slice(0,12)+'-'+'\n'+'   '+          
            props.fetchedValueFromAPI.slice(12,28)   
            
            :props.fetchedValueFromAPI} 

          </Text>



         
           







        </View>
      </>
    );
  }
  else if (props.show == 'PlusNineOneBeforInSingleLineToShowAPIFetchedData')
  {
    return (
      <>
        <View style={{flexDirection: 'row',marginBottom:props.marginBottomProps}}>
          <Text style={ styles.textlabelStyleForOrderScreen }>
            { props.singleLineLabelProps }
          </Text>




           <Text
          
            style={ [
              styles.txtStyleWhichIsFetchedFromAPIInOrderScreen,
              { 
                marginLeft: props.marginLeftProps,
                 color:props.colorPropsForValue,
              fontFamily:props.fontFamilyProps
              },
            ] }>
            :  +91 {props.fetchedValueFromAPI} 

          </Text>



         
           







        </View>
      </>
    );
  }
   else if (props.show == 'SideDrawerThreeLineImage')    
  {
    return (
      <>
        <Image
          source={ require('../images/drawer.png') }
          style={ {
            width: responsiveWidth(8),
            height: responsiveHeight(4),
          } }
        />
      </>
    );
  } else if (props.show == 'TopLabelForPagesListedInBottomNavigation')
  {
    return (
      <>
        <Text
          style={ {
            fontSize: responsiveHeight(3),
            fontFamily: 'raleway-medium',
            //marginLeft: responsiveWidth(props.marginLeftPropsForTopLabelForPagesInBottomNav),
            //When we want to pass any numberic value as Props, so that it can be used inside any type of number value inside 
            //style for example inside responsiveWidth() then do not pass only number as props like this as shown below
            //marginLeftPropsForTopLabelForPagesInBottomNav={31}
            //because if we will send only number inside props then error will be generated of Not A Number i.e NaN
            //which means if we will send any number only inside props like this marginLeftPropsForTopLabelForPagesInBottomNav={31}
            //then this number 31 will not be taken as numeric value inside responsiveWidth().
            //So to adjust our style with different numeric value using props we have to pass 'responsiveWidth(31)' inside props
            //just as shown here: marginLeftPropsForTopLabelForPagesInBottomNav={responsiveWidth(31)}  
            marginLeft: props.marginLeftPropsForTopLabelForPagesInBottomNav,
            marginTop: responsiveHeight(-5),

            color: 'white',
          } }>
          { props.topLabelForPagesListedInBottomNavProps }
        </Text>
      </>
    );
  } else if (props.show == 'TopSmallIcon')
  {
    return (
      <>
        <TouchableOpacity
          onPress={ () =>
          {
            props.dothisWhenTopSmallIconPressedProps();
          } }>
          <Image
            //source={require('../images/bell.png')}
            source={ props.iconToDisplayPathProps }
            style={ {
              width: props.widthOfTopSmallIconprops,
              height: props.heightOfTopSmallIconprops,
              //marginTop: responsiveHeight(-4),
              //marginLeft: responsiveWidth(85),
              marginTop: props.marginTopOfTopSmallIconprops,
              marginLeft: props.marginLeftOfTopSmallIconprops,
              //backgroundColor:'purple',
            } }
          />
          { props.showBadgeAlsoprops == true ? (
            <Badge
              status="error"
              value={ props.bellNotificationNumberProps }
              containerStyle={ {
                position: 'absolute',
                top: responsiveHeight(-5),
                right: responsiveWidth(6),
              } }
            />
          ) : null }
        </TouchableOpacity>
      </>
    );
  } else if (props.show == 'ImageBackgroundWhichContainsChildren')
  {
    return (
      <>
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
          } }>
          { props.children }        
        </ImageBackground>
      </>
    );
  } else if (
    props.show == 'ImageToShowInFlatListForPagesListedInBottomNavBar'
  )
  {
    return (
      <>
        <Image
          source={ { uri: imageBaseAPI + props.imageVariableProps } }
          style={ {
            marginLeft: responsiveWidth(3),
            width: responsiveWidth(25),
            height: responsiveHeight(13),
          } }
        />
            
      </>
    );
  } else if (props.show == 'ShowAPIFetchedDateWithLabelInOneRow')
  {
    return (
      <>
        <View style={ { flexDirection: 'row' } }>
          <Text style={ styles.textlabelStyleForOrderScreen }>
            { props.singleLineLabelProps }
          </Text>

          <Text
            style={ [
              styles.dateStyleWhichIsFetchedFromAPIInOrderScreen,
              {
                paddingRight:props.paddingRightPropsForShowdate,
              },
            ] }>
            { props.setSingleLineValueFetched(props.fetchedValueFromAPI) }
            { props.singleLineValueProps == null
              ? '-'
              : props.singleLineValueProps }
          </Text>
        </View>
      </>
    );
  } else if (props.show == 'SmallTouchableOpacity')
  {
    return (
      <>
        <TouchableOpacity
          onPress={ () =>
          {
            if(props.deleteBtnPressedProps)
            {
                  //setAskDeleteOrNotModal(true);
            }else{
            props.todowhenSmallButtonClicked();
            }
          } }
          style={ {
            width:props.widthForSmallButton,
            height:props.heightForSmallButton,
            borderColor: props.borderColorForSmallButtonProps,
            marginHorizontal: responsiveWidth(1),
            //borderWidth: responsiveWidth(0.4),
            borderWidth:props.borderWidthForSmallTouchableOpacity,
            justifyContent: 'center',
            alignItems: 'center',
            //padding:responsiveWidth(0.2),
            borderRadius: responsiveWidth(6),
            backgroundColor: props.backgroundColorForSmallButtonProps,
          } }>
          <Text
            style={ {
              color: props.labelTextColorForSmallButtonProps,
              fontSize: responsiveFontSize(1.9),
              fontFamily: 'raleway-regular',
              marginTop: responsiveHeight(-0.5),
              //alignItems: 'center',
              textAlign: 'center',
            } }>
            { props.labelForSmallButton }
          </Text>
        </TouchableOpacity>



            
      </>
    );
  } else if (props.show == 'NumberLabelOnImage')
  {
    return (
      <>
        <View
          style={ {
            backgroundColor: '#F0CA83',
            //width: responsiveWidth(23),
            width: props.numberLabelWidthProps,
            height: responsiveHeight(4),

            borderBottomEndRadius: responsiveHeight(0.5),
            borderTopStartRadius: responsiveHeight(1),
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          } }>
          <Text
            style={ {
              fontSize: responsiveHeight(2),
              fontFamily: props.fontFamilyPropsforNumberLabel,
              marginLeft: responsiveWidth(2),
            } }>
            { props.numberFetchedFromAPIProps }
          </Text>
        </View>
      </>
    );
  } else if (props.show == 'SimpleViewWithTextInside')
  {
    return (
      <>
        <View
          style={ {
            justifyContent: 'center',
            //backgroundColor: 'transparent',
            //width: responsiveWidth(20),
            //height: responsiveHeight(5),
            //marginLeft: responsiveWidth(78),
            //marginTop: responsiveHeight(1),


            backgroundColor: props.backgroundColorPropsForSimpleViewWithTextInside,
            width: props.widthPropsForSimpleViewWithTextInside,
            height:props.heightPropsForSimpleViewWithTextInside,
            marginLeft:props.marginLeftPropsForSimpleViewWithTextInside,
            marginTop: props.marginTopPropsForSimpleViewWithTextInside,
          } }>
          <Text
            style={ {
              //textAlign: 'center',
              textAlign:props.textAlignProps,
              fontSize:props.fontSizePropsForSimpleViewWithTextInside,
              fontFamily: 'raleway-regular',
            } }>
            { props.showThisText }
          </Text>
        </View>
      </>
    );
  } else if (props.show == 'AddImagesWithInitialGalleryIcons')
  {
    return (
      <>
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
            { props.textToShowProps }
          </Text>

          <View
            style={ { flexDirection: 'row', marginTop: responsiveHeight(3.5) } }>
            <ScrollView horizontal={ true }>



              { props.imageProps.length != 0 ?
                null
                : props.imagePropsOnlyForCamera != null ?
                  null
                  : <TouchableOpacity
                    onPress={ () => { setcameraOrGalleryOptionsModal(!cameraOrGalleryOptionsModal) } }>
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
                  </TouchableOpacity> }

















               <FlatList
                data={ props.imageProps }
                horizontal
                showsHorizontalScrollIndicator={ false }
                renderItem={ ({ item, index }) => (
                  <Image
                    source={ { uri: props.imageProps[index].uri } }
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

              <Image
                source={
                  props.imagePropsOnlyForCamera != null
                    ? { uri: props.imagePropsOnlyForCamera }
                    : null
                }
                style={ {
                  borderRadius: responsiveWidth(2),
                  width: responsiveWidth(18),
                  height: responsiveHeight(13),
                  //marginTop: responsiveHeight(5.2),
                  marginLeft: responsiveWidth(2),
                  marginRight: responsiveWidth(2),
                  marginBottom: responsiveHeight(1.9),
                } }
              />

              <Image
                source={
                  props.imagePropsOnlyForCameraSecond != null
                    ? { uri: props.imagePropsOnlyForCameraSecond }
                    : null
                }
                style={ {
                  borderRadius: responsiveWidth(2),
                  width: responsiveWidth(18),
                  height: responsiveHeight(13),
                  //marginTop: responsiveHeight(5.2),
                  marginLeft: responsiveWidth(2),
                  marginRight: responsiveWidth(2),
                  marginBottom: responsiveHeight(1.9),
                } }
              />

              <Image
                source={
                  props.imagePropsOnlyForCameraThird != null
                    ? { uri: props.imagePropsOnlyForCameraThird }
                    : null
                }
                style={ {
                  borderRadius: responsiveWidth(2),
                  width: responsiveWidth(18),
                  height: responsiveHeight(13),
                  //marginTop: responsiveHeight(5.2),
                  marginLeft: responsiveWidth(2),
                  marginRight: responsiveWidth(2),
                  marginBottom: responsiveHeight(1.9),
                } }
              />

              <Image
                source={
                  props.imagePropsOnlyForCameraFourth != null
                    ? { uri: props.imagePropsOnlyForCameraFourth }
                    : null
                }
                style={ {
                  borderRadius: responsiveWidth(2),
                  width: responsiveWidth(18),
                  height: responsiveHeight(13),
                  //marginTop: responsiveHeight(5.2),
                  marginLeft: responsiveWidth(2),
                  marginRight: responsiveWidth(2),
                  marginBottom: responsiveHeight(1.9),
                } }
              />
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
                      //pickImage();
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

      </>
    );
  } else if (props.show == 'InteractiveModalWithTwoOptions')
  {
    return (
      <>
        <Modal
            transparent={ true }
            visible={ true }
            onRequestClose={ () =>props.doWhenBackBtnPressedOnInteractiveModalWithTwoOptions()}
            >
            <View
              style={ {
                backgroundColor: 'rgba(0,0,0,0.4)',
                flex: 1,
                justifyContent: 'center',
                alignItems:'center',
              } }>
              <View
                style={ { 
                  backgroundColor: 'white', 
                  
                  width:props.widthPropsForInteractiveModal,
                  height:props.heightPropsForInteractiveModal,
                  borderRadius:responsiveWidth(1),
                   } }>
                
                
                
                <Text style={{
                   fontSize: responsiveWidth(4.6),
                    fontFamily: 'raleway-light',   
                    marginLeft: responsiveWidth(5),
                    marginTop:responsiveHeight(2),
                    marginBottom: responsiveHeight(3), 

                }}>
                  {props.questionToAskForInteractiveModalProps}
                </Text>

                

                

                <View style={ { 
                  marginTop:responsiveHeight(1),
                  alignItems: 'center',
                  flexDirection:'row',
                  //justifyContent:'center',
                  //justifyContent:'space-around',   
                   } }>
                  
                  



                  <TouchableOpacity
                    style={ {
                      width: responsiveWidth(31),
                      marginLeft:responsiveWidth(5),
                      alignSelf: 'center',
                      height:responsiveHeight(5),
                      justifyContent: 'center',
                      //borderColor: 'transparent',
                      backgroundColor: '#283E65',
                       elevation: responsiveWidth(1),
                      borderWidth: 0,
                      borderRadius: 5,
                      //borderBottomWidth: 0.5,
                      //borderColor: '#8e8e8e',
                    } }
                    onPress={ () =>
                    {
                      props.tasktoDowhenFirstOptionSelectedProps()
                        //setcallFetchDynamicAPIsInCustomerScreenToDelete(true)
                        //alert('Yes deleting')
                    } }>
                    <Text
                      style={ {
                        fontWeight: '500',
                      fontFamily: 'raleway-medium',
                        color: 'white',
                        textAlign:'center'
                        //marginLeft: responsiveWidth(2.5),
                      } }>
                      {props.interactiveModalFirstOptionLabelProps}
                    </Text>
                  </TouchableOpacity>
                  
                  
                  
                  {/* <Button
                    title={props.interactiveModalFirstOptionLabelProps}
                    onPress={()=>
                      {
                        props.tasktoDowhenFirstOptionSelectedProps()
                        //setcallFetchDynamicAPIsInCustomerScreenToDelete(true)
                        //alert('Yes deleting')
                      
                      }
                    }
                    titleStyle={ {
                      fontWeight: '500',
                      fontFamily: 'raleway-medium',
                    } }
                    buttonStyle={ {
                      width: responsiveWidth(32),
                      backgroundColor: '#283E65',//#013F66
                      borderColor: 'transparent',
                      borderWidth: 0,
                      borderRadius: 5,
                    } }
                  /> */}

                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  <TouchableOpacity
                    style={ {
                      width: responsiveWidth(31),
                      marginLeft:responsiveWidth(4),
                      alignSelf: 'center',
                      height:responsiveHeight(5),
                      justifyContent: 'center',
                      //borderColor: 'transparent',
                      backgroundColor: 'white',
                       elevation: responsiveWidth(1),
                      borderWidth: 0,
                      borderRadius: 5,
                      //borderBottomWidth: 0.5,
                      //borderColor: '#8e8e8e',
                    } }
                    onPress={ () =>
                    {
                      props.tasktoDowhenSecondOptionSelectedProps()
                        //alert('Not deleting')
                    } }>
                    <Text
                      style={ {
                        fontWeight: '500',
                      fontFamily: 'raleway-medium',
                        color: 'black',
                        textAlign:'center'
                        //marginLeft: responsiveWidth(2.5),
                      } }>
                      {props.interactiveModalSecondOptionLabelProps}
                    </Text>
                  </TouchableOpacity>

                 
                </View>
              </View>
            </View>
          </Modal>
      </>
    );
  }
  else if (props.show == 'chip')
  {
    return (
      <>
        <FlatList
    
    data={props.dataForChipProps}   
    numColumns={props.numColumsProps}
    renderItem={({item,index})=>{
      return(
         <TouchableOpacity onPress={()=>{
           setSelectedChip(index);
           props.setSelectedChipTextProps(item);
           //alert('Selected Chip is: '+item);
           
           }}> 
        <View 
        style={{   
          //borderWidth:0.5,
          borderWidth:props.borderWidthChipProps,
          width:props.widthOfChipProps,
          height:props.heightOfChipProps,
          /* To make the chip obtain width of text which is inside chip just comment this above width*/    
          borderRadius:props.borderRadiusOfChipProps,
          marginLeft:props.marginLeftOfChipProps,
          marginTop:props.marginToptOfChipProps,
          padding:props.paddingForTextInsideChipProps,
          flexDirection:'row',
          
          justifyContent:'space-evenly',
          backgroundColor:index==selectedChip?props.selectedbackgroundColorOfChipProps:props.notselectedbackgroundColorOfChipProps,
          }}>

          
          
          
          
          
        
        
        
        
        <Text 
        style={{
          //marginLeft:responsiveWidth(2),  
          //backgroundColor:'yellow',
          //marginVertical:responsiveWidth(2),  
          padding:responsiveHeight(0.5),  
          //flex:1,
          //justifyContent:'center',
          //alignItems:'center',
          
          fontSize:props.fontSizeOfTextInsideChipProps,
          fontFamily:props.fontFamilyOfTextInsideChipProps,
          color:index==selectedChip?props.selectedcolorOfTextInsideChipProps:props.notselectedcolorOfTextInsideChipProps,   
          }}>
          {item}
          </Text>   

          
          
          
          
          
          
          
          
          
          
          </View>
        
         </TouchableOpacity> 
      )
    }}
    />
      </>
    );
  }else if (props.show == 'SingleLineToShowAPIFetchedDataForTestingDashForNoValue')
  {
    return (
      <>
        <View style={ { flexDirection: 'row' } }>
          <Text style={ styles.textlabelStyleForOrderScreen }>
            { props.singleLineLabelProps }
          </Text>


          <Text
            style={ [
              styles.txtStyleWhichIsFetchedFromAPIInOrderScreen,
              {
                marginLeft:props.marginLeftProps,
              },
            ] }>
            { props.setSingleLineValueFetchedForTestingDashForNoValue(props.fetchedValueFromAPIForTestingDashForNoValue) }
            { props.singleLineValuePropsForTestingDashForNoValue == ''
              ? ': -'
              : ': '+props.singleLineValuePropsForTestingDashForNoValue }
          </Text>

          {/* <Text
            style={ [
              styles.txtStyleWhichIsFetchedFromAPIInOrderScreen,
              { marginLeft: responsiveWidth(props.marginLeftProps) },
            ] }>
            :  { props.fetchedValueFromAPI }

          </Text> */}







        </View>
      </>
    );
  }
}
/* THIS IS THE SYNTAX OF USING ALREADY CREATED STYLE AND ALSO ADDING SOME NEW ATTRIBUTEIS IN ALREADY CREATED CONST STYLE :

                                                    style={[styles.container,{NEW ATTRIBUTES HERE},]}       */





/* This above closing curly bracket is for closing AllUITogether() function */
const styles = StyleSheet.create({
  dropDownTopSideLabels: {
    color: 'black',

    fontSize: responsiveFontSize(1.9),
    fontFamily: 'raleway-light',
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
    //textAlign: 'center',    
    textAlign: 'left',     
    marginLeft: responsiveWidth(3),
  },
  dateStyleWhichIsFetchedFromAPIInOrderScreen: {
    fontSize: responsiveHeight(1.6),
    fontFamily: 'raleway-regular',
    color: '#A3A3A3',
    textAlign: 'center',

    marginLeft: responsiveWidth(1),
    flexShrink: 3,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: responsiveHeight(-2),
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
  textInputStyleForMobileNumberInModal: {
    fontFamily: 'raleway-light',
    backgroundColor: 'white',
  },
  textErrorStyleForMobileNumberInModal: {
    color: 'red',
    fontFamily: 'raleway-medium',
    marginBottom: responsiveHeight(5),
    marginLeft: responsiveWidth(4),
  },
  textStyleForQuestionInInteractiveModal: {
    fontSize: responsiveWidth(4.6),
    fontFamily: 'raleway-light',   
    marginLeft: responsiveWidth(5),
    //marginTop:responsiveHeight(-1),
    marginBottom: responsiveHeight(3),
  },
  textCameraOrGalleryModalStyle: {
    fontSize: responsiveWidth(5),
    fontFamily: 'raleway-regular',
    marginLeft: responsiveWidth(2),

    marginBottom: responsiveHeight(2.5),
  },
});
