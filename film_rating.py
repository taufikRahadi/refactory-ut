def check_rating(age):
    if type(age) != int:
        return False
    
    output = ''

    if age < 9:
        output += "semua usia"
    elif age <= 13:
        output += "bimbingan orang tua"
    elif age <= 21:
        output += "remaja"
    else:
        output += "dewasa"
    
    return output.upper()
