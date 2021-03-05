import React, { useState } from "react";
import { Alert } from "src/components/alert";
import { Input } from "src/components/input";

export interface BasicLayoutProps {
  [p: string]: any;
}
const BasicLayout: React.FunctionComponent<BasicLayoutProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="p-32">
      <div className="mb-12">
        <Alert closeble>123</Alert>
      </div>
      <Input />
    </div>
  );
};
export default BasicLayout;
