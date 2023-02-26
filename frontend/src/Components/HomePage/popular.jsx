import  { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "./box";
const data = [
  {
    key: "electronics",
    img: "https://teja8.kuikr.com/escrow/assets/image/assured_landing_page/all_electonics_desktop.png",
    category: "All Electronics",
  },
  {
    key: "tv",
    img: "https://teja8.kuikr.com/escrow/assets/image/certified_landing_page/led-tv.png",
    category: "Tvs",
  },
  {
    key: "laptop",
    img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/laptops.png",
    category: "Laptops",
  },
  {
    key: "air conditioner",
    img: "https://teja8.kuikr.com/escrow/assets/image/certified_landing_page/electronics/air-conditioner.png",
    category: "Air Conditioners",
  },
  {
    key: "speaker",
    img: "https://teja8.kuikr.com/escrow/assets/image/certified_landing_page/electronics/speakers.png",
    category: "Speakers",
  },
  {
    key: "gaming",
    img: "https://teja8.kuikr.com/escrow/assets/image/assured_landing_page/Gaming_Consoles_desktop.png",
    category: "Gaming Consoles",
  },
  {
    key: "refrigerator",
    img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/refrigerator.png",
    category: "Refrigerator",
  },
  {
    key: "rcliners",
    img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Recliners_desktop.png",
    category: "Rcliners",
  },
  {
    key: "office",
    img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/office-furnitures.png",
    category: "Office Furnitures",
  }
];


// export default class Popular extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }

export default class Popular extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div >
        <Slider {...settings}>
        {
          data.map((el,i)=>(
            <Box img={el.img} category={el.category} />
          ))
        }
        </Slider>
      </div>
    );
  }
}



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",background:"gray"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",background:"gray"}}
      onClick={onClick}
    />
  );
}