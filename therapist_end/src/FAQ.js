import React, { Fragment } from "react";
import Faq from "react-faq-component";
import data from "./data";
import "./css/FAQ.css";

export default function FAQ() {
  return (

    <div class="box">
        
    <Fragment>
        
       
      
      <Faq
          
        data={data}
        styles={{
          bgColor: "white",
          titleTextColor: "#48482a",
          rowTitleColor: "#78789a",
          rowTitleTextSize: "large",
          rowContentColor: "#48484a",
          rowContentTextSize: "16px",
          rowContentPaddingTop: "10px",
          rowContentPaddingBottom: "10px",
          rowContentPaddingLeft: "50px",
          rowContentPaddingRight: "150px",
          arrowColor: "red"
        }}
        config={{
          animate: true
        }}
      />
      
     
    </Fragment>
    </div>
  );
}