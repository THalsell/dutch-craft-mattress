export function updateArrayItem<T>(
  items: T[],
  setItems: (items: T[]) => void,
  i: number,
  field: string,
  value: string,
) {
  const updated = [...items];
  updated[i] = { ...updated[i], [field]: value };
  setItems(updated);
}
