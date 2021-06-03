import * as React from "react"
import Layout from '../components/layout'
import About from './about'
import ExperiencePage from "./experience"
import Navbar from './navbar'
import ProjectsPage from "./projects"
import Banner from "./banner"
import Hero from "./hero"

const IndexPage = () => {
  return (
    <main>
      <Banner />
      <Navbar />  
      {/* <Hero /> */}
      <Layout>
      <title>Home</title>
      <About />
      <ExperiencePage />
      <ProjectsPage />
      </Layout>
    </main>
  )
}

export default IndexPage