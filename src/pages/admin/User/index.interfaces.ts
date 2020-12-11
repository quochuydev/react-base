export interface Data {
  id: number;
  name: string;
  date: string;
}

export interface Column {
  id: 'name' | 'email' | 'date';
  label: string;
  minWidth?: number;
  align?: 'right';
  render?: (value: Data) => TODO;
}
