import React from "react"
import styled from "styled-components"
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';
import Layout from "../components/layout";


const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 auto;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
  
  svg {
    height: 32px;
    width: 32px;
  }
`

const Title = styled.h1`
  margin-bottom: 5px;
`

const SubTitle = styled.h2`
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 1.5rem;
`

const IconLink = styled.a`
  margin: 10px;
`

export default () => {
  return ( 
    <Layout title="Home">
      <Content>
        <Title>Andrew Briggs</Title>
        <SubTitle>Software Engineer</SubTitle>
        <div>
          <IconLink href="https://www.linkedin.com/in/brggs/" target="_blank"><FaLinkedin /></IconLink>
          <IconLink href="https://github.com/brggs/" target="_blank"><FaGithub /></IconLink>
          <IconLink href="https://twitter.com/mrabriggs/" target="_blank"><FaTwitter /></IconLink>
          <IconLink href="mailto:andrew@brggs.co.uk"><FaEnvelope /></IconLink>
        </div>
      </Content>
    </Layout>
  )
}
