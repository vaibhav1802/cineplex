import styled from "styled-components"
export const HeaderWrapper = styled.header`
  width: 100%;
  height: 55px;
  padding: 1% 4%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: #e50914;
    font-size: 20px;
    font-weight: 700;
  }
`
export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const HeaderLink = styled.div`
  a {
    margin-left: 30px;
    color: #fff;
    font-weight: 400;
    font-size: 14px;
  }
`
