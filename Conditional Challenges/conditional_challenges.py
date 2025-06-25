# Challenge 1

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

def largestNum(num1, num2):
    return num1 if num1 > num2 else num2
print("Challenge 2 Output:")
print(largestNum(9, 12))

# Challenge 3

def title_case(string):
    return ' '.join(word.capitalize() for word in string.split())
print("Challenge 3 Output:")
print(title_case("I am a sentence"))

# Challenge 4

def alphabetical_order(string):
    return ''.join(sorted(string.replace(" ", "").upper()))
print("Challenge 4 Output:")
print(alphabetical_order("Hi there"))
