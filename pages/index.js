import React from "react"
import Head from "next/head"
import styled from "styled-components"
import fetch from "isomorphic-fetch"
import FeaturedCarousel from "components/collection/FeaturedCarousel/FeaturedCarousel.component"
import MediaCarousel from "components/collection/MediaCarousel/MediaCarousel.component"
import Footer from "components/elements/Footer/Footer.component"
import "@/styles/global"
import {
  NOW_PLAYING_URL,
  TOP_RATED_URL,
  UPCOMING_URL,
  TV_TOP_RATED_URL
} from "api_config"

const SplashPageWrapper = styled.div``

// This is home page for the app
export default class Storefront extends React.PureComponent {
  static async getInitialProps({ req }) {
    try {
      const [
        RESP_NOW_PLAYING,
        RESP_TOP_RATED,
        RESP_UPCOMING,
        RESP_TV_TOP_RATED
      ] = await Promise.all([
        fetch(NOW_PLAYING_URL),
        fetch(TOP_RATED_URL),
        fetch(UPCOMING_URL),
        fetch(TV_TOP_RATED_URL)
      ])
      const json_now_playing = await RESP_NOW_PLAYING.json()
      const json_top_rated = await RESP_TOP_RATED.json()
      const json_upcoming = await RESP_UPCOMING.json()
      const json_tv_top_rated = await RESP_TV_TOP_RATED.json()
      return {
        nowPlayingCollection: json_now_playing.results,
        topRatedCollection: json_top_rated.results,
        upcomingCollection: json_upcoming.results,
        tvTopRatedCollection: json_tv_top_rated.results
      }
    } catch (err) {
      console.log(err, "API Call failed on storefront")
    }
  }

  render() {
    const {
      nowPlayingCollection,
      topRatedCollection,
      upcomingCollection,
      tvTopRatedCollection
    } = this.props

    return (
      <>
        <Head>
          <title>CINEPLEX STOREFRONT</title>
        </Head>
        <SplashPageWrapper>
          {/* Featured Carousel Collection */}
          {topRatedCollection && topRatedCollection.length > 0 && (
            <FeaturedCarousel results={topRatedCollection} type={"movie"} />
          )}

          {/* Other category movie and tv collection */}
          {nowPlayingCollection && nowPlayingCollection.length > 0 ? (
            <MediaCarousel
              type={"movie"}
              results={nowPlayingCollection}
              title="Now Playing"
              collection="now_playing"
              subTitle={"View All"}
            />
          ) : (
            <div className="storefront-loading">Loading Icon</div>
          )}
          {upcomingCollection && upcomingCollection.length > 0 ? (
            <MediaCarousel
              type={"movie"}
              results={upcomingCollection}
              title="Upcoming"
              collection="upcoming"
              subTitle={"View All"}
            />
          ) : (
            <div className="storefront-loading">Loading Icon</div>
          )}
          {tvTopRatedCollection && tvTopRatedCollection.length > 0 ? (
            <MediaCarousel
              type={"tv"}
              results={tvTopRatedCollection}
              title="Top Rated TV Shows"
              collection="top_rated"
              subTitle={"View All"}
            />
          ) : (
            <div className="storefront-loading">Loading Icon</div>
          )}
          <Footer />
        </SplashPageWrapper>
      </>
    )
  }
}
