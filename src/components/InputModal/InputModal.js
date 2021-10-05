import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import styles from './InputModal.module.scss'
import Post from '../Post/Post'
import { collection, addDoc, Timestamp } from "firebase/firestore"; 
import {db, storage} from '../../firebase'
import {useSelector, useDispatch} from 'react-redux'
// import { ref, uploadBytes, storageRef } from "firebase/storage";;


const InputModal = ({modal , setModal}) => {
    const [change , setChange] = useState(false)
    const [type , setType] = useState('')
    const [showimage, setshowimage] = useState('')
    const [videolink, setvideolink] = useState('')
    const [visible, setvisible] = useState(false)
   
    const {currentUser} = useSelector((state)=> state.user)

console.log(modal)
    const off =(e)=>{
        console.log('clicked')
        setModal(false)
    }

    const handlecancel =(e)=>{
        setModal(false)
  
    }

    const handleChange = (e)=>{
         setType(e.target.value)
    }

    const handleimage=(e)=>{
        const image = e.target.files[0]
         if(image==='' || image==='undefined'){
          alert(`Not an image, the file is a ${typeof image}`)
         }

         setshowimage(image)
      }

    //   const storageRef = ref(storage, 'plus.png');

      const handlepost = async()=>{
        setModal(false)
          console.log('clicked')
        try {
            const docRef = await addDoc(collection(db, "posts"), {
                name: 'bimbo',
                description: type,
                timestamp: Timestamp.fromDate(new Date()),
                // image: showimage,
                // video: videolink

            });
            console.log("Document written with ID: ", docRef.id);
            } catch (e) {
            console.error("Error adding document: ", e);
            }

        setType('')

        // uploadBytes(storageRef, 'plus.png').then((snapshot) => {
        //     console.log('Uploaded a blob or file!');
        // }) 
        
      }

    
    return (
        <>
       {
        modal &&  
        
        <div className={styles.back} >
           
           <div className={`${styles.actualmodal} px-4 `}>
               <div className='flex justify-between py-4 text-lg'>
                    <h2  className=''>Create a post </h2> 
                    
                    <img src='/images/cancel.png'  width='30'onClick={handlecancel} className='cursor-pointer'/>
                </div>

                <hr></hr>

                <div className='flex mt-2'>
                      <img src ='/images/user.svg' width='60' className='rounded-full' />
                </div>

                <form>
                    <textarea className={styles.textarea} placeholder='What do you wanna talk about?'  value={type} onChange={handleChange}></textarea>
                    <div>
                       <input type='file' accept='image/gif , image/jpg , image/png' name='file' id='file' style={{display: 'none'}} onChange={handleimage} />
                     {
                         showimage && <img src ={URL.createObjectURL(showimage)} className=''/>
                     }

                     <input type='text' placeholder='Put video link'  className={visible? 'block': 'hidden'}  value={videolink} onChange={(e)=> setvideolink(e.target.value)} />
                     {
                         videolink && <ReactPlayer width={"100%"} url={videolink}/>
                     }
                   </div>
                <p className='text-blue-600'>Add hashtag</p>
                </form>
        
                <div className='flex justify-between items-center'>
                    <div className=' my-2 flex w-7/12 justify-between bg-green-500 items-center'>
                    <label for='file'> <img src ='/images/image.png' width='30' height='20'/></label>
                        <img src ='/images/video.png' width='30' height='20' onClick={()=>{setvisible(!visible)}}/>
                        <img src ='/images/document.png' width='30' height='20'/>
                        <img src ='/images/celebrate.png' width='30' height='20'/>
                        <img src ='/images/poll.png' width='30' height='20'/>
                        <img src ='/images/poll.png' width='30' height='10'/>
                    </div>

                    <div className={styles.line}></div>

                    <div className='flex ml-4 items-center hover:bg-gray-300 rounded-xl px-2.5 py-0.5'>
                        <div>
                            <img src ='/images/poll.png' width='15' height='10'/>
                        </div>

                        <p className='ml-1'>Anyone</p>
                    </div>

                    <button className={ type? 'border px-4 rounded-2xl bg-blue-700 text-white py-1' : 'border px-4 rounded-2xl bg-gray-300 text-gray-500 py-1' } onClick={handlepost}>Post</button>
                </div>

                {/* {
                    posts.map((post)=>(
                        <Post post={post}/>
                    ))
                } */}
   


            </div>

            <div  className={styles.red} onClick={off} ></div>

        
        </div>
       }
       </>
    )
}

export default InputModal
