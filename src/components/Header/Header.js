import React from 'react'
import styles from './Header.module.scss'
import {FindUrlPath} from '../../helpers/FindUrlPath'
import {useSelector, useDispatch} from 'react-redux'
import {logout} from '../../Redux/Actions/index'
import {useState, useEffect} from 'react'
import {useHistory, Link} from 'react-router-dom'



const Header = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const {currentUser} = useSelector((state)=> state.user) 

    const handleLogout= (e)=>{
        dispatch(logout())
    }

    useEffect(() => {

        if(!currentUser){
            history.push('/signin')
        }


    }, [currentUser, history])

    return (
            <div className={`${styles.container}`}>
                <div className={`${styles.header}  m-auto  flex pt-2`}>
                    <div className={`${styles.leftnav} flex `}>
                        <div className={styles.imgbox}>
                            <a href ='/home'>
                                <img src='/images/home-logo.svg' className='ml-4'/>
                            </a>
                        </div>
                        

                        <div className={`${styles.searchdiv} bg-blue-100 ml-2 py-1 rounded-md px-2 w-64 flex items-center h-9`}>
                            <img src='/images/search-icon.svg'/>
                            <input className='bg-transparent outline-none border-none ml-2 ' placeholder='Search' />
                        </div>
                    </div>

                    <div className={`${styles.rightnav} flex  text-xs w-1/2 justify-evenly`}>
                            <div className=' flex  items-center flex-col text-gray-600 '>
                                <img src ='/images/nav-home.svg'/>
                                <p className={styles.headeroptions}>Home</p>
                            </div>
                            <div className={`${styles.nav} flex  items-center flex-col text-gray-600 `}>
                                <img src ='/images/nav-network.svg' className={styles.navicon}/>
                                <p className={styles.headeroptions}>My Network</p>
                            </div>
                            <div  className='flex  items-center flex-col text-gray-600'>
                                <img src ='/images/nav-jobs.svg'/>
                                <p className={styles.headeroptions}>Jobs</p>
                            </div>
                            <div  className='flex  items-center flex-col text-gray-600'>
                                <img src ='/images/nav-messaging.svg'/>
                                <p className={styles.headeroptions}>Messaging</p>
                            </div>
                            <div  className='flex  items-center flex-col text-gray-600'>
                                <img src ='/images/nav-notifications.svg'/>
                                <p className={styles.headeroptions}>Notifications</p>
                            </div>
                            <div  className={`${styles.me} flex relative  items-center flex-col text-gray-600`}>
                            {currentUser? 
                                <img src ={currentUser.photoURL} width='25'/>:
                                <img src ='/images/user.svg' width='25'/>
                                }
                                   
                                <div className='flex justify-center'>
                                    <p className={styles.headeroptions}>Me</p>
                                    {/* <img src ={currentUser.photoURL} width='20'/> */}
                                </div>

                                <div className={`${styles.signout} flex-none bg-white absolute w-20 hidden text-center top-9 py-4 px-4 rounded-md `} onClick={handleLogout}>
                                    Sign Out
                                </div>

                            </div>

                            <div  className={styles.line}></div>

                            <div  className='flex  items-center flex-col text-gray-600'>
                                <img src ='/images/nav-work.svg'/>
                                <div className='flex justify-center'>
                                    <p className={styles.headeroptions}> Work</p>
                                    <img src ='/images/down-icon.svg' width='20'/>
                                </div>
                            </div>
                            <div  className='w-20 text-center '>
                                <a href='#' className='no-underline'><p> Try Premium for Free</p></a>
                            </div>
                    </div>
                </div>
            </div>
                
    )


}



// const Content = styled.div`
// dispaly: flex;
// margin: 0 auto;
// align-items: center
// min-height; 100vw`

// const Logo = styled.span`
// margin-right: 8px;
// font-size: 0px;`

export default Header
