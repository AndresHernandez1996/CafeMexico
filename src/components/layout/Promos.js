import React from 'react'
import { Card, Divider, Row, Col } from 'antd'
import Promo1 from '../../images/promo1.jpg'
import Promo2 from '../../images/promo2.jpg'
import Promo3 from '../../images/promo3.jpg'

const Promos = () => {
  return (
    <div className="promo-page">
      <Divider>
        <h1>PROMOCIONES</h1>
      </Divider>
      <Row className="card-row">
        <Col lg={8} md={8} xs={24}>
          <Card className="card-promo" hoverable>
            <img alt="example" width="240" src={Promo1} />
          </Card>
        </Col>
        <Col lg={8} md={8} xs={24}>
          <Card className="card-promo" hoverable>
            <img alt="example" width="240" src={Promo3} />
          </Card>
        </Col>
        <Col lg={8} md={8} xs={24}>
          <Card className="card-promo" hoverable>
            <img alt="example" width="240" src={Promo2} />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Promos
