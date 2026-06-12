import assert from "node:assert/strict";
import { describe, it } from "node:test";

import "../../lv.setup.spec";
import { ANIM_PATH } from "../../lv_types";
import { TRANSITION_PROP } from "../../style_prop";
import { runPipeFull } from "../pipe.harness";
import { TransStyle } from "./trans";

describe("TransStyle pipe", () => {
  it("builds transition tuple from TRANSITION_PROP", () => {
    const { result } = runPipeFull(TransStyle, {
      "transition-property": "width, opacity",
      "transition-duration": "300ms",
      "transition-timing-function": "linear",
      "transition-delay": "100ms",
    });
    assert.deepEqual(result.transition, [
      2,
      [TRANSITION_PROP.width, TRANSITION_PROP.opacity],
      300,
      ANIM_PATH.linear,
      100,
    ]);
  });

  it("resolves transition aliases and typo hints", () => {
    const { result } = runPipeFull(TransStyle, {
      "transition-property": "padding-row, boder-post",
    });
    assert.deepEqual(result.transition?.[1], [
      TRANSITION_PROP["row-spacing"],
      TRANSITION_PROP["border-post"],
    ]);
  });

  it("parses translate and rotate into batch props", () => {
    const { map } = runPipeFull(TransStyle, {
      transform: "translate(10px, 20px) rotate(45deg)",
    });
    assert.equal(map.get("translateX"), 10);
    assert.equal(map.get("translateY"), 20);
    assert.equal(map.get("rotate"), 45);
  });

  it("maps scale to img-scale for Image", () => {
    const { map } = runPipeFull(
      TransStyle,
      { transform: "scale(1.5)" },
      "Image",
    );
    assert.equal(map.get("img-scale"), 384);
    assert.equal(map.has("scale"), false);
  });

  it("pushes img-origin for Image transform-origin", () => {
    const { map } = runPipeFull(
      TransStyle,
      { "transform-origin": "10px 20px" },
      "Image",
    );
    assert.deepEqual(map.get("img-origin"), [10, 20]);
  });

  it("maps rotate to img-rotate for Image", () => {
    const { map } = runPipeFull(
      TransStyle,
      { transform: "rotate(90deg)" },
      "Image",
    );
    assert.equal(map.get("img-rotate"), 90);
    assert.equal(map.has("rotate"), false);
  });

  it("maps scaleX and scaleY to chart-scale props for Chart", () => {
    const { map } = runPipeFull(
      TransStyle,
      { transform: "scaleX(2) scaleY(0.5)" },
      "Chart",
    );
    assert.equal(map.get("chart-scaleX"), 512);
    assert.equal(map.get("chart-scaleY"), 128);
    assert.equal(map.has("scaleX"), false);
  });

  it("filters unknown transition properties", () => {
    const { result } = runPipeFull(TransStyle, {
      "transition-property": "width, not-a-prop, opacity",
    });
    assert.equal(result.transition?.[0], 2);
    assert.deepEqual(result.transition?.[1], [
      TRANSITION_PROP.width,
      TRANSITION_PROP.opacity,
    ]);
  });

  it("builds empty transition prop list when all names are unknown", () => {
    const { result } = runPipeFull(TransStyle, {
      "transition-property": "foo, bar",
    });
    assert.deepEqual(result.transition?.[0], 0);
    assert.deepEqual(result.transition?.[1], []);
  });

  it("does not set transition when transition-property is absent", () => {
    const { result } = runPipeFull(TransStyle, {
      "transition-duration": "200ms",
    });
    assert.equal(result.transition, undefined);
  });

  it("ignores transform-origin for non-Image components", () => {
    const { map } = runPipeFull(TransStyle, {
      "transform-origin": "10px 20px",
    });
    assert.equal(map.has("img-origin"), false);
  });
});
