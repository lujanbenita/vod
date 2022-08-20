import styled from "styled-components";

export const ContainerInfoMovie = styled.div`
  display: flex;
  background-color: #212121;
  flex-wrap: wrap;
  color: white;

  h1,
  h3 {
    width: 100%;
    margin: 0;
  }
`;

export const ContainerImage = styled.div`
  width: 50%;
`;

export const ContainerInfo = styled.div`
  padding: 1rem;
  color: white;
`;

export const ContainerCastItem = styled.div`
  position: relative;
  display: flex;

  &:after {
    content: "";
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #fff 100%);
    will-change: opacity;
    pointer-events: none;
  }
`;

export const ContainerSection = styled.div`
  padding: 2rem 0;
  overflow: overlay;

  h3 {
    font-size: 2.4rem;
  }
`;

export const ItemCast = styled.div`
  max-width: 138px;
  margin-right: 1rem;
  border: 1px solid rgb(227, 227, 227);
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);

  & > span {
    width: 138px !important;
    height: 175px !important;
  }

  img {
    background: url(/images/fallback-image.jpg);
    background-position-x: 50%;
  }

  p {
    padding: 0 0.8rem;
  }
`;
