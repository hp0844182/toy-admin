import React from "react";
import { Avatar, Menu, Dropdown } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

export interface UserAvatarProps {
  src: string;
  name: string;
}
const UserAvatar: React.FunctionComponent<UserAvatarProps> = (props) => {
  const menu = (
    <Menu>
      <Menu.Item>
        <div className="flex items-center text-gray-100">
          <LogoutOutlined className="pr-1" /> 退出登陆
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <div className="flex items-center h-12 px-4 cursor-pointer hover:bg-gray-200 ">
        <Avatar
          size={24}
          src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
        />
        <span className="ml-1 inline-block text-blue-100">王麻子</span>
      </div>
    </Dropdown>
  );
};
export default UserAvatar;
