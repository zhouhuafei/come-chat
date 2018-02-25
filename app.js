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
    client.oldMsg = '';
    let changeNum = 0; // 因新增或删除消息时，拉取的数据列表会出现误差，会导致数据重复和数据遗漏，这个变量就是为了修正这种问题出现的
    client.on('post', function (data) {
        const chats = new Chats(data);
        if (client.oldMsg !== data.chatMessage) {
            client.oldMsg = data.chatMessage;
            chats.save(function (error, result) {
                if (!error) {
                    changeNum++;
                    io.sockets.emit('post', {result: result});
                }
            });
        }
    });
    client.on('delete', function (item) {
        Chats.remove({_id: item._id}, function (error, result) {
            if (!error) {
                changeNum--;
                io.sockets.emit('delete', {
                    item: item,
                    result: result,
                });
            }
        });
    });
    const multipleCalls = require('zhf.multiple-calls');

    client.on('reqChatRecord', function (data) {
        const reqNowPage = data.nowPage;
        const reqNowCount = data.nowCount <= 20 ? 20 : data.nowCount;
        const mulCalls = multipleCalls(2, function (error, json) {
            if (!error) {
                const data = json.data;
                const allCount = data.allCount - changeNum;
                const result = data.result;
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
        Chats.count({}, function (error, allCount) {
            if (!error) {
                mulCalls('allCount', allCount);
            }
        });
        Chats.find({}).sort({'_id': -1}).skip((reqNowPage - 1) * reqNowCount + changeNum).limit(reqNowCount).exec(function (error, result) {
            if (!error) {
                mulCalls('result', result);
            }
        });
    });
});
mongoose.connection.on('connected', function () {
    server.listen(5553);
});
