import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Page1() {
  return (
    <Layout>
      <div>Page1</div>
      <Link to="/">ホームに戻る</Link>
    </Layout>
  )
}