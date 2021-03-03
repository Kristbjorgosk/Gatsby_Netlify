import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./global.css"

const BlogIndex = ({ location, cards }) => {
  return (
    <Layout location={location}>
      <SEO title="Contact message" />
      <div className="messageSent">
        <h2>--- Your messasge has been sent ---</h2>
        <h1>
          Thank you so much for contacting me! I will reply to you very shortly{" "}
        </h1>
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
