import * as http from 'http'
import { IncomingMessage, ServerResponse } from 'http'

const server = http.createServer()

server.on('request', (request: IncomingMessage, response: ServerResponse) => {
  console.log(request.method);
  console.log(request.url);
  console.log(request.headers)

  let array = []
  request.on('data', (chunk) => {
    array.push(chunk)
  })
  request.on('end', () => {
    const body = Buffer.concat(array).toString()
    console.log(body)

    response.statusCode = 400;
    response.setHeader('Ronaldo', 'I am Ronaldo')

    response.write('1\n')
    response.write('2\n')
    response.write('3\n')
    response.write('4\n')

    response.end()
  })
})

server.listen('8888')