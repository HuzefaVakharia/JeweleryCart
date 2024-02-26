import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../Screens/HomeScreen';
import Order from '../Screens/Order';
import LoginScreen from '../Screens/LoginScreen';
import NextRegisterScreen from '../Screens/NextRegisterScreen';
import CameraFullScreen from '../Screens/CameraFullScreen';
import Register from '../Screens/Register';
import EditOrderScreen from '../Screens/EditOrderScreen';
import EditOrderScreenSecond from '../Screens/EditOrderScreenSecond';
import SupplierScreen from '../Screens/SupplierScreen';
import CustomerScreen from '../Screens/CustomerScreen';
import AddOrderScreen from '../Screens/AddOrderScreen';
import AddOrderScreenSecond from '../Screens/AddOrderScreenSecond';
import AddPlatinumOrderScreenSecond from '../Screens/AddPlatinumOrderScreenSecond';
import EditCustomerScreen from '../Screens/EditCustomerScreen';
import EditSupplierScreen from '../Screens/EditSupplierScreen';
import Category from '../Screens/Category';
import Settings from '../Screens/Settings';
import ChangePassword from '../Screens/ChangePassword';
import PlatinumEditOrderTwo from '../Screens/PlatinumEditOrderTwo';
import AddCustomerScreen from '../Screens/AddCustomerScreen';
import AddSupplierScreen from '../Screens/AddSupplierScreen';
import EditCategoryScreen from '../Screens/EditCategoryScreen';
import AddCategoryScreen from '../Screens/AddCategoryScreen';
import CaratScreen from '../Screens/CaratScreen';
import AddCaratScreen from '../Screens/AddCaratScreen';
import ColorScreen from '../Screens/ColorScreen';
import AddColorScreen from '../Screens/AddColorScreen';
import EditColorScreen from '../Screens/EditColorScreen';
import EditCaratScreen from '../Screens/EditCaratScreen';
import AddStaffScreen from '../Screens/AddStaffScreen';
import EditStaffScreen from '../Screens/EditStaffScreen';
import AddStaffFormScreen from '../Screens/AddStaffFormScreen';
import UploadImage from '../Screens/UploadImage';



const Stack = createNativeStackNavigator();
const AppNavigator = () =>
{








  return (
    <NavigationContainer>



      <Stack.Navigator>

            <Stack.Screen
          component={ LoginScreen }
          name="LoginScreen"
          options={ {
            headerShown: false
          } }
        />


        <Stack.Screen
          component={ Register }
          name="Register"
          options={ {
            headerShown: false


          } }
        />



        <Stack.Screen
          component={ NextRegisterScreen }
          name="NextRegisterScreen"
          options={ {
            headerShown: false


          } }
        />





        <Stack.Screen
          component={ HomeScreen }
          name="HomeScreen"
          options={ {
            headerShown: false
          } }
        />

        <Stack.Screen
          component={ Order }
          name="Order"
          options={ {
            headerShown: false
          } }
        /> 



        <Stack.Screen
          component={ EditOrderScreen }
          name="EditOrderScreen"
          options={ {
            headerShown: false
          } }
        />

        <Stack.Screen
          component={ EditOrderScreenSecond }
          name="EditOrderScreenSecond"
          options={{
            headerShown: false
          }}
        /> 



        <Stack.Screen
          component={ CustomerScreen }
          name="CustomerScreen"
          options={{
            headerShown: false


          }}
        />


          <Stack.Screen
          component={ SupplierScreen }
          name="SupplierScreen"
          options={ {
            headerShown: false


          } }
        /> 

         <Stack.Screen
          component={ EditSupplierScreen }
          name="EditSupplierScreen"
          options={ {
            headerShown: false


          } }
        />



        <Stack.Screen
          component={ AddOrderScreen }
          name="AddOrderScreen"
          options={ {
            headerShown: false


          } }
        />



        <Stack.Screen
          component={ AddOrderScreenSecond }
          name="AddOrderScreenSecond"
          options={ {
            headerShown: false


          } }
        />

        <Stack.Screen
          component={ AddPlatinumOrderScreenSecond }
          name="AddPlatinumOrderScreenSecond"
          options={ {
            headerShown: false


          } }
        />



        <Stack.Screen
          component={ EditCustomerScreen }
          name="EditCustomerScreen"
          options={ {
            headerShown: false


          } }
        />     



        



        



        <Stack.Screen
          component={ PlatinumEditOrderTwo }
          name="PlatinumEditOrderTwo"
          options={ {
            headerShown: false
          } }
        />




        <Stack.Screen
          component={ Category }
          name="Category"
          options={{
            headerShown: false     
          }}
        />



        <Stack.Screen
          component={ Settings }
          name="Settings"
          options={ {
            headerShown: false
          } }
        />


         <Stack.Screen
          component={ ChangePassword }
          name="ChangePassword"
          options={ {
            headerShown: false
          } }
        />


         <Stack.Screen
          component={CameraFullScreen}
          name="CameraFullScreen"
          options={ {
            headerShown: false
          } }
        />


        <Stack.Screen
          component={AddCustomerScreen}
          name="AddCustomerScreen"
          options={ {
            headerShown: false
          } }
        />


        <Stack.Screen
          component={AddSupplierScreen}
          name="AddSupplierScreen"
          options={ {
            headerShown: false
          } }
        />



        <Stack.Screen
          component={EditCategoryScreen}
          name="EditCategoryScreen"
          options={ {
            headerShown: false
          } }
        />




        <Stack.Screen
          component={AddCategoryScreen}
          name="AddCategoryScreen"
          options={ {
            headerShown: false
          } }
        />



        <Stack.Screen
          component={CaratScreen}
          name="CaratScreen"
          options={ {
            headerShown: false
          } }
        />



        <Stack.Screen
          component={AddCaratScreen}
          name="AddCaratScreen"
          options={ {
            headerShown: false
          } }
        />




        <Stack.Screen
          component={ColorScreen}
          name="ColorScreen"
          options={ {
            headerShown: false
          } }
        />




        <Stack.Screen
          component={AddColorScreen}
          name="AddColorScreen"
          options={ {
            headerShown: false
          } }
        />



        <Stack.Screen
          component={EditColorScreen}
          name="EditColorScreen"
          options={ {
            headerShown: false
          } }
        />


        <Stack.Screen
          component={EditCaratScreen}
          name="EditCaratScreen"
          options={ {
            headerShown: false
          } }
        />



        <Stack.Screen
          component={AddStaffScreen}
          name="AddStaffScreen"
          options={ {
            headerShown: false
          } }
        />



        <Stack.Screen
          component={EditStaffScreen}
          name="EditStaffScreen" 
          options={ {
            headerShown: false
          } }
        />


        <Stack.Screen
          component={AddStaffFormScreen}
          name="AddStaffFormScreen" 
          options={ {
            headerShown: false
          } }
        />


        <Stack.Screen
          component={UploadImage}
          name="UploadImage" 
          options={{
            headerShown: false
          }}
        />

       




      </Stack.Navigator>

    </NavigationContainer>
  );



};

export default AppNavigator;

