import React, { useState } from "react";
import { useElementCssClass } from "src/hooks/useElementCssClass";
import { IInputSetting } from "./type";

export interface AlertProps {
  setting?: IInputSetting;
  id?: string;
  value?: string;
  defaultValue?: number;
  className?: string;
  attrs?: React.InputHTMLAttributes<HTMLInputElement>;
  variants?: "danger" | "success";
}

const defaultSettng: IInputSetting = {
  fixedClasses:
    "block w-full px-12 py-8 transition duration-100 ease-in-out border rounded shadow-sm focus:shadow-outline  focus:outline-none  disabled:opacity-50 disabled:cursor-not-allowed",
  classes:
    "text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ",
  variants: {
    variants: {
      danger: "border-red-300 bg-red-50 placeholder-red-200 text-red-900",
      success:
        "border-green-300 bg-green-50 placeholder-gray-400 text-green-900",
    },
  },
};

export const Input: React.FunctionComponent<AlertProps> = (props) => {
  const { id, attrs = {}, className = "" } = props;
  const { getElementCssClass } = useElementCssClass({
    ...props,
    setting: defaultSettng,
  });
  return (
    <input
      {...attrs}
      id={id}
      className={getElementCssClass("", "", className)}
      // className="focus:shadow-md"
      type="input"
    />
  );
};
