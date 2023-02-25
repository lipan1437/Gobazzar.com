import React from "react";
import "./SinglepageStyles.css";

const Singlepage = () => {


let prodData = JSON.parse(localStorage.getItem("Item")) || [] ;
console.log('prodData', prodData);

  return (
    <div className="main">
      <div>
        <div className="logo">
          <img
            src="https://teja9.kuikr.com/i6/20230224/Apple-Iphone-11-PRO-256-Gb-VB201705171774173-ak_LWBP1435306058-1677184049_lg.webp"
            alt="phone"
          />
        </div>
        {prodData.map((el)=>{
          return (
            <div key={el.id}>
              <img  src={el.src} alt="phone"/> 
            </div>
          )
        })}
        <div className="heading">
          <h1>Ad Details</h1>
        </div>
        <hr />
        <div className="list">
          <ul>
            <li>Ad ID</li>
            <li>Model</li>
            <li>Physical Condition</li>
            <li>Purchase Year</li>
            <li>Invoice</li>
          </ul>
          <ul className="bold">
            <li>364361192</li>
            <li>Others</li>
            <li>Excellent</li>
            <li>2020</li>
            <li>Not Available</li>
          </ul>
          <div class="vl"></div>
          <ul>
            <li>Brand Name</li>
            <li>Location</li>
            <li>Condition</li>
            <li>Also Includes</li>
            <li>Seller Type</li>
          </ul>
          <ul className="bold">
            <li>Apple</li>
            <li>Jalandhar</li>
            <li>Used</li>
            <li>Charger, Data Cable</li>
            <li>Individual</li>
          </ul>
        </div>
        <hr />
        <div className="heading">
          <h1>Description</h1>
        </div>
        <div>
          <p>
            Midnight Green 91% battery health original battery original screen
            original charger with bill original apple silicon cover
          </p>
        </div>
      </div>
      <div className="right_heading">
              {prodData.map((el)=>{
          return (
            <div  className="used" key={el.id}>
                <span>USED</span>
                <li>{el.heading}</li>
            </div>
          )
        })}
         {prodData.map((el)=>{
          return (
            <div key={el.id}>
               <p>{el.title}</p>
               <span>₹{el.price}</span>
            </div>
          )
        })}
        <div className="call">
          <div className="color">
            <button>CALL</button>
          </div>
          <div className="white">
            <button>CHAT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlepage;
