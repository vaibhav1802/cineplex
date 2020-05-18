import * as Styled from "./Header.styled"
import Link from "next/link"

const Header = () => {
  return (
    <Styled.HeaderWrapper>
      <Link href="/">
        <a>CINEPLEX</a>
      </Link>
      <Styled.HeaderLink>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Styled.HeaderLink>
      <Styled.HeaderLink>
        <Link href="/mylist">
          <a>My List</a>
        </Link>
      </Styled.HeaderLink>
    </Styled.HeaderWrapper>
  )
}
export default Header
