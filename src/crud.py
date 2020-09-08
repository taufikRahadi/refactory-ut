import click
import json
from string import ascii_lowercase
import random

def read_file():
    with open('users.json', 'r') as f:
        obj = json.load(f)
    return obj
def write_file(data):
    with open('users.json', 'w') as f:
        f.write(json.dumps(data, indent=4))

def filter_data(code):
    return next(data for data in read_file() if data['code'] == code)

@click.group()
def cli():
    pass

@cli.command(name="read")
def read():
    print(json.dumps(read_file(), indent=4))

@cli.command(name="read-by-code")
@click.argument('code', type=click.STRING)
def read_by_code(code):
    print(json.dumps(filter_data(code), indent=4))

@cli.command(name="delete")
@click.argument('code', type=click.STRING)
def delete(code):
    index = read_file().index(filter_data(code))
    current = read_file()
    popit = current.pop(index)
    write_file(current)
    print('data deleted')

@cli.command(name="add")
def add():
    gender = input("Your Gender[male/female] : ")
    first = input('first name : ')
    title = 'mr' if gender == 'male' else 'mrs'
    last = input('last name : ')
    street = input('street address : ')
    city = input('city address : ')
    state = input('state : ')
    postcode = input('postcode : ')
    email = input('email address : ')
    phone = input('phone number : ')
    cell = input('cell phone : ')

    user = {
        "code": ''.join(random.choice(ascii_lowercase) for i in range(6)),
        "gender": gender,
        "name": {
            "title": title,
            "first": first,
            "last": last
        },
        "location": {
            "street": street,
            "city": city,
            "state": state,
            "postcode": postcode,
            "email": email,
            "phone": phone,
            "cell": cell
        }
    }
    current = read_file()
    now = current.insert(len(current), user)
    write_file(current)
    print('data added')

if __name__ == '__main__':
    cli()
