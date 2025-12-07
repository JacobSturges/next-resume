export function cn(...args: (string | undefined | boolean)[]) {
  const parts = args
    .filter((arg): arg is string => typeof arg === "string")
    .map((s) => s.replaceAll(/\s+/g, " ").trim())

  return parts.join(" ")
}
