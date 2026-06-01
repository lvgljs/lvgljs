import { ColorType } from "../color";
import { ProcessColor, ProcessEnum, ProcessPx } from "../util";
import {
  LV_LABEL_LONG_CLIP,
  LV_LABEL_LONG_DOT,
  LV_LABEL_LONG_SCROLL,
  LV_LABEL_LONG_SCROLL_CIRCULAR,
  LV_LABEL_LONG_WRAP,
  LV_TEXT_ALIGN_AUTO,
  LV_TEXT_ALIGN_CENTER,
  LV_TEXT_ALIGN_LEFT,
  LV_TEXT_ALIGN_RIGHT,
  LV_TEXT_DECOR_NONE,
  LV_TEXT_DECOR_STRIKETHROUGH,
  LV_TEXT_DECOR_UNDERLINE,
} from "../../lv_conf";

const builtInFontList = [
  8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46,
  48,
];

const obj = {
  "text-color": ProcessColor,
  "letter-spacing": ProcessPx,
  "line-spacing": ProcessPx,
  "text-overflow": ProcessEnum({
    ellipsis: LV_LABEL_LONG_DOT,
    clip: LV_LABEL_LONG_CLIP,
    auto: LV_LABEL_LONG_WRAP,
    scroll: LV_LABEL_LONG_SCROLL,
    circular: LV_LABEL_LONG_SCROLL_CIRCULAR,
  }),
  "text-align": ProcessEnum({
    auto: LV_TEXT_ALIGN_AUTO,
    left: LV_TEXT_ALIGN_LEFT,
    center: LV_TEXT_ALIGN_CENTER,
    right: LV_TEXT_ALIGN_RIGHT,
  }),
  "text-decoration": ProcessEnum({
    none: LV_TEXT_DECOR_NONE,
    underline: LV_TEXT_DECOR_UNDERLINE,
    strikethrough: LV_TEXT_DECOR_STRIKETHROUGH,
  }),
  "font-size": ProcessPx,
};
const keys = Object.keys(obj);

export type TextStyleType = {
  "text-color"?: ColorType;
  "letter-spacing"?: number;
  "line-spacing"?: number;
  "text-overflow"?: "ellipsis" | "clip" | "auto" | "scroll" | "circular";
  "text-align"?: "auto" | "left" | "center" | "right";
  "text-decoration"?: "none" | "underline" | "strikethrough";
  "font-size"?: number | string;
}

export function TextStyle(style: TextStyleType, result, compName) {
  keys.forEach((key) => {
    if (style[key] !== void 0) {
      obj[key](key, style[key], result);
    }
  });

  if (style["font-size"]) {
    let size = style["font-size"];

    if (typeof size == "string") {
      const reg = /(\d+\.?\d*)(px)?$/;
      size = size.replace(/(^\s*)|(\s*$)/g, "").match(reg)?.[1];
    }

    if (isNaN(size)) return result;

    if (size % 2 == 1) {
      size += 1;
    }
    size = Math.min(
      builtInFontList[builtInFontList.length - 1],
      Math.max(builtInFontList[0], size),
    );

    if (compName === "Text") {
      result["font-size"] = builtInFontList.indexOf(size);
    } else {
      result["font-size-1"] = builtInFontList.indexOf(size);
    }
  }
}
