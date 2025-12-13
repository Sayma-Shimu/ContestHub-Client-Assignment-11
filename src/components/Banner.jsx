import React from 'react'

const Banner = () => {
  return (
    <>
      <section className="hero min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 text-white pt-20">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Unleash Your Creativity & Win Big!
            </h1>
            <p className="text-xl mb-10">
              Join exciting contests in design, writing, gaming, business ideas and more.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Search by contest type (e.g., Design, Writing...)"
                className="input input-bordered w-full text-black"
                
              />
              <button type="submit" className="btn btn-accent text-white">
                Search Contests
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner