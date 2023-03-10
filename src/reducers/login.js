//==--IMPORT ACTIONS--==

import { TOGGLE_LOGIN, TOGGLE_SIGNUP } from "../actions/login";

export const initialState = {
  logged: false,
  isOpenSignup: false,
  isOpenLogin: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    /** Display signup modal */
    case TOGGLE_SIGNUP: {
      return {
        ...state,
        isOpenSignup: !state.isOpenSignup,
      };
    }

    /** Display login modal */
    case TOGGLE_LOGIN: {
      return {
        ...state,
        isOpenLogin: !state.isOpenLogin,
      };
    }

    default:
      return state;
    }
};

export default reducer;