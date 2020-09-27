import React from "react";
import { Menu, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

export interface GlobalProps {}
const Global: React.FunctionComponent<GlobalProps> = (props) => {
  const menu = (
    <Menu>
      <Menu.Item key="zh">
        <div className="flex items-center text-gray-900">中文</div>
      </Menu.Item>
      <Menu.Item key="en">
        <div className="flex items-center text-gray-900">English</div>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <div className="h-12 flex items-center hover:bg-gray-200 cursor-pointer">
        <GlobalOutlined className="text-gray-900 px-2  " />
      </div>
    </Dropdown>
  );
};
export default Global;
