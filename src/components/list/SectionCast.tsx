import Image from "next/image";
import {
  ContainerCastItem,
  ContainerSection,
  ItemCast,
} from "src/pages/detailMovie/detailMovie.style";
import { URL_IMG_CAST } from "src/utils/constants";

const SectionCast = ({ dataMovieCredits }) => {
  return (
    <ContainerSection>
      <h3>Reparto</h3>
      {dataMovieCredits !== undefined && (
        <ContainerCastItem>
          {dataMovieCredits.cast.map((item) => (
            <ItemCast>
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
