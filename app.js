const express = require('express');
const ms = require('ms');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(express.static('dist', {maxAge: ms('1y')})); // 托管资源文件(一年缓存)
io.on('connection', function (client) {
    console.log('server connection open to:\n', `http://127.0.0.1:${server.address().port}`);
    client.on('disconnect', function () {
        console.log('server disconnect');
    });
    client.on('chat', function (data) {
        io.sockets.emit('chat', data);
    });
});
server.listen(5553);
