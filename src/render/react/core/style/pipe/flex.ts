import {
  LV_FLEX_ALIGN_CENTER,
  LV_FLEX_ALIGN_END,
  LV_FLEX_ALIGN_SPACE_AROUND,
  LV_FLEX_ALIGN_SPACE_BETWEEN,
  LV_FLEX_ALIGN_SPACE_EVENLY,
  LV_FLEX_ALIGN_START,
  LV_FLEX_FLOW_COLUMN,
  LV_FLEX_FLOW_COLUMN_REVERSE,
  LV_FLEX_FLOW_COLUMN_WRAP,
  LV_FLEX_FLOW_COLUMN_WRAP_REVERSE,
  LV_FLEX_FLOW_ROW,
  LV_FLEX_FLOW_ROW_REVERSE,
  LV_FLEX_FLOW_ROW_WRAP,
  LV_FLEX_FLOW_ROW_WRAP_REVERSE,
} from "../../lv_conf";

const flexFlowObj = {
  row_nowrap: LV_FLEX_FLOW_ROW,
  column_nowrap: LV_FLEX_FLOW_COLUMN,
  row_wrap: LV_FLEX_FLOW_ROW_WRAP,
  column_wrap: LV_FLEX_FLOW_COLUMN_WRAP,
  "row_wrap-reverse": LV_FLEX_FLOW_ROW_WRAP_REVERSE,
  "column_wrap-reverse": LV_FLEX_FLOW_COLUMN_WRAP_REVERSE,
  row_reverse: LV_FLEX_FLOW_ROW_REVERSE,
  column_reverse: LV_FLEX_FLOW_COLUMN_REVERSE,
};

const flexAlignObj = {
  "flex-start": LV_FLEX_ALIGN_START,
  "flex-end": LV_FLEX_ALIGN_END,
  center: LV_FLEX_ALIGN_CENTER,
  "space-evenly": LV_FLEX_ALIGN_SPACE_EVENLY,
  "space-around": LV_FLEX_ALIGN_SPACE_AROUND,
  "space-between": LV_FLEX_ALIGN_SPACE_BETWEEN,
};

type IntegerGreaterThanOne = number;

export type FlexStyleType = {
  "display"?: "flex";
  "flex-direction"?: "row" | "column";
  "flex-wrap"?: "wrap" | "nowrap" | "reverse";
  "justify-content"?: "flex-start" | "flex-end" | "center" | "space-evenly" | "space-around" | "space-between";
  "align-items"?: "flex-start" | "flex-end" | "center" | "space-evenly" | "space-around" | "space-between";
  "align-content"?: "flex-end" | "center" | "space-evenly" | "space-around" | "space-between";
  "flex-grow"?: IntegerGreaterThanOne;
};

export function FlexStyle(style: FlexStyleType, result) {
  if (style.display !== "flex") return result;

  let flexFlow = 0x00;
  const flexDirection = style["flex-direction"] || "row";
  const flexWrap = style["flex-wrap"] || "nowrap";

  if (flexFlowObj[`${flexDirection}_${flexWrap}`]) {
    flexFlow = flexFlowObj[`${flexDirection}_${flexWrap}`];
  }
  result["flex-flow"] = flexFlow;

  let mainPlace = 0;
  let crossPlace = 0;
  let trackCrossPlace = 0;
  const justifyContent = style["justify-content"];
  const alignItems = style["align-items"];
  const alignContent =
    style["align-content"] ||
    (flexWrap === "nowrap" ? alignItems : "flex-start");

  if (justifyContent && flexAlignObj[justifyContent]) {
    mainPlace = flexAlignObj[justifyContent];
  }
  if (alignItems && flexAlignObj[alignItems]) {
    crossPlace = flexAlignObj[alignItems];
  }
  trackCrossPlace = alignContent ? flexAlignObj[alignContent] : crossPlace;
  // result['flex-align'] = [mainPlace, crossPlace, trackCrossPlace]

  if (justifyContent) {
    result["justify-content"] = mainPlace;
  }
  if (alignItems) {
    result["align-items"] = crossPlace;
  }
  if (alignContent) {
    result["align-content"] = trackCrossPlace;
  }
  if (style["flex-grow"] && !isNaN(style["flex-grow"])) {
    result["flex-grow"] = style["flex-grow"];
  }
  return result;
}
