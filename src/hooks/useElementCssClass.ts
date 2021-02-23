import { get } from "lodash-es";

export interface IBaseProps {
  variants?: string;
  setting?: IBaseSetting;
}

export interface IBaseSetting {
  fixedClasses?: { [p: string]: string };
  classes?: {
    [p: string]: string;
  };
  variants?: {
    [p: string]: {
      [k: string]: string;
    };
  };
}

export function useElementCssClass<T extends IBaseProps>(props: T) {
  const { setting, variants } = props;
  function getElementCssClass(
    elementName: string,
    defaultClass?: string
  ): string {
    // elementName is empty
    if (!elementName) {
      return defaultClass || "";
    }
    let classes = "";
    // get fixed classes
    const fixedClasses = get(setting?.fixedClasses, elementName) || "";
    classes += ` ${fixedClasses}`;

    // exit variant
    if (setting?.classes) {
      const baseClasses = get(setting.classes, elementName);
      classes += ` ${baseClasses}`;
    }

    // exit variant
    if (variants) {
      const variantsClass = get(
        setting?.variants,
        `${variants}.${elementName}`
      );
      classes += ` ${variantsClass}`;
    }
    return classes;
  }

  return {
    getElementCssClass,
  };
}
