import React, {useState} from 'react'
import {View,Alert, Text , StyleSheet, Button,Image, ActivityIndicator} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location';

const LocationPicker = props =>{
	const [isLocation,setIsLocation] = useState()
	const [isLoading, setIsLoading] = useState(false)
	const locationHandler = async () =>{
		const {status} = await Permissions.askAsync(
			Permissions.LOCATION)

		if(status === 'granted'){
			setIsLoading(true)
			let location = await Location.getCurrentPositionAsync({})

			setIsLocation(location)
			setIsLoading(false)
			console.log(location)
		}

	}
	if(isLoading){
		return(
			<View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
				<ActivityIndicator size = 'large' color = '#fc9208'/>
			</View>
			)
	}
	return (
		<View style = {styles.screen}>
			<View style = {styles.imageP}>
				{isLocation ?null:<Text style = {{paddingTop:180}}>No location Selected </Text>}
				
			</View>
			<Button title = 'Get Users Location'  onPress = {locationHandler}/>

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

export default LocationPicker