import * as React from 'react';
import Layout from '../components/layout'
import github from '../images/github.png'
import {tinyLogo} from '../components/layout.module.css'



const ProjectsPage = () => {
  return (
    <main id="projects">
      <title>Projects</title>
      <Layout pageTitle="Projects">
          <h3>Novel App</h3>
          <p>A Progressive Web App for second-market book sales offering location verification to list and purchase books in your area.</p>
          <img src={github} alt="github" className={tinyLogo} />  <a href="https://github.com/Novel-App/novel_app">Novel App</a>
          <br /> 
          <a href="https://novel-market.herokuapp.com/">Novel App</a>
      </Layout>
    </main>
  )
}

export default ProjectsPage