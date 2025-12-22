import React, { use, useEffect, useRef, useState } from 'react';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, LineController, Filler } from 'chart.js';
import useRole from '../hooks/useRole';
import { AuthContext } from '../components/provider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, LineController, Filler);

const MyProfile = () => {
    const user = useRole();
    const { updateUser } = use(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (!user || user?.role !== 'participant' || !chartRef.current) return;

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const totalParticipated = user?.Participated || 0;
        const totalWins = user?.wins || 0;
        const winRate = totalParticipated > 0 ? (totalWins / totalParticipated) * 100 : 0;

        chartInstance.current = new ChartJS(chartRef.current, {
            type: 'line',
            data: {
                labels: ['Start', 'Win Rate'],
                datasets: [{
                    label: 'Win Percentage (%)',
                    data: [0, winRate],
                    borderColor: '#4caf50',
                    backgroundColor: 'rgba(76, 175, 80, 0.2)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });

        return () => {
            if (chartInstance.current) chartInstance.current.destroy();
        };
    }, [user]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedData = {
            name: formData.get('name'),
            photo: formData.get('photo'),
            bio: formData.get('bio'),
            address: formData.get('address')
        };

        try {
            await updateUser(updatedData.name, updatedData.photo);
            const response = await axios.patch(`http://localhost:3000/users/${user.email}`, updatedData);

            if (response.data.modifiedCount > 0 || response.data.matchedCount > 0) {
                toast.success("Profile updated successfully!");
                setIsEditing(false);
                window.location.reload();
            }
        } catch (error) {
            toast.error("Could not update profile");
        }
    };

    if (!user) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <div className="flex flex-col md:flex-row items-center md:space-x-8">
                        <img
                            className="w-40 h-40 rounded-3xl border-4 border-indigo-50 object-cover shadow-inner"
                            src={user?.photo || 'https://via.placeholder.com/150'}
                            alt={user?.name}
                        />
                        <div className="text-center md:text-left mt-6 md:mt-0 flex-1">
                            <h2 className="text-3xl font-black text-gray-800">{user?.name}</h2>
                            <p className="text-indigo-600 font-medium">{user?.email}</p>
                            <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-2">
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase">{user?.role}</span>
                                {user?.address && <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase">📍 {user?.address}</span>}
                            </div>
                            {user?.role === 'participant' && (
                                <div className="mt-3 flex justify-center md:justify-start gap-4 text-sm font-bold text-gray-600">
                                    <span>Participated: {user?.Participated || 0}</span>
                                    <span>Wins: {user?.wins || 0}</span>
                                </div>
                            )}

                            {!isEditing && <button onClick={() => setIsEditing(true)} className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition">Edit Profile</button>}
                        </div>
                    </div>

                    {isEditing ? (
                        <form onSubmit={handleUpdate} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <div className="md:col-span-1">
                                <label className="block text-xs font-bold text-gray-500 uppercase ml-1 mb-1">Full Name</label>
                                <input name="name" defaultValue={user?.name} className="w-full border-0 bg-white rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-indigo-500" required />
                            </div>
                            <div className="md:col-span-1">
                                <label className="block text-xs font-bold text-gray-500 uppercase ml-1 mb-1">Photo URL</label>
                                <input name="photo" defaultValue={user?.photo} className="w-full border-0 bg-white rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-indigo-500" required />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-xs font-bold text-gray-500 uppercase ml-1 mb-1">Address</label>
                                <input name="address" defaultValue={user?.address} placeholder="City, Country" className="w-full border-0 bg-white rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-indigo-500" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-xs font-bold text-gray-500 uppercase ml-1 mb-1">Bio</label>
                                <textarea name="bio" defaultValue={user?.bio} placeholder="Tell us about yourself..." className="w-full border-0 bg-white rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-indigo-500 h-24" />
                            </div>
                            <div className="md:col-span-2 flex space-x-3">
                                <button type="submit" className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100">Save Profile</button>
                                <button type="button" onClick={() => setIsEditing(false)} className="px-8 py-3 bg-white text-gray-600 rounded-xl font-bold border border-gray-200 hover:bg-gray-100 transition">Cancel</button>
                            </div>
                        </form>
                    ) : (
                        <div className="mt-8 space-y-6">
                            <div className="p-6 bg-indigo-50 rounded-2xl">
                                <h3 className="text-sm font-bold text-indigo-900 uppercase tracking-widest mb-2">Biography</h3>
                                <p className="text-indigo-800 leading-relaxed">{user?.bio || "No bio added yet. Click edit to tell the world about your skills!"}</p>
                            </div>
                            {user?.role === 'participant' && (
                                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Win Rate Performance</h3>
                                    <div className="h-64 w-full"><canvas ref={chartRef}></canvas></div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyProfile;