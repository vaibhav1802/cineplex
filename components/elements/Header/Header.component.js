import * as Styled from "./Header.styled"
import Link from "next/link"
import InputSearchBar from "components/elements/InputSearchBar/InputSearchBar.component"
import { useState, useRef } from "react"

const Header = (props) => {
  const { inputValue, onChangeSearchInput, onIconCloseClick } = props
  const [isInputFieldShown, showInputField] = useState(false)
  const inputRefNonMobile = useRef()

  const onSearchIconClick = () => {
    if (inputValue === "") {
      showInputField(!isInputFieldShown)
      inputRefNonMobile?.current?.focus()
    }
  }
  return (
    <>
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
          <Styled.SearchLink onClick={() => onSearchIconClick()}>
            Search
          </Styled.SearchLink>
        </Styled.LinkWrapper>
        <Styled.InputSearchNonMobile>
          <InputSearchBar
            inputValue={inputValue}
            onSearchIconClick={onSearchIconClick}
            isInputFieldShown={isInputFieldShown}
            onChangeSearchInput={onChangeSearchInput}
            onIconCloseClick={onIconCloseClick}
            inputRef={inputRefNonMobile}
          />
        </Styled.InputSearchNonMobile>
      </Styled.HeaderWrapper>
      <Styled.InputSearchMobile
        className={isInputFieldShown ? "show-search" : ""}
      >
        <InputSearchBar
          inputValue={inputValue}
          onSearchIconClick={onSearchIconClick}
          isInputFieldShown={isInputFieldShown}
          onChangeSearchInput={onChangeSearchInput}
          onIconCloseClick={onIconCloseClick}
        />
      </Styled.InputSearchMobile>
    </>
  )
}
export default Header
