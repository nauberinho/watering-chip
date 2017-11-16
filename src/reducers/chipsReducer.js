import socket from '../socket.js'

const chipsReducer = (state = {
    chips: [],
    focusPlant: {
        name: "",
        category: "",
        description: "",
        imgUrl: "",
        slot: Number,
        __v: 0,
        _id: ""
    },
}, action) => {
    let newState = {...state};
    switch(action.type){

        case 'UPDATE_CHIPS':
            console.log(action.payload)
            newState.chips = action.payload;
            return newState;

        case 'FOCUS_ON_CHIP':
            newState.focusPlant = action.payload;
            return newState;

        case 'FOCUS_OFF_CHIP':
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

        default:
            return newState;
    }
}
export default chipsReducer;