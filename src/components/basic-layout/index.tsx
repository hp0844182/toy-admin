import React, { useState } from "react";
import { Alert } from "src/components/alert";

export interface BasicLayoutProps {
  [p: string]: any;
}
const BasicLayout: React.FunctionComponent<BasicLayoutProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div style={{ width: "100px" }}>
      <Alert closeble>123</Alert>
    </div>
  );
};
export default BasicLayout;
