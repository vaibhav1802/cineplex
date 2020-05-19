import AnchorLink from "components/elements/AnchorLink/AnchorLink.component"
import * as Styled from "./MediaTile.styled"
import { EmptyPoster } from "styles/global"

export default class MediaTile extends React.PureComponent {
  getContent(poster_path, title, name) {
    return (
      <Styled.BoxConatiner>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
            alt={title || name}
          />
        ) : (
          <EmptyPoster>No poster available for {title || name}</EmptyPoster>
        )}
      </Styled.BoxConatiner>
    )
  }

  render() {
    const { id, poster_path, title, type, sameMediaType, name } = this.props

    return (
      <Styled.MediaTileWrapper>
        <AnchorLink
          id={id}
          type={type}
          sameMediaType={sameMediaType}
          children={this.getContent(poster_path, title, name)}
        ></AnchorLink>
      </Styled.MediaTileWrapper>
    )
  }
}
