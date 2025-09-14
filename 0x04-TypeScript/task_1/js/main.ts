// task_1/js/main.ts

// 1. Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// 2. Directors extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// 3. printTeacher function + interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// 4. Interfaces for StudentClass
// Constructor interface
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Student class interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// 5. Class implementation
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// 6. Example usage
const student: StudentClassInterface = new StudentClass("Samuel", "Adikah");

console.log(printTeacher("John", "Doe")); // J. Doe
console.log(student.displayName());       // Samuel
console.log(student.workOnHomework());    // Currently working

