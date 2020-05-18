import * as Styled from "./GridMediaTile.styled"
import Link from "next/link"

const GridMediaTile = (props) => {
  const { mediaCollectionData, mediaType, customMessage } = props

  return (
    <Styled.GridMediaTileContainer>
      {mediaCollectionData?.length > 0 &&
        mediaCollectionData.map((mediaItem, index) => (
          <Styled.MediaTile key={index}>
            <Link
              href={`/[mediaType]/[mediaid]`}
              as={`/${mediaItem.mediaType || mediaType}/${mediaItem.id}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w200/${mediaItem.poster_path}`}
                alt={mediaItem.title}
              />
            </Link>
          </Styled.MediaTile>
        ))}
      {mediaCollectionData.length === 0 && (
        <div>
          <h3>{customMessage}</h3>
        </div>
      )}
    </Styled.GridMediaTileContainer>
  )
}

export default GridMediaTile
