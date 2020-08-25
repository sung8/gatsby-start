import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello, </h1>
      <h2>I'm sung, an aspiring full-stack developer.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}
// export default function Home() {
//   return <div>Hello world!</div>
// }

// export default () => <div>The Great Gatsby Bootcamp</div>

export default IndexPage
