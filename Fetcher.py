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
