import Head from "next/head"
import { useState } from "react"
import * as Styled from "./MediaDetails.styled"
import { getReleaseYear, getRunTime } from "utilities/mediaDataParsing"
import {
  addDataToSessionStorage,
  removeDataFromSessionStorage,
  ifDataAlreadyInList
} from "utilities/dataPersistenceInSession"
import MediaCarousel from "components/collection/MediaCarousel/MediaCarousel.component"
import Button from "components/elements/Button/Button.component"

const MediaDetails = (props) => {
  const {
    id,
    title,
    name,
    backdrop_path,
    poster_path,
    overview,
    genres,
    release_date,
    runtime,
    vote_average,
    spoken_languages,
    seasons,
    episode_run_time
  } = props.mediaData

  const { similarMediaCollection, type, mediaVideos } = props
  const [isTrailerDisplayed, displayTrailer] = useState(false)
  const isMediaAlreadInList = ifDataAlreadyInList(id)
  const [isMediaItemAddedInList, addMediaItemInList] = useState(
    isMediaAlreadInList
  )

  const getGenres = (genres) =>
    genres.map((genre, index) => (
      <Styled.GenreName key={index}>{genre.name}</Styled.GenreName>
    ))

  const getLanguages = (languages) =>
    languages.map((language, index) => (
      <Styled.Languages key={index}>{language.name}</Styled.Languages>
    ))

  const displayOtherSeasons = (seasons) => (
    <Styled.OtherSeasons>
      {seasons.map((season, index) => {
        return (
          <Styled.SeasonPoster key={index}>
            {season.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w92/${season.poster_path}`}
                alt={season.name}
              />
            ) : (
              <Styled.EmptyPoster>
                <span>No poster available</span>
              </Styled.EmptyPoster>
            )}

            <Styled.SeasonName>{season.name}</Styled.SeasonName>
          </Styled.SeasonPoster>
        )
      })}
    </Styled.OtherSeasons>
  )

  const onClickTrailerBtn = () => displayTrailer(!isTrailerDisplayed)

  const renderTrailerVideo = (mediaVideo) => (
    <Styled.TrailerWrapper>
      <iframe
        title="youtube-player"
        src={`https://www.youtube.com/embed/${mediaVideo.key}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`}
        allowFullScreen
      ></iframe>
    </Styled.TrailerWrapper>
  )

  const onClickAddToListBtn = () => {
    if (!isMediaItemAddedInList) {
      addDataToSessionStorage({
        id: id,
        backdrop_path: backdrop_path,
        poster_path: poster_path,
        mediaType: type,
        title: type === "movie" ? title : name
      })
      addMediaItemInList(true)
    } else {
      removeDataFromSessionStorage(id)
      addMediaItemInList(false)
    }
  }

  return (
    <>
      <Head>
        <title>CINEPLEX DETAILS PAGE</title>
      </Head>
      <Styled.MediaTopContainer>
        {!isTrailerDisplayed && (
          <Styled.MediaPoster
            backgroundImage={`https://image.tmdb.org/t/p/w1280/${
              backdrop_path || poster_path
            }`}
          ></Styled.MediaPoster>
        )}

        {isTrailerDisplayed && renderTrailerVideo(mediaVideos[0])}
      </Styled.MediaTopContainer>
      <Styled.MediaInfo>
        <Styled.MediaOverView>
          <Styled.Title>{type === "movie" ? title : name}</Styled.Title>
          {type === "movie" ? (
            <Styled.MetaData>
              <span>{getReleaseYear(release_date)}</span>
              <span>{getRunTime(runtime)}</span>
            </Styled.MetaData>
          ) : null}
          {episode_run_time?.length > 0 && (
            <Styled.EpisodeRuntime>
              Episode Run time: {getRunTime(episode_run_time[0])}
            </Styled.EpisodeRuntime>
          )}

          <p>{overview}</p>
          <Styled.MediaDetailsBtnWrapper>
            {mediaVideos?.length > 0 && mediaVideos[0].site === "YouTube" && (
              <Button onClickHandler={onClickTrailerBtn}>
                {isTrailerDisplayed ? "Hide Trailer" : "Show Trailer"}
              </Button>
            )}
            <Button onClickHandler={onClickAddToListBtn}>
              {isMediaItemAddedInList ? "Remove from List" : "Add to List"}
            </Button>
          </Styled.MediaDetailsBtnWrapper>
        </Styled.MediaOverView>
        <Styled.MediaMoreInfo>
          {vote_average > 0 && <span>Rating: {vote_average}</span>}

          {spoken_languages?.length > 0 && (
            <div>
              Language:{" "}
              {spoken_languages?.length > 0 && getLanguages(spoken_languages)}
            </div>
          )}

          <Styled.Genres>{getGenres(genres)}</Styled.Genres>
          {seasons?.length > 0 && displayOtherSeasons(seasons)}
        </Styled.MediaMoreInfo>
      </Styled.MediaInfo>
      {similarMediaCollection?.results?.length > 0 && (
        <>
          <MediaCarousel
            results={similarMediaCollection.results}
            type={type}
            sameMediaType={true}
            title={type === "movie" ? "Similar Movies" : "Similar TV Series"}
            disableHover={true}
          />
        </>
      )}
    </>
  )
}

export default MediaDetails
