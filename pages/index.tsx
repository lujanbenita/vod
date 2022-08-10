import { FC } from "react";
import { Wrapper, Header, Main } from "@components";
import GlobalStyle from "@styles/globalStyles";
import UseReactQuery, {
  fetchDataTheatres,
  fetchDataTrendingDay,
} from "src/hooks/reactQuery/useReactQuery";

import SectionList from "@components/list/SectionList";
import SectionHeadList from "@components/list/SectionHeadList";

const Home: FC = () => {
  const { data: dataTheatres } = UseReactQuery("fetchDataTheatres", fetchDataTheatres);
  const { data: trendingDay } = UseReactQuery("fetchDataTrendingDay", fetchDataTrendingDay);

  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <SectionHeadList data={trendingDay} />

      <SectionList title={"Cinema"} data={dataTheatres} />
      <Main />
    </Wrapper>
  );
};

export default Home;
