// @ts-ignore
import * as mdast from "mdast-builder";
import zone from "mdast-zone";
import type { Node, Parent, Literal } from "unist";
import visit, { Visitor } from "unist-util-visit";

export default function remarkRehypePresenterNotes(noteCallback: (...nodes: Node[]) => void) {
  const transformZoneNote = (_: unknown, nodes: Node[]) => {
    noteCallback(...nodes);
    return [];
  };

  // @ts-ignore
  const transformLineNote: Visitor<Parent> = (node, index, parent) => {
    if (node.children.length === 0) return;
    if (node.children[0].type !== "text") return;

    const text = node.children[0] as Literal;
    const match = /^Notes: (.*)$/.exec(text.value as string);
    if (!match) return;

    noteCallback(mdast.paragraph(mdast.text(match[1])) as Node);
    parent!.children.splice(index, 1);
  };

  return (tree: Node) => {
    // @ts-ignore
    zone(tree, "notes", transformZoneNote);
    // @ts-ignore
    visit(tree, "paragraph", transformLineNote);
  };
}
