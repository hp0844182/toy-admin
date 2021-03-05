import React, { useState, createElement, ReactHTML } from "react";
import { useElementCssClass, IBaseSetting } from "src/hooks/useElementCssClass";
import { IAlertSetting } from "./type";

export interface AlertProps {
  setting?: IAlertSetting;
  closeble?: boolean;
  timeout?: number;
  closeIcon?: React.ReactElement;
}

const defaultSettng: IAlertSetting = {
  fixedClasses: {
    wrapper:
      "relative flex items-center p-16 border-l-4 rounded shadow-sm text-16",
    body: "flex-grow",
    close:
      "absolute relative flex items-center justify-center ml-16 flex-shrink-0 w-16 h-16 transition duration-100 ease-in-out rounded  focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
    closeIcon: "fill-current h-16 w-16",
  },
  classes: {
    wrapper: "bg-blue-100 border-blue-500",
    body: "text-blue-700",
    close: "text-blue-500 hover:bg-blue-200",
  },
  variants: {
    danger: {
      wrapper: "bg-red-100 border-red-500",
      body: "text-red-700",
      close: "text-red-500 hover:bg-red-200",
    },
    success: {
      wrapper: "bg-green-100 border-green-500",
      body: "text-green-700",
      close: "text-green-500 hover:bg-green-200",
    },
  },
};

export const Alert: React.FunctionComponent<AlertProps> = (props) => {
  const { closeble, children, closeIcon } = props;
  const [localShow, setShow] = useState(true);
  const { getElementCssClass } = useElementCssClass({
    ...props,
    setting: defaultSettng,
  });
  const hide = () => {
    setShow(false);
  };
  if (!localShow) {
    return null;
  }
  return (
    <div className={getElementCssClass("wrapper")}>
      <div className={getElementCssClass("body")}>{children}</div>
      {closeble ? (
        <button
          onClick={hide}
          type="button"
          className={getElementCssClass("close")}
        >
          {closeIcon || (
            <svg
              className={getElementCssClass("closeIcon")}
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              />
            </svg>
          )}
        </button>
      ) : null}
    </div>
  );
};
