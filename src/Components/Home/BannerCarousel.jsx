import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductBanner() {
  const data = useSelector((state) => state.homeData.bannerData);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderSlideData = (data) => {
    return data.map((e,index) => {
      return (
        <div key={index}>
            <img src={`https://black.nikithawebdesign.com/banner-images/${e.desktop_banner}`} className="w-100 rounded" alt={e.title} />
        </div>
      );
    });
  };

  return <Slider {...settings}>{renderSlideData(data)}</Slider>;
}