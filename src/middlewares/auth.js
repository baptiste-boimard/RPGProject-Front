import axios from 'axios';

// ==--IMPORT ACTION--==
import { SUBMIT_LOGIN } from '../actions/login';

/** Instance of AXIOS with options */
const instance = axios.create({
  baseURL:'',
});

const auth = (store) => (next) => (action) => {
  switch(action.type) {

    /**Submit login to API login */
    case SUBMIT_LOGIN:
      instance.post('/login', {
        email: action.email,
        password: action.password,
      })
        .then((response) => {
          //action en cas de réponse
        })
        .catch((error) => {
          //action en cas d'erreur
        });
      break;
    default:
      next(action);
  }
};

export default auth;