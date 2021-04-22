export default function formatCurrency(value: number | string) {
  let valueFormated;
  if (typeof value === "string") {
    valueFormated = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(value));
  } else {
    valueFormated = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }
  return valueFormated;
}
