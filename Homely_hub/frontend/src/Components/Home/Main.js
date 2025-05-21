//importing react library from react in to this js file.
import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
//Arrow function
const Main = () => {
  return (
    <div>
      {/*rendering the Header,Footer Component and outlets*/}

      <Header/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default Main