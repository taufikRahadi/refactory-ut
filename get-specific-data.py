import json
import asyncio
from Fetcher import Fetcher as fetcher

url = 'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json'

async def get_specific_data():
    datas = await fetcher.get(url)
    for data in list(data for data in datas if data['category'] == 'fruits'):
        print(json.dumps(data, indent=2))

        # klo mau di print key value nya
        # for x,y in data.items():
        #     print(f'{x} : {y} \n')

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(get_specific_data())
