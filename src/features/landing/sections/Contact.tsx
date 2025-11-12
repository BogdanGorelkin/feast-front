import React, { useState } from 'react'
import { Row, Col, Form, Input, Button, Typography, message, Space, Card } from 'antd'
import { SendOutlined, WhatsAppOutlined, PhoneOutlined } from '@ant-design/icons'
import '../landing.scss'
import './Contact.scss'
import PALETTE from '../landingPalette.module.scss'

const { Title, Paragraph } = Typography
const { TextArea } = Input

const Contact: React.FC = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  // Replace with actual phone number and WhatsApp link
  const phoneNumber = '+1234567890'
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`

  const onFinish = async (values: any) => {
    setLoading(true)
    try {
      // TODO: Replace with actual API call or email service
      console.log('Form values:', values)
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      message.success('Спасибо! Мы скоро с вами свяжемся.')
      form.resetFields()
    } catch (error) {
      message.error('Что-то пошло не так. Пожалуйста, попробуйте ещё раз.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="landing-section contact-section" id="contact">
      <div className="container">
        <Title className="landing-section-title">Свяжитесь с нами</Title>
        <Paragraph className="landing-section-subtitle">
          Готовы спланировать ваше следующее мероприятие? Свяжитесь с нами, и давайте сделаем его волшебным!
        </Paragraph>

        <Row gutter={[32, 32]} className="contact-content">
          <Col xs={24} lg={14}>
            <Card className="contact-form-card">
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
              >
                <Form.Item
                  name="name"
                  label="Ваше имя"
                  rules={[{ required: true, message: 'Пожалуйста, введите ваше имя' }]}
                >
                  <Input placeholder="Иван Иванов" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email адрес"
                  rules={[
                    { required: true, message: 'Пожалуйста, введите ваш email' },
                    { type: 'email', message: 'Пожалуйста, введите корректный email' },
                  ]}
                >
                  <Input placeholder="ivan@example.com" />
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Сообщение"
                  rules={[{ required: true, message: 'Пожалуйста, введите ваше сообщение' }]}
                >
                  <TextArea
                    rows={6}
                    placeholder="Расскажите нам о вашем мероприятии, и мы свяжемся с вами!"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    icon={<SendOutlined />}
                    block
                    style={{
                      backgroundColor: PALETTE.primaryPink,
                      borderColor: PALETTE.primaryPink,
                      height: '50px',
                      fontSize: '16px',
                    }}
                  >
                    Отправить сообщение
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>

          <Col xs={24} lg={10}>
            <div className="contact-info">
              <Title level={3}>Контактная информация</Title>
              <Paragraph>
                Предпочитаете связаться напрямую? Мы здесь, чтобы помочь!
              </Paragraph>

              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link whatsapp-link"
                >
                  <WhatsAppOutlined />
                  <span>Написать в WhatsApp</span>
                </a>

                <a
                  href={`tel:${phoneNumber}`}
                  className="contact-link phone-link"
                >
                  <PhoneOutlined />
                  <span>Позвонить нам: {phoneNumber}</span>
                </a>
              </Space>

              <div className="contact-note">
                <Paragraph style={{ color: PALETTE.textLight, fontSize: '0.9rem' }}>
                  💡 <strong>Подсказка:</strong> Замените номер телефона и ссылку на WhatsApp
                  на вашу реальную контактную информацию в Contact.tsx
                </Paragraph>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Contact

