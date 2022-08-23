import Image from "next/image";
import { DataCardProps } from "@components/cards/card.types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchDataMovie, fetchDataMovieCredits } from "src/hooks/reactQuery/useReactQuery";
import { URL_IMAGES } from "src/utils/constants";
import {
  ContainerImage,
  ContainerInfo,
  ContainerInfoMovie,
} from "src/pages/detailMovie/detailMovie.style";
import SectionCast from "@components/list/SectionCast";
import SectionCrew from "@components/list/SectionCrew";

// TODO : GET /movie/{movie_id}/recommendations
// /movie/{movie_id}/videos
// /movie/{movie_id}/watch/providers
const MovieDetail = () => {
  const { query } = useRouter();
  const movieId = query.id;

  const [dataMovie, setDataMovie] = useState<DataCardProps | undefined>();
  const [dataMovieCredits, setDataMovieCredits] = useState<dataItem | undefined>();

  useEffect(() => {
    (async () => {
      const data = await fetchDataMovie(movieId);
      if (data.id !== undefined) {
        const fechingCredits = await fetchDataMovieCredits(data.id);
        setDataMovieCredits(fechingCredits);
      }

      setDataMovie(data);
    })();
  }, [dataMovie?.id]);

  if (dataMovie === undefined) return "Loading";

  return (
    dataMovie !== undefined && (
      <>
        <ContainerInfoMovie>
          <h1>{dataMovie.title}</h1>
          <h3>{dataMovie.tagline}</h3>
          <ContainerImage>
            <Image
              src={URL_IMAGES + dataMovie.backdrop_path}
              width={1920}
              height={720}
              layout="intrinsic"
              quality={65}
            />
          </ContainerImage>
          <ContainerInfo>
            <p>Puntuación de usuario : {dataMovie.vote_average}</p>
            <p>duración : {dataMovie.runtime}</p>
            <p>Presupuesto : {dataMovie.budget}</p>
            <p>Recaudación : {dataMovie.revenue}</p>
          </ContainerInfo>
        </ContainerInfoMovie>
        <div>
          <h2>Sipnosis</h2>
          <p>{dataMovie.overview}</p>
        </div>
        <SectionCast dataMovieCredits={dataMovieCredits.cast} />
        <SectionCrew dataMovieCredits={dataMovieCredits.crew} />
      </>
    )
  );
};

export default MovieDetail;
