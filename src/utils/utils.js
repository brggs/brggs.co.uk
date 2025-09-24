export function readingTime(s) {
  const wpm = 200;
  const n = s
    .replace(/[^\w\s]/gi, "")
    .replaceAll("\r", "")
    .replaceAll("\n", "")
    .split(" ").length;

  return Math.ceil(n / wpm);
}