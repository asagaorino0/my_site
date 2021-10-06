import React from "react"
// import { Link } from "gatsby"
import "../styles/style.css"
import Layout from "../components/layout"
import Hero from "../components/hero"
import PostLink1 from "../components/post-link1"
import PostLink2 from "../components/post-link2"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <PostLink1 />
      <PostLink2 />
    </Layout>
  )
}