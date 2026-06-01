import { ColorType } from "../color";
import { ProcessColor, ProcessEnum, ProcessPx } from "../util";
import {
  LV_BORDER_SIDE_BOTTOM,
  LV_BORDER_SIDE_FULL,
  LV_BORDER_SIDE_LEFT,
  LV_BORDER_SIDE_RIGHT,
  LV_BORDER_SIDE_TOP,
} from "../../lv_conf";

const obj = {
  "border-radius": ProcessPx,
  "border-width": ProcessPx,
  "border-color": ProcessColor,
  "border-side": ProcessEnum({
    left: LV_BORDER_SIDE_LEFT,
    right: LV_BORDER_SIDE_RIGHT,
    full: LV_BORDER_SIDE_FULL,
    top: LV_BORDER_SIDE_TOP,
    bottom: LV_BORDER_SIDE_BOTTOM,
    "top-right": LV_BORDER_SIDE_TOP | LV_BORDER_SIDE_RIGHT,
    "top-bottom": LV_BORDER_SIDE_TOP | LV_BORDER_SIDE_BOTTOM,
    "top-left": LV_BORDER_SIDE_TOP | LV_BORDER_SIDE_LEFT,
    "right-bottom": LV_BORDER_SIDE_RIGHT | LV_BORDER_SIDE_BOTTOM,
    "right-left": LV_BORDER_SIDE_RIGHT | LV_BORDER_SIDE_LEFT,
    "bottom-left": LV_BORDER_SIDE_BOTTOM | LV_BORDER_SIDE_LEFT,
  }),
};
const keys = Object.keys(obj);

export type BorderStyleType = {
  "border-radius"?: number;
  "border-width"?: number;
  "border-color"?: ColorType;
  "border-side"?: "left" | "right" | "full" | "top" | "bottom" | "top-right" | "top-bottom" | "top-left" | "right-bottom" | "right-left" | "bottom-left";
}

export function BorderStyle(style: BorderStyleType, result, compName) {
  keys.forEach((key) => {
    if (style[key] !== void 0) {
      obj[key](key, style[key], result);
    }
  });
}
