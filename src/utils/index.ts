export function getImg(filepath) {
  return new URL(`../assets/${filepath}`, import.meta.url).href;
}
