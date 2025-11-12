import React from 'react'
import { Button, Typography } from 'antd'
import { CalendarOutlined } from '@ant-design/icons'
import './Hero.scss'
import PALETTE from '../landingPalette.module.scss'

const { Title, Paragraph } = Typography

const Hero: React.FC = () => {
  const handleBookEvent = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-section">
      <div className="hero-content">
        <Title className="hero-title">
          Делаем каждое празднование волшебным! ✨
        </Title>
        <Paragraph className="hero-subtitle">
          Весёлые праздничные мероприятия, дни рождения и тимбилдинги,
          которые создают незабываемые воспоминания для детей и взрослых.
        </Paragraph>
        <Button
          type="primary"
          size="large"
          icon={<CalendarOutlined />}
          onClick={handleBookEvent}
          className="hero-cta-button"
          style={{
            backgroundColor: PALETTE.primaryPink,
            borderColor: PALETTE.primaryPink,
            height: '56px',
            fontSize: '18px',
            padding: '0 40px',
          }}
        >
          Забронировать мероприятие
        </Button>
      </div>
      <div className="hero-decoration">
        <div className="decoration-circle circle-1" />
        <div className="decoration-circle circle-2" />
        <div className="decoration-circle circle-3" />
        <div className="decoration-star star-1">⭐</div>
        <div className="decoration-star star-2">🎉</div>
        <div className="decoration-star star-3">🎈</div>
      </div>
    </section>
  )
}

export default Hero

