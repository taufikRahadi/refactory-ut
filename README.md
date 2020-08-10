# Rest API Express and Sequelize

### Installation

buat db dulu namanya mvc, atau nama lain juga bisa tapi di ubah dulu env nya
```
node init.js
yarn start
```
<hr />

### Endpoint auth
1. __/auth/login__ 
    endpoint login, request body nya username, password
    response nya token
2. __/auth/signup__
    endpoint signup, request body nya sama kayak create author
    responsenya data user baru
3. __auth/current-user__
    endpoint buat dapetin data user pake token, jangan lupa pake header
    Authorization Bearer trus dikasi token

<hr />

### Endpoint upload
1. __/post/__
    ini  endpoint buat create post, cuma ada tambahan upload photo ke cloudinary
    - request body nya
        1. title
        2. content
        3. tags
        4. status
        5. photo __(select file)__
    - Content-Type nya *multipart/form-data*
    - token required

<hr />

### Auth Flow
1. akses endpoint login
2. cek username, username ketemu lanjut step 3, kalo engga throw error
3. cek password sama gak kayak payload, kalo sama lanjut step 4, kalo engga throw error
4. generate token dari userid sama salt yg di env
5. set token expire 7 hari
6. return response token
7. get user data pake token
    - token di verify
    - token di decode
    - decode menghasilkan userid, expiretime, dll
    - find user berdasarkan id yg udh di decode tadi

### Upload Flow
1. isi data kayak biasa
2. yg photo pilih file
3. request dikirim ke endpoint __/post__
4. endpoint __/post__ pake middleware upload __(multer)__
5. upload ke temp folder berhasil lanjut ke step 6, kalo gagal throw error
6. dapetin path file yg udh di upload
7. pake path nya buat file upload di cloudinary
8. pake helper cloudinary
9. kalo berhasil lanjut ke step 10, kalo gagal throw error
10. hapus file di folder temp tadi

