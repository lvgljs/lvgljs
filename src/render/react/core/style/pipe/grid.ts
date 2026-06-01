import {
  LV_GRID_ALIGN_CENTER,
  LV_GRID_ALIGN_END,
  LV_GRID_ALIGN_SPACE_AROUND,
  LV_GRID_ALIGN_SPACE_BETWEEN,
  LV_GRID_ALIGN_SPACE_EVENLY,
  LV_GRID_ALIGN_START,
  LV_GRID_ALIGN_STRETCH,
  LV_GRID_CONTENT,
  LV_GRID_FR,
} from "../../lv_conf";
import { NormalizePx } from "../util";

const FR_REG = /([\d]+)fr$/;

const gridChildJustifySelfObj = {
  start: LV_GRID_ALIGN_START,
  end: LV_GRID_ALIGN_END,
  center: LV_GRID_ALIGN_CENTER,
  stretch: LV_GRID_ALIGN_STRETCH,
};
const gridChildAlignSelfObj = {
  start: LV_GRID_ALIGN_START,
  end: LV_GRID_ALIGN_END,
  center: LV_GRID_ALIGN_CENTER,
  stretch: LV_GRID_ALIGN_STRETCH,
};

const gridJustifyContentObj = {
  start: LV_GRID_ALIGN_START,
  end: LV_GRID_ALIGN_END,
  center: LV_GRID_ALIGN_CENTER,
  "space-evenly": LV_GRID_ALIGN_SPACE_EVENLY,
  "space-around": LV_GRID_ALIGN_SPACE_AROUND,
  "space-between": LV_GRID_ALIGN_SPACE_BETWEEN,
  stretch: LV_GRID_ALIGN_STRETCH,
};

const gridAlignItemsObj = {
  start: LV_GRID_ALIGN_START,
  end: LV_GRID_ALIGN_END,
  center: LV_GRID_ALIGN_CENTER,
  "space-evenly": LV_GRID_ALIGN_SPACE_EVENLY,
  "space-around": LV_GRID_ALIGN_SPACE_AROUND,
  "space-between": LV_GRID_ALIGN_SPACE_BETWEEN,
  stretch: LV_GRID_ALIGN_STRETCH,
};

export type GridStyleType = {
  "display"?: "grid";
  "grid-template-columns"?: string;
  "grid-template-rows"?: string;
  "justify-content"?: "start" | "end" | "center" | "space-evenly" | "space-around" | "space-between" | "stretch";
  "align-items"?: "start" | "end" | "center" | "space-evenly" | "space-around" | "space-between" | "stretch";
  "grid-child"?: boolean;
  "justify-self"?: "start" | "end" | "center" | "stretch";
  "align-self"?: "start" | "end" | "center" | "stretch";
  "grid-column-pos"?: number;
  "grid-row-pos"?: number;
  "grid-column-span"?: number;
  "grid-row-span"?: number;
};

export function GridStyle(style: GridStyleType, result) {
  if (style.display == "grid") {
    let columns = style["grid-template-columns"]?.split(/\s/).filter(Boolean);
    let rows = style["grid-template-rows"]?.split(/\s/).filter(Boolean);

    if (!columns || !rows) return;

    columns = columns.map((column) => {
      if (column === "auto") {
        return LV_GRID_CONTENT;
      }
      const arr = column?.match(FR_REG);
      if (!isNaN(arr?.[1])) {
        return LV_GRID_FR(Number(arr[1]));
      }
      return NormalizePx(column);
    });
    rows = rows.map((row) => {
      if (row === "auto") {
        return LV_GRID_CONTENT;
      }
      const arr = row?.match(FR_REG);
      if (!isNaN(arr?.[1])) {
        return LV_GRID_FR(Number(arr[1]));
      }
      return NormalizePx(row);
    });
    columns = columns.filter(Boolean);
    rows = rows.filter(Boolean);
    result["display"] = "grid";
    result["grid-template"] = [columns, rows];
    const justifyContent =
      gridJustifyContentObj[style["justify-content"]] ||
      gridJustifyContentObj.start;
    const alignContent =
      gridAlignItemsObj[style["align-items"]] || gridAlignItemsObj.start;

    result["grid-align"] = [justifyContent, alignContent];
  }

  if (style["grid-child"]) {
    const justifySelf = style["justify-self"];
    const alignSelf = style["align-self"];
    const gridColumnPos = style["grid-column-pos"];
    const gridRowPos = style["grid-row-pos"];
    const gridColumnSpan = style["grid-column-span"] || 1;
    const gridRowSpan = style["grid-row-span"] || 1;

    if (isNaN(gridColumnPos + gridColumnSpan + gridRowPos + gridRowSpan))
      return;

    let column_align, row_align;
    column_align =
      gridChildJustifySelfObj[justifySelf] || gridChildJustifySelfObj.start;
    row_align = gridChildAlignSelfObj[alignSelf] || gridChildAlignSelfObj.start;

    result["grid-child"] = [
      column_align,
      gridColumnPos,
      gridColumnSpan,
      row_align,
      gridRowPos,
      gridRowSpan,
    ];
  }
}
