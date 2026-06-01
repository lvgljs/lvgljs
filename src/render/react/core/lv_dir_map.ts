import {
  LV_DIR_ALL,
  LV_DIR_BOTTOM,
  LV_DIR_HOR,
  LV_DIR_LEFT,
  LV_DIR_NONE,
  LV_DIR_RIGHT,
  LV_DIR_TOP,
  LV_DIR_VER,
} from "./lv_conf";

/** CSS/dropdown/scroll direction string ¡ú LVGL lv_dir_t value */
export const LV_DIR_MAP = {
  none: LV_DIR_NONE,
  left: LV_DIR_LEFT,
  right: LV_DIR_RIGHT,
  top: LV_DIR_TOP,
  bottom: LV_DIR_BOTTOM,
  horizontal: LV_DIR_HOR,
  vertical: LV_DIR_VER,
  all: LV_DIR_ALL,
} as const;

export type LvDirMapKey = keyof typeof LV_DIR_MAP;
