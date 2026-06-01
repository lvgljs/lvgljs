import { LV_DIR_MAP } from "../../lv_dir_map";
import { ProcessBoolean, ProcessColor, ProcessEnum, ProcessPx } from "../util";

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
  "scroll-snap-x": ProcessEnum({
    none: 0,
    snap_start: 1,
    snap_end: 2,
    snap_center: 3,
  }),
  "scroll-snap-y": ProcessEnum({
    none: 0,
    snap_start: 1,
    snap_end: 2,
    snap_center: 3,
  }),
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
