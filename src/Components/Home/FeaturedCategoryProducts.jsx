import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../Common/ProductCard';
import { Col } from 'antd';




export const FeaturedCategoryProducts = () => {

    const data = useSelector((state) => state.homeData.featuredCategoryProductData);
console.log(data);
    return (data || []).map((e, index) => {
        return (
            <Col xs={12} sm={12} md={8} lg={6} xl={4} key={index}>
                <ProductCard data={e} />
            </Col>
        );
    })
}