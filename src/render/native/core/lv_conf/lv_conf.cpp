#include "./lv_conf.hpp"

static void set_int_prop(JSContext* ctx, JSValue obj, const char* name, int32_t value) {
    JS_SetPropertyStr(ctx, obj, name, JS_NewInt32(ctx, value));
}

void NativeLvConfInit(JSContext* ctx, JSValue& ns) {
    JSValue obj = JS_NewObject(ctx);

    set_int_prop(ctx, obj, "LV_COORD_MAX", LV_COORD_MAX);
    set_int_prop(ctx, obj, "LV_SIZE_CONTENT", LV_SIZE_CONTENT);
    set_int_prop(ctx, obj, "LV_GRID_CONTENT", LV_GRID_CONTENT);

    set_int_prop(ctx, obj, "LV_PART_MAIN", LV_PART_MAIN);
    set_int_prop(ctx, obj, "LV_PART_SCROLLBAR", LV_PART_SCROLLBAR);
    set_int_prop(ctx, obj, "LV_PART_INDICATOR", LV_PART_INDICATOR);
    set_int_prop(ctx, obj, "LV_PART_KNOB", LV_PART_KNOB);
    set_int_prop(ctx, obj, "LV_PART_SELECTED", LV_PART_SELECTED);
    set_int_prop(ctx, obj, "LV_PART_ITEMS", LV_PART_ITEMS);
    set_int_prop(ctx, obj, "LV_PART_TICKS", LV_PART_TICKS);
    set_int_prop(ctx, obj, "LV_PART_CURSOR", LV_PART_CURSOR);

    set_int_prop(ctx, obj, "LV_STATE_DEFAULT", LV_STATE_DEFAULT);
    set_int_prop(ctx, obj, "LV_STATE_CHECKED", LV_STATE_CHECKED);
    set_int_prop(ctx, obj, "LV_STATE_FOCUSED", LV_STATE_FOCUSED);
    set_int_prop(ctx, obj, "LV_STATE_FOCUS_KEY", LV_STATE_FOCUS_KEY);
    set_int_prop(ctx, obj, "LV_STATE_EDITED", LV_STATE_EDITED);
    set_int_prop(ctx, obj, "LV_STATE_HOVERED", LV_STATE_HOVERED);
    set_int_prop(ctx, obj, "LV_STATE_PRESSED", LV_STATE_PRESSED);
    set_int_prop(ctx, obj, "LV_STATE_SCROLLED", LV_STATE_SCROLLED);
    set_int_prop(ctx, obj, "LV_STATE_DISABLED", LV_STATE_DISABLED);

    set_int_prop(ctx, obj, "LV_ALIGN_DEFAULT", LV_ALIGN_DEFAULT);
    set_int_prop(ctx, obj, "LV_ALIGN_TOP_LEFT", LV_ALIGN_TOP_LEFT);
    set_int_prop(ctx, obj, "LV_ALIGN_TOP_MID", LV_ALIGN_TOP_MID);
    set_int_prop(ctx, obj, "LV_ALIGN_TOP_RIGHT", LV_ALIGN_TOP_RIGHT);
    set_int_prop(ctx, obj, "LV_ALIGN_BOTTOM_LEFT", LV_ALIGN_BOTTOM_LEFT);
    set_int_prop(ctx, obj, "LV_ALIGN_BOTTOM_MID", LV_ALIGN_BOTTOM_MID);
    set_int_prop(ctx, obj, "LV_ALIGN_BOTTOM_RIGHT", LV_ALIGN_BOTTOM_RIGHT);
    set_int_prop(ctx, obj, "LV_ALIGN_LEFT_MID", LV_ALIGN_LEFT_MID);
    set_int_prop(ctx, obj, "LV_ALIGN_RIGHT_MID", LV_ALIGN_RIGHT_MID);
    set_int_prop(ctx, obj, "LV_ALIGN_CENTER", LV_ALIGN_CENTER);
    set_int_prop(ctx, obj, "LV_ALIGN_OUT_TOP_LEFT", LV_ALIGN_OUT_TOP_LEFT);
    set_int_prop(ctx, obj, "LV_ALIGN_OUT_TOP_MID", LV_ALIGN_OUT_TOP_MID);
    set_int_prop(ctx, obj, "LV_ALIGN_OUT_TOP_RIGHT", LV_ALIGN_OUT_TOP_RIGHT);
    set_int_prop(ctx, obj, "LV_ALIGN_OUT_BOTTOM_LEFT", LV_ALIGN_OUT_BOTTOM_LEFT);
    set_int_prop(ctx, obj, "LV_ALIGN_OUT_BOTTOM_MID", LV_ALIGN_OUT_BOTTOM_MID);
    set_int_prop(ctx, obj, "LV_ALIGN_OUT_BOTTOM_RIGHT", LV_ALIGN_OUT_BOTTOM_RIGHT);
    set_int_prop(ctx, obj, "LV_ALIGN_OUT_LEFT_TOP", LV_ALIGN_OUT_LEFT_TOP);
    set_int_prop(ctx, obj, "LV_ALIGN_OUT_LEFT_MID", LV_ALIGN_OUT_LEFT_MID);
    set_int_prop(ctx, obj, "LV_ALIGN_OUT_LEFT_BOTTOM", LV_ALIGN_OUT_LEFT_BOTTOM);
    set_int_prop(ctx, obj, "LV_ALIGN_OUT_RIGHT_TOP", LV_ALIGN_OUT_RIGHT_TOP);
    set_int_prop(ctx, obj, "LV_ALIGN_OUT_RIGHT_MID", LV_ALIGN_OUT_RIGHT_MID);
    set_int_prop(ctx, obj, "LV_ALIGN_OUT_RIGHT_BOTTOM", LV_ALIGN_OUT_RIGHT_BOTTOM);

    set_int_prop(ctx, obj, "LV_DIR_NONE", LV_DIR_NONE);
    set_int_prop(ctx, obj, "LV_DIR_LEFT", LV_DIR_LEFT);
    set_int_prop(ctx, obj, "LV_DIR_RIGHT", LV_DIR_RIGHT);
    set_int_prop(ctx, obj, "LV_DIR_TOP", LV_DIR_TOP);
    set_int_prop(ctx, obj, "LV_DIR_BOTTOM", LV_DIR_BOTTOM);
    set_int_prop(ctx, obj, "LV_DIR_HOR", LV_DIR_HOR);
    set_int_prop(ctx, obj, "LV_DIR_VER", LV_DIR_VER);
    set_int_prop(ctx, obj, "LV_DIR_ALL", LV_DIR_ALL);

#if LV_USE_FLEX
    set_int_prop(ctx, obj, "LV_FLEX_FLOW_ROW", LV_FLEX_FLOW_ROW);
    set_int_prop(ctx, obj, "LV_FLEX_FLOW_COLUMN", LV_FLEX_FLOW_COLUMN);
    set_int_prop(ctx, obj, "LV_FLEX_FLOW_ROW_WRAP", LV_FLEX_FLOW_ROW_WRAP);
    set_int_prop(ctx, obj, "LV_FLEX_FLOW_ROW_REVERSE", LV_FLEX_FLOW_ROW_REVERSE);
    set_int_prop(ctx, obj, "LV_FLEX_FLOW_ROW_WRAP_REVERSE", LV_FLEX_FLOW_ROW_WRAP_REVERSE);
    set_int_prop(ctx, obj, "LV_FLEX_FLOW_COLUMN_WRAP", LV_FLEX_FLOW_COLUMN_WRAP);
    set_int_prop(ctx, obj, "LV_FLEX_FLOW_COLUMN_REVERSE", LV_FLEX_FLOW_COLUMN_REVERSE);
    set_int_prop(ctx, obj, "LV_FLEX_FLOW_COLUMN_WRAP_REVERSE", LV_FLEX_FLOW_COLUMN_WRAP_REVERSE);

    set_int_prop(ctx, obj, "LV_FLEX_ALIGN_START", LV_FLEX_ALIGN_START);
    set_int_prop(ctx, obj, "LV_FLEX_ALIGN_END", LV_FLEX_ALIGN_END);
    set_int_prop(ctx, obj, "LV_FLEX_ALIGN_CENTER", LV_FLEX_ALIGN_CENTER);
    set_int_prop(ctx, obj, "LV_FLEX_ALIGN_SPACE_EVENLY", LV_FLEX_ALIGN_SPACE_EVENLY);
    set_int_prop(ctx, obj, "LV_FLEX_ALIGN_SPACE_AROUND", LV_FLEX_ALIGN_SPACE_AROUND);
    set_int_prop(ctx, obj, "LV_FLEX_ALIGN_SPACE_BETWEEN", LV_FLEX_ALIGN_SPACE_BETWEEN);
#endif

#if LV_USE_GRID
    set_int_prop(ctx, obj, "LV_GRID_ALIGN_START", LV_GRID_ALIGN_START);
    set_int_prop(ctx, obj, "LV_GRID_ALIGN_CENTER", LV_GRID_ALIGN_CENTER);
    set_int_prop(ctx, obj, "LV_GRID_ALIGN_END", LV_GRID_ALIGN_END);
    set_int_prop(ctx, obj, "LV_GRID_ALIGN_STRETCH", LV_GRID_ALIGN_STRETCH);
    set_int_prop(ctx, obj, "LV_GRID_ALIGN_SPACE_EVENLY", LV_GRID_ALIGN_SPACE_EVENLY);
    set_int_prop(ctx, obj, "LV_GRID_ALIGN_SPACE_AROUND", LV_GRID_ALIGN_SPACE_AROUND);
    set_int_prop(ctx, obj, "LV_GRID_ALIGN_SPACE_BETWEEN", LV_GRID_ALIGN_SPACE_BETWEEN);
#endif

    set_int_prop(ctx, obj, "LV_SCROLL_SNAP_NONE", LV_SCROLL_SNAP_NONE);
    set_int_prop(ctx, obj, "LV_SCROLL_SNAP_START", LV_SCROLL_SNAP_START);
    set_int_prop(ctx, obj, "LV_SCROLL_SNAP_END", LV_SCROLL_SNAP_END);
    set_int_prop(ctx, obj, "LV_SCROLL_SNAP_CENTER", LV_SCROLL_SNAP_CENTER);

    set_int_prop(ctx, obj, "LV_TEXT_ALIGN_AUTO", LV_TEXT_ALIGN_AUTO);
    set_int_prop(ctx, obj, "LV_TEXT_ALIGN_LEFT", LV_TEXT_ALIGN_LEFT);
    set_int_prop(ctx, obj, "LV_TEXT_ALIGN_CENTER", LV_TEXT_ALIGN_CENTER);
    set_int_prop(ctx, obj, "LV_TEXT_ALIGN_RIGHT", LV_TEXT_ALIGN_RIGHT);

    set_int_prop(ctx, obj, "LV_TEXT_DECOR_NONE", LV_TEXT_DECOR_NONE);
    set_int_prop(ctx, obj, "LV_TEXT_DECOR_UNDERLINE", LV_TEXT_DECOR_UNDERLINE);
    set_int_prop(ctx, obj, "LV_TEXT_DECOR_STRIKETHROUGH", LV_TEXT_DECOR_STRIKETHROUGH);

    set_int_prop(ctx, obj, "LV_GRAD_DIR_NONE", LV_GRAD_DIR_NONE);
    set_int_prop(ctx, obj, "LV_GRAD_DIR_VER", LV_GRAD_DIR_VER);
    set_int_prop(ctx, obj, "LV_GRAD_DIR_HOR", LV_GRAD_DIR_HOR);

    set_int_prop(ctx, obj, "LV_BORDER_SIDE_NONE", LV_BORDER_SIDE_NONE);
    set_int_prop(ctx, obj, "LV_BORDER_SIDE_BOTTOM", LV_BORDER_SIDE_BOTTOM);
    set_int_prop(ctx, obj, "LV_BORDER_SIDE_TOP", LV_BORDER_SIDE_TOP);
    set_int_prop(ctx, obj, "LV_BORDER_SIDE_LEFT", LV_BORDER_SIDE_LEFT);
    set_int_prop(ctx, obj, "LV_BORDER_SIDE_RIGHT", LV_BORDER_SIDE_RIGHT);
    set_int_prop(ctx, obj, "LV_BORDER_SIDE_FULL", LV_BORDER_SIDE_FULL);

    set_int_prop(ctx, obj, "LV_LABEL_LONG_WRAP", LV_LABEL_LONG_WRAP);
    set_int_prop(ctx, obj, "LV_LABEL_LONG_DOT", LV_LABEL_LONG_DOT);
    set_int_prop(ctx, obj, "LV_LABEL_LONG_SCROLL", LV_LABEL_LONG_SCROLL);
    set_int_prop(ctx, obj, "LV_LABEL_LONG_SCROLL_CIRCULAR", LV_LABEL_LONG_SCROLL_CIRCULAR);
    set_int_prop(ctx, obj, "LV_LABEL_LONG_CLIP", LV_LABEL_LONG_CLIP);

    set_int_prop(ctx, obj, "LV_STYLE_WIDTH", LV_STYLE_WIDTH);
    set_int_prop(ctx, obj, "LV_STYLE_MIN_WIDTH", LV_STYLE_MIN_WIDTH);
    set_int_prop(ctx, obj, "LV_STYLE_MAX_WIDTH", LV_STYLE_MAX_WIDTH);
    set_int_prop(ctx, obj, "LV_STYLE_HEIGHT", LV_STYLE_HEIGHT);
    set_int_prop(ctx, obj, "LV_STYLE_MIN_HEIGHT", LV_STYLE_MIN_HEIGHT);
    set_int_prop(ctx, obj, "LV_STYLE_MAX_HEIGHT", LV_STYLE_MAX_HEIGHT);
    set_int_prop(ctx, obj, "LV_STYLE_X", LV_STYLE_X);
    set_int_prop(ctx, obj, "LV_STYLE_Y", LV_STYLE_Y);
    set_int_prop(ctx, obj, "LV_STYLE_ALIGN", LV_STYLE_ALIGN);
    set_int_prop(ctx, obj, "LV_STYLE_TRANSFORM_WIDTH", LV_STYLE_TRANSFORM_WIDTH);
    set_int_prop(ctx, obj, "LV_STYLE_TRANSFORM_HEIGHT", LV_STYLE_TRANSFORM_HEIGHT);
    set_int_prop(ctx, obj, "LV_STYLE_TRANSLATE_X", LV_STYLE_TRANSLATE_X);
    set_int_prop(ctx, obj, "LV_STYLE_TRANSLATE_Y", LV_STYLE_TRANSLATE_Y);
    set_int_prop(ctx, obj, "LV_STYLE_TRANSFORM_ZOOM", LV_STYLE_TRANSFORM_ZOOM);
    set_int_prop(ctx, obj, "LV_STYLE_TRANSFORM_ANGLE", LV_STYLE_TRANSFORM_ANGLE);
    set_int_prop(ctx, obj, "LV_STYLE_PAD_TOP", LV_STYLE_PAD_TOP);
    set_int_prop(ctx, obj, "LV_STYLE_PAD_BOTTOM", LV_STYLE_PAD_BOTTOM);
    set_int_prop(ctx, obj, "LV_STYLE_PAD_LEFT", LV_STYLE_PAD_LEFT);
    set_int_prop(ctx, obj, "LV_STYLE_PAD_RIGHT", LV_STYLE_PAD_RIGHT);
    set_int_prop(ctx, obj, "LV_STYLE_PAD_ROW", LV_STYLE_PAD_ROW);
    set_int_prop(ctx, obj, "LV_STYLE_PAD_COLUMN", LV_STYLE_PAD_COLUMN);
    set_int_prop(ctx, obj, "LV_STYLE_BG_COLOR", LV_STYLE_BG_COLOR);
    set_int_prop(ctx, obj, "LV_STYLE_BG_OPA", LV_STYLE_BG_OPA);
    set_int_prop(ctx, obj, "LV_STYLE_BG_GRAD_COLOR", LV_STYLE_BG_GRAD_COLOR);
    set_int_prop(ctx, obj, "LV_STYLE_BG_GRAD_DIR", LV_STYLE_BG_GRAD_DIR);
    set_int_prop(ctx, obj, "LV_STYLE_BG_MAIN_STOP", LV_STYLE_BG_MAIN_STOP);
    set_int_prop(ctx, obj, "LV_STYLE_BG_GRAD_STOP", LV_STYLE_BG_GRAD_STOP);
    set_int_prop(ctx, obj, "LV_STYLE_BG_GRAD", LV_STYLE_BG_GRAD);
    set_int_prop(ctx, obj, "LV_STYLE_BG_DITHER_MODE", LV_STYLE_BG_DITHER_MODE);
    set_int_prop(ctx, obj, "LV_STYLE_BG_IMG_SRC", LV_STYLE_BG_IMG_SRC);
    set_int_prop(ctx, obj, "LV_STYLE_BG_IMG_OPA", LV_STYLE_BG_IMG_OPA);
    set_int_prop(ctx, obj, "LV_STYLE_BG_IMG_RECOLOR", LV_STYLE_BG_IMG_RECOLOR);
    set_int_prop(ctx, obj, "LV_STYLE_BG_IMG_RECOLOR_OPA", LV_STYLE_BG_IMG_RECOLOR_OPA);
    set_int_prop(ctx, obj, "LV_STYLE_BG_IMG_TILED", LV_STYLE_BG_IMG_TILED);
    set_int_prop(ctx, obj, "LV_STYLE_BORDER_COLOR", LV_STYLE_BORDER_COLOR);
    set_int_prop(ctx, obj, "LV_STYLE_BORDER_OPA", LV_STYLE_BORDER_OPA);
    set_int_prop(ctx, obj, "LV_STYLE_BORDER_WIDTH", LV_STYLE_BORDER_WIDTH);
    set_int_prop(ctx, obj, "LV_STYLE_BORDER_SIDE", LV_STYLE_BORDER_SIDE);
    set_int_prop(ctx, obj, "LV_STYLE_BORDER_POST", LV_STYLE_BORDER_POST);
    set_int_prop(ctx, obj, "LV_STYLE_OUTLINE_WIDTH", LV_STYLE_OUTLINE_WIDTH);
    set_int_prop(ctx, obj, "LV_STYLE_OUTLINE_COLOR", LV_STYLE_OUTLINE_COLOR);
    set_int_prop(ctx, obj, "LV_STYLE_OUTLINE_OPA", LV_STYLE_OUTLINE_OPA);
    set_int_prop(ctx, obj, "LV_STYLE_OUTLINE_PAD", LV_STYLE_OUTLINE_PAD);
    set_int_prop(ctx, obj, "LV_STYLE_SHADOW_WIDTH", LV_STYLE_SHADOW_WIDTH);
    set_int_prop(ctx, obj, "LV_STYLE_SHADOW_OFS_X", LV_STYLE_SHADOW_OFS_X);
    set_int_prop(ctx, obj, "LV_STYLE_SHADOW_OFS_Y", LV_STYLE_SHADOW_OFS_Y);
    set_int_prop(ctx, obj, "LV_STYLE_SHADOW_SPREAD", LV_STYLE_SHADOW_SPREAD);
    set_int_prop(ctx, obj, "LV_STYLE_SHADOW_COLOR", LV_STYLE_SHADOW_COLOR);
    set_int_prop(ctx, obj, "LV_STYLE_SHADOW_OPA", LV_STYLE_SHADOW_OPA);
    set_int_prop(ctx, obj, "LV_STYLE_IMG_OPA", LV_STYLE_IMG_OPA);
    set_int_prop(ctx, obj, "LV_STYLE_IMG_RECOLOR", LV_STYLE_IMG_RECOLOR);
    set_int_prop(ctx, obj, "LV_STYLE_IMG_RECOLOR_OPA", LV_STYLE_IMG_RECOLOR_OPA);
    set_int_prop(ctx, obj, "LV_STYLE_LINE_WIDTH", LV_STYLE_LINE_WIDTH);
    set_int_prop(ctx, obj, "LV_STYLE_LINE_DASH_WIDTH", LV_STYLE_LINE_DASH_WIDTH);
    set_int_prop(ctx, obj, "LV_STYLE_LINE_DASH_GAP", LV_STYLE_LINE_DASH_GAP);
    set_int_prop(ctx, obj, "LV_STYLE_LINE_ROUNDED", LV_STYLE_LINE_ROUNDED);
    set_int_prop(ctx, obj, "LV_STYLE_LINE_COLOR", LV_STYLE_LINE_COLOR);
    set_int_prop(ctx, obj, "LV_STYLE_LINE_OPA", LV_STYLE_LINE_OPA);
    set_int_prop(ctx, obj, "LV_STYLE_ARC_WIDTH", LV_STYLE_ARC_WIDTH);
    set_int_prop(ctx, obj, "LV_STYLE_ARC_ROUNDED", LV_STYLE_ARC_ROUNDED);
    set_int_prop(ctx, obj, "LV_STYLE_ARC_COLOR", LV_STYLE_ARC_COLOR);
    set_int_prop(ctx, obj, "LV_STYLE_ARC_OPA", LV_STYLE_ARC_OPA);
    set_int_prop(ctx, obj, "LV_STYLE_ARC_IMG_SRC", LV_STYLE_ARC_IMG_SRC);
    set_int_prop(ctx, obj, "LV_STYLE_TEXT_COLOR", LV_STYLE_TEXT_COLOR);
    set_int_prop(ctx, obj, "LV_STYLE_TEXT_OPA", LV_STYLE_TEXT_OPA);
    set_int_prop(ctx, obj, "LV_STYLE_TEXT_FONT", LV_STYLE_TEXT_FONT);
    set_int_prop(ctx, obj, "LV_STYLE_TEXT_LETTER_SPACE", LV_STYLE_TEXT_LETTER_SPACE);
    set_int_prop(ctx, obj, "LV_STYLE_TEXT_LINE_SPACE", LV_STYLE_TEXT_LINE_SPACE);
    set_int_prop(ctx, obj, "LV_STYLE_TEXT_DECOR", LV_STYLE_TEXT_DECOR);
    set_int_prop(ctx, obj, "LV_STYLE_TEXT_ALIGN", LV_STYLE_TEXT_ALIGN);
    set_int_prop(ctx, obj, "LV_STYLE_RADIUS", LV_STYLE_RADIUS);
    set_int_prop(ctx, obj, "LV_STYLE_CLIP_CORNER", LV_STYLE_CLIP_CORNER);
    set_int_prop(ctx, obj, "LV_STYLE_OPA", LV_STYLE_OPA);
    set_int_prop(ctx, obj, "LV_STYLE_COLOR_FILTER_DSC", LV_STYLE_COLOR_FILTER_DSC);
    set_int_prop(ctx, obj, "LV_STYLE_COLOR_FILTER_OPA", LV_STYLE_COLOR_FILTER_OPA);
    set_int_prop(ctx, obj, "LV_STYLE_ANIM_TIME", LV_STYLE_ANIM_TIME);
    set_int_prop(ctx, obj, "LV_STYLE_ANIM_SPEED", LV_STYLE_ANIM_SPEED);
    set_int_prop(ctx, obj, "LV_STYLE_TRANSITION", LV_STYLE_TRANSITION);
    set_int_prop(ctx, obj, "LV_STYLE_BLEND_MODE", LV_STYLE_BLEND_MODE);
    set_int_prop(ctx, obj, "LV_STYLE_LAYOUT", LV_STYLE_LAYOUT);
    set_int_prop(ctx, obj, "LV_STYLE_BASE_DIR", LV_STYLE_BASE_DIR);

    set_int_prop(ctx, obj, "LV_EVENT_ALL", LV_EVENT_ALL);
    set_int_prop(ctx, obj, "LV_EVENT_PRESSED", LV_EVENT_PRESSED);
    set_int_prop(ctx, obj, "LV_EVENT_PRESSING", LV_EVENT_PRESSING);
    set_int_prop(ctx, obj, "LV_EVENT_PRESS_LOST", LV_EVENT_PRESS_LOST);
    set_int_prop(ctx, obj, "LV_EVENT_SHORT_CLICKED", LV_EVENT_SHORT_CLICKED);
    set_int_prop(ctx, obj, "LV_EVENT_LONG_PRESSED", LV_EVENT_LONG_PRESSED);
    set_int_prop(ctx, obj, "LV_EVENT_LONG_PRESSED_REPEAT", LV_EVENT_LONG_PRESSED_REPEAT);
    set_int_prop(ctx, obj, "LV_EVENT_CLICKED", LV_EVENT_CLICKED);
    set_int_prop(ctx, obj, "LV_EVENT_RELEASED", LV_EVENT_RELEASED);
    set_int_prop(ctx, obj, "LV_EVENT_SCROLL_BEGIN", LV_EVENT_SCROLL_BEGIN);
    set_int_prop(ctx, obj, "LV_EVENT_SCROLL_END", LV_EVENT_SCROLL_END);
    set_int_prop(ctx, obj, "LV_EVENT_SCROLL", LV_EVENT_SCROLL);
    set_int_prop(ctx, obj, "LV_EVENT_GESTURE", LV_EVENT_GESTURE);
    set_int_prop(ctx, obj, "LV_EVENT_KEY", LV_EVENT_KEY);
    set_int_prop(ctx, obj, "LV_EVENT_FOCUSED", LV_EVENT_FOCUSED);
    set_int_prop(ctx, obj, "LV_EVENT_DEFOCUSED", LV_EVENT_DEFOCUSED);
    set_int_prop(ctx, obj, "LV_EVENT_LEAVE", LV_EVENT_LEAVE);
    set_int_prop(ctx, obj, "LV_EVENT_HIT_TEST", LV_EVENT_HIT_TEST);
    set_int_prop(ctx, obj, "LV_EVENT_COVER_CHECK", LV_EVENT_COVER_CHECK);
    set_int_prop(ctx, obj, "LV_EVENT_REFR_EXT_DRAW_SIZE", LV_EVENT_REFR_EXT_DRAW_SIZE);
    set_int_prop(ctx, obj, "LV_EVENT_DRAW_MAIN_BEGIN", LV_EVENT_DRAW_MAIN_BEGIN);
    set_int_prop(ctx, obj, "LV_EVENT_DRAW_MAIN", LV_EVENT_DRAW_MAIN);
    set_int_prop(ctx, obj, "LV_EVENT_DRAW_MAIN_END", LV_EVENT_DRAW_MAIN_END);
    set_int_prop(ctx, obj, "LV_EVENT_DRAW_POST_BEGIN", LV_EVENT_DRAW_POST_BEGIN);
    set_int_prop(ctx, obj, "LV_EVENT_DRAW_POST", LV_EVENT_DRAW_POST);
    set_int_prop(ctx, obj, "LV_EVENT_DRAW_POST_END", LV_EVENT_DRAW_POST_END);
    set_int_prop(ctx, obj, "LV_EVENT_DRAW_PART_BEGIN", LV_EVENT_DRAW_PART_BEGIN);
    set_int_prop(ctx, obj, "LV_EVENT_DRAW_PART_END", LV_EVENT_DRAW_PART_END);
    set_int_prop(ctx, obj, "LV_EVENT_VALUE_CHANGED", LV_EVENT_VALUE_CHANGED);
    set_int_prop(ctx, obj, "LV_EVENT_INSERT", LV_EVENT_INSERT);
    set_int_prop(ctx, obj, "LV_EVENT_REFRESH", LV_EVENT_REFRESH);
    set_int_prop(ctx, obj, "LV_EVENT_READY", LV_EVENT_READY);
    set_int_prop(ctx, obj, "LV_EVENT_CANCEL", LV_EVENT_CANCEL);
    set_int_prop(ctx, obj, "LV_EVENT_DELETE", LV_EVENT_DELETE);
    set_int_prop(ctx, obj, "LV_EVENT_CHILD_CHANGED", LV_EVENT_CHILD_CHANGED);
    set_int_prop(ctx, obj, "LV_EVENT_CHILD_CREATED", LV_EVENT_CHILD_CREATED);
    set_int_prop(ctx, obj, "LV_EVENT_CHILD_DELETED", LV_EVENT_CHILD_DELETED);
    set_int_prop(ctx, obj, "LV_EVENT_SCREEN_UNLOAD_START", LV_EVENT_SCREEN_UNLOAD_START);
    set_int_prop(ctx, obj, "LV_EVENT_SCREEN_LOAD_START", LV_EVENT_SCREEN_LOAD_START);
    set_int_prop(ctx, obj, "LV_EVENT_SCREEN_LOADED", LV_EVENT_SCREEN_LOADED);
    set_int_prop(ctx, obj, "LV_EVENT_SCREEN_UNLOADED", LV_EVENT_SCREEN_UNLOADED);
    set_int_prop(ctx, obj, "LV_EVENT_SIZE_CHANGED", LV_EVENT_SIZE_CHANGED);
    set_int_prop(ctx, obj, "LV_EVENT_STYLE_CHANGED", LV_EVENT_STYLE_CHANGED);
    set_int_prop(ctx, obj, "LV_EVENT_LAYOUT_CHANGED", LV_EVENT_LAYOUT_CHANGED);
    set_int_prop(ctx, obj, "LV_EVENT_GET_SELF_SIZE", LV_EVENT_GET_SELF_SIZE);
    set_int_prop(ctx, obj, "LV_EVENT_LAST", _LV_EVENT_LAST);
    set_int_prop(ctx, obj, "LV_EVENT_PREPROCESS", LV_EVENT_PREPROCESS);

#if LV_USE_ARC
    set_int_prop(ctx, obj, "LV_ARC_MODE_NORMAL", LV_ARC_MODE_NORMAL);
    set_int_prop(ctx, obj, "LV_ARC_MODE_SYMMETRICAL", LV_ARC_MODE_SYMMETRICAL);
    set_int_prop(ctx, obj, "LV_ARC_MODE_REVERSE", LV_ARC_MODE_REVERSE);
#endif

#if LV_USE_CHART
    set_int_prop(ctx, obj, "LV_CHART_TYPE_NONE", LV_CHART_TYPE_NONE);
    set_int_prop(ctx, obj, "LV_CHART_TYPE_LINE", LV_CHART_TYPE_LINE);
    set_int_prop(ctx, obj, "LV_CHART_TYPE_BAR", LV_CHART_TYPE_BAR);
    set_int_prop(ctx, obj, "LV_CHART_TYPE_SCATTER", LV_CHART_TYPE_SCATTER);
#endif

#if LV_USE_KEYBOARD
    set_int_prop(ctx, obj, "LV_KEYBOARD_MODE_TEXT_LOWER", LV_KEYBOARD_MODE_TEXT_LOWER);
    set_int_prop(ctx, obj, "LV_KEYBOARD_MODE_TEXT_UPPER", LV_KEYBOARD_MODE_TEXT_UPPER);
    set_int_prop(ctx, obj, "LV_KEYBOARD_MODE_SPECIAL", LV_KEYBOARD_MODE_SPECIAL);
    set_int_prop(ctx, obj, "LV_KEYBOARD_MODE_NUMBER", LV_KEYBOARD_MODE_NUMBER);
#endif

    JS_SetPropertyStr(ctx, ns, "lv_conf", obj);
}
