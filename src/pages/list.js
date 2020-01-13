import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const List = () => {
  const data = useStaticQuery(
    graphql`
      query ListQuery {
        allFile {
          edges {
            node {
              id
              name
              relativePath
              publicURL
              dir
            }
          }
        }
      }
    `
  );
  const { allFile: { edges } } = data;
  return (
    <table border='1'>
      <thead>
        <tr>
          <th>文件名</th>
          <th>所属目录</th>
          <th>预览地址</th>
        </tr>
      </thead>
      <tbody>
        {
          edges.map(item => (
            <Fragment key={item.node.id}>
              <tr>
                <td>{item.node.relativePath}</td>
                <td>{item.node.dir.split('/').pop()}</td>
                <td>
                  {
                    typeof window !== `undefined`
                    ?  <a 
                    rel="noopener noreferrer"
                    target='_blank'
                    href={`${window.location.origin}${item.node.publicURL}`}>{`${window.location.origin}${item.node.publicURL}`}
                  </a>
                    : <span></span>
                  }
                </td>
              </tr>
            </Fragment>
          ))
        }
      </tbody>
    </table>
  )
}

export default List;