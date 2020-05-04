import React from 'react'
import {Platform} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import AllPlaces from '../screens/AllPlaces'
import PlaceDetial from '../screens/PlaceDetial'
import AddPlaces from '../screens/AddPlaces'
import PlaceMap from '../screens/PlaceMap'
import Colors from '../constants/colors'

const PlaceNavigation = createStackNavigator({
	allPlace:AllPlaces,
	placeDetial:PlaceDetial,
	addPlaces:AddPlaces,
	placeMap:PlaceMap
},	{
	defaultNavigationOptions:{
		headerStyle:{
			backgroundColor: Platform.OS === 'android' ? Colors.primary: ''
		},
		headerTintColor:Platform.OS === 'android' ? 'white' :Colors.primary
	}
	}

)

export default createAppContainer(PlaceNavigation)