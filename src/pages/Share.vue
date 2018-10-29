<template>
    <div class="wrapper">
        <div class="tips" v-if="showTip">
            <span class="btn-cancel" @click="showTip=false"></span>
        </div>
        <img class="btn-chai" src="../assets/images/chai.png" @click="handleChai" alt="">
    </div>
</template>

<script>
    export default {
        name: "share",
        data(){
            return{
                showTip:false
            }
        },
        methods:{
            isWeiXin(){
                //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
                var ua = window.navigator.userAgent.toLowerCase();
                //通过正则表达式匹配ua中是否含有MicroMessenger字符串
                if(ua.match(/MicroMessenger/i) == 'micromessenger'){
                    return true;
                }else{
                    return false;
                }
            },
            handleChai(){
                if(this.isWeiXin()){
                    this.showTip = true;
                }else{
                    this.showTip = false;
                    window.location.href = 'http://59.110.6.92/download/app/gigtok.apk';
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .wrapper{
        height: 100%;
        position: relative;
        background:url("../assets/images/share_bg.png") no-repeat;
        background-size: 100% 100%;

        @keyframes chai{
            to{
                transform: scale(1);
            }
            50%{
                transform: scale(1.3);
            }
            from{
                transform: scale(1);
            }
        }
        .btn-chai{
            width: 164px;
            height: 164px;
            position: absolute;
            top: 45%;
            left: 50%;
            margin-left: -82px;
            animation: chai .6s infinite ease-in-out;
            z-index:99;
        }
        .tips{
            position: absolute;
            width: 298px;
            height: 250px;
            background: url("../assets/images/tip.png") no-repeat;
            background-size: 100% 100%;
            right: 55px;
            .btn-cancel{
                display: block;
                width: 80px;
                height:50px;
                position: absolute;
                top:178px;
                left:105px;
            }
        }
    }
</style>