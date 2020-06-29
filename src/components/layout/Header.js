import React from 'react'
import { Menu } from 'antd'
import { FacebookFilled, InstagramFilled, TwitterOutlined } from '@ant-design/icons'
import LogoFlat from '../../images/logo-header.png'

const Header = () => {
  return (
    <div className="cafe-navbar">
      <Menu mode="horizontal">
        <Menu.Item key="logo" disabled>
          <img alt="ok" src={LogoFlat} width="160" />
        </Menu.Item>
        <Menu.Item className="header-padding" key="promos">
          PROMOCIONES
        </Menu.Item>
        <Menu.Item className="header-padding" key="contact">
          CONTACTO
        </Menu.Item>
        <Menu.Item className="header-padding" key="banquets">
          BANQUETES
        </Menu.Item>
        <Menu.Item className="header-padding" key="about">
          ACERCA DE NOSOTROS
        </Menu.Item>
      </Menu>
      <div className="cafe-icons">
        <FacebookFilled
          onClick={() => console.log('Hola')}
          style={{ fontSize: '26px', color: '#a45319' }}
        />
        <InstagramFilled
          onClick={() => console.log('Hola')}
          style={{ fontSize: '26px', color: '#a45319' }}
        />
        <TwitterOutlined
          onClick={() => console.log('Hola')}
          style={{ fontSize: '26px', color: '#a45319' }}
        />
      </div>
    </div>
  )
}
export default Header
