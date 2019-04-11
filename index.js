var express = require('express')
var socket = require('socket.io')

// App setup
var app = express()
var server = app.listen(process.env.PORT || 3000, function () {
    console.log('Server listening to request')
})

// Static files
app.use(express.static('public'))


// Socket setup
var io = socket(server)

io.on('connection', function (socket) {

    socket.on('chat', function (data) {
        io.sockets.emit('chat', data)
    })

    socket.on('typing', function (data) {
        socket.broadcast.emit('typing', data)
    })
})