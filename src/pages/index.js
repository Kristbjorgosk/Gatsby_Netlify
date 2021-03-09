import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./global.css"

const BlogIndex = ({ location, cards }) => {
  return (
    <Layout location={location}>
      <SEO title="All posts" />
      <div className="aboutContainer">
        <h2>Hello! Welcome to my new portfolio & blog website</h2>
        <br />
        <h3>
          As I am planning on using this website as my real portfolio site I
          want to spend some more time on it and make it "perfect"
        </h3>
        <h3>So its not all finished, but it will do for now </h3>
        <br />
        <br />
        <p>New frontpage coming soon 😜 </p>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
