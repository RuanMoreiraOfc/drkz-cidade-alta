export default sortByNumber;

function sortByNumber(ascending: boolean) {
  return (a: number, b: number) =>
    ascending //
      ? a - b
      : b - a;
}
