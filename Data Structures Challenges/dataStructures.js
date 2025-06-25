//1st challenge

const person = {
  id: 1138,
  name: "John Doe",
  age: 25,
  dob: "1998-01-01",
  gradesCompleted: [10, 11, 12],
  classGrades: {
    mathAssignmentGrades: {
      assignmentOne: 93,
      assignmentTwo: 97,
    },
    languageAssignmentGrades: {
      assignmentOne: 81,
      assignmentTwo: 85,
    },
  },
  deleteMe: "To be deleted",
};

console.log(
  `Person ${person.id} has been through grade ${person.gradesCompleted.join(
    ", "
  )}.`
);
delete person.deleteMe;
console.log(person);

// 2nd challenge

const user = {
  firstName: "Kai",
  lastName: "Winn",
  city: "Vernal",
  semesters: {
    semesterOne: "incomplete",
    semesterTwo: "incomplete",
    semesterThree: "incomplete",
    semesterFour: "incomplete",
  },
};

user["semesters"]["semesterOne"] = "complete";
delete user["semesters"]["semesterFour"];
user["favoriteLanguage"] = "Python";
console.log(user);

// 3rd challenge

function AlternatingArray(array) {
  arrayCopy = array;
  while (arrayCopy.length > 0) {
    instanceFront = arrayCopy.shift();
    console.log(instanceFront);
    instanceEnd = arrayCopy.pop();
    console.log(instanceEnd);
  }
}

AlternatingArray([1, 2, 3, 4, 5]);
