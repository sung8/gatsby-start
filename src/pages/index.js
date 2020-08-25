import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'

const IndexPage = () => {
  return (
    <div>
      <Header></Header>
      <h1>Hello, </h1>
      <h2>I'm sung, an aspiring full-stack developer.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
      <p>
        Want to get to know me? <Link to="/about">Read my bio.</Link>
      </p>
      <Footer></Footer>
    </div>
  )
}
// export default function Home() {
//   return <div>Hello world!</div>
// }

// export default () => <div>The Great Gatsby Bootcamp</div>

export default IndexPage
