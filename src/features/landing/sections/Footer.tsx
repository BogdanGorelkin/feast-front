import React from 'react'
import { Layout, Row, Col, Typography, Space } from 'antd'
import {
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons'
import './Footer.scss'
import PALETTE from '../landingPalette.module.scss'

const { Footer: AntFooter } = Layout
const { Title, Paragraph, Link } = Typography

const Footer: React.FC = () => {
  // Replace with actual social media links and contact info
  const socialLinks = {
    facebook: 'https://facebook.com/yourpage',
    instagram: 'https://instagram.com/yourpage',
    email: 'mailto:info@youreventcompany.com',
    phone: 'tel:+1234567890',
  }

  const currentYear = new Date().getFullYear()

  return (
    <AntFooter className="landing-footer">
      <div className="footer-content">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={8}>
            <Title level={4} className="footer-title">
              Праздничная Магия
            </Title>
            <Paragraph className="footer-description">
              Создаём незабываемые празднования и тимбилдинги
              для детей и взрослых.
            </Paragraph>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Title level={5} className="footer-section-title">
              Быстрые ссылки
            </Title>
            <Space direction="vertical" size="small" className="footer-links">
              <a href="#about" className="footer-link">
                О нас
              </a>
              <a href="#gallery" className="footer-link">
                Галерея
              </a>
              <a href="#testimonials" className="footer-link">
                Отзывы
              </a>
              <a href="#contact" className="footer-link">
                Контакты
              </a>
            </Space>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Title level={5} className="footer-section-title">
              Связь с нами
            </Title>
            <Space direction="vertical" size="small" className="footer-links">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <FacebookOutlined /> Facebook
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <InstagramOutlined /> Instagram
              </a>
              <a href={socialLinks.email} className="footer-link">
                <MailOutlined /> Написать на email
              </a>
              <a href={socialLinks.phone} className="footer-link">
                <PhoneOutlined /> Позвонить нам
              </a>
            </Space>
          </Col>
        </Row>

        <div className="footer-bottom">
          <Paragraph className="footer-copyright">
            © {currentYear} Праздничная Магия. Все права защищены.
          </Paragraph>
          <Paragraph className="footer-note">
            💡 Обновите ссылки на соцсети и контактную информацию в Footer.tsx
          </Paragraph>
        </div>
      </div>
    </AntFooter>
  )
}

export default Footer

