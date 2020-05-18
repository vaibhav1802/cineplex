import styled from "styled-components"
import { breakpoint } from "styles/variables"

export const MediaDetailsWrapper = styled.div``
export const MediaTopContainer = styled.div`
  position: relative;
  @media (min-width: ${breakpoint.min.large}) {
    height: 70vh;
  }
`
export const MediaPoster = styled.div`
  height: 300px;
  z-index: 0;
  background: ${(props) =>
    `url(${props.backgroundImage}) center top/cover no-repeat`};
  @media (min-width: ${breakpoint.min.large}) {
    width: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
  }
`
export const MediaOverView = styled.div`
  width: 100%;
  z-index: 10;
  @media (min-width: ${breakpoint.min.large}) {
    width: 47%;
    margin-right: 3%;
  }
`

export const Genres = styled.div`
  margin-top: 20px;
`
export const GenreName = styled.span`
  display: inline-block;
  padding: 7px 14px;
  margin: 3px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
`

export const Title = styled.h2`
  margin-top: 0;
`
export const EpisodeRuntime = styled.div``
export const MetaData = styled.div`
  display: inline-block;
  span {
    margin-right: 10px;
  }
`
export const MediaMoreInfo = styled.div`
  margin-top: 17px;
  @media (min-width: ${breakpoint.min.large}) {
    width: 50%;
  }
`
export const MediaInfo = styled.div`
  margin: 4%;
  @media (min-width: ${breakpoint.min.large}) {
    display: flex;
  }
`
export const Languages = styled.span`
  display: inline-block;
  margin-right: 10px;
`

export const OtherSeasons = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`

export const SeasonPoster = styled.div`
  width: 92px;
  height: 160px;
  margin: 15px 15px 0 0;
  img {
    display: block;
    height: 88%;
  }
`
export const SeasonName = styled.span`
  display: inherit;
  text-align: center;
`
export const EmptyPoster = styled.div`
  height: 130px;
  width: 92px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  padding: 10px;
  display: flex;
  align-items: center;
  text-align: center;
`

export const MediaDetailsBtnWrapper = styled.div`
  display: flex;
  button {
    margin-right: 20px;
  }
`

export const TrailerWrapper = styled.div`
  position: relative;
  max-width: 100%;
  height: 0;
  overflow: hidden;
  background: #000;
  padding-bottom: 56.25%;
  margin-top: 20px;
  iframe {
    position: absolute;
    border: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
  }
`
