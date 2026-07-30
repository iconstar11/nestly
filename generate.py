#!/usr/bin/env python3
"""
BnB Page Generator
Usage:  python generate.py clients/<folder>
        python generate.py clients/<folder> --open    # open in browser after build
"""

import sys
import yaml
import subprocess
from pathlib import Path
from jinja2 import Environment, FileSystemLoader

TEMPLATE_DIR = Path(__file__).parent / "template"
TEMPLATE_FILE = "page.html"


def icon_for(amenity: str) -> str:
    """Map an amenity string to an emoji icon using keyword matching."""
    text = amenity.lower()
    if "wifi" in text or "internet" in text:
        return "\U0001f4f6"
    if "kitchen" in text or "cook" in text:
        return "\U0001f373"
    if "parking" in text or "garage" in text:
        return "\U0001f697"
    if "tv" in text or "netflix" in text or "smart" in text:
        return "\U0001f4fa"
    if "ac" in text or "air condition" in text or "cooling" in text:
        return "❄️"
    if "shower" in text or "bath" in text or "hot water" in text:
        return "\U0001f6bf"
    if "security" in text or "guard" in text or "cctv" in text:
        return "\U0001f6e1️"
    if "wash" in text or "laundry" in text or "dryer" in text:
        return "\U0001f9fa"
    if "pool" in text or "swim" in text:
        return "\U0001f3ca"
    if "gym" in text or "fitness" in text or "workout" in text:
        return "\U0001f3cb️"
    if "garden" in text or "balcony" in text or "terrace" in text or "outdoor" in text:
        return "\U0001f33f"
    if "breakfast" in text or "meal" in text or "dinner" in text:
        return "\U0001f37d️"
    if "pet" in text or "dog" in text or "cat" in text:
        return "\U0001f436"
    if "wheelchair" in text or "accessible" in text:
        return "♿️"
    if "generator" in text or "power" in text or "electricity" in text or "backup" in text:
        return "⚡"
    if "cleaning" in text or "housekeeping" in text or "maid" in text:
        return "\U0001f9f9"
    if "desk" in text or "workspace" in text or "office" in text:
        return "\U0001f4bb"
    return "✅"


def load_config(client_dir: Path) -> dict:
    cfg_path = client_dir / "config.yaml"
    if not cfg_path.exists():
        print(f"❌  config.yaml not found in {client_dir}")
        sys.exit(1)
    with open(cfg_path, encoding="utf-8") as f:
        config = yaml.safe_load(f)
    # Defaults for optional fields
    config.setdefault("reviews", None)
    config.setdefault("coordinates", None)
    config.setdefault("map_embed_url", None)
    return config


def render(config: dict) -> str:
    env = Environment(loader=FileSystemLoader(str(TEMPLATE_DIR)), autoescape=False)
    env.filters["icon_for"] = icon_for
    template = env.get_template(TEMPLATE_FILE)
    return template.render(icon_for=icon_for, **config)


def generate(client_path: str, open_browser: bool = False):
    client_dir = Path(client_path)
    config = load_config(client_dir)

    html = render(config)

    out = client_dir / "index.html"
    out.write_text(html, encoding="utf-8")

    name = config.get("property_name", client_dir.name)
    area = config.get("area", "")
    print(f"✅  {name} ({area})")
    print(f"    File: {out}")
    print(f"    URL:  https://<username>.github.io/bnb-pages/{client_dir}/")

    if open_browser:
        subprocess.run(["open", str(out)], check=False)


if __name__ == "__main__":
    args = sys.argv[1:]
    if not args:
        print("Usage: python generate.py clients/<folder> [--open]")
        sys.exit(1)

    path = args[0]
    open_after = "--open" in args
    generate(path, open_after)
