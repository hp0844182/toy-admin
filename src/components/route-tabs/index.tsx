import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import { makeStyles } from "@material-ui/styles";
// const styles = makeStyles()
export interface RouteTabProps {}
const RouteTab: React.FunctionComponent<RouteTabProps> = (props) => {
  // start、end scrollBar show or hide
  const [displayScroll, setDisplayScroll] = React.useState({
    start: false,
    end: false,
  });
  return (
    <div className="bg-white flex  border-t">
      <div className="flex items-center  px-2 py-1 shadow-md rounded-sm ml-2 cursor-pointer">
        nav1
        <CloseCircleOutlined className="ml-1 hover:text-red-500" />
      </div>
      <div className="flex items-center px-2  shadow-lg rounded-md ml-2 bg-blue-600 text-white cursor-pointer">
        nav1
        <CloseCircleOutlined className="ml-1 hover:text-red-500" />
      </div>
    </div>
  );
};
export default RouteTab;
