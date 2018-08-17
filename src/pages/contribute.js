import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

class Contribute extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <div className=" ph-12 fc--black t-sans f-38  m-w-800 mlra m-t-48 fw-900">
          WRITE FOR US
        </div>

        <div className="m-w-800 mlra ph-12">
          <div className="t-serif  f-18 m-b-48">
            Have a story to tell? A how-to, interview, or maybe a case-study?
            We’re after unique, quality editorial and if you’ve got something
            that fits those guidelines we’d love to run it.
          </div>

          <h3 className="t-sans">Getting Started</h3>
          <p className="t-serif">
            The following guide will get you setup with everything you need to
            write your article for CACHED. Also, please take in regard our
            recent list of stories published before you draft up yours.{' '}
          </p>

          <h3 className="t-sans">Know Our Audience</h3>
          <p className="t-serif">
            A Cached reader is a web developer, a designer, a product or project
            manager, or other involved in the digital creative space. Our
            readers are smart, but range in experience from junior to senior in
            their respective field.
          </p>

          <h3 className="t-sans">What We Expect</h3>
          <p className="t-serif">
            <ul>
              <li>
                An original piece for CACHED Magazine. It should not be
                published elsewhere.
              </li>
              <li>You will be open to feedback from your assigned editor.</li>
              <li>
                After initial outline submission, we expect your story to be
                completed in a sensible timeline
              </li>
            </ul>
          </p>

          <h3 className="t-sans">What We Will Do For You</h3>
          <p className="t-serif">
            <ul>
              <li>
                We will pay you fairly, and promptly on publication of your work
              </li>
              <li>We will help make sure your article really stands out</li>
              <li>
                We will give you full credit with a byline and photo on our site
              </li>
              <li>
                We will promote your article on all of our social channel and
                newsletter
              </li>
            </ul>
          </p>

          <h3 className="t-sans">First Steps</h3>
          <p className="t-serif">
            <ol>
              <li>
                Submit a proposed story outline to rva.christian91@gmail.com{' '}
              </li>

              <li>
                After submission, an editor will be in touch to let you know if
                we’d like to pursue your story.
              </li>
            </ol>
          </p>
        </div>
      </div>
    )
  }
}

export default Contribute
