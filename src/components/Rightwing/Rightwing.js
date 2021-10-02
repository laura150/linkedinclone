import React from 'react'
import styles from './Rightwing.module.scss'
import {useState} from 'react'

const Rightwing = () => {
    const [courses, setcourses] = useState([
        { 
            'id': 1,
            'title': 'Secret to better descisions',
            'author': 'Set Godin'
        },
        { 
            'id': 2,
            'title': 'What is graphic design?',
            'author': 'Amaka Chinedu'
        },
        { 
            'id': 3,
            'title': 'Agile Foundations',
            'author': 'Grace Koee'
        }
    ])
    return (
        <div>
            <div className={styles.container}>
                <p className='py-4 px-4 font-bold'>Add to your feed</p>

                <div className='flex px-4'>

                    <div className={styles.imgbox}>
                    <img src='/images/linkedinman.jpg'/>
                    </div>

                    <div className='ml-2' >
                        <p className='text-sm font-bold'>Sonny Gomehz</p>
                        <p className='text-xs my-1 text-gray-500'>Senior Java Developer at Preggs</p>
                        <button className={`${styles.btn} flex items-center justify-center rounded-full`}>
                            <img src='/images/plus-icon.svg' width='20'/>
                            <p className='ml-2 text-gray-500'>Follow</p>
                        </button>
                    </div>
                </div>

                <div className='flex px-4 pt-4'>

                    <div className={styles.imgbox}>
                    <img src='/images/linkedinman.jpg'/>
                    </div>

                    <div className='ml-2' >
                        <p className='text-sm font-bold'>Peter Smith</p>
                        <p className='text-xs my-1 text-gray-500'>Senior Java Developer at Preggs</p>
                        <button className={`${styles.btn} flex items-center justify-center rounded-full`}>
                            <img src='/images/plus-icon.svg' width='20'/>
                            <p className='ml-2 text-gray-500'>Follow</p>
                        </button>
                    </div>
                </div>

                <div className='flex px-4 pt-4'>

                    <div className={styles.imgbox}>
                    <img src='/images/linkedinman.jpg'/>
                    </div>

                    <div className='ml-2' >
                        <p className='text-sm font-bold'>Grace Bugs</p>
                        <p className='text-xs my-1 text-gray-500'>Senior Java Developer at Preggs</p>
                        <button className={`${styles.btn} flex items-center justify-center rounded-full`}>
                            <img src='/images/plus-icon.svg' width='20'/>
                            <p className='ml-2 text-gray-500'>Follow</p>
                        </button>
                    </div>
                </div>
                
                <div className='flex justify-center cursor-pointer items-center mt-4'>
                <p className='text-gray mr-2'>View all recommendation</p>
                    <img src='/images/right-icon.svg' width='20'/>
                </div>
            </div>

            <div className={styles.container2}>
                <p className='pt-6 mb-4  text-lg font-bold'>Today's top courses</p>
                <div>
                    {
                        courses.map((course)=>(
                            <div className='mb-2'>
                               <ol>
                                   <li className='text-sm  font-bold mb-0.5'>{course.title} </li>
                                   <li className='text-sm text-gray-500 '>{course.author} </li>
                               </ol>
                            </div>
                        ))
                    }
                </div>
                
                <div className='flex justify-center cursor-pointer items-center mt-4'>
                <p className='text-gray mr-2'>View all recommendation</p>
                    <img src='/images/right-icon.svg' width='20'/>
                </div>
            </div>
        </div>
    )
} 

export default Rightwing
