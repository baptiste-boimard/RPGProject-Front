import axios from 'axios';

// ==--IMPORT ACTION--==
import { SUBMIT_LOGIN } from '../actions/login';

/** Instance of AXIOS with options */
const instance = axios.create({
  baseURL:'http://localhost:3333',
});

const auth = (store) => (next) => (action) => {
  switch(action.type) {

    /**Submit login to API login */
    case SUBMIT_LOGIN:
      console.log(action.email, action.password);

      instance.post('/login', {
        email: action.email,
        password: action.password,
      })
        .then((response) => {
          //action en cas de réponse
          console.log(response);
        })
        .catch((error) => {
          //action en cas d'erreur
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};

export default auth;