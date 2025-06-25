# Write a program that prompts the user to guess a randomly generated number between 1 and 100. Keep prompting until the user guesses correctly. It should tell the user if the number is higher or lower then there current guess
while True:
    import random
    number = random.randint(1, 100)
    guess = int(input("Guess a number between 1 and 100: "))
    
    while guess != number:
        if guess < number:
            print("Higher!")
        else:
            print("Lower!")
        guess = int(input("Try again: "))
    
    print(f"Congratulations! You've guessed the number: {number}")
    break

# Write a program that extracts values form an array at specific indices and returns the values in a new array.
# Here is an example of potential output: removeByIndex[‘a', 'b', 'c', 'd', 'f', 'f', 'e', 'f'], [1, 5]) => ['b', 'f']]

def removeByIndex(arr, indices):
    return [arr[i] for i in indices if i < len(arr)]
print(removeByIndex(['a', 'b', 'c', 'd', 'f', 'f', 'e', 'f'], [1, 5]))


# Write a program that converts a number into an array of numbers. Ensure each element in the array is a number data type and NOT a string data type.
# Here is an example of potential output: numToArray(12345) => [1, 2, 3, 4, 5]

def numToArray(num):
    return [int(digit) for digit in str(num)]
print(numToArray(12345))

# Write a program to create a new matrix of arrays from two arrays of numbers and strings.

def createMatrix(arr1, arr2):
    matrix = []
    for i in range(len(arr1)):
        if i < len(arr2):
            matrix.append([arr1[i], arr2[i]])
        else:
            matrix.append([arr1[i], None])
    return matrix
print(createMatrix([1, 2, 3], ['a', 'b', 'c', 'd']))
