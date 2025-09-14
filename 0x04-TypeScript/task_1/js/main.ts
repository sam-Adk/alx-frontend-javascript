// Define an interface named Teacher
// This interface will describe the structure of a Teacher object
interface Teacher {
  readonly firstName: string; // readonly means it cannot be changed after initialization
  readonly lastName: string; // readonly means it cannot be changed after initialization
  fullTimeEmployee: boolean; // must always be defined
  yearsOfExperience?: number; // optional property
  location: string; // must always be defined
  [key: string]: any; // allows extra properties not defined above
}

// Example usage of the Teacher interface

// Teacher object with all required properties and an extra property "contract"
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // extra property allowed by [key: string]: any
};

// Log the object to see the structure in the console
console.log(teacher3);

// Expected output in the terminal/browser console:
// {
//   firstName: "John",
//   lastName: "Doe",
//   fullTimeEmployee: false,
//   location: "London",
//   contract: false
// }

// Define an interface for the function
interface printTeacherFunction {
  ({ firstName, lastName }: { firstName: string; lastName: string }): string;
}

// Implement the function with destructuring
// function printTeacher()
const printTeacher: printTeacherFunction = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}): string => {
  return `${firstName}. ${lastName}`;
};

console.log(printTeacher({ firstName: 'John', lastName: 'Doe' })); // J. Doe

// Interface describing the constructor of StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the methods of StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class definition StudentClass
// class StudentClass {}
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method workOnHomework returns "Currently working"
  workOnHomework(): string {
    return 'Currently working';
  }

  // Method displayName returns the firstName
  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework()); // Currently working
console.log(student.displayName()); // John
