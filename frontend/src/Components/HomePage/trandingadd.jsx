import React, { Component } from "react";
import Slider from "react-slick";
import "../css/trending.css"
import { background } from "@chakra-ui/react";
 
    const data = [
        {
          img: "https://teja10.kuikr.com/i5/20230211/Apple-I-Pad-935-Model-MD-328LL-A-125-GB-in-excellent-working-condition-VB201705171774173-ak_LWBP257576092-1676097681.jpeg",
          name: "Apple i-pad ",
          day: "11 day ago",
        },
        {
          img: "https://teja10.kuikr.com/i6/20230219/iPod-3rd-Gen-with-excellent-condition-VB201705171774173-ak_LWBP447157286-1676754419.jpeg",
          name: "Air Pod 3rd gen ",
          day: "2 day ago",
        },
        {
          img: "https://teja9.kuikr.com/i4/20230222/iphone-se-2020-nice-condition-VB201705171774173-ak_LWBP1653597915-1677089891.jpeg",
          name: "I phone SE 2020",
          day: "20 mins ago",
        },
        {
          img: "https://teja10.kuikr.com/i5/20220822/Macbook-Pro-8Gb-Ram-Intel-Corei5-Processor-500Gb-Hard-Disk-In-Perfect-Working-Condition-With-Charger-VB201705171774173-ak_LWBP1220686324-1661151214.jpeg",
          name: "mackbook",
          day: "16 day ago",
        },
        {
          img: "https://teja9.kuikr.com/i6/20230205/Samsung-AC-good-condition-urgent-sale-VB201705171774173-ak_WBP823692560-1675592032.png",
          name: "Sumsung AC good condition",
          day: "11 day ago",
        },
        {
          img: "https://teja8.kuikr.com/i6/20230202/Used-motorized-treadmill-at-pristine-condition-VB201705171774173-ak_WBP1553645609-1675321307.png",
          name: "Used Treadmil",
          day: "1 hour ago",
        },
        {
          img: "https://teja10.kuikr.com/i4/20230129/Acer-aspire-one-725--4gb-ram---2-keys-are-broken-but-they-are-functional-All-keys-are-functional-including-trackpad-Windows-10-installed-VB201705171774173-ak_LWBP1424847081-1674993850.jpeg",
          name: "Accer aspire one 725",
          day: "12 day ago",
        },
        {
          img: "https://teja8.kuikr.com/i4/20230202/dining-table-for-sale-VB201705171774173-ak_LWBP85712412-1675318770.png",
          name: "Dining Table for sale",
          day: "11 day ago",
        },
        {
          img: "https://teja10.kuikr.com/i5/20230126/Gaming-pc-with-Gtx-1050ti-graphics-card-and-I5-7500-processor-and-16gb-ram-VB201705171774173-ak_LWBP1706126182-1674734628.png",
          name: "Gaming pc GTX",
          day: "11 day ago",
        },
      ];
      export default class Trending extends Component {
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
            <>
            <div style={{width:"80%",margin:"auto",marginTop:"30px",backgroundColor:"white",cursor:"pointer"}}>
             <p style={{fontSize:"20px"}}>Trendind Ads</p>
              <Slider {...settings} 
              style={{ width: "100%", }}
              >             
                  {data.map((el,i)=>{     
                      return<div key={i+1}style={{border:"9px solid blue"}}><img style={{width:"80%",height:"200px"}}src={el.img}/>
                      <p style={{color:"black",overflow:"hidden",marginRight:"50px",fontWeight:"bold"}}>{el.name}</p>
                      <p style={{textAlign:"center",color:"gray"}}>{el.day}</p>
                      </div>
                  })}             
              </Slider>
            </div>
            </>
          );
        }
      }

