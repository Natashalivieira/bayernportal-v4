import React from 'react';
import { homeObjOne } from './Data';
import SearchArea from "../../Components/SearchArea/SearchArea";
import ScrollableLinks from "../../Components/ScrollableLinks/ScrollableLinks";
import IntroSection from "../../Components/IntroSection/IntroSection";
import Services from "../../Components/Services/Services";
import Updates from "../../Components/Updates/Updates";
import News from "../../Components/News/News";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <>
      <SearchArea {...homeObjOne} />
      <ScrollableLinks />
      <IntroSection {...homeObjOne}/>
      <Services {...homeObjOne}/>
      <Updates {...homeObjOne}/>
      <News {...homeObjOne}/>
      <Footer />
    </>
  );
}

export default Home;