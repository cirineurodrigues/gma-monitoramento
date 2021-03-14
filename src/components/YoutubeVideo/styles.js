import styled from "styled-components";

export const VideoContainer = styled.div`
  width: 90%;
  margin: 0 auto 60px;

  .youtubeContainer {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;
  }

  .youtubeContainer iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`;
