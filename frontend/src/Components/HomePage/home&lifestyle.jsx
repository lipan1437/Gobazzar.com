import React, { Component } from "react";
import Slider from "react-slick";
import "../css/trending.css";
import { View } from "./view";

const data = [
  {
    img: "https://teja8.kuikr.com/i5/20230218/Unused-new-products-VB201705171774173-ak_LWBP253564906-1676717725.png",
    name: "Unused new products ",
    day: "11 day ago",
    rs: "20000",
    location: "bankura",
  },
  {
    img: "https://teja8.kuikr.com/i5/20230209/All-coin-rate-is-15000-VB201705171774173-ak_LWBP156790261-1675954522.png",
    name: "All coins rate 15000 ",
    day: "11 day ago",
    rs: "15000",
    location: "bankura",
  },
  {
    img: "https://teja10.kuikr.com/i6/20230222/maha-rana-pratap-1-rupee-coin-VB201705171774173-ak_LWBP1688882879-1677045600.jpeg",
    name: "maha-rana-pratap-1-rupee-coin",
    day: "11 day ago",
    rs: "300000",
    location: "bankua",
  },
  {
    img: "https://teja8.kuikr.com/i5/20230214/113-years-old-coin-VB201705171774173-ak_WBP1626692023-1676378260.jpeg",
    name: "113-years-old-coin",
    day: "11 day ago",
    rs: "200000",
    location: "bankura",
  },
  {
    img: "https://teja8.kuikr.com/i6/20221220/Hero-sprint-Rx1-bicycle-VB201705171774173-ak_LWBP1657175147-1671529165.jpeg",
    name: "Hero-sprint-Rx1-bicycle",
    day: "11 day ago",
    rs: "3500",
    location: "bankura",
  },
  {
    img: "https://teja10.kuikr.com/i4/20220818/Baby-cot-with-mattress-for-sale-VB201705171774173-ak_LWBP1055452692-1660820941.png",
    name: "baby coat",
    day: "11 day ago",
    rs: "2000",
    location: "bankura",
  },
  {
    img: "https://teja8.kuikr.com/i5/20230125/GEORGE-VI-KING-EMPEROR-VB201705171774173-ak_WBP1708856659-1674618045.png",
    name: "GEORGE-VI-KING-EMPEROR",
    day: "11 day ago",
    rs: "3500",
    location: "bankura",
  },
  {
    img: "https://teja9.kuikr.com/i6/20220708/AC-on-Rent-in-Delhi-and-NCR-VB201705171774173-ak_WBP4276370-1657280720.png",
    name: "AC rent in delhi",
    day: "11 day ago",
    rs: "20000",
    location: "bankura",
  },
];
export default class Home extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="home-main">
      <div
        style={{
          // border: "8px solid red",
          width: "80%",
          margin: "auto",
          paddingTop: "20px",
          marginTop: "40px",
          backgroundColor:"white"
        }}
      >
        <p style={{ fontSize: "20px" }}>Home & Lifestyle</p>
        <Slider {...settings} >
          {data.map((e,i) => {
            return (
              <div key={i}>
                <View key={i+1}name={e.name} img={e.img} category={e.category} rs={e.rs} location={e.location}/>
              </div>
            );
          })}
        </Slider>
      </div>
      </div>
    );
  }
}