#variables & data types 
"""name = "Vishwa_Raj"
age = 21
is_student = True

print("Name:", name)
print("Age:", age)
print("Is Student:", is_student)"""


#  OPERETORS
# Arithmetic operations :- +,- ,*, /, %, **, //
#comperison operators :- ==, !=, >, <, >=, <=
# Logical operators :- and, or, not

"""print("This is Arithmetic Operators")
print(2**3)
print(2//3)
print(2%3)
print(2+3)
print(2-3)  
print(2*3)
print(2/3)"""

#comparison operators

"""print("This is Comparison Operators")
print(2==2)
print(2==3)
print(2!=2)
print(2!=3)
print(2>2)
print(2>3)
print(2<2)
print(2<3)
print(2<=2)
print(2<=3)
print(2>=2)
print(2>=3)"""

# Logical operators

"""print("This is Logical Operators")
print(True and True)
print(True and False)
print(False and True)
print(False and False)
print(True or True)
print(True or False)
print(False or True)
print(False or False)
print(not True)
print(not False)"""    

#Conditional Statements:- if, elif, else

"""print("This is Conditional Statements")
if age > 18:
    print("Adult")
elif age == 18:
    print("Just turned adult")
else:
    print("Minor")"""


# Loops: for, while
"""print("This is For Loop")
for i in range(5):
    print(i)

print("This is While Loop")
count = 0
while count < 101:
    print(count)
    count += 1  """

# Functions: def, return

"""def greet(name):
    return f"Hello, {name}!"
print(greet("Vishwa_Raj"))

def greet(name="Guest"): 
    return f"Hello, {name}!"
print(greet())"""




# START WEEK 2 ASSIGNMENT
# Data Structures: List, Tuple, Set, Dictionary

#List creation and 

""" my_list = [1,2,3,4,5,6,7,8,9,0]
print("This is List")
print(my_list)

fruits = ["apple", "banana", "cherry","mango","orange"] """


#Methods in List:- append, insert, remove, pop, sort, reverse
""" fruits.append("pineapple")
print("This is List after appending")  
print(fruits)

fruits.insert(2, "kiwi")
print("This is List after inserting kiwi at index 2")   
print(fruits)

fruits.remove("cherry")
print("This is List after removing cherry")
print(fruits)

fruits.pop()
print("This is List after popping last element")
print(fruits)

fruits.sort()
print("This is List after sorting")
print(fruits)

fruits.reverse()
print("This is List after reversing")
print(fruits) """


""" squares = [x**2 for x in range(10)]
print("This is List of squares from 0 to 9")    
print(squares) """


# Tuple creation and methods

t = (1, 2, 3, 4, 5)
print("This is Tuple")
print(t)
# Methods in Tuple: count, index
print("Count of 2 in tuple:", t.count(2))
print("Index of 3 in tuple:", t.index(3))

# Set creation and methods
s = {1, 2, 3, 4, 5}
print("This is Set")
print(s)
# Methods in Set: add, remove, pop, union, intersection

