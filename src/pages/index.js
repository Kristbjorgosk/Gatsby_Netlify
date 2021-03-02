import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./global.css"

const BlogIndex = ({ location, cards }) => {
  return (
    <Layout location={location}>
      <SEO title="All posts" />
      <div class="grid-container">
        <div class="grid-item">
          <img sr="https://www.citypng.com/public/uploads/preview/imac-website-mockup-front-view-11581292045iqfo2eatcc.png" />
          <h3>title</h3>
          <h4>description</h4>
          <a href=""> Live Demo</a>
          <a href=""> GitHub</a>
        </div>
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
