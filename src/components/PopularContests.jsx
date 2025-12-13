// import React from 'react'

// const PopularContests = () => {
//   return (
//     <>
//       <section className="py-20 bg-base-200">
//               <div className="container mx-auto px-6">
//                 <h2 className="text-4xl font-bold text-center mb-12">Popular Contests</h2>
      
//                 {popularLoading ? (
//                   <div className="text-center">Loading contests...</div>
//                 ) : (
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {popularContests.map((contest) => (
//                       <div key={contest._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
//                         <figure>
//                           <img
//                             src={contest.image}
//                             alt={contest.name}
//                             className="h-56 w-full object-cover"
//                           />
//                         </figure>
//                         <div className="card-body">
//                           <h3 className="card-title">{contest.name}</h3>
//                           <p className="text-sm text-gray-600">
//                             Participants: <span className="font-bold">{contest.participants?.length || 0}</span>
//                           </p>
//                           <p>{contest.description.slice(0, 100)}...</p>
//                           <div className="card-actions mt-4">
//                             <button
                              
//                               className="btn btn-primary w-full"
//                             >
//                               View Details
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
      
//                 <div className="text-center mt-12">
//                   <Link to="/all-contests" className="btn btn-outline btn-lg">
//                     Show All Contests
//                   </Link>
//                 </div>
//               </div>
//             </section>
//     </>
//   )
// }

// export default PopularContests