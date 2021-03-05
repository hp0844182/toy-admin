import { get } from "lodash-es";

export interface IBaseProps {
  variants?: string;
  setting?: IBaseSetting;
}

export interface IBaseSetting {
  fixedClasses?: { [p: string]: string } | string;
  classes?:
    | {
        [p: string]: string;
      }
    | string;
  variants?: {
    [p: string]:
      | {
          [k: string]: string;
        }
      | string;
  };
}

export function useElementCssClass<T extends IBaseProps>(props: T) {
  const { setting, variants } = props;
  function getElementCssClass(
    elementName?: string,
    defaultClass?: string,
    mergeClass?: string
  ): string {
    let classes = "";
    // get fixed classes
    if (setting?.fixedClasses) {
      if (typeof setting?.fixedClasses === "string") {
        classes += ` ${setting?.fixedClasses}`;
      } else {
        const fixedClasses =
          get(setting?.fixedClasses, elementName || "") || "";
        classes += ` ${fixedClasses}`;
      }
    }
    // exit classes
    if (setting?.classes && !variants) {
      if (typeof setting.classes === "string") {
        classes += ` ${setting.classes}`;
      } else {
        const baseClasses = get(setting.classes, elementName || "");
        classes += ` ${baseClasses}`;
      }
    }

    // exit variant
    if (variants) {
      const variantsClass =
        get(setting?.variants, `${variants}.${elementName}`) ||
        get(setting?.variants, `default.${elementName}`);
      classes += ` ${variantsClass}`;
    }

    if (mergeClass) {
      classes += ` ${mergeClass}`;
    }
    return classes;
  }

  return {
    getElementCssClass,
  };
}
