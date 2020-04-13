import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 auto;
  margin: 0;
`

const Article = styled.article`
  max-width: 680px;
  text-align: left;
  padding: 20px;
  margin: 20px auto;
`

const Title = styled.h1`
  margin-top: 1rem;
  margin-bottom: 0;
`

const PostInfo = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: #b5d4ea;
`

const Nav = styled.nav`
  width: 100%;
  max-width: 680px;
  margin: 20px auto;
`

const Discuss = styled.div`
  margin-top: 2rem;
  color: #b5d4ea;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext
    const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
      `https://brggs.co.uk${this.props.pageContext.slug}`
    )}`

    return (
      <Layout title={post.frontmatter.title} description={post.frontmatter.description}>
        <Content>
          <Article>
            <header>
              <Title>
                {post.frontmatter.title}
              </Title>
              <PostInfo>By <Link to='/'>{this.props.data.site.siteMetadata.author}</Link> - {post.frontmatter.date} - {post.timeToRead} min read</PostInfo>
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
             <Discuss><a href={discussUrl} target="_blank">Discuss on Twitter</a></Discuss>
          </Article>

          <Nav>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </Nav>
        </Content>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      timeToRead
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        description
      }
    }
  }
`