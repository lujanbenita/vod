import CardHead from "@components/cards/CardHead";
import IconArrow from "@components/icons/IconArrow";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { SectionHeadListStyle } from "./list.styled";
import { ResultTrendingData } from "./list.types";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};

const SectionHeadList = ({ data }: ResultTrendingData) => {
  return (
    <SectionHeadListStyle>
      <AliceCarousel
        responsive={responsive}
        infinite
        items={data?.map((item) => (
          <CardHead data={item} />
        ))}
        renderPrevButton={() => {
          return <IconArrow />;
        }}
        renderNextButton={() => {
          return <IconArrow />;
        }}
      />
    </SectionHeadListStyle>
  );
};

export default SectionHeadList;
