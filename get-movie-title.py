import json
import asyncio
from Fetcher import Fetcher as fetcher

api_key = 'acc2f1605a503ad182fe03258d42aadd'
baseUrl = 'https://api.themoviedb.org/3'

async def get_by_query(type_, action, query):
    url = f'{baseUrl}/{action}/{type_}?api_key={api_key}&query={query}'
    data = await fetcher.get(url)
    return data['results'][0]['known_for']

async def get_keanu():
    data = await get_by_query('person', 'search', 'Keanu+Reeves')
    with open('get_moviedb_01.json', 'w') as fs:
        fs.write(json.dumps(data, indent=2))

async def get_robert_and_tom():
    robert = await get_by_query('person', 'search', 'Robert Downey')
    tom = await get_by_query('person', 'search', 'Tom Holland')
    with open('get_moviedb_02.json', 'w') as fs:
        fs.write(json.dumps(list(robert + tom), indent=2))

async def get_movie_list():
    data = await fetcher.get('https://api.themoviedb.org/3/discover/movie?api_key=acc2f1605a503ad182fe03258d42aadd&language=en-US&sort_by=release_date.asc&include_adult=false&include_video=false&page=1&release_date.gte=2016-01-01&year=2016&vote_count.gte=7.5')
    with open('get_moviedb_03.json', 'w') as fs:
        fs.write(json.dumps(data['results'], indent=2))

async def run_all():
    fetched = [get_keanu(), get_robert_and_tom(), get_movie_list()]
    list_task = []

    for fetc in fetched:
        list_task.append(asyncio.create_task(fetc))

    for task in list_task:
        await task
if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(run_all())
