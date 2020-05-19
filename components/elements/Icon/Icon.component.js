const SVG = ({
  style = {},
  width = "32",
  height = "32",
  className = "",
  viewBox = "0 0 32 32",
  children
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {children}
  </svg>
)

export const IconChevron = (props) => (
  <SVG viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.70365 0L0 1.7512 5.59271 7.5 0 13.24724 1.70365 15 9 7.5z"
    />
  </SVG>
)

export const IconInformation = (props) => (
  <SVG viewBox="0 0 30 30" {...props}>
    <path
      fill="currentColor"
      d="M15.7 19.8c-.4 0-.7-.1-.8-.2-.2-.1-.2-.4-.2-.8 0-.1 0-.4.1-.6.1-.3.1-.5.2-.8l.8-2.8c.1-.3.1-.5.2-.8v-.6c0-.6-.2-1.1-.6-1.4-.4-.4-1-.5-1.7-.5-.4 0-.9.1-1.3.2-.5.1-1 .3-1.5.5l-.2.9c-.1-.2.1-.2.3-.3.2-.1.4-.1.6-.1.4 0 .7.1.8.2.1.1.2.4.2.7 0 .2 0 .4-.1.7 0 .2-.1.5-.2.8l-.8 2.8c.1.3 0 .5 0 .8v.7c0 .6.2 1 .6 1.4.4.4 1 .6 1.8.6.5 0 .9-.1 1.3-.2.3-.2.8-.4 1.4-.6l.2-.9c-.1.1-.3.1-.5.2-.2 0-.5.1-.6.1m-.5-10.1c.5 0 1-.2 1.3-.5.4-.3.6-.8.6-1.2 0-.5-.2-.9-.6-1.2-.3-.5-.7-.7-1.3-.7-.5 0-1 .2-1.3.5-.4.4-.6.8-.6 1.3s.2.9.6 1.2c.4.4.8.6 1.3.6"
    />
    <circle
      cx="14"
      cy="14"
      r="13"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </SVG>
)

export const IconSearch = (props) => (
  <SVG viewBox="0 0 30 30" {...props}>
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      transform="translate(10 10)"
    >
      <circle cx="-2" cy="-2" r="7" />
      <path strokeLinecap="round" d="M3.2 3.2l6 6" />
    </g>
  </SVG>
)

export const IconClose = (props) => (
  <SVG viewBox="0 0 30 30" {...props}>
    <path
      fill="currentColor"
      d="M3.6.6L20 17 36.4.6c.8-.8 2.2-.8 3 0 .8.8.8 2.2 0 3L23 20l16.4 16.4c.8.8.8 2.2 0 3-.8.8-2.2.8-3 0L20 23 3.6 39.4c-.8.8-2.2.8-3 0-.8-.8-.8-2.2 0-3L17 20 .6 3.6c-.8-.8-.8-2.2 0-3 .8-.8 2.2-.8 3 0z"
      class="st0"
    />
  </SVG>
)
