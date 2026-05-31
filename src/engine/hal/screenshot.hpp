#pragma once

#include "lv_bindings_js.h"

/** Save the active screen to a PNG file via LVGL snapshot API. Requires LV_USE_SNAPSHOT. */
bool hal_capture_display_png(const char * path);

/** Register RenderUtil.captureDisplay on the NativeRender namespace object. */
void NativeScreenshotInit(JSContext * ctx, JSValue ns);
