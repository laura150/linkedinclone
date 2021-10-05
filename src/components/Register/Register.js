import React from 'react'
import styles from './Register.module.scss'
import {useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import {useHistory, Link} from 'react-router-dom'
import {registerinitiate} from '../../Redux/Actions/'

const Register = () => {

    const [state, setState] = useState({
        firstname: '',
         lastname: '',
        email: ''  , 
        password: '',
        confirmpassword: ''
    })
    const dispatch = useDispatch()

    const history = useHistory()

    const {currentUser} = useSelector((state)=> state.user) //both state here can be called anything. currentuser is being destructured 

    const {email, password, firstname, lastname, confirmpassword} = state

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(password===! confirmpassword){
            return;
        }

        dispatch(registerinitiate(email, password, firstname, lastname))
        setState({firstname:'', lastname:'',email:'', password:'', })// so after the user has inputed their details and registerd, the fields can go back to being empty
    }
    const signwithGoogle = ()=>{}

    const signwithFacebook = ()=>{}

    const handleChange = (e)=>{
        let {name, value} = e.target
        setState({...state, [name]: value})
    }

    useEffect(() => {

        if(currentUser){
            history.push('/home')
        }

    }, [currentUser, history])
    return (
       
        <div>
           <div className='flex justify-center mt-12'>
               <img src='/images/login-logo.svg' width='150' />
           </div>

           <p className='text-center sm:text-3xl text-2xl text-gray-700  mt-8'>Make the most of your professional life</p>

           <div className={`${styles.form} bg-white w-96 m-auto mt-6 px-8 py-4 `}>
                <form className='text-gray-700' onSubmit={handleSubmit}>
                    <div className=''>
                        <p className='mb-1'> First Name</p>
                        <input className=' w-full py-1 border outline-none rounded-md px-1' placeholder='' type='text' name='firstname' value={firstname} onChange={handleChange} required /> 
                    </div>

                    <div className=''>
                        <p className='mb-1'>Last name</p>
                        <input className=' w-full py-1 border outline-none rounded-md px-1 ' placeholder='' type='text' name='lastname' value={lastname} onChange={handleChange} required /> 
                    </div>

                    <div className=''>
                        <p className='mb-1'> Email/Phone Number</p>
                        <input className=' w-full py-1 border outline-none rounded-md px-1 ' placeholder='' type='email' name='email' value={email} onChange={handleChange} required /> 
                    </div>
                    <div>
                        <p className='mb-1'>Password (6 or more characters)</p>
                        <input className=' w-full py-1 border outline-none rounded-md px-1' placeholder='' type='password' name='password' value={password} onChange={handleChange} required/> 
                    </div>

                    <div>
                        <p className='mb-1'>Confirm Password</p>
                        <input className=' w-full py-1 border outline-none rounded-md px-1' placeholder='' type='password' name='confirmpassword' value={confirmpassword} onChange={handleChange} required/> 
                    </div>
                    <button className='border-2 py-2 w-56 text-center flex justify-center m-auto text-white mt-8 bg-blue-700 rounded-full ' onClick={signwithFacebook}>Register </button>
                  
                </form>

                <p className="text-center mt-2">Already have an account?</p>
                <a href='/signin'><button className='border-2 py-2 w-56 text-center flex justify-center m-auto text-white mt-4 bg-blue-700 rounded-full ' onClick={signwithFacebook}>Go to Signin </button></a>
           </div>
        </div>
    )
}

export default Register






// import Image from 'next/image';
// import Head from 'next/head';
// import React, { createRef, useState } from "react";
// import { useRouter } from 'next/router';
// import Input from '../../static-components/Input'
// import PrimaryBtn from '../../static-components/PrimaryBtn';
// import styles from './SignUpInvestor.module.scss';
// import { useDispatchAppContext } from 'react-wrappers/Context/AppContext';
// import { useDispatch } from 'react-redux';
// import { registerUser } from 'react-wrappers/Redux/actions/authAction';
// // import alertify from 'alertifyjs';


// const SignUpInvestor = () => {
//     const [values, setValues] = useState({
//         firstname: "",
//         lastname: "",
//         email: "",
//         password: ""
//     })

//     //Use Context   
//     const dispatchAppContext = useDispatchAppContext();

//     //Redux
//     const dispatch = useDispatch();

//     //Router
//     const router = useRouter();

//     //Create Ref 
//     const firstNameRef = createRef();
//     const lastnameRef = createRef();
//     const emailRef = createRef();
//     const passwordRef = createRef();
//     const buttonRef = createRef();

//     //Event
//     const handleInputChange = (target) => async (e) => {
//         setValues({ ...values, [target]: e.target.value });
//     }

//     const handleSignUp = async () => {

//         const result = await registerUser(
//             "investor", dispatch, dispatchAppContext, values, false
//         );

//         if(result) {
//             if (result.status === 201) {
//                 alertify.success(result.data.message);
    
//                 setTimeout(() => {
//                     router.push('/auth/signin')
//                 }, 3000);
//             } 
//         }
//     }

//     return (
//         <div className={`${styles.wrapper} grid md:flex px-2 xl:px-24 mt-14`}>
//             <form className="w-full justify-center">
//                 <div className="w-full mx-auto rounded-sm">
//                     <div className="flex flex-col md:flex-row">
//                         <div className="w-full md:w-1/2 md:mx-1">
//                             <Input
//                                 ref={firstNameRef}
//                                 type="text"
//                                 value={values.firstname}
//                                 className="rounded"
//                                 onEvent={handleInputChange("firstname")}
//                                 placeHolder="Enter your first name here"
//                                 label="First Name"
//                             />
//                         </div>
//                         <div className="w-full md:w-1/2 md:mx-1" >
//                             <Input
//                                 ref={lastnameRef}
//                                 type="text"
//                                 value={values.lastname}
//                                 className="rounded"
//                                 onEvent={handleInputChange("lastname")}
//                                 placeHolder="Enter your last name here"
//                                 label="Last Name"
//                             />
//                         </div>
//                     </div>
//                     <div className="flex">
//                         <div className="w-full md:mx-1">
//                             <Input
//                                 ref={emailRef}
//                                 type="text"
//                                 value={values.email}
//                                 className="rounded"
//                                 onEvent={handleInputChange("email")}
//                                 placeHolder="Enter your email address here"
//                                 label="Email"
//                             />
//                         </div>
//                     </div>
//                     <div className="flex">
//                         <div className="w-full md:mx-1">
//                             <Input
//                                 ref={passwordRef}
//                                 type="password"
//                                 value={values.password}
//                                 className="rounded"
//                                 onEvent={handleInputChange("password")}
//                                 placeHolder="Enter your password here"
//                                 label="Password"
//                             />
//                         </div>
//                     </div>
//                     <div className="btnSignUpFormBox">
//                        <PrimaryBtn ref={buttonRef} onEvent={handleSignUp} className="si_primary_btn si_btn_large sifuse_form_large mx-auto justify-center text-lg mt-10" label="Sign Up As Investor" />
//                     </div>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default SignUpInvestor;