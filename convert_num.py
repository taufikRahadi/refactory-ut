def Convert(bil):
    if type(bil) != int:
        return False

    angka=["","Satu","Dua","Tiga","Empat","Lima",
    "Enam","Tujuh","Delapan",
    "Sembilan","Sepuluh","Sebelas"]
    n = int(bil)
    hasil =""
    if n >= 0 and n <= 11:
        hasil = hasil + angka[n]
    elif n < 20:
        hasil = Convert(n % 10) + " Belas"
    elif n < 100:
        hasil = Convert(n / 10) + " Puluh" + Convert(n % 10)
    elif n < 200:
        hasil = " Seratus" + Convert(n - 100)
    elif n < 1000:
        hasil = Convert(n / 100) + " Ratus" + Convert(n % 100)
    elif n == 1000 :
        hasil = " Seribu"
    else:
        hasil="Angka hanya sampai seribu"
    return hasil