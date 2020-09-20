import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { makeStyles } from "@material-ui/styles";

const { Header, Content, Footer, Sider } = Layout;
const useStyles = makeStyles({
  trigger: {
    lineHeight: "4rem",
  },
});
export interface BasicLayoutProps {}
const BasicLayout: React.FunctionComponent<BasicLayoutProps> = (props) => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        collapsed={collapsed}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapse, type) => {
          console.log(collapse, type);
        }}
        className="h-screen"
      >
        <div className="h-8 bg-gray-700 m-4" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
          <Menu.Item key="4">nav 4</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="bg-white " style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: `${classes.trigger} ml-4 text-lg cursor-pointer transition-colors duration-300 hover:text-green-500`,
              onClick: toggle,
            }
          )}
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div className="bg-white" style={{ padding: 24, minHeight: 360 }}>
            content
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default BasicLayout;
