import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { makeStyles } from "@material-ui/styles";
import UserAvatar from "./components/user-avatar";
import Global from "./components/global";

const { Header, Content, Sider } = Layout;
const useStyles = makeStyles({
  trigger: {
    lineHeight: "48px",
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
    <Layout className="basic-layout">
      <Sider
        breakpoint="lg"
        collapsedWidth="48"
        trigger={null}
        collapsed={collapsed}
        className="h-screen"
        width={208}
      >
        <div className="h-8 my-4  flex  justify-center whitespace-no-wrap overflow-hidden">
          <img
            className="h-8"
            src={`${process.env.PUBLIC_URL}/images/logo.svg`}
            alt="logo"
          />
          {collapsed ? null : (
            <h1
              className={`text-white text-lg font-bold ml-3 transition-opacity delay-1000 `}
            >
              Toy Admin
            </h1>
          )}
        </div>
        <Menu
          collapsedWidth={0}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          className="w-full"
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            nav 4
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="bg-white h-12 flex items-center justify-between"
          style={{ padding: 0 }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: `${classes.trigger} h-12 ml-4 mt-0 text-lg cursor-pointer transition-colors  hover:text-green-500`,
              onClick: toggle,
            }
          )}
          <div className="mr-4 flex items-center">
            <UserAvatar src="" name="" />
            <Global />
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div className="bg-white" style={{ padding: 24, minHeight: 360 }}>
            content
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default BasicLayout;
