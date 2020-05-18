import * as Styled from "./Header.styled"
import Link from "next/link"

const Header = () => {
  return (
    <Styled.HeaderWrapper>
      <Link href="/">
        <a>CINEPLEX</a>
      </Link>
    </Styled.HeaderWrapper>
  )
}
export default Header
