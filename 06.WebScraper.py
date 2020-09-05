import requests
from bs4 import BeautifulSoup

url = 'https://indeks.kompas.com/headline'
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')
result = soup.find_all(class_="latest--indeks")
for result in result:
    elemt = result.find_all('a', class_="article__link", href=True)
    title = [t.text for t in elemt]
    url = [u['href'] for u in elemt]
    for i in range(len(title)):
        print({'URL': url[i], 'Title': title[i]})
