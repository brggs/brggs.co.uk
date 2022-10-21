import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout pageTitle="404: Not found">
    <div className="md:max-w-prose mx-auto">
      <h1 className="pt-10 pb-2 font-bold text-3xl md:text-4xl text-sky-300 text-center">
        404
      </h1>
      <p>
        This page does not exist. Please return to the{' '}
        <Link to={`/`}>home page</Link>.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
