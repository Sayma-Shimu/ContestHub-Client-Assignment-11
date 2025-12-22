import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Submissions = () => {
    const { id } = useParams();
    const [submissions, setSubmissions] = useState([]);
    const [contest, setContest] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        try {
            const [submissionsRes, contestRes] = await Promise.all([
                axios.get(`https://contesthub-steel.vercel.app/submissions/${id}`),
                axios.get(`https://contesthub-steel.vercel.app/approved-contests/${id}`)
            ]);
            setSubmissions(submissionsRes.data);
            setContest(contestRes.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const handleDeclareWinner = async (participant) => {
        if (contest?.winner) return;

        Swal.fire({
            title: "Declare Winner?",
            text: `Are you sure you want to make ${participant.userName} the winner?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Declare!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axios.patch(`https://contesthub-steel.vercel.app/contests/winner/${id}`, {
                        winnerName: participant.userName,
                        winnerPhoto: participant.userPhoto || "https://i.ibb.co/mR4t7rw/default-user.png"
                    });
                    if (res.data.modifiedCount > 0) {
                        toast.success(`${participant.userName} is the winner!`);
                        fetchData();
                    }
                } catch (error) {
                    toast.error("Failed to declare winner");
                }
            }
        });
    };

    if (loading) return <div className="text-center py-20"><span className="loading loading-spinner loading-lg"></span></div>;

    return (
        <div className="p-6 md:p-10 bg-base-200 min-h-screen">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-black text-gray-800 uppercase">Participants Submissions</h2>
                {contest?.winner && (
                    <div className="badge badge-success gap-2 p-4 text-white font-bold">
                        Winner: {contest.winner}
                    </div>
                )}
            </div>

            <div className="overflow-x-auto bg-white rounded-3xl shadow-sm border">
                <table className="table w-full">
                    <thead>
                        <tr className="bg-gray-100">
                            <th>#</th>
                            <th>Participant</th>
                            <th>Email</th>
                            <th>Task Info</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submissions.length > 0 ? submissions.map((sub, index) => (
                            <tr key={sub._id} className="hover:bg-gray-50">
                                <td>{index + 1}</td>
                                <td className="font-bold">{sub.userName}</td>
                                <td>{sub.userEmail}</td>
                                <td>
                                    <button 
                                        className="btn btn-xs btn-outline btn-primary"
                                        onClick={() => document.getElementById(`modal_${sub._id}`).showModal()}
                                    >
                                        View Task
                                    </button>
                                    <dialog id={`modal_${sub._id}`} className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg text-primary">Submission by {sub.userName}</h3>
                                            <p className="py-4 bg-gray-50 p-4 rounded-xl mt-2 italic text-gray-700 border">
                                                "{sub.submissions?.[0]?.submissionText || 'No task submitted yet'}"
                                            </p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    <button className="btn btn-sm">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </td>
                                <td>
                                    <button 
                                        onClick={() => handleDeclareWinner(sub)}
                                        disabled={!!contest?.winner}
                                        className={`btn btn-sm px-4 ${contest?.winner ? 'btn-disabled bg-gray-200' : 'btn-success text-white'}`}
                                    >
                                        {contest?.winner === sub.userName ? "Winner" : "Declare Winner"}
                                    </button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="5" className="text-center py-10">No submissions found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Submissions;