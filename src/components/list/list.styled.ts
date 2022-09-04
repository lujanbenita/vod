import styled from "styled-components";

export const SectionHeadListStyle = styled.section`
  position: relative;

  .alice-carousel__dots {
    position: absolute;
    bottom: 6rem;
    left: 0;
    right: 0;
  }

  .alice-carousel__next-btn {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 6rem;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;

    &:hover path {
      stroke: #f04505 !important;
    }
  }

  .alice-carousel__prev-btn {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 6rem;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;

    &:hover path {
      stroke: #f04505 !important;
    }
  }

  .alice-carousel__next-btn-wrapper,
  .alice-carousel__prev-btn-wrapper,
  .alice-carousel__next-btn-item,
  .alice-carousel__prev-btn-item {
    height: 100%;
    width: 5rem;
    display: flex;
    align-items: center;
  }
  .alice-carousel__prev-btn {
    svg {
      transform: rotate(90deg);
    }
  }

  .alice-carousel__next-btn {
    svg {
      transform: rotate(-90deg);
      path {
        stroke: white !important;
      }
    }
  }
`;

export const ContainerList = styled.section`
  h4 {
    padding-left: 2rem;
    font-size: 2rem;
    line-height: 2rem;
  }
`;
