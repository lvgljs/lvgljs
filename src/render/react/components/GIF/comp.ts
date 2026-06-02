import { BUILT_IN_SYMBOL } from "../../core/style/symbol";
import { isValidUrl } from "../../utils/helpers";
import { CommonComponentApi, CommonProps } from "../common/index";
import {
  EVENTTYPE_MAP,
  STYLE_TYPE,
  handleEvent,
  setStyle,
  styleGetterProp,
} from "../config";
import path from 'tjs:path';

const bridge = globalThis[Symbol.for('lvgljs')];
const NativeGIF = bridge.NativeRender.NativeComponents.GIF;

async function getGIFBinary(url) {
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/octet-stream",
    },
  });
  const GIFBuffer = await resp.arrayBuffer();
  return GIFBuffer;
}

export type GIFProps = CommonProps & {
  src: string;
  /** When true, pause animation; when false, resume (also applied after the GIF loads). */
  paused?: boolean;
}

function applyGIF(comp, buffer?: ArrayBuffer, paused?: boolean) {
  if (buffer != null) {
    comp.setGIFBinary(buffer);
  }
  if (paused) {
    comp.pause();
  } else if (paused === false) {
    comp.resume();
  }
}

function setGIFProps(comp, newProps: GIFProps, oldProps: GIFProps) {
  const setter = {
    ...CommonComponentApi({ compName: "GIF", comp, newProps, oldProps }),
    onClick(fn) {
      handleEvent(comp, fn, EVENTTYPE_MAP.EVENT_CLICKED);
    },
    src(url) {
      if (url && url !== oldProps.src) {
        if (BUILT_IN_SYMBOL[url]) {
          comp.setSymbol(BUILT_IN_SYMBOL[url]);
          return;
        }
        if (!isValidUrl(url)) {
          if (!path.isAbsolute(url)) {
            url = path.resolve(import.meta.dirname, url);
          }
          tjs.readFile(url, { encoding: "binary" })
            .then((data) => applyGIF(comp, data.buffer, newProps.paused))
            .catch((e) => {
              console.log("setGIF error", e);
            });
        } else {
          getGIFBinary(url)
            .then((buffer) => applyGIF(comp, buffer, newProps.paused))
            .catch(console.warn);
        }
      }
    },
    paused(shouldPause) {
      applyGIF(comp, undefined, shouldPause);
    },
  };
  Object.keys(setter).forEach((key) => {
    if (newProps.hasOwnProperty(key)) {
      setter[key](newProps[key]);
    }
  });
  comp.dataset = {};
  Object.keys(newProps).forEach((prop) => {
    const index = prop.indexOf("data-");
    if (index === 0) {
      comp.dataset[prop.substring(5)] = newProps[prop];
    }
  });
}

export class GIFComp extends NativeGIF {
  constructor({ uid }) {
    super({ uid });
    this.uid = uid;

    const style = super.style;
    const that = this;
    this.style = new Proxy(this, {
      get(obj, prop) {
        if (styleGetterProp.includes(prop)) {
          return style[prop].call(that);
        }
      },
    });
  }
  setProps(newProps: GIFProps, oldProps: GIFProps) {
    setGIFProps(this, newProps, oldProps);
  }
  insertBefore(child, beforeChild) {}
  static tagName = "GIF";
  appendInitialChild(child) {}
  appendChild(child) {}
  removeChild(child) {}
  close() {
    super.close();
  }
  setStyle(style, type = STYLE_TYPE.PART_MAIN) {
    setStyle({
      comp: this,
      styleSheet: style,
      compName: "GIF",
      styleType: type,
      oldStyleSheet: null,
      isInit: false,
    });
  }
  moveToFront() {
    super.moveToFront();
  }
  moveToBackground() {
    super.moveToBackground();
  }
  scrollIntoView() {
    super.scrollIntoView();
  }
  pause() {
    super.pause();
  }
  resume() {
    super.resume();
  }
}
