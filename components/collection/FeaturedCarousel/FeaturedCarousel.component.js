import Swiper from "react-id-swiper"
import * as Styled from "./FeaturedCarousel.styled"
import AnchorLink from "components/elements/AnchorLink/AnchorLink.component"
import Button from "components/elements/Button/Button.component"
import { IconInformation } from "components/elements/Icon/Icon.component"
import { TruncateText } from "utilities/truncate"

const getParamForSlider = () => {
  return {
    slidesPerView: 1,
    autoHeight: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  }
}

const FeaturedCarousel = (props) => {
  const { results, type } = props
  return (
    <Styled.FeaturedCarouselWrapper>
      <Swiper {...getParamForSlider()}>
        {results &&
          results.length > 0 &&
          results.map((mediaItem, index) => (
            <Styled.FeaturedItem key={index}>
              <Styled.FeaturedImage
                backgroundImage={`https://image.tmdb.org/t/p/w1280/${mediaItem.poster_path}`}
              ></Styled.FeaturedImage>
              <Styled.FeatureMediaInfo>
                <h2>{mediaItem.title}</h2>
                <p>{TruncateText(mediaItem.overview)}</p>
                {mediaItem.vote_average && (
                  <div>
                    Rating{" "}
                    <Styled.MediaInfoRating>
                      {mediaItem.vote_average}
                    </Styled.MediaInfoRating>
                  </div>
                )}
                <AnchorLink type={type} id={mediaItem.id}>
                  <Button>
                    <Styled.MoreInfo>
                      <IconInformation width={16} height={16} />
                      More Info
                    </Styled.MoreInfo>
                  </Button>
                </AnchorLink>
              </Styled.FeatureMediaInfo>
            </Styled.FeaturedItem>
          ))}
      </Swiper>
    </Styled.FeaturedCarouselWrapper>
  )
}

export default FeaturedCarousel
