import React from 'react'
import {useState , useEffect} from 'react'
import {db} from '../../firebase'
import styles from './Post.module.scss'
// import { collection, query, where, onSnapshot } from "firebase/firestore";




const Post = ({post}) => {
    const [input, setinput] = useState([])

    const handlesend =(e)=>{
        e.preventdefault()
    }



    return (
        <div className='bg-white rounded-md py-4 px-2  mt-4'>
            <div className='flex mb-3'>
                <img src='/images/user.svg' width='50'/>

                <div className='ml-2 text-sm'>
                    <p>{post.name}</p>
                    {/* <p>Software Developer at Heckerbella</p> */}
                </div>
            </div>

            

            <div>
                {/* <img src ='/images/sea.jpg' width='600'/> */}
                <p>{post.description}</p>
            </div>




            <div className='flex w-full justify-around mt-4'>
                <div className='flex items-center'>
                    <img src='/images/like.png' width='30' className={styles.icon}/>
                    <p className='ml-2'>Like</p>
                </div>

                <div className='flex items-center'>
                    <img src='/images/comment.png' width='30' className={styles.icon}/>
                    <p  className='ml-2'>Comment</p>
                </div>

                <div className='flex items-center'>
                    <img src='/images/share.png' width='30' className={styles.icon}/>
                    <p  className='ml-2'>Share</p>
                </div>

                <div className='flex items-center'>
                    <img src='/images/send.png' width='30' className={styles.icon}/>
                    <button className='ml-2' onClick={handlesend}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Post
