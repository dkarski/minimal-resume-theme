import React from "react"
import Seo from "../sections/Seo"
import Layout from "../shared/layout"
import Header from "../sections/Header"
import Summary from "../sections/Summary"
import Education from "../sections/Education"
import Experience from "../sections/Experience"
import Projects from "../sections/Projects"
import Skills from "../sections/Skills"
import Footer from "../sections/Footer"

const IndexPage = () => (
  <Layout>
    <Seo />
    <Header />
    <Summary />
    <Education />
    <Experience />
    <Projects />
    <Skills />
    <Footer />
  </Layout>
)

export default IndexPage
