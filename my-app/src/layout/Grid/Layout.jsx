import React from "react";
import Grid from "./srtleGrid";
import Header from "../Header/Header";
import Aside from "../Aside/NewAside";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
const Layout = ({ children }) => {
  return (
    <Grid>
      <Header />
      <Aside />
      <Container>{children}</Container>
    </Grid>
  );
};
export default Layout;
