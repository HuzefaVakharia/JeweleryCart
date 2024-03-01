/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
//FetchDynamicAPIs
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { View,ToastAndroid } from 'react-native';

const FetchDynamicAPIs = (props) =>
{
  
    useEffect(() =>
    {
        //alert('Access Token Got in FetchDynamicAPIs file is:'+props.accessTokenForFetchingAPIProps);
        fetchAPICodingFunction();
    }, []);

    const fetchAPICodingFunction = () =>
    {
        fetch(
            'https://rajeshwersoftsolution.com/jwelcart/api/' + props.urlToFetchProps,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + props.accessTokenForFetchingAPIProps,
                },

                

                body: JSON.stringify({
                    
                    action: props.actionProps,
                   start: props.startProps,
                    limit: props.limitProps,
                    sortby_name: props.sortByProps,

                  name:props.namePropsToEdit,
                  password:props.passwordProps,
                  mobileno:props.mobilenoPropsToEdit,
                  email:props.emailProps,
                  
                  state:props.stateIDPropsToEdit,
                  city:props.cityIDPropsToEdit,
                  contact_person:props.orderPersonIEContactPersonPropsToEdit,
                  contact_person_mobile:props.orderPersonNumberIEContactMobileNumberPropsToEdit,  
                  role:props.roleProps,  
                  pincode:props.pincodeProps,
                  staff_id:props.staffIDProps,
                  address:props.addressPropsToEdit,
                  customer_id:props.customerIDProps,
                  supplier_id:props.supplierIDProps,
                  customer_code:props.customerCodePropsToEdit,  
                  order_id:props.orderIDProps,      
                  order_status:props.orderStatusProps,
                  remarks:props.remarksTextProps, 
                  category_name:props.categoryNameProps,
                  //id:props.categoryIDToBeEditedProps,
                  id:props.idProps,     
                  supplier_code:props.supplierCodePropsToEdit,
                  carat_name:props.caratNameProps,
                  carat_id:props.caratIDProps,
                  color_name:props.colorToBeEditedProps,
                  color_id:props.colorIDProps,    
                  //mobile_no:props.orderPersonIEContactPersonPropsToEdit,
                  //This above mobileno body is use to edit supplier details in EditSupplierScreen.
                  
                  //Remove below too many body attribute for Edit Order api call 
                  //and create new FetchEditOrderAPI file and paste this
                  //attributes in that file.
                  
                  /* order_type:props.ordertypeProps,
                  item:props.itemProps,
                  carret_id:props.carretidProps,
                  color_id:props.coloridProps,
                  qty:props.qtyProps,
                  size:props.sizeProps,
                  narration:props.narrationProps,
                  delivery_date:props.deliverydateProps,
                  hallmark:props.hallmarkProps,
                  priority:props.priorityProps,
                  design_no:props.designnoProps,
                  broadness:props.broadnessProps,
                  diamond_weight:props.diamondweightProps,
                  diamond_quality:props.diamondqualityProps,
                  diamond_pcs:props.diamondpcsProps,
                  party_diamond:props.partydiamondProps,
                  stone_weight:props.stoneweightProps,
                  stone_quality:props.stonequalityProps,
                  stone_pcs:props.stonepcsProps,
                  party_stone:props.partystoneProps,
                  pt_polish:props.ptpolishProps,
                  kt18_polish:props.kt18_polishProps,
                  engraving_details:props.engravingdetailsProps,
                  order_for:props.orderforProps,
                  unique_id:props.uniqueidProps,
                  order_date:props.orderdateProps,
                  category_id:props.categoryidProps,
                  image_file:props.imagefileProps, */      

                  //Remove below section ends here for too many body attribute for Edit Order api call 
                  //and create new FetchEditOrderAPI file and paste this
                  //attributes in that file.



                  
                  //from:props.fromProps,
                  //above from is registered keyword so change this body word 
                  to:props.toProps,
                  date_filter_for:props.datefilterforOrderdateProps,
                  
                  
                  sortby_orderno:props.sortbyordernoProps,
                  

                }),




                
            }
        ).then((response) =>   
        {
            let result = response.json();

            result.then((values) =>
            {
                //console.log('Console gave Values:'+values);


                if (props.screenNameProps == 'HomeScreen')
                {
                    var dashBoardAPIData = {
                        New_orderCount: values.data.new_order,
                        Process_orderCount: values.data.process_order,
                        Duein_thisweekCount: values.data.duein_thisweek,
                        Over_dueCount: values.data.over_due,
                        Total_orderCount: values.data.total_order,
                        Duein_todayCount: values.data.duein_today,
                        Customer_pendingCount: values.data.customer_pending,

                        CustomerCount: values.data.customer,
                        SupplierCount: values.data.supplier,
                        Due_dayCount: values.data.due_day,

                        Instance_idText: values.data.instance_id,
                    };

                    AsyncStorage.setItem(
                        'dashBoardDataKey',
                        JSON.stringify(dashBoardAPIData)
                    );
                    //alert(' Process_order Count got:'+values.data.process_order);

                    props.getData();
                } else if (props.screenNameProps == 'OrderScreen')
                {




                    /* var no_of_orderAPIData = {
                      No_of_orderDataTake: values.data.no_of_order,
                    }; */

                    var orderListAPIData = {
                        OrderListDataTake: values.data.order_list,
                        No_of_orderDataTake: values.data.no_of_order,
                    };



                    AsyncStorage.setItem(
                        'orderScreenFullDataKey',
                        JSON.stringify(orderListAPIData)
                    );





                    props.getData();
                    props.setterToStopCallingFetchDynamicAPIsInOrderScreenprops(false);
                } else if (props.screenNameProps == 'CustomerScreen')
                {

                    //alert('Customer Screen values got:'+values);

                    console.log('Customer Screen values got:' + values.data.customer);






                    var customerSearchAPIData = {
                        CustomerSearchDataTake: values.data.customer,
                        //No_of_orderDataTake: values.data.no_of_order,
                    };



                    AsyncStorage.setItem(
                        'customerScreenFullDataKey',
                        JSON.stringify(customerSearchAPIData)
                    );





                    props.getData();

                    props.setterToStopCallingFetchDynamicAPIsInCustomerScreenprops(false);


                } else if (props.screenNameProps == 'SupplierScreen')
                {

                    //alert('Customer Screen values got:'+values);

                    console.log('Supplier Screen values got:' + values.data.supplier);






                    var supplierSearchAPIData = {
                        SupplierSearchDataTake: values.data.supplier,
                        //No_of_orderDataTake: values.data.no_of_order,
                    };



                    AsyncStorage.setItem(
                        'supplierScreenFullDataKey',
                        JSON.stringify(supplierSearchAPIData)
                    );





                    props.getData();

                    props.setterToStopCallingFetchDynamicAPIsInSupplierScreenprops(false);
                }else if (props.screenNameProps == 'EditCustomerScreen')
                {

                    //alert('Edit Customer Screen values got:'+values.result);
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    props.setloaderActiviteOrNotProps(false);
                    props.gotoCustomerScreenAfterEditProps();

                    
                }else if (props.screenNameProps == 'CategoryScreen')
                {

                    //alert('CategoryScreen Screen values got:'+values.result); 
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );      
                    props.setterToStopCallingFetchDynamicAPIsInCategoryScreenprops(false);
                    props.setterForFillingFetchDataFromAPIInFlatListDirectly(values.data)
                    //props.gotoCustomerScreenAfterEditProps();

                    
                }
                else if (props.screenNameProps == 'CaratScreen')
                {

                    //alert('CaratScreen Screen values got:'+values.result);  
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );     
                    props.setterToStopCallingFetchDynamicAPIsInCaratScreenprops(false);
                    props.setterForFillingFetchDataFromAPIInFlatListDirectly(values.data)
                    //props.gotoCustomerScreenAfterEditProps();

                    
                }
                else if (props.screenNameProps == 'AddStaffScreen')
                {

                    //alert('AddStaffScreen Screen values got:'+JSON.stringify(values));   
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );    
                    props.setterToStopCallingFetchDynamicAPIsInAddStaffprops(false);
                    props.setterForFillingFetchDataFromAPIInFlatListDirectly(values.data.staff);
                    //props.gotoCustomerScreenAfterEditProps();

                    
                }
                else if (props.screenNameProps == 'ColorScreen')
                {

                    //alert('ColorScreen values got:'+values.result);    
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );   
                    props.setterToStopCallingFetchDynamicAPIsInColorScreenprops(false);
                    props.setterForFillingFetchDataFromAPIInFlatListDirectly(values.data)
                    //props.gotoCustomerScreenAfterEditProps();

                    
                }
                else if (props.screenNameProps == 'AddCustomerScreen')
                {

                    //alert('Edit Customer Screen values got:'+values.result);
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    props.setloaderActiviteOrNotProps(false);
                    props.gotoCustomerScreenAfterAddProps();
                    props.setterToStopCallingAddCustomerAPI(false);   
                    //props.setterForRefreshingOurFlatListInAddCustomerScreen(false);    
                    
                }else if (props.screenNameProps == 'CustomerScreenForDelete')
                {

                    //alert('Customer Deleted or not result:'+values.message);   
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    props.setNowcallingDeleteAPIVariablePropsInCustomerScreen(false);
                    props.setterForRefreshingOurFlatListInCustomerScreen(true);

                     if(props.variableForLastFlatListDataisToBeDeletedPropsInCustomerScreen==true){
                      props.removeFlatListDataFromAsynPropsInCustomerScreen();
                      props.setterForLastFlatListDataisToBeDeletedPropsInCustomerScreen(false);
                      props.refreshOnLastFlatListDeletedSuccessfullyInCustomerScreen(null);
                      
                      }

                    
                }else if (props.screenNameProps == 'OrderScreenForDelete')
                {

                    //alert('Order Deleted or not result:'+values.result);
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    props.setNowcallingDeleteAPIVariableProps(false);
                    props.setterForRefreshingOurFlatList(true);
                    
                    
                    
                    if(props.variableForLastFlatListDataisToBeDeletedProps==true){   
                      props.removeFlatListDataFromAsynProps();
                      props.setterForLastFlatListDataisToBeDeletedProps(false);
                      props.refreshOnLastFlatListDeletedSuccessfully([]);
                      props.changeTotalOrderProps(0);
                      props.setterForshowNoDataProps(true);
                      //props.setNoDataToTrueInOrderScreen(true);
                      }
                    

                    
                }
                else if (props.screenNameProps == 'categoryScreenForDelete')
                {

                    //alert('Category Deleted or not result:'+JSON.stringify(values)); 
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );  
                    props.setNowcallingDeleteAPIVariableProps(false);
                    props.setterForRefreshingOurFlatList(true);
                    
                    
                    
                    if(props.variableForLastFlatListDataisToBeDeletedProps==true){   
                      //props.removeFlatListDataFromAsynProps();
                      props.setterForLastFlatListDataisToBeDeletedProps(false);
                      props.refreshOnLastFlatListDeletedSuccessfully([]);
                      //props.changeTotalOrderProps(0);
                      props.setterForshowNoDataProps(true);
                      //props.setNoDataToTrueInOrderScreen(true);
                      }
                    

                    
                }
                else if (props.screenNameProps == 'colorScreenForDelete')
                {

                    //alert('Color Deleted or not result:'+JSON.stringify(values));   
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    props.setNowcallingDeleteAPIVariableProps(false);
                    props.setterForRefreshingOurFlatList(true);
                    
                    
                    
                    if(props.variableForLastFlatListDataisToBeDeletedProps==true){   
                      //props.removeFlatListDataFromAsynProps();
                      props.setterForLastFlatListDataisToBeDeletedProps(false);
                      props.refreshOnLastFlatListDeletedSuccessfully([]);
                      //props.changeTotalOrderProps(0);
                      props.setterForshowNoDataProps(true);
                      //props.setNoDataToTrueInOrderScreen(true);
                      }
                    

                    
                }
                else if (props.screenNameProps == 'caratScreenForDelete')
                {

                    //alert('Carat Deleted or not result:'+JSON.stringify(values));  
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      ); 
                    props.setNowcallingDeleteAPIVariableProps(false);
                    props.setterForRefreshingOurFlatList(true);
                    
                    
                    
                    if(props.variableForLastFlatListDataisToBeDeletedProps==true){   
                      //props.removeFlatListDataFromAsynProps();
                      props.setterForLastFlatListDataisToBeDeletedProps(false);
                      props.refreshOnLastFlatListDeletedSuccessfully([]);
                      //props.changeTotalOrderProps(0);
                      props.setterForshowNoDataProps(true);
                      //props.setNoDataToTrueInOrderScreen(true);
                      }
                    

                    
                }
                else if (props.screenNameProps == 'OrderScreenForPending')
                {

                   // alert('Order Status Changed to Pending and API result is:'+values.message);
                   ToastAndroid.showWithGravity(
                    values.message,
                    ToastAndroid.LONG,
                    ToastAndroid.CENTER
                  );
                    props.setPendingBtnClickedInsideModalProps(false);
                    props.setterForRefreshingOurFlatList(true);
                    props.setterForPendingBtnModalVisibleProps(false);
                    
                    
                    
                    if(props.variableForLastFlatListDataisToBeChangeStatusToPendingProps==true){   
                      //props.removeFlatListDataFromAsynProps();
                      //props.setterForLastFlatListDataisToBeChangeStatusToPendingProps(false);  
                      //props.refreshOnLastFlatListDeletedSuccessfully([]);
                      //props.changeTotalOrderProps(0);
                      //props.setterForshowNoDataProps(true);
                      //props.setNoDataToTrueInOrderScreen(true);
                      }
                    

                    
                }
                else if (props.screenNameProps == 'OrderScreenForProcess')
                {

                    //alert('Order Status Changed to Process and API result is:'+values.message);
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    props.setProcessBtnClickedInsideModalProps(false);
                    props.setterForRefreshingOurFlatList(true);
                    props.setterForPendingBtnModalVisibleProps(false);
                    
                    
                    
                    /* if(props.variableForLastFlatListDataisToBeChangeStatusToPendingProps==true){   
                      props.removeFlatListDataFromAsynProps();
                      props.setterForLastFlatListDataisToBeChangeStatusToPendingProps(false);  
                      props.refreshOnLastFlatListDeletedSuccessfully([]);
                      props.changeTotalOrderProps(0);
                      props.setterForshowNoDataProps(true);
                      props.setNoDataToTrueInOrderScreen(true);
                      } */
                    

                    
                }
                else if (props.screenNameProps == 'OrderScreenForDispatch')
                {

                    //alert('Order Status Changed to Dispatch and API result is:'+values.message);
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    props.setDispatchBtnClickedInsideModalProps(false);
                    props.setterForRefreshingOurFlatList(true);
                    props.setterForPendingBtnModalVisibleProps(false);
                        
                    
                    
                    /* if(props.variableForLastFlatListDataisToBeChangeStatusToPendingProps==true){   
                      props.removeFlatListDataFromAsynProps();
                      props.setterForLastFlatListDataisToBeChangeStatusToPendingProps(false);  
                      props.refreshOnLastFlatListDeletedSuccessfully([]);
                      props.changeTotalOrderProps(0);
                      props.setterForshowNoDataProps(true);
                      props.setNoDataToTrueInOrderScreen(true);
                      } */
                    

                    
                }
                else if (props.screenNameProps == 'OrderScreenForDelivered')
                {

                    //alert('Order Status Changed to Delivered and API result is:'+values.message);
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    props.setDeliveredBtnClickedInsideModalProps(false);
                    props.setterForRefreshingOurFlatList(true);
                    props.setterForPendingBtnModalVisibleProps(false);
                        
                    
                    
                      if(props.variableForLastFlatListDataisToBeChangeStatusToDeliveredProps==true){   
                      props.removeFlatListDataFromAsynProps();
                      props.setterForLastFlatListDataisToBeChangeStatusToDeliveredProps(false);  
                      props.refreshOnLastFlatListDeletedSuccessfully([]);
                      props.changeTotalOrderProps(0);
                      props.setterForshowNoDataProps(true);
                      //props.setNoDataToTrueInOrderScreen(true);
                      }  
                    

                    
                }
                
                else if (props.screenNameProps == 'OrderScreenForCancel')
                {

                    //alert('Order Status Changed to Cancel and API result is:'+values.message);
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    props.setConfirmBtnInsideCancelModalClickedProps(false);
                    props.setterForRefreshingOurFlatList(true);
                    props.setterForPendingBtnModalVisibleProps(false);
                        props.setterForMakingRemarkTextToBlankAfterConfirmProps('');   
                    
                    
                      if(props.variableForLastFlatListDataisToBeChangeStatusToCancelProps==true){   
                      props.removeFlatListDataFromAsynProps();
                      props.setterForLastFlatListDataisToBeChangeStatusToCancelProps(false);  
                      props.refreshOnLastFlatListCancelSuccessfully([]);
                      props.changeTotalOrderProps(0);
                      props.setterForshowNoDataProps(true);
                      //props.setNoDataToTrueInOrderScreen(true);
                      }  
                    

                    
                }
                else if (props.screenNameProps == 'OrderScreenForError')
                {

                    //alert('Order Status Changed to Error and API result is:'+values.message);
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    props.setConfirmBtnInErrorModalClickedProps(false);
                    props.setterForRefreshingOurFlatList(true);
                    props.setterForPendingBtnModalVisibleProps(false);
                    
                    props.setterForMakingRemarkTextToBlankAfterConfirmProps('');
                        
                    
                    
                    /* if(props.variableForLastFlatListDataisToBeChangeStatusToPendingProps==true){   
                      props.removeFlatListDataFromAsynProps();
                      props.setterForLastFlatListDataisToBeChangeStatusToPendingProps(false);  
                      props.refreshOnLastFlatListDeletedSuccessfully([]);
                      props.changeTotalOrderProps(0);
                      props.setterForshowNoDataProps(true);
                      props.setNoDataToTrueInOrderScreen(true);
                      } */
                    

                    
                }

                else if (props.screenNameProps == 'EditOrderScreen')
                {

                    //alert('Edit Order API result is:'+values.message);   
                    /* props.setConfirmBtnInErrorModalClickedProps(false);
                    props.setterForRefreshingOurFlatList(true);
                    props.setterForPendingBtnModalVisibleProps(false);
                    
                    props.setterForMakingRemarkTextToBlankAfterConfirmProps(''); */
                        
                    
                    
                    /* if(props.variableForLastFlatListDataisToBeChangeStatusToPendingProps==true){   
                      props.removeFlatListDataFromAsynProps();
                      props.setterForLastFlatListDataisToBeChangeStatusToPendingProps(false);  
                      props.refreshOnLastFlatListDeletedSuccessfully([]);
                      props.changeTotalOrderProps(0);
                      props.setterForshowNoDataProps(true);
                      props.setNoDataToTrueInOrderScreen(true);
                      } */
                    

                    
                }
                else if (props.screenNameProps == 'EditSupplierScreen')
                {

                    //alert('Edit Supplier Screen values got:'+values.message);
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    props.setloaderActiviteOrNotProps(false);
                    props.gotoSupplierScreenAfterEditProps();
                    props.setcallFetchDynamicAPIsInAddSupplierScreenprops(false);
                    
                }
                else if (props.screenNameProps == 'EditCategoryScreen')
                {

                    //alert('Edit Category Screen values got:'+values.message);
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    props.setloaderActiviteOrNotProps(false);
                    props.gotoCategoryScreenAfterEditProps();
                    props.setcallFetchDynamicAPIsInEditCategoryScreenprops(false);
                    
                }
                else if (props.screenNameProps == 'EditStaffScreen')
                {

                    //alert('Edit Staff Screen values got:'+values.message);
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    props.setloaderActiviteOrNotProps(false);
                    props.gotoAddStaffScreenAfterEditProps();
                    props.setcallFetchDynamicAPIsInEditStaffScreenprops(false);   
                    
                }
                else if (props.screenNameProps == 'EditCaratScreen')
                {

                    //alert('Edit Carat Screen values got:'+values.message);
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    props.setloaderActiviteOrNotProps(false);
                    props.gotoCaratScreenAfterEditProps();
                    props.setcallFetchDynamicAPIsInEditCaratScreenprops(false);
                    
                }
                else if (props.screenNameProps == 'EditColorScreen')
                {

                    //alert('Edit Color Screen values got:'+values.message);
                    /* alert('1.colornameProps value:'+props.colorToBeEditedProps+'\n'+
                        '2.colorIDProps value:'+props.colorIDProps+'\n'+
                        '3.caratIDToBeEditedProps value:'+props.caratIDProps);  */  


                     


                        ToastAndroid.showWithGravity(
                            values.message,
                            ToastAndroid.LONG,
                            ToastAndroid.CENTER
                          );
                    props.setloaderActiviteOrNotProps(false);
                    props.gotoColorScreenAfterEditProps();
                    props.setcallFetchDynamicAPIsInEditColorScreenprops(false);
                    
                }
                else if (props.screenNameProps == 'AddCategoryScreen')
                {

                    //alert('Add Category Screen values got:'+values.message);
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    props.setloaderActiviteOrNotProps(false);    
                    props.gotoCategoryScreenAfterAddProps();
                    props.setcallFetchDynamicAPIsInAddCategoryScreenprops(false);
                    
                }
                else if (props.screenNameProps == 'AddStaffFormScreen')
                {

                    //alert('Add Category Screen values got:'+values.message);
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    props.setloaderActiviteOrNotProps(false);    
                    props.gotoAddStaffScreenProps();
                    props.setcallFetchDynamicAPIsInAddStaffFormScreenprops(false);     
                    
                }
                else if (props.screenNameProps == 'AddCaratScreen')
                {

                    //alert('Add Carat Screen values got:'+values.message);
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    props.setloaderActiviteOrNotProps(false);    
                    props.gotoCaratScreenAfterAddProps();
                    props.setcallFetchDynamicAPIsInAddCategoryScreenprops(false);
                    
                }
                else if (props.screenNameProps == 'AddColorScreen')
                {

                    //alert('Add Color Screen values got:'+values.message);
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    props.setloaderActiviteOrNotProps(false);    
                    props.gotoColorScreenAfterAddProps();
                    props.setcallFetchDynamicAPIsInAddColorScreenprops(false);
                    
                }
                else if (props.screenNameProps == 'AddSupplierScreen')
                {

                    //alert('Add Supplier Screen values got:'+values.message);
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      );
                    props.setloaderActiviteOrNotProps(false);
                    props.gotoSupplierScreenAfterAddProps();
                    props.setcallFetchDynamicAPIsInEditSupplierScreenprops(false);
                    
                }
               else if (props.screenNameProps == 'SupplierScreenForDelete')
                {

                    //alert('Supplier Deleted or not result:'+values.message);  
                    
                    ToastAndroid.showWithGravity(
                        values.message,
                        ToastAndroid.LONG,
                        ToastAndroid.CENTER
                      ); 
                    props.setNowcallingDeleteAPIVariablePropsInCustomerScreen(false);
                    props.setterForRefreshingOurFlatListInCustomerScreen(true);
                    
                    
                    //alert('variableForRefreshingOurFlatListInCustomerScreen:'+props.variableForRefreshingOurFlatListInCustomerScreen);




                     if(props.variableForLastFlatListDataisToBeDeletedPropsInCustomerScreen==true){
                      props.removeFlatListDataFromAsynPropsInCustomerScreen();
                      props.setterForLastFlatListDataisToBeDeletedPropsInCustomerScreen(false);
                      props.refreshOnLastFlatListDeletedSuccessfullyInCustomerScreen([]);
                      
                      }

                    
                }


            });
        });
    };

    

    return (
        <View>
            {/* <Text>This is logged in person name: {showMeLoggedInName}</Text> */ }
        </View>
    );
};

export default FetchDynamicAPIs;     
