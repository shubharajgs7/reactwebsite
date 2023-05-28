import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{marginTop:"20px",marginBottom:"80px"}}>{children}</div>
      <Footer/>
    </>
  );
};

export default Layout;
