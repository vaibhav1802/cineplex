import * as Styled from "./Button.styled"

const Button = (props) => {
  return (
    <Styled.Button
      onClick={props.onClickHandler ? () => props.onClickHandler() : null}
    >
      {props.children}
    </Styled.Button>
  )
}

export default Button
