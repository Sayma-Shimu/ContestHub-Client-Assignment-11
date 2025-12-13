// import React from 'react'

// const WinnerAdvertisement = () => {
//   return (
//     <>
//         <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-8">Our Champions Are Winning Big!</h2>
//           <p className="text-xl mb-12">Be the next winner – thousands have already claimed amazing prizes.</p>

//           <div className="stats shadow-lg mb-12">
//             <div className="stat">
//               <div className="stat-value">1,500+</div>
//               <div className="stat-title">Total Winners</div>
//             </div>
//             <div className="stat">
//               <div className="stat-value">$75,000+</div>
//               <div className="stat-title">Prize Money Given</div>
//             </div>
//             <div className="stat">
//               <div className="stat-value">50+</div>
//               <div className="stat-title">Active Contests</div>
//             </div>
//           </div>

//           {/* Recent Winners Showcase */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {recentWinners.slice(0, 3).map((winner) => (
//               <div key={winner._id} className="card bg-base-100 text-neutral shadow-xl">
//                 <figure><img src={winner.userPhoto} alt={winner.userName} className="rounded-xl h-48 object-cover" /></figure>
//                 <div className="card-body items-center text-center">
//                   <h3 className="card-title">{winner.userName}</h3>
//                   <p>Won "{winner.contestName}"</p>
//                   <p className="text-xl font-bold text-success">${winner.prizeMoney}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default WinnerAdvertisement