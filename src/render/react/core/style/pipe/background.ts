import { ColorType } from "../color";
import { ProcessColor, ProcessEnum } from "../util";
import {
  LV_GRAD_DIR_HOR,
  LV_GRAD_DIR_NONE,
  LV_GRAD_DIR_VER,
} from "../../lv_conf";

const obj = {
  "background-color": ProcessColor,
  "background-grad-color": ProcessColor,
  "background-grad-color-dir": ProcessEnum({
    none: LV_GRAD_DIR_NONE,
    vertical: LV_GRAD_DIR_VER,
    horizontal: LV_GRAD_DIR_HOR,
  }),
};
const keys = Object.keys(obj);

export type BackgroundStyleType = {
  "background-color"?: ColorType;
  "background-grad-color"?: ColorType;
  "background-grad-color-dir"?: "none" | "vertical" | "horizontal";
};

export function BackgroundStyle(style: BackgroundStyleType, result, compName) {
  keys.forEach((key) => {
    if (style[key] !== void 0) {
      obj[key](key, style[key], result);
    }
  });
}
