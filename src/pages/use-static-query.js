import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const data = useStaticQuery(graphql`
    query UseStaticQueryData {
      site {
        siteMetadata {
          title,
          description,
          author
        }
      }
    }
  `);
  const { site: { siteMetadata } } = data;
  return (
    <div>
      <h1>UseStaticQueryData</h1>
      <h2>siteMetaData:</h2>
      <p>title: {siteMetadata.title}</p>
      <p>description: {siteMetadata.description}</p>
      <p>author: {siteMetadata.author}</p>
    </div>
  )
}