import React from "react"
import { Card } from "react-bootstrap"

const Projects = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title> {post.frontmatter.title} </Card.Title>
          <Card.Text>{post.frontmatter.description}</Card.Text>
          <Card.Link href="#">{post.frontmatter.liveDemo}</Card.Link>
          <Card.Link href="#">{post.frontmatter.github}</Card.Link>
        </Card.Body>
      </Card>
    </Layout>
  )
}

export default Projects
