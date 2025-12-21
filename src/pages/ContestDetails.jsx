import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

const ContestDetails = () => {
  const { id } = useParams();
  const [contest, setContest] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEnded, setIsEnded] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState('');
  const navigate = useNavigate()

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

  const calculateTimeRemaining = (deadline) => {
    const deadlineDate = new Date(deadline);
    const currentDate = new Date();
    const timeDiff = deadlineDate - currentDate;

    if (timeDiff <= 0) {
      setIsEnded(true);
      return 'Contest Ended';
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  useEffect(() => {
    if (contest && !isEnded) {
      const intervalId = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining(contest.deadline));
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [contest, isEnded]);

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

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-center mb-6">
          <img src={contest.image} alt={contest.name} className="rounded-lg w-full max-w-xl" />
        </div>

        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">{contest.name}</h2>

        <div className="mb-4">
          <p className="text-lg text-gray-600">
            <strong>Description: </strong>
            {contest.description}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Task Instruction: </strong>
            {contest.taskInstruction}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Contest Type: </strong>
            {contest.contestType}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Registration Price: </strong>
            {contest.price}
          </p>
        </div>

        <div className="mb-4">
          <p className="text-xl font-semibold text-gray-800">
            Prize Money: <span className="text-green-600">${contest.prizeMoney}</span>
          </p>
        </div>

        <div className="mb-4">
          <p className="text-lg text-gray-600">
            <strong>Participants Count: </strong>
            {contest.participantsCount}
          </p>
        </div>

        <div className="mb-4">
          <p className="text-lg text-gray-600">
            <strong>Deadline: </strong>
            {isEnded ? 'Contest Ended' : timeRemaining}
          </p>
        </div>

        {contest.winner && (
          <div className="mb-4 flex items-center">
            <img src={contest.winnerPhoto} alt={contest.winner} className="rounded-full w-16 h-16 mr-4" />
            <p className="text-lg text-gray-600">
              <strong>Winner: </strong>
              {contest.winner}
            </p>
          </div>
        )}

        <div className="text-center">
          {!isEnded && (
            <button onClick={()=>navigate(`/payment/${id}`)} className="btn btn-primary w-full max-w-xs">
              Register
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContestDetails;
