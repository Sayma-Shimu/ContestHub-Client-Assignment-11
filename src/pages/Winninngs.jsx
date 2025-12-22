import React, { useEffect, useState } from 'react'
import { AuthContext } from '../components/provider/AuthProvider'
import useRole from '../hooks/useRole'
import axios from 'axios'

const Winnings = () => {
  const user = useRole()
  const [conts, setConts] = useState([])

  useEffect(() => {
    const fetchConts = async () => {
      try {
        const response = await axios.get(`https://contesthub-steel.vercel.app/approved-contests`);
        const data = Array.isArray(response.data) ? response.data : response.data.contests || [];
        setConts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchConts();
  }, [])

  const myWinnings = conts?.filter(contest => user?.email === contest?.winner)

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">My Winning Contests</h1>
        
        {/* Display winning contests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myWinnings.length > 0 ? (
            myWinnings.map((contest) => (
              <div key={contest._id} className="card bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-48 object-cover" src={contest.image} alt={contest.name} />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold text-gray-800">{contest.name}</h2>
                  <p className="text-gray-600 mt-2">{contest.description}</p>
                  <div className="mt-4">
                    <p className="text-lg font-medium text-green-600">Prize Money: ${contest.prizeMoney}</p>
                    <p className="text-sm text-gray-500">Deadline: {new Date(contest.deadline).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="bg-gray-100 p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img className="w-12 h-12 rounded-full" src={contest.winnerPhoto} alt={contest.winner} />
                    <p className="font-medium text-gray-700">Winner: {contest.winner}</p>
                  </div>
                  
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-lg text-gray-500">No winnings to display</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Winnings
