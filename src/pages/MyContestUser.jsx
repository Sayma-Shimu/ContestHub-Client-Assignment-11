import React, { useEffect, useState } from 'react'
import useRole from '../hooks/useRole'
import axios from 'axios'
import { useNavigate } from 'react-router'

const MyContestUser = () => {
    const user = useRole()
    const [regs, setRegs] = useState([])
    const [conts, setConts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchRegs = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/registrations`);
                const data = Array.isArray(response.data) ? response.data : response.data.registrations || [];
                setRegs(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchRegs();
    }, [])

    useEffect(() => {
        const fetchConts = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/approved-contests`);
                const data = Array.isArray(response.data) ? response.data : response.data.contests || [];
                setConts(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchConts();
    }, [])

    const myParticipatedData = regs
        .filter(r => r?.userEmail?.toLowerCase() === user?.email?.toLowerCase())
        .map(registration => {
            const contestDetails = conts.find(c => c._id?.toString() === registration.contestId?.toString());
            return {
                ...registration,
                contestDetails
            };
        })
        .filter(item => item.contestDetails) 
        .sort((a, b) => new Date(a.contestDetails.deadline) - new Date(b.contestDetails.deadline));

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">My Participated Contests</h2>
                    <p className="text-gray-600 mt-1">List of all contests you have paid for and joined.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {myParticipatedData.length > 0 ? (
                        myParticipatedData.map((item) => (
                            <div key={item._id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col transition-transform hover:scale-[1.02]">
                                <div className="relative">
                                    <img 
                                        src={item.contestDetails.image} 
                                        alt={item.contestDetails.name} 
                                        className="w-full h-48 object-cover" 
                                    />
                                    <div className="absolute top-3 right-3">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
                                            item.paymentStatus === 'Paid' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                                        }`}>
                                            {item.paymentStatus}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-5 flex-grow flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-xl text-gray-800 leading-tight">
                                            {item.contestDetails.name}
                                        </h3>
                                    </div>
                                    
                                    <p className="text-blue-600 text-sm font-medium mb-3">
                                        {item.contestDetails.contestType}
                                    </p>

                                    <div className="space-y-3 mt-auto">
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                            <div>
                                                <p className="text-[10px] uppercase text-gray-400 font-bold">Prize Pool</p>
                                                <p className="text-lg font-black text-gray-900">${item.contestDetails.prizeMoney}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[10px] uppercase text-gray-400 font-bold">Deadline</p>
                                                <p className="text-sm font-bold text-red-500">{item.contestDetails.deadline}</p>
                                            </div>
                                        </div>

                                        <button onClick={()=>navigate(`/contest-details/${item.contestDetails._id}`)} className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-colors shadow-lg shadow-indigo-100">
                                            Submit Entry
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center bg-white rounded-3xl border-2 border-dashed border-gray-200">
                            <div className="text-5xl mb-4">🏆</div>
                            <p className="text-xl font-semibold text-gray-600">No Participated Contests Yet</p>
                            <p className="text-gray-400 mt-2">Browse the marketplace to find and join exciting contests!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MyContestUser