import React from 'react'
import Header from './components/layout/Header'
import './styles/main.less'
import MainPage from './components/layout/MainPage'
import Promos from './components/layout/Promos'
import Banquets from './components/layout/Banquets'
import Media from './components/layout/Media'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <div className="cafe-mexico-layout">
      <Header />
      <MainPage />
      <Promos />
      <Banquets />
      <Media />
      <Footer />
    </div>
  )
}

export default App
