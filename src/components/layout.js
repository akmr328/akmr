import * as React from 'react'
import { container, heading } from './layout.module.css'

const Layout = ( {pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
    </main>
  )
}

export default Layout