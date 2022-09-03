import Image from "next/image";
import { ContainerCard } from "./card.styled";
import { IMAGE_URL } from "src/utils/constants";
import { DataCardProps } from "./card.types";
import { useRouter } from "next/router";

type DataProps = {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id: any;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: Date;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};

const Card = ({ data }: DataCardProps) => {
  const router = useRouter();

  const handleCardClick = (data: DataProps) => {
    router.push(`/movie/${data.id}`);
  };

  return (
    <ContainerCard onClick={() => handleCardClick(data)}>
      <Image src={IMAGE_URL + data.poster_path} width={220} height={330} />
      <p>{data.title}</p>
    </ContainerCard>
  );
};

export default Card;
