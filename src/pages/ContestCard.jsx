import { Link } from "react-router";

const ContestCard = ({ contest }) => {
  const {
    _id,
    name,
    image,
    description,
    prizeMoney,
    participantsCount,
    contestType
  } = contest;

  return (
    <div className="border rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden">
      <img
        src={image}
        alt={name}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <span className="text-sm text-gray-500">
          {contestType}
        </span>

        <h3 className="text-xl font-semibold mt-1">
          {name}
        </h3>

        <p className="text-gray-600 text-sm mt-2">
          {description.slice(0, 80)}...
        </p>

        <div className="flex justify-between mt-4 text-sm">
          <span>💰 Prize: {prizeMoney}৳</span>
          <span>👥 {participantsCount} joined</span>
        </div>

        <Link to={`/contest-details/${_id}`}>
          <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContestCard;
