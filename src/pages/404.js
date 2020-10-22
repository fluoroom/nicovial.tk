import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const Center = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:100vh;
flex-direction:column;
`
const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <Center>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Center>
  </Layout>
)

export default NotFoundPage
