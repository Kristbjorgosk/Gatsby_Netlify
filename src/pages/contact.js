import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./global.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Form } from "react-bootstrap"

const BlogIndex = ({ location, cards }) => {
  return (
    <Layout location={location}>
      <SEO title="All posts" />

      <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="formGroupTextarea">
            <Form.Label>Messasge</Form.Label>
            <Form.Control type="textarea" placeholder="Messasge" />
          </Form.Group>
          <button type="submit">Send</button>
        </Form>
      </form>
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
