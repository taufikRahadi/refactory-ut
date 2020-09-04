from collections import Counter

def mode(arr):
    return Counter(arr).most_common(1)[0][0]

numbers = [1,2,3,4,5,6,6,8,8,6,9]
grades = [87.5, 88.5, 60.5, 90.5, 88.5]

print(mode(numbers))
print(mode(grades))
