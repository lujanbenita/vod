import Image from "next/image";
import { ContainerCard } from "./card.styled";
import { IMAGE_URL } from "src/utils/constants";
import { DataCardProps } from "./card.types";
import { useRouter } from "next/router";

const Card = ({ data }: DataCardProps) => {
  const router = useRouter();

  const handleCardClick = (data) => {
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
