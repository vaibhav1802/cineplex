import styled from "styled-components"
export const MediaCarouselWrapper = styled.div`
  padding: 0 4%;
  margin: 3vw 0;
`

export const MediaContent = styled.div``

export const MediaTitle = styled.div`
  margin-bottom: 10px;
  font-size: 1.4vw;
`
export const MediaItem = styled.div``

export const AnchorWrapper = styled.span``

export const CollectionTitle = styled.div``

export const ExploreAll = styled.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 12px;
  transition: opacity 1s, transform 750ms, -webkit-transform 750ms,
    -moz-transform 750ms, -o-transform 750ms;
  &.hide {
    opacity: 0;
  }

  &.showInfo {
    opacity: 1;
    transform: translate(1vw, 0);
  }
`

export const ChevronWrapper = styled.span`
  vertical-align: middle;
  position: relative;
  top: 3px;
  right: -3px;
`
