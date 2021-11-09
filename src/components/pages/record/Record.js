import React from "react";
import "../../../App.css";
import { useNavigate } from "react-router-dom";

function Record(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="records">
        <div className="record_container">
          <a
            href="#"
            class="previous round"
            onClick={() => {
              navigate(-1);
            }}
          >
            &#8249;
          </a>
          <h1 className="record_tittle">{props.tittle}</h1>
          <a href={props.link} className="record_link" target="_blank">
            <div className="record_mini">
              <img className="record_img" src={props.src} />
            </div>
          </a>
          <p className="record_description">{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default Record;
