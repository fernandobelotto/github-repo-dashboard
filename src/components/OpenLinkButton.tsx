import { ExternalLinkIcon } from '@chakra-ui/icons'
import { IconButton, Link as ChakraLink } from '@chakra-ui/react'
import React from 'react'

type Props = {
    href: string
}

const OpenLinkButton = (props: Props) => {
  return (
    <IconButton
    as={ChakraLink}
    aria-label="Open Repo"
    size="xs"
    icon={<ExternalLinkIcon />}
    href={props.href}
    isExternal
  />
  )
}

export default OpenLinkButton