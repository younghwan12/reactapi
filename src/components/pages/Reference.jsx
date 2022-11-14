import React from "react";
import { useState, useEffect } from "react";        //리엑트에서만 사용하는 변수
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ReferCont from "../include/ReferCont";
import Contact from "../layout/Contact";

// 변수 : 저장, 추가. 변경 --> 자동 변경



const Reference = () => {
  const [references, setReferences] = useState([]);

  useEffect(()=>{
    
    // fetch("https://webstoryboy.github.io/react2022/src/assets/json/refer.json")
    //   .then(response => response.json())
    // // .then(result => console.log(result.data.htmlRefer))
    //   .then(result => setReferences(result.data.htmlRefer))
    //   .catch(error => console.log('error', error));

    fetch("https://younghwan12.github.io/reactapi/src/utils/reference.json")
    .then(response => response.json())
    .then(result => setReferences(result.cssRefer))
    .catch(error => console.log('error', error));
  }, [])
  
  


 
  return (
    <>
      <Header />
      <Contents>
        <Title title={["reference", "book"]} />
        <ReferCont references={references} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Reference;
