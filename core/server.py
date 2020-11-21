import asyncio
import json
import logging

import grpc
import requests
from configparser import ConfigParser

import storage_pb2
import storage_pb2_grpc

parser = ConfigParser()
parser.read('config.ini')

API_URL = parser.get('cq', 'api_url')
AUTH_TOKEN = parser.get('cq', 'auth_token')
HEADERS = {"Authorization": "Bearer " + AUTH_TOKEN}


class StorageService(storage_pb2_grpc.StorageServicer):
    async def GetStorage(self, request, context):
        storage = get_storages(request.uuid)
        return storage_pb2.StorageResponse(name=storage['name'])


def get_storages(uuid):
    api_storage_url = API_URL + 'storages/%s' % uuid
    r = requests.get(api_storage_url, headers=HEADERS)
    return r.json()


async def serve():
    server = grpc.aio.server()
    storage_pb2_grpc.add_StorageServicer_to_server(StorageService(), server)
    listen_addr = '[::]:50051'
    server.add_insecure_port(listen_addr)
    logging.info("Starting server on %s", listen_addr)
    await server.start()
    await server.wait_for_termination()


def main():
    api_storage_url = API_URL + 'storages'
    r = requests.get(api_storage_url, headers=HEADERS)
    if r.status_code == 200:
        print(json.dumps(r.json(), indent=2))
    else:
        print('Something went wrong: ' + r.text)


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    asyncio.run(serve())
