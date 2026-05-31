#!/usr/bin/env python3
"""Compare GUI test screenshots from two lvgljs builds."""

from __future__ import annotations

import argparse
import html
import sys
from datetime import datetime, timezone
from pathlib import Path

try:
    from PIL import Image, ImageChops, ImageStat
except ImportError as exc:
    print("Missing dependency:", exc, file=sys.stderr)
    print("Install with: pip install pillow", file=sys.stderr)
    sys.exit(2)

# Mean per-channel pixel difference below this is treated as equal.
EQUAL_THRESHOLD = 0.01


def png_name(test_rel: str) -> str:
    return test_rel.replace("/", "__") + ".png"


def test_rel_from_png(name: str) -> str:
    if not name.endswith(".png"):
        return name
    return name[:-4].replace("__", "/")


def compare_images(a_path: Path, b_path: Path, diff_path: Path) -> dict:
    img_a = Image.open(a_path).convert("RGB")
    img_b = Image.open(b_path).convert("RGB")
    if img_a.size != img_b.size:
        img_b = img_b.resize(img_a.size, Image.Resampling.NEAREST)
    diff = ImageChops.difference(img_a, img_b)
    stat = ImageStat.Stat(diff)
    mean_diff = sum(stat.mean) / len(stat.mean)
    diff.save(diff_path)
    return {
        "size": img_a.size,
        "mean_diff": mean_diff,
        "identical": mean_diff < EQUAL_THRESHOLD,
    }


def list_common_pngs(dir_a: Path, dir_b: Path, filter_text: str) -> list[str]:
    names_a = {p.name for p in dir_a.glob("*.png")}
    names_b = {p.name for p in dir_b.glob("*.png")}
    common = sorted(names_a & names_b)
    if not filter_text:
        return common
    return [name for name in common if filter_text in test_rel_from_png(name)]


def rel_href(from_dir: Path, target: Path) -> str:
    return Path(os_path_relpath(from_dir, target)).as_posix()


def os_path_relpath(from_dir: Path, target: Path) -> str:
    try:
        return target.resolve().relative_to(from_dir.resolve()).as_posix()
    except ValueError:
        return target.resolve().as_posix()


def write_html_report(
    html_path: Path,
    baseline_dir: Path,
    current_dir: Path,
    diff_dir: Path,
    baseline_label: str,
    current_label: str,
    results: list[tuple[str, dict, Path, Path, Path]],
) -> None:
    report_dir = html_path.parent
    total = len(results)
    diff_count = sum(1 for _, stats, _, _, _ in results if not stats["identical"])
    same_count = total - diff_count

    rows = []
    for test_rel, stats, baseline_path, current_path, diff_path in results:
        status = "same" if stats["identical"] else "diff"
        status_label = "Same" if stats["identical"] else f"Diff (mean {stats['mean_diff']:.2f})"
        rows.append(
            f"""
            <section class="test-card {status}" data-status="{status}">
              <header>
                <h2>{html.escape(test_rel)}</h2>
                <span class="badge {'ok' if stats['identical'] else 'warn'}">{html.escape(status_label)}</span>
              </header>
              <p class="meta">Size: {stats['size'][0]} x {stats['size'][1]}</p>
              <div class="shots">
                <figure>
                  <figcaption>{html.escape(baseline_label)}</figcaption>
                  <img src="{html.escape(rel_href(report_dir, baseline_path))}" alt="{html.escape(baseline_label)}" loading="lazy">
                </figure>
                <figure>
                  <figcaption>{html.escape(current_label)}</figcaption>
                  <img src="{html.escape(rel_href(report_dir, current_path))}" alt="{html.escape(current_label)}" loading="lazy">
                </figure>
                <figure>
                  <figcaption>Diff</figcaption>
                  <img src="{html.escape(rel_href(report_dir, diff_path))}" alt="Diff" loading="lazy">
                </figure>
              </div>
            </section>
            """
        )

    generated_at = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    page = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>lvgljs screenshot comparison</title>
  <style>
    :root {{
      color-scheme: light dark;
      --bg: #f4f6f8;
      --card: #ffffff;
      --text: #1f2937;
      --muted: #6b7280;
      --border: #d1d5db;
      --ok: #047857;
      --warn: #b45309;
    }}
    @media (prefers-color-scheme: dark) {{
      :root {{
        --bg: #111827;
        --card: #1f2937;
        --text: #f9fafb;
        --muted: #9ca3af;
        --border: #374151;
        --ok: #34d399;
        --warn: #fbbf24;
      }}
    }}
    * {{ box-sizing: border-box; }}
    body {{
      margin: 0;
      font: 14px/1.5 system-ui, -apple-system, Segoe UI, sans-serif;
      background: var(--bg);
      color: var(--text);
    }}
    .page {{
      max-width: 1400px;
      margin: 0 auto;
      padding: 24px;
    }}
    h1 {{ margin: 0 0 8px; font-size: 1.6rem; }}
    .summary {{
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin: 16px 0 24px;
    }}
    .pill {{
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 999px;
      padding: 8px 14px;
    }}
    .controls {{
      display: flex;
      gap: 12px;
      align-items: center;
      margin-bottom: 20px;
    }}
    .controls label {{ color: var(--muted); }}
    .test-card {{
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 16px;
    }}
    .test-card header {{
      display: flex;
      justify-content: space-between;
      gap: 12px;
      align-items: center;
      margin-bottom: 8px;
    }}
    .test-card h2 {{
      margin: 0;
      font-size: 1rem;
      word-break: break-all;
    }}
    .badge {{
      font-size: 0.85rem;
      font-weight: 600;
      white-space: nowrap;
    }}
    .badge.ok {{ color: var(--ok); }}
    .badge.warn {{ color: var(--warn); }}
    .meta {{ margin: 0 0 12px; color: var(--muted); }}
    .shots {{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 12px;
    }}
    figure {{
      margin: 0;
      border: 1px solid var(--border);
      border-radius: 8px;
      overflow: hidden;
      background: #000;
    }}
    figcaption {{
      padding: 6px 10px;
      background: var(--bg);
      color: var(--muted);
      font-size: 0.85rem;
    }}
    img {{
      display: block;
      width: 100%;
      height: auto;
    }}
    .hidden {{ display: none !important; }}
  </style>
</head>
<body>
  <div class="page">
    <h1>lvgljs screenshot comparison</h1>
    <p class="meta">Generated {generated_at}</p>
    <div class="summary">
      <div class="pill"><strong>{total}</strong> compared</div>
      <div class="pill"><strong>{same_count}</strong> identical</div>
      <div class="pill"><strong>{diff_count}</strong> visual diffs</div>
      <div class="pill">Baseline: {html.escape(str(baseline_dir))}</div>
      <div class="pill">Current: {html.escape(str(current_dir))}</div>
    </div>
    <div class="controls">
      <label for="filter">Show:</label>
      <select id="filter">
        <option value="all">All tests</option>
        <option value="diff" selected>Differences only</option>
        <option value="same">Identical only</option>
      </select>
    </div>
    {''.join(rows)}
  </div>
  <script>
    const filter = document.getElementById('filter');
    const cards = Array.from(document.querySelectorAll('.test-card'));
    function applyFilter() {{
      const mode = filter.value;
      cards.forEach((card) => {{
        const status = card.dataset.status;
        const show = mode === 'all' || mode === status;
        card.classList.toggle('hidden', !show);
      }});
    }}
    filter.addEventListener('change', applyFilter);
    applyFilter();
  </script>
</body>
</html>
"""
    html_path.parent.mkdir(parents=True, exist_ok=True)
    html_path.write_text(page, encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Compare lvgljs GUI test screenshots from two capture runs"
    )
    parser.add_argument(
        "--baseline",
        type=Path,
        required=True,
        help="Screenshot directory from the reference lvgljs build",
    )
    parser.add_argument(
        "--current",
        type=Path,
        required=True,
        help="Screenshot directory from the lvgljs build under test",
    )
    parser.add_argument(
        "--out",
        type=Path,
        default=Path("_compare"),
        help="Directory for comparison results (default: _compare)",
    )
    parser.add_argument(
        "--diff-out",
        type=Path,
        help="Directory for diff PNGs (default: <out>/_diff)",
    )
    parser.add_argument(
        "--html-out",
        type=Path,
        help="Write a side-by-side HTML report to this file (default: <out>/compare-report.html)",
    )
    parser.add_argument(
        "--no-html",
        action="store_true",
        help="Skip writing the HTML report",
    )
    parser.add_argument(
        "--baseline-label",
        default="Baseline",
        help="Label for baseline screenshots in the HTML report",
    )
    parser.add_argument(
        "--current-label",
        default="Current",
        help="Label for current screenshots in the HTML report",
    )
    parser.add_argument("--filter", default="", help="Substring filter for test paths")
    args = parser.parse_args()

    baseline_dir = args.baseline.resolve()
    current_dir = args.current.resolve()
    out_dir = args.out.resolve()
    diff_dir = (args.diff_out or (out_dir / "_diff")).resolve()
    html_path = (args.html_out or (out_dir / "compare-report.html")).resolve()

    if not baseline_dir.is_dir():
        print(f"Baseline directory not found: {baseline_dir}", file=sys.stderr)
        return 1
    if not current_dir.is_dir():
        print(f"Current directory not found: {current_dir}", file=sys.stderr)
        return 1

    png_names = list_common_pngs(baseline_dir, current_dir, args.filter)
    if not png_names:
        print("No matching PNG pairs found.")
        return 1

    diff_dir.mkdir(parents=True, exist_ok=True)
    print(f"Comparing {len(png_names)} screenshot(s)")
    print(f"  baseline: {baseline_dir}")
    print(f"  current:  {current_dir}")
    print(f"  output:   {out_dir}")
    print(f"  diffs:    {diff_dir}\n")

    diffs = []
    report_rows = []
    for name in png_names:
        test_rel = test_rel_from_png(name)
        a_path = baseline_dir / name
        b_path = current_dir / name
        diff_path = diff_dir / name
        stats = compare_images(a_path, b_path, diff_path)
        status = "SAME" if stats["identical"] else f"DIFF mean={stats['mean_diff']:.2f}"
        print(f"  {status}  {test_rel}")
        report_rows.append((test_rel, stats, a_path, b_path, diff_path))
        if not stats["identical"]:
            diffs.append((test_rel, stats))

    print(f"\nVisual diffs: {len(diffs)}/{len(png_names)}")
    for test_rel, stats in diffs:
        print(f"  - {test_rel} (mean pixel diff {stats['mean_diff']:.2f})")
    print(f"Diff images saved under {diff_dir}")

    if not args.no_html:
        write_html_report(
            html_path,
            baseline_dir,
            current_dir,
            diff_dir,
            args.baseline_label,
            args.current_label,
            report_rows,
        )
        print(f"HTML report written to {html_path}")

    return 1 if diffs else 0


if __name__ == "__main__":
    raise SystemExit(main())
