// import { useState } from "react";
// import { useEffect } from "react";
// import axios from "axios";

import Hero from "./Hero/Hero";
import Brands from "./Brands/Brands";

const OurBrands = () => {
  // const [brands, setBrands] = useState([]);
  // const getAllBrands = () => {
  //   axios.get("http://localhost:5555/api/brands/getAll").then((data) => {
  //     data?.data.forEach((el) => console.log(el.description.split("/n")));
  //     setBrands(data?.data);
  //   });
  // };

  // useEffect(() => {
  //   getAllBrands();
  // }, []);

  return (
    <>
      <Hero />
      <Brands />
    </>
  );
};

export default OurBrands;
