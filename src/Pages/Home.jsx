import React from "react";
import Header from "../Components/Common/Header";
import ProductBanner from "../Components/Home/BannerCarousel";
import { Col, Row, Tabs } from "antd";
import { BestSellingProducts } from "../Components/Home/BestSellingProducts";
import useHomeDataFetch from "../customHooks/Home/homeDataHandler";
import { FeaturedCategoryProducts } from "../Components/Home/FeaturedCategoryProducts";
import Title from "antd/es/typography/Title";


export const Home = () => {
  useHomeDataFetch();
  return (
    <div>
      <Header />
      <div className="commonContainerFluid banner text-center">
        <ProductBanner />
      </div>
      <div className="commonContainerFluid py-3">
        <Row gutter={16}>
          <BestSellingProducts />
        </Row>
      </div>
      <div className="bg-light">
        <div className="commonContainerFluid py-3">
          <Title level={2} className="text-center">Featured Products</Title>
          <Row gutter={16}>
            <FeaturedCategoryProducts />
          </Row>
        </div>
      </div>

      <div className="commonContainerFluid py-3">
        <Tabs
          defaultActiveKey="1"
          centered
          items={new Array(3).fill(null).map((e, i) => {
            const id = String(i + 1);
            return {
              label: `Category ${id}`,
              key: id,
              children: <Row gutter={16}><FeaturedCategoryProducts /></Row>,
            };
          })}
        />
      </div>
    </div>
  );
};