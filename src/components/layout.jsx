import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import GlobalStyle from "../styles/GlobalStyle"
import SEO from "./seo"

const OuterContainer = styled.div`
  flex: 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

const Header = styled.header`
  padding: 20px;
`

const HeaderContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 100%;
  font-size: 1.2rem;
  font-family: 'Lato';
  letter-spacing: 1.1px;
`

const HeaderTitle = styled.div`
  display: inline-block;
`
const Footer = styled.div`
  color: #78a6c8;
  font-size: 0.8rem;
`

export default ({ title, description, children }) => (
  <OuterContainer>
    <SEO title={title} description={description} />
    <GlobalStyle />
    <Header>
      <HeaderContent>
        <Link to={`/`}>
          <HeaderTitle>
            brggs.co.uk
          </HeaderTitle>
        </Link>
        <Link
          to={`/blog/`}
        >
          blog
        </Link>
      </HeaderContent>
    </Header>
    {children}
    <Footer>
      <p>&copy; 2020 - Powered by Gatsby</p>
    </Footer>
  </OuterContainer>
)