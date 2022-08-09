import { FC } from "react";
import { Wrapper, Header, Main } from "@components";
import GlobalStyle from "@styles/globalStyles";
import UseReactQuery, {
  fetchDataTheatres,
  fetchDataTrendingDay,
} from "src/hooks/reactQuery/useReactQuery";

import SectionList from "@components/list/SectionList";

const Home: FC = () => {
  const { data: dataTheatres } = UseReactQuery("fetchDataTheatres", fetchDataTheatres);
  const { data: trendingDay } = UseReactQuery("fetchDataTrendingDay", fetchDataTrendingDay);
  console.log("trendingDay", trendingDay.results.slice(0, 10));

  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Main />
      <SectionList title={"Cinema"} data={dataTheatres} />
    </Wrapper>
  );
};

export default Home;
