import styled from "styled-components";

export const ContainerCard = styled.div`
  padding-right: 1rem;
  cursor: pointer;
`;

export const InfoCardHeadContainer = styled.div`
  position: absolute;
  top: 35%;
  left: 8rem;
  width: 50%;
  color: white;

  span {
    font-size: 1.6rem;
  }

  p {
    font-size: 2rem;
  }
`;

export const TagsGenres = styled.span`
  padding: 0.3rem 1rem;
  margin: 0 0.5rem;
  border: 0.1rem solid white;
  text-transform: uppercase;
`;

export const TitleCard = styled.h3`
  margin: 0 0 2rem;
  font-size: 4rem;
  font-weight: 500;
`;
