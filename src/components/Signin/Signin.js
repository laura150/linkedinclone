import React from 'react'
import styles from './Signin.module.scss'
import {useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import {useHistory, Link} from 'react-router-dom'
import {signininitiate} from '../../Redux/Actions/'

const Signin = () => {
    const dispatch = useDispatch()
    const history = useHistory()
   
    const {currentUser} = useSelector((state)=> state.user)

        const [state, setState] = useState({
            email: ''  , 
            password: '',
      })
      const {email, password} = state
      const handleSubmit = (e)=>{
        e.preventDefault()

        dispatch(signininitiate(email, password,))
        setState({firstname:'', lastname:'',email:'', password:'', })
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
            <a href='/' ><div className='flex justify-center mt-12'>
                 <img src='/images/login-logo.svg' width='150' />
             </div></a>
  
             <p className='text-center text-3xl text-gray-700  mt-8'>Make the most of you're professional life</p>
  
             <div className='bg-white w-96 m-auto mt-6 px-8 py-4 '>
                  <form className='text-gray-700' onSubmit={handleSubmit}>
                      <div className=''>
                          <p className='mb-1'> Email/Phone Number</p>
                          <input className=' w-full py-1 border outline-none rounded-md ' placeholder='' type='email' name='email' value={email} onChange={handleChange} /> 
                      </div>
                      <div>
                          <p className='mb-1'>Password (6 or more characters)</p>
                          <input className=' w-full py-1 border outline-none rounded-md ' placeholder='' type='password' name='password' value={password} onChange={handleChange}/> 
                      </div>
  
                      <button className='border-2 py-2 w-56 text-center m-auto' onClick={signwithGoogle}>Sign in with google</button>
                      <button className='border-2 py-2 w-56 text-center m-auto' onClick={signwithFacebook}>Sign in with facebook</button>
                      <button className='border-2 py-2 w-56 text-center m-auto' onClick={signwithFacebook}>Sign in </button>
                      <hr/>
                  </form>

                  <p>Dont have an account?</p>
                 <a href='/register'><button>Register</button></a>
             </div>
          </div>
    )
}

export default Signin
