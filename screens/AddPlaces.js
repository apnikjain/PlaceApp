import React, {useState} from 'react'
import {StyleSheet} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import {View, Text, TextInput, ScrollView, Button} from 'react-native'
import * as appActions from '../store/actions/places'
import ImgInput from '../components/ImgPicker'
import LocationPicker from '../components/loactionPicker'

const AddPlace = props =>{
	const [isValue, setIsValue] = useState()
	const [isValid, setIsValid] = useState(true)
	const [isImage, setIsImage] = useState()
	const textChangeHandler = (text) =>{
		
		setIsValue(text)
	}
	const dispatch = useDispatch()
	const  onSubmitHandler = () =>{
		dispatch(appActions.addPlaces(isValue, isImage))
		
			props.navigation.goBack()
		
	}
	const imageHandler = (imagePath) =>{
		setIsImage(imagePath)
	}

	return (

		<ScrollView>
			<View style = {styles.form}>
				<Text style = {styles.label}>Title</Text>
				<TextInput  style = {styles.textInput} value = {isValue} onChangeText = {textChangeHandler} />
				<ImgInput onImageTakeHandler = {imageHandler}/>
				<LocationPicker />
				<Button title = 'Save Place' onPress= {onSubmitHandler} />

			</View>
		</ScrollView>
		)
}

AddPlace.navigationOptions = (navData) =>{
	return{
		title:'Add Place'
	}
}


const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  }
});


export default AddPlace