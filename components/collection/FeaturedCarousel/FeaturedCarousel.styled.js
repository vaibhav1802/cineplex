import styled from "styled-components"
import { breakpoint } from "styles/variables"

export const FeaturedCarouselWrapper = styled.div`
  .swiper-pagination,
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
    @media (min-width: ${breakpoint.min.large}) {
      display: block;
    }
  }
`
export const FeaturedItem = styled.div`
  position: relative;
`
export const FeaturedImage = styled.div`
  width: 100%;
  height: 56.25vw;
  z-index: 0;
  top: 0;
  background: ${(props) =>
    `url(${props.backgroundImage}) center top/cover no-repeat`};
`
export const FeatureMediaInfo = styled.div`
  padding: 20px;
  background: linear-gradient(270deg, transparent, rgba(0, 0, 0, 0.8));
  @media (min-width: ${breakpoint.min.large}) {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    padding: 50px;
    z-index: 10;
  }
`

export const MediaInfoRating = styled.span`
  display: inline-block;
  padding: 5px;
  border: 1px solid #fff;
`

export const MoreInfo = styled.div`
  svg {
    margin-right: 10px;
    position: relative;
    top: 3px;
  }
`
