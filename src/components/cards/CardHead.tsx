import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchDataMovie } from "src/hooks/reactQuery/useReactQuery";
import { URL_IMAGES } from "src/utils/constants";
import { InfoCardHeadContainer, TagsGenres, TitleCard } from "./card.styled";

export interface dataProp {
  data: dataItem;
}
export interface dataItem {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

const CardHead = ({ data }: dataProp) => {
  const [dataMovie, setDataMovie] = useState<dataItem | undefined>();

  useEffect(() => {
    const dataFetch = async () => {
      const feching = await fetchDataMovie(data.id);
      setDataMovie(feching);
    };
    dataFetch();
  }, []);

  console.log("dataMovie", dataMovie);

  return (
    <div>
      <Image
        src={URL_IMAGES + data.backdrop_path}
        width={1920}
        height={720}
        layout="intrinsic"
        quality={65}
      />
      {dataMovie && (
        <InfoCardHeadContainer>
          <TitleCard>{dataMovie.title}</TitleCard>
          <div>
            <span>
              {dataMovie.release_date} | {dataMovie.runtime} min
            </span>

            {dataMovie.genres != undefined &&
              dataMovie.genres.map((item) => <TagsGenres>{item.name}</TagsGenres>)}
          </div>
          <p>{dataMovie.overview}</p>
        </InfoCardHeadContainer>
      )}
    </div>
  );
};

export default CardHead;
