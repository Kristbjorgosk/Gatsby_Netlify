import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMe = ({ location, data }) => {
  const about = data.allMarkdownRemark.nodes
  const title = about[0].frontmatter.title || about[0].fields.slug
  const html = about[0].html || about[0].fields.slug

  return (
    <Layout location={location}>
      <SEO title="All posts" />

      <h1> {title} </h1>

      <section dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default AboutMe

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(/about)/" } }) {
      nodes {
        frontmatter {
          title
        }
        html
      }
    }
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`
