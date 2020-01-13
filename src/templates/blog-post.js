import React from 'react';

export default (props) => {
  const { pageContext: { html } } = props;
  console.log(html, 666);
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
};