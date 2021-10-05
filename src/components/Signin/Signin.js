import React from 'react'
import styles from './Signin.module.scss'
import {useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import {useHistory, Link} from 'react-router-dom'
import {signininitiate, facebooksignin, googlesignin } from '../../Redux/Actions/'

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

      const signwithGoogle = (e)=>{
        dispatch(googlesignin())
      }

      const signwithFacebook = (e)=>{
        dispatch(facebooksignin())
      }


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
  
             <p className='text-center sm:text-3xl text-2xl  text-gray-700  mt-8'>Make the most of you're professional life</p>
  
             <div className={`${styles.form} bg-white w-96 m-auto mt-6 px-8 py-4`}>
                  <form className='text-gray-700' onSubmit={handleSubmit}>
                      <div className=''>
                          <p className='my-1  text-sm '> Email/Phone Number</p>
                          <input className=' w-full py-1 border outline-none rounded-md px-1 ' placeholder='' type='email' name='email' value={email} onChange={handleChange} /> 
                      </div>
                      <div>
                          <p className='my-1 text-sm  mt-4'>Password (6 or more characters)</p>
                          <input className=' w-full py-1 border outline-none rounded-md px-1' placeholder='' type='password' name='password' value={password} onChange={handleChange}/> 
                      </div>
  
                      
                      <button className='border-2 py-2 w-56 text-center flex justify-center mb-4 m-auto text-white mt-4 bg-blue-700 rounded-full'>Sign in </button>
            
                  </form>
                  <hr/>
                  
                    <button className='border-2 py-2 w-56 text-center m-auto flex mt-4 justify-center rounded-full mb-4' onClick={signwithGoogle}>
                        <img src='/images/google.svg' className='mr-2'/>
                        Sign in with google
                    </button>
                  
                      {/* <button className='border-2 py-2 w-56 text-center m-auto' onClick={signwithFacebook}>Sign in with facebook</button> */}

                  <p className='text-center mt-2'>Dont have an account?</p>
                 <a href='/register'><button className='border-2 py-2 w-56 text-center flex justify-center m-auto text-white mt-4 bg-blue-700 rounded-full '>Register</button></a>
             </div>
          </div>
    )
}

export default Signin
