import axios from 'axios';
import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../components/provider/AuthProvider';

const useRole = () => {

    const [dbUsers, setDBUsers] = useState(null)
    const {user} = use(AuthContext)


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/users`);
                setDBUsers(response.data);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserData();
    }, []);

    const loggedInUser = dbUsers?.find(u=> user?.email === u?.email)
    

    return loggedInUser
}

export default useRole