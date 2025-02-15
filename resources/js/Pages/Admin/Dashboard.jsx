import { usePage } from '@inertiajs/react'
import React from 'react'
function Dashboard() {
    const {auth} = usePage().props
    console.log(auth, 'auth')
    return (
        <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p>Welcome, {auth.user.name}!</p>
        </div>
    )
}

export default Dashboard