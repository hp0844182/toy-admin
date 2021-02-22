import React, { useState, createElement, ReactHTML } from "react";
import { IAlertSetting } from "./type";

export interface AlertProps {
  setting?: IAlertSetting;
  tagName: keyof ReactHTML;
  bodyTagName: keyof ReactHTML;
  dismissible: boolean;
  show: boolean;
  timeout: number;
}

export const Alert: React.FunctionComponent<AlertProps> = (props) => {
  const { setting, show, tagName = "div" } = props;
  const [localShow, SetShow] = useState(show);

  const render = () => {
    if (!localShow) {
      return null;
    }
    return createElement("div");
  };
  return render();
};
