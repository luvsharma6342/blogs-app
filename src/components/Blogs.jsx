import React, { useContext } from 'react'
import Spinner from './Spinner'
import { AppContext } from '../context/AppContext'

const Blogs = () => {
    // Consume
    const { posts, loading } = useContext(AppContext);


    return (
        <div className='w-11/12 h-screen max-w-[630px] py-8 flex flex-col justify-center items-center gap-y-7 mt-16 mb-16'>
            {
                loading ?

                    (<Spinner />) :

                    (
                        posts.length === 0 ?
                            (<div>
                                <p>No post found</p>
                            </div>) :
                            (posts.map((post) => (
                                <div key={post.id}>
                                    <p className='font-bold text-lg'>{post.title}</p>
                                    <p>
                                        By <span className='italic text-[14px]'>{post.author}</span> on <a href="" className=' text-sm underline font-bold'>{post.category}</a>
                                    </p>
                                    <p className='text-[14px] mb-4'>Posted on {post.date}</p>
                                    <p>{post.content}</p>
                                    <div className='flex gap-3'>
                                        {post.tags.map((tag, index) => {
                                            return <a href='' key={index} className='text-blue-700 underline font-semibold text-[12px] mt-2'>{`#${tag}`} </a>
                                        })}
                                    </div>
                                </div>
                            )))
                    )
            }
        </div>
    )
}

export default Blogs
