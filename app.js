const mongoose = require('./db/mongoose');
const Chats = require('./models/chat');
const express = require('express');
const ms = require('ms');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(express.static('dist', {maxAge: ms('1y')})); // 托管资源文件(一年缓存)
io.on('connection', function (client) {
    console.log('server connection open to:\n', `http://127.0.0.1:${server.address().port}`);
    client.on('post', function (data) {
        const chats = new Chats(data);
        chats.save(function (error, result) {
            if (!error) {
                io.sockets.emit('post', {result: result});
            }
        });
    });
    client.on('delete', function (item) {
        Chats.remove({_id: item._id}, function (error, result) {
            if (!error) {
                io.sockets.emit('delete', {
                    item: item,
                    result: result,
                });
            }
        });
    });
    client.on('reqChatRecord', function (data) {
        const reqNowPage = data.nowPage;
        const reqNowCount = data.nowCount <= 20 ? 20 : data.nowCount;
        Chats.count({}, function (error, allCount) {
            if (!error) {
                Chats
                    .find({})
                    .sort({'_id': -1})
                    .skip((reqNowPage - 1) * reqNowCount)
                    .limit(reqNowCount)
                    .exec(function (error, result) {
                        if (!error) {
                            client.emit('resChatRecord', {
                                result: {
                                    data: result,
                                    nowPage: reqNowPage,
                                    nowCount: result.length,
                                    allPage: Math.ceil(allCount / reqNowCount),
                                    allCount: allCount,
                                },
                            });
                        }
                    });
            }
        });
    });
});
mongoose.connection.on('connected', function () {
    server.listen(5553);
});
