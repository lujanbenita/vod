import type { ReactNode } from "react";
import styled from "styled-components";

type LayoutProps = {
  children: ReactNode;
};

const Section = styled.section`
  padding: 2rem;
`;

const LayoutContainerPadding = ({ children }: LayoutProps) => {
  return <Section>{children}</Section>;
};

export default LayoutContainerPadding;
