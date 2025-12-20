import React from 'react'
import Banner from '../../components/Banner'
import ExtraSection from '../../components/ExtraSection'
import PopularContest from '../../components/PopularContest'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularContest></PopularContest>
      <ExtraSection></ExtraSection>
    </div>
  )
}

export default Home