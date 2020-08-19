import React from "react"
import Header from "../components/Header"
import Biography from "../components/Biography"
import Products from "../components/Products"
import Contact from "../components/Contact"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Header />
      <div id="biography">
        <Biography />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </Layout>
  )
}
