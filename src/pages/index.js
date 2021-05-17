import * as React from "react"
import Layout from '../components/layout'
import About from './about'
import ExperiencePage from "./experience"
import Navbar from './navbar'
import ProjectsPage from "./projects"

const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Layout pageTitle="Annie Rash">
      <title>Home</title>
      <p>Welcome to my portfolio!</p>
      <About />
      <ExperiencePage />
      <ProjectsPage />
      </Layout>
    </main>
  )
}

export default IndexPage
