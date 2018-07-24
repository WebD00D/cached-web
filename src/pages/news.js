import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class Culture extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    console.log("CULTURE", posts)

    return (
      <div>
        <Helmet title={siteTitle} />

        <div className="page-header">
          <div className="t-center t-sans f-38">News</div>
        </div>

          {posts.map(({ node }, idx) => {

             let isEven = ((idx + 1) % 2);
             let bgColor = isEven ? "bg--grey" : "bg--white";
             let contentBGColor = isEven ? "bg--white fc--black" : "bg--black fc--white";
             let linkClass = isEven ? "fc--black" : "fc--white"

            return (
              <div key={node.slug}>
                <ArticlePreview linkClass={linkClass} contentBGColor={contentBGColor} bgClass={bgColor} article={node} />
              </div>
            )
          })}

      </div>
    )
  }
}

export default Culture

export const pageQuery = graphql`
  query CultureQuery {
    allContentfulBlogPost(filter: { contentType: { eq: "CULTURE" } }, sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
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

  }
`
