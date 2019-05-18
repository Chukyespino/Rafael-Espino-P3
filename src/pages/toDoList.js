import React from "react"
import List from '../components/listdisplay'
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="To Do List" />
   <List/>
  </Layout>
)

export default SecondPage
