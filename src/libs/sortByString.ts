export default sortByString;

function sortByString(ascending: boolean) {
  return (a: string, b: string) =>
    ascending //
      ? a.localeCompare(b, ['pt-br'])
      : b.localeCompare(a, ['pt-br']);
}
