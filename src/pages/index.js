import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import './index.css';

export default function Home({ data }) {
  return (
    <header>
      <div id='center-column'>
        <div id='header-logotype'>
          <Img alt='drift type logo in black' fluid={data.file.childImageSharp.fluid} />
        </div>
        <div id='header-subtitle'>
          <h1>Maps, but private</h1>
        </div>
      </div>
    </header>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "drift-logo-black@3x.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
