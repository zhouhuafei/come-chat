const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    // 签到信息
    chatMessage: {
        type: String,
        default: null,
    },
    // 小尾巴
    smallTail: {
        type: String,
        default: null,
    },
});

module.exports = mongoose.model('chats', schema);
