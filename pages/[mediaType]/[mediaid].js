import React, { useEffect, useState } from "react"
import fetch from "isomorphic-fetch"
import { BASE_API_URL, API_KEY } from "api_config"
import { useRouter } from "next/router"
import MediaDetails from "components/collection/MediaDetails/MediaDetails.component"

// This page is for showing media details for tv and movie item based on unique id
const MediaDetailsPage = (props) => {
  const router = useRouter()
  const { query } = router
  const [mediaData, setMediaData] = useState(null)
  const [similarMediaCollection, setSimilarMediaCollection] = useState([])
  const [mediaVideos, setMediaVideos] = useState(null)
  const mediaType = query.mediaType
  const mediaId = query.mediaid

  useEffect(() => {
    async function loadMediaDetails() {
      if (mediaType && mediaId) {
        const RESP_MEDIA_DETAILS = await fetch(
          `${BASE_API_URL}${mediaType}/${mediaId}?api_key=${API_KEY}`
        )
        const json_now_media_details = await RESP_MEDIA_DETAILS.json()
        setMediaData(json_now_media_details)
      }
    }

    async function loadSimilarMedia() {
      if (mediaType && mediaId) {
        const RESP_SIMILAR_MEDIA_DETAILS = await fetch(
          `${BASE_API_URL}${mediaType}/${mediaId}/similar?api_key=${API_KEY}`
        )
        const json_similar_media = await RESP_SIMILAR_MEDIA_DETAILS.json()
        setSimilarMediaCollection(json_similar_media)
      }
    }

    async function loadMediaVideos() {
      if (mediaType && mediaId) {
        const RESP_MEDIA_VIDEOS = await fetch(
          `${BASE_API_URL}${mediaType}/${mediaId}/videos?api_key=${API_KEY}`
        )
        const json_media_videos = await RESP_MEDIA_VIDEOS.json()
        setMediaVideos(json_media_videos)
      }
    }

    if (!props.mediaData?.id) {
      loadMediaDetails()
      loadSimilarMedia()
      loadMediaVideos()
    }
  }, [])

  if (mediaType && mediaId && mediaData) {
    return (
      <MediaDetails
        type={mediaType}
        mediaData={mediaData}
        similarMediaCollection={similarMediaCollection}
        mediaVideos={mediaVideos?.results}
      />
    )
  }
  return null
}

MediaDetailsPage.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return { mediaData: {} }
  }
  try {
    const { query } = ctx
    const RESP_MEDIA_DETAILS = await fetch(
      `${BASE_API_URL}${query.mediaType}/${query.mediaId}?api_key=${API_KEY}`
    )
    const json_now_media_details = await RESP_MEDIA_DETAILS.json()
    return {
      mediaData: json_now_media_details
    }
  } catch (err) {
    console.log(err, "API Call failed for media details")
  }
}

export default MediaDetailsPage
