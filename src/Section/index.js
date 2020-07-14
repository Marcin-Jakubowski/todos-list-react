import React from "react";
import "./style.css"

const Section = ({ title, body, extraHeaderContent }) => (
  <div className="section">
    <div className="section__container">
      <h2 className="section__header">{title}</h2>
      {extraHeaderContent}
    </div>
    {body}
  </div>
);

export default Section;