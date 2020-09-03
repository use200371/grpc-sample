const {HelloRequest, HelloReply} = require('./proto/helloworld_pb.js');
const {HelloServiceClient} = require('./proto/helloworld_grpc_web_pb.js');

var helloService = new GreeterClient('http://:8080');

var request = new HelloRequest();
request.setName('First Hello');

helloService.sayHello(request);