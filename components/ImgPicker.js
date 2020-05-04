import React, {useState} from 'react'
import {View,Alert, Text , StyleSheet, Button,Image} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

const ImgInput = props =>{
	const [IsImage, setIsImage] = useState()
	const imageHandler = async () =>{
		const {status} = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL)
		if(status === 'granted'){
		const imageDetials  = await ImagePicker.launchCameraAsync({
			allowsEditing:true,
			aspect:[16,9],
			quality:0.5
		})
		setIsImage(imageDetials.uri)
		props.onImageTakeHandler(imageDetials.uri)
		}
		else{
			Alert.alert('Error', "Hey! You might want to give permissions for my app, they are good",[{
				text:'okay'
			}])
		}
	}

	return (
		<View style = {styles.screen}>
			<View style = {styles.imageP}>
				{IsImage ?null:<Text style = {{paddingTop:180}}>No image Selected </Text>}
				<Image  source = {{uri:IsImage}} style = {styles.image}/>
			</View>
			<Button title = 'Take Image'  onPress = {imageHandler}/>

		</View>
		)
}

const styles = StyleSheet.create({
	screen :{
		alignItems:'center'
	},
	imageP:{
		width:'100%',
		height:200,
		marginBottom:10,
		justifyContent:'center',
		borderColor:'#ccc',
		borderWidth:1,
		alignItems:'center'
	},
	image:{
		height:'100%',
		width:'100%'
	}
})

export default ImgInput