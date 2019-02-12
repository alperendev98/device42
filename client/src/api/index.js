import axios from 'axios';

export default
   axios.create({
      baseURL: 'http://reactify.theironnetwork.org/data/',
      timeout: 2000
   });