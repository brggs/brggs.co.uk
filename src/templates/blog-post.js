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
  width: 100%;
  max-width: 680px;
  text-align: left;
  padding: 20px;
  margin: 20px auto;
`

const Title = styled.h1`
  margin-top: 1rem;
  margin-bottom: 0;
`

const Nav = styled.nav`
  width: 100%;
  max-width: 680px;
  margin: 20px auto;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
  //  const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout title={post.frontmatter.title}>
        <Content>
          <Article>
            <header>
              <Title>
                {post.frontmatter.title}
              </Title>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`