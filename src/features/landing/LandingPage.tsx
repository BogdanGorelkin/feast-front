import React from 'react'
import { Layout } from 'antd'
import Hero from './sections/Hero'
import About from './sections/About'
import Gallery from './sections/Gallery'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import './landing.scss'

const { Content } = Layout

const LandingPage: React.FC = () => {
  return (
    <Layout className="landing-page">
      <Hero />
      <Content>
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </Content>
      <Footer />
    </Layout>
  )
}

export default LandingPage

