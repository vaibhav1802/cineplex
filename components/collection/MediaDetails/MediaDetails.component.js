import * as Styled from "./MediaDetails.styled"
import { getReleaseYear, getRunTime } from "utils/mediaDataParsing"
import MediaCarousel from "components/collection/MediaCarousel/MediaCarousel.component"

const MediaDetails = (props) => {
  const {
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

  const { similarMediaCollection, type } = props

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

  return (
    <>
      <Styled.MediaTopContainer>
        <Styled.MediaPoster
          backgroundImage={`https://image.tmdb.org/t/p/w1280/${
            backdrop_path || poster_path
          }`}
        ></Styled.MediaPoster>
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
              Episode Run time: {getRunTime(episode_run_time)}
            </Styled.EpisodeRuntime>
          )}

          <p>{overview}</p>
        </Styled.MediaOverView>
        <Styled.MediaMoreInfo>
          <span>Rating: {vote_average}</span>
          {spoken_languages && (
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
