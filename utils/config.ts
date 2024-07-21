export function getObjectByConfigValue(
  arr: { id: string; config: string; value: string }[],
  configValue: string,
) {
  return arr.find((item) => item.config === configValue);
}
