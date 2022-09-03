import { render } from "@testing-library/react";
import { mockDataList, mockDataSectionList } from "src/__mocks__/sectionListData";
import SectionCast from "../SectionCast";
import SectionCrew from "../SectionCrew";
import SectionHeadList from "../SectionHeadList";
import SectionList from "../SectionList";

describe("<SectionList />", () => {
  test("should render the SectionHeadList", () => {
    render(<SectionHeadList data={mockDataList} />);

    const originalTitle = screen.queryByText(/Fall/i);
    const releaseDate = screen.queryByText(/2022-08-11/i);

    expect(originalTitle).toBeInTheDocument();
    expect(releaseDate).toBeInTheDocument();
  });

  test("should render the SectionList", () => {
    render(<SectionList data={mockDataSectionList} title={"Cinema"} />);

    const title = screen.queryByText(/Cinema/i);
    const originalTitle = screen.queryByText(/Thor: Love and Thunder/i);

    expect(title).toBeInTheDocument();
    expect(originalTitle).toBeInTheDocument();
  });

  test("should render the SectionCast", () => {
    render(<SectionCast dataMovieCredits={mockDataSectionList} />);

    const h3 = screen.queryByText(/Reparto/i);
    const nameActor = screen.queryByText(/Chris Pratt/i);

    expect(h3).toBeInTheDocument();
    expect(nameActor).toBeInTheDocument();
  });

  test("should render the SectionCrew", () => {
    render(<SectionCrew dataMovieCredits={mockDataSectionList} />);

    const h4 = screen.queryByText(/Productores/i);
    const nameDirector = screen.queryByText(/Steven Spielberg/i);

    expect(h4).toBeInTheDocument();
    expect(nameDirector).toBeInTheDocument();
  });
});
