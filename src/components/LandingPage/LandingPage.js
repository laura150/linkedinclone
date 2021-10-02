import styles from './LandingPage.module.scss'
import {connect } from 'react-redux'
import {useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import {useHistory, Link} from 'react-router-dom'

import React from 'react'

const LandingPage = () => {
    return (
        <div>
            <div className={styles.nav}>
                <div className={styles.navimgbox} data-aos="fade-right" data-aos-duration="500">
                    <a href=''><img src='/images/login-logo.svg' alt='logo'/></a>
                </div>

                <div className={styles.left} data-aos="fade-left" data-aos-duration="800">
                    <a href='/register'><p className={styles.joinnow}>Join Now</p></a>
                    <a href='/signin'><p className={styles.signin}>Sign in</p></a>
                </div>
             </div> 

             <div className={styles.hero}>
                 <div className={styles.herotext} data-aos='zoom-in-right' data-aos-duration="1000">
                     <p className=''>Welcome to your Professional community</p>
                     <div className={`${styles.options} text-lg text-gray-700`}>
                        <a href='/home'><div className='py-4 w-56 border-4 border-blue-700  mt-8 text-center'>Search For a job</div></a>
                        <a href='/home'><div className='py-4 w-56 border-4 border-blue-700  mt-8 text-center'>Find a person you know</div></a>
                        <a href='/home'><div className='py-4 w-56 border-4 border-blue-700  mt-8 text-center'>Learn a skill</div></a>
                     </div>
                 </div>

                 <div className={styles.heroimg}  data-aos='zoom-in-left' data-aos-duration="1000">
                     <img src='/images/login-hero.svg'/>
                 </div>
             </div>
           
        </div>
    )
}


export default LandingPage

// const mapStateToProps = (state) =>{
//     return{}
// }
// const mapDispatchToProps = (dispatch) =>({})
// export default connect (mapStateToProps, mapDispatchToProps)(Login)
