def check_leap(year):
    if type(year) != int:
        return False
    if (year % 400 == 0):
        return "Kabisat"
    return "Bukan Kabisat"
