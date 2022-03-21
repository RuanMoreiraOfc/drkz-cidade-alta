export default parseCurrency;

function parseCurrency(locales: string | string[], currency: string) {
  return Intl.NumberFormat(locales, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format;
}
