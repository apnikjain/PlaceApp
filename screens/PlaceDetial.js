import React from 'react'
import {View, Text} from 'react-native'

const PlaceDetial = props =>{
	return (
		<View>
			<Text>PlaceDetial</Text>
		</View>
		)
}

PlaceDetial.navigationOptions = (navData) =>{
	return{
		title:navData.navigation.getParam('placeTitle')
	}
}

export default PlaceDetial