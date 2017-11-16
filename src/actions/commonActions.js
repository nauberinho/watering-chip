import socket from '../socket.js'

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

export function handleCreateAccount(event){

    return {
        type: 'HANDLE_CREATE_ACCOUNT',
        payload: event
    }

}

export function updatePlantToAdd(event){
    return {
        type: 'UPDATE_PLANT_TO_ADD',
        payload: event
    }
}

export function updateStationToAdd(event){
    return{
        type: 'UPDATE_STATION_TO_ADD',
        payload: event
    }
}

export function fetchStations(username){

    socket.emit('user-get-stations', ({user:{username: username}}));
    return (dispatch) => {
        socket.on('user-get-stations-confirmation', function(data){
            dispatch({type: 'UPDATE_STATIONS', payload: data})
        })
    }
}

export function fetchOneStation(username, stationName){
    socket.emit('user-get-one-station', (
        {
            user: {
                username: username
             },
            station: {
                name: stationName
            }
        }
        )
    );
    return (dispatch) => {
        socket.on('user-get-one-station-confirmation', function(data){
            dispatch({type: 'FOCUS_ON_STATION', payload: data})
        })
    }
}

export function addPlant(username){

    return {
        type: 'ADD_PLANT',
        payload: {username: username}
    }
}

export function addStation(username){

    return {
        type: 'ADD_STATION',
        payload: {username: username}
    }
}

export function fetchPlants(username){
    socket.emit('user-get-plants', ({username: username}));
    return (dispatch) => {
        socket.on('user-get-plants-confirmation', function(data){
            dispatch({type: 'UPDATE_PLANTS', payload: data})
        })

    }
}

export function water(plantId){
    socket.emit('user-water-plant', (
            {
                plant: {
                    id: plantId
                }
            }
        )
    );
    return (dispatch) => {
        socket.on('user-water-plant-confirmation', function(data){
            dispatch({type: 'WATER_PLANT', payload: data.plants})
        })

    }
}



export function focusOnPlant (plantId, username, stationName){
    socket.emit('user-get-one-station', (
            {
                user: {
                    username: username
                },
                station: {
                    name: stationName
                }
            }
        )
    );
    return (dispatch) => {
        socket.on('user-get-one-station-confirmation', function(data){
            dispatch({type: 'FOCUS_ON_PLANT', payload:{station: data, plantId: plantId}})
        })
    }
}

export function focusOffPlant (plantId, username){
    return {
        type: 'FOCUS_OFF_PLANT'
    }
}


export function removeOnePlant(plantName, username, stationName){
    socket.emit('user-remove-one-plant', (
            {
                plant: {
                    name: plantName
                },
                user: {
                    username: username
                },
                station: {
                    name: stationName
                }
            }
        )
    );
    return (dispatch) => {
        socket.on('user-remove-one-plant-confirmation', function(data){
            dispatch({type: 'FOCUS_ON_STATION', payload: data})
        })

    }
}

