def trim_words(val, num):
    if type(val) == str and type(num) == int:
        splitted = val.split(' ')
        return ' '.join(splitted[0:num])
    return False
