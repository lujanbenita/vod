import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchDataMovie, fetchDataMovieCredits } from "src/hooks/reactQuery/useReactQuery";
import { URL_IMAGES } from "src/utils/constants";
import { InfoCardHeadContainer, TagsGenres, TitleCard } from "./card.styled";
import { DataCardHeadProps, dataItem } from "./card.types";

const CardHead = ({ data }: DataCardHeadProps) => {
  const [dataMovie, setDataMovie] = useState<dataItem | undefined>();

  useEffect(() => {
    const dataFetch = async () => {
      const feching = await fetchDataMovie(data.id);
      setDataMovie(feching);
    };
    dataFetch();
  }, []);

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
