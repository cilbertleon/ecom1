import { Avatar, Badge, Card, Col, Dropdown, Flex, Row} from 'antd'

import mainLogo from '../../assets/logo.svg'

import {HeartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

import React from 'react'
import Searchbar from './Searchbar';
import MenuCategory from './MenuCategory';
import Mainmenu from './Mainmenu';
import useHeaderDataFetch from '../../customHooks/Common/headerDataFetching';

const items = [
    {
        key: '1',
        label: (
            <a href="/">
                Dashboard
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a href="/">
                My Orders
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a href="/">
                My Profile
            </a>
        ),
    }, {
        key: '4',
        danger: true,
        label: (
            <a href="/">
                Logout
            </a>
        ),
    },
];
    

const Header = () => {
    // debugger
    useHeaderDataFetch();
    return (
        <div>
            <Card title="" bordered={false} className='header'>
                <div className="commonContainerFluid">
                    <Row>
                        <Col span={8}>
                            <a href="/">
                                <img src={mainLogo} className="logo" alt="logo" height={32} />
                            </a>
                        </Col>
                        <Col span={8}>
                            <Searchbar />
                        </Col>
                        <Col span={8}>
                            <Flex justify='flex-end' align='center' gap='large'>
                                <Dropdown menu={{ items : items }} placement="bottomRight" arrow>
                                    <Avatar
                                        style={{
                                            backgroundColor: '#fde3cf',
                                            color: '#f56a00',
                                        }}
                                        icon={<UserOutlined />}
                                    >
                                        U
                                    </Avatar>
                                </Dropdown>
                                <a href="#">
                                    <Badge count={5}>
                                        <ShoppingCartOutlined style={{ fontSize: '26px', color: '#08c' }} />
                                    </Badge>
                                </a>
                                <a href="#">
                                    <Badge count={5}>
                                        <HeartOutlined style={{ fontSize: '26px', color: '#08c' }} />
                                    </Badge>
                                </a>
                            </Flex>
                        </Col>
                    </Row>
                </div>
            </Card>
            <div className="commonContainerFluid">
                <Row className='pt-3'>
                    <Col span={4}><MenuCategory /></Col>
                    <Col span={20}><Mainmenu /></Col>
                </Row>
            </div>
        </div>
    )
}

export default Header