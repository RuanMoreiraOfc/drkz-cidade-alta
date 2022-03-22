export default parseCurrencyDescription;

type SingularPlural = { singular: string; plural: string };

type Parameters =
  | {
      integer: SingularPlural;
      decimals: SingularPlural;
      decimalUnion: string;
    }
  | {
      integer: SingularPlural;
      decimals?: never;
      decimalUnion?: never;
    };

function parseCurrencyDescription(
  units = {
    integer: { singular: 'real', plural: 'reais' },
    decimals: { singular: 'centavo', plural: 'centavos' },
    decimalUnion: 'e',
  } as Parameters,
) {
  return function (value: number) {
    const [integerUnit, decimalUnit] = value.toFixed(2).split('.').map(Number);

    const integerLabel =
      integerUnit === 0
        ? ''
        : integerUnit === 1 //
        ? units.integer.singular
        : units.integer.plural;
    const decimalLabel =
      units.decimals &&
      (decimalUnit === 0 && integerUnit !== 0
        ? ''
        : decimalUnit === 1 //
        ? units.decimals.singular
        : units.decimals.plural);

    // ***

    const fullLabel = `${
      integerUnit > 0 //
        ? `${integerUnit} ${integerLabel}`
        : ''
    } ${
      units.decimalUnion &&
      (integerUnit > 0 && decimalUnit > 0 //
        ? units.decimalUnion
        : '')
    } ${
      decimalUnit > 0 //
        ? `${decimalUnit} ${decimalLabel}`
        : ''
    }`.trim();

    return fullLabel;
  };
}
