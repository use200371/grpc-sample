const {HelloRequest, HelloReply} = require('./proto/helloworld_pb.js');
const {GreeterClient} = require('./proto/helloworld_grpc_web_pb.js');

var helloService = new GreeterClient('https://f0765f49787a.ngrok.io');

var request = new HelloRequest();
request.setName('First Hello');

alert(helloService);

helloService.sayHello(request);


// const {GetTodoRequest} = require('./todos_pb.js');
// const {TodoServiceClient} = require('./todos_grpc_web_pb.js');

// const todoService = new proto.todos.TodoServiceClient('http://localhost:8080');
// const todoId = 1234;

// var getTodoRequest = new proto.todos.GetTodoRequest();
// getTodoRequest.setId(todoId);

// var metadata = {};
// var getTodo = todoService.getTodoById(getTodoRequest, metadata, (err, response) => {
//   if (err) {
//     console.log(err);
//   } else {
//     const todo = response.todo();
//     if (todo == null) {
//       console.log(`A TODO with the ID ${todoId} wasn't found`);
//     } else {
//       console.log(`Fetched TODO with ID ${todoId}: ${todo.content()}`);
//     }
//   }
// });