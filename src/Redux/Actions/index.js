 import {REGISTER_START} from '../ActionTypes'
 import {REGISTER_SUCCESS} from '../ActionTypes'
 import {REGISTER_FAIL,LOGOUT} from '../ActionTypes'
 import { auth} from '../../firebase'
 import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth'
 
 const registerstart = () =>({
    type: REGISTER_START
 })

 export const logout = () =>({
    type: LOGOUT
 })

 const registersuccess = (user) =>({
    type: REGISTER_SUCCESS,
    payload: user,

 })
 const registerfail = (error) =>({
    type: REGISTER_FAIL,
    payload: error,
 })


 export const registerinitiate = (email, password, firstname, lastname) =>{
     return function (dispatch){
         dispatch(registerstart())

         createUserWithEmailAndPassword(auth, email, password)
         .then(({user})=> {
            dispatch(registersuccess(user))
            //  updateProfile(user,{
            //     displayName: `${firstname} ${lastname}`,
            // }).then(({profile})=>{
                
            // }).catch((error)=>{
            //     dispatch(registerfail(error.message))
            // })
            
         })
         .catch((error)=>{
            dispatch(registerfail(error.message))
        })
     }
 }


 const signinstart = () =>({
    type: REGISTER_START
 })

 const signinsuccess = (user) =>({
    type: REGISTER_SUCCESS,
    payload: user,

 })
 const signinfail = (error) =>({
    type: REGISTER_FAIL,
    payload: error,
 })




 export const signininitiate = (email, password, firstname, lastname) =>{
     return function (dispatch){
         dispatch(signinstart())

         signInWithEmailAndPassword(auth, email, password)
         .then(({user})=> {
            dispatch(signinsuccess(user))
            //  updateProfile(user,{
            //     displayName: `${firstname} ${lastname}`,
            // }).then(({profile})=>{
                
            // }).catch((error)=>{
            //     dispatch(registerfail(error.message))
            // })
            
         })
         .catch((error)=>{
            dispatch(signinfail(error.message))
        })
     }
 }



//  import { LOG_USER_IN, LOG_USER_OUT } from "../types";
// import apiRequest from "helpers/axios";
// import { Storage } from "helpers/storageUtility";


// // PERSIST USER FROM LOCAL STORAGE
// export const loadUser = () => async (dispatch) => {
//       //API REQUEST HERE
//       const res = Storage.getItem("sifuse-user")

//       if(!res) {
//         dispatch({ type: LOG_USER_OUT })
//       }
      
//       await dispatch({
//         type: LOG_USER_IN,
//         payload: {
//           data: res,
//           token: res.token,
//           isFirstTimeUser: typeof window !== "undefined" ? Storage.getItem(`is-first-time-user-${res.user.email}`) : null
//         },
//       });

// };

// // INITIALIZES USER LOG IN
// export const logUserIn = async (dispatch, dispatchAppContext, body, tokenPermit) => {
//       const alertify = await import('alertifyjs')
//       alertify.set('notifier','position', 'top-center');

//       //API REQUEST HERE
//       const res = await apiRequest({ url: "login", method: "post", body }, dispatch, tokenPermit)
//       console.log(res)

//       await dispatchAppContext({ 
//         type: 'CEILING_PRELODER', 
//         payload: false
//       }) //Disable The ceilin preloder

//             //Set the startup assesment stages
//       if(res && res.status === 200) {
//         if(res.data.user.role == 'startup' && res.data.user.startup_datas.length >= 1) {

//           const stages_answers = res.data.user.startup_datas[0] 
//             ?
//               ( res.data.user.startup_datas[0].startup_assessment ? res.data.user.startup_datas[0].startup_assessment.stages_answers : null ) 
//             : 
//             null;
  
//           Storage.setItem("stages_answers", stages_answers);
  
//           dispatchAppContext({
//               type: 'STAGE_ANSWERS',
//               payload: stages_answers
//           })
  
//           delete res.data.user.startup_datas[0].startup_assessment;
  
//         }
  
//         if (typeof window !== "undefined") {
//           Storage.setItem("sifuse-user", res.data);
  
//           const getCache = Storage.getItem(`is-first-time-user-${res.data.user.email}`);
  
//           Storage.setItem(`is-first-time-user-${res.data.user.email}`, getCache === "undefined" ? true : getCache);
//         }
  
//         await dispatch({
//           type: LOG_USER_IN,
//           payload: {
//             data: res.data,
//             token: res.data.token,
//           },
//         });
    
//           return res;
//       }
// };


// export const verifyOtp = async (dispatch, dispatchAppContext, body, tokenPermit) => {

//     const alertify = await import('alertifyjs')
//     alertify.set('notifier','position', 'top-center');

//     //API REQUEST HERE
//     const res = await apiRequest({ url: "verify-account", method: "post", body }, dispatch, tokenPermit)
//     console.log(res)

//     await dispatchAppContext({ 
//       type: 'CEILING_PRELODER', 
//       payload: false
//     }) //Disable The ceilin preloder

//           //Set the startup assesment stages
//     if(res && res.status === 200) {

//         return res;
//     }
// };

// export const forgotpassword = async (dispatch, dispatchAppContext, body, tokenPermit) => {
//   const alertify = await import('alertifyjs')
//   alertify.set('notifier','position', 'top-center');

//   //API REQUEST HERE
//   const res = await apiRequest({ url: "resend-code", method: "post", body }, dispatch, tokenPermit)
//   console.log(res)

//   await dispatchAppContext({ 
//     type: 'CEILING_PRELODER', 
//     payload: false
//   }) //Disable The ceilin preloder

//         //Set the startup assesment stages
//   if(res && res.status === 200) {

//       return res;
//   }
  
// };


// // INITIALIZES USER SIGNUP
// export const registerUser = async (accountType, dispatch, dispatchAppContext, body, tokenPermit) => {
//     const alertify = await import('alertifyjs')
//     alertify.set('notifier','position', 'top-right');

//     //API REQUEST HERE
//     const res = await apiRequest({ url: `register/${accountType}`, method: "post", body }, dispatch, tokenPermit)
//     console.log(body)
    
//     await dispatchAppContext({ 
//           type: 'CEILING_PRELODER', 
//           payload: false
//     }) //Disable The ceilin preloder

//     return res;
// };



//////////////AXIOS


// import axios from "axios";
// import { Storage } from "./storageUtility";
// import { apiOrigin, version } from "./api-routes/v1";
// import { LOG_USER_OUT } from "react-wrappers/Redux/types";
// import { FindUrlPath } from "./FindUrlPath";



// export default async function apiRequest({ url, method, body }, dispatch, tokenPermit = true, persistRequest = false) {

//   let user, token; // declaring a global variable

//   if (tokenPermit) {
//     user = Storage.getItem("sifuse-user");
//     token = user ? user.token : null;
//   }

//   let headers = {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     // 'Access-Control-Allow-Origin': '*',
//   };
//   if (token) headers.Authorization = `Bearer ${token}`;

//   try {
//     const response = await axios.request({
//       url,
//       method,
//       baseURL: `${apiOrigin}${version}`,
//       data: body,
//       headers,
//       responseType: "json",
//       validateStatus: function (status_1) {
//         return status_1 >= 200 && status_1 <= 501; // default
//       },
//     });
      
//     const alertify = await import("alertifyjs");
//     alertify.set("notifier", "position", "top-center");

//     console.log(response)

//     switch (response.status) {
//       case 500:
//           console.log(persistRequest)
//           if(persistRequest) {
//             return response;
//           }
//            alertify.error("A unexpected error has occured, please refresh, check internet connection and try again or contact support.");
//           return response;
//       case 501:
//           alertify.error("Ooops something not right, please refresh and try again or contact support.");
//           return response;
//       case 401:
//           dispatch({
//             type: LOG_USER_OUT,//unauthenticated
//           });
//         return response;
//       case 422:
//           response.data.errors ? 
//           Object.entries(response.data.errors).forEach((
//             [key, value]) => alertify.error(`${key}: ${value}`)
//           ) 
//           : alertify.warning(response.data.message);//system
//         return response;
//       case 400:
//            alertify.error(response.data.message);
//            return response;
//       default:
//           return response;
       
//     }

//   } catch (error) {
//     console.log(error)
//   }
// }



