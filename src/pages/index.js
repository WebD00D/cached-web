import React from 'react'
import Link, { withPrefix } from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    return (
      <div className="site-wrapper">
        <Helmet title={siteTitle} />
          <div className="header ">
            
            <div className="header--hp">
                <div className="header--hp__logo">
                <img
              className="logo__full"
              src={withPrefix('images/Cached_Full@2x.png')}
              alt="Logo"
            />
                </div>
                <div className="header--hp__sub">A Digest for the Digital Creative</div>
            </div>
          </div>
          <div className="preview-container">
          {posts.map(({ node }, idx) => {
            return (
                <ArticlePreview key={node.slug} article={node} />
            )
          })}
          </div>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          contentType
          heroImage {
            file {
              url
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          image {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`
