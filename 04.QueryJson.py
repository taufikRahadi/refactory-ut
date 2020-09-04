import requests
import json

data = requests.get('https://mul14.github.io/data/employees.json').json()

print('employee_with_salary_more_than'.upper())
employee_with_salary_more_than = json.dumps(list(filter(lambda a: a['salary'] > 15000000, data)), indent=4)
print(employee_with_salary_more_than)

print('\nemployee_which_life_in_jakarta'.upper())
for employee in data:
    employee_address = list(filter(lambda a: a['label'] == 'home' and a['city'] == 'DKI Jakarta', employee['addresses']))
    if len(employee_address) > 0:
        print(json.dumps(employee, indent=4))

print('\nemployee_birthday_in_april'.upper())
employee_birthday_in_april = json.dumps(list(filter(lambda a: int(a['birthday'].split('-')[1]) == 4, data)), indent=4)
print(employee_birthday_in_april)

print('\nresearch_and_development_department_employees'.upper())
research_and_development_department_employees = json.dumps(list(filter(lambda a: a['department'].get('name') == 'Research and development', data)), indent=4)
print(research_and_development_department_employees)

print('\nhow_many_each_employee_absence'.upper())
presence_list = list((employee['presence_list'] for employee in data))
for presence in presence_list:
    print(len(list(filter(lambda a: a.split('-')[0] == '2019', presence))))
