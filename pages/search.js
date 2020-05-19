import GridMediaTile from "components/elements/GridMediaTile/GridMediaTile.component"
import { useEffect, useState } from "react"
import fetch from "isomorphic-fetch"
import { useRouter } from "next/router"
import { BASE_API_URL, API_KEY } from "api_config"
import { Layout } from "styles/global"
import { debounce } from "lodash"

const SearchResults = () => {
  const [resultData, setResultData] = useState([])
  const router = useRouter()
  const { query } = router
  const encodedQueryString = encodeURIComponent(query.keyword)

  async function searchForTitle(queryParamAPI) {
    try {
      const RESP_SEARCH_RESULTS = await fetch(
        `${BASE_API_URL}search/multi?query=${queryParamAPI}&api_key=${API_KEY}&page=1&include_adult=false`
      )
      const json_search_results = await RESP_SEARCH_RESULTS.json()
      if (json_search_results?.results?.length > 0) {
        // Display only tv or movie media type. Remove person media type
        const filteredMedia = json_search_results.results.filter(
          (media) => media.media_type === "movie" || media.media_type === "tv"
        )
        setResultData(filteredMedia)
      }
    } catch (err) {
      console.log(err, "API Call failed on search query")
    }
  }
  useEffect(() => {
    const debouncedFunc = debounce(searchForTitle, 2000)

    if (encodedQueryString !== "") {
      debouncedFunc(encodedQueryString)
    }
  }, [encodedQueryString])

  return (
    <Layout>
      <h3>
        Search Results{" "}
        {`${resultData.length > 0 ? `for ${query.keyword}` : ""}`}
      </h3>

      {resultData.length > 0 && (
        <GridMediaTile
          readMediaFromResult={true}
          mediaCollectionData={resultData}
          customMessage={"Your list is empty."}
        />
      )}
    </Layout>
  )
}

export default SearchResults
