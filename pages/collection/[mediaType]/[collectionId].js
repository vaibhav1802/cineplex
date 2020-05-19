import { useEffect, useState } from "react"
import fetch from "isomorphic-fetch"
import { BASE_API_URL, API_KEY } from "api_config"
import { useRouter } from "next/router"
import MediaCollection from "components/collection/MediaCollection/MediaCollection.component"

// This is a collection page for showing either tv or movies collection like upcoming, featured etc
const MediaCollectionPage = (props) => {
  const router = useRouter()
  const { query } = router
  const [mediaCollectionData, setMediaCollectionData] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const mediaType = query.mediaType
  const collectionId = query.collectionId

  async function loadMediaCollection() {
    if (mediaType && collectionId && pageNumber <= totalPages) {
      const RESP_MEDIA_COLLECTION = await fetch(
        `${BASE_API_URL}${mediaType}/${collectionId}?api_key=${API_KEY}&page=${pageNumber}`
      )
      const json_now_media_collection = await RESP_MEDIA_COLLECTION.json()

      setMediaCollectionData([
        ...mediaCollectionData,
        ...json_now_media_collection.results
      ])

      setTotalPages(json_now_media_collection.total_pages)
      setPageNumber(pageNumber + 1)
    }
  }

  useEffect(() => {
    if (!props.mediaCollectionData?.id) {
      loadMediaCollection()
    }
  }, [])

  if (mediaType && collectionId && mediaCollectionData) {
    return (
      <MediaCollection
        mediaCollectionData={mediaCollectionData}
        mediaType={mediaType}
        collectionId={collectionId}
        pageNumber={pageNumber}
        loadMediaCollection={loadMediaCollection}
        totalPages={totalPages}
      />
    )
  }
  return null
}

MediaCollectionPage.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return { mediaCollectionData: {} }
  }
  try {
    const { query } = ctx
    const RESP_MEDIA_COLLECTION = await fetch(
      `${BASE_API_URL}${query.mediaType}/${query.collectionId}?api_key=${API_KEY}`
    )
    const json_now_media_collection = await RESP_MEDIA_COLLECTION.json()
    return {
      mediaCollectionData: json_now_media_collection
    }
  } catch (err) {
    console.log(err, "API Call failed for media collection")
  }
}

export default MediaCollectionPage
