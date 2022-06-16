import React , { Component}  from 'react';
import "../style.css";

export default function Info()
{
  return(
    <div className="info">
      <img src={require("../images/business_card_photo.jpg")} className="info-img"/>
      <h2>Finn Jameson</h2>
      <h4>DevOps Engineer</h4>
      <a href="#" className="website">
        http://finnweather.hopto.org/
      </a>
      <div className="button-links">
        <a href="mailto:jayspark57@yahoo.com">
          <button className="fa fa-envelope"> Email</button>
        </a>
        <a href="https://www.linkedin.com/in/finn-jameson-4879a248/">
          <button className="fa fa-linkedin"> LinkedIn</button>
        </a>
      </div>
    </div>
  )
}

/*
<img src={require("../images/business_card_photo.jpg")} className="info-img"/>
*/
