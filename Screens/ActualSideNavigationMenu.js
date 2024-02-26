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
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Modal,
  View,
  Button,
  BackHandler,
  //Animated,
  TouchableOpacity
} from 'react-native';
//Worklet and another way: https://stackoverflow.com/questions/73893490/gesturedetector-gesture-handler-app-crash-when-calling-external-function 
import
{
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
//Gesture Navigation for Side menu=https://www.youtube.com/watch?v=KvRqsRwpwhY&t=766s&ab_channel=Reactiive
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { useFonts } from 'expo-font';
import AllUITogether from '../components/AllUITogether';

//Swipe Handler video: https://www.youtube.com/watch?v=9qWLq-A6Mfw&ab_channel=EngineerCodewala
import
{
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';

let { height, width } = Dimensions.get('window');

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState
} from 'react';
import DrawerNavigationMenuItem from '../components/DrawerNavigationMenuItem';

const MIN_TRANSLATE_X = 380;

/* type BottomSheetProps = {
  //children?: React.ReactNode;
}; */

/* export type BottomSheetRefProps = {
  //scrollTo: (destination: number) => void;
  translateX: () => void,
  //isActive: () => boolean;
}; */

const ActualSideNavigationMenu = (props, ref) =>
{
  const [text, setText] = useState('This is CHILD COMPONENT');
  const bringGrayColor = true;
  const removeGrayColor = false;


  //const [showMenu, setShowMenu] = useState(false);
  //showMenu is for white view i.e for view which is holding our Welcome message and all cards. And not for our Slider menu.
  //showMenu will not make our white screen visible or invisible, it will just decide the left gap which will be set to 290
  //when we will set showMenu to true i think because we have mentioned this as shown below,
  /* 
   Animated.timing(moveToRight, {
                toValue: showMenu ? 0 : 290,
 
                Now i want to know what is this moveToRight and why it is used inside Animated.timing(),
 
                Ans: moveToRight is just a ref variable which ref to our white board translate value because we have used moveToRight as a variable to hold translateX value of our white screen using this syntax
                
                transform:[{translateX:moveToRight}], in the <Animated.View.....> which is the root view to hold our white screen 
                content i.e  all the data which is present in white screen like welcome message and all our cards. Initially the  
                transform:[{translateX:moveToRight}], attribute will get value of transform:[{translateX:0}], means that the gap 
                between our left margin and our white screen will be 0, i.e. no gap, but when we will click on three dots of our
                drawer menu the useState() showMenu will become true due to this syntax:
 
                setShowMenu(!showMenu); 
 
                kept iniside onPress={} of three line buttons and when showMenu will become true then our Animated.timing() which 
                has also started when three line button was clicked will set the value of moveToRight to 290, because of this 
                below syntax: 
 
                Animated.timing(moveToRight, {
                toValue: showMenu ? 0 : 290,
 
                and when our moveToRight variable will get the value of 290, then our white screen will get gap of 
                290 from left because of we have written this below syntax in Animated.View which is holding our white
                screen.
 
                transform:[{translateX:moveToRight}], 
 
                so our transform attribute will now get value of translateX:290 and our white screen will move to left with gap of 290.
 
                transform:[{translateX:290}],
 
                Testing now based on above conclusion:
               Now we want that when our user drages the side drawer,
               1. Side drawer menu show get visible.
               2. When our user again push side drawer to left the side drawer should get invisible. 
 
 
                ---------------------------------------------------------------------------------------------------
 
 
 
                 and when we use moveToRight inside 
                Animated.timing() then our Animation which is written inside this Animated.timing() will place on that view
                in which we have used moveToRight ref variable.
   */

  //https://www.youtube.com/watch?v=sqbGllQ81kc&ab_channel=EngineerCodewala
  //Here Animated.Value(1) means 100%
  //Here .current in 'const moveToRight= useRef(new Animated.Value(0)).current;' means current initial value of the moveToRight is 0
  //Here .current in 'const scale= useRef(new Animated.Value(1)).current;' means current initial value of the scale is 1. This
  //initial value is called starting from 1 and ending to value we will set 0.8 using   'Animated.timing(scale,{toValue:showMenu?1:0.8,})//duration:300, MEANS 300 MILISECONDS

  //useNativeDriver:true, we use useNativeDriver:true, so that on using Animation our App do not slow down and native part of Android
  //and iOS keeps running
  //.start(); in Animated.timing is to start our Animation
  //transform:[{scale:scale},{translateX:moveToRight}] means what kind of transformation we want on Animation on our View

  //230 in toValue:showMenu?0:230, means gap from Left to Right 230 of our white view which holds our all cards and welcome message
  //and not for side drawer menu.
  //0.8 in 'toValue:showMenu?1:0.8,' means move our White screen from 1 i.e. full flex 1 to 0.8, if we make 0.8 to 0.5 then
  //our white screen will become more smaller on transform.

  const [logedInPersonName, setLogedInPersonName] = useState('');
  const [logedInPersonContact_No, setLogedInPersonContact_No] = useState('');

  const [interactiveModalToExitOrNot, setInteractiveModalToExitOrNot] =useState(false);




  useEffect(() =>
  {
    getData();
    //Alert.alert('width is: '+width);
  }, []);

  const getData = () =>
  {
    try
    {
      AsyncStorage.getItem('LoggedInPersonDataKey').then((value) =>
      {
        if (value != null)
        {
          let user = JSON.parse(value);
          setLogedInPersonName(user.Name);
          setLogedInPersonContact_No(
            user.Contact_No_To_toShowInDrawerNavigation
          );
        }
      });
    } catch (error)
    {
      console.log(error);
    }
  };



 



  useEffect(() => {
    
    
    const backAction = () => {      
      setInteractiveModalToExitOrNot(true)
      return true;
    };

    
    
    
    
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    
    
    
    return () => backHandler.remove();
  }, []);



   



  useEffect(() =>
  {
    translateX.value = withSpring(-10, { damping: 50 });
    //scrollTo(-10);
  }, []);

  /* By specifying this useEffect() we are specifying that when our App loades the Side Navigation should translate to X axis with Spring effect till -10 pixel, if we increase -10 to -20 then our side navigation will come out more in screen when app loads automatically without pulling the side navigation. */

  /* const getData = () => {
    try {
      AsyncStorage.getItem('LoggedInPersonDataKey').then((value) => {
        if (value != null) {
          setLogedInPersonName(value.Name);
          //Alert.alert('Get Data function value='+value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }; */

  /*  const getData = () => {
    try {
      AsyncStorage.getItem('LoggedInPersonNameKey').then((value) => {
        if (value != null) {
          setLogedInPersonName(value);
          //Alert.alert('Get Data function value='+value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }; */

  /* const removeData = async () =>
  {
    try
    {
      
      await AsyncStorage.removeItem('LoggedInPersonNameKey');
      navigation.navigate('LoginScreen');
    } catch (error)
    {
      console.log(error);
    }
  }; */

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
    },

    { title: 'New Order', iconforMenu: require('../images/order.png') },

    { title: 'In Process', iconforMenu: require('../images/processP.png') },

    {
      title: "Today's   Due Order",
      iconforMenu: require('../images/countP.png'),
    },

    { title: 'Total     Order', iconforMenu: require('../images/listP.png') },

    {
      title: 'Due In     This Week',
      iconforMenu: require('../images/due_in_weekP.png'),
    },

    { title: 'Customer Count', iconforMenu: require('../images/order.png') },

    { title: 'Supplier Count', iconforMenu: require('../images/listP.png') },

    { title: 'Over Due', iconforMenu: require('../images/timeP.png') },
  ];

  /*  const scrollTo = useCallback((destination: number) => {
      'worklet';
      active.value = destination !== 0;
 
      translateX.value = withSpring(destination, { damping: 50 });
    }, []); */

  /* useImperativeHandle(ref, () => ({ translateX}), [
      translateX
      
    ]); */

  const changeText = () =>
  {
    //alert('Change Text Function executing....');
    //setText("Text Changed from Parent Component");
    translateX.value = withSpring(MIN_TRANSLATE_X, { damping: 50 });
  };

  useImperativeHandle(ref, () => ({
    openSideNavigationMethod, removeGrayColor, bringGrayColor, closeSideNavigationMethod
    //changeText,
  }));

  const translateX = useSharedValue(0);
  const context = useSharedValue({ x: 0 });

  const gesture = Gesture.Pan()

    .onStart(() =>
    {
      context.value = { x: translateX.value };
    })

    .onUpdate((event) =>
    {

      console.log(translateX.value);
      translateX.value = event.translationX + context.value.x;
      translateX.value = Math.min(translateX.value, MIN_TRANSLATE_X);
      //translateX.value =290;
    })

    .onEnd(

      () =>
      {
        if (translateX.value > width / 3)
        {

          translateX.value = withSpring(0, { damping: 50 });
          runOnJS(props.removeGraycolorPropsLabel)();
          //To call an external function in any Gesture .onStart() or .onEnd() function we have to wrap our function name inside
          //runOnJS(ourFunctionNameToBeCalledComesHere)(ourFunctionRequireArgumentsComesHere);

        } else if (translateX.value < width / 1.5)
        {

          translateX.value = withSpring(MIN_TRANSLATE_X, { damping: 50 });


        }

        //Using this .onEnd() when user will pull the side navigation slightly then the slide navigation will open fully till end
        //And when when user will push the side navigation slightly when it is open completely then the slide navigation will close completely and get hidden

        //To close the Side drawer we have to write this syntax:

        //translateX.value=withSpring(0,{damping:50});

        //And to Open the side Drawer fully we have to write this below syntax:
        //translateX.value=withSpring(MIN_TRANSLATE_X,{damping:50});
      });

  /* 
 
 What is interpolate in react native?
 Interpolation is a way of estimating a function at intermediate points, learning from the ranges you provide. In React Native, you can interpolate animated values using . interpolate which takes an inputRange, that interpolates and maps the values to an outputRange.
 
 
 */

  const rStyle = useAnimatedStyle(() =>
  {
    const borderRadius = interpolate(
      translateX.value,
      [1, MIN_TRANSLATE_X],
      [25, 0],
      Extrapolate.CLAMP
    );

    /* Here we are specifying that when our side navigation is translated in X axis, and on reaching X=1 the boarder radius should be 25 but when reaching its end point i.e. MIN_TRANSLATE_X the boarder radius should be 0.  */

    return {
      borderRadius,
      transform: [{ translateX: translateX.value }],
    };
  });

  /* To creat a method which will execute when Gesture is held we have to use a hook named useAnimatedGestureHandler from class react-native-reanimated, note that Gesture is imported from library react-native-gesture-handler and to create a method which will execute when Gesture is done we will have to use hook which is from another library named react-native-reanimated
    
    when we write like this   "const animatedGestureHandleMethod=useAnimatedGestureHandler({...." we are creating a variable named animatedGestureHandleMethod which will hold all the features of hook useAnimatedGestureHandler
    
    useSharedValue() is another hook from react-native-reanimated library using which we will mention initial value of X or Y axis for our Animated.View, here we are passing value 10 so our Animated.View will have only 10 pixels on X axis as its initial position.
    
    Now using useAnimatedGestureHandler() hook we will create a variable named animatedGestureHandleMethod which will have new value for our X const whose initial value we have declared using useSharedValue() hook, so now using useAnimatedGestureHandler() hook we will give new value of our X inside onActive attribute of useAnimatedGestureHandler() hook with syntax X.value=100.
    
    Now to see the Gesture working on our Animated.View we will have to provide transform to our Animated.View style, to provide trasform to our Animated.View we will put square brackets between two curly brackets inside our  <Animated.View style={{}}> like this <Animated.View style={  [  {     }   ]   }>. Now we will use another hook of react-native-reanimated called useAnimatedStyle() using which we will declare new style of <Animated.View> when gesture is held. 
    
    So we have created a variable named animatedStyle and pass all the features of useAnimatedStyle() hook in that. In the animatedStyle variable we are providing features of returning a new style whose X value will be the value which we have mentioned in X.value=100; using onActive attribute of useAnimatedGestureHandler() hook, so what ever X.value=---- we will provide for example here we have provided 100 then on gesture event held our Animated.View will move our View from X=10 to X=100 as we have mentioned X.value=100 in onActive attribute of useAnimatedGesturehandler() hook. And to take this new X value in app execution we will have to use another hook named useAnimatedStyle() hook and in this hook we will provide translateX value as translateX:X.value inside attribue with name transform: and note that we have to pass value to our transform: attribute as an array so we have use square brackets [] and inside that array we have to put our translateX: attribute as object so we have use curly brackets {} and put our translateX:X.value first inside curly brackets like this {translateX:X.value} and make it object and then we put our object which holds translateX:X.value inside an array i.e. [{translateX:X.value}]         
    
    Note: symbol of array is square brackets in javaScript []
    
    and symbol of object is curly brackets in javaScript {} 
    
    
    After executing first trial of return{transform:[{translateX:X.value}]} my Animated.View is not performing any gesture and not moving to new value of X.value, but when i put translateX:100 directly without using X.value, then as soon as app loaded by Animated.View goes to X=100 while my initial value of X should be 10, but currently while reloading the app the initial value of X is comming 100 and not 10.*/

  /*In latest Gesture 2, we will not use useAnimatedGestureHandler and onActive  instead of it we will use 
 
 Gesture.Pan().onUpdate(()=>{}) 
 
 and we will create variable using Gesture.Pan() and pass that variable inside gesture={} props of Tag <GestureDetector>   */
  const [threeLineButtonClicked, setthreeLineButtonClicked] = useState(false);

  const openSideNavigationMethod = () =>
  {
    setthreeLineButtonClicked(true);
    translateX.value = withSpring(MIN_TRANSLATE_X, { damping: 50 });
  };

  const closeSideNavigationMethod = () =>
  {

    //setthreeLineButtonClicked(false);
    translateX.value = withSpring(0, { damping: 50 });
    props.removeGraycolorPropsLabel();
    //removeGraycolorPropsLabel;  
  };




  const dothisOnYesSelectedToExit=()=>{
    
    BackHandler.exitApp();
    setInteractiveModalToExitOrNot(false);
         
  }


  const dothisOnCancelSelectedToExit=()=>{
    //alert('Cancel selected.');
    setInteractiveModalToExitOrNot(false);
  }

  const dothisOnBackButtonPressedInteractiveModalInASNM=()=>{
    
    setInteractiveModalToExitOrNot(false);
  }





  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={ gesture }>
        <Animated.View style={ [styles.circle, rStyle] }>
          <ImageBackground
            source={ require('../images/background.png') }
            style={ {
              //marginTop: responsiveHeight(-6.5),
              marginTop: responsiveHeight(-6.5),
              width: responsiveWidth(85),
            } }>
            {/*Header design in Menu Design which will hold our Top image code starts here*/ }
            <Animated.View
              style={ {
                //flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                marginTop: responsiveHeight(5.9),
              } }>
              <Image
                source={ require('../images/main_logo_white.png') }
                style={ {
                  height: responsiveHeight(24),
                  width: responsiveWidth(48),
                  marginTop: responsiveHeight(5),
                  alignSelf: 'center',
                } }
              />
            </Animated.View>
            {/*Header design in Menu Design which will hold our Top image code ends here*/ }
          </ImageBackground>







          {/*Header design in Menu Design which will hold our Top Text like person name and mobile number code starts here*/ }

          <Animated.View
            style={ {
              marginLeft: responsiveWidth(4),
              marginTop: responsiveHeight(3.4),
            } }>
            {/*This View above is responsible for all the List of Menus  seen inside the Drawer Navigation bar  */ }

            <Animated.View>
              <Text style={ styles.name_And_Contact_No_Text_Style }>
                Name : { logedInPersonName }
              </Text>
            </Animated.View>

            <Animated.View style={ { marginTop: responsiveHeight(-1) } }>
              <Text style={ styles.name_And_Contact_No_Text_Style }>
                Phone:+91 { logedInPersonContact_No }
              </Text>
            </Animated.View>
            {/* <DrawerItemList {...props} /> */ }
          </Animated.View>

          {/*Header design in Menu Design which will hold our Top Text like person name and email code ends here*/ }

          <Animated.View
            style={ { borderTopWidth: 1, borderTopColor: '#A3A099' } }>
            {/*This View above is responsible for gray  color line divider and list of menu which do not scroll, we can put all our drawer screen menu list inside this view and outside this view i.e. above this view our background image and company logo will come    */ }
          </Animated.View>
      









          {/*Menu Items for Drawer Menu which will hold our pages name code starts here*/ }
          <Animated.View style={ { marginTop: responsiveHeight(2) } }>



            <Animated.View>    
              <TouchableOpacity
                onPress={ () =>
                {
                  //navigation.navigate('Category');
                  //Alert.alert('Category Button clicked')
                  props.gotoCategoryScreenPropsLabel()
                } }>
                <DrawerNavigationMenuItem
                  itemNamePropslabel={ 'CATEGORY' }
                  itemIconPropslabel={ require('../images/category.png') }
                  justifyContentForItemName={'flex-start'}
                  
                  showRightIcon={'Yes'}
                  heightOfLeftSideIcon={responsiveHeight(3.5)}
                  widthOfLeftSideIcon={responsiveWidth(7)}
                  marginTopForItemName={responsiveHeight(0.5)}
                />
              </TouchableOpacity>
            </Animated.View>

            {/*TO ADD NEW OPTION IN SIDE DRAWER NAVIGATION BAR, JUST COPY AND PAST BELOW SECTION WHICH IS STARTING HERE  */}
            <Animated.View style={ { marginTop: responsiveHeight(9) } }>
              <TouchableOpacity
                onPress={ () =>
                {
                  //navigation.navigate('Category');
                  //Alert.alert('Category Button clicked')
                  props.gotoCaratScreenPropsLabel()
                } }>
                <DrawerNavigationMenuItem
                  itemNamePropslabel={ 'CARAT' }
                  itemIconPropslabel={ require('../images/carat.png') }
                 justifyContentForItemName={'flex-start'}
                  //marginTopForItemName={0.5}
                  showRightIcon={'Yes'}
                 // heightOfLeftSideIcon={3.5}
                  //widthOfLeftSideIcon={7}
                  heightOfLeftSideIcon={responsiveHeight(3.5)}
                  widthOfLeftSideIcon={responsiveWidth(7)}
                  marginTopForItemName={responsiveHeight(0.5)}
                />
              </TouchableOpacity>
            </Animated.View>
            {/*TO ADD NEW OPTION IN SIDE DRAWER NAVIGATION BAR, JUST COPY AND PAST BELOW SECTION WHICH IS ENDING HERE  */}



            




             {/*TO ADD NEW OPTION IN SIDE DRAWER NAVIGATION BAR, JUST COPY AND PAST BELOW SECTION WHICH IS STARTING HERE  */}
            <Animated.View style={ { marginTop: responsiveHeight(9) } }>
              <TouchableOpacity
                onPress={ () =>
                {
                  //navigation.navigate('Category');
                  //Alert.alert('Category Button clicked')
                  props.goToAddStaffScreenPropsLabel()
                } }>
                <DrawerNavigationMenuItem
                  itemNamePropslabel={ 'ADD STAFF' }
                  itemIconPropslabel={ require('../images/add_staff_icon.png') }
                  justifyContentForItemName={'flex-start'}
                  //marginTopForItemName={0.5}
                  showRightIcon={'Yes'}
                  //heightOfLeftSideIcon={3.5}
                  //widthOfLeftSideIcon={7}
                  heightOfLeftSideIcon={responsiveHeight(3.5)}
                  widthOfLeftSideIcon={responsiveWidth(7)}
                  marginTopForItemName={responsiveHeight(0.5)}
                />
              </TouchableOpacity>
            </Animated.View>
            {/*TO ADD NEW OPTION IN SIDE DRAWER NAVIGATION BAR, JUST COPY AND PAST BELOW SECTION WHICH IS ENDING HERE  */}





             {/*TO ADD NEW OPTION IN SIDE DRAWER NAVIGATION BAR, JUST COPY AND PAST BELOW SECTION WHICH IS STARTING HERE  */}
            <Animated.View style={ { marginTop: responsiveHeight(9) } }>
              <TouchableOpacity
                onPress={ () =>
                {
                  //navigation.navigate('Category');
                  //Alert.alert('Category Button clicked')
                  props.gotoColorScreenPropsLabel()
                } }>
                <DrawerNavigationMenuItem
                  itemNamePropslabel={ 'COLOR' }
                  itemIconPropslabel={ require('../images/color.png') }
                  justifyContentForItemName={'flex-start'}
                  //marginTopForItemName={0.5}
                  showRightIcon={'Yes'}
                  //heightOfLeftSideIcon={3.5}
                  //widthOfLeftSideIcon={7}
                  heightOfLeftSideIcon={responsiveHeight(3.5)}
                  widthOfLeftSideIcon={responsiveWidth(7)}
                  marginTopForItemName={responsiveHeight(0.5)}
                />
              </TouchableOpacity>
            </Animated.View>
            {/*TO ADD NEW OPTION IN SIDE DRAWER NAVIGATION BAR, JUST COPY AND PAST BELOW SECTION WHICH IS ENDING HERE  */}





             {/*TO ADD NEW OPTION IN SIDE DRAWER NAVIGATION BAR, JUST COPY AND PAST BELOW SECTION WHICH IS STARTING HERE  */}
            <Animated.View style={ { marginTop: responsiveHeight(9) } }>
              <TouchableOpacity
                onPress={ () =>
                {
                  //navigation.navigate('Category');
                  //Alert.alert('Category Button clicked')
                  props.gotoChangePasswordScreenPropsLabel()
                } }>
                <DrawerNavigationMenuItem
                  itemNamePropslabel={ 'CHANGE'+'\n'+ 'PASSWORD' }
                  itemIconPropslabel={ require('../images/customer.png') }
                  justifyContentForItemName={'flex-start'}
                  //marginTopForItemName={-1}  
                  showRightIcon={'Yes'} 
                  //heightOfLeftSideIcon={3.5}
                  //widthOfLeftSideIcon={6}
                  heightOfLeftSideIcon={responsiveHeight(3.5)}
                  widthOfLeftSideIcon={responsiveWidth(6)}
                  marginTopForItemName={responsiveHeight(-1)}
                />
              </TouchableOpacity>
            </Animated.View>
            {/*TO ADD NEW OPTION IN SIDE DRAWER NAVIGATION BAR, JUST COPY AND PAST BELOW SECTION WHICH IS ENDING HERE  */}






             {/*TO ADD NEW OPTION IN SIDE DRAWER NAVIGATION BAR, JUST COPY AND PAST BELOW SECTION WHICH IS STARTING HERE  */}
            <Animated.View style={ { marginTop: responsiveHeight(9) } }>
              <TouchableOpacity
                onPress={ () =>
                {
                  //navigation.navigate('Category');
                  //Alert.alert('Category Button clicked')
                  props.gotoSettingsScreenPropsLabel()
                } }>
                <DrawerNavigationMenuItem
                  itemNamePropslabel={ 'SETTINGS' }
                  itemIconPropslabel={ require('../images/settings.png') }
                  justifyContentForItemName={'flex-start'}
                  //marginTopForItemName={0.5}
                  showRightIcon={'Yes'}
                  //heightOfLeftSideIcon={3.5}
                  //widthOfLeftSideIcon={7}
                  heightOfLeftSideIcon={responsiveHeight(3.5)}
                  widthOfLeftSideIcon={responsiveWidth(7)}
                  marginTopForItemName={responsiveHeight(0.5)}
                />
              </TouchableOpacity>
            </Animated.View>
            {/*TO ADD NEW OPTION IN SIDE DRAWER NAVIGATION BAR, JUST COPY AND PAST BELOW SECTION WHICH IS ENDING HERE  */}


            {/*TO ADD NEW OPTION IN SIDE DRAWER NAVIGATION BAR, JUST COPY AND PAST BELOW SECTION WHICH IS STARTING HERE  */}
            <Animated.View style={ { marginTop: responsiveHeight(9) } }>
              <TouchableOpacity
                onPress={ () =>
                {
                  props.removeAllAsyncStorageInformation()
                  //closeSideNavigationMethod();
                } }>
                <DrawerNavigationMenuItem
                  itemNamePropslabel={ 'LOGOUT' }
                  itemIconPropslabel={ require('../images/logout.png') }
                  justifyContentForItemName={'flex-start'}
                  //marginTopForItemName={0.5}
                  showRightIcon={'No'}
                  //heightOfLeftSideIcon={3.5}
                  //widthOfLeftSideIcon={7}
                  heightOfLeftSideIcon={responsiveHeight(3.5)}
                  widthOfLeftSideIcon={responsiveWidth(7)}
                  marginTopForItemName={responsiveHeight(0.5)}
                />
              </TouchableOpacity>
            </Animated.View>   
            {/*TO ADD NEW OPTION IN SIDE DRAWER NAVIGATION BAR, JUST COPY AND PAST BELOW SECTION WHICH IS ENDING HERE  */}

          </Animated.View>

          {/*Menu Items for Drawer Menu which will hold our pages name ends starts here*/ }


         {interactiveModalToExitOrNot==true?
              
              <AllUITogether
              show={'InteractiveModalWithTwoOptions'}
              widthPropsForInteractiveModal={responsiveWidth(78)}
              heightPropsForInteractiveModal={responsiveHeight(19)}
              questionToAskForInteractiveModalProps={'Do you want to exit?'}   
              interactiveModalFirstOptionLabelProps={'Yes'}
              interactiveModalSecondOptionLabelProps={'No'}
              tasktoDowhenFirstOptionSelectedProps={dothisOnYesSelectedToExit}
              tasktoDowhenSecondOptionSelectedProps={dothisOnCancelSelectedToExit}
              doWhenBackBtnPressedOnInteractiveModalWithTwoOptions={dothisOnBackButtonPressedInteractiveModalInASNM}
              />:null}   

        </Animated.View>

        {/*Menu Design code ends here*/ }

        {/* Another Module for Logout starts here: */ }
        {/* <Button title="Change Modal" onPress={() =>setHomeScreenModalVisible(false)} /> */ }
        {/* Another Module for Logout Ends here: */ }

        {/* Another Module for Logout starts here: */ }
        {/* <Button title="Logout" onPress={() => removeData()} />*/ }
        {/* Another Module for Logout Ends here: */ }

        {/* Another Module for starts here: */ }
        {/* Another Module for Ends here: */ }
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default forwardRef(ActualSideNavigationMenu);

const styles = StyleSheet.create({
  circle: {
    flex: 1,
    height: height + 50,
    width: responsiveWidth(85),
    //This width:290 is the width of our Animated.View which is holding everything which is present in SideNavigationDrawerScreen.
    backgroundColor: '#FEFBF4',
    //backgroundColor: 'yellow',
    position: 'absolute',
    left: -380,
    //This -330 left will push our Side navigation drawer inside in left so that when we close the side drawer
    //it is completely inside the left screen and not able to see.
    //when we want to open our Side Drawer we have kept ration of MIN_TRANSLATE_X = 330; also, so that when we open the 
    //side drawer it will move to +330 on our screen in x axis so it is visible to use.
    //left:-330,
    //top: -250,
    //top: -33,
    //top:-500,
    top:responsiveHeight(-100),                                       
    //do here changes like decreasing number from -33 to -30 for bringing our side navigation bar below if it has gone up side 
    //in the screen too much. 
    borderRadius: 25,
  },

  name_And_Contact_No_Text_Style: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'raleway-semibold',
    color: 'black',
    marginBottom: responsiveHeight(1.5),
  },

});
