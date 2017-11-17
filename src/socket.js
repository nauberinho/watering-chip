import io from 'socket.io-client';
const socket = io('https://sigma-itc-watering.herokuapp.com');
export default socket;