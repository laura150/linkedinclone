import { stableSort } from 'highcharts'
import React from 'react'
import { useState, useEffect } from 'react'
import Post from '../Post/Post'
import styles from './Home.module.scss'
import InputModal from '../InputModal/InputModal'
import Leftwing from '../Leftwing/Leftwing'
import Rightwing from '../Rightwing/Rightwing'
import {db, storage} from '../../firebase'
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import {useSelector, useDispatch} from 'react-redux'
import { ref, uploadBytes } from "firebase/storage";



const Home = () => {
    const [modal, setModal] = useState(false)
    const [showimage, setshowimage] = useState('')
    const [posts, setPosts] = useState([])
    
    const {currentUser} = useSelector((state)=> state.user)
    const handleModal=()=>{
        setModal(true)
    }
   
    useEffect(() => {
        const q = query(collection(db, "posts"), orderBy("timestamp", "desc")) //this q listens for changes
        const unsubscribe = onSnapshot(q, (querySnapshot) => { //this is acallback function. anytime the q changes , the function next to it will run again and then the setpost will update the state which will then change the view
            let arr = []
          querySnapshot.forEach((doc) => {
              console.log(doc.data().description);
             arr.push(doc.data())
          });

          setPosts(arr)

            // const storageRef = ref(storage, 'some-child');
            // // 'file' comes from the Blob or File API
            // uploadBytes(storageRef, file).then((snapshot) => {
            // console.log('Uploaded a blob or file!');
            // });
        });
        
     
      return () => { //this is to make the unsubcrive function stop working when we leave the page, that is clean it up to avaoid memory leaks
        unsubscribe()
      }
  }, [])

    return (
        <div className={`${styles.mainblock} `}>
          <Leftwing/>

            <div className={`${styles.middlewing}  `}>
                <div className=''>
                    <div className={`${styles.middleblock}`} >
                        <div className='flex items-center ml-4 pt-2'>
                            <div className={styles.imgbox}>
                            {currentUser? 
                                <img src ={currentUser.photoURL} width='25'/>:
                                <img src ='/images/user.svg' width='25'/>
                             }
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
                                <p className='ml-1'>Events</p>
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
