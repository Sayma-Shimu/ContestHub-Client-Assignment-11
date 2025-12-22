import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/users`);
            setAllUsers(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const handleRoleChange = async (user, newRole) => {
        if (user.role === 'admin') {
            toast.error("Admin role cannot be changed for security reasons!");
            return;
        }

        Swal.fire({
            title: "Update Role?",
            text: `Change ${user.name}'s role to ${newRole}?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes, Change it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axios.patch(`http://localhost:3000/users/role/${user._id}`, { role: newRole });
                    if (res.data.modifiedCount > 0) {
                        toast.success(`${user.name} is now a ${newRole}`);
                        fetchUsers();
                    }
                } catch (error) {
                    toast.error("Failed to update role");
                }
            }
        });
    };

    if (loading) return <div className="flex justify-center py-20"><span className="loading loading-spinner loading-lg"></span></div>;

    return (
        <div className="p-5 md:p-10 bg-base-200 min-h-screen">
            <div className="max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-black text-gray-800 uppercase">Manage Users</h2>
                    <span className="badge badge-primary font-bold">Total Users: {allUsers.length}</span>
                </div>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="bg-gray-100 uppercase">
                            <tr>
                                <th>User</th>
                                <th>Email</th>
                                <th>Current Role</th>
                                <th>Change Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers.map((user) => (
                                <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.photo} alt={user.name} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                                <div className="text-xs opacity-50">{user.role}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user.email}</td>
                                    <td>
                                        <div className={`badge font-bold py-3 px-4 ${
                                            user.role === 'admin' ? 'badge-error text-white' : 
                                            user.role === 'creator' ? 'badge-primary text-white' : 'badge-ghost'
                                        }`}>
                                            {user.role}
                                        </div>
                                    </td>
                                    <td>
                                        <select 
                                            disabled={user.role === 'admin'}
                                            defaultValue={user.role}
                                            onChange={(e) => handleRoleChange(user, e.target.value)}
                                            className={`select select-bordered select-sm w-full max-w-xs ${user.role === 'admin' ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                                        >
                                            <option value="participant">Participant</option>
                                            <option value="creator">Creator</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;