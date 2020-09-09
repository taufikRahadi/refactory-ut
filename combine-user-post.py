import asyncio
import json
import time
from Fetcher import Fetcher as fetcher

async def fetch_user(id):
    user = await fetcher.get(f'https://jsonplaceholder.typicode.com/users/{id}')
    return user

async def fetch_post():
    posts = await fetcher.get('https://jsonplaceholder.typicode.com/posts')
    return posts

async def combine():
    list_task = []
    
    for post in await fetch_post():
        user = asyncio.create_task(fetch_user(post['userId']))
        list_task.append(user)
        for task in list_task:
            post['user'] = await task
        print(json.dumps(post, indent=4))
    

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(combine())
