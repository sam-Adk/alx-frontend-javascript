// Define a type for row IDs
export type RowID = number;

// Define the shape of a Row element
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // optional
}

