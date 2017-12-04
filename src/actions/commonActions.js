import url from '../url.js';


export function initRender (){
    return {
        type: 'INIT_RENDER'
    }
}

export function changeView (event){
    return {
        type: 'CHANGE_VIEW',
        payload: event
    }
}

export function navigate (event){
    return {
        type: 'NAVIGATE',
        payload: event
    }
}


export function toggleMenu (event){
    return {
        type: 'TOGGLE_MENU',
        payload: event
    }
}

export function filter(event){
    return {
        type: 'FILTER',
        payload: event
    }
}

export function changeAuthType (event){
    return {
        type: 'CHANGE_AUTH_TYPE',
        payload: event
    }
}

export function updateAuthObject(event){
    return {
        type: 'UPDATE_AUTH_OBJECT',
        payload: event
    }
}

export function handleCreateAccount(event){
    return {
        type: 'HANDLE_CREATE_ACCOUNT',
        payload: event
    }

}

export function handleSignIn(event){
    return {
        type: 'HANDLE_SIGN_IN',
        payload: event
    }
}

export function handleSignOut(event){
    return {
        type: 'HANDLE_SIGN_OUT',
        payload: event
    }
}

/********STATION ACTIONS************/

export function updateStationToAdd(event){
    return{
        type: 'UPDATE_STATION_TO_ADD',
        payload: event
    }
}

export function updateStationToChange(event){
    return{
        type: 'UPDATE_STATION_TO_CHANGE',
        payload: event
    }
}



export function addStation(username){
    return {
        type: 'ADD_STATION',
        payload: {username: username}
    }
}
export function updateStation(username){
    return {
        type: 'UPDATE_STATION',
        payload: {username: username}
    }
}


export function fetchStations(username) {
    console.log('fetching stations')

    return (dispatch) => {
        var request = new Request(url + 'user-get-stations', {
            method: 'POST',
            body: JSON.stringify({user: {username: username}}),
            mode: "cors",
            headers: new Headers({
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(function (response) {
                return response.json()
            })
            .then((data) => {
                dispatch({type: 'UPDATE_STATIONS', payload: data});
            })
            .catch(function (error) {
                console.log(error)
            })
        }
}


export function fetchOneStation(username, stationName){
    return (dispatch) => {
        var request = new Request(url + 'getStation', {
            method: 'POST',
            body: JSON.stringify({
                key: 'XM3j-KAi3-B8dL'
            }),
            mode: "cors",
            headers: new Headers({
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(function (response) {
                return response.json()
            })
            .then((data) => {
                dispatch({type: 'FOCUS_ON_STATION', payload: data});
            })
            .catch(function (error) {
                console.log(error)
            })
    };
}

export function deleteOneStation(username, stationName){
    return (dispatch) => {
        var request = new Request(url + 'user-delete-one-station', {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    username: username
                },
                station: {
                    name: stationName
                }
            }),
            mode: "cors",
            headers: new Headers({
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(function (response) {
                return response.json()
            })
            .then((data) => {
                dispatch({type: 'FOCUS_ON_STATION', payload: data});
            })
            .catch(function (error) {
                console.log(error)
            })
    };
}

/***********PLANT ACTIONS***********/

export function updatePlantToAdd(event){
    return {
        type: 'UPDATE_PLANT_TO_ADD',
        payload: event
    }
}

export function addPlant(username){
    return {
        type: 'ADD_PLANT',
        payload: {username: username}
    }
}

export function uploadImage (acceptedFile, rejectedFile) {
    return dispatch => {
        console.log('acceptedFile: ', acceptedFile);
        dispatch({type: 'UPDATE_IMAGE_PROPERTY', payload: acceptedFile});
    }
}


export function fetchPlants(username){

}


export function focusOnPlant (plantId, username, stationName){
    return (dispatch) => {
        var request = new Request(url + 'user-get-one-station', {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    username: username
                },
                station: {
                    name: stationName
                }
            }),
            mode: "cors",
            headers: new Headers({
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(function (response) {
                return response.json()
            })
            .then((data) => {
                dispatch({type: 'FOCUS_ON_PLANT', payload:{station: data, plantId: plantId}})
            })
            .catch(function (error) {
                console.log(error)
            })
    };
}

export function focusOffPlant (plantId, username){
    return {
        type: 'FOCUS_OFF_PLANT'
    }
}


export function removeOnePlant(plantName, username, stationName){
    return (dispatch) => {
        var request = new Request(url + 'user-remove-one-plant', {
            method: 'POST',
            body: JSON.stringify({
                plant: {
                    name: plantName
                },
                user: {
                    username: username
                },
                station: {
                    name: stationName
                }
            }),
            mode: "cors",
            headers: new Headers({
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(function (response) {
                return response.json()
            })
            .then((data) => {
            })
            .catch(function (error) {
                console.log(error)
            })
    };
}

export function updatePlantSettings (event) {
    console.log(event)
        return {
            type: "UPDATE_PLANT_SETTINGS",
            payload: event
        }

}



