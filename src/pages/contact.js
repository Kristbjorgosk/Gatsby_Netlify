import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./global.css"
import "./contact.module.css"

const Contact = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Contact Form" />
      <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/message-sent"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="subject" value="subject" />
        <p>
          <label>
            Name: <input type="text" name="name" required="true" />
          </label>
        </p>
        <p>
          <label>
            Email: <input type="text" name="email" required="true" />
          </label>
        </p>
        <p>
          <label>
            Message:{" "}
            <textarea name="message" rows="8" required="true"></textarea>
          </label>
        </p>
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
