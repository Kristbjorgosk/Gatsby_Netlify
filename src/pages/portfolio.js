import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styles from "./portfolio.module.css"
import "./global.css"

const Portfolio = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Portfolio" />

      <ol className="potfolioGrid">
        {projects.map(project => {
          const title = project.frontmatter.title || project.fields.slug
          const description =
            project.frontmatter.description || project.fields.slug
          const liveDemo = project.frontmatter.liveDemo || project.fields.slug
          const github = project.frontmatter.github || project.fields.slug
          const thumbnail =
            project.frontmatter.thumbnail.childImageSharp.fluid ||
            project.fields.slug

          return (
            <div className="portfolio-card">
              <Img className="portfolio-img" fluid={thumbnail} />

              <div>
                <h1> {title} </h1>
                <p>{description}</p>
                <div className={styles.links}>
                  <Link href={liveDemo}>live Demo</Link>
                  <Link style={{ marginLeft: 20 }} href={github}>
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
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
          title
          description
          liveDemo
          github
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
