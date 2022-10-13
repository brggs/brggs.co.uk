import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import SEO from "./seo";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="bg-slate-800 text-slate-200 min-h-screen flex flex-col">
      <Header siteTitle={data.site.siteMetadata.title} />
      <SEO title={pageTitle} />
      <main className="md:max-w-screen-md mx-auto px-4 flex-grow">{children}</main>
      <footer className="text-center pt-6 pb-2 text-slate-500">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
