export default sanitize;

function sanitize(input: string, separator: string) {
  return input
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, separator)
    .toLowerCase();
}
