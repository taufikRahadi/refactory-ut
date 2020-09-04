def trim(str, index):
    return f'{str[0:index]}...'

tulisanPanjang = trim("ini adalah tulisan yang sangat panjang",8)
print(tulisanPanjang)
