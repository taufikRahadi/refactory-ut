import asyncio
import json
import time
from Fetcher import Fetcher as fetcher
async def fetch_user(id, post):
    user = await fetcher.get(f'https://jsonplaceholder.typicode.com/users/{id}')
    post["user"] = user
    return post

async def fetch_post():
    posts = await fetcher.get('https://jsonplaceholder.typicode.com/posts')
    return posts

async def fetch_request():
    start = time.time()
    print(f"started at {time.strftime('%X')}")
    # sinkronus
    posts = await fetch_post()
    list_task = []
    for post in posts:
        # asink
        list_task.append(asyncio.create_task(fetch_user(post["userId"], post)))
    print(json.dumps([await task for task in list_task], indent=2))
    end = time.time()
    print(f"finished at {time.strftime('%X')}")
    print(f"total time execution : {round(int(end - start))}")

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(fetch_request())