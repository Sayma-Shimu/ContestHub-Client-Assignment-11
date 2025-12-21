import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import useRole from '../hooks/useRole';
import { toast } from 'react-toastify';

const Payment = () => {
    const { id } = useParams();
    const [contest, setContest] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const user = useRole();

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

    useEffect(() => {
        fetchContestData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const registrationData = {
            contestId: contest._id,
            contestName: contest.name,
            userName: user?.name,
            userEmail: user?.email,
            price: contest.prizeMoney,
            paymentStatus: "Pending",
        };

        try {
            await axios.post('http://localhost:3000/registrations', registrationData);

            // Redirect to Stripe payment page or initiate Stripe Checkout here.
            // Example: window.location.href = `/stripe-checkout?registrationId=${registrationData._id}`;
        } catch (error) {
            console.error('Error submitting registration:', error);
            alert('There was an issue submitting your registration.');
        }
    };

    if (isLoading) {
        return (
            <div className="text-center p-8">
                <span className="loading loading-spinner loading-lg"></span>
                <p>Loading contest details...</p>
            </div>
        );
    }

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
                            defaultValue={user?.name || ""}
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
                            value={`$${contest.prizeMoney}`}
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
