import React from 'react'
import { Row, Divider } from 'antd'
import Media1 from '../../images/media1.jpg'
import Media2 from '../../images/media2.jpg'
import Media3 from '../../images/media3.jpg'

const Media = () => {
  return (
    <div className="media-page">
      <Divider className="media-title">
        <h1>CONÓCENOS</h1>
      </Divider>
      <Row>
        <img className="media-img" alt="meadia-1" src={Media1} />
        <img className="media-img" alt="meadia-2" src={Media2} />
        <img className="media-img" alt="meadia-3" src={Media3} />
      </Row>
      <Row className="media-section">
        <h1>CAFÉ MÉXICO</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        </p>
      </Row>
    </div>
  )
}

export default Media
