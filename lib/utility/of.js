export default function of(item) {
  return Array.isArray(item) ? item : Array.of(item);
}
