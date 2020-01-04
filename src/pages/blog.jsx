import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"


const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 auto;
  margin: 0;
`

const Posts = styled.main`
  width: 100%;
  max-width: 800px;
  text-align: left;
  padding: 20px;
  margin: 20px auto;
`

const Title = styled.h1`
`

const PostList = styled.div`
  margin: 0;
`

const Post = styled.article`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 12px 0;    
  border-bottom: 1px #4a596f solid;
`

const PostTitle = styled.span`
    font-size: 1.2rem;
`

export default  ({ data })  => {
  const posts = data.allMarkdownRemark.edges

  return ( 
    <Layout title="All Posts">
      <Content>
        <Posts>
          <Title>Posts</Title>
          <PostList>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <Link to={node.fields.slug}>
                  <Post key={node.fields.slug}>
                      <PostTitle>{title}</PostTitle>
                      <span>{node.frontmatter.date}</span>
                  </Post>
                </Link>
              )
            })}
          </PostList>
        </Posts>
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
