import { useState } from "react"
import Swiper from "react-id-swiper"
import MediaTile from "components/elements/MediaTile/MediaTile.component"
import "@/styles/swiper"
import * as Styled from "./MediaCarousel.styled"
import { IconChevron } from "components/elements/Icon/Icon.component"
import Link from "next/link"

const getParamForSlider = () => {
  return {
    slidesPerView: 2,
    spaceBetween: 15,
    breakpoints: {
      500: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 5
      },
      1024: {
        slidesPerView: 7,
        slidesPerGroup: 7,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 8,
        slidesPerGroup: 8
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  }
}

const MediaCarousel = (props) => {
  const [swiper, updateSwiper] = useState(null)
  const [hoverClass, updateClass] = useState("hide")
  const {
    title,
    collection,
    type,
    disableHover,
    sameMediaType,
    subTitle
  } = props

  const getAnchorContent = (title) => {
    return (
      <Styled.CollectionTitle>
        {title && (
          <Styled.CarouselTitle>
            {title}

            {!disableHover && (
              <Styled.ExploreAll className={hoverClass}>
                Explore All{" "}
                <Styled.ChevronWrapper>
                  <IconChevron width={12} height={12} />
                </Styled.ChevronWrapper>
              </Styled.ExploreAll>
            )}
          </Styled.CarouselTitle>
        )}
        {subTitle && (
          <Styled.CarouselSubtitle>
            <Link
              href={`collection/[mediaType]/[mediaid]`}
              as={`collection/${type}/${collection}`}
            >
              <a>{subTitle}</a>
            </Link>
          </Styled.CarouselSubtitle>
        )}
      </Styled.CollectionTitle>
    )
  }

  return (
    <Styled.MediaCarouselWrapper>
      <Styled.MediaTitle>
        <Styled.AnchorWrapper
          onMouseEnter={() => updateClass("showInfo")}
          onMouseLeave={() => updateClass("hide")}
        >
          {type && collection ? (
            <Link
              href={`collection/[mediaType]/[mediaid]`}
              as={`collection/${type}/${collection}`}
            >
              {getAnchorContent(title)}
            </Link>
          ) : (
            getAnchorContent(title)
          )}
        </Styled.AnchorWrapper>
      </Styled.MediaTitle>
      <Styled.MediaContent>
        <Swiper {...getParamForSlider()} getSwiper={updateSwiper}>
          {props.results.length > 0 &&
            props.results.map((mediaItem, index) => (
              <Styled.MediaItem key={index}>
                <MediaTile
                  {...mediaItem}
                  type={type}
                  sameMediaType={sameMediaType}
                />
              </Styled.MediaItem>
            ))}
        </Swiper>
      </Styled.MediaContent>
    </Styled.MediaCarouselWrapper>
  )
}

export default MediaCarousel
