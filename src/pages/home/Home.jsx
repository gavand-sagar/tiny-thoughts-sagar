import React from 'react'
import Header from '../../shared/components/Header/Header'
import RoundedButton from '../../shared/components/RoundedButton/RoundedButton'

export default function Home() {
    return (
        <>
            <Header />
            <div className='app-container'>
                <div className='sidebar'>
                    <RoundedButton>react</RoundedButton>
                    <RoundedButton>react</RoundedButton>
                    <RoundedButton>react</RoundedButton>
                    <RoundedButton>react</RoundedButton>
                </div>
                <div className='main-content'>

                </div>
            </div>

        </>
    )
}
