import React from 'react'

const ExtraSection = () => {
  return (
    <>
        <section className="py-20 bg-base-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Why ContestHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-semibold">Real Prizes</h3>
              <p>Cash rewards and exciting prizes for every winner</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-2xl font-semibold">Global Community</h3>
              <p>Compete with talented people from around the world</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-2xl font-semibold">Fair & Secure</h3>
              <p>Transparent judging and secure payments</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ExtraSection