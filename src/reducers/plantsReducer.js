import socket from '../socket.js'

const plantsReducer = (state = {

    plants: [],
    
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
    }

}, action) => {
    let newState = {...state};
    let plantsList;
    let self = this;
    switch(action.type){

        case 'UPDATE_PLANTS':
            console.log(action.payload)
            newState.plants = action.payload;
            return newState;

        case 'FOCUS_ON_PLANT':
            newState.focusPlant = action.payload;
            return newState;

        case 'FOCUS_OFF_PLANT':
            newState.focusPlant = {
                name: "",
                category: "",
                description: "",
                imgUrl: "",
                slot: Number,
                __v: 0,
                _id: ""
            };
            return newState;

        case 'WATER_PLANT':
            console.log(action.payload);
            return newState;

        case 'UPDATE_PLANT_TO_ADD':
            newState.plantToAdd[action.payload.target.getAttribute('data-id')] = action.payload.target.value;
            return newState;

        /*case 'ADD_PLANT':
            let plantToAdd = newState.plantToAdd;
            let username = action.payload;
            console.log(plantToAdd);
            socket.emit('user-add-plant', {username: username, plant: plantToAdd});
            socket.on('user-add-plant-confirmation', (data) => {console.log('plant added', data)});
            return newState;*/

        default:
            return newState;
        }
};

export default plantsReducer;