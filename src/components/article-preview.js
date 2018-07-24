import React from 'react'
import Link from 'gatsby-link'

class ArticlePreview extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <Link to={`/${this.props.article.slug}`} className="article-preview">
        <div>
          <div className="article-preview__title">
          <div>{this.props.article.title}</div>
          <div className="fc--pink f-11 dt-none">{this.props.article.publishDate}</div>
          </div>
         
          <div
                className="article-preview__sub"
                dangerouslySetInnerHTML={{
                  __html: this.props.article.description.childMarkdownRemark
                    .html,
                }}
              />
        </div>
        <div className="article-preview__meta">
            <div className="t-right meta-dt">
              <div className="fc--pink">{this.props.article.publishDate}</div>
              <div><i className="fa fa-long-arrow-right fc--blue"></i></div>
            </div>

            <div style={{ backgroundImage: `url(${this.props.article.heroImage.file.url})`}} className="article-preview__img">
                <div className="article-preview__img-filter"></div>
            </div>
        </div>
      </Link>
      
    )
  }
}

export default ArticlePreview
