import React from "react";
import { Outlet } from "react-router";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { useMediaQuery, useTheme } from "@mui/material";

function App() {
  const theme = useTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {isWideScreen ? (
        <>
          <Header />
          <Nav />
          <Outlet />
          <Footer />
        </>
      ) : (
        <>
          <Header />
          <Outlet />
          <Nav />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
