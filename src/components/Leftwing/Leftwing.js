import { IconButton } from '@material-ui/core'
import { PlusOneRounded } from '@material-ui/icons'
import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import styles from './Leftwing.module.scss'

const Leftwing = () => {

    const {currentUser} = useSelector((state)=> state.user)
    return (
       
        <div className={styles.container}>
            <div className={`${styles.background} relative rounded-t-lg`}>
                <img src ='/images/card-bg.svg' className={styles.user}/>
            </div>

            <div className={`${styles.imgbox} absolute `}>
                <img src ={currentUser.photoURL} width='100' className=''/>
            </div>

            <div className='text-center mt-12'>
                <p className='font-normal'>Laura Eguda</p>
                <p className='text-xs text-gray-600 mt-1 mb-4'>Software Developer</p>
            </div>
            <hr></hr>

            <div className={styles.secondpart}>
                <div className={`${styles.first} flex items-center justify-between px-4 py-4`}>
                    <div>
                        <p className='text-gray-500 text-sm'> Connections</p>
                        <p className='text-sm font-bold'>Grow your network</p>
                    </div>

                    <div className='text-blue-600'>10</div>
                </div>

                <hr></hr>

                <div className={`${styles.second} px-4 py-4`}>
                    <p className='text-sm text-gray-500'>Aceess exclusive tools & insights</p>
                    <div className='flex items-center '>
                        <div className={styles.goldbox}></div>
                        <p className='text-sm font-bold ml-2'>Try Premium for free</p>
                    </div>
                </div>

                <hr></hr>

                <div className={`${styles.last} flex py-4 px-4 rounded-b-lg`}>
                    <img src ='/images/item-icon.svg' width='20'/>
                    <p className='font-bold text-sm pl-2'>My Items</p>
                </div>
           

                <div className={styles.container2}>
                    <div className='py-4 px-4 flex items-center justify-between'>
                        <div>
                            <p className='text-sm text-blue-500 font-bold'>Groups</p>
                            <p className='text-sm text-blue-500 font-bold'>Events</p>
                            <p className='text-sm text-blue-500 font-bold'>Followd Hastags</p>
                        </div>
                        <IconButton>
                            <img src='/images/plus.png' width='20' className='cursor-pointer'/>
                        </IconButton>
                    </div>
                    <hr></hr>
                    <p className='text-gray-500 py-4 text-center px-2'>Discover More</p>
                </div>
            </div>
        </div>
    )
}

export default Leftwing
