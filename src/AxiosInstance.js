import axios from 'axios';
const instance=axios.create({
  baseURL:"https://burger-db8a8.firebaseio.com/"
});


export default instance;
