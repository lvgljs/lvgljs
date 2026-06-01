import { HostConfig } from "react-reconciler";

export { handleEvent } from "../core/event";
export { unRegistEvent, EVENTTYPE_MAP } from "../core/event";
export { setStyle } from "../core/style";
import * as React from 'react';
import { LV_DIR_MAP } from "../core/lv_dir_map";
import {
  LV_ALIGN_BOTTOM_LEFT,
  LV_ALIGN_BOTTOM_MID,
  LV_ALIGN_BOTTOM_RIGHT,
  LV_ALIGN_CENTER,
  LV_ALIGN_DEFAULT,
  LV_ALIGN_LEFT_MID,
  LV_ALIGN_OUT_BOTTOM_LEFT,
  LV_ALIGN_OUT_BOTTOM_MID,
  LV_ALIGN_OUT_BOTTOM_RIGHT,
  LV_ALIGN_OUT_LEFT_BOTTOM,
  LV_ALIGN_OUT_LEFT_MID,
  LV_ALIGN_OUT_LEFT_TOP,
  LV_ALIGN_OUT_RIGHT_BOTTOM,
  LV_ALIGN_OUT_RIGHT_MID,
  LV_ALIGN_OUT_RIGHT_TOP,
  LV_ALIGN_OUT_TOP_LEFT,
  LV_ALIGN_OUT_TOP_MID,
  LV_ALIGN_OUT_TOP_RIGHT,
  LV_ALIGN_RIGHT_MID,
  LV_ALIGN_TOP_LEFT,
  LV_ALIGN_TOP_MID,
  LV_ALIGN_TOP_RIGHT,
  LV_PART_CURSOR,
  LV_PART_INDICATOR,
  LV_PART_ITEMS,
  LV_PART_KNOB,
  LV_PART_MAIN,
  LV_PART_SCROLLBAR,
  LV_PART_SELECTED,
  LV_PART_TICKS,
  LV_STATE_CHECKED,
  LV_STATE_DEFAULT,
  LV_STATE_DISABLED,
  LV_STATE_EDITED,
  LV_STATE_FOCUSED,
  LV_STATE_FOCUS_KEY,
  LV_STATE_HOVERED,
  LV_STATE_PRESSED,
  LV_STATE_SCROLLED,
} from "../core/lv_conf";

const components = new Map<LvgljsComponentConfig<any, any>['tagName'], LvgljsComponentConfig<any, any>>();

export const getComponentByTagName = (tagName) => {
  const config = components.get(tagName);
  if (!config) {
    throw `Unknown component ${tagName}`;
  }
  return config;
};

export function registerComponent<Props, Comp>(
  config: LvgljsComponentConfig<Props, Comp>): React.ComponentType<Props> | string {
  if (components.has(config.tagName)) {
    throw `A component with tagName: ${config.tagName} already exists. This base component will be ignored`;
  }
  components.set(config.tagName, config);
  return config.tagName;
}

export function registerComponents<Props, Comp>(configs: LvgljsComponentConfig<Props, Comp>[]) {
  configs.forEach((config) => {
    if (components.has(config.tagName)) {
      throw `A component with tagName: ${config.tagName} already exists. This base component will be ignored`;
    }
    components.set(config.tagName, config);
  });
}

export const EAlignType = {
  ALIGN_DEFAULT: LV_ALIGN_DEFAULT,
  ALIGN_TOP_LEFT: LV_ALIGN_TOP_LEFT,
  ALIGN_TOP_MID: LV_ALIGN_TOP_MID,
  ALIGN_TOP_RIGHT: LV_ALIGN_TOP_RIGHT,
  ALIGN_BOTTOM_LEFT: LV_ALIGN_BOTTOM_LEFT,
  ALIGN_BOTTOM_MID: LV_ALIGN_BOTTOM_MID,
  ALIGN_BOTTOM_RIGHT: LV_ALIGN_BOTTOM_RIGHT,
  ALIGN_LEFT_MID: LV_ALIGN_LEFT_MID,
  ALIGN_RIGHT_MID: LV_ALIGN_RIGHT_MID,
  ALIGN_CENTER: LV_ALIGN_CENTER,

  ALIGN_OUT_TOP_LEFT: LV_ALIGN_OUT_TOP_LEFT,
  ALIGN_OUT_TOP_MID: LV_ALIGN_OUT_TOP_MID,
  ALIGN_OUT_TOP_RIGHT: LV_ALIGN_OUT_TOP_RIGHT,
  ALIGN_OUT_BOTTOM_LEFT: LV_ALIGN_OUT_BOTTOM_LEFT,
  ALIGN_OUT_BOTTOM_MID: LV_ALIGN_OUT_BOTTOM_MID,
  ALIGN_OUT_BOTTOM_RIGHT: LV_ALIGN_OUT_BOTTOM_RIGHT,
  ALIGN_OUT_LEFT_TOP: LV_ALIGN_OUT_LEFT_TOP,
  ALIGN_OUT_LEFT_MID: LV_ALIGN_OUT_LEFT_MID,
  ALIGN_OUT_LEFT_BOTTOM: LV_ALIGN_OUT_LEFT_BOTTOM,
  ALIGN_OUT_RIGHT_TOP: LV_ALIGN_OUT_RIGHT_TOP,
  ALIGN_OUT_RIGHT_MID: LV_ALIGN_OUT_RIGHT_MID,
  ALIGN_OUT_RIGHT_BOTTOM: LV_ALIGN_OUT_RIGHT_BOTTOM,
};

export const STYLE_TYPE = {
  PART_MAIN: LV_PART_MAIN,
  PART_SCROLLBAR: LV_PART_SCROLLBAR,
  PART_INDICATOR: LV_PART_INDICATOR,
  PART_KNOB: LV_PART_KNOB,
  PART_SELECTED: LV_PART_SELECTED,
  PART_ITEMS: LV_PART_ITEMS,
  PART_TICKS: LV_PART_TICKS,
  PART_CURSOR: LV_PART_CURSOR,

  STATE_DEFAULT: LV_STATE_DEFAULT,
  STATE_CHECKED: LV_STATE_CHECKED,
  STATE_FOCUSED: LV_STATE_FOCUSED,
  STATE_FOCUS_KEY: LV_STATE_FOCUS_KEY,
  STATE_EDITED: LV_STATE_EDITED,
  STATE_HOVERED: LV_STATE_HOVERED,
  STATE_PRESSED: LV_STATE_PRESSED,
  STATE_SCROLLED: LV_STATE_SCROLLED,
  STATE_DISABLED: LV_STATE_DISABLED,
};

export const EDropdownlistDirection = LV_DIR_MAP;

export const EDropdownListArrowDirection = {
  up: 0,
  right: 1,
  down: 2,
  left: 3,
};

export const styleGetterProp = ["height", "width", "left", "top"];

export type LvgljsComponentConfig<ComponentProps, ComponentInstance> = Pick<
  HostConfig<any, ComponentProps, any, ComponentInstance, any, any, any, any, any, any, any, any>,
  | "shouldSetTextContent"
  | "createInstance"
  | "commitMount"
  | "commitUpdate"
  | "commitUpdate"
  | "insertBefore"
  | "appendInitialChild"
  | "appendChild"
  | "removeChild"
> & { tagName: string };
