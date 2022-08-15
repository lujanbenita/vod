import Image from "next/image";
import { DataCardProps } from "@components/cards/card.types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchDataMovie } from "src/hooks/reactQuery/useReactQuery";
import { URL_IMAGES } from "src/utils/constants";

const MovieDetail = () => {
  const { query } = useRouter();
  const movieId = query.id;

  const [dataMovie, setDataMovie] = useState<DataCardProps | undefined>();
  console.log("dataMovie", dataMovie);

  useEffect(() => {
    (async () => {
      const data = await fetchDataMovie(movieId);
      setDataMovie(data);
    })();
  }, []);

  if (dataMovie === undefined) return "Loading";

  return (
    dataMovie !== undefined && (
      <div>
        <Image
          src={URL_IMAGES + dataMovie.backdrop_path}
          width={1920}
          height={720}
          layout="intrinsic"
          quality={65}
        />

        <div></div>
      </div>
    )
  );
};

export default MovieDetail;
