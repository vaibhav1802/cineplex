import * as Styled from "./Header.styled"
import Link from "next/link"
import InputSearchBar from "components/elements/InputSearchBar/InputSearchBar.component"
const Header = (props) => {
  const { inputValue, onChangeSearchInput, onIconCloseClick } = props
  return (
    <Styled.HeaderWrapper>
      <Styled.LinkWrapper>
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
      </Styled.LinkWrapper>
      <InputSearchBar
        inputValue={inputValue}
        onChangeSearchInput={onChangeSearchInput}
        onIconCloseClick={onIconCloseClick}
      />
    </Styled.HeaderWrapper>
  )
}
export default Header
