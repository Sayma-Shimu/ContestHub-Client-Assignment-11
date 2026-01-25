import React from 'react'
import Banner from '../../components/Banner'
import ExtraSection from '../../components/ExtraSection'
import PopularContest from '../../components/PopularContest'
import Features from '../../components/Features'
import Categories from '../../components/Categories'
import Statistics from '../../components/Statistics'
import HowItWorks from '../../components/HowItWorks'
import Testimonials from '../../components/Testimonials'
import BlogSection from '../../components/BlogSection'
import Newsletter from '../../components/Newsletter'
import FAQ from '../../components/FAQ'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularContest></PopularContest>
      <Features></Features>
      <Categories></Categories>
      <Statistics></Statistics>
      <Testimonials></Testimonials>
      <BlogSection></BlogSection>
      <ExtraSection></ExtraSection>
      <HowItWorks></HowItWorks>
      <Newsletter></Newsletter>
      <FAQ></FAQ>
    </div>
  )
}

export default Home