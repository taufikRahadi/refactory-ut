import requests
from pprint import pprint
from bs4 import BeautifulSoup

url = 'https://indeks.kompas.com/headline'
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')
result = soup.find_all('div')
open('scrape.txt', 'w')
print(result)
