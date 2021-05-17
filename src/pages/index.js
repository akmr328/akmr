import * as React from "react"
import Layout from '../components/layout'
import About from './about'
import Navbar from './navbar'

const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Layout pageTitle="Annie Rash">
      <title>Home</title>
      <p>Welcome to my portfolio!</p>
      <About />
      </Layout>
    </main>
  )
}

export default IndexPage
