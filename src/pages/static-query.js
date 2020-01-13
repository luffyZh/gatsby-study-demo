import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const StaticQueryPage = () => (
  <StaticQuery
    query={graphql`
      query StaticQueryPageData {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}
    render={
      data => {
        const { site: { siteMetadata } } = data;
        return <div>
          <h1>StaticQueryData</h1>
          <h2>siteMetaData:</h2>
          <p>title: {siteMetadata.title}</p>
          <p>description: {siteMetadata.description}</p>
          <p>author: {siteMetadata.author}</p>
        </div>
      }
    }
  />
);

export default StaticQueryPage;