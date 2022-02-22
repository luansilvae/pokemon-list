import currency from "currency.js";

export function format(value: number) {
  const formattedValue = currency(value, { fromCents: true, precision: 1 });

  return formattedValue.value;
}
