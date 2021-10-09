import React from "react"
import "../styles/global.css"
import Layout from "../components/layout"
import Hero from "../components/hero"
import PostLink1 from "../components/post-link1"
import PostLink2 from "../components/post-link2"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import SEO from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="Blog" description="ProAcaブログです" />
      <Hero />
      {data.allContentfulPost.edges.map(edge =>
        <PostLink key={edge.node.slug} post={edge.node} />
      )}
      <PostLink1 />
      <PostLink2 />
    </Layout>
  )
}
export const query = graphql`
    query allContentfulPost {
      allContentfulPost {
        edges {
          node {
            title
            image {
              title
              file {
                url
              }
            }
            description {
              description
            }
            slug
            updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
          }
        }
      }
    }
`