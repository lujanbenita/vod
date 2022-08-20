import Image from "next/image";
import React from "react";
import {
  ContainerCastItem,
  ContainerSection,
  ItemCast,
} from "src/pages/detailMovie/detailMovie.style";
import { URL_IMG_CAST } from "src/utils/constants";

const filterCrew = (data: DataMovieCredits[]) => {
  const filterData = {
    producer: false,
    director: false,
    writer: false,
  };

  for (const item of data) {
    if (item.job === "Producer") filterData.producer = true;
    if (item.job === "Director") filterData.director = true;
    if (item.job === "Writer") filterData.writer = true;
  }
  return filterData;
};

type DataMovieCredits = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: Department;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  credit_id: string;
  department: Department;
  job: string;
};

type dataMovieCreditsProps = {
  dataMovieCredits: DataMovieCredits;
};

enum Department {
  Acting = "Acting",
  Art = "Art",
  Camera = "Camera",
  CostumeMakeUp = "Costume & Make-Up",
  Crew = "Crew",
  Directing = "Directing",
  Editing = "Editing",
  Production = "Production",
  Sound = "Sound",
  VisualEffects = "Visual Effects",
  Writing = "Writing",
}

const SectionCrew = ({ dataMovieCredits }: dataMovieCreditsProps) => {
  return (
    <ContainerSection>
      <h3>Equipo</h3>

      {dataMovieCredits !== undefined && filterCrew(dataMovieCredits).producer && (
        <>
          <h4>Productores</h4>
          <ContainerCastItem>
            {dataMovieCredits
              .filter((item) => item.job === "Producer")
              .map((item) => (
                <ItemCast>
                  <Image src={URL_IMG_CAST + item.profile_path} width={138} height={175} />

                  <p>
                    <b>{item.name}</b>
                  </p>
                </ItemCast>
              ))}
          </ContainerCastItem>
        </>
      )}

      {dataMovieCredits !== undefined && filterCrew(dataMovieCredits).director && (
        <>
          <h4>Director</h4>
          <ContainerCastItem>
            {dataMovieCredits
              .filter((item) => item.job === "Director")
              .map((item) => (
                <ItemCast>
                  <Image src={URL_IMG_CAST + item.profile_path} width={138} height={175} />

                  <p>
                    <b>{item.name}</b>
                  </p>
                </ItemCast>
              ))}
          </ContainerCastItem>
        </>
      )}

      {dataMovieCredits !== undefined && filterCrew(dataMovieCredits).writer && (
        <>
          <h4>Escritores</h4>
          <ContainerCastItem>
            {dataMovieCredits
              .filter((item) => item.job === "Writer")
              .map((item) => (
                <ItemCast>
                  <Image src={URL_IMG_CAST + item.profile_path} width={138} height={175} />
                  <p>
                    <b>{item.name}</b>
                  </p>
                </ItemCast>
              ))}
          </ContainerCastItem>
        </>
      )}
    </ContainerSection>
  );
};

export default SectionCrew;
