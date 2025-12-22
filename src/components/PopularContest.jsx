import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import ContestCard from '../pages/ContestCard';

const PopularContest = () => {
  const [contests, setContests] = useState([])

  useEffect(() => {
    axios.get('https://contesthub-steel.vercel.app/popular-contests')
      .then(response => {
        setContests(response.data);
      })
      .catch(error => {
        console.error('Error fetching popular contests:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-6 bg-gray-200">
      <h2 className="text-2xl font-bold mb-4">Popular Contests</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {contests.map(contest => (
          <ContestCard key={contest?._id} contest={contest}></ContestCard>
        ))}
      </div>
      <div className='text-center mt-10'><Link to="/all-contests"><button className='btn btn-primary'>Show All</button></Link></div>
    </div>
  );
};

export default PopularContest;
