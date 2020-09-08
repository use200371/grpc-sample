import * as grpc from 'grpc';
import * as hello_grpc_pb from './proto/helloworld_grpc_pb';
import * as hello_pb from './proto/helloworld_pb';

const client = new hello_grpc_pb.GreeterClient(
    '127.0.0.1:8080',
    grpc.credentials.createInsecure(),
);

const request = new hello_pb.HelloRequest();
request.setName('test');

client.sayHello(request, function(error, result) {
    if (error) console.log('Error: ', error);
    else console.log(result.toObject());
})