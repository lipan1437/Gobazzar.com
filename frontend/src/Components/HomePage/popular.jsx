import react from "react";
import "../css/popular.css"
import Box from "./box";
import { Link, useParams } from "react-router-dom";
export const Popular = () => {
  const { param } = useParams()

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
  let box = document.querySelector(".product-container");
  console.log(box)

  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };

  return (
    <>
      <div className="popular-main">
        <div className="product-Crousel">
          <p style={{ textAlign: "left", fontWeight: "bold", color: "black", fontSize: "20px" }}> Most Popular Products</p>
          <button onClick={btnpressprev} className="pre">
            <p>&lt;</p>
          </button>
          <button onClick={btnpressnext} className="next">
            <p>&gt;</p>
          </button>

          <div className="product-container" style={{ backgroundColor: "white" }}>
            {data.map((e, i) => {

              return <Link to={`/${e.key}`}>
                <Box key={i + 1} img={e.img} category={e.category} />
              </Link>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};