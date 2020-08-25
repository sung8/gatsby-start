import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'

const AboutPage = () => {
  return (
    <div>
      <Header></Header>
      <h1>About me</h1>
      <p>Hello, I'm an aspiring full-stack developer</p>
      <p>
        <Link to="/contact">Click for contacts</Link>
      </p>
      <Footer></Footer>
    </div>
  )
}

export default AboutPage
