/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Create a RowElement object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert row
const newRowID: RowID = CRUD.insertRow(row);

// Update row with age
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// Call updateRow
CRUD.updateRow(newRowID, updatedRow);

// Call deleteRow
CRUD.deleteRow(newRowID);

