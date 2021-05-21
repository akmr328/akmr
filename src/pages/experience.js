import * as React from 'react';
import Layout from '../components/layout'


const ExperiencePage = () => {
  return (
    <main id="experience">
      <title>Experience</title>
      <span className="span_block"></span>
      <Layout pageTitle="Experience">
          <h3>Doyle <small>New York</small></h3>
          <p>Rare Book Cataloger and Photographer 01/19 - 04/20</p>
          <span />
          <h3>Huntsman Savile Row<small>New York</small></h3>
          <p>Sales and Marketing Coordinator 06/18 - 12/18</p>
          <span />
          <h3>Arader Galleries<small>New York</small></h3>
          <p>Auction Director 02/15 - 06/18</p>
      </Layout>
    </main>
  )
}

export default ExperiencePage