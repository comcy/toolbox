import logging
import asyncio
import grpc

import storage_pb2
import storage_pb2_grpc


async def run():
    # NOTE(gRPC Python Team): .close() is possible on a channel and should be
    # used in circumstances in which the with statement does not fit the needs
    # of the code.
    async with grpc.aio.insecure_channel('localhost:50051') as channel:
        stub = storage_pb2_grpc.StorageStub(channel)
        response = await stub.GetStorage(storage_pb2.StorageRequest(uuid='f5f286a6-bdca-4e46-a98b-9b57b0decd5f'))
    print("Greeter client received: " + response.name)


if __name__ == '__main__':
    logging.basicConfig()
    asyncio.run(run())
