import './Thought.css'
import React from 'react'

export default function Thought({ post }) {
    return (
        <div className='post'>
            <h1>{post.title}</h1>
            <span>by</span>&nbsp;
            <span>{post.author}</span>
            <span>{post.category}</span>
            <span>{post.time}</span>
            <p>{post.content}</p>
        </div>
    )
}
