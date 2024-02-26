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
  ImageBackground,
  Text,
  TouchableOpacity,
  View
 } from 'react-native';

//import { Camera } from 'expo-camera';
import { TextInput } from 'react-native-paper';
//import * as MediaLibrary from 'expo-media-library';
import { getFormatedDate } from 'react-native-modern-datepicker';
import AllUITogether from '../components/AllUITogether';
import AnimatedTextInputFile from '../components/AnimatedTextInputFile';

import
 {
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

const ChangePassword = ({ route, navigation }) =>
{

let [itemname, setitemname] = useState('');




const gotoPreviousScreen = () =>
 {
   navigation.goBack();    
  /* navigation.navigate('HomeScreen', {
   accessTokenKey: accessTokenSentToAddOrderScreen,
  }); */
 };


 const updateSettings = () =>    
 {
  /* navigation.navigate('HomeScreen', {
   accessTokenKey: accessTokenSentToAddOrderScreen,
  }); */
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




   
  {/*View which will hold back arrow image and EDIT ORDER text starts here  */}
                <View style={{
                  marginTop:responsiveHeight(-27),    
                  //backgroundColor:'purple',
                  }}>
                <View
                  style={{
                    marginTop: responsiveHeight(0.5),
                    marginLeft: responsiveWidth(-4),
                    //marginBottom: responsiveHeight(10),
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
                      iconDesignName={'left'}
                colorForIconinAntDesignBtn={'gold'}
                backgroundColorForIconinAntDesignBtn={'transparent'}
                sizeForIconinAntDesignBtn={26}
                boardRadiusForIconinAntDesignBtn={10}
                widthForIconinAntDesignBtn={11}
                heightForIconinAntDesignBtn={6}
                marginLeftForIconinAntDesignBtn={5}
                marginTopForIconinAntDesignBtn={1.5}   
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
            marginTopForIconinAntDesignBtn={responsiveHeight(1.5)}   
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
                      topPageName={'CHANGE'}
                      marginLeftPropsForCenterTopTextForPageName={-7}
                      marginTopPropsForCenterTopTextForPageName={0}
                    />

                    <AllUITogether
                      show={'CenterTopTextForPageName'}
                      topPageName={'PASSWORD'}
                      marginLeftPropsForCenterTopTextForPageName={-7}
                      marginTopPropsForCenterTopTextForPageName={-2}
                    />
                  </View>
                </View>
                </View>

                {/*View which will hold back arrow image and EDIT ORDER text ends here   */ }



     { /*  <ScrollView    
       keyboardShouldPersistTaps="always"
          
        showsVerticalScrollIndicator={false}
        bounces={false}
        > */}

       
  <Card
    containerStyle={{
      height:responsiveHeight(38),    
      //height:height,
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



    <TextInput
      style={styles.textInputStyleOnlyForName}
      //onFocus={()=>settypingItemName(true)}
      //onBlur={()=>settypingItemName(false)}
      //style={ styles.textInputStyle }
      label="Item Name"
      mode="outlined"
      value={itemname}
      onChangeText={(value) => setitemname(value)}
      theme={styles.themeStyleForAnimatedTextInput}
    />



    <TextInput
      style={[styles.textInputStyleOnlyForName,{marginTop:responsiveHeight(2)}]}
      //onFocus={()=>settypingItemName(true)}
      //onBlur={()=>settypingItemName(false)}
      //style={ styles.textInputStyle }
      label="Item Name"
      mode="outlined"
      value={itemname}
      onChangeText={(value) => setitemname(value)}
      theme={styles.themeStyleForAnimatedTextInput}
    />




       {/*<AllUITogether
      show={'ThickRoundedBtn'}
      widthPropsForthickbtn={81}  
      marginLeftPropsForthickbtn={0}
      marginTopPropsForthickbtn={3.5}      
      heightPropsForthickbtn={7.5}
      backgroundColorPropsForthickbtn={'#283E65'}
      borderRadiusPropsForthickbtn={10}
      thickbtnOnpressprops={updateSettings}
      thickbtnTitleprops={'Update Settings'}
      fontFamilyPropsForthickbtn={'raleway-semibold'}
      fontcolorPropsForthickbtn={'white'}
      fontSizePropsForthickbtn={2.2}  
      paddingForthickbtn={1.5} 
      /> */}
      <AllUITogether
      show={'ThickRoundedBtn'}
      widthPropsForthickbtn={responsiveWidth(81)}  
      marginLeftPropsForthickbtn={responsiveWidth(0)}
      marginTopPropsForthickbtn={responsiveHeight(3.5)}
      heightPropsForthickbtn={responsiveHeight(7.5)}
      backgroundColorPropsForthickbtn={'#283E65'}
      borderRadiusPropsForthickbtn={responsiveWidth(10)}
      
      thickbtnOnpressprops={updateSettings}
      thickbtnTitleprops={'Update Settings'}
      fontFamilyPropsForthickbtn={'raleway-semibold'}
      fontcolorPropsForthickbtn={'white'}
      fontSizePropsForthickbtn={responsiveFontSize(2.2)}   
      paddingForthickbtn={responsiveHeight(1.5)}
      />

     {/*  <AllUITogether
      show={ 'SmallTouchableOpacity' }
      labelForSmallButton={ 'Update Settings' }
      todowhenSmallButtonClicked={
        updateSettings
      }
      widthForSmallButton={ 81 }
      heightForSmallButton={ 7.5 }
      backgroundColorForSmallButtonProps={ '#283E65' }
      borderColorForSmallButtonProps={ '#283E65' }
      labelTextColorForSmallButtonProps={ '#fff' }
      borderWidthForSmallTouchableOpacity={ 0.3 }    
    /> */}



    {/*Our UI in Card ends here  */}
    </ScrollView>
    </Card>
  
  {/* </ScrollView> */}
  {/*  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
   <Text>Hi</Text>
   </View> */}   
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
 textInputStyleOnlyForName: {
    fontFamily: 'raleway-light',

    backgroundColor: 'white',
    marginTop: responsiveHeight(0.5),
  },
  themeStyleForAnimatedTextInput: {
    roundness: responsiveWidth(10),
    colors: {
      primary: '#2B95E1', //blue

      underlineColor: 'transparent',
    },
  },

});

export default ChangePassword;
