import url from '../url.js';

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
        _id: "",
        img: []
    },
    stationToAdd: {
        object: {
            name: "",
            key: "",
        },
        validation: {
            name: true,
            key: true
        }
    },
    stationToChange: {},
    addPlantMessage: "",
    addStationMessage: ""
}, action) => {

    let newState = {...state};

    switch(action.type){
        case 'UPDATE_STATIONS':
            newState.stations = action.payload;
            return newState;

        case 'UPDATE_STATION_TO_ADD':
            let targetId = action.payload.target.getAttribute('data-id');
            let value =  action.payload.target.value;
            newState.stationToAdd.object[targetId] = value;
            let checkExistence = newState.stations.filter((station) => {
                return station[targetId] === value
            })
            if (checkExistence.length === 0){
                newState.stationToAdd.validation[targetId] = true;
            }

            else{
                newState.stationToAdd.validation[targetId] = false;
            }
            return newState;

        case 'ADD_STATION':

            if(newState.stationToAdd.validation.name === true  && newState.stationToAdd.validation.key === true)
            {

            var request = new Request(url + 'user-add-station', {
                method: 'POST',
                body: JSON.stringify({
                    station: newState.stationToAdd.object,
                    user: {
                        username: action.payload.username,
                        password: action.payload.password
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
                    newState.addStationMessage = 'Your station was added.'
                })
                .catch(function (error) {
                    console.log(error)
                })
            }
            return newState;

        case 'UPDATE_PLANT_TO_ADD':
            newState.plantToAdd[action.payload.target.getAttribute('data-id')] = action.payload.target.value;
            return newState;

        case 'UPDATE_STATION_TO_CHANGE':
            let dataProperty = action.payload.target.getAttribute('data-property');
            let dataId = action.payload.target.getAttribute('data-id');
            if(dataProperty){
                newState.stationToChange[dataProperty][dataId] = action.payload.target.value;
            }
            else{
                newState.stationToChange[dataProperty] = action.payload.target.value;
            }

            return newState;

        case 'FOCUS_ON_STATION':
            newState.focusStation = action.payload;
            newState.stationToChange = action.payload;
            return newState;

        case 'UPDATE_STATION':
                var request = new Request(url + 'user-update-station', {
                method: 'POST',
                body: JSON.stringify({
                    user: {
                        username: action.payload.username
                    },
                    station: newState.stationToChange
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
                    newState.addPlantMessage = 'Your plant was added.'
                })
                .catch(function (error) {
                    console.log(error)
                });

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

            let formData = new FormData();
            var request = new Request(url + 'user-add-plant-image', {
                method: 'POST',
                body: JSON.stringify(formData),
                mode: "cors",
                headers: new Headers({
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                })
            });
            fetch(request)
                .then(function (response) {

                    var request = new Request(url + 'user-add-plant', {
                        method: 'POST',
                        body: JSON.stringify({
                            user: {
                                username: action.payload.username
                            },
                            plant: newState.plantToAdd,

                            station: {
                                name: newState.focusStation.name
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
                            newState.addPlantMessage = 'Your plant was added.'
                        })
                        .catch(function (error) {
                            console.log(error)
                        })


                    return response.json()


                })



            return newState;

        case "UPDATE_IMAGE_PROPERTY":
               newState.plantToAdd.img = action.payload;

        case 'UPDATE_PLANT_SETTINGS':
            let stationToUpdate = newState.focusStation;
            let settingValue;
            if(action.payload[0]){
                settingValue = action.payload[0]
                for(var plant in stationToUpdate.plants){
                    if(stationToUpdate.plants[plant]._id === newState.focusPlant._id){
                        stationToUpdate.plants[plant].settings.water_frequency = settingValue;
                        newState.focusPlant.settings.water_frequency = settingValue;
                    }
                }
            }
            else {
                settingValue = action.payload.target.value;
                let dataIndex = action.payload.target.getAttribute('data-index');
                let dataProp = action.payload.target.getAttribute('data-prop');
                for(var plant in focusStation.plants){
                    if(focusStation.plants[plant]._id === action.payload.target.getAttribute('data-id'))   {
                        stationToUpdate.plants[dataIndex].settings[dataProp] = settingValue;

                    }
                }
            }
            newState.stationToChange = stationToUpdate;
            return newState;

        default:
            return newState;
    }
};

export default stationsReducer;