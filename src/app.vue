<template>
    <div class="g-view">
        <div class="char">
            <div class="char-item" v-for="item in chatList">
                {{item.message}}
            </div>
        </div>
        <div class="g-write">
            <form @submit="fnSubmit"><label class="g-input"><input type="text" v-model="message"></label></form>
        </div>
    </div>
</template>

<script>
    const client = io('47.100.125.178:5553');
    export default {
        data() {
            return {
                message: '',
                chatList: [],
            };
        },
        methods: {
            fnSubmit: function (ev) {
                ev.preventDefault();
                ev.stopPropagation();
                if (this.message) {
                    client.emit('chat', {
                        message: this.message,
                    });
                    this.message = '';
                }
            },
        },
        mounted() {
            const self = this;
            const wrap = document.querySelector('.g-wrap');
            [].slice.call(wrap.querySelectorAll('script')).forEach(function (v) {
                wrap.removeChild(v);
            });
            client.on('chat', function (data) {
                self.chatList.unshift(data);
            });
        },
    };
</script>

<style scoped lang="scss">
    @import "./scss/config/config";

    $footerH: 40;
    .g-view {
        padding-bottom: px2px($footerH);
        .g-write {
            .g-input {
                position: fixed;
                left: 0;
                bottom: px2px(20);
                width: 100%;
                display: block;
                text-align: center;
                input {
                    height: px2px($footerH);
                    line-height: px2px($footerH);
                    width: 94%;
                    padding: 0 px2px(20);
                }
            }
        }
        .char-item {
            padding: px2px(20);
            margin: px2px(20) 0;
            background: #ffffff;
        }
    }
</style>
