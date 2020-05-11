import React from "react"
import Link from "next/link"
import * as Styled from "./AnchorLink.styled"

const AnchorLink = (props) => {
  return (
    <Link href={`[mediaType]/[mediaid]`} as={props.path}>
      <Styled.Anchor>{props.children}</Styled.Anchor>
    </Link>
  )
}

export default AnchorLink
