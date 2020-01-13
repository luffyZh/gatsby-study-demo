import React from 'react';
import { graphql } from 'gatsby';

export const data = graphql`
  query QueryPageData {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

console.log(data, 888);

const QueryPage = ({ data }) => {
  console.log(data, 999);
  const { site: { siteMetadata } } = data;
  return <div>
    <h1>queryData</h1>
    <h2>siteMetaData:</h2>
    <p>title: {siteMetadata.title}</p>
    <p>description: {siteMetadata.description}</p>
    <p>author: {siteMetadata.author}</p>
  </div>
};

export default QueryPage;