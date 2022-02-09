import { EditorSpring } from "@code-hike/mini-editor";
import theme from "shiki/themes/one-dark-pro.json";

import "@code-hike/mini-editor/dist/index.css";

import { highlight } from "@code-hike/highlighter";
import type { Code } from "@code-hike/utils";

import React, { useEffect, useState } from "react";

export default function Editor({
  name = "index.js",
  code,
  style,
}: {
  name?: string;
  code: string;
  style: React.CSSProperties;
}) {
  const [highlightedCode, setHighlightedCode] = useState<Code | undefined>();

  useEffect(() => {
    async function loadHighlight() {
      const hightlighted = await highlight({ code: code.trim(), lang: "js", theme });

      setHighlightedCode(hightlighted);
    }
    loadHighlight();
  }, []);

  if (!highlightedCode) {
    return <div style={{ width: 1024, height: 900 }}>Loading...</div>;
  }

  return (
    <EditorSpring
      files={[
        {
          name,
          code: highlightedCode,
          focus: "",
          annotations: [],
        },
      ]}
      northPanel={{
        tabs: ["index.js"],
        active: "index.js",
        heightRatio: 1,
      }}
      codeConfig={{ theme: theme as unknown as any, minZoom: 1 }}
      frameProps={{ style }}
      style={style}
    />
  );
}
