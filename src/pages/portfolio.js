import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card } from "react-bootstrap"

const Portfolio = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>
          No projects found. Add markdown posts to "content/projects" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />

      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <Card style={{ width: "18rem" }}>
                <Card.Img />
                <Card.Body>
                  <Card.Title> {post.frontmatter.title} </Card.Title>
                  <Card.Text>{post.frontmatter.description}</Card.Text>
                  <Card.Link href="#">{post.frontmatter.liveDemo}</Card.Link>
                  <Card.Link href="#">{post.frontmatter.github}</Card.Link>
                </Card.Body>
              </Card>
            </li>
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
        }
      }
    }
  }
`
