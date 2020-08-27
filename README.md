Demo: https://vue-route-a9be5.web.app/

Routes: [**Posts**, **Photos**, **Albums**]

Halaman list pakai component ListLayout
Card component flow:
1. assign props data berupa objek
2. didalemnya ada slot image, description
3. default value yg di print adalah title

Pagination component flow:
1. assign props totalPages
2. totalPages kan type nya number ternyata bisa juga di loop pake v-for
3. loop totalPages di dalam element mirip card

ListLayout component data flow:
1. assign props data
2. data di proses menggunakan method paginate dan paramater data tadi
3. didalam paginate array data tadi di slice
4. buat computed properties dataWithPagination yang isinya adalah data yg sudah di proses di method paginate
5. dapetin total data dengan cara length array data / 10 (karena data yg ditampilkan per page itu 10)
6. lalu di cek hasil bagi tadi bilangan bulat atau tidak kalau iya return hasil kalau enggak return hasil + 1
7. di dalam template ada slot card, yang isinya buat nampilin list card
8. di slot card assign props dataWithPagination = computed properties dari data yang sudah di paginate tadi
9. slot fallback nya adalah card,didalemnya make slot juga buat nampilin link
10. diluar slot card ada component pagination
11. component pagination ngambil props totalPages yg didapetin dari point no 5, 6

DetailLayout component flow:
1. assign props data
2. pakai component card
3. di dalem component card tadi assign props data tadi ke props component card (naon atuh)
