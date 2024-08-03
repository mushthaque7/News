import React, { useContext, useState } from "react";
import "./News.css";
import { StoreContext } from "../../Context/StoreContext";
const News = () => {
    const {info} = useContext(StoreContext)
    const [content]  = useState({
        title:"What is Lorem Ipsum",
        explanation:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions o Lorem Ipsum."
    })
  return (
    <div className="container">
      <div className="left-section">
        <div className="top">
          <h2>Breaking News</h2>
          <div className="content">
            <h4>{info.id==1?info.title:content.title}</h4>
            <br />
            <p>{info.id==1?info.explanation:content.explanation}</p>
          </div>
        </div>
        <div className="bottom">
          <h2>Sports News</h2>
          <div className="content">
            <h4>{info.id==2?info.title:content.title}</h4>
            <br />
            <p>{info.id==2?info.explanation:content.explanation}</p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="one">
          <h2>Finance News</h2>
          <div className="content">
            <h4>{info.id==3 ? info.title:content.title}</h4>
            <br />
            <p>{info.id==3 ? info.explanation:content.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
