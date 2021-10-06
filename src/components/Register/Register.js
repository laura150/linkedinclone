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






