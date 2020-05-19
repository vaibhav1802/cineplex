import styled from "styled-components"
import { breakpoint } from "styles/variables"
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
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media (min-width: ${breakpoint.min.medium}) {
    width: auto;
    justify-content: flex-end;
  }
`
export const HeaderLink = styled.div`
  a {
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    @media (min-width: ${breakpoint.min.medium}) {
      margin-left: 30px;
    }
  }
`
export const SearchLink = styled.span`
  display: inline-block;
  cursor: pointer;
  @media (min-width: ${breakpoint.min.medium}) {
    display: none;
  }
`

export const InputSearchNonMobile = styled.div`
  display: none;
  @media (min-width: ${breakpoint.min.medium}) {
    display: block;
  }
`

export const InputSearchMobile = styled.div`
  display: none;

  &.show-search {
    padding: 0 4%;
    display: block;
    margin-bottom: 10px;
    @media (min-width: ${breakpoint.min.medium}) {
      display: none;
    }
  }
  @media (min-width: ${breakpoint.min.medium}) {
    display: none;
  }
`
