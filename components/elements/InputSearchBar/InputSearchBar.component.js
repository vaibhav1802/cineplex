import * as Styled from "./InputSearchBar.styled"
import { IconSearch } from "components/elements/Icon/Icon.component"
const InputSearchBar = (props) => {
  const {
    inputValue,
    onChangeSearchInput,
    onIconCloseClick,
    onSearchIconClick,
    isInputFieldShown,
    inputRef
  } = props

  return (
    <Styled.InputSearchBarWrapper
      className={isInputFieldShown ? "show-border" : ""}
    >
      <Styled.SearchIconWrapper
        className={isInputFieldShown ? "show-search-icon" : ""}
        onClick={() => onSearchIconClick()}
      >
        <IconSearch width={25} height={25} />
      </Styled.SearchIconWrapper>

      <Styled.TextInput
        className={isInputFieldShown ? "show-input" : ""}
        onChange={(e) => onChangeSearchInput(e)}
        type="text"
        innerRef={inputRef}
        placeholder="Search Titles"
        maxLength={80}
        value={inputValue}
      ></Styled.TextInput>

      <Styled.CloseIconWrapper
        onClick={() => onIconCloseClick()}
        className={
          isInputFieldShown && inputValue !== "" ? "show-close-icon" : ""
        }
      ></Styled.CloseIconWrapper>
    </Styled.InputSearchBarWrapper>
  )
}

export default InputSearchBar
