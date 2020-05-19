import styled from "styled-components"

export const InputSearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  &.show-border {
    border: 1px solid #fff;
  }
`
export const SearchIconWrapper = styled.span`
  display: inline-block;
  cursor: pointer;
  svg {
    position: relative;
    top: 6px;
    left: 10px;
  }
`
export const TextInput = styled.input`
  width: 0;
  padding: 7px 14px 7px 12px;
  background: transparent;
  color: #fff;
  outline: none;
  border: none;
  opacity: 0;
  font-size: 14px;
  transition: all 0.3s ease-out;
  &.show-input {
    opacity: 1;
    width: 200px;
    transition: all 0.3s ease-in;
  }
`

export const CloseIconWrapper = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  cursor: pointer;
  &.show-close-icon {
    width: 25px;
    height: 25px;
    &:before {
      content: "X";
      width: 25px;
      height: 25px;
      display: block;
      text-align: center;
    }
  }
`
