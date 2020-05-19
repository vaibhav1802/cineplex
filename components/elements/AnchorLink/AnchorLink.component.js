import Link from "next/link"
import * as Styled from "./AnchorLink.styled"

const AnchorLink = (props) => {
  const { type, id, sameMediaType } = props

  // Return different anchor path based on from where the link is being called.
  const getRoutingLink = () => {
    return sameMediaType ? (
      <Link href={`[mediaid]`} as={`${id}`}>
        <Styled.Anchor>{props.children}</Styled.Anchor>
      </Link>
    ) : (
      <Link href={`[mediaType]/[mediaid]`} as={`${type}/${id}`}>
        <Styled.Anchor>{props.children}</Styled.Anchor>
      </Link>
    )
  }
  return getRoutingLink()
}

export default AnchorLink
