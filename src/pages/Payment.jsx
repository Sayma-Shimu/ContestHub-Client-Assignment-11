import React, { use, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AuthContext } from '../components/provider/AuthProvider';

const Payment = () => {
    const { id } = useParams();
    const [contest, setContest] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = use(AuthContext); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchContestData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/approved-contests/${id}`);
                setContest(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching contest details:', error);
                setIsLoading(false);
            }
        };

        fetchContestData();
    }, [id]);

    if (isLoading) {
        return (
            <div className="text-center p-8">
                <span className="loading loading-spinner loading-lg"></span>
                <p>Loading contest details...</p>
            </div>
        );
    }

    if (!contest) {
        return <div className="text-center p-8">Contest not found</div>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target); 

        const registrationData = {
            contestId: contest._id,
            contestName: contest.name,
            userName: formData.get('userName'),
            userEmail: formData.get('userEmail'),
            creatorEmail: contest?.creatorEmail,
            price: contest.prizeMoney,
            userPhoto: user?.photoURL,
            paymentStatus: "Paid",
        };

        try {
            const response = await axios.post('http://localhost:3000/registrations', registrationData);
            toast.success('Registration submitted successfully.');
            navigate(-1);
        } catch (error) {
            console.error('Error submitting registration:', error);
            toast.error('There was an issue submitting your registration.');
        }
    };

    return (
        <div className="container mx-auto p-6">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Complete Payment</h2>

                <div className="mb-6 text-center flex justify-center">
                    <div className="w-72 h-44 bg-gradient-to-r from-blue-400 to-purple-600 p-4 rounded-lg text-white">
                        <div className="text-xs mb-2">CONTEST DETAILS</div>
                        <div className="font-bold text-lg">{contest.name}</div>
                        <div className="text-sm">Prize: ${contest.prizeMoney}</div>
                    </div>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Your Name</label>
                        <input
                            type="text"
                            className="input input-bordered w-full mt-2"
                            placeholder="Enter your full name"
                            name="userName"
                            defaultValue={user?.displayName || ""}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Your Email</label>
                        <input
                            type="email"
                            className="input input-bordered w-full mt-2"
                            placeholder="Enter your email"
                            name="userEmail"
                            defaultValue={user?.email || ""}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Contest Name</label>
                        <input
                            type="text"
                            className="input input-bordered w-full mt-2"
                            value={contest.name}
                            name="contestName"
                            readOnly
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Amount to Pay</label>
                        <input
                            type="text"
                            className="input input-bordered w-full mt-2"
                            value={`$${contest.price}`}
                            name="amount"
                            readOnly
                        />
                    </div>

                    <div className="text-center mt-6">
                        <button type="submit" className="btn btn-primary w-full max-w-xs">Register & Pay Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Payment;
