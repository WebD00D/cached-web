import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  PinterestShareButton,
  RedditShareButton,
  TumblrShareButton,
  EmailShareButton,
} from 'react-share'

import {
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  PinterestIcon,
  RedditIcon,
  TumblrIcon,
  EmailIcon,
} from 'react-share'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div className="site-wrapper">
        <Helmet title={`${post.title}`} />

        <div className="blog-hero">
          <div className="fc--black t-sans f-38 t-center m-w-600 fw-900 f-24-m">
            {post.title}
          </div>
          <div
            className="fc--black t-sans f-18 t-center m-w-400"
            dangerouslySetInnerHTML={{
              __html: post.description.childMarkdownRemark.html,
            }}
          />
          <div className="fc--pink t-sans f-13 t-center m-w-600 ">
            {post.publishDate}
          </div>
          <div className="social-share-bar">
            <FacebookShareButton
              className="hover outline-none hover-fade social-share"
              url={`http://www.cachedmag.com/${post.slug}`}
            >
              <FacebookIcon
                size={26}
                round={true}
                iconBgStyle={{ fill: '#5000ff' }}
              />
            </FacebookShareButton>

            <TwitterShareButton
              className="hover outline-none hover-fade social-share"
              url={`https://www.cachedmag.com/${post.slug}`}
            >
              <TwitterIcon
                size={26}
                round={true}
                iconBgStyle={{ fill: '#5000ff' }}
              />
            </TwitterShareButton>

            <RedditShareButton
              className="hover outline-none hover-fade social-share"
              media={post.heroImage.file.url}
              url={`https://www.cachedmag.com/${post.slug}`}
            >
              <RedditIcon
                size={26}
                round={true}
                iconBgStyle={{ fill: '#5000ff' }}
              />
            </RedditShareButton>

            <EmailShareButton
              className="hover outline-none hover-fade social-share"
              media={post.heroImage.file.url}
              url={`https://www.cachedmag.com/${post.slug}`}
            >
              <EmailIcon
                size={26}
                round={true}
                iconBgStyle={{ fill: '#5000ff' }}
              />
            </EmailShareButton>
          </div>
        </div>

        <img src={`${post.heroImage.file.url}`} alt="" />
        <div className="t-sans fc--grey t-center ph-30 m-t-22">
          {post.heroCaption}
        </div>

        <div className="blog-article-wrap">
          <div
            className="t-serif"
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        <div
        className="just-comments"
        data-apikey="b8b5c1dc-569e-48d2-b480-8970118e1a32">
        </div>
        <div className="blocker"></div>
          <Helmet>
            <script
              src="https://just-comments.com/w.js"
              type="text/javascript"
              defer="true"
            />
          </Helmet>
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        file {
          url
        }
      }
      heroCaption
      contentType
      description {
        childMarkdownRemark {
          html
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
