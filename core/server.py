import sys
import json
import requests
from configparser import ConfigParser

parser = ConfigParser()
parser.read('config.ini')

API_URL = parser.get('cq', 'api_url')
AUTH_TOKEN = parser.get('cq', 'auth_token')
HEADERS = {"Authorization": "Bearer " + AUTH_TOKEN}


def main():
    api_storage_url = API_URL + 'storages'
    r = requests.get(api_storage_url, headers=HEADERS)
    if r.status_code == 200:
        print(json.dumps(r.json(), indent=2))
    else:
        print('Something went wrong: ' + r.text)


if __name__ == "__main__":
    sys.exit(main())
