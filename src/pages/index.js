import React from 'react'
import styled from 'styled-components'
import Global from '../utils/Global'

import SignUp from '../components/1-SignUp'
import Checkout from '../components/2-Checkout'

const IndexPage = () => (
  <Site>
    <Global />
    <Title>one hundred blocks</Title>
    <Components>
      {/* <Checkout /> */}
      <SignUp />
    </Components>
  </Site>
)

export default IndexPage

const Site = styled.div`
  font-family: sans-serif;
`

const Title = styled.h1`
  font-size: 4rem;
  padding: 4rem 3vw;
`

const Components = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 90vh);

  div {
  }
`
