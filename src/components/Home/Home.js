import { stableSort } from 'highcharts'
import React from 'react'
import { useState, useEffect } from 'react'
import Post from '../Post/Post'
import styles from './Home.module.scss'
import InputModal from '../InputModal/InputModal'
import Leftwing from '../Leftwing/Leftwing'
import Rightwing from '../Rightwing/Rightwing'
import {db} from '../../firebase'
import { collection, query, where, onSnapshot } from "firebase/firestore";


const Home = () => {
    const [modal, setModal] = useState(false)
    const [showimage, setshowimage] = useState('')
    const [posts, setPosts] = useState([])
    

    const handleModal=()=>{
        setModal(true)
    }
   
    useEffect(() => {
        const q = query(collection(db, "posts"), where("name", "==", "Ada"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let arr = []
          querySnapshot.forEach((doc) => {
              console.log(doc.data().description);
             arr.push(doc.data())
          });

          setPosts(arr)
        });
        
     
      return () => {
        unsubscribe()
      }
  }, [])

    return (
        <div className={`${styles.mainblock} `}>
          <Leftwing/>

            <div className={`${styles.middlewing} bg-green-500 `}>
                <div className=''>
                    <div className={`${styles.middleblock}`} >
                        <div className='flex items-center ml-4 pt-2'>
                            <div className={styles.imgbox}>
                                <img src='/images/girlie.jpg' width='50'/>
                            </div>
                            <div className = {`${styles.btn} w-4/5 rounded-full py-1 border h-14 ml-2 flex items-center pl-4 cursor-pointer `} onClick={handleModal}>Start a Post</div>
                            <InputModal modal={modal}  setModal={setModal} />
                        </div>

                        <div className="flex justify-around">
                            <div className={`${styles.box} w-20 flex justify-center items-center py-2 rounded-lg cursor-pointer mb-2 mt-2 px-4`}>
                                <img src='images/post.png' width='30' className={styles.icon}/>
                                <p className='ml-1'>Posts</p>
                            </div>
                            <div className={`${styles.box} w-20 flex justify-center items-center py-2 rounded-lg cursor-pointer mb-2 mt-2 px-4`}>
                                <img src='images/video.png' width='30' className={styles.icon}/>
                                <p className='ml-1'>Video</p>
                            </div>
                            <div className={`${styles.box} w-24 flex justify-center items-center py-2 rounded-lg cursor-pointer mb-2 mt-2 px-4`}>
                                <img src='images/post.png' width='30' className={styles.icon}/>
                                <p className='ml-1'>Events</p>
                            </div>
                            <div className={`${styles.box} w-24 flex justify-center items-center py-2 rounded-lg cursor-pointer mb-2 mt-2 px-4`}>
                                <img src='images/video.png' width='30' className={styles.icon}/>
                                <p className='ml-1'>Articles</p>
                            </div>
                        </div>
                    </div>
                
                    <div>
                    {posts.map((post)=>(
                             <Post post={post}/>
                    ))
                        
                    }
                    </div>
                   
                </div>
           </div>

          <Rightwing/>
        </div>
    )
}

export default Home
