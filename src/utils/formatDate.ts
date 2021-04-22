export default function formatDate(value: number | string) {
  let valueFormated;
  valueFormated = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    year: "2-digit",
    month: "short",
    day: "numeric",
  }).format(new Date(value));
  return valueFormated;
}
