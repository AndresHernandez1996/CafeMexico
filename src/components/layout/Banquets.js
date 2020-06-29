import React from 'react'
import { Row, Col, Divider } from 'antd'

const Banquets = () => {
  return (
    <div className="banquet-page">
      <Row>
        <Col className="banquet-left" ls={12} md={12}>
          <div>
            <Divider>
              <h1>BANQUETES & EVENTOS</h1>
            </Divider>
            <br />
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>
        </Col>
        <Col className="banquet-right" ls={12} md={12} />
      </Row>
    </div>
  )
}

export default Banquets
