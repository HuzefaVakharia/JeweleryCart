/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React, { useState, useRef, useEffect } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions, ScrollView, TouchableOpacity, TextInput, Keyboard, LogBox, } from 'react-native';
import
  {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
  } from 'react-native-responsive-dimensions';
import AllUITogether from '../components/AllUITogether';
import { Button, Card } from '@rneui/themed';
import DatePicker from 'react-native-modern-datepicker';
import FetchDynamicAPIs from '../components/FetchDynamicAPIs';
import { Chip } from 'react-native-paper';
import { getFormatedDate } from 'react-native-modern-datepicker';
import AnimatedTextInputFile from '../components/AnimatedTextInputFile';
let { height, width } = Dimensions.get('window');

/* Keyboard double tap issue solution: https://medium.com/react-native-training/todays-react-native-tip-keyboard-issues-in-scrollview-8cfbeb92995b#:~:text=Fix%3A%20keyboardShouldPersistTaps,tapping%20elsewhere%20on%20the%20screen.&text=In%20the%20above%20example%2C%20the%20keyboardShouldPersistTaps%20is%20set%20to%20always. */


const BottomModalScreen = (props) =>
{

  useEffect(() => {
    //LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreAllLogs();
}, [])

  const [selectedChipText, setSelectedChipText] = useState('');
  const [selectedChipTextForsortByOrderNumber, setSelectedChipTextForsortByOrderNumber] = useState('');
  const [selectedChipTextFororderFor, setSelectedChipTextFororderFor] = useState('');

  const statusDataSourceForChip = ["Pending", "Process", "Dispatch", "Delivered", "Cancel", "Error"];
  const sortByOrderNumberDataSourceForChip = ["Ascending", "Descending"];
  const orderForDataSourceForChip = ["Client", "Stock"];




  const [modalVisible, setModalVisible] = useState(false);
  let [bellNotificationNumber, setBellNotificationNumber] = useState(0);
  const [callFetchDynamicAPIsInBottomModalScreenToApply,setcallFetchDynamicAPIsInBottomModalScreenToApply] = useState(false);

  const searchTopSmallIconPressedDoThis = () =>
  {
    //alert('search icon button pressed...');
    setModalVisible(true);
  };

  const clearBtnPressedDoThis = () =>
  {
    alert('btn pressed')
  }





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






  const inputRef = useRef();

  const [todaysDate, settodaysDate] = useState(today.getDate());
  const [currentMonthName, setcurrentMonthName] = useState(monthNames[new Date().getMonth()]);
  const [weekday, setweekday] = useState(daysName[new Date().getDay()]);




  const [selectedDateIEFromForOrderDateRange, setSelectedDateIEFromForOrderDateRange] = useState('From');

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
    setSelectedDateIEFromForOrderDateRange(dateTypedByUser),
      setOpenStartDatePickerWithTextInput(!openStartDatePickerWithTextInput)

  }



  /* Methods and useState Hooks for First Date picker for 'From' in Order Date Range ends here  */


















  /* Second date picker useState and functions */
  /* Methods and useState Hooks for Second Date picker for 'To' in Order Date Range starts here  */




  const todayForDateIEToForOrderDateRange = new Date();
  const [openStartDatePickerForDateIEToForOrderDateRange, setOpenStartDatePickerForDateIEToForOrderDateRange] = useState(false);


  const [openStartDatePickerWithTextInputForDateIEToForOrderDateRange, setOpenStartDatePickerWithTextInputForDateIEToForOrderDateRange] = useState(false); // open close modal

  let dateEnteredOutOfRangeForDateIEToForOrderDateRange = 'no';
  let [dateTypedByUserForDateIEToForOrderDateRange, setDateTypedByUserForDateIEToForOrderDateRange] = useState('');



  const startDateForDateIEToForOrderDateRange = getFormatedDate(
    todayForDateIEToForOrderDateRange.setDate(todayForDateIEToForOrderDateRange.getDate()),
    'YYYY/MM/DD'
  );

  const inputRefForDateIEToForOrderDateRange = useRef();


  const [todaysDateForDateIEToForOrderDateRange, settodaysDateForDateIEToForOrderDateRange] = useState(todayForDateIEToForOrderDateRange.getDate());
  const [currentMonthNameForDateIEToForOrderDateRange, setcurrentMonthNameForDateIEToForOrderDateRange] = useState(monthNames[new Date().getMonth()]);
  const [weekdayForDateIEToForOrderDateRange, setweekdayForDateIEToForOrderDateRange] = useState(daysName[new Date().getDay()]);


  const [selectedDateIEToForOrderDateRange, setSelectedDateIEToForOrderDateRange] = useState('To');
  const [startedDateForDateIEToForOrderDateRange, setStartedDateForDateIEToForOrderDateRange] = useState(startDateForDateIEToForOrderDateRange);


  let givenDateForDateIEToForOrderDateRange = '';

  const handleOnPressStartDateForDateIEToForOrderDateRange = () =>
  {
    setOpenStartDatePickerForDateIEToForOrderDateRange(!openStartDatePickerForDateIEToForOrderDateRange);
  };





  function handleChangeStartDateForDateIEToForOrderDateRange(propDate)
  {
    setStartedDateForDateIEToForOrderDateRange(propDate);
    //setStartDate(propDate);
  }


  const editDateIconPressedDoThisForDateIEToForOrderDateRange = () =>
  {
    setOpenStartDatePickerWithTextInputForDateIEToForOrderDateRange(true);
    setOpenStartDatePickerForDateIEToForOrderDateRange(!openStartDatePickerForDateIEToForOrderDateRange);
  }



  const calenderIconPressedDoThisForDateIEToForOrderDateRange = () =>
  {
    setOpenStartDatePickerWithTextInputForDateIEToForOrderDateRange(false);
    setOpenStartDatePickerForDateIEToForOrderDateRange(!openStartDatePickerForDateIEToForOrderDateRange);
  }



  const dateEnteredIsOkForDateIEToForOrderDateRange = () =>
  {

    //alert('Keyboard dismissed and showing alert at once')
    setSelectedDateIEToForOrderDateRange(dateTypedByUserForDateIEToForOrderDateRange),
      setOpenStartDatePickerWithTextInputForDateIEToForOrderDateRange(!openStartDatePickerWithTextInputForDateIEToForOrderDateRange)

  }

  /* Methods and useState Hooks for Second Date picker for 'To' in Order Date Range ends here  */






















  /* Third date picker useState and functions */
  /* Methods and useState Hooks for First Date picker for 'From' in Delivery Date Range starts here  */




  const todayForDateIEFromForDeliveryDateRange = new Date();
  const [openStartDatePickerForDateIEFromForDeliveryDateRange, setOpenStartDatePickerForDateIEFromForDeliveryDateRange] = useState(false);



  const [openStartDatePickerWithTextInputForDateIEFromForDeliveryDateRange, setOpenStartDatePickerWithTextInputForDateIEFromForDeliveryDateRange] = useState(false); // open close modal

  let dateEnteredOutOfRangeForDateIEFromForDeliveryDateRange = 'no';
  let [dateTypedByUserForDateIEFromForDeliveryDateRange, setDateTypedByUserForDateIEFromForDeliveryDateRange] = useState('');



  const startDateForDateIEFromForDeliveryDateRange = getFormatedDate(
    todayForDateIEFromForDeliveryDateRange.setDate(todayForDateIEFromForDeliveryDateRange.getDate()),
    'YYYY/MM/DD'
  );

  const inputRefForDateIEFromForDeliveryDateRange = useRef();

  const [todaysDateForDateIEFromForDeliveryDateRange, settodaysDateForDateIEFromForDeliveryDateRange] = useState(todayForDateIEFromForDeliveryDateRange.getDate());
  const [currentMonthNameForDateIEFromForDeliveryDateRange, setcurrentMonthNameForDateIEFromForDeliveryDateRange] = useState(monthNames[new Date().getMonth()]);
  const [weekdayForDateIEFromForDeliveryDateRange, setweekdayForDateIEFromForDeliveryDateRange] = useState(daysName[new Date().getDay()]);


  const [selectedDateIEFromForDeliveryDateRange, setSelectedDateIEFromForDeliveryDateRange] = useState('From');
  const [startedDateForDateIEFromForDeliveryDateRange, setStartedDateForDateIEFromForDeliveryDateRange] = useState(startDateForDateIEFromForDeliveryDateRange);


  let givenDateForDateIEFromForDeliveryDateRange = '';

  const handleOnPressStartDateForDateIEFromForDeliveryDateRange = () =>
  {
    setOpenStartDatePickerForDateIEFromForDeliveryDateRange(!openStartDatePickerForDateIEFromForDeliveryDateRange);
  };





  function handleChangeStartDateForDateIEFromForDeliveryDateRange(propDate)
  {
    setStartedDateForDateIEFromForDeliveryDateRange(propDate);
    //setStartDate(propDate);
  }



  const editDateIconPressedDoThisForDateIEFromForDeliveryDateRange = () =>
  {
    setOpenStartDatePickerWithTextInputForDateIEFromForDeliveryDateRange(true);
    setOpenStartDatePickerForDateIEFromForDeliveryDateRange(!openStartDatePickerForDateIEFromForDeliveryDateRange);
  }



  const calenderIconPressedDoThisForDateIEFromForDeliveryDateRange = () =>
  {
    setOpenStartDatePickerWithTextInputForDateIEFromForDeliveryDateRange(false);
    setOpenStartDatePickerForDateIEFromForDeliveryDateRange(!openStartDatePickerForDateIEFromForDeliveryDateRange);
  }



  const dateEnteredIsOkForDateIEFromForDeliveryDateRange = () =>
  {

    //alert('Keyboard dismissed and showing alert at once')
    setSelectedDateIEFromForDeliveryDateRange(dateTypedByUserForDateIEFromForDeliveryDateRange),
      setOpenStartDatePickerWithTextInputForDateIEFromForDeliveryDateRange(!openStartDatePickerWithTextInputForDateIEFromForDeliveryDateRange)

  }

  /* Methods and useState Hooks for First Date picker for 'From' in Delivery Date Range ends here  */









  /* Fourth date picker useState and functions */
  /* Methods and useState Hooks for Second Date picker for 'To' in Delivery Date Range starts here  */




  const todayForDateIEToForDeliveryDateRange = new Date();
  const [openStartDatePickerForDateIEToForDeliveryDateRange, setOpenStartDatePickerForDateIEToForDeliveryDateRange] = useState(false); // open close modal


  const [openStartDatePickerWithTextInputForDateIEToForDeliveryDateRange, setOpenStartDatePickerWithTextInputForDateIEToForDeliveryDateRange] = useState(false); // open close modal

  let dateEnteredOutOfRangeForDateIEToForDeliveryDateRange = 'no';
  let [dateTypedByUserForDateIEToForDeliveryDateRange, setDateTypedByUserForDateIEToForDeliveryDateRange] = useState('');



  const startDateForDateIEToForDeliveryDateRange = getFormatedDate(
    todayForDateIEToForDeliveryDateRange.setDate(todayForDateIEToForDeliveryDateRange.getDate()), 'YYYY/MM/DD'

  );

  const inputRefForDateIEToForDeliveryDateRange = useRef();

  const [todaysDateForDateIEToForDeliveryDateRange, settodaysDateForDateIEToForDeliveryDateRange] = useState(todayForDateIEToForDeliveryDateRange.getDate());
  const [currentMonthNameForDateIEToForDeliveryDateRange, setcurrentMonthNameForDateIEToForDeliveryDateRange] = useState(monthNames[new Date().getMonth()]);
  const [weekdayForDateIEToForDeliveryDateRange, setweekdayForDateIEToForDeliveryDateRange] = useState(daysName[new Date().getDay()]);


  const [selectedDateIEToForDeliveryDateRange, setSelectedDateIEToForDeliveryDateRange] = useState('To');
  const [startedDateForDateIEToForDeliveryDateRange, setStartedDateForDateIEToForDeliveryDateRange] = useState(startDateForDateIEToForDeliveryDateRange);


  let givenDateForDateIEToForDeliveryDateRange = '';

  const handleOnPressStartDateForDateIEToForDeliveryDateRange = () =>
  {
    setOpenStartDatePickerForDateIEToForDeliveryDateRange(!openStartDatePickerForDateIEToForDeliveryDateRange);
  };





  function handleChangeStartDateForDateIEToForDeliveryDateRange(propDate)
  {
    setStartedDateForDateIEToForDeliveryDateRange(propDate);
    //setStartDate(propDate);
  }




  const editDateIconPressedDoThisForDateIEToForDeliveryDateRange = () =>
  {
    setOpenStartDatePickerWithTextInputForDateIEToForDeliveryDateRange(true);
    setOpenStartDatePickerForDateIEToForDeliveryDateRange(!openStartDatePickerForDateIEToForDeliveryDateRange);
  }



  const calenderIconPressedDoThisForDateIEToForDeliveryDateRange = () =>
  {
    setOpenStartDatePickerWithTextInputForDateIEToForDeliveryDateRange(false);
    setOpenStartDatePickerForDateIEToForDeliveryDateRange(!openStartDatePickerForDateIEToForDeliveryDateRange);
  }



  const dateEnteredIsOkForDateIEToForDeliveryDateRange = () =>
  {

    //alert('Keyboard dismissed and showing alert at once')
    setSelectedDateIEToForDeliveryDateRange(dateTypedByUserForDateIEToForDeliveryDateRange),
      setOpenStartDatePickerWithTextInputForDateIEToForDeliveryDateRange(!openStartDatePickerWithTextInputForDateIEToForDeliveryDateRange)

  }

  /*Methods and useState Hooks for Second Date picker for 'To' in Delivery Date Range  ends here  */














  if (props.showBottomModalScreenForProps == 'OrderScreen')
  {

    return (
      <View style={ styles.centeredView }>




        <Modal
          animationType="slide"
          transparent={ true }
          visible={ modalVisible }
          onRequestClose={ () =>
          {
            //Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          } }>

          <View style={ styles.centeredView }>
            <View style={ styles.modalView }>

              <ScrollView
                keyboardShouldPersistTaps="always"
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={ false }
                bounces={ false }>

                {/*Note that to avoid TouchableOpacity button to be pressed twice when using TouchableOpacity with TextInput in single screen and to perform action which is mentioned inside onPress={} we will have to use first of all <ScrollView keyboardShouldPersistTaps="always">, 
              
              but when we are making our full main screen inside a Modal i.e. we are returning Modal in our screen just as here in this screen of BottomModalScreen.js and we are  using TouchableOpacity with TextInput inside another  Modal tag in single screen then we have to put two times <ScrollView keyboardShouldPersistTaps="always"> first in the root Modal tag which is directly written inside return() and second inside Modal tag which is kept inside our root Modal tag, Means in short i want to tell that if we have two Modal tags like first Modal tag is parent Modal tag and another second Modal tag is child Modal tag inside Parent Modal tag then we have to use  <ScrollView keyboardShouldPersistTaps="always"> in both Modal tags so we do not have to click on button twice when using button or touchableOpcaity with TextInput. This concept i have used when we are opening Modal to enter desired date using TextInput and clicking on Ok button to get our entered date inside our main Modal screen of BottomModalScreen.     */}

                <View style={ { flexDirection: 'row' } }>


                  <Text style={ styles.textStyleForBottomModalScreen }>
                    Filter & Sorting
                  </Text>




                  {/*<AllUITogether
                    show={ 'ThickRoundedBtn' }
                    widthPropsForthickbtn={ 43.5 }
                    marginLeftPropsForthickbtn={ 2.5 }
                    marginTopPropsForthickbtn={ 3 }
                    heightPropsForthickbtn={ 7.5 }
                    backgroundColorPropsForthickbtn={ '#283E65' }
                    borderRadiusPropsForthickbtn={ 10 }
                    thickbtnOnpressprops={ clearBtnPressedDoThis }
                    thickbtnTitleprops={ 'CLEAR' }
                    fontFamilyPropsForthickbtn={ 'raleway-semibold' }
                    fontcolorPropsForthickbtn={ 'white' }
                    fontSizePropsForthickbtn={ 2.2 }
                    paddingForthickbtn={2}
                  />*/}
                  <AllUITogether
                  show={'ThickRoundedBtn'}
                  widthPropsForthickbtn={responsiveWidth(43.5)}  
                  marginLeftPropsForthickbtn={responsiveWidth(2.5)}
                  marginTopPropsForthickbtn={responsiveHeight(3)}
                  heightPropsForthickbtn={responsiveHeight(7.5)}
                  backgroundColorPropsForthickbtn={'#283E65'}
                  borderRadiusPropsForthickbtn={responsiveWidth(10)}
                 
                  thickbtnOnpressprops={clearBtnPressedDoThis}
                  thickbtnTitleprops={'CLEAR'}
                  fontFamilyPropsForthickbtn={'raleway-semibold'}
                  fontcolorPropsForthickbtn={'white'}
                  fontSizePropsForthickbtn={responsiveFontSize(2.2)}   
                  paddingForthickbtn={responsiveHeight(2)}
                  />





                </View>



                <AnimatedTextInputFile
                  show={ 'AnimatedTextInputDDL' }
                  ddlWidth={ responsiveWidth(92) }
                  heightOfDDLprops={responsiveHeight(7)} 
                        marginTopPropsForDDL={responsiveHeight(4)}    
                        widthForTextInDDLprops={responsiveWidth(81)}
                  ddlboarderThickness={ responsiveWidth(0.15) }
                  //marginTopPropsForDDL={ 4 }
                  ddlTextmarginLeft={ responsiveWidth(2) }
                  ddlDownArrowIconmarginLeft={ responsiveWidth(34) }
                  ddlInsideTextFontSize={ responsiveFontSize(2) }
                  ddlInsideTextFontName={ 'raleway-light' }
                  ddlBoarderColor={ '#8e8e8e' }
                  dropdownIconProps={require('../images/dropdowncurved.png')}
                     // heightOfDDLprops={7}
                  ddlInsideTextFontColor={ '#2D2D2D' }
                  largeDropDownListTopLabel={ 'Customer' }
                  itemIconPropslabel={ require('../images/customer_whiteR.png') }
                  //tintColorForDDLIconLeft={'#283E65'}
                  tintColorForDDLIconLeft={ 'gray' }
                  largeDropDownListOnPressCallThisAPI={ 'manage_customer' }
                  actionprops={ 'search' }
                  selectSetter={ 'ForCustomer' }
                  //setterPathToFetchAPIResult={customer}
                  modalToplabelProps={ 'Select Customer' }
                  accessTokenprops={ props.accessTokenForBottomModalScreenProps }
                  startprops={ '0' }
                  limitprops={ '100000' }
                  state_idprops={ '' }
                  city_idprops={ '' }
                  search_allprops={ '' }
                  sortby_nameprops={ 'desc' }
                  mobile_noprops={ '' }
                  passwordprops={ '' }
                  selectedCustomerFromListProps={ props.customerSelectedForFilterProcessProps }
                  setselectedCustomerFromListProps={ props.setCustomerSelectedForFilterProcessProps }
                />


                <AnimatedTextInputFile
                  show={ 'AnimatedTextInputDDL' }
                  ddlWidth={ responsiveWidth(92) }
                  heightOfDDLprops={responsiveHeight(7)} 
                        marginTopPropsForDDL={responsiveHeight(3)}    
                        widthForTextInDDLprops={responsiveWidth(81)}
                  ddlboarderThickness={ responsiveWidth(0.15) }
                  ddlTextmarginLeft={ responsiveWidth(2) }
                  //marginTopPropsForDDL={ 3 }
                  ddlDownArrowIconmarginLeft={ responsiveWidth(34) }
                  ddlInsideTextFontSize={ responsiveFontSize(2) }
                  ddlInsideTextFontName={ 'raleway-light' }
                  ddlBoarderColor={ '#8e8e8e' }
                  largeDropDownListTopLabel={ 'Supplier' }
                  dropdownIconProps={require('../images/dropdowncurved.png')}
                      //heightOfDDLprops={7}
                  itemIconPropslabel={ require('../images/supplier_whiteR.png') }
                  //tintColorForDDLIconLeft={'#283E65'}
                  tintColorForDDLIconLeft={ 'gray' }
                  ddlInsideTextFontColor={ '#2D2D2D' }
                  accessTokenprops={ props.accessTokenForBottomModalScreenProps }
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
                  selectedSupplierFromListProps={ props.supplierSelectedForFilterProcessProps }
                  setselectedSupplierFromListProps={ props.setSupplierSelectedForFilterProcessProps }
                />


                <AnimatedTextInputFile
                  show={ 'AnimatedTextInputDDL' }
                  ddlWidth={ responsiveWidth(92) }
                  heightOfDDLprops={responsiveHeight(7)} 
                        marginTopPropsForDDL={responsiveHeight(3)}    
                        widthForTextInDDLprops={responsiveWidth(81)}
                  ddlboarderThickness={ responsiveWidth(0.15) }
                  ddlTextmarginLeft={ responsiveWidth(2) }
                  //marginTopPropsForDDL={ 3 }
                  ddlDownArrowIconmarginLeft={ responsiveWidth(34) }
                  ddlInsideTextFontSize={ responsiveFontSize(2) }
                  ddlInsideTextFontName={ 'raleway-light' }
                  ddlBoarderColor={ '#8e8e8e' }
                  largeDropDownListTopLabel={ 'Category' }
                  dropdownIconProps={require('../images/dropdowncurved.png')}
                      //heightOfDDLprops={7}
                  itemIconPropslabel={ require('../images/category.png') }
                  //tintColorForDDLIconLeft={'#283E65'}
                  tintColorForDDLIconLeft={ 'gray' }
                  modalToplabelProps={ 'Select Category' }
                  ddlInsideTextFontColor={ '#2D2D2D' }
                  largeDropDownListOnPressCallThisAPI={ 'category_list' }
                  actionprops={ 'search' }
                  selectSetter={ 'ForCategory' }
                  accessTokenprops={ props.accessTokenForBottomModalScreenProps }
                  startprops={ '0' }
                  limitprops={ '100000' }
                  state_idprops={ '' }
                  city_idprops={ '' }
                  search_allprops={ '' }
                  sortby_nameprops={ 'desc' }
                  mobile_noprops={ '' }
                  passwordprops={ '' }
                  selectedCategoryFromListProps={ props.categorySelectedForFilterProcessProps }
                  setselectedCategoryFromListProps={ props.setCategorySelectedForFilterProcessProps }
                />



                <Text style={ [styles.textStyleForBottomModalScreen, { marginTop: responsiveHeight(2), fontSize: responsiveFontSize(2.3) }] }>
                  Order Date Range
                </Text>













                {/*First and second date picker TouchableOpacity and Modals  */ }
                {/* Two Date picker for Order Date Range in one row starts here */ }
                <View style={ { flexDirection: 'row' } }>


                  {/* One Date picker for FromForOrderDateRange starts here */ }
                  <TouchableOpacity
                    style={ styles.inputBtn }
                    onPress={ handleOnPressStartDate }>
                    <Text style={ styles.datePickerTouchableOpacityTextStyle }>
                      { selectedDateIEFromForOrderDateRange }

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
                          //minimumDate={ startDate }
                          maximumDate={ startDate }
                          selected={ startedDate }
                          onDateChanged={ handleChangeStartDate }
                          onSelectedChange={ (date) =>
                          {
                            setSelectedDateIEFromForOrderDateRange(date);

                            settodaysDate(new Date(selectedDateIEFromForOrderDateRange).getDate());
                            /* 
                            The value stored inside selectedDateIEFromForOrderDateRange variable is in form of simple string. To get Date from that string we will first have to convert the selectedDateIEFromForOrderDateRange variable value from string to Date form, so we will put our selectedDateIEFromForOrderDateRange variable inside new Date() which will convert our selectedDateIEFromForOrderDateRange from String to Date and after converting it to Date we can use .getDate() method which will get Date from the selectedDateIEFromForOrderDateRange variable.
                             */
                            setcurrentMonthName(monthNames[new Date(selectedDateIEFromForOrderDateRange).getMonth()]);
                            setweekday(daysName[new Date(selectedDateIEFromForOrderDateRange).getDay()]);

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
                                    marginTop: dateEnteredOutOfRange == 'yes' ? responsiveHeight(3.5) : responsiveHeight(6.5),
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
                  {/*Modal for first date with TextInput ends here */ }



















                  {/* One Date picker for FromForOrderDateRange ends here */ }











                  {/* Second Date picker for ToForOrderDateRange starts here */ }
                  <TouchableOpacity
                    style={ [styles.inputBtn, { marginLeft: responsiveWidth(5.6) }] }
                    onPress={ handleOnPressStartDateForDateIEToForOrderDateRange }>
                    <Text style={ styles.datePickerTouchableOpacityTextStyle }>
                      { selectedDateIEToForOrderDateRange }

                    </Text>
                  </TouchableOpacity>


                  {/*Modal for second date with Calender starts here */ }
                  <Modal
                    animationType="slide"
                    transparent={ true }
                    visible={ openStartDatePickerForDateIEToForOrderDateRange }>
                    <View style={ styles.centeredViewForDatePickerModal }>





                      <View style={ styles.datePickerUpperHeaderSection }>

                        <Text

                          style={ styles.datePickerUpperHeaderSectionLabelText }>SELECT DATE</Text>


                        <Text style={ styles.datePickerUpperHeaderSectionDateText }>{ weekdayForDateIEToForOrderDateRange },{ currentMonthNameForDateIEToForOrderDateRange } { todaysDateForDateIEToForOrderDateRange }</Text>


                         <AllUITogether
                  show={'TopSmallIcon'}
                  dothisWhenTopSmallIconPressedProps={
                    editDateIconPressedDoThisForDateIEToForOrderDateRange
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
                          //minimumDate="2023-05-13"
                          minimumDate={ selectedDateIEFromForOrderDateRange }
                          maximumDate={ startDateForDateIEToForOrderDateRange }
                          selected={ startedDateForDateIEToForOrderDateRange }
                          onDateChanged={ handleChangeStartDateForDateIEToForOrderDateRange }
                          onSelectedChange={ (date) =>
                          {
                            setSelectedDateIEToForOrderDateRange(date)
                            settodaysDateForDateIEToForOrderDateRange(new Date(selectedDateIEToForOrderDateRange).getDate());
                            /* 
                            The value stored inside selectedDateIEFromForOrderDateRange variable is in form of simple string. To get Date from that string we will first have to convert the selectedDateIEFromForOrderDateRange variable value from string to Date form, so we will put our selectedDateIEFromForOrderDateRange variable inside new Date() which will convert our selectedDateIEFromForOrderDateRange from String to Date and after converting it to Date we can use .getDate() method which will get Date from the selectedDateIEFromForOrderDateRange variable.
                             */
                            setcurrentMonthNameForDateIEToForOrderDateRange(monthNames[new Date(selectedDateIEToForOrderDateRange).getMonth()]);
                            setweekdayForDateIEToForOrderDateRange(daysName[new Date(selectedDateIEToForOrderDateRange).getDay()]);
                          }
                          }
                          options={ styles.datePickerOptionsStyle }
                        />

                        {/* <TouchableOpacity onPress={ handleOnPressStartDateForDateIEToForOrderDateRange }>
                <Text style={ styles.datePickerModalCancelAndOKBtnStyle }>OK</Text>
              </TouchableOpacity> */}
                      </View>
                    </View>

                    <View style={ { flexDirection: 'row', backgroundColor: 'purple' } }>


                      <TouchableOpacity onPress={ () =>
                      {

                        setOpenStartDatePickerForDateIEToForOrderDateRange(!openStartDatePickerForDateIEToForOrderDateRange);


                      } }>
                        <Text style={ styles.datePickerModalCancelAndOKBtnStyle }>CANCEL</Text>
                      </TouchableOpacity>




                      <TouchableOpacity onPress={ handleOnPressStartDateForDateIEToForOrderDateRange }>
                        <Text style={ [styles.datePickerModalCancelAndOKBtnStyle, { marginLeft: responsiveWidth(10) }] }>OK</Text>
                      </TouchableOpacity>

                    </View>
                  </Modal>

                  {/*Modal for second date with Calender ends here */ }





                  {/*Modal for second date with TextInput starts here */ }
                  <Modal
                    animationType="fade"
                    transparent={ true }
                    onShow={ () => inputRefForDateIEToForOrderDateRange.current.focus() }
                    visible={ openStartDatePickerWithTextInputForDateIEToForOrderDateRange }>



                    <View style={ styles.centeredViewForDatePickerModal }>


                      <ScrollView
                        keyboardShouldPersistTaps="always"
                      >
                        <View style={ [styles.datePickerUpperHeaderSection, { marginTop: responsiveHeight(5) }] }>

                          <Text

                            style={ styles.datePickerUpperHeaderSectionLabelText }>SELECT DATE</Text>
                          <Text style={ styles.datePickerUpperHeaderSectionDateText }>{ weekdayForDateIEToForOrderDateRange },{ currentMonthNameForDateIEToForOrderDateRange } { todaysDateForDateIEToForOrderDateRange }</Text>



                          <AllUITogether
                            show={ 'TopSmallIcon' }
                            dothisWhenTopSmallIconPressedProps={
                              calenderIconPressedDoThisForDateIEToForOrderDateRange
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

                              ref={ inputRefForDateIEToForOrderDateRange }
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
                                setDateTypedByUserForDateIEToForOrderDateRange(dateEnteredByUser)
                              }
                              value={ dateTypedByUserForDateIEToForOrderDateRange }
                            />












                            














                            <View style={ { flexDirection: 'row' } }>


                              <TouchableOpacity onPress={ () =>
                              {

                                dateEnteredOutOfRangeForDateIEToForOrderDateRange == 'yes' ? null :
                                  setOpenStartDatePickerWithTextInputForDateIEToForOrderDateRange(!openStartDatePickerWithTextInputForDateIEToForOrderDateRange);


                              } }>
                                <Text style={ [
                                  styles.datePickerModalCancelAndOKBtnStyle,
                                  {
                                    marginTop: dateEnteredOutOfRangeForDateIEToForOrderDateRange == 'yes' ? responsiveHeight(3.5) : responsiveHeight(6.5),
                                    marginLeft: responsiveWidth(42)
                                  }
                                ] }>
                                  CANCEL
                                </Text>
                              </TouchableOpacity>




                              <TouchableOpacity onPress={ () =>
                              {
                                dateEnteredOutOfRangeForDateIEToForOrderDateRange == 'yes' ? null : (dateEnteredIsOkForDateIEToForOrderDateRange())

                              } }>
                                <Text style={ [
                                  styles.datePickerModalCancelAndOKBtnStyle,
                                  {
                                    marginTop: dateEnteredOutOfRangeForDateIEToForOrderDateRange == 'yes' ? responsiveHeight(3.5) : responsiveHeight(6.5),
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
                  {/*Modal for second date with TextInput ends here */ }




                  {/* Second Date picker for ToForOrderDateRange ends here */ }




                </View>

                {/* Two Date picker for Order Date Range in single row ends here */ }













                <Text style={ [styles.textStyleForBottomModalScreen, { marginTop: responsiveHeight(2.5), fontSize: responsiveFontSize(2.3) }] }>
                  Delivery Date Range
                </Text>






                {/*Third and Fourth date picker TouchableOpacity and Modals  */ }
                {/* Two Date picker for Delivery Date Range in single row starts here */ }
                <View style={ { flexDirection: 'row' } }>


                  {/* One Date picker for FromForDeliveryDateRange starts here */ }
                  <TouchableOpacity
                    style={ [styles.inputBtn, { marginTop: responsiveHeight(3.6) }] }
                    onPress={ handleOnPressStartDateForDateIEFromForDeliveryDateRange }>
                    <Text style={ styles.datePickerTouchableOpacityTextStyle }>
                      { selectedDateIEFromForDeliveryDateRange }

                    </Text>
                  </TouchableOpacity>


                  {/*Modal for third date with Calender starts here */ }
                  <Modal
                    animationType="slide"
                    transparent={ true }
                    visible={ openStartDatePickerForDateIEFromForDeliveryDateRange }>
                    <View style={ styles.centeredViewForDatePickerModal }>








                      <View style={ styles.datePickerUpperHeaderSection }>

                        <Text

                          style={ styles.datePickerUpperHeaderSectionLabelText }>SELECT DATE</Text>


                        <Text style={ styles.datePickerUpperHeaderSectionDateText }>{ weekdayForDateIEFromForDeliveryDateRange },{ currentMonthNameForDateIEFromForDeliveryDateRange } { todaysDateForDateIEFromForDeliveryDateRange }</Text>


                         <AllUITogether
                  show={'TopSmallIcon'}
                  dothisWhenTopSmallIconPressedProps={
                    editDateIconPressedDoThisForDateIEFromForDeliveryDateRange
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
                          //minimumDate={ startDateForDateIEFromForDeliveryDateRange }
                          //maximumDate={startDateForDateIEFromForDeliveryDateRange}   
                          selected={ startedDateForDateIEFromForDeliveryDateRange }
                          onDateChanged={ handleChangeStartDateForDateIEFromForDeliveryDateRange }
                          onSelectedChange={ (date) =>
                          {
                            setSelectedDateIEFromForDeliveryDateRange(date)
                            settodaysDateForDateIEFromForDeliveryDateRange(new Date(selectedDateIEFromForDeliveryDateRange).getDate());
                            /* 
                            The value stored inside selectedDateIEFromForOrderDateRange variable is in form of simple string. To get Date from that string we will first have to convert the selectedDateIEFromForOrderDateRange variable value from string to Date form, so we will put our selectedDateIEFromForOrderDateRange variable inside new Date() which will convert our selectedDateIEFromForOrderDateRange from String to Date and after converting it to Date we can use .getDate() method which will get Date from the selectedDateIEFromForOrderDateRange variable.
                             */
                            setcurrentMonthNameForDateIEFromForDeliveryDateRange(monthNames[new Date(selectedDateIEFromForDeliveryDateRange).getMonth()]);
                            setweekdayForDateIEFromForDeliveryDateRange(daysName[new Date(selectedDateIEFromForDeliveryDateRange).getDay()]);
                          }
                          }
                          options={ styles.datePickerOptionsStyle }
                        />

                        {/*  <TouchableOpacity onPress={ handleOnPressStartDateForDateIEFromForDeliveryDateRange }>
                <Text style={ styles.datePickerModalCancelAndOKBtnStyle }>OK</Text>
              </TouchableOpacity> */}
                      </View>
                    </View>

                    <View style={ { flexDirection: 'row', backgroundColor: 'purple' } }>


                      <TouchableOpacity onPress={ () =>
                      {

                        setOpenStartDatePickerForDateIEFromForDeliveryDateRange(!openStartDatePickerForDateIEFromForDeliveryDateRange);


                      } }>
                        <Text style={ styles.datePickerModalCancelAndOKBtnStyle }>CANCEL</Text>
                      </TouchableOpacity>




                      <TouchableOpacity onPress={ handleOnPressStartDateForDateIEFromForDeliveryDateRange }>
                        <Text style={ [styles.datePickerModalCancelAndOKBtnStyle, { marginLeft: responsiveWidth(10) }] }>OK</Text>
                      </TouchableOpacity>

                    </View>
                  </Modal>
                  {/*Modal for third date with Calender ends here */ }





                  {/*Modal for third date with TextInput starts here */ }
                  <Modal
                    animationType="fade"
                    transparent={ true }
                    onShow={ () => inputRefForDateIEFromForDeliveryDateRange.current.focus() }
                    visible={ openStartDatePickerWithTextInputForDateIEFromForDeliveryDateRange }>



                    <View style={ styles.centeredViewForDatePickerModal }>


                      <ScrollView
                        keyboardShouldPersistTaps="always"
                      >
                        <View style={ [styles.datePickerUpperHeaderSection, { marginTop: responsiveHeight(5) }] }>

                          <Text

                            style={ styles.datePickerUpperHeaderSectionLabelText }>SELECT DATE</Text>
                          <Text style={ styles.datePickerUpperHeaderSectionDateText }>{ weekdayForDateIEFromForDeliveryDateRange },{ currentMonthNameForDateIEFromForDeliveryDateRange } { todaysDateForDateIEFromForDeliveryDateRange }</Text>



                          <AllUITogether
                            show={ 'TopSmallIcon' }
                            dothisWhenTopSmallIconPressedProps={
                              calenderIconPressedDoThisForDateIEFromForDeliveryDateRange
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

                              ref={ inputRefForDateIEFromForDeliveryDateRange }
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
                                setDateTypedByUserForDateIEFromForDeliveryDateRange(dateEnteredByUser)
                              }
                              value={ dateTypedByUserForDateIEFromForDeliveryDateRange }
                            />












                            














                            <View style={ { flexDirection: 'row' } }>


                              <TouchableOpacity onPress={ () =>
                              {

                                dateEnteredOutOfRangeForDateIEFromForDeliveryDateRange == 'yes' ? null :
                                  setOpenStartDatePickerWithTextInputForDateIEFromForDeliveryDateRange(!openStartDatePickerWithTextInputForDateIEFromForDeliveryDateRange);


                              } }>
                                <Text style={ [
                                  styles.datePickerModalCancelAndOKBtnStyle,
                                  {
                                    marginTop: dateEnteredOutOfRangeForDateIEFromForDeliveryDateRange == 'yes' ? responsiveHeight(3.5) : responsiveHeight(6.5),
                                    marginLeft: responsiveWidth(42)
                                  }
                                ] }>
                                  CANCEL
                                </Text>
                              </TouchableOpacity>




                              <TouchableOpacity onPress={ () =>
                              {
                                dateEnteredOutOfRangeForDateIEFromForDeliveryDateRange == 'yes' ? null : (dateEnteredIsOkForDateIEFromForDeliveryDateRange())

                              } }>
                                <Text style={ [
                                  styles.datePickerModalCancelAndOKBtnStyle,
                                  {
                                    marginTop: dateEnteredOutOfRangeForDateIEFromForDeliveryDateRange == 'yes' ? responsiveHeight(3.5) : responsiveHeight(6.5),
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
                  {/*Modal for third date with TextInput ends here */ }

                  {/* One Date picker for FromForDeliveryDateRange ends here */ }











                  {/* Second Date picker for ToForDeliveryDateRange starts here */ }
                  <TouchableOpacity
                    style={ [styles.inputBtn, { marginLeft: responsiveWidth(5.6), marginTop: responsiveHeight(3.6) }] }
                    onPress={ handleOnPressStartDateForDateIEToForDeliveryDateRange }>
                    <Text style={ styles.datePickerTouchableOpacityTextStyle }>
                      { selectedDateIEToForDeliveryDateRange }

                    </Text>
                  </TouchableOpacity>

                  {/*Modal for fourth date with Calender starts here */ }

                  <Modal
                    animationType="slide"
                    transparent={ true }
                    visible={ openStartDatePickerForDateIEToForDeliveryDateRange }>
                    <View style={ styles.centeredViewForDatePickerModal }>









                      <View style={ styles.datePickerUpperHeaderSection }>

                        <Text

                          style={ styles.datePickerUpperHeaderSectionLabelText }>SELECT DATE</Text>


                        <Text style={ styles.datePickerUpperHeaderSectionDateText }>{ weekdayForDateIEToForDeliveryDateRange },{ currentMonthNameForDateIEToForDeliveryDateRange } { todaysDateForDateIEToForDeliveryDateRange }</Text>


                         <AllUITogether
                  show={'TopSmallIcon'}
                  dothisWhenTopSmallIconPressedProps={
                    editDateIconPressedDoThisForDateIEToForDeliveryDateRange
                  }
                  bellNotificationNumberProps={bellNotificationNumber}
                  iconToDisplayPathProps={require('../images/editIcon.png')}
                  showBadgeAlsoprops={false}
                  widthOfTopSmallIconprops={22}
                  heightOfTopSmallIconprops={22}
                 // marginTopOfTopSmallIconprops={-4.5}
                 // marginLeftOfTopSmallIconprops={79}
                 marginTopOfTopSmallIconprops={responsiveHeight(-4.5)}
                            marginLeftOfTopSmallIconprops={responsiveWidth(79)}
                />


                      </View>











                      <View style={ styles.modalViewForDatePicker }>
                        <DatePicker
                          mode="calendar"
                          minimumDate={ selectedDateIEFromForDeliveryDateRange }
                          //maximumDate={startDateForDateIEToForDeliveryDateRange}
                          selected={ startedDateForDateIEToForDeliveryDateRange }
                          onDateChanged={ handleChangeStartDateForDateIEToForDeliveryDateRange }
                          onSelectedChange={ (date) =>
                          {
                            setSelectedDateIEToForDeliveryDateRange(date)
                            settodaysDateForDateIEToForDeliveryDateRange(new Date(selectedDateIEToForDeliveryDateRange).getDate());
                            /* 
                            The value stored inside selectedDateIEFromForOrderDateRange variable is in form of simple string. To get Date from that string we will first have to convert the selectedDateIEFromForOrderDateRange variable value from string to Date form, so we will put our selectedDateIEFromForOrderDateRange variable inside new Date() which will convert our selectedDateIEFromForOrderDateRange from String to Date and after converting it to Date we can use .getDate() method which will get Date from the selectedDateIEFromForOrderDateRange variable.
                             */
                            setcurrentMonthNameForDateIEToForDeliveryDateRange(monthNames[new Date(selectedDateIEToForDeliveryDateRange).getMonth()]);
                            setweekdayForDateIEToForDeliveryDateRange(daysName[new Date(selectedDateIEToForDeliveryDateRange).getDay()]);
                          }
                          }
                          options={ styles.datePickerOptionsStyle }
                        />

                        {/* <TouchableOpacity onPress={ handleOnPressStartDateForDateIEToForDeliveryDateRange }>
                <Text style={ styles.datePickerModalCancelAndOKBtnStyle }>OK</Text>
              </TouchableOpacity> */}
                      </View>
                    </View>


                    <View style={ { flexDirection: 'row', backgroundColor: 'purple' } }>


                      <TouchableOpacity onPress={ () =>
                      {

                        setOpenStartDatePickerForDateIEToForDeliveryDateRange(!openStartDatePickerForDateIEToForDeliveryDateRange);


                      } }>
                        <Text style={ styles.datePickerModalCancelAndOKBtnStyle }>CANCEL</Text>
                      </TouchableOpacity>




                      <TouchableOpacity onPress={ handleOnPressStartDateForDateIEToForDeliveryDateRange }>
                        <Text style={ [styles.datePickerModalCancelAndOKBtnStyle, { marginLeft: responsiveWidth(10) }] }>OK</Text>
                      </TouchableOpacity>

                    </View>
                  </Modal>
                  {/*Modal for fourth date with Calender ends here */ }



                  {/*Modal for Fourth date with TextInput starts here */ }
                  <Modal
                    animationType="fade"
                    transparent={ true }
                    onShow={ () => inputRefForDateIEToForDeliveryDateRange.current.focus() }
                    visible={ openStartDatePickerWithTextInputForDateIEToForDeliveryDateRange }>



                    <View style={ styles.centeredViewForDatePickerModal }>


                      <ScrollView
                        keyboardShouldPersistTaps="always"
                      >
                        <View style={ [styles.datePickerUpperHeaderSection, { marginTop: responsiveHeight(5) }] }>

                          <Text

                            style={ styles.datePickerUpperHeaderSectionLabelText }>SELECT DATE</Text>
                          <Text style={ styles.datePickerUpperHeaderSectionDateText }>{ weekdayForDateIEToForDeliveryDateRange },{ currentMonthNameForDateIEToForDeliveryDateRange } { todaysDateForDateIEToForDeliveryDateRange }</Text>



                          <AllUITogether
                            show={ 'TopSmallIcon' }
                            dothisWhenTopSmallIconPressedProps={
                              calenderIconPressedDoThisForDateIEToForDeliveryDateRange
                            }
                            bellNotificationNumberProps={ bellNotificationNumber }
                            iconToDisplayPathProps={ require('../images/calendar.png') }
                            showBadgeAlsoprops={ false }
                            widthOfTopSmallIconprops={ 30 }
                            heightOfTopSmallIconprops={ 30 }
                            //marginTopOfTopSmallIconprops={ -5 }
                           // marginLeftOfTopSmallIconprops={ 79 }
                           marginTopOfTopSmallIconprops={responsiveHeight(-5)}
                            marginLeftOfTopSmallIconprops={responsiveWidth(79)}
                          />


                        </View>


                        <View style={ [styles.modalViewForDatePicker, { height: responsiveHeight(27) }] }>













                          <Text style={ styles.enterDateTextStyle }>Enter Date</Text>







                          <ScrollView keyboardShouldPersistTaps='always'>
                            <TextInput

                              ref={ inputRefForDateIEToForDeliveryDateRange }
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
                                setDateTypedByUserForDateIEToForDeliveryDateRange(dateEnteredByUser)
                              }
                              value={ dateTypedByUserForDateIEToForDeliveryDateRange }
                            />












                           














                            <View style={ { flexDirection: 'row' } }>


                              <TouchableOpacity onPress={ () =>
                              {

                                dateEnteredOutOfRangeForDateIEToForDeliveryDateRange == 'yes' ? null :
                                  setOpenStartDatePickerWithTextInputForDateIEToForDeliveryDateRange(!openStartDatePickerWithTextInputForDateIEToForDeliveryDateRange);


                              } }>
                                <Text style={ [
                                  styles.datePickerModalCancelAndOKBtnStyle,
                                  {
                                    marginTop: dateEnteredOutOfRangeForDateIEToForDeliveryDateRange == 'yes' ? responsiveHeight(3.5) : responsiveHeight(6.5),
                                    marginLeft: responsiveWidth(42)
                                  }
                                ] }>
                                  CANCEL
                                </Text>
                              </TouchableOpacity>




                              <TouchableOpacity onPress={ () =>
                              {
                                dateEnteredOutOfRangeForDateIEToForDeliveryDateRange == 'yes' ? null : (dateEnteredIsOkForDateIEToForDeliveryDateRange())

                              } }>
                                <Text style={ [
                                  styles.datePickerModalCancelAndOKBtnStyle,
                                  {
                                    marginTop: dateEnteredOutOfRangeForDateIEToForDeliveryDateRange == 'yes' ? responsiveHeight(3.5) : responsiveHeight(6.5),
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
                  {/*Modal for Fourth date with TextInput ends here */ }

                  {/* Second Date picker for ToForOrderDateRange ends here */ }




                </View>

                {/* Two Date picker for Delivery Date Range in single row ends here */ }



                {/*Status Chip starts here */ }
                <Text style={ [styles.textStyleForBottomModalScreen, { marginTop: responsiveHeight(2.5), fontSize: responsiveFontSize(2.3) }] }>
                  Status
                </Text>

                <View style={ { marginLeft: responsiveWidth(-2) } }>

                  <AllUITogether
                    show={ 'chip' }
                    dataForChipProps={ statusDataSourceForChip }
                    numColumsProps={ 3 }
                   
                    setSelectedChipTextProps={ setSelectedChipText }
                    borderWidthChipProps={ 0.5 }
                    widthOfChipProps={responsiveWidth(25)}
                    heightOfChipProps={responsiveHeight(5)}
                    paddingForTextInsideChipProps={responsiveHeight(0)}
                    borderRadiusOfChipProps={responsiveWidth(10)}
                    marginLeftOfChipProps={responsiveWidth(5)}
                    marginToptOfChipProps={responsiveHeight(3.5)}
                    selectedbackgroundColorOfChipProps={ '#747474' }
                    notselectedbackgroundColorOfChipProps={ 'white' }
                    fontFamilyOfTextInsideChipProps={ 'raleway-medium' }
                    fontSizeOfTextInsideChipProps={responsiveFontSize(2)}
                    selectedcolorOfTextInsideChipProps={ 'white' }
                    notselectedcolorOfTextInsideChipProps={ '#747474' }
                  />

                </View>




                {/*Status Chip ends here */ }







                {/*Sort By Order Number Chip starts here */ }
                <Text style={ [styles.textStyleForBottomModalScreen, { marginTop: responsiveHeight(2.5), fontSize: responsiveFontSize(2.3) }] }>
                  Sort By Order Number
                </Text>

                <View style={ { marginLeft: responsiveWidth(-2) } }>

                  {/*<AllUITogether
                    show={ 'chip' }
                    dataForChipProps={ sortByOrderNumberDataSourceForChip }
                    numColumsProps={ 3 }
                    
                    setSelectedChipTextProps={ setSelectedChipTextForsortByOrderNumber }
                    borderWidthChipProps={ 0.5 }
                    widthOfChipProps={ 30 }
                    heightOfChipProps={ 5 }
                    paddingForTextInsideChipProps={ 0 }
                    borderRadiusOfChipProps={ 10 }
                    marginLeftOfChipProps={ 5 }
                    marginToptOfChipProps={ 3.5 }
                    selectedbackgroundColorOfChipProps={ '#747474' }
                    notselectedbackgroundColorOfChipProps={ 'white' }
                    fontFamilyOfTextInsideChipProps={ 'raleway-medium' }
                    fontSizeOfTextInsideChipProps={ 2 }
                    selectedcolorOfTextInsideChipProps={ 'white' }
                    notselectedcolorOfTextInsideChipProps={ '#747474' }
                  />*/}
                  <AllUITogether
                    show={ 'chip' }
                    dataForChipProps={ sortByOrderNumberDataSourceForChip }
                    numColumsProps={ 3 }
                   
                    setSelectedChipTextProps={ setSelectedChipTextForsortByOrderNumber }
                    borderWidthChipProps={ 0.5 }
                    widthOfChipProps={responsiveWidth(30)}
                    heightOfChipProps={responsiveHeight(5)}
                    paddingForTextInsideChipProps={responsiveHeight(0)}
                    borderRadiusOfChipProps={responsiveWidth(10)}
                    marginLeftOfChipProps={responsiveWidth(5)}
                    marginToptOfChipProps={responsiveHeight(3.5)}
                    selectedbackgroundColorOfChipProps={ '#747474' }
                    notselectedbackgroundColorOfChipProps={ 'white' }
                    fontFamilyOfTextInsideChipProps={ 'raleway-medium' }
                    fontSizeOfTextInsideChipProps={responsiveFontSize(2)}
                    selectedcolorOfTextInsideChipProps={ 'white' }
                    notselectedcolorOfTextInsideChipProps={ '#747474' }
                  />

                </View>




                {/*Sort By Order Number Chip ends here */ }




                {/*Order For Chip starts here */ }
                <Text style={ [styles.textStyleForBottomModalScreen, { marginTop: responsiveHeight(2.5), fontSize: responsiveFontSize(2.3) }] }>
                  Order For
                </Text>

                <View style={ { marginLeft: responsiveWidth(-2) } }>

                  {/*<AllUITogether
                    show={ 'chip' }
                    dataForChipProps={ orderForDataSourceForChip }
                    numColumsProps={ 3 }
                   
                    setSelectedChipTextProps={ setSelectedChipTextFororderFor }
                    borderWidthChipProps={ 0.5 }
                    widthOfChipProps={ 25 }
                    heightOfChipProps={ 5 }
                    paddingForTextInsideChipProps={ 0 }
                    borderRadiusOfChipProps={ 10 }
                    marginLeftOfChipProps={ 5 }
                    marginToptOfChipProps={ 3.5 }
                    selectedbackgroundColorOfChipProps={ '#747474' }
                    notselectedbackgroundColorOfChipProps={ 'white' }
                    fontFamilyOfTextInsideChipProps={ 'raleway-medium' }
                    fontSizeOfTextInsideChipProps={ 2 }
                    selectedcolorOfTextInsideChipProps={ 'white' }
                    notselectedcolorOfTextInsideChipProps={ '#747474' }
                  />*/}
                  <AllUITogether
                    show={ 'chip' }
                    dataForChipProps={ orderForDataSourceForChip }
                    numColumsProps={ 3 }
                   
                    setSelectedChipTextProps={ setSelectedChipTextFororderFor }
                    borderWidthChipProps={ 0.5 }
                    widthOfChipProps={responsiveWidth(25)}
                    heightOfChipProps={responsiveHeight(5)}
                    paddingForTextInsideChipProps={responsiveHeight(0)}
                    borderRadiusOfChipProps={responsiveWidth(10)}
                    marginLeftOfChipProps={responsiveWidth(5)}
                    marginToptOfChipProps={responsiveHeight(3.5)}
                    selectedbackgroundColorOfChipProps={ '#747474' }
                    notselectedbackgroundColorOfChipProps={ 'white' }
                    fontFamilyOfTextInsideChipProps={ 'raleway-medium' }
                    fontSizeOfTextInsideChipProps={responsiveFontSize(2)}
                    selectedcolorOfTextInsideChipProps={ 'white' }
                    notselectedcolorOfTextInsideChipProps={ '#747474' }
                  />

                </View>




                {/*Order For Chip ends here */ }


                {/*Back and Apply Button in single row starts here*/ }
                <View style={ { flexDirection: 'row',marginBottom:responsiveHeight(2) } }>


                  {/*<AllUITogether
                    show={ 'ThickRoundedBtn' }
                    widthPropsForthickbtn={ 35 }
                    marginLeftPropsForthickbtn={ 1 }
                    marginTopPropsForthickbtn={ 3 }
                    heightPropsForthickbtn={ 7.5 }
                    backgroundColorPropsForthickbtn={ '#283E65' }
                    borderRadiusPropsForthickbtn={ 10 }
                    thickbtnOnpressprops={ clearBtnPressedDoThis }
                    thickbtnTitleprops={ 'BACK' }
                    fontFamilyPropsForthickbtn={ 'raleway-semibold' }
                    fontcolorPropsForthickbtn={ 'white' }
                    fontSizePropsForthickbtn={ 2.2 }
                    paddingForthickbtn={2}
                  />*/}
                  <AllUITogether
                  show={'ThickRoundedBtn'}
                  widthPropsForthickbtn={responsiveWidth(35)}  
                  marginLeftPropsForthickbtn={responsiveWidth(1)}
                  marginTopPropsForthickbtn={responsiveHeight(3)}
                  heightPropsForthickbtn={responsiveHeight(7.5)}
                  backgroundColorPropsForthickbtn={'#283E65'}
                  borderRadiusPropsForthickbtn={responsiveWidth(10)}
                 
                  thickbtnOnpressprops={clearBtnPressedDoThis}
                  thickbtnTitleprops={'BACK'}
                  fontFamilyPropsForthickbtn={'raleway-semibold'}
                  fontcolorPropsForthickbtn={'white'}
                  fontSizePropsForthickbtn={responsiveFontSize(2.2)}   
                  paddingForthickbtn={responsiveHeight(2)}
                  />




                  {/*<AllUITogether
                    show={ 'ThickRoundedBtn' }
                    widthPropsForthickbtn={ 35 }
                    marginLeftPropsForthickbtn={ 21 }
                    marginTopPropsForthickbtn={ 3 }
                    heightPropsForthickbtn={ 7.5 }
                    backgroundColorPropsForthickbtn={ '#283E65' }
                    borderRadiusPropsForthickbtn={ 10 }
                    thickbtnOnpressprops={ clearBtnPressedDoThis }
                    thickbtnTitleprops={ 'APPLY' }
                    fontFamilyPropsForthickbtn={ 'raleway-semibold' }
                    fontcolorPropsForthickbtn={ 'white' }
                    fontSizePropsForthickbtn={ 2.2 }
                    paddingForthickbtn={2}
                  />*/}
                  <AllUITogether
                  show={'ThickRoundedBtn'}
                  widthPropsForthickbtn={responsiveWidth(35)}  
                  marginLeftPropsForthickbtn={responsiveWidth(21)}
                  marginTopPropsForthickbtn={responsiveHeight(3)}
                  heightPropsForthickbtn={responsiveHeight(7.5)}
                  backgroundColorPropsForthickbtn={'#283E65'}
                  borderRadiusPropsForthickbtn={responsiveWidth(10)}
                 
                  thickbtnOnpressprops={clearBtnPressedDoThis}
                  thickbtnTitleprops={'APPLY'}
                  fontFamilyPropsForthickbtn={'raleway-semibold'}
                  fontcolorPropsForthickbtn={'white'}
                  fontSizePropsForthickbtn={responsiveFontSize(2.2)}   
                  paddingForthickbtn={responsiveHeight(2)}
                  />





                </View>
                {/*This below API call is having one body parameter whose name is from which is registered keyword in React Native and so on passing from inside body is causing error, so we have to do changes in the API by changing the body parameter from to any other word like afrom or etc.  */ }


              {/* {callFetchDynamicAPIsInBottomModalScreenToApply ==
                                  true ? (
                                    <>
                                      <FetchDynamicAPIs
                                        urlToFetchProps={'delete_order'}
                                        accessTokenForFetchingAPIProps={props.accessTokenForBottomModalScreenProps}
                                        customerIDProps={}
                                        supplierIDProps={}
                                        ordertypeProps={}
                                        itemProps={}
                                        carretidProps={}
                                        coloridProps={}
                                        qtyProps={}
                                        sizeProps={}
                                        narrationProps={}
                                        deliverydateProps={}
                                        hallmarkProps={}
                                        priorityProps={}
                                        designnoProps={}
                                        broadnessProps={}
                                        diamondweightProps={}
                                        diamondqualityProps={}
                                        diamondpcsProps={}
                                        partydiamondProps={}
                                        stoneweightProps={}
                                        stonequalityProps={}
                                        stonepcsProps={}
                                        partystoneProps={}
                                        ptpolishProps={}
                                        kt18_polishProps={}
                                        engravingdetailsProps={}
                                        orderforProps={}
                                        uniqueidProps={}
                                        orderdateProps={}
                                        categoryidProps={}
                                        imagefileProps={}
                                        
                                      />
                                    </>
                                  ) : null} */}







              </ScrollView>











              {/* <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
            </View>
          </View>

        </Modal>





        {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}

        <AllUITogether
          show={ 'TopSmallIcon' }
          dothisWhenTopSmallIconPressedProps={
            searchTopSmallIconPressedDoThis
          }
          bellNotificationNumberProps={ bellNotificationNumber }
          iconToDisplayPathProps={ require('../images/filter_golden.png') }
          showBadgeAlsoprops={ false }
          widthOfTopSmallIconprops={ 22 }
          heightOfTopSmallIconprops={ 22 }

          //marginTopOfTopSmallIconprops={ -3.5 }
          //marginLeftOfTopSmallIconprops={ 83 }
          marginTopOfTopSmallIconprops={responsiveHeight(-3.5)}
          marginLeftOfTopSmallIconprops={responsiveWidth(83)}
        />







      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  datePickerTouchableOpacityTextStyle: {
    fontSize: responsiveHeight(2.3),
    fontFamily: 'raleway-semibold',
    color: '#747474',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: responsiveFontSize(1.6)
  },

  inputBtn: {
    width: responsiveWidth(43),
    height: 50,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    //marginVertical: responsiveHeight(0.9),
    marginTop: responsiveHeight(3.5),
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    //backgroundColor:'purple',
  },

});

export default BottomModalScreen;