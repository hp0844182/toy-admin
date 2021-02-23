import { IBaseSetting } from "src/hooks/useElementCssClass";

export interface IAlertSetting extends IBaseSetting {
  classes: {
    wrapper: string;
    body: string;
    close: string;
    closeIcon: string;
  };
}
