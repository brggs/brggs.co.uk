  import React from 'react'
import { Link } from 'gatsby'
import { FaInstagram, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'

import Seo from '../components/seo'

const IndexPage = () => (
  <div className="bg-slate-900 min-h-screen">
    <Seo title="Home" />

    <div className="flex flex-col min-h-screen text-slate-200 max-w-lg md:max-w-xl mx-auto">
      <div className="grow flex flex-col justify-center text-center space-y-6 p-4 text-xl md:text-2xl">
        <h1 className="text-3xl md:text-4xl">
          Hi, I'm <span className="text-sky-400">Andy Briggs</span> 👋
        </h1>
        <p className="font-sans">
          I'm a Software Engineer based in the UK.
        </p>
        <p className="font-sans">
          I write a{' '}
          <a
            href="https://curiouscoders.substack.com/"
            target="_blank"
            rel="noreferrer"
            className="text-orange-500"
          >
            newsletter
          </a>
          {' '}about teaching kids to code, which you can also read here on my{' '}
          <Link to={`/blog`} className="text-fuchsia-500">
            blog
          </Link>
        </p>
        <p className="font-sans">
          I also run the{' '}
          <a
            href="https://bccd.uk/"
            target="_blank"
            rel="noreferrer"
            className="text-violet-600"
          >
            Bishops Cleeve CoderDojo
          </a>
          , our local coding club.
        </p>
        
        <div className="flex mx-auto text-4xl pt-4 space-x-4">
          <a
            href="https://www.instagram.com/mrabriggs/"
            target="_blank"
            rel="noreferrer"
            className="w-16 h-16 rounded-full 
       bg-orange-500 text-white flex items-center justify-center"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/brggs/"
            target="_blank"
            rel="noreferrer"
            className="w-16 h-16 rounded-full 
       bg-blue-700 text-white flex items-center justify-center"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/brggs"
            target="_blank"
            rel="noreferrer"
            className="w-16 h-16 rounded-full 
             bg-purple-500 text-white flex items-center justify-center"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:andrew@brggs.co.uk"
            target="_blank"
            rel="noreferrer"
            className="w-16 h-16 rounded-full 
            bg-green-600 text-white flex items-center justify-center"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <footer className="text-center pb-2 text-slate-500">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </div>
)

export default IndexPage
