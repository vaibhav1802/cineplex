import React from "react"
import * as Styled from "./Button.styled"

const Button = (props) => {
  return <Styled.Button>{props.children}</Styled.Button>
}

export default Button
