import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./global.css"
import "./contact.module.css"

const Contact = ({ location, cards }) => {
  return (
    <Layout location={location}>
      <SEO title="Contact Form" />
      <form
        name="contact"
        method="POST"
        data-netlify-recaptcha="true"
        data-netlify="true"
        action="/"
      >
        <p>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email: <input type="text" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <div data-netlify-recaptcha="true"></div>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}

export default Contact

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
