export const ADD_PLACES = 'ADD_PLACES'
export const FETCH_PLACES = 'FETCH_PLACES'

import Place from '../../model/Place'


export const addPlaces = (title, imagePath) =>{
	return async dispatch =>{
		const response = await fetch('https://places-app-bac47.firebaseio.com/places.json',{
			method :'POST',
			headers:{
				'Content-Type':'application/json'

			},
			body:JSON.stringify({
				title,
				imagePath
			})
		})
		const resData = await response.json()

	dispatch({ type :ADD_PLACES, placeData:{id: resData.name,title:title, imagePath:imagePath}})
	}
}

export const fetchData = () =>{
	return async dispatch =>{
		const response = await fetch('https://places-app-bac47.firebaseio.com/places.json')
		const resData = await response.json()
		const loadedData = []
		for (const key in resData){
			loadedData.push(new Place(key,resData[key].title,resData[key].imagePath))
		}
		
	dispatch({ type :FETCH_PLACES, placeData:loadedData
	})
}
}