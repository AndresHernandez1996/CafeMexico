import React from 'react'
import LogoCircle from '../../images/logo-circle.png'
const MainPage = () => {
  return (
    <div className="main-page">
      <div className="data-main">
        <img alt="logo-circle" src={LogoCircle} width="450" />
        <div className="data-div" >
          <h1>LOREM IPSUM</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an
          </p>
        </div>
      </div>
    </div>
  )
}

export default MainPage
