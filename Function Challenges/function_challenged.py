# Write a program that takes an array of words and returns the longest word.
# ['a'. 'b', 'cc'] => 'cc'

def longestWord(words):
    if not words:
        return None
    return max(words, key=len)
print(longestWord(['a', 'b', 'cc', 'ddd']))

# Write a program that swaps the first and last characters of a string.
# 'ryan' => 'nyar'

def swapFirstLast(s):
    if len(s) < 2:
        return s
    return s[-1] + s[1:-1] + s[0]
print(swapFirstLast('ryan'))

# Write a program that finds the sum of a list of numbers.
# [1, 2, 3] => 6

def sumOfList(numbers):
    return sum(numbers)
print(sumOfList([1, 2, 3]))

# Combine two arrays by alternatingly taking elements from each at every iteration.
# EX: [1, 2, 3], [4, 5, 6] => [1, 4, 2, 5, 3, 6]

def combineArrays(arr1, arr2):
    combined = []
    for i in range(max(len(arr1), len(arr2))):
        if i < len(arr1):
            combined.append(arr1[i])
        if i < len(arr2):
            combined.append(arr2[i])
    return combined
print(combineArrays([1, 2, 3], [4, 5, 6]))

# Create a title case program
# EX: "I am a sentence" => "I Am A Sentence"

def titleCase(sentence):
    return ' '.join(word.capitalize() for word in sentence.split())
print(titleCase("I am a sentence"))

# Return longest word in a string
# EX: "This string has several different values" => "different"

def longestWordInString(sentence):
    words = sentence.split()
    if not words:
        return None
    return max(words, key=len)
print(longestWordInString("This string has several different values"))

# Write a program that takes a string and returns the letters in alphabetical order
# EX: "Hi there" => "eehhirt"

def alphabeticalOrder(sentence):
    return ''.join(sorted(sentence.replace(" ", "")))
print(alphabeticalOrder("Hi there"))


# Write a program that returns extracted values from an array using specified indices and puts them into a new array.
# ['a', 'b', 'c', 'd'], [1, 3] => ['b', 'd']
# ['a', 'b', 'c', 'd'] is the original code.
# [1, 3] is the specified indices fo the array (index 1 and index 3)
# [b, d] is the new array returned from the specified indices.

def extractValues(arr, indices):
    return [arr[i] for i in indices if i < len(arr)]
print(extractValues(['a', 'b', 'c', 'd'], [1, 3]))

# Complete the following steps:
# Create an object name 'user'. Give the object 2 (two) properties named userName and activeStatus
# the userName property should take any string value.
# the starter (or default) for the activeStatus property should be set to 'away'.
# Write an arrow function
# that changes the activeStatus to 'active'
# returns an interpolated string that contains the userName and activeStatus values.
# login(user) => 'ryan is active'

# Note: Use string interpolation. Avoid hardcoding this.

user = {
    'userName': 'ryan',
    'activeStatus': 'away'
}
login = lambda user: f"{user['userName']} is {user['activeStatus']}"
def changeStatusToActive(user):
    user['activeStatus'] = 'active'
    return login(user)
print(changeStatusToActive(user))

# Write a function that takes a base value and an exponent and will return the product (power).
# pow(4,2) => 16

def power(base, exponent):
    for i in range(exponent - 1):
        base *= base
    return base
print(power(4, 2))