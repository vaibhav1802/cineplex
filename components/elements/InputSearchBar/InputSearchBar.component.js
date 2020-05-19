import { useState, useRef } from "react"
import * as Styled from "./InputSearchBar.styled"
import { IconSearch } from "components/elements/Icon/Icon.component"
const InputSearchBar = (props) => {
  const { inputValue, onChangeSearchInput, onIconCloseClick } = props
  const [isInputFieldShown, showInputField] = useState(false)
  const inputRef = useRef()

  const onSearchIconClick = () => {
    if (inputValue === "") {
      showInputField(!isInputFieldShown)
      inputRef?.current?.focus()
    }
  }

  return (
    <Styled.InputSearchBarWrapper
      className={isInputFieldShown ? "show-border" : ""}
    >
      <Styled.SearchIconWrapper onClick={() => onSearchIconClick()}>
        <IconSearch width={25} height={25} />
      </Styled.SearchIconWrapper>

      <Styled.TextInput
        className={isInputFieldShown ? "show-input" : ""}
        onChange={(e) => onChangeSearchInput(e)}
        type="text"
        innerRef={inputRef}
        placeholder="Titles"
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
