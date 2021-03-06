import url from '../url.js';

const mainReducer = (state = {
    view: "home",
    userMenu: "hidden",
    auth: {
        authObject: {
            username: "herokuTest",
            password: "herokuTest"
        },
        sessionUser: {
            username: "tester",
            password: "tester",
            favoritePlants: "Wild plants",
            myStations: [
                {
                    name: "corner 1",
                    plants: [
                        {
                            name: "My Rose",
                        }
                    ]
                }
            ]
        },
        signedIn: true,
        create: false,
        signIn: false
    },

}, action) => {
    let newState = {...state};
    switch(action.type){

        case 'HANDLE_SIGN_IN': // Sends state's authObject to the database and receives a response.

                newState.auth.signedIn = true;


            return newState;

        case 'HANDLE_SIGN_OUT': // Sends state's authObject to the database and receives a response.

            newState.auth.user = false;
            newState.auth.signIn = false;
            newState.userMenu = "hidden";
            return newState;

            case 'CHANGE_VIEW': //Changes website view based on the click's (event) data-id (event.target.getAttribute) which contains a message to this reducer.
            if(action.payload.target.getAttribute('data-id') === 'signIn' || action.payload.target.getAttribute('data-id') === 'create'){
                let bool = true;
                if(newState.auth[action.payload.target.getAttribute('data-id')] === true){
                    bool = false
                }
                else{
                    bool = true;
                }
                newState.auth.signIn = false;
                newState.auth.create = false;
                newState.auth[action.payload.target.getAttribute('data-id')] = bool;
                console.log('changed auth type')
            }
            if(action.payload.target.getAttribute('data-id') !== 'signIn' && action.payload.target.getAttribute('data-id') !== 'create') {
                newState = {...newState, view: action.payload.target.id};
                newState.auth.signIn = false;
                newState.auth.create = false;
            };

            return newState;



            case 'HANDLE_CREATE_ACCOUNT': // Sends state's authObject to the database, which then creates an account.
                let userToAdd = newState.auth.authObject;
                var request = new Request(url + 'system-add-user', {
                    method: 'POST',
                    body: JSON.stringify(newState.auth.authObject), //chipKey = a string with chips key
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
                        newState.sessionUser = data;
                        newState.signedIn = true;
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
                 return newState;

            case 'UPDATE_AUTH_OBJECT': // Updates state's authObject when user modifies the input fields under a sign in or create account session.
                newState.auth.authObject[action.payload.target.getAttribute('data-id')] = action.payload.target.value;
                return newState;

            default:
                return newState;
            }



}
export default mainReducer;