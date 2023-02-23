import React from "react";
import "./TopsellingStyles.css";

const Topselling = () => {
 
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    var products = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    }
  
  return (
    <div className="main">
      <div className="container">
        <div className="shadow">
          <div className="inside-container1">
            <div>
              <h1>Top Selling Brands</h1>
            </div>
            <div className="but">
              <button>See All</button>
            </div>
          </div>
          <div className="inside-container2">
            <div>
              <img
                src="https://trademarks.justia.com/media/image.php?serial=77976400"
                alt="iphone_logo"
              />
            </div>
            <div>
              <img
                src="https://bl-i.thgim.com/public/incoming/k2uo2t/article66267522.ece/alternates/FREE_1200/samsung.JPG"
                alt="samsung_logo"
              />
            </div>
            <div>
              <img
                src="https://images.wuzzuf-data.net/files/company_logo/Nokia-Egypt-14672.png"
                alt="nokia_logo"
              />
            </div>

            <div>
              <img
                src="https://suntecproject.s3.amazonaws.com/BI/merchant/sponsore/mobile_large/9603-Authorised-MI-Store.jpg"
                alt="mi_logo"
              />
            </div>

            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ia0mK5i1-1FD1O_hbxzTYqlFGDzrnncDtudrQeM_Kw&s"
                alt="motorola_logo"
              />
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQ0UC8nE_QN1m7J1iwQWJ3gE7bktKDmxH-qxJIF0aHpg-48sCHkBIFPFRul_9aPTf8tg&usqp=CAU"
                alt="oneplus_logo"
              />
            </div>
          </div>
        </div>

        <div className="shadow">
          <div className="inside-container3">
            <div>
              <h1>Search For Mobile Phones</h1>
            </div>
            <div className="inside-container1">
              <div>
                <input type="text" placeholder="brand name" />
              </div>
              <div>
                <input type="text" placeholder="model name" />
              </div>
              <div>
                <input type="text" placeholder="price range" />
              </div>
              <div className="search">
                <button>Search Mobile</button>
              </div>
            </div>
          </div>
        </div>

        <div className="crouser">

            <div>
              <img
                src="https://campaign.kuikr.com/qb/covid19/delivery_fur_857x260_pwa.jpg"
                alt="banner1"
              />
            </div>
            <div>
              <img
                src="https://campaign.kuikr.com/qb/covid19/retail_fur_857x260_pwa.jpg"
                alt="banner2"
              />
            </div>
            <div>
              <img
                src="https://campaign.kuikr.com/qb/19june19/wqa_857x260.jpg"
                alt="banner3"
              />
            </div>

        </div>

        <div className="shadow">
          <div className="inside-container3">
            <div>
              <h1>Find Mobile by Budget</h1>
            </div>
            <div className="inside_container4">
              <div className="buget">
                <button>Below ₹ 6,000</button>
              </div>
              <div className="buget">
                <button> ₹ 6,001 - ₹ 10,000</button>
              </div>
              <div className="buget">
                <button> ₹ 10,001 - ₹ 15,000</button>
              </div>
              <div className="buget">
                <button> Above ₹ 15,000</button>
              </div>
              <div className="but">
                <button>See All</button>
              </div>
            </div>
          </div>
        </div>

        <div className="choice">
          <div>
            <h1>Shop By Choice</h1>
          </div>
          <div className="choice_inside">
            <div className="choice_in">
              <img
                src="https://teja8.kuikr.com/escrow/assets/image/category/mobile_tablet/mobiles_choice1.jpg"
                alt="4g_ready"
              />
              <div className="choice_under">
                <h3>4G ready</h3>
                <button>Explore</button>
              </div>
            </div>

            <div className="choice_in">
              <img
                src="https://teja8.kuikr.com/escrow/assets/image/category/mobile_tablet/mobiles_choice2.jpg"
                alt="selfie"
              />
              <div className="choice_under">
                <h3>Selfie phones</h3>
                <button>Explore</button>
              </div>
            </div>

            <div className="choice_in">
              <img
                src="https://teja8.kuikr.com/escrow/assets/image/category/mobile_tablet/mobiles_choice4.jpg"
                alt="greate_battery"
              />
              <div className="choice_under">
                <h3>Greate battery life</h3>
                <button>Explore</button>
              </div>
            </div>

            <div className="choice_in">
              <img
                src="https://teja8.kuikr.com/escrow/assets/image/category/mobile_tablet/mobiles_choice3.jpg"
                alt="high_on_speed"
              />
              <div className="choice_under">
                <h3>High on speed</h3>
                <button>Explore</button>
              </div>
            </div>
          </div>
        </div>
  
<div className="trending_container">
  <div className="main_trending">
    <div>
  <h1>Trending mobile phones</h1>
    </div>
    <div className="but">
  <button>See All</button>
    </div>
  </div>
    <Slider {...products} className="trending">
        <div className="trending_inside">
          <img src="https://teja8.kuikr.com/i5/20230206/IPhone-14pro-max-5gDubai-aaa-high-productcod-available-VB201705171774173-ak_WBP347417281-1675623174.png" alt="iphone_14pro" />
          <h1>Iphone 14pro max 5G</h1>
          <p>₹ 8,999</p>
          <button>View Details</button>
        </div>
        <div className="trending_inside">
          <img src="https://teja9.kuikr.com/i6/20230222/IPhone-14pro-max-5gDubai-aaa-high-productcod-available------Apple-Others-VB201705171774173-ak_WBP1193913827-1677063528.png" alt="iphone_14pro" />
          <h1>Order now holi offer</h1>
          <p>₹ 8,999</p>
          <button>View Details</button>
        </div>
        <div className="trending_inside">
          <img src="https://teja10.kuikr.com/i6/20230222/IPhone-13pro-max-4gDubai-aaa-high-productcod-available-VB201705171774173-ak_WBP1109813213-1677064183.png" alt="" />
          <h1>Iphone 13pro max 4g</h1>
          <p>₹ 4,500</p>
          <button>View Details</button>
        </div>

        <div className="trending_inside">
          <img src="https://teja9.kuikr.com/i5/20230222/IPhone-14pro-max-5gDubai-aaa-high-productcod-available-VB201705171774173-ak_WBP1119509788-1677063596.png" alt="" />
          <h1>Order now holi offer</h1>
          <p>₹ 8,9999</p>
          <button>View Details</button>
        </div>
        <div className="trending_inside">
          <img src="https://teja9.kuikr.com/i4/20230222/IPhone-14pro-max-5gDubai-aaa-high-productcod-available-VB201705171774173-ak_WBP350028888-1677064573.png" alt="" />
          <h1>Order now holi offer</h1>
          <p>₹ 8,999</p>
          <button>View Details</button>
        </div>

    </Slider>
</div>
 


      </div>
    </div>
  );
};

export default Topselling ;
