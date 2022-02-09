// Indent to smallest non-empty whitespace level and trim start / end of string.
const indentNormalizer = (val: string) => {
  let prefix: string | null = null;

  return (val || "")
    .split("\n")
    .filter((line) => {
      const [cur, remainder] = (line.match(/^([ ]*)([^ ]+)/) || []).slice(1);

      // eslint-disable-next-line no-return-assign
      return remainder
        ? ((prefix = prefix === null || cur.length < prefix.length ? cur : prefix), !0)
        : prefix !== null;
    })
    .map((line) => (prefix ? line.replace(prefix, "") : line))
    .join("\n")
    .trim();
};
export default indentNormalizer;
