<template>
    <div class="g-view">
        <div class="tail">
            <label class="g-input">
                <input type="text" v-model="smallTail" placeholder="custom tail">
                <span class="icon-clear iconfont icon-qingkong" @click.prevent="fnFresh"></span>
            </label>
        </div>
        <div class="char">
            <div class="char-item" v-for="item in chatList">
                <div class="char-item-message">{{item.chatMessage}}</div>
                <div class="char-item-tail">---- {{item.smallTail}}</div>
                <div class="char-item-close iconfont icon-guanbi" @click.prevent="fnDelete(item)"></div>
            </div>
        </div>
        <div class="write">
            <form @submit="fnSubmit">
                <label class="g-input">
                    <input type="text" v-model="chatMessage" placeholder="enter to send">
                    <span class="icon-clear iconfont icon-qingkong" @click="fnClear"></span>
                </label>
            </form>
        </div>
        <div v-if="!isLoadingOver" class="g-loading">
            <div class="g-loading-icon iconfont icon-jiazaizhong"></div>
        </div>
        <div v-if="isLoadingOver && chatList.length" class="g-over">
            <div class="g-over-icon iconfont icon-meiyoushuju"></div>
            <div class="g-over-text">没有数据了</div>
        </div>
        <div v-if="isLoadingOver && !chatList.length" class="g-no-data">
            <div class="g-no-data-icon iconfont icon-meiyoushuju"></div>
            <div class="g-no-data-text">数据为空</div>
        </div>
    </div>
</template>

<script>
    // const client = io('127.0.0.1:5553'); // 开发
    const client = io('47.100.125.178:5553'); // 生产
    const utils = require('./utils/applications');
    const tail = require('../db/smll-tail');
    export default {
        data() {
            return {
                smallTail: tail[Math.round(Math.random() * (tail.length - 1))],
                chatMessage: '',
                oldChatMessage: '',
                nowPage: 1,
                nowCount: 20,
                isLoadingOver: false,
                chatList: [],
            };
        },
        methods: {
            fnSubmit: function (ev) {
                ev.preventDefault();
                ev.stopPropagation();
                if (this.chatMessage && this.oldChatMessage !== this.chatMessage) {
                    client.emit('post', {
                        chatMessage: this.chatMessage,
                        smallTail: this.smallTail,
                    });
                    this.oldChatMessage = this.chatMessage;
                    this.chatMessage = '';
                } else {
                    alert('不可为空 or 发送重复的讯息');
                }
            },
            fnClear: function () {
                this.chatMessage = '';
            },
            fnFresh: function () {
                this.smallTail = tail[Math.round(Math.random() * (tail.length - 1))];
            },
            fnDelete: function (item) {
                client.emit('delete', item);
            },
        },
        mounted() {
            const self = this;
            const wrap = document.querySelector('.g-wrap');
            [].slice.call(wrap.querySelectorAll('script')).forEach(function (v) {
                wrap.removeChild(v);
            });
            client.on('post', function (data) {
                self.chatList.unshift(data.result);
            });
            client.on('delete', function (data) {
                self.chatList.forEach(function (v, i) {
                    if (v._id === data.item._id) {
                        self.chatList.splice(i, 1);
                    }
                });
            });
            const WhenScrollBottom = utils.whenScrollBottom();
            const whenScrollBottom = new WhenScrollBottom({
                callback: {
                    success: function () {
                        client.emit('reqChatRecord', {nowPage: self.nowPage, nowCount: self.nowCount});
                    },
                    failure: function () {
                    },
                },
            });
            client.on('resChatRecord', function (json) {
                const result = json.result;
                const data = result.data;
                if (!data.length) {
                    self.isLoadingOver = true;
                } else {
                    self.chatList = [...self.chatList, ...data];
                    self.nowPage++;
                    if (self.nowPage > result.allPage) {
                        self.isLoadingOver = true;
                    } else {
                        whenScrollBottom.dataLoadContinue();
                    }
                }
            });
        },
    };
</script>

<style scoped lang="scss">
    @import "./scss/config/config";

    $footerH: 40;
    .g-view {
        padding: px2px($footerH) 0;
        .g-input {
            display: block;
            text-align: center;
            position: relative;
            input {
                height: px2px($footerH);
                line-height: px2px($footerH);
                padding: 0 px2px($footerH) 0 px2px($footerH/2);
                width: 100%;
                border: none;
            }
            .icon-clear {
                position: absolute;
                top: 0;
                right: 0;
                width: px2px($footerH);
                text-align: center;
                height: 100%;
                line-height: px2px($footerH);
            }
        }
        .write, .tail {
            position: fixed;
            left: 0;
            width: 100%;
            z-index: 99;
        }
        .write {
            bottom: 0;
        }
        .tail {
            top: 0;
            z-index: 99;
        }
        .char-item {
            padding: px2px(20);
            margin-top: px2px(20);
            background: #ffffff;
            overflow: hidden;
            position: relative;
            .char-item-message {
                color: $g-highlight-color;
            }
            .char-item-tail {
                color: $g-warning-color;
            }
            .char-item-close {
                position: absolute;
                left: px2px(4);
                bottom: px2px(4);
            }
        }
    }
</style>
