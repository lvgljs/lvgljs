import * as lvConf from "../lv_conf";

/** Legacy EVENT_* names mapped to cached NativeRender.lv_conf values. */
export const EVENTTYPE_MAP = {
  EVENT_ALL: lvConf.LV_EVENT_ALL,

  /** Input device events */
  /** The object has been pressed */
  EVENT_PRESSED: lvConf.LV_EVENT_PRESSED,
  /** The object is being pressed (called continuously while pressing) */
  EVENT_PRESSING: lvConf.LV_EVENT_PRESSING,
  /** The object is still being pressed but slid cursor/finger off of the object */
  EVENT_PRESS_LOST: lvConf.LV_EVENT_PRESS_LOST,
  /** The object was pressed for a short period of time, then released it. Not called if scrolled. */
  EVENT_SHORT_CLICKED: lvConf.LV_EVENT_SHORT_CLICKED,
  /** Object has been pressed for at least `long_press_time`.  Not called if scrolled. */
  EVENT_LONG_PRESSED: lvConf.LV_EVENT_LONG_PRESSED,
  /** Called after `long_press_time` in every `long_press_repeat_time` ms.  Not called if scrolled. */
  EVENT_LONG_PRESSED_REPEAT: lvConf.LV_EVENT_LONG_PRESSED_REPEAT,
  /** Called on release if not scrolled (regardless to long press) */
  EVENT_CLICKED: lvConf.LV_EVENT_CLICKED,
  /** Called in every cases when the object has been released */
  EVENT_RELEASED: lvConf.LV_EVENT_RELEASED,
  /** Scrolling begins. The event parameter is a pointer to the animation of the scroll. Can be modified */
  EVENT_SCROLL_BEGIN: lvConf.LV_EVENT_SCROLL_BEGIN,
  /** Scrolling ends */
  EVENT_SCROLL_END: lvConf.LV_EVENT_SCROLL_END,
  /** Scrolling */
  EVENT_SCROLL: lvConf.LV_EVENT_SCROLL,
  /** A gesture is detected. Get the gesture with `indev_get_gesture_dir(indev_get_act());` */
  EVENT_GESTURE: lvConf.LV_EVENT_GESTURE,
  /** A key is sent to the object. Get the key with `indev_get_key(indev_get_act());` */
  EVENT_KEY: lvConf.LV_EVENT_KEY,
  /** The object is focused */
  EVENT_FOCUSED: lvConf.LV_EVENT_FOCUSED,
  /** The object is defocused */
  EVENT_DEFOCUSED: lvConf.LV_EVENT_DEFOCUSED,
  /** The object is defocused but still selected */
  EVENT_LEAVE: lvConf.LV_EVENT_LEAVE,
  /** Perform advanced hit-testing */
  EVENT_HIT_TEST: lvConf.LV_EVENT_HIT_TEST,

  /** Drawing events */
  /** Check if the object fully covers an area. The event parameter is `cover_check_info_t *`. */
  EVENT_COVER_CHECK: lvConf.LV_EVENT_COVER_CHECK,
  /** Get the required extra draw area around the object (e.g. for shadow). The event parameter is `coord_t *` to store the size. */
  EVENT_REFR_EXT_DRAW_SIZE: lvConf.LV_EVENT_REFR_EXT_DRAW_SIZE,
  /** Starting the main drawing phase */
  EVENT_DRAW_MAIN_BEGIN: lvConf.LV_EVENT_DRAW_MAIN_BEGIN,
  /** Perform the main drawing */
  EVENT_DRAW_MAIN: lvConf.LV_EVENT_DRAW_MAIN,
  /** Finishing the main drawing phase */
  EVENT_DRAW_MAIN_END: lvConf.LV_EVENT_DRAW_MAIN_END,
  /** Starting the post draw phase (when all children are drawn) */
  EVENT_DRAW_POST_BEGIN: lvConf.LV_EVENT_DRAW_POST_BEGIN,
  /** Perform the post draw phase (when all children are drawn) */
  EVENT_DRAW_POST: lvConf.LV_EVENT_DRAW_POST,
  /** Finishing the post draw phase (when all children are drawn) */
  EVENT_DRAW_POST_END: lvConf.LV_EVENT_DRAW_POST_END,
  /** Starting to draw a part. The event parameter is `obj_draw_dsc_t *`. */
  EVENT_DRAW_PART_BEGIN: lvConf.LV_EVENT_DRAW_PART_BEGIN,
  /** Finishing to draw a part. The event parameter is `obj_draw_dsc_t *`. */
  EVENT_DRAW_PART_END: lvConf.LV_EVENT_DRAW_PART_END,

  /** Special events */
  /** The object's value has changed (i.e. slider moved) */
  EVENT_VALUE_CHANGED: lvConf.LV_EVENT_VALUE_CHANGED,
  /** A text is inserted to the object. The event data is `char *` being inserted. */
  EVENT_INSERT: lvConf.LV_EVENT_INSERT,
  /** Notify the object to refresh something on it (for the user) */
  EVENT_REFRESH: lvConf.LV_EVENT_REFRESH,
  /** A process has finished */
  EVENT_READY: lvConf.LV_EVENT_READY,
  /** A process has been cancelled */
  EVENT_CANCEL: lvConf.LV_EVENT_CANCEL,

  /** Other events */
  /** Object is being deleted */
  EVENT_DELETE: lvConf.LV_EVENT_DELETE,
  /** Child was removed, added, or its size, position were changed */
  EVENT_CHILD_CHANGED: lvConf.LV_EVENT_CHILD_CHANGED,
  /** Child was created, always bubbles up to all parents */
  EVENT_CHILD_CREATED: lvConf.LV_EVENT_CHILD_CREATED,
  /** Child was deleted, always bubbles up to all parents */
  EVENT_CHILD_DELETED: lvConf.LV_EVENT_CHILD_DELETED,
  /** A screen unload started, fired immediately when scr_load is called */
  EVENT_SCREEN_UNLOAD_START: lvConf.LV_EVENT_SCREEN_UNLOAD_START,
  /** A screen load started, fired when the screen change delay is expired */
  EVENT_SCREEN_LOAD_START: lvConf.LV_EVENT_SCREEN_LOAD_START,
  /** A screen was loaded */
  EVENT_SCREEN_LOADED: lvConf.LV_EVENT_SCREEN_LOADED,
  /** A screen was unloaded */
  EVENT_SCREEN_UNLOADED: lvConf.LV_EVENT_SCREEN_UNLOADED,
  /** Object coordinates/size have changed */
  EVENT_SIZE_CHANGED: lvConf.LV_EVENT_SIZE_CHANGED,
  /** Object's style has changed */
  EVENT_STYLE_CHANGED: lvConf.LV_EVENT_STYLE_CHANGED,
  /** The children position has changed due to a layout recalculation */
  EVENT_LAYOUT_CHANGED: lvConf.LV_EVENT_LAYOUT_CHANGED,
  /** Get the internal size of a widget */
  EVENT_GET_SELF_SIZE: lvConf.LV_EVENT_GET_SELF_SIZE,

  /** Number of default events */
  _EVENT_LAST: lvConf.LV_EVENT_LAST,

  /** This is a flag that can be set with an event so it's processed
   *  before the class default event processing */
  EVENT_PREPROCESS: lvConf.LV_EVENT_PREPROCESS,
} as const;
