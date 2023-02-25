import React, { Component } from "react";
import Slider from "react-slick";
import "../css/trending.css"
import { View } from "./view";
const data = [
  {
    img: "https://teja9.kuikr.com/i5/20230223/Apple-14-Pro-Max-512GB-dual-Sim-Call-9310822013-VB201705171774173-ak_LWBP1851378862-1677128927.jpeg",
    name: "Apple 14 pro max 512gb Ram ",
    day: "11 day ago",
    rs: "5000",
    location: "chennai",
  },
  {
    img: "https://teja9.kuikr.com/i5/20230223/Apple-14-Pro-Max-512GB-dual-Sim-Call-9310822013-VB201705171774173-ak_LWBP1851378862-1677128927.jpeg",
    name: "Apple 14 pro max 512gb Ram ",
    day: "11 day ago",
    rs: "5000",
    location: "mumbai",
  },
  {
    img: "https://teja9.kuikr.com/i5/20230223/Apple-14-Pro-Max-512GB-dual-Sim-Call-9310822013-VB201705171774173-ak_LWBP1851378862-1677128927.jpeg",
    name: "Apple 14 pro max 512gb Ram",
    day: "11 day ago",
    rs: "5000",
    location: "delhi",
  },
  {
    img: "https://teja9.kuikr.com/i5/20230223/Apple-14-Pro-Max-512GB-dual-Sim-Call-9310822013-VB201705171774173-ak_LWBP1851378862-1677128927.jpeg",
    name: "Apple 14 pro max 512gb Ram",
    day: "11 day ago",
    rs: "5000",
    location: "pune",
  },
  {
    img: "https://teja9.kuikr.com/i5/20230223/Apple-14-Pro-Max-512GB-dual-Sim-Call-9310822013-VB201705171774173-ak_LWBP1851378862-1677128927.jpeg",
    name: "Apple 14 pro max 512gb Ram",
    day: "11 day ago",
    rs: "5000",
    location: "kolkata",
  },
  {
    img: "https://teja9.kuikr.com/i5/20230223/Apple-14-Pro-Max-512GB-dual-Sim-Call-9310822013-VB201705171774173-ak_LWBP1851378862-1677128927.jpeg",
    name: "Apple 14 pro max 512gb Ram",
    day: "11 day ago",
    rs: "5000",
    location: "bengalore",
  },
  {
    img: "https://teja10.kuikr.com/i6/20230222/penta-septa-choise-Easy-vip-VVIP-mobile-numbers-VB201705171774173-ak_LWBP1450337891-1677075506.jpeg",
    name: "penta-septa-choise-Easy-vip-VVIP",
    day: "11 day ago",
    rs: "19000",
    location: "chennai",
  },
  {
    img: "https://teja9.kuikr.com/i6/20230222/fancy-vvip-golden-Easy-number-avaialble-VB201705171774173-ak_LWBP1639558481-1677075638.jpeg",
    name: "fancy-vvip-golden-Easy",
    day: "11 day ago",
    rs: "11000",
    location: "chennai",
  },
  {
    img: "https://teja8.kuikr.com/i5/20230223/-8978729749-iPhone-11-64-GB-Refurbished-36-hours-sale-VB201705171774173-ak_LWBP2074639858-1677122344.jpeg",
    name: "iPhone-11-64-GB-Refurbished",
    day: "11 day ago",
    rs: "3500",
    location: "chennai",
  },
  {
    img: "https://teja8.kuikr.com/i5/20230222/Diamond-Numbers-Best-VIP-Mobile-Number-for-sale-Available-in-Prepaid-VB201705171774173-ak_LWBP1210823581-1677074786.jpeg",
    name: "Diamond-Numbers-Best-VIP",
    day: "11 day ago",
    rs: "23000",
    location: "bengalore",
  },
  {
    img: "https://teja9.kuikr.com/i6/20230222/Easy-fancy-choise-number-big-discount-today-all-india-VB201705171774173-ak_LWBP747126713-1677075856.jpeg",
    name: "Easy-fancy-choise-number-big-discount-today-all-india",
    day: "11 day ago",
    rs: "17000",
    location: "bengalore",
  },
];
export default class Mobile extends Component {
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
            width: "80%",
            margin: "auto",
            paddingTop: "20px",
            marginTop: "40px",
            backgroundColor: "white"
          }}
        >
          <p style={{ fontSize: "20px" }}>Mobiles & Tablets</p>
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