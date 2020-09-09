import json
import asyncio
import aiohttp

class Fetcher:
    @staticmethod
    async def get(url):
        async with aiohttp.ClientSession() as session:
            async with session.get(url) as res:
                data = json.loads(await res.text())
                return data
    
    @staticmethod
    async def post(url, payload):
        async with aiohttp.ClientSession() as session:
            async with session.post(url, data=payload) as res:
                data = json.loads(await res.text())
                return data

    @staticmethod
    async def delete(url):
        async with aiohttp.ClientSession() as session:
            async with session.delete(url) as res:
                data = json.loads(await res.text())
                return data
    
    @staticmethod
    async def update(url, payload):
        async with aiohttp.ClientSession() as session:
            async with session.patch(url, data=payload) as res:
                data = json.loads(await res.text())
                return data
