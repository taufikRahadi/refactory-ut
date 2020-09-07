from collections import Counter

def mode(arr):
    if type(arr) != list:
        return False
    return Counter(arr).most_common(1)[0][0]
