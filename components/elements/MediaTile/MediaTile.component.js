import AnchorLink from "components/elements/AnchorLink/AnchorLink.component"
import * as Styled from "./MediaTile.styled"

export default class MediaTile extends React.PureComponent {
  getContent(poster_path, title) {
    return (
      <Styled.BoxConatiner>
        <img
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt={title}
        />
      </Styled.BoxConatiner>
    )
  }

  render() {
    const { id, poster_path, title, type, sameMediaType } = this.props
    return (
      <Styled.MediaTileWrapper>
        <AnchorLink
          id={id}
          type={type}
          sameMediaType={sameMediaType}
          children={this.getContent(poster_path, title)}
        ></AnchorLink>
      </Styled.MediaTileWrapper>
    )
  }
}
