// import React from "react"
// import { Link, graphql } from "gatsby"
// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const BlogPostTemplate = ({ data, location }) => {
//   const post = data.markdownRemark
//   const siteTitle = data.site.siteMetadata?.title || `Title`
//   const { previous, next } = data

//   return (
//     <Layout location={location} title={siteTitle}>
//       <SEO
//         title={post.frontmatter.title}
//         description={post.frontmatter.description || post.excerpt}
//       />
//       <article
//         className="projects"
//         itemScope
//         itemType="http://schema.org/Article"
//       >
//         <Card style={{ width: "18rem" }}>
//           <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//           <Card.Body>
//             <Card.Title> {post.frontmatter.title} </Card.Title>
//             <Card.Text>{post.frontmatter.description}</Card.Text>
//             <Card.Link href="#">{post.frontmatter.liveDemo}</Card.Link>
//             <Card.Link href="#">{post.frontmatter.github}</Card.Link>
//           </Card.Body>
//         </Card>
//       </article>
//     </Layout>
//   )
// }

// export default BlogPostTemplate

// export const pageQuery = graphql`
//   query BlogPostBySlug(
//     $id: String!
//     $previousPostId: String
//     $nextPostId: String
//   ) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(id: { eq: $id }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//       }
//     }
//     previous: markdownRemark(id: { eq: $previousPostId }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//       }
//     }
//     next: markdownRemark(id: { eq: $nextPostId }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//       }
//     }
//   }
// `
