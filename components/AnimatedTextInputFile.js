/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import
  {
    Dimensions,
    FlatList,
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
    ScrollView,
    LogBox,
  } from 'react-native';
import
  {
    responsiveHeight,
    responsiveWidth
  } from 'react-native-responsive-dimensions';

import { TextInput } from 'react-native-paper';

import { Card } from '@rneui/themed';
import React, { useEffect, useMemo, useState } from 'react';

let { height, width } = Dimensions.get('window');
//import AsyncStorage from '@react-native-async-storage/async-storage';


let sID = 0;

export default function AnimatedTextInputFile(props)
{
  /*Section for putting all const variable or hard coded value for all variable starts here  */

  /* Section for putting all const variable or hard coded value for all variable ends here */






  /* Section for putting all useState starts here: find this section in this file using keyword 'all useState' */





  let [result, setResult] = useState([]);

  let [isLoadingDDLData, setIsLoadingDDLData] = useState(false);

  //let [stateID, setstateID] = useState();




  let [
    resultsecondcustomerFetchedResult,
    setResultsecondcustomerFetchedResult,
  ] = useState([]);


  let [
    resultsecondsupplierFetchedResult,
    setResultsecondsupplierFetchedResult,
  ] = useState([]);



  let [
    resultsecondcategoryFetchedResult,
    setResultsecondcategoryFetchedResult,
  ] = useState([]);


  let [
    resultsecondstateFetchedResult,
    setResultsecondstateFetchedResult,
  ] = useState([]);


  let [
    resultsecondcityFetchedResult,
    setResultsecondcityFetchedResult,
  ] = useState([]);

  let [
    resultsecondcaratListFetchedResult,
    setResultsecondcaratListFetchedResult,
  ] = useState([]);


  let [
    resultsecondcolorListFetchedResult,
    setResultsecondcolorListFetchedResult,
  ] = useState([]);










  const [
    largeDropDownListToFetchAPIClicked,
    setLargeDropDownListToFetchAPIClicked,
  ] = useState(false);












  /* const [
    textToShowInsidelargeDropDownList,
    setTextToShowInsidelargeDropDownList,
  ] = useState('Supplier Customer');  */



  const [
    selectedCustomerFromList,
    setselectedCustomerFromList,
  ] = useState('Select Customer');


  const [
    selectedSupplierFromList,
    setselectedSupplierFromList,
  ] = useState('Select Supplier');


  const [
    selectedCategoryFromList,
    setselectedCategoryFromList,
  ] = useState('Select Category');


  /* const [
    selectedStateFromList,
    setselectedStateFromList,
  ] = useState('State');


  const [
    selectedCityFromList,
    setselectedCityFromList,
  ] = useState('City'); */


  const [
    selectedCaratListFromList,
    setselectedCaratListFromList,
  ] = useState('24ct');


  const [
    selectedColorFromList,
    setselectedColorFromList,
  ] = useState('Yellow');




















  const [
    searchTextInputVisible,
    setSearchTextInputVisible,
  ] = useState(true);






















  const [isClicked, setIsClicked] = useState(false);







  const [searchTextInputForStateGotFocus, setSearchTextInputForStateGotFocus] =
    useState(false);










  //const searchRef = useRef();
  //const searchRefCity = useRef();

  const [query, setQuery] = useState('');




  //const [stateIDAutoFetchedFromAPI, setstateIDAutoFetchedFromAPI] = useState();      


  //const [findCityListFromThisID, setfindCityListFromThisID] = useState();
















  /*Section for putting all functions which are reuseable starts here: find this section in this file using keyword 'all functions' */

  useEffect(() =>
  {

    //functions insdie Use effect executes once our Register first screen is opened and all components are loaded, and another time
    //when NextRegisterScreen.js opens and all the UI from NextRegisterationScreen.js file gets loaded. 
    //SPECIAL NOTE ONCE THE NEXTREGISTERATIONSCREEN.JS ALL UI GETS LOADED SUCCESSFULLY, AFTER THAT WHEN WE SELECT ANY 
    //DROP DOWN FROM NEXTREGISTERATIONSCREEN.JS AT THAT TIME USEEFFECT() DO NOT EXECUTES. SO PUTTING getData() inside
    //useEffect() will call getData() next time when we open the Registeration.js and by that time we should have
    //already completed submitting our new registeration all data like state and city. 
    //alert('useEffect executed...');


    //alert('State id data deleted...');
  }, []);


  useEffect(() => {
    //LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreAllLogs();
}, [])











  const filteredItems = useMemo(() =>
  {

    if (props.selectSetter == 'ForCustomer')
    {
      return resultsecondcustomerFetchedResult.filter((item) =>
      {
        return item.name.toLowerCase().includes(query.toLowerCase());
      });
    } else if (props.selectSetter == 'ForSupplier')
    {
      return resultsecondsupplierFetchedResult.filter((item) =>
      {
        return item.name.toLowerCase().includes(query.toLowerCase());
      });
    } else if (props.selectSetter == 'ForCategory')
    {
      return resultsecondcategoryFetchedResult.filter((item) =>
      {
        return item.category_name.toLowerCase().includes(query.toLowerCase());
      });
    } else if (props.selectSetter == 'ForState')
    {
      return resultsecondstateFetchedResult.filter((item) =>
      {
        return item.state_title.toLowerCase().includes(query.toLowerCase());
      });
    } else if (props.selectSetter == 'ForCity')
    {
      return resultsecondcityFetchedResult.filter((item) =>
      {
        return item.name.toLowerCase().includes(query.toLowerCase());
      });
    } else if (props.selectSetter == 'ForCaratList')
    {


      return resultsecondcaratListFetchedResult.filter((item) =>
      {



        return item.carat_name.toLowerCase().includes(query.toLowerCase());
        //return item.carat_name.includes(query);


      });



    }




    else if (props.selectSetter == 'ForColorList')
    {
      return resultsecondcolorListFetchedResult.filter((item) =>
      {
        return item.color_name.toLowerCase().includes(query.toLowerCase());
      });
    }






  }, [query]);



  /* 
  
  [resultsecondcustomerFetchedResult,resultsecondsupplierFetchedResult,resultsecondcategoryFetchedResult,resultsecondstateFetchedResult,resultsecondcityFetchedResult,resultsecondcaratListFetchedResult,resultsecondcolorListFetchedResult,props.selectSetter,query]
   */
















  const fetchAPIUsingAccessToken = () =>
  {
    setIsLoadingDDLData(true);
    //alert('AC:'+ props.accessTokenprops);
    console.log('Fetch Customer function executing..');

    fetch(
      'https://rajeshwersoftsolution.com/jwelcart/api/' +
      props.largeDropDownListOnPressCallThisAPI,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + props.accessTokenprops,
        },
        body: JSON.stringify({
          action: props.actionprops,
          start: props.startprops,
          limit: props.limitprops,
          state_id: props.state_idprops != '' ? sID : null,
          city_id: props.city_idprops,
          search_all: props.search_allprops,
          sortby_name: props.sortby_nameprops,

          //since we do not want to pass mobile_no and password while fetching some API we comment it
          //like this only we can always keep some unwanted keys inside body:JSON.stringify({...}) but

          //mobile_no: props.mobile_noprops,
          //password: props.passwordprops,





        }),
      }
    )
      .then((response) =>
      {
        result = response.json();
        result.then((values) =>
        {
          setIsLoadingDDLData(false);

          if (values.result == false)
          {
            setSearchTextInputVisible(false);
            alert(values.message);
          }


          if (props.selectSetter == 'ForCustomer')
          {
            //alert(''+values);         
            setResultsecondcustomerFetchedResult(values.data.customer);
          } else if (props.selectSetter == 'ForSupplier')
          {
            setResultsecondsupplierFetchedResult(values.data.supplier);
          } else if (props.selectSetter == 'ForCategory')
          {

            setResultsecondcategoryFetchedResult(values.data);
          } else if (props.selectSetter == 'ForState')
          {
            
            
            setResultsecondstateFetchedResult(values.data);
          } else if (props.selectSetter == 'ForCity')  
          {
            
            setResultsecondcityFetchedResult(values.data);
          } else if (props.selectSetter == 'ForCaratList')
          {
            //alert('Select Carat is:'+values.message);     
            setResultsecondcaratListFetchedResult(values.data);
          } else if (props.selectSetter == 'ForColorList')
          {

            setResultsecondcolorListFetchedResult(values.data);
          }
        });
      })

      .catch((error) =>
      {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
      });
  };








































  /* Section for putting all functions which are reuseable ends here: find this section in this file using keyword 'all functions' */

  if (props.showHere == 'animatedTextInput')
  {
    return (
      <>
        <TextInput
          style={ {
            backgroundColor: 'white',
            fontFamily: props.animatedTextInputInsideFonts,
            fontSize: props.animatedTextInputFontsSize,
            marginTop: props.marginTopProps,
            //borderColor:'#8e8e8e', 
            //borderWidth: 0.5,
            //borderColor:'purple',    
          } }
          label={ props.lableprops }
          mode="outlined"
          keyboardType={ props.keyboardTypeProps }
          value={ props.animatedTextInputValueprops }
          onChangeText={ (textenteredbyUser) =>
            props.animatedTextInputsetterMethod(textenteredbyUser)
          }
          theme={ {
            roundness: responsiveWidth(10),
            colors: { primary: '#2B95E1', underlineColor: 'transparent' },
          } }
          left={ <TextInput.Icon icon={ props.animatedTextInputLeftIcon } /> }
        />
      </>
    );
  } else if (props.show == 'AnimatedTextInputDDL')
  {
    /* This AnimatedTextInputDDL has been used in files namely:
    1. NextRegisterScreen.js
    2. EditOrderScreen.js
    3. EditOrderScreenSecond.js */
    return (
      <>

      
        <Modal
          transparent={ true }
          visible={ largeDropDownListToFetchAPIClicked }
          onRequestClose={ () =>
            setLargeDropDownListToFetchAPIClicked(false)

          }>
          <ScrollView
            keyboardShouldPersistTaps="always"
           // nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}        
            bounces={false}>
          <View
            style={ {
              backgroundColor: 'rgba(0,0,0,0.4)',
              flex: 1,
              justifyContent: 'center',
            } }>
            <View style={ { backgroundColor: 'white', padding: 13, margin: 25 } }>
              <View style={ { alignItems: 'center' } }>
                <Text
                  focus
                  style={ [
                    styles.textSelectStateModalStyle,
                    {
                      marginBottom:
                        searchTextInputForStateGotFocus == false
                          ? responsiveHeight(6)
                          : responsiveHeight(6),
                    },
                  ] }>
                  { props.modalToplabelProps }
                </Text>
              </View>



              { searchTextInputVisible == false ? (<Text>No Record found</Text>) : (<TextInput
                style={ styles.searchInputStyle }
                label="Search"
                onFocus={ () =>
                  setSearchTextInputForStateGotFocus(true) || setIsClicked(true)
                }
                onBlur={ () =>
                  setSearchTextInputForStateGotFocus(false) ||
                  setIsClicked(false)
                }
                outlineColor="grey"
                /*  onKeyPress={({ nativeEvent }) => {
                      nativeEvent.key === 'Backspace' ? fetchState() : null;
                    }} */
                mode="outlined"
                onChangeText={ (value) => setQuery(value) }
                theme={ {
                  roundness: responsiveWidth(2),
                  colors: {
                    primary: '#2B95E1',
                    underlineColor: 'transparent',
                  },
                } }
                left={
                  isClicked ? (
                    <TextInput.Icon
                      icon={ require('../images/searchIconTransparent.png') }
                      color="#2B95E1"
                    />
                  ) : (
                    <TextInput.Icon
                      icon={ require('../images/searchIconTransparent.png') }
                      color="#AEAEAE"
                    />
                  )
                }
              />) }


              {isLoadingDDLData == true ? (
                <>
                <View style={ styles.dropDownAreaStyle }>
                    <ActivityIndicator size="large" color="#013F66" style={{marginTop:responsiveHeight(30)}} />
                    </View>
                    </>
                  ) : (
                    <>  



              <View style={ styles.dropDownAreaStyle }>
                { query == '' ? (
                  
                  <ScrollView
            keyboardShouldPersistTaps="always"
           nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}        
            bounces={false}>
            
                  <FlatList

                    data={ props.selectSetter == 'ForCustomer' ? resultsecondcustomerFetchedResult
                      : props.selectSetter == 'ForSupplier' ? resultsecondsupplierFetchedResult
                        : props.selectSetter == 'ForCategory' ? resultsecondcategoryFetchedResult
                          : props.selectSetter == 'ForState' ? resultsecondstateFetchedResult
                            : props.selectSetter == 'ForCity' ? resultsecondcityFetchedResult
                              : props.selectSetter == 'ForCaratList' ? resultsecondcaratListFetchedResult
                                : resultsecondcolorListFetchedResult }



                    showsVerticalScrollIndicator={ false }
                    //style={{backgroundColor:'blue'}}

                    renderItem={ ({ item, index }) =>
                    {
                      return (
                        <Card
                          containerStyle={ {
                            height: responsiveHeight(7),
                            width: responsiveWidth(70),
                            //borderRadius:responsiveWidth(0),
                            elevation: responsiveWidth(2),
                            //marginBottom:responsiveHeight(3),
                            backgroundColor: '#F5F5F5',

                            alignSelf: 'center',
                          } }>



                          <TouchableOpacity
                            style={ styles.countryItemsStyle }
                            onPress={ () =>
                            {
                              
                              if (props.selectSetter == 'ForCustomer')
                              {

                                //props.setselectedCustomerFromListProps(item.name);
                                props.setselectedCustomerFromListProps(item.name);
                                props.setselectedCustomerIDFromListProps(item.id);
                                setLargeDropDownListToFetchAPIClicked(
                                  !largeDropDownListToFetchAPIClicked
                                );
                              } else if (props.selectSetter == 'ForSupplier')
                              {
                                //setselectedSupplierFromList(item.name);
                                props.setselectedSupplierFromListProps(item.name);
                                props.setselectedSupplierIDFromListProps(item.id);
                                setLargeDropDownListToFetchAPIClicked(
                                  !largeDropDownListToFetchAPIClicked
                                );
                              } else if (props.selectSetter == 'ForCategory')
                              {
                                //setselectedCategoryFromList(item.category_name);
                                props.setselectedCategoryFromListProps(item.category_name);
                                props.setselectedCategoryIDFromListProps(item.id);
                                setLargeDropDownListToFetchAPIClicked(
                                  !largeDropDownListToFetchAPIClicked
                                );
                              } else if (props.selectSetter == 'ForState')
                              {
                                
                                props.setselectedStateFromListProps(item.state_title);
                                props.setselectedStateIDFromListProps(item.id);
                                //alert('State ID fetched is'+item.id);
                                sID = item.id;


                                setLargeDropDownListToFetchAPIClicked(
                                  !largeDropDownListToFetchAPIClicked
                                );



                              } else if (props.selectSetter == 'ForCity')
                              {

                                props.setselectedCityFromListProps(item.name);
                                props.setselectedCityIDFromListProps(item.id);
                                //alert('City ID fetched is'+item.id);
                                setLargeDropDownListToFetchAPIClicked(
                                  !largeDropDownListToFetchAPIClicked
                                );


                              } else if (props.selectSetter == 'ForCaratList')
                              {

                                //setselectedCaratListFromList(item.carat_name);
                                props.setselectedCaratListFromListProps(item.carat_name);
                                props.setselectedCaratIDFromListProps(item.id);
                                setLargeDropDownListToFetchAPIClicked(
                                  !largeDropDownListToFetchAPIClicked
                                );


                              } else if (props.selectSetter == 'ForColorList')
                              {

                                //setselectedColorFromList(item.color_name);
                                props.setselectedColorFromListProps(item.color_name);
                                props.setselectedColorIDFromListProps(item.id);
                                setLargeDropDownListToFetchAPIClicked(
                                  !largeDropDownListToFetchAPIClicked
                                );


                              }
                              
                            } }>
                            <Text
                              style={ {
                                fontFamily: 'raleway-light',
                                alignItems: 'center',
                              } }>
                              { props.selectSetter == 'ForCustomer' ? item.name+' ('+item.id+')'
                                : props.selectSetter == 'ForSupplier' ? item.name+' ('+item.id+')'
                                  : props.selectSetter == 'ForCategory' ? item.category_name
                                    : props.selectSetter == 'ForState' ? item.state_title+' ('+item.id+')'
                                      : props.selectSetter == 'ForCity' ? item.name+' ('+item.id+')'
                                        : props.selectSetter == 'ForCaratList' ? item.carat_name+' ('+item.id+')'
                                          : item.color_name+' ('+item.id+')'
                              }

                            </Text>
                          </TouchableOpacity>
                        </Card>
                      );
                    } }
                  />
                  </ScrollView>
                ) : (
                  <ScrollView
            keyboardShouldPersistTaps="always"
           nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}        
            bounces={false}>
                  <FlatList
                    data={ filteredItems }

                    showsVerticalScrollIndicator={ false }
                    //style={{backgroundColor:'blue'}}

                    renderItem={ ({ item, index }) =>
                    {
                      return (
                        <Card
                          containerStyle={ {
                            height: responsiveHeight(7),
                            width: responsiveWidth(70),
                            //borderRadius:responsiveWidth(0),
                            elevation: responsiveWidth(2),
                            //marginBottom:responsiveHeight(3),
                            backgroundColor: '#F5F5F5',

                            alignSelf: 'center',
                          } }>
                          <TouchableOpacity
                            style={ styles.countryItemsStyle }
                            onPress={ () =>
                            {
                              
                              if (props.selectSetter == 'ForCustomer')
                              {
                                //props.setselectedCustomerFromListProps(item.name);
                                  props.setselectedCustomerFromListProps(item.name); 
                                  props.setselectedCustomerIDFromListProps(item.id);         
                                setLargeDropDownListToFetchAPIClicked(
                                  !largeDropDownListToFetchAPIClicked
                                );
                              } else if (props.selectSetter == 'ForSupplier')
                              {
                                props.setselectedSupplierFromListProps(item.name);
                                props.setselectedSupplierIDFromListProps(item.id);
                                setLargeDropDownListToFetchAPIClicked(
                                  !largeDropDownListToFetchAPIClicked
                                );
                              } else if (props.selectSetter == 'ForCategory')
                              {
                                props.setselectedCategoryFromListProps(item.category_name);
                                props.setselectedCategoryIDFromListProps(item.id);
                                setLargeDropDownListToFetchAPIClicked(
                                  !largeDropDownListToFetchAPIClicked
                                );
                              } else if (props.selectSetter == 'ForState')
                              {
                                props.setselectedStateFromListProps(item.state_title);
                                 props.setselectedStateIDFromListProps(item.id);
                                 //alert('State ID fetched is'+item.id);
                                //setstateIDAutoFetchedFromAPI(item.id);
                                sID = item.id;
                                setLargeDropDownListToFetchAPIClicked(
                                  !largeDropDownListToFetchAPIClicked
                                );
                                //alert('State ID saved in useState variable is:+')
                              } else if (props.selectSetter == 'ForCity')
                              {
                                props.setselectedCityFromListProps(item.name);
                                props.setselectedCityIDFromListProps(item.id);
                                //alert('City ID fetched is'+item.id);
                                setLargeDropDownListToFetchAPIClicked(
                                  !largeDropDownListToFetchAPIClicked
                                );
                              } else if (props.selectSetter == 'ForCaratList')
                              {
                                //getData();
                                props.setselectedCaratListFromListProps(item.carat_name);
                                props.setselectedCaratIDFromListProps(item.id);
                                setLargeDropDownListToFetchAPIClicked(
                                  !largeDropDownListToFetchAPIClicked
                                );

                                //removeDataForStateID();    
                              } else if (props.selectSetter == 'ForColorList')
                              {

                                props.setselectedColorFromListProps(item.color_name);
                                props.setselectedColorIDFromListProps(item.id);
                                setLargeDropDownListToFetchAPIClicked(
                                  !largeDropDownListToFetchAPIClicked
                                );


                              }
                            } }>
                            <Text
                              style={ {
                                fontFamily: 'raleway-light',
                                alignItems: 'center',
                              } }>
                              { props.selectSetter == 'ForCustomer' ? item.name+' ('+item.id+')'
                                : props.selectSetter == 'ForSupplier' ? item.name+' ('+item.id+')'
                                  : props.selectSetter == 'ForCategory' ? item.category_name
                                    : props.selectSetter == 'ForState' ? item.state_title+' ('+item.id+')'
                                      : props.selectSetter == 'ForCity' ? item.name+' ('+item.id+')'
                                        : props.selectSetter == 'ForCaratList' ? item.carat_name+' ('+item.id+')'
                                          : item.color_name+' ('+item.id+')'   
                              }
                            </Text>
                          </TouchableOpacity>
                        </Card>
                      );
                    } }
                  />
                  </ScrollView>
                ) }
              </View>
              </>
                  )
              }
            </View>
          </View>
            </ScrollView>      
          {/*Modal for State selection ends here  */ }
        </Modal>
        


        <TouchableOpacity
          onPress={ () =>
          {
            
            
            fetchAPIUsingAccessToken();
            setLargeDropDownListToFetchAPIClicked(
              !largeDropDownListToFetchAPIClicked
            );
            setQuery('');

            setResultsecondcityFetchedResult([]);
          } }>
          <View
            style={ {
              width: props.ddlWidth,
              //height: 50,
              height:props.heightOfDDLprops,
              borderRadius: 30,
              borderWidth: props.ddlboarderThickness,
              //borderColor: '#8e8e8e',
              borderColor: props.ddlBoarderColor,
              alignSelf: 'center',
              //marginVertical: responsiveHeight(0.9),
              marginTop: props.marginTopPropsForDDL,
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
                  style={ {
                    width: 23,
                    height: 23,
                    tintColor:props.tintColorForDDLIconLeft,
                    //tintColor: '#283E65',
                    
                  } }
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
                  //justifyContent:props.justifyContentPropsForText,
                  //alignSelf: 'center',
                  marginLeft: props.ddlTextmarginLeft,
                  //width: responsiveWidth(40),
                  width: props.widthForTextInDDLprops,
                  //backgroundColor: 'blue',
                  //flexDirection:'row',
                } }>
                {/* This text is for showing text when DDL is not touched also but kept steady */ }

                <Text
                  style={ {
                    //color: '#2D2D2D',
                    color: props.ddlInsideTextFontColor,
                    fontSize: props.ddlInsideTextFontSize,
                    fontFamily: props.ddlInsideTextFontName,
                  } }>

                  { props.selectSetter == 'ForCustomer' ? props.selectedCustomerFromListProps
                    : props.selectSetter == 'ForSupplier' ? props.selectedSupplierFromListProps
                      : props.selectSetter == 'ForCategory' ? props.selectedCategoryFromListProps
                        : props.selectSetter == 'ForState' ? props.selectedStateFromListProps
                          : props.selectSetter == 'ForCity' ? props.selectedCityFromListProps   
                            : props.selectSetter == 'ForCaratList' ? props.selectedCaratListFromListProps
                              : props.selectedColorFromListProps
                  }   

                </Text>





              </View>
            </View>

            <View
              style={ {
                width: responsiveWidth(11),
                height: responsiveHeight(5),
                //marginLeft:props.itemIconPropslabel==null?responsiveWidth(22):responsiveWidth(22),
                marginLeft: props.ddlDownArrowIconmarginLeft,
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
                  //source={ require('../images/dropdowncurved.png') }
                  source={ props.dropdownIconProps }
                  style={ { width: 20, height: 20 } }
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  }










}
/* This above closing curly bracket is for closing AllUITogether() function */
const styles = StyleSheet.create({
  searchInputStyle: {
    width: responsiveWidth(65),
    //height: responsiveHeight(9),
    //justifyContent:'center',
    alignSelf: 'center',
    marginBottom: responsiveHeight(1),

    fontFamily: 'raleway-extraLight',
    backgroundColor: 'white',
    //borderColor:'greeen',
  },

  countryItemsStyle: {
    width: '85%',

    marginTop: responsiveHeight(-0.5),
    alignSelf: 'center',
    height: 50,
    //backgroundColor:'#FAF9F6',
    //justifyContent: 'center',
    //borderBottomWidth: 0.2,
    borderBottomColor: '#8e8e8e',
    //marginBottom:responsiveHeight(3),
  },
  dropDownAreaStyle: {
    //elevation: 5,
    //marginTop: 20,
    height: 500,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
  },



  textSelectStateModalStyle: {
    fontSize: responsiveWidth(6),
    fontFamily: 'raleway-medium',
    alignItems: 'center',

    marginBottom: responsiveHeight(6),
  },
});


