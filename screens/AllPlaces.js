import React, {useEffect} from 'react'
import {View, Text, Platform, FlatList, ScrollView} from 'react-native'
import {button} from '../components/customButtons'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {useSelector, useDispatch} from 'react-redux' 
import PlaceItem from '../components/placeItem'
import * as actions from '../store/actions/places'

const AllPlaces = props =>{

	const data = useSelector(state => state.places.places)
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(actions.fetchData())
	},[dispatch])
	return (
	<FlatList data = {data}  

		keyExtractor = {item => item.id}
		renderItem = {
			itemData =>
				<PlaceItem 
					image = {itemData.item.imagePath}
					onSelect = {() =>{
						props.navigation.navigate('placeDetial',{
							placeId: itemData.item.id,
							placeTitle:itemData.item.title
						})
					}} 
					title = {itemData.item.title} 
					address = {null} 
				/>
			}
	/>
		)
}

AllPlaces.navigationOptions = navData =>{
	return {
    headerTitle: 'All Places',
    headerRight: () =>
      <HeaderButtons HeaderButtonComponent={button}>
        <Item
          title="Add Place"
          iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
          onPress={() => {

            navData.navigation.navigate('addPlaces');
          }}
        />
      </HeaderButtons>
    
  };
}

export default AllPlaces