import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <p>Hello, I'm an aspiring full-stack developer</p>
      <p>
        <Link to="/contact">Click for contacts</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
