export function removeUrlSpace(input: string) {
  return input.split(' ').join('-');
}

export function kebabToSpace(input: string): string {
  return input.replace(/-/g, ' ');
}
