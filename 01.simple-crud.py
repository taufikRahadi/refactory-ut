class Employee:
    def __init__(self):
        self.employees = []

    def create(self, employee): 
        self.employees.append(employee)

    def read(self):
        for employee in self.employees:
            print(employee)

    def filter_employee(self, id):
        return self.employees.index(next(employee for employee in self.employees if employee['id'] == id), 0)

    def update(self, id, data):
        data['id'] = id
        self.employees[self.filter_employee(id)] = data
    
    def delete(self, id):
        self.employees.pop(self.filter_employee(id))

employee = Employee()
employee.create({
    "id" : 1,
    "fullname" : "ratna putri",
    "address" : "jakarta",
    "salary" : 5000000,
    "phone" : '099903'
})
employee.create({
    "id" : 2,
    "fullname" : "hamish daud",
    "address" : "jakarta",
    "salary" : 2000000,
    "phone" : '34232949'
})

employee.read()
print('\n')

employee.update(2, {
    "fullname" : "raisa andriana",
    "address" : "jakarta",
    "salary" : 2000000,
    "phone" : '34232949'
})

employee.read()
employee.delete(2)
print('\n')
employee.read()
