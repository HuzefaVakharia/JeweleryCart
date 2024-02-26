/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-lone-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Image,ActivityIndicator,SafeAreaView,FlatList, ScrollView } from 'react-native';
import React,{useEffect,useState} from 'react';
//import * as FileSystem from 'expo-file-system';
//import * as ImagePicker from 'expo-image-picker';
//import Ionicons from '@expo/vector-icons/Ionicons';



/* const imgDir = FileSystem.documentDirectory+'images/';

const ensureDirExists=async()=>{
  const dirInfo=await FileSystem.getInfoAsync(imgDir);
  if(!dirInfo.exists){
    await FileSystem.makeDirectoryAsync(imgDir,{intermediates:true});
  }
}; */

let i=0;

export default function UploadImage() {
const [images,setImages]=useState([]);
const [loading,setLoading]=useState(false);     

useEffect(()=>{
  //loadImages();
},[]);




/* const loadImages=async()=>{

  await ensureDirExists();
  const files=await FileSystem.readDirectoryAsync(imgDir);
  if(files.length>0){
    setImages(files.map(f=>imgDir+f))
  }
} */




  /* const selectImage=async()=>{
    // No permissions request is necessary for launching the image library
    //let result;

    //const options:ImagePicker.ImagePickerOptions={
        let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.75,
        });

    




    
   


    

    if(!result.canceled){
      //console.log("URI of Photo: ",result.assets[0].uri)
      saveImage(result.assets[0].uri);
    }    
  }; */




  /* const saveImage=async(uri)=>{
    await ensureDirExists();
    const filename=new Date().getTime()+'.jpg';
    const dest=imgDir+filename;
    await FileSystem.copyAsync({from:uri,to:dest});
    setImages([...images,dest]);
  }
 */









/* const deleteImage=async(uri)=>{
  await FileSystem.deleteAsync(uri);
  setImages(images.filter((i)=>i!==uri));
} */









/* const uploadImage=async(uri:string)=>{
  setLoading(true);

  const response =await FileSystem.uploadAsync('https://rajeshwersoftsolution.com/jwelcart/api/insert_order',uri,{
    httpMethod:'POST',
    uploadType:FileSystem.FileSystemUploadType.MULTIPART,
    headers: {
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjU1ZGI4YWZlOTFjMThiMTc1MWU1MTcwOGY1MmU5YmE5MzEzMmNhY2VlOTQwNzZlMzFkYjdkNzY1YmQzYTJjYjdlNjNlYTc1ZWExM2VkNmEiLCJpYXQiOjE2OTE3NTUxODksIm5iZiI6MTY5MTc1NTE4OSwiZXhwIjoxNzIzMzc3NTg5LCJzdWIiOiI0OSIsInNjb3BlcyI6W119.cyBnPOpEyTv1EEDrJruH2DBW7AU5iqkAUkzBT03vCLDXbla_YDkMjVBt7SAo5g18IfaX0XMhTSSnwa_J3GVaDTnxcN4-h_Hvy0JE6LeX0drkWR7yb2W4oapkimCLuiuBIR99fg_xzgk9jbMzeyuYQRQ_pT9ew4Zj-3fOo_gTO-D68N-8b03HZbmKUAFYdeF9p8sXTiZCFL-xOsaTwvdxHsu3os71sL34GuAs7nUaXfmy8u036EBAbHT-zP99SWM23xE4qKrSQmSa-Jl8xCwo-7Jw824jmLHPRHJyfDTzNgcSn3ZBAVK2NsA2UOYxyT1f99J_gVxepF-yJJglWBYZuVhn27ZIxtP9U0AAZEXnj2OSMAd1sa1NAvU-JS4Eezs7pAfwEv4qVrbTBs5nz2kGP3Epo3fkkKKPDzbgomAoEuQzdOdjJbL_-wrSe1DwT8Mg_OQS_tBUVV790fyNvxJxIaVKbQgDLrekdZMMYw3BjfvFbytswvL__LRuPCe3ITUSn5TBMT5zoj84d3OQFMFr5TDZ0Qj9A2pp8Z3sQPeumWwAF2QNeN0PA21P1UO4SR1j1TQspeoMsNT4MVKq4iIyEP7MGWOP0Ery0CMneBIJPkVSnx4zAnw1CoaQ24BRB4lvVBSnetIZoW38V_DBe_lAubK5j-Yl3uzqcvLDQ3VUrpo',
     Accept: 'application/json',
     'Content-Type': 'multipart/form-data',
   },
    fieldName:'image_file[]',
    
  });
  console.log('IMAGE UPLOAD TO SERVER RESPONSE',JSON.stringify(response, null, 4));
  setLoading(false);
}; */



const uploadImageToServer=async(uri)=>{    
  setLoading(true);

  const data = new FormData();

       
         /* alert('For Image number:'+i+'\n'+'File uri is:'+combineImagesFromGalleryAndCamera[i].uri+'\n'+'File Name is:'+combineImagesFromGalleryAndCamera[i].name+'\n'+'File mimeType is:'+combineImagesFromGalleryAndCamera[i].mimeType);          */ 

         let imageInfo={
          uri: uri,
          name: "ImageSelected.jpg",
          type: "success",
          size:3743432  
      }
      data.append('image_file[]',{
        uri: uri,
        name: "ImageSelected.jpg",
        type: "success",
        size:3743432  
    });     
      
      
      /* for(i=0;i<itemImageSentToAddOrderSecond.length;i++){
        //alert('For Image number:'+i+'\n'+'File uri is:'+singleFileButArray[i].uri+'\n'+'File Name is:'+singleFileButArray[i].name+'\n'+'File mimeType is:'+singleFileButArray[i].mimeType);    


      data.append('image_file[]',

        {
        uri: itemImageSentToAddOrderSecond[i].uri,
        name: itemImageSentToAddOrderSecond[i].name,
        type: itemImageSentToAddOrderSecond[i].mimeType,
      }
       );     
      } */
      
      /* 
		customerIDSentToAddOrderSecond,
		supplierIDSentToAddOrderSecond,
		categoryIDSentToAddOrderSecond,
		orderDateSentToAddOrderSecond,
		orderForSentToAddOrderSecond,
		typeOfOrderSentToAddOrderSecond,
       */



      data.append('customer_id','5'); 
      data.append('supplier_id','2');
      data.append('category_id','2');
      data.append('order_date','2023-06-20');
      data.append('order_for','Client');
      data.append('order_type','Gold');
      data.append('item','New New Order 4');
      data.append('carret_id','1');
      data.append('color_id','1');
      data.append('qty','5');
      data.append('size','xl');
      data.append('narration','sdf');
      data.append('delivery_date','2023-07-13');
      
      data.append('hallmark','isi');
      data.append('priority','Normal');
      //data.append('design_no','1');
      //data.append('broadness','1');   
      //data.append('diamond_weight','1');
      //data.append('diamond_quality','1');
      //data.append('diamond_pcs','1');
      //data.append('party_diamond','1');
      //data.append('stone_weight','1');
      //data.append('stone_pcs','1');
      //data.append('party_stone','1');
      //data.append('pt_polish','1');
      //data.append('kt18_polish','1');
      //data.append('engraving_details','1');
      
      //data.append('unique_id','1');
     
     
            
      

      //if(callEditOrderAPIToUploadImage=='NOW'){
      try {
        let res = await fetch('https://rajeshwersoftsolution.com/jwelcart/api/insert_order', {
          method: 'post',
          body: data,
          headers: {
             Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjU1ZGI4YWZlOTFjMThiMTc1MWU1MTcwOGY1MmU5YmE5MzEzMmNhY2VlOTQwNzZlMzFkYjdkNzY1YmQzYTJjYjdlNjNlYTc1ZWExM2VkNmEiLCJpYXQiOjE2OTE3NTUxODksIm5iZiI6MTY5MTc1NTE4OSwiZXhwIjoxNzIzMzc3NTg5LCJzdWIiOiI0OSIsInNjb3BlcyI6W119.cyBnPOpEyTv1EEDrJruH2DBW7AU5iqkAUkzBT03vCLDXbla_YDkMjVBt7SAo5g18IfaX0XMhTSSnwa_J3GVaDTnxcN4-h_Hvy0JE6LeX0drkWR7yb2W4oapkimCLuiuBIR99fg_xzgk9jbMzeyuYQRQ_pT9ew4Zj-3fOo_gTO-D68N-8b03HZbmKUAFYdeF9p8sXTiZCFL-xOsaTwvdxHsu3os71sL34GuAs7nUaXfmy8u036EBAbHT-zP99SWM23xE4qKrSQmSa-Jl8xCwo-7Jw824jmLHPRHJyfDTzNgcSn3ZBAVK2NsA2UOYxyT1f99J_gVxepF-yJJglWBYZuVhn27ZIxtP9U0AAZEXnj2OSMAd1sa1NAvU-JS4Eezs7pAfwEv4qVrbTBs5nz2kGP3Epo3fkkKKPDzbgomAoEuQzdOdjJbL_-wrSe1DwT8Mg_OQS_tBUVV790fyNvxJxIaVKbQgDLrekdZMMYw3BjfvFbytswvL__LRuPCe3ITUSn5TBMT5zoj84d3OQFMFr5TDZ0Qj9A2pp8Z3sQPeumWwAF2QNeN0PA21P1UO4SR1j1TQspeoMsNT4MVKq4iIyEP7MGWOP0Ery0CMneBIJPkVSnx4zAnw1CoaQ24BRB4lvVBSnetIZoW38V_DBe_lAubK5j-Yl3uzqcvLDQ3VUrpo',
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          
        });

        let result = await res.json();
        console.log('result', result);
        alert('Info after Uploading Image:'+result.message); 
        
       
        
      } catch (error) {
        
        console.log('error upload', error);
      }
  setLoading(false);
};







const renderItem=(item)=>{

const filename=item.split('/').pop();

  return(
<View style={{flexDirection:'row',margin:1,alignItems:'center',gap:5}}>  


<Image 
source={{uri:item}}
style={{width:80,height:80}}
/>

<Text style={{flex:1}}>{filename}</Text>             


{/* <Ionicons.Button name='cloud-upload' onPress={()=>uploadImageToServer(item)}/>
<Ionicons.Button name='trash' onPress={()=>deleteImage(item)}/> */}



</View>
  );
};


  return (
    <SafeAreaView style={{flex:1,gap:20}}>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:50,
        }}>
      <Button title='Photo Library' onPress={()=>alert('Photo Library')}/>
      <Button title='Capture Image' onPress={()=>alert('Photo Library')}/>   


      </View>
      
      


      {/* <ScrollView>
        {images.map((img)=>(
          <Image
            key={img}
            source={{uri:img}}
            style={{
              width:300,
              height:300,
              alignSelf:'center',  
            }}
            />
        ))}

      </ScrollView> */}

      <Text style={{
        textAlign:'center',
        fontSize:20,
        fontWeight:'500'
        }}>

          My Images
        </Text>


        <FlatList
          data={images}
          renderItem={renderItem}
        />




        {loading &&(
          <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor:'rgba(0,0,0,0.4)',
              alignItems:'center',
              justifyContent:'center',
            },
          ]}
          >
             <ActivityIndicator color="#fff" animating size="large"/> 

          </View>
        )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
