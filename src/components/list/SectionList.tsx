import Card from "@components/cards/Card";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { PostDetailsProps } from "./list.types";

const responsive = {
  0: { items: 2 },
  568: { items: 3 },
  1024: { items: 8 },
};

const SectionList = ({ title, data }: PostDetailsProps) => {
  return (
    <section>
      <h4>{title}</h4>
      <AliceCarousel
        responsive={responsive}
        paddingLeft={20}
        paddingRight={50}
        disableDotsControls
        items={data?.results.map((item: Result) => (
          <Card data={item} key={item.id} />
        ))}
      />
    </section>
  );
};

export default SectionList;
