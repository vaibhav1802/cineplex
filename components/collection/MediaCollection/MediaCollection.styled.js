import styled from "styled-components"

export const MediaCollectionWrapper = styled.div`
  padding: 1% 4%;
`
export const CollectionTitle = styled.h4`
  margin-top: 0;
`
export const MediaCollectionContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`

export const MediaTile = styled.div`
  width: 200px;
  margin: 0 10px 10px 0;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`

export const LoadMoreBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  svg {
    transform: rotate(90deg);
    top: 6px;
    position: relative;
  }
`
