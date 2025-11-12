import React from 'react'
import { Row, Col, Image, Typography } from 'antd'
import '../landing.scss'
import './Gallery.scss'
import PALETTE from '../landingPalette.module.scss'

const { Title, Paragraph } = Typography

const Gallery: React.FC = () => {
  // Placeholder images - replace with actual images
  const galleryItems = [
    {
      id: 1,
      title: 'Новогоднее празднование',
      description: 'Дети в костюмах эльфов и Деда Мороза',
      placeholder: '🎄',
      color: PALETTE.primaryGreen,
    },
    {
      id: 2,
      title: 'День рождения',
      description: 'Красочное празднование дня рождения',
      placeholder: '🎂',
      color: PALETTE.primaryPink,
    },
    {
      id: 3,
      title: 'Хэллоуин',
      description: 'Весёлые страшные костюмы',
      placeholder: '🎃',
      color: PALETTE.primaryOrange,
    },
    {
      id: 4,
      title: 'Тимбилдинг',
      description: 'Взрослые работают вместе',
      placeholder: '🤝',
      color: PALETTE.primaryBlue,
    },
    {
      id: 5,
      title: 'Пасха',
      description: 'Весенние развлечения',
      placeholder: '🐰',
      color: PALETTE.primaryYellow,
    },
    {
      id: 6,
      title: 'Новогодняя вечеринка',
      description: 'Празднуем вместе',
      placeholder: '🎉',
      color: PALETTE.primaryPurple,
    },
  ]

  return (
    <section className="landing-section gallery-section" id="gallery">
      <div className="container">
        <Title className="landing-section-title">Галерея наших мероприятий</Title>
        <Paragraph className="landing-section-subtitle">
          Посмотрите на некоторые из наших волшебных празднований и весёлых активностей
        </Paragraph>

        <Row gutter={[16, 16]} className="gallery-grid">
          {galleryItems.map((item) => (
            <Col xs={24} sm={12} md={8} key={item.id}>
              <div className="gallery-item">
                <div
                  className="gallery-image-placeholder"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <div className="placeholder-emoji">{item.placeholder}</div>
                  <div className="placeholder-text">
                    <Paragraph style={{ margin: 0, color: PALETTE.textLight }}>
                      {item.title}
                    </Paragraph>
                  </div>
                </div>
                <div className="gallery-overlay">
                  <Title level={5} className="gallery-item-title">
                    {item.title}
                  </Title>
                  <Paragraph className="gallery-item-description">
                    {item.description}
                  </Paragraph>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="gallery-note">
          <Paragraph style={{ textAlign: 'center', color: PALETTE.textLight, fontStyle: 'italic' }}>
            💡 Замените изображения-заглушки на реальные фотографии ваших мероприятий
          </Paragraph>
        </div>
      </div>
    </section>
  )
}

export default Gallery

