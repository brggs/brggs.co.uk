import React from 'react'
import { Link } from 'gatsby'
import { FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa'

import SEO from '../components/Seo'

const IndexPage = () => (
  <div className="bg-slate-800 min-h-screen">
    <SEO title="Home" />

    <div className="flex flex-col min-h-screen text-slate-200 max-w-2xl mx-auto">
      <div className="grow flex flex-col justify-center text-center space-y-6 p-4 text-xl md:text-2xl">
        <h1 className="text-3xl md:text-4xl">
          Hi, I'm <span className="text-sky-400">Andrew Briggs</span> 👋
        </h1>
        <p className='font-sans'>
          I'm a Software Engineer based in the UK, working as an independent
          contractor via
          <a
            href="https://bluefinch.uk/"
            target="_blank"
            rel="noreferrer"
            className="text-sky-600"
          >
            {' '}
            BlueFinch Technologies
          </a>
          .
        </p>
        <p className='font-sans'>
          I also run the{' '}
          <a
            href="https://bc-coderdojo.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="text-violet-600"
          >
            Bishops Cleeve CoderDojo
          </a>
          , our local coding club.
        </p>
        <p className='font-sans'>
          I occasionally{' '}
          <Link to={`/blog`} className="text-fuchsia-500">
            blog
          </Link>{' '}
          about software engineering.
        </p>
        <p className='font-sans'>
          In my free time, I like to walk in the Cotswolds{' '}
          <a
            href="https://www.instagram.com/distant.summit/"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-600"
          >
            taking photos
          </a>
          .
        </p>
        <div className="flex mx-auto text-4xl pt-4 space-x-4">
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
            href="https://twitter.com/MrABriggs"
            target="_blank"
            rel="noreferrer"
            className="w-16 h-16 rounded-full 
             bg-sky-500 text-white flex items-center justify-center"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:andrew@brggs.co.uk"
            target="_blank"
            rel="noreferrer"
            className="w-16 h-16 rounded-full 
            bg-violet-600 text-white flex items-center justify-center"
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
