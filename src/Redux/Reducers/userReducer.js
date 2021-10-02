import {REGISTER_START} from '../ActionTypes'
 import {REGISTER_SUCCESS} from '../ActionTypes'
 import {REGISTER_FAIL} from '../ActionTypes'
 import {SIGNIN_FAIL, SIGNIN_START, SIGNIN_SUCCESS, LOGOUT} from '../ActionTypes'

const INITIAL_STATE = {
    loading : false,
    currentUser : null,
    error: false
}


const userReducer = (state=INITIAL_STATE, action) => {
  switch(action.type){
    case  REGISTER_START :
    return{
      ...state, 
      loading: true
    }
    case  REGISTER_SUCCESS :
    return{
      ...state, 
      loading: false,
      currentUser: action.payload
    }
    case  REGISTER_FAIL :
    return{
      ...state, 
     error: action.payload
    }


    case  SIGNIN_START :
    return{
      ...state, 
      loading: true
    }
    case  SIGNIN_SUCCESS :
    return{
      ...state, 
      loading: false,
      currentUser: action.payload
    }
    case  SIGNIN_FAIL :
    return{
      ...state, 
     error: action.payload
    }

    case  LOGOUT :
    return{
      ...state, 
      loading: false,
      currentUser: null,
    }
      default:
      return state

  }
}

export default userReducer







// import { LOG_USER_IN, LOG_USER_OUT, CACHE_USER } from "../types";
// import { Storage } from "helpers/storageUtility";

// // INITIAL AUTH STATE

// const currentUserData = typeof window !== "undefined" ? Storage.getItem("sifuse-user") : null;
// const isFirstTimeUser = (typeof window !== "undefined" && currentUserData) ? Storage.getItem(`is-first-time-user-${currentUserData.user.email}`) : null;
// const initialAuthState = {
//   user: currentUserData ? currentUserData.user : null,
//   isFirstTimeUser: isFirstTimeUser,
//   token: null,
//   isLoggedIn: false,
// };

//   // AUTH REDUCER
//   const authReducer = (state = initialAuthState, { type, payload }) => {
    
//     switch (type) {

//       case LOG_USER_IN:

//         return {
//           ...state,
//           user: payload.data.user,
//           token: payload.token,
//           isLoggedIn: !!payload.token,
//           isFirstTimeUser: payload.isFirstTimeUser    
//       };

//       case LOG_USER_OUT:
        
//         if (typeof window !== "undefined") {
//             console.clear();
//             Storage.removeItem("sifuse-user");
//             Storage.removeItem("stages_answers");
//             Storage.removeItem("current_stage_page");
//             Storage.removeItem("levelWidth");
//             location.replace('/auth/signin')
//         }

//         return {
//           ...state,
//           user: null,
//           token: null,
//           isLoggedIn: false,
//         };

//       case CACHE_USER:

//         if (typeof window !== "undefined") {
//             Storage.setItem(`is-first-time-user-${state.user.email}`, payload);
//         }

//         return {
//           ...state,
//           isFirstTimeUser: false,
//         };

//       default:
//         return state;
//     }
//   };

//   export default authReducer;
