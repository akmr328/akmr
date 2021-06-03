import React from "react"
import {banner, bannerTitle} from '../components/layout.module.css'


const Banner = () => {
  return (
    <section className={banner}>
      <h1 className={bannerTitle}>
       I'm a banner - I'll say things!
      </h1>
    </section>
  )
}


export default Banner