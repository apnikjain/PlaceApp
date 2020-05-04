import {ADD_PLACES, FETCH_PLACES} from '../actions/places'
import Place from '../../model/Place'

const initialState = {
	places:[]
}

export default (state = initialState, action) =>{
	switch(action.type){
			case (ADD_PLACES):
				const newPlace = new Place(action.placeData.id,action.placeData.title, action.placeData.imagePath)
				
				return {
					places:state.places.concat(newPlace)
				}
			case (FETCH_PLACES):
				return {
					places:action.placeData
				}

			default:
				return state
			}
}