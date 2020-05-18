import Link from "next/link"
import * as Styled from "./MediaCollection.styled"
import { formatCollectionName } from "utilities/mediaDataParsing"
import Button from "components/elements/Button/Button.component"
import { IconChevron } from "components/elements/Icon/Icon.component"

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
      <Styled.MediaCollectionContainer>
        {mediaCollectionData?.length > 0 &&
          mediaCollectionData.map((mediaItem, index) => (
            <Styled.MediaTile key={index}>
              <Link
                href={`/[mediaType]/[mediaid]`}
                as={`/${mediaType}/${mediaItem.id}`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w200/${mediaItem.poster_path}`}
                  alt={mediaItem.title}
                />
              </Link>
            </Styled.MediaTile>
          ))}
      </Styled.MediaCollectionContainer>
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
