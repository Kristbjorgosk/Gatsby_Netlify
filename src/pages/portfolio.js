import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./global.css"
import { Card, CardDeck } from "react-bootstrap"

const Portfolio = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All Projects" />

      <ol style={{ listStyle: `none` }}>
        {projects.map(project => {
          const title = project.frontmatter.title || project.fields.slug
          const description =
            project.frontmatter.description || project.fields.slug
          const liveDemo = project.frontmatter.liveDemo || project.fields.slug
          const github = project.frontmatter.github || project.fields.slug

          return (
            <CardDeck>
              <Card style={{ width: "18rem" }}>
                <Card.Img src="https://www.citypng.com/public/uploads/preview/imac-website-mockup-front-view-11581292045iqfo2eatcc.png" />
                <Card.Body>
                  <Card.Title> {title} </Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Card.Link href={liveDemo}>live Demo</Card.Link>
                  <Card.Link href={github}>GitHub</Card.Link>
                </Card.Body>
              </Card>
            </CardDeck>
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
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          thumbnail {
            absolutePath
          }
          title
          description
          liveDemo
          github
        }
      }
    }
  }
`
