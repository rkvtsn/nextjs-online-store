export function toNumber(value: unknown, fallback: number): number {
  if (Array.isArray(value)) value = value[0];
  if (value === undefined || value === null || value === "") return fallback;
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const n = Number(value);
    return Number.isFinite(n) ? n : fallback;
  }
  return fallback;
}
