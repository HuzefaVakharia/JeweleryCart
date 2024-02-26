/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
//FetchDynamicAPIsTwo
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { View } from 'react-native';

const FetchDynamicAPIsTwo = (props) =>
{
  
    useEffect(() =>
    {   
        //console.log('Length of Images got inside FetchDynamicAPIsTwo is:'+props.imagefileProps)
        fetchAPICodingFunctionTwo();    
    }, []);

    const fetchAPICodingFunctionTwo = () =>
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
                    
                   
                  customer_id:props.customerIDProps,
                  supplier_id:props.supplierIDProps,
                 
                  order_id:props.orderIDProps,      
                  
                  
                  
                  //Remove below too many body attribute for Edit Order api call 
                  //and create new FetchEditOrderAPI file and paste this
                  //attributes in that file.
                  
                  order_type:props.ordertypeProps,
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
                  //image_file:props.imagefileProps,      

                  //Remove below section ends here for too many body attribute for Edit Order api call 
                  
                  

                }),




                
            }
        ).then((response) =>   
        {
            let result = response.json();

            result.then((values) =>
            {
                //console.log('Console gave Values:'+values);


                if (props.screenNameProps == 'EditOrderScreen')
                {

                    alert('Edit Order API result is:'+values.message);   
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


            });
        });
    };

    

    return (
        <View>
            {/* <Text>This is logged in person name: {showMeLoggedInName}</Text> */ }
        </View>
    );
};

export default FetchDynamicAPIsTwo;     
