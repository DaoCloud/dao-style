export default function getWindowSize() {
  const height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
  const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
  return {
    height,
    width,
  };
}
