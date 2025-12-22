import React, { useEffect, useState } from 'react';
import useRole from '../hooks/useRole';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyContestCreator = () => {
    const user = useRole();
    const [contests, setContests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetchMyContests();
        }
    }, [user]);

    const fetchMyContests = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/contests/creator/${user?.email}`);
            setContests(res.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axios.delete(`http://localhost:3000/contests/${id}`);
                    if (res.data.deletedCount > 0) {
                        toast.success("Contest deleted successfully");
                        const remaining = contests.filter(c => c._id !== id);
                        setContests(remaining);
                    }
                } catch (error) {
                    toast.error("Failed to delete contest");
                }
            }
        });
    };

    if (loading) return <div className="text-center py-20 font-bold">Loading...</div>;

    return (
        <div className="p-10 bg-base-200 min-h-screen">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">My Created Contests</h2>
            
            <div className="overflow-x-auto bg-base-100 rounded-2xl shadow-xl">
                <table className="table w-full">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th>#</th>
                            <th>Contest Name</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Actions</th>
                            <th>Submissions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contests.length > 0 ? contests.map((contest, index) => (
                            <tr key={contest._id} className="hover">
                                <td>{index + 1}</td>
                                <td>
                                    <div className="font-bold">{contest.name}</div>
                                    <div className="text-xs opacity-50">Created: {contest.createdAt}</div>
                                </td>
                                <td>{contest.contestType}</td>
                                <td>
                                    <span className={`badge font-bold py-3 px-4 ${
                                        contest.status === 'confirmed' ? 'badge-success' : 
                                        contest.status === 'pending' ? 'badge-warning' : 'badge-error'
                                    }`}>
                                        {contest.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="flex gap-2">
                                        <button 
                                            disabled={contest.status === 'confirmed'}
                                            className="btn btn-sm btn-info text-white"
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            onClick={() => handleDelete(contest._id)}
                                            disabled={contest.status === 'confirmed'}
                                            className="btn btn-sm btn-error text-white"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <Link to={`/submissions/${contest._id}`}>
                                        <button className="btn btn-sm btn-outline btn-primary">See Submissions</button>
                                    </Link>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="6" className="text-center py-10 font-medium">No contests created yet.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyContestCreator;