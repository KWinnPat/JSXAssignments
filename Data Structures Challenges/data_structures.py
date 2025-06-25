# 1st challenge

person = {
  'id': 1138,
  'name': "John Doe",
  'age': 25,
  'dob': "1998-01-01",
  'gradesCompleted': [10, 11, 12],
  'classGrades': {
    'mathAssignmentGrades': {
      'assignmentOne': 93,
      'assignmentTwo': 97,
    },
    'languageAssignmentGrades': {
      'assignmentOne': 81,
      'assignmentTwo': 85,
    },
},
  'deleteMe': "To be deleted",
}

print(f'Person {person['id']} has been through grade {', '.join(map(str, person['gradesCompleted']))}.'
)
del person['deleteMe']
print(person)

# 2nd challenge
user = {
  'firstName': "Kai",
  'lastName': "Winn",
  'city': "Vernal",
  'semesters': {
    'semesterOne': "incomplete",
    'semesterTwo': "incomplete",
    'semesterThree': "incomplete",
    'semesterFour': "incomplete",
  },
}

user["semesters"]["semesterOne"] = "complete"
del user["semesters"]["semesterFour"]
user["favoriteLanguage"] = "Python"
print(user)

# 3rd challenge

def AlternatingArray(array):
  arrayCopy = array
  while (len(arrayCopy) > 0):
    instanceFront = arrayCopy.pop(0)
    print(instanceFront)
    if len(arrayCopy) == 0:
      break
    instanceEnd = arrayCopy.pop()
    print(instanceEnd)
    if len(arrayCopy) == 0:
      break

AlternatingArray([1, 2, 3, 4, 5])
