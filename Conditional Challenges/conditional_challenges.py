# Challenge 1

# Create two objects, each with different key and value pairs from the other object. Put the two objects' keys and values into a third object.
# Here is an example of the output:
# // first object output
# { id: 1, name: “ryan”}
#  
# // second object output
# { address: “123 fake st”,
# Phone: “555-555-5555”}
#  
# // third object output
# { id: 1, name: “ryan”, address: “123 fake st”, phone: “555-555-5555”}

dict_one = {
    'id': 1,
    'name': 'Ryan'
}
dict_two = {
    'address': '123 Fake St',
    'phone': '555-555-5555'
}
dict_three = {**dict_one, **dict_two}
print("Challenge 1 Output:")
print(dict_three)

# Challenge 2        

# Given two (2) numbers, check which is the largest. Within your code block use an if statement and ternary syntax.
# Here is an example of the output: largestNum(9,12) => 12

def largestNum(num1, num2):
    return num1 if num1 > num2 else num2
print("Challenge 2 Output:")
print(largestNum(9, 12))

# Challenge 3

# Create a program that will title case a string (capitalize the first letter of each word).
# Here is an example of the output: "I am a sentence" => "I Am A Sentence"

def title_case(string):
    return ' '.join(word.capitalize() for word in string.split())
print("Challenge 3 Output:")
print(title_case("I am a sentence"))

# Challenge 4

# Write a program that takes a string and returns the letters in alphabetical order.
# Here is an example of the output: "Hi there" => "eeehhhirt"
# BONUS: Make the output represent the input characters (each character returns capitalized).
def alphabetical_order(string):
    return ''.join(sorted(string.replace(" ", "")))
print("Challenge 4 Output:")
print(alphabetical_order("Hi there"))
