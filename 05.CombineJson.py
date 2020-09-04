import requests
import json

posts = requests.get('https://jsonplaceholder.typicode.com/posts').json()
users = requests.get('https://jsonplaceholder.typicode.com/users').json()

def filter_user(id):
    return list(filter(lambda a: a['id'] == id, users))[0]

for post in posts:
    post['user'] = filter_user(post['userId'])
    print(json.dumps(post, indent=4))