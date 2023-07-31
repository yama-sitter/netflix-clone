export function truncate(str: string, num: number) {
  return str.length > num ? `${str.substr(0, num - 1)}...` : str;
}
