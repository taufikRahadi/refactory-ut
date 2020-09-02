# No 1
print('Nomor 1')
first = ['Behind', 'every', 'great', 'man']
second = ['is', 'a', 'woman']
third = ['rolling', 'her', 'eyes']

# bisa gini
print(" ".join(first + second + third))

# bisa gini
result = []

for e in first:
    result.append(e)

for e in second:
    result.append(e)

for e in third:
    result.append(e)

print(" ".join(result))


# No 2
print('Nomor 2')
menus = ["chicken strip", "beef burger", "steakhouse", "mushroom swiss", "whopper"] # List A
price = [15,10,12,20,30] # List B

merged = dict(zip(menus, price))
data_sorted = { k: v for k, v in sorted(merged.items(), key=lambda item: item[1]) }

print(data_sorted)

# No 3
print('Nomor 3')
text_1 = "Mammals"
text_2 = "Bruiser build"
asterisk = '*'


def count_chars(text):
    result = []
    count = []

    for char in text:
        result.append(char.lower())

    for res in result:
        count.append(asterisk * text.lower().count(res))

    char = dict(zip(result, count))
    return char

print(count_chars(text_1))
print(count_chars(text_2))

# No 4
print('Nomor 4')
a = [12,3,5,4,8,9]

def bubble_sort(num):
    for j in range(len(a)):
        swapped = False
        i = 0
        while i<len(a)-1:
            if a[i]>a[i+1]:
                a[i],a[i+1] = a[i+1],a[i]
                swapped = True
            i = i+1
        print('Step %d' % (j + 1) + ' :')
        print(a)
        if swapped == False:
            break
bubble_sort(a)

# No 5
print('Nomor 5')
secret_text = "23dn3ir30fd2eddd"

def masking(text):
    special_char = '*'
    return special_char * (len(text) - 3) + text[-3:]

print(masking(secret_text))

# No 6

