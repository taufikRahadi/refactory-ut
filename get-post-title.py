import asyncio
import aiohttp
import time
import json
from Fetcher import Fetcher as fetcher

url = 'https://jsonplaceholder.typicode.com/posts'

async def fetch_data():
    html = await fetcher.get(url)
    for title in list(data['title'] for data in html):
        print(f'title: {title}')

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(fetch_data())
