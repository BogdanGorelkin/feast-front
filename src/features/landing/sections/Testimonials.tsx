import React from 'react'
import { Row, Col, Card, Typography, Rate } from 'antd'
// import { QuoteLeftOutlined } from '@ant-design/icons'
import '../landing.scss'
import './Testimonials.scss'
import PALETTE from '../landingPalette.module.scss'

const { Title, Paragraph } = Typography

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Светлана Иванова',
      role: 'Родитель',
      content: 'Новогоднее мероприятие было абсолютно волшебным! Мои дети до сих пор об этом говорят. Костюмы были потрясающими, а активности увлекали всех. Очень рекомендую!',
      rating: 5,
      color: PALETTE.primaryPink,
    },
    {
      id: 2,
      name: 'Михаил Петров',
      role: 'Менеджер компании',
      content: 'Наш тимбилдинг прошёл с огромным успехом. Активности были хорошо организованы и сблизили нашу команду. Отличная коммуникация и внимание к деталям.',
      rating: 5,
      color: PALETTE.primaryBlue,
    },
    {
      id: 3,
      name: 'Елена Смирнова',
      role: 'Родитель',
      content: 'Они сделали 8-й день рождения моей дочери незабываемым! Каждая деталь была идеальной, от украшений до игр. Дети были в полном восторге!',
      rating: 5,
      color: PALETTE.primaryOrange,
    },
    {
      id: 4,
      name: 'Дмитрий Козлов',
      role: 'Директор по персоналу',
      content: 'Профессионально, весело и креативно. Наше корпоративное мероприятие превзошло ожидания. Организаторы были гибкими и отлично работали с нашим бюджетом.',
      rating: 5,
      color: PALETTE.primaryPurple,
    },
  ]

  return (
    <section className="landing-section testimonials-section" id="testimonials">
      <div className="container">
        <Title className="landing-section-title">Что говорят наши клиенты</Title>
        <Paragraph className="landing-section-subtitle">
          Не верьте нам на слово — послушайте счастливые семьи и компании
        </Paragraph>

        <Row gutter={[24, 24]} className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <Col xs={24} sm={12} key={testimonial.id}>
              <Card
                className="testimonial-card"
                style={{
                  borderTop: `4px solid ${testimonial.color}`,
                  height: '100%',
                }}
              >
               {/*  <QuoteLeftOutlined
                  className="testimonial-quote-icon"
                  style={{ color: testimonial.color }}
                /> */}
                <Paragraph className="testimonial-content">
                  {testimonial.content}
                </Paragraph>
                <div className="testimonial-rating">
                  <Rate disabled defaultValue={testimonial.rating} />
                </div>
                <div className="testimonial-author">
                  <Title level={5} className="testimonial-name">
                    {testimonial.name}
                  </Title>
                  <Paragraph className="testimonial-role">
                    {testimonial.role}
                  </Paragraph>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default Testimonials

