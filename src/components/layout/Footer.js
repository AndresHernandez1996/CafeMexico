import React from 'react'
import { Row, Col, Form, Input, Button } from 'antd'

const Footer = () => {
  const [form] = Form.useForm()
  return (
    <div className="footer-page">
      <Row>
        <Col className="footer-left" ls={12} md={12}>
          <h1>CONTÁCTANOS</h1>
          <h2>Café México</h2>
          <p>VillaHermosa Tabasco</p>
        </Col>
        <Col className="footer-right" ls={12} md={12}>
          <Col span={12} offset={6}>
            <Form layout="vertical" form={form}>
              <Form.Item label="Teléfono">
                <Input placeholder="Escribe tu número" />
              </Form.Item>
              <Form.Item label="Correo">
                <Input placeholder="Escribe tu correo" />
              </Form.Item>
              <Form.Item label="Mensaje">
                <Input placeholder="Dejanos un mensaje" />
              </Form.Item>
              <Form.Item>
                <Button type="primary">Submit</Button>
              </Form.Item>
            </Form>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
