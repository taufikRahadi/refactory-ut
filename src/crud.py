import click
import json
from string import ascii_lowercase
import random

@click.group()
def cli():
    pass

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
    with open('users.json', 'a') as outfile:
        outfile.write(json.dumps(user, indent=4))

if __name__ == '__main__':
    cli()
