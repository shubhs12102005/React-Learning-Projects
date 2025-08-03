import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashBoard = () => {
    return (
        <div style={{ display: 'flex', flexDirection:'row', gap: '30px' }}>
            <div style={{ width: '25%', height: '100vh' }}>
                <Link style={{ display: 'block' }} to={'/addStudent'}>Add Student</Link>
                <Link style={{ display: 'block' }} to={'/studentList'}>Student List</Link>
            </div>
            <div style={{ width: '75%', height: '100vh' }}>

                <Outlet />
            </div>
        </div>
    )
}

export default DashBoard