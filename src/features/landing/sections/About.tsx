import React from 'react'
import { Row, Col, Card, Typography } from 'antd'
import { TeamOutlined, GiftOutlined, HeartOutlined } from '@ant-design/icons'
import '../landing.scss'
import './About.scss'
import PALETTE from '../landingPalette.module.scss'

const { Title, Paragraph } = Typography

const About: React.FC = () => {
  const features = [
    {
      icon: <GiftOutlined />,
      title: 'Праздничные мероприятия',
      description: 'Мы оживляем магию праздников с помощью тематических костюмов, интерактивных активностей и радостных празднований для детей.',
      color: PALETTE.primaryPink,
    },
    {
      icon: <TeamOutlined />,
      title: 'Тимбилдинг',
      description: 'Увлекательные активности, разработанные для укрепления связей, улучшения коммуникации и создания незабываемых воспоминаний для взрослых команд.',
      color: PALETTE.primaryBlue,
    },
    {
      icon: <HeartOutlined />,
      title: 'Дни рождения',
      description: 'Персонализированные празднования дней рождения, которые делают каждого ребёнка особенным в его особенный день.',
      color: PALETTE.primaryOrange,
    },
  ]

  return (
    <section className="landing-section about-section" id="about">
      <div className="container">
        <Title className="landing-section-title">О нас</Title>
        <Paragraph className="landing-section-subtitle">
          Мы увлечённые организаторы мероприятий, посвятившие себя созданию волшебных моментов
          для детей и значимых впечатлений для команд.
        </Paragraph>

        <Row gutter={[24, 24]} className="about-features">
          {features.map((feature, index) => (
            <Col xs={24} md={8} key={index}>
              <Card
                className="feature-card"
                hoverable
                style={{
                  borderColor: feature.color,
                  borderWidth: '2px',
                }}
              >
                <div
                  className="feature-icon"
                  style={{ color: feature.color }}
                >
                  {feature.icon}
                </div>
                <Title level={4} className="feature-title">
                  {feature.title}
                </Title>
                <Paragraph className="feature-description">
                  {feature.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="about-story">
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} lg={12}>
              <div className="story-content">
                <Title level={2}>Наша история</Title>
                <Paragraph>
                  То, что началось как страсть к тому, чтобы приносить радость детям, выросло
                  в любимый сервис, который помогает семьям и компаниям создавать
                  незабываемые воспоминания. Мы специализируемся на праздничных мероприятиях,
                  днях рождения и тимбилдингах, которые объединяют людей.
                </Paragraph>
                <Paragraph>
                  Каждое мероприятие тщательно планируется с вниманием к деталям, обеспечивая
                  уникальность, увлекательность и наполненность каждого празднования смехом
                  и счастьем.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="story-image-placeholder">
                <div className="placeholder-content">
                  <TeamOutlined style={{ fontSize: '4rem', color: PALETTE.primaryPurple }} />
                  <Paragraph style={{ marginTop: '16px', color: PALETTE.textLight }}>
                    Фото команды
                  </Paragraph>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  )
}

export default About

