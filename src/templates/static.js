import React from 'react';
import { graphql } from 'gatsby';

export const data = graphql`
  query {
    sitePage(path: {eq: "/node-static"}) {
      id
      context {
        title
        content
      }
    }
  }
`;

export default (props) => {
  const { pageContext: { title, content } } = props;
  return (
    <>
      <h1>{title}</h1>
      <p>{content}</p>
    </>
  )
};