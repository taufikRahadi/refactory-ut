## Aturan Mengerjakan
Pisahkan setiap jawaban ke dalam file yang berbeda, beri nama file dengan urutan yang rapi, i.e : 01-Masking.py, 02-MissingLetter.py, dst.
### 1. Simple CRUD
Buatlah class Employee yang menangani CRUD (Create Read Update Delete) data karyawan. Simpan data secara temporary ke dalam object dictionary, berikut adalah detail data dari karyawan :
```python
data = [
    {
	    "id" : 1,
        "fullname" : "ratna putri",
        "address" : "jakarta",
        "salary" : 5000000,
        "phone" : '099903'
    },
    {
	    "id" : 2,
        "fullname" : "hamish daud",
        "address" : "jakarta",
        "salary" : 2000000,
        "phone" : '34232949'
    },
]
```
Example :
```python
employee = Employee()
employee.create({"fullname":"ratna putri", "address":"jakarta", "salary":5000000, "phone":"099903"}) # id generate secara otomatis ketika data bertambah 	
employee.create({"fullname":"mega mendung", "address":"jakarta", "salary":10000000, "phone":"343234"})
employee.delete(2) # menghapus data employe dengan id 2
employee.read() # return semua data employee yang sudah ditambahkan
employee.update(2,{"fullname":"raisa andriana", "address":"bekasi", "salary":1000000, "phone":"9939999"}") # mengubah data dengan id 2, return semua data employee
```
## 2. Log

Create `Log` class with ability to log text with several levels. 
The levels based on [severity levels in Syslog](https://en.wikipedia.org/wiki/Syslog#Severity_level).

The `Log` class should be able to produce output to a `app.log` file, like so
```log
[2018-04-03T12:10:36.100Z] INFO: This is an information about something.
[2018-04-03T13:21:36.201Z] ERROR: We can't divide any numbers by zero.
[2018-04-03T16:45:36.210Z] NOTICE: Someone loves your status.
[2018-04-03T23:40:36.215Z] WARNING: Insufficient funds.
[2018-04-03T23:56:36.215Z] DEBUG: This is debug message.
[2018-04-04T04:54:36.102Z] ALERT: Achtung! Achtung!
[2018-04-04T05:01:36.103Z] CRITICAL: Medic!! We've got critical damages.
[2018-04-04T05:05:36.104Z] EMERGENCY: System hung. Contact system administrator immediately!
```

It would be great if you could create filter based on level, date, and messages.
For example filter by `CRITICAL` at `2018-04-04`.

> Don't use any 3rd-party library.

## 3. Auth

Create `Auth` class with some abilities ...

Example
```python
Auth.login({username: 'root', password: 'secret'})      // If valid, user will log in.

Auth.validate({'username': 'root', 'password': 'secret'})   // Just verify username and password without log in.

Auth.logout()          // Log out the current logged in user.

Auth.user()            // Get information about current logged in user.

Auth.id()              // Get the User ID.

Auth.check()           // Will returns true if user already logged in.

Auth.guest()           // Will returns true if user not logged in.

Auth.lastLogin()       // Get information when the user last logged in.
```
## 4. Cart - Method Chaining

Create `Cart` class with method chaining ability. 

Usage example
```python
cart = Cart()

# Do some chainings
cart.addItem({ 'item_id': 1, 'price': 30000, 'quantity': 3 })
    .addItem({ 'item_id': 2, 'price': 10000 })               # By default quantity is 1
    .addItem({ 'item_id': 3, 'price': 5000, 'quantity': 2 })
    .removeItem({'item_id': 2})
    .addItem({ 'item_id': 4, 'price': 400, 'quantity': 6 })
    .addDiscount('50%')

cart.totalItems() # 3

cart.totalQuantity() # 11

cart.totalPrice() # 51200

cart.showAll() # Show all items in cart

cart.checkout() # Store data in a file i.e : cart.txt
```