import React from 'react'
import styled from 'styled-components'

export default function StyledComponent() {

    // Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

  return (
    <Wrapper>
        <Title>
        Hello World!
        </Title>
  </Wrapper>
  )
}
