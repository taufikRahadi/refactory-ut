import click
from functools import reduce
import statistics
import re
from requests import get
import socket
import string
import secrets

@click.group()
def cli():
    pass

@cli.command(name="lowercase")
@click.argument('char')
def lowercase(char):
    print(char.lower())

@cli.command(name="uppercase")
@click.argument('char')
def uppercase(char):
    print(char.upper())

@cli.command(name="capitalize")
@click.argument('char')
def capitalize(char):
    splitted = list(i[0].upper() + i[1:len(i)] for i in char.lower().split(' '))
    print(' '.join(splitted))

@cli.command(name="add")
@click.argument('num', type=click.INT, nargs=-1)
def add(num):
    print(sum(num))

@cli.command(name="subtract")
@click.argument('num', type=click.INT, nargs=-1)
def subtract(num):
    print(reduce(lambda a,b: a-b, num))

@cli.command(name="multiply")
@click.argument('num', type=click.INT, nargs=-1)
def multiply(num):
    print(reduce(lambda a,b: a*b, num))

@cli.command(name="divide")
@click.argument('num', type=click.INT, nargs=-1)
def divide(num):
    print(int(reduce(lambda a,b: a/b, num)))

@cli.command(name="mean")
@click.argument('data', type=click.INT, nargs=-1)
def mean(data):
    print(statistics.mean(data))

@cli.command(name="median")
@click.argument('data', type=click.INT, nargs=-1)
def median(data):
    print(statistics.median(data))

@cli.command(name="mode")
@click.argument('data', type=click.INT, nargs=-1)
def mode(data):
    print(statistics.mode(data))

@cli.command(name="fmean")
@click.argument('data', type=click.INT, nargs=-1)
def fmean(data):
    print(statistics.fmean(data))

@cli.command(name="palindrome")
@click.argument('string', type=click.STRING)
def palindrome(string):
    print(f'String: {string}')
    # result = 'Yes' if string == string[::-1].lower() else 'No'
    compiled = re.compile('[^a-zA-Z]').sub('', string)
    result = 'Yes' if compiled.lower() == compiled[::-1].lower() else 'No'
    print(f'Is Palindrom ? {result}')

@cli.command(name="obfuscate")
@click.argument('string', type=click.STRING)
def obfuscate(string):
    print(';'.join(list('&#' + str(ord(o)) for o in string)))

@cli.command(name="random")
@click.option('--length', default=32, help="String length")
@click.option('--letters', default=True, type=click.BOOL, help="option to choose if u want string contains letter")
@click.option('--lowercase', type=click.BOOL)
@click.option('--uppercase', type=click.BOOL)
@click.option('--numbers', type=click.BOOL)
def random(length, letters, lowercase, uppercase, numbers):
    char = string.ascii_uppercase + string.ascii_lowercase + string.digits
    if numbers == False:
        char = string.ascii_lowercase + string.ascii_uppercase
    if letters:
        if lowercase:
            char = char.lower()
        if uppercase:
            char = char.upper()
        else:
            char = char
    else:
        char = string.digits
    print(''.join(secrets.choice(char) for _ in range(length)))
    print(lowercase)
    print(uppercase)
    print(letters)
    print(numbers)

@cli.command(name="ip")
def ip():
    print(socket.gethostbyname(socket.gethostname()))

@cli.command(name="ip-external")
def external_ip():
    print(get('http://api.ipify.org').text)

if __name__ == '__main__':
    cli()
