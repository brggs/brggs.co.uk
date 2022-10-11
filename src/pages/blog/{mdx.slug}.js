import * as React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../../components/layout";
import ComponentsWrapper from "../../components/ComponentsWrapper";

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="md:max-w-prose mx-auto">
        <h1 className="pt-10 pb-2 font-bold text-3xl md:text-4xl text-sky-300">
          {data.mdx.frontmatter.title}
        </h1>
        <p className="text-sm text-slate-400 font-normal pb-4">
          {data.mdx.frontmatter.date} - {data.mdx.timeToRead} min read
        </p>
        <article
          className="prose prose-slate !prose-invert text-justify prose-h2:text-sky-500
         prose-h3:text-sky-200 prose-p:leading-relaxed prose-a:text-sky-400 prose-a:no-underline
          pb-8 prose-li:font-serif"
        >
          <ComponentsWrapper>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </ComponentsWrapper>
        </article>
      </div>
      <hr className="pb-4" />
      <p className="text-slate-300 pb-2">- Andrew Briggs</p>
      <p className="text-slate-300">
        {" "}
        Find out more <Link to={"/"}>about me</Link>, or{" "}
        <Link to={"/blog"}>return to the blog index</Link>.
      </p>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY")
      }
      body
      timeToRead
    }
  }
`;

export default BlogPost;
