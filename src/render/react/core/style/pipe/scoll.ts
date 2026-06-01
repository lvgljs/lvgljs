import { LV_DIR_MAP } from "../../lv_dir_map";
import {
  LV_SCROLL_SNAP_CENTER,
  LV_SCROLL_SNAP_END,
  LV_SCROLL_SNAP_NONE,
  LV_SCROLL_SNAP_START,
} from "../../lv_conf";
import { ProcessBoolean, ProcessColor, ProcessEnum, ProcessPx } from "../util";

const scrollSnapMap = {
  none: LV_SCROLL_SNAP_NONE,
  snap_start: LV_SCROLL_SNAP_START,
  snap_end: LV_SCROLL_SNAP_END,
  snap_center: LV_SCROLL_SNAP_CENTER,
};

const obj = {
  overflow: ProcessEnum({
    hidden: 1,
    scroll: 0,
    auto: 0,
  }),
  "overflow-scrolling": ProcessEnum({
    auto: 0,
    touch: 1,
  }),
  "scroll-dir": ProcessEnum(LV_DIR_MAP),
  "scroll-snap-x": ProcessEnum(scrollSnapMap),
  "scroll-snap-y": ProcessEnum(scrollSnapMap),
  "scroll-enable-snap": ProcessBoolean,
};
const keys = Object.keys(obj);

export type ScrollStyleType = {
  overflow?: "hidden" | "scroll" | "auto";
  "overflow-scrolling"?: "auto" | "touch";
  "scroll-dir"?: "none" | "left" | "right" | "top" | "bottom" | "horizontal" | "vertical" | "all";
  "scroll-snap-x"?: "none" | "snap_start" | "snap_end" | "snap_center";
  "scroll-snap-y"?: "none" | "snap_start" | "snap_end" | "snap_center";
  "scroll-enable-snap"?: boolean;
};

export function ScrollStyle(style: ScrollStyleType, result, compName) {
  keys.forEach((key) => {
    if (style[key] !== void 0) {
      obj[key](key, style[key], result);
    }
  });
}
