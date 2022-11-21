import { Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { DarkMode } from '../components/DarkMode'
import Repos from '../components/Repos'

import Counter from '../features/counter/Counter'

const IndexPage: NextPage = () => {
  return (
      <Container maxW="container.xl">
        <DarkMode />
        <Repos />
      </Container>
  )
}

export default IndexPage
