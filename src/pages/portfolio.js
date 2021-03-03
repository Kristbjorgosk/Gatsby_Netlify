import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./portfolio.module.css"
import "./global.css"

const Portfolio = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Portfolio" />

      <ol style={{ listStyle: `none` }}>
        {projects.map(project => {
          const title = project.frontmatter.title || project.fields.slug
          const description =
            project.frontmatter.description || project.fields.slug
          const liveDemo = project.frontmatter.liveDemo || project.fields.slug
          const github = project.frontmatter.github || project.fields.slug

          return (
            <div className="portfolio-card">
              <img src="https://www.citypng.com/public/uploads/preview/imac-website-mockup-front-view-11581292045iqfo2eatcc.png" />
              <div>
                <h1> {title} </h1>
                <p>{description}</p>
                <Link href={liveDemo}>live Demo</Link>
                <Link href={github}>GitHub</Link>
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
