

const server = require('http').createServer()

const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
  }
})

let uptime = 0

io.on('connection', client => {


  client.on('connection', data => {
      
  })

  client.on('event', data => { 
    
  })

  client.on('disconnect', () => { 


  })

})

setInterval( () => {
  uptime++
}, 1000)

server.listen(3001);