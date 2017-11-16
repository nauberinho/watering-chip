import socket from '../socket.js'
const authenticatedReducer = (state = {
    view: "myplants",
    userMenu: "hidden"

}, action) => {
    let newState = {...state};
    switch (action.type) {
        case 'NAVIGATE': // Sends state's authObject to the database and receives a response.
            newState.view = action.payload.target.id;
            newState.userMenu = "hidden";
            return newState;

        case 'TOGGLE_MENU':

            if (action.payload.target.getAttribute('data-id') === "toggleUserMenu") {

                if (newState.userMenu === "visible") {
                    newState.userMenu = "hidden"

                }

                else {
                    newState.userMenu = "visible"
                }

            }
            return newState;


        default:
            return newState;
    }

};
export default authenticatedReducer;