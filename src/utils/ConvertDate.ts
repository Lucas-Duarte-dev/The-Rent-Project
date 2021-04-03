export default function ConvertDate(timestamp: string) {
  const getYear = timestamp.split(/([A-Z])\w+/g);
  const year = getYear[0];
  const date = year.replace(/-/g, "/");

  return date;
}
