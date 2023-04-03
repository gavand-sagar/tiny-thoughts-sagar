import { Link } from 'react-router-dom'
import './header.css'
import React from 'react'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

export default function Header() {
    return (
        <div className='app-header'>
            <div className='app-title'>
                <h2>
                    {process.env.REACT_APP_TITLE}
                </h2>
            </div>
            <div className="app-nav">
                <Link to={'/home'}>
                    <PrimaryButton>Home</PrimaryButton>
                </Link>
                <Link to={'/new-post'}>
                    <PrimaryButton>New Post</PrimaryButton>
                </Link>
            </div>
            <div className="app-account">
                <Link to={'/sign-up'}>
                    <PrimaryButton>SignUp</PrimaryButton>
                </Link>
                <Link to={'/login'}>
                    <PrimaryButton>Login</PrimaryButton>
                </Link>
            </div>

        </div>
    )
}
