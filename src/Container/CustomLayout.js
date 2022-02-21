import React from 'react';
import { Layout, Menu } from 'antd';

const { Header, Sider, Content, Footer } = Layout;

const CustomLayout = (props) => {
    return (
        <Layout>
            <Sider>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    
                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0, textAlign: "center" }}>
                    <h1>Swapi</h1>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Created by me
                </Footer>
            </Layout>
        </Layout>
    );
};

export default CustomLayout;