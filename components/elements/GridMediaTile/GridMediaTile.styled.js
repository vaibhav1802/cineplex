import styled from "styled-components"
import { breakpoint } from "styles/variables"

export const GridMediaTileContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`

export const MediaTile = styled.div`
  width: calc(100% / 3);
  padding: 0 10px 10px 0;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
  @media (min-width: ${breakpoint.min.medium}) {
    width: 20%;
  }
  @media (min-width: ${breakpoint.min.large}) {
    width: calc(100% / 6);
  }
`
