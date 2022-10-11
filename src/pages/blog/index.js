import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <h1 className="pt-10 pb-4 text-3xl md:text-4xl">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-y-6">
        {data.allMdx.nodes.map((node) => (
          <>
            <article key={node.id} className="md:col-span-4">
              <h2>
                <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
              </h2>
            </article>
            <p className="italic text-right pb-6 md:pb-0">{node.frontmatter.date}</p>
          </>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
