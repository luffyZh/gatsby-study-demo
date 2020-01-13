import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import iconImage from '../images/gatsby-icon.png'; 
import Img from 'gatsby-image';

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      fixedIconImage: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fluidIconImage: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <h1>静态引入文件</h1>
      <img alt='static' src='/gatsby-icon.png' />
      <h1>import 引入文件</h1>
      <img alt='import' src={iconImage} />
      <h1>fixed 文件</h1>
      <Img alt='fixed' fixed={data.fixedIconImage.childImageSharp.fixed} />
      <h1>fluid 文件</h1>
      <Img alt='fluid' fluid={data.fluidIconImage.childImageSharp.fluid} />
    </div>
  );
}

export default Image;

