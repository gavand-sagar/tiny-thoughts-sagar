import React, { useState } from 'react'
import Header from '../../shared/components/Header/Header'
import RoundedButton from '../../shared/components/RoundedButton/RoundedButton'
import Thought from './Thought'

export default function Home() {
    const [categories, setCategories] = useState([
        "React",
        "Javascript",
        "HTML",
        "CSS",
        "node.js"
    ])
    return (
        <>
            <Header />
            <div className='app-container'>
                <div className='sidebar'>
                    {
                        categories.map(x => <RoundedButton>{x}</RoundedButton>)
                    }
                </div>
                <div className='main-content'>
                    <Thought post={{ title: 'Java, eh?', author: 'home simpson',content:"Java?" }}></Thought>
                    <Thought post={{ title: 'Java, eh?', author: 'home simpson',content:"Java?" }}></Thought>
                    <Thought post={{ title: 'Java, eh?', author: 'home simpson',content:"Java?" }}></Thought>
                    <Thought post={{ title: 'Java, eh?', author: 'home simpson',content:"Java?" }}></Thought>
                </div>
            </div>

        </>
    )
}
