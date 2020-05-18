import * as Styled from "./MediaCollection.styled"
import { formatCollectionName } from "utilities/mediaDataParsing"
import Button from "components/elements/Button/Button.component"
import { IconChevron } from "components/elements/Icon/Icon.component"
import GridMediaTile from "components/elements/GridMediaTile/GridMediaTile.component"

const MediaCollection = (props) => {
  const {
    mediaCollectionData,
    mediaType,
    collectionId,
    pageNumber,
    loadMediaCollection,
    totalPages
  } = props

  return (
    <Styled.MediaCollectionWrapper>
      <Styled.CollectionTitle>
        {formatCollectionName(collectionId)} COLLECTION
      </Styled.CollectionTitle>
      {mediaCollectionData?.length > 0 && (
        <GridMediaTile
          mediaCollectionData={mediaCollectionData}
          mediaType={mediaType}
        />
      )}

      {pageNumber < totalPages && (
        <Styled.LoadMoreBtn>
          <Button onClickHandler={loadMediaCollection}>
            Show More <IconChevron width={20} height={20} />
          </Button>
        </Styled.LoadMoreBtn>
      )}
    </Styled.MediaCollectionWrapper>
  )
}

export default MediaCollection
