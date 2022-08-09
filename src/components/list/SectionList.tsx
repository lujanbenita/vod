import Card from "@components/cards/Card";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const responsive = {
  0: { items: 2 },
  568: { items: 3 },
  1024: { items: 8 },
};

type PostDetialsProps = {
  title: string;
  data: {
    page: number;
    results: Result[];
    total_pages: number;
    total_results: number;
  };
};

type Result = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title?: string;
  original_language: OriginalLanguage;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: MediaType;
  genre_ids: number[];
  popularity: number;
  release_date?: Date;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
  original_name?: string;
  first_air_date?: Date;
  origin_country?: string[];
};

enum MediaType {
  Movie = "movie",
  Tv = "tv",
}

enum OriginalLanguage {
  En = "en",
  Ja = "ja",
  Ko = "ko",
}

const SectionList = ({ title, data }: PostDetialsProps) => {
  return (
    <section>
      <h4>{title}</h4>
      <AliceCarousel
        responsive={responsive}
        paddingLeft={20}
        paddingRight={50}
        disableDotsControls
        items={data?.results.map((item: Result) => (
          <Card data={item} />
        ))}
      />
    </section>
  );
};

export default SectionList;
