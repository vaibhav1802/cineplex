import React, { useEffect, useState } from "react"
import fetch from "isomorphic-fetch"
import { BASE_API_URL, API_KEY } from "api_config"
import { useRouter } from "next/router"

const MediaDetails = () => {
  const router = useRouter()
  const { query } = router
  const [mediaInfo, setMediaInfo] = useState(null)
  const mediaType = query.mediaType
  const mediaId = query.mediaid

  useEffect(() => {
    async function loadMediaDetails() {
      console.log(mediaType, mediaId)
      if (mediaType && mediaId) {
        const RESP_MEDIA_DETAILS = await fetch(
          `${BASE_API_URL}${mediaType}/${mediaId}?api_key=${API_KEY}`
        )
        const json_now_media_details = await RESP_MEDIA_DETAILS.json()
        console.log(json_now_media_details, "json")
        setMediaInfo(json_now_media_details)
      }
    }

    loadMediaDetails()
  }, [])

  return (
    <>
      <h1>{mediaInfo && mediaInfo.title}</h1>
    </>
  )
}

export default MediaDetails
