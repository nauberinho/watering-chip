import socket from '../socket.js'

const stationsReducer = (state = {

    stations: [{
            name: '', plants: []
            }],
    focusStation: {
        name: "",
        key: "",
        plants:[]
    },
    focusPlant: {
        name: "",
        category: "",
        description: "",
        imgUrl: "",
        slot: Number,
        __v: 0,
        _id: ""
    },
    plantToAdd: {
        name: "",
        category: "",
        description: "",
        imgUrl: "",
        slot: Number,
        __v: 0,
        _id: ""
    },
    stationToAdd: {
        name: "",
        key: ""
    },
    addPlantMessage: "",
    addStationMessage: ""

}, action) => {

    let newState = {...state};

    switch(action.type){
        case 'UPDATE_STATIONS':
            console.log(action.payload)
            newState.stations = action.payload;
            return newState;

        case 'UPDATE_STATION_TO_ADD':
            newState.stationToAdd[action.payload.target.getAttribute('data-id')] = action.payload.target.value;
            return newState;

        case 'ADD_STATION':
            socket.emit('user-add-station',
                (
                    {
                        station: newState.stationToAdd,
                        user: {
                            username: action.payload.username,
                            password: action.payload.password
                        }
                    }
                )
            );
            socket.on('user-add-station-confirmation', function(data){
                newState.addStationMessage = 'Your station was added.'
            });
            return newState;

        case 'UPDATE_PLANT_TO_ADD':
            newState.plantToAdd[action.payload.target.getAttribute('data-id')] = action.payload.target.value;
            return newState;

        case 'FOCUS_ON_STATION':
            newState.focusStation = action.payload;
            return newState;

        case 'FOCUS_OFF_STATION':
            newState.focusStation = {
                name: "",
                key: "",
                plants: []
            };
            return newState;

        case 'FOCUS_ON_PLANT':
            let plantToFocusOn;
            let focusStation = action.payload.station;
            newState.focusStation = action.payload.station;
            for(var plant in focusStation.plants){
                if(focusStation.plants[plant]._id === action.payload.plantId){
                    newState.focusPlant = focusStation.plants[plant];
                }
            }
            return newState;

        case 'ADD_PLANT':
            socket.emit('user-add-plant',
                    (
                        {
                            user: {
                                username: action.payload.username
                            },
                            plant: newState.plantToAdd,

                            station: {
                                name: newState.focusStation.name
                            }

                        }
                    )
            );
            socket.on('user-add-plant-confirmation', function(data){
                newState.addPlantMessage = 'Your plant was added.'
            });
            return newState;

        default:
            return newState;
    }
};

export default stationsReducer;