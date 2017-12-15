<template>
    <div>
        待续
    </div>
</template>

<script>
    export default {
        data() {
            return {
                config: {
                    isShowCopyright: true,
                    isShowFooterNav: true,
                },
                data: {},
            };
        },
        mounted() {
            const wrap = document.querySelector('.g-wrap');
            [].slice.call(wrap.querySelectorAll('script')).forEach(function (v) {
                wrap.removeChild(v);
            });
        },
    };
</script>

<style scoped lang="scss"></style>
