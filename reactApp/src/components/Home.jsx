import React from 'react'
import Dashboard from './Dashboard'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <nav className='bg-amber-500 p-2'>
                <ul className='flex justify-end'>
                    <li className='text-center bg-black px-2 py-1 rounded'><Link to="/student-admin">Student Admin</Link></li>
                    <li className='text-center bg-black px-2 py-1 rounded'><Link to="/login">Login</Link></li>
                </ul>
            </nav>
            <div>
                <h1>Welcome to my website</h1>
                <Outlet />
            </div>
        </div>
    )
}

export default Home
Home