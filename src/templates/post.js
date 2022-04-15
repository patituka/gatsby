import React from 'react'
import { graphql } from 'gatsby'
import { Heading } from 'theme-ui'

const Post = ({ data }) => {
  const post = data.markdownRemark

  const images = data.allFile.edges.map((res) => res.node.relativePath)
  const bannerImage = images.length > 0
    ? `../${images[0]}`
    : `https://source.unsplash.com/960x200/?${post.frontmatter.keywords}`

  return (
    <div>
      <Heading>{post.frontmatter.title}</Heading>
      <div style={{
        width: '100%',
        height: '200px',
        backgroundColor: '#fafafa',
        backgroundImage: `Url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginBottom: '30px'
      }}></div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
  query($slug: String!, $imgPath: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        keywords
      }
    },
    allFile(filter: {
    	extension: {regex: "/(jpg)|(jpeg)|(png)/"}, 
    	relativeDirectory: {eq: $imgPath}}) {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`

export default Post;