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
    const [selectedContest, setSelectedContest] = useState(null);

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

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedContest = {
            name: form.name.value,
            image: form.image.value,
            description: form.description.value,
            taskInstruction: form.taskInstruction.value,
            contestType: form.contestType.value,
            price: form.price.value,
            prizeMoney: form.prizeMoney.value,
            deadline: form.deadline.value,
        };

        try {
            const res = await axios.patch(`http://localhost:3000/contests/${selectedContest._id}`, updatedContest);
            if (res.data.modifiedCount > 0) {
                toast.success("Contest updated successfully");
                fetchMyContests();
                document.getElementById('edit_modal').close();
            }
        } catch (error) {
            toast.error("Update failed");
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
                        setContests(contests.filter(c => c._id !== id));
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
                        {contests.map((contest, index) => (
                            <tr key={contest._id} className="hover">
                                <td>{index + 1}</td>
                                <td>
                                    <div className="font-bold">{contest.name}</div>
                                    <div className="text-xs opacity-50">Created: {contest.createdAt}</div>
                                </td>
                                <td>{contest.contestType}</td>
                                <td>
                                    <span className={`badge font-bold py-3 px-4 ${contest.status === 'confirmed' ? 'badge-success' : contest.status === 'pending' ? 'badge-warning' : 'badge-error'}`}>
                                        {contest.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="flex gap-2">
                                        <button
                                            disabled={contest.status === 'confirmed'}
                                            onClick={() => {
                                                setSelectedContest(contest);
                                                document.getElementById('edit_modal').showModal();
                                            }}
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
                                    <Link to={`/dashboard/submissions/${contest._id}`}>
                                        <button 
                                            disabled={contest.status === 'pending'} 
                                            className="btn btn-sm btn-outline btn-primary"
                                        >
                                            See Submissions
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <dialog id="edit_modal" className="modal">
                <div className="modal-box w-11/12 max-w-2xl">
                    <h3 className="font-bold text-lg mb-4">Edit Contest</h3>
                    {selectedContest && (
                        <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">Name</label>
                                <input name="name" defaultValue={selectedContest.name} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">Image URL</label>
                                <input name="image" defaultValue={selectedContest.image} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">Contest Type</label>
                                <select name="contestType" defaultValue={selectedContest.contestType} className="select select-bordered">
                                    <option>Article Writing</option>
                                    <option>Gaming</option>
                                    <option>Photography</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">Deadline</label>
                                <input type="date" name="deadline" defaultValue={selectedContest.deadline} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">Price ($)</label>
                                <input type="number" name="price" defaultValue={selectedContest.price} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">Prize Money ($)</label>
                                <input type="number" name="prizeMoney" defaultValue={selectedContest.prizeMoney} className="input input-bordered" required />
                            </div>
                            <div className="form-control md:col-span-2">
                                <label className="label">Description</label>
                                <textarea name="description" defaultValue={selectedContest.description} className="textarea textarea-bordered" required></textarea>
                            </div>
                            <div className="form-control md:col-span-2">
                                <label className="label">Task Instruction</label>
                                <textarea name="taskInstruction" defaultValue={selectedContest.taskInstruction} className="textarea textarea-bordered" required></textarea>
                            </div>
                            <div className="modal-action md:col-span-2">
                                <button type="submit" className="btn btn-primary">Update Contest</button>
                                <button type="button" onClick={() => document.getElementById('edit_modal').close()} className="btn">Close</button>
                            </div>
                        </form>
                    )}
                </div>
            </dialog>
        </div>
    );
};

export default MyContestCreator;