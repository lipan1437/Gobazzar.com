import React, { Component } from "react";
import Slider from "react-slick";
import "../css/trending.css";
import { View } from "./view";

const data = [
  {
    img: "https://teja10.kuikr.com/i6/20230220/Canon-EOS-200D-mark-2-with-warranty-guarantee-and-all-kit-with-lens-VB201705171774173-ak_WBP1704076250-1676898925.png",
    name: "Canon-EOS-200D-mark-2-with-warranty ",
    day: "11 day ago",
    rs: "8000",
    location: "bankura",
  },
  {
    img: "https://teja10.kuikr.com/i6/20230220/Canon-EOS-200D-mark-2-with-warranty-guarantee-and-all-kit-with-lens-VB201705171774173-ak_WBP1704076250-1676898925.png",
    name: "Canon-EOS-200D-mark-2-with-warranty ",
    day: "11 day ago",
    rs: "8000",
    location: "bankura",
  },
  {
    img: "https://teja8.kuikr.com/i6/20230215/PS4-pro-with-controllers-and-games-with-all-kit-contact-8860-195723-VB201705171774173-ak_WBP1745696054-1676449310.png",
    name: "PS4-pro-with-controllers-and-games",
    day: "11 day ago",
    rs: "7500",
    location: "bankura",
  },
  {
    img: "https://teja10.kuikr.com/i4/20230215/PS4-pro-with-controllers-and-games-with-all-kit-contact-8860-195723-VB201705171774173-ak_WBP1580410749-1676448958.png",
    name: "PS4-pro-with-controllers-and-games",
    day: "11 day ago",
    rs: "7500",
    location: "bankura",
  },
  {
    img: "https://teja8.kuikr.com/i4/20230215/Nikon-D5600-with-all-kit-with-lens-contact-8860-195723-VB201705171774173-ak_WBP2065394808-1676443138.png",
    name: "Nikon-D5600-with-all-kit-with-lens",
    day: "11 day ago",
    rs: "20000",
    location: "bankura",
  },
  {
    img: "https://teja8.kuikr.com/i6/20230215/Nikon-D5600-with-all-kit-with-lens-contact-8860-195723-VB201705171774173-ak_WBP2095209752-1676444457.png",
    name: "Nikon-D5600-with-all-kit-with-lens",
    day: "11 day ago",
    rs: "10999",
    location: "bankura",
  },
  {
    img: "https://teja10.kuikr.com/i6/20230202/--8958190232---WhatsApp-me-for-information-Sony-Bravia-55-inches-4K-Ultra-HD-KD-55X75K--warranty-VB201705171774173-ak_LWBP106801868-1675326904.png",
    name: "Sony-Bravia-55-inches-4K-Ultra-HD",
    day: "11 day ago",
    rs: "9990",
    location: "bankura",
  },
  {
    img: "https://teja10.kuikr.com/i4/20230127/Videocon-Refrigerator-VB201705171774173-ak_LWBP1226395293-1674811933.png",
    name: "Videocon-Refrigerator",
    day: "11 day ago",
    rs: "6000",
    location: "bankura",
  },
  {
    img: "https://teja9.kuikr.com/i5/20230124/---7428905949----whatsapp-me-for-details-LG-10-Kg-Inverter-Fully-Automatic-Top-Loading-Washing-Machine--T10SJSS1Z--Free-Silver--VB201705171774173-ak_LWBP1896858232-1674555075.jpeg",
    name: "LG-10-Kg-Inverter",
    day: "11 day ago",
    rs: "8999",
    location: "bankura",
  },
];
export default class Electronics extends Component {
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
            backgroundColor: "white"
          }}
        >
          <p style={{ fontSize: "20px" }}>Electronics & Applicance</p>
          <Slider {...settings} >
            {data.map((e, i) => {
              return (
                <div key={i}>
                  <View key={i + 1} name={e.name} img={e.img} category={e.category} rs={e.rs} location={e.location} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}