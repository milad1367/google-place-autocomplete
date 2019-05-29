export const service = new window.google.maps.places.AutocompleteService();

  const geocoder = new window.google.maps.Geocoder();
  const OK = window.google.maps.GeocoderStatus.OK;

  export const setLocation = (location) => ({
    type: 'SET_LOCATION',
    location: location
  })
export const getLocation = (placeId) => (dispatch) => {

  const request = {
    placeId: placeId
  }
  

  geocoder.geocode(request,function(res){
    console.log(res);
    const location = res[0];
    dispatch(setLocation(location));

  })

}

export const requestPost = () => ({
  type: 'REQUEST_POST'
})
export const receivedPost = (_data) => ({
  type: 'RECEIVE_POST',
  data: _data
})
export const resetPredictions = () => ({
  type: 'RESET_PREDICTIONS'
})
export const getPredictions = (str) => (dispatch) => {
    if(!str.length) {
      dispatch(resetPredictions());
      return
    }
    dispatch(requestPost());
    var request = {
      input: str,
    };
  service.getPlacePredictions(request, function(data){
    dispatch(receivedPost(data))
  });

}
export const addUserSearchKey = text => ({
    type: 'ADD_USER_SEARCH_KEY',
    text
  })