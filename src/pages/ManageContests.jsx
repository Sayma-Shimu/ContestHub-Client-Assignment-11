import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const ManageContests = () => {
    const [allContests, setAllContests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchContests();
    }, []);

    const fetchContests = async () => {
        try {
            const response = await axios.get(`https://contesthub-steel.vercel.app/contests`);
            setAllContests(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const handleStatusChange = async (id, newStatus) => {
        try {
            const res = await axios.patch(`https://contesthub-steel.vercel.app/contests/status/${id}`, { status: newStatus });
            if (res.data.modifiedCount > 0) {
                toast.success(`Contest ${newStatus} successfully!`);
                fetchContests();
            }
        } catch (error) {
            toast.error("Failed to update status");
        }
    };

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This contest will be deleted permanently!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axios.delete(`https://contesthub-steel.vercel.app/contests/${id}`);
                    if (res.data.deletedCount > 0) {
                        toast.success("Contest deleted!");
                        setAllContests(allContests.filter(c => c._id !== id));
                    }
                } catch (error) {
                    toast.error("Error deleting contest");
                }
            }
        });
    };

    if (loading) return <div className="flex justify-center py-20"><span className="loading loading-spinner loading-lg"></span></div>;

    return (
        <div className="p-6 md:p-10 bg-base-200 min-h-screen">
            <div className="max-w-7xl mx-auto bg-white p-8 rounded-3xl shadow-sm">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-black text-gray-800 uppercase">Manage Contests</h2>
                    <div className="badge badge-lg badge-primary font-bold">Total: {allContests.length}</div>
                </div>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="bg-gray-50">
                            <tr className="text-gray-600">
                                <th>Contest Details</th>
                                <th>Creator</th>
                                <th>Status</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allContests.map((contest) => (
                                <tr key={contest._id} className="hover:bg-gray-50 transition-colors">
                                    <td>
                                        <div className="flex items-center gap-4">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-14 h-14">
                                                    <img src={contest.image} alt={contest.name} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-lg dark:text-black">{contest.name}</div>
                                                <div className="text-sm opacity-60 dark:text-black">{contest.contestType}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="text-sm font-semibold dark:text-black">{contest.creatorEmail}</div>
                                        <div className="text-xs opacity-50">Price: ${contest.price}</div>
                                    </td>
                                    <td>
                                        <span className={`badge font-bold py-3 px-4 ${
                                            contest.status === 'confirmed' ? 'badge-success text-white' : 
                                            contest.status === 'pending' ? 'badge-warning text-white' : 'badge-error text-white'
                                        }`}>
                                            {contest.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="flex justify-center gap-2">
                                            <button 
                                                onClick={() => handleStatusChange(contest._id, 'confirmed')}
                                                disabled={contest.status === 'confirmed' || contest.status === 'rejected'}
                                                className="btn btn-success btn-sm text-white disabled:bg-gray-200 disabled:text-gray-400"
                                            >
                                                Confirm
                                            </button>

                                            <button 
                                                onClick={() => handleStatusChange(contest._id, 'rejected')}
                                                disabled={contest.status === 'confirmed' || contest.status === 'rejected'}
                                                className="btn btn-warning btn-sm text-white disabled:bg-gray-200 disabled:text-gray-400"
                                            >
                                                Reject
                                            </button>

                                            <button 
                                                onClick={() => handleDelete(contest._id)}
                                                className="btn btn-error btn-sm text-white"
                                            >
                                                Delete
                                            </button>
                                        </div>
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

export default ManageContests;