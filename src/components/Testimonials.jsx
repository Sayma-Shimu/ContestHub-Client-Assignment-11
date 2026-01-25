import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Ariful Islam",
    role: "Graphic Designer",
    image: "https://i.ibb.co/5GzXkwq/user1.jpg",
    review: "ContestHub changed my career! I won the Logo Design challenge last month and it gave me the confidence to start my own agency.",
    rating: 5
  },
  {
    id: 2,
    name: "Sara Ahmed",
    role: "Content Writer",
    image: "https://i.ibb.co/3WfS9Lz/user2.jpg",
    review: "The payment process is so smooth and secure. I love how transparent the winner declaration process is. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "David Miller",
    role: "Game Reviewer",
    image: "https://i.ibb.co/vX0v9zN/user3.jpg",
    review: "As a contest creator, I found the dashboard very intuitive. Managing submissions and picking a winner was a breeze.",
    rating: 4
  },
  {
    id: 4,
    name: "Mehedi Hasan",
    role: "App Developer",
    image: "https://i.ibb.co/2Z5Xkwq/user4.jpg",
    review: "The leaderboard system keeps me motivated. It's not just about the money; it's about the recognition in the community.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Voices of Success
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Hear from our amazing community members who have transformed their creative passion into real-world rewards.
          </p>
        </div>

        {/* Testimonial Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl h-full border border-gray-100 dark:border-gray-700 relative">
                <FaQuoteLeft className="text-blue-500/20 text-5xl absolute top-6 right-6" />
                
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white">{item.name}</h4>
                    <p className="text-sm text-blue-600 font-medium">{item.role}</p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 italic mb-4 leading-relaxed">
                  "{item.review}"
                </p>

                <div className="flex text-yellow-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;