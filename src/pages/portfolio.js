import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card } from "react-bootstrap"

const Portfolio = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />

      <ol style={{ listStyle: `none` }}>
        {projects.map(project => {
          const title = project.frontmatter.title || project.fields.slug
          const description =
            project.frontmatter.description || project.fields.slug
          const liveDemo = project.frontmatter.liveDemo || project.fields.slug
          const github = project.frontmatter.github || project.fields.slug

          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img />
              <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Link href={liveDemo}>live Demo</Card.Link>
                <Card.Link href={github}>GitHub</Card.Link>
              </Card.Body>
            </Card>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Portfolio

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "static/img" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          description
          date
          liveDemo
          github
        }
      }
    }
  }
`
