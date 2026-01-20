import React from 'react'
import Banner from '../../components/Banner'
import ExtraSection from '../../components/ExtraSection'
import PopularContest from '../../components/PopularContest'
import Features from '../../components/Features'
import Categories from '../../components/Categories'
import Statistics from '../../components/Statistics'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularContest></PopularContest>
      <Features></Features>
      <Categories></Categories>
      <Statistics></Statistics>
      <ExtraSection></ExtraSection>
    </div>
  )
}

export default Home