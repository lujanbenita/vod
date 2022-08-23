import Image from "next/image";
import { useRouter } from "next/router";
import {
  ContainerCastItem,
  ContainerSection,
  ItemCast,
} from "src/pages/detailMovie/detailMovie.style";
import { URL_IMG_CAST } from "src/utils/constants";

const SectionCast = ({ dataMovieCredits }) => {
  const router = useRouter();

  const handlePersonClick = (id: string) => {
    router.push(`../person/${id}`);
  };

  return (
    <ContainerSection>
      <h3>Reparto</h3>
      {dataMovieCredits !== undefined && (
        <ContainerCastItem>
          {dataMovieCredits.map((item) => (
            <ItemCast onClick={() => handlePersonClick(item.id)}>
              <Image src={URL_IMG_CAST + item.profile_path} width={138} height={175} />
              <p>
                <b>{item.name}</b>
              </p>
              <p>{item.character}</p>
            </ItemCast>
          ))}
        </ContainerCastItem>
      )}
    </ContainerSection>
  );
};

export default SectionCast;
