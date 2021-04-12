export const ArrowBack: React.FC<React.SVGAttributes<SVGSVGElement> & { size?: number }> = ({
  size = 24,
  ...props
}) => (
  // <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   viewBox="0 0 512 512"
  //   width={size}
  //   height={size}
  //   {...props}
  // >
  //   <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 00283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" />
  // </svg>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
  </svg>
  // <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
);
