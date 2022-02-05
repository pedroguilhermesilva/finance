export default function fomartDateToSetDefaultInputDate(value: string) {
  return value && new Date(value)?.toISOString().substring(0, 10);
}
