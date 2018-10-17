<template>
  <div class="home-wrap">
    <div class="btn-transfer" @click="transfer"><img :class="{active:lang==='English'?true:false}" src="../assets/images/fy_down.png" alt=""><span>{{lang}}</span></div>
    <div class="btn-next"><img src="../assets/images/next.png" @click="handleNext" alt=""></div>
    <ul class="box">
      <transition-group enter-active-class="fadeInDown" leave-active-class="fadeOutDown" enter-class="enter" eave-class="enter">
      <li class="first animated" v-show="activeIndex===1?true:false" :class="[{active:activeIndex===1?true:false}]" key="first">
        <img src="../assets/images/logo.png" alt="" class="logo">
        <div class="box">
          <transition enter-active-class="bounceIn"  enter-class="enter" eave-class="enter">
            <p class="p1" key="p1">GigTok</p>
          </transition>
          <p class="p2" key="p2">{{$t("introduce")}}</p>
          <p class="p3" key="p3">
            <img src="../assets/images/logo_app.png" alt="" class="img1">
            <span class="btn-download">
              Android
            </span>
          </p>

        </div>
        <img class="intro-img" src="../assets/images/pic_1.png" alt="">
      </li>
      <li class="second animated" v-show="activeIndex===2?true:false" :class="[{active:activeIndex===2?true:false}]" key="second">
        <p>{{$t("first.title")}}</p>
        <section>
          <dl>
            <dt><img src="../assets/images/pic_hd.png" alt=""></dt>
            <dd>{{$t("first.in1")}}</dd>
          </dl>
          <dl>
            <dt><img src="../assets/images/pic_aq.png" alt=""></dt>
            <dd>{{$t("first.in2")}}</dd>
          </dl>
          <dl>
            <dt><img src="../assets/images/pic_bj.png" alt=""></dt>
            <dd>{{$t("first.in3")}}</dd>
          </dl>
        </section>
      </li>
      <li class="third animated" v-show="activeIndex===3?true:false" :class="[{active:activeIndex===3?true:false}]" key="third">
        <div class="left">
          <p class="p1">{{$t("second.title")}}</p>
          <p class="p2">{{$t("second.in1")}}</p>
        </div>
        <div class="right">
          <img src="../assets/images/pic_hlyh.png" alt="">
        </div>
      </li>
      <li class="fourth animated" v-show="activeIndex===4?true:false" :class="[{active:activeIndex===4?true:false}]" key="fourth">
        <div class="left">
          <img src="../assets/images/pic_xxaq.png" alt="">
        </div>
        <div class="right">
          <p class="p1">{{$t("third.title")}}</p>
          <p class="p2">{{$t("third.in1")}}</p>
        </div>
      </li>
      <li class="fifth animated" v-show="activeIndex===5?true:false" :class="[{active:activeIndex===5?true:false}]" key="fifth">
        <div class="left">
          <p class="p1">{{$t("fourth.title")}}</p>
          <p class="p2">{{$t("fourth.in1")}}</p>
          <p class="p3">
            <span class="btn-download">
              Android
            </span>
          </p>
        </div>
        <div class="right">
          <img src="../assets/images/pic_jdyy.png" alt="">
        </div>
      </li>
      </transition-group>
    </ul>
    <ul class="dot">
      <li v-for="i in 5" :key="i" :class="{'active': activeIndex===i?true:false}" @click="activeIndex=i"><div></div></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
          return{
            lang:'中文',
              activeIndex:1

          }
        },
      mounted(){
          var that = this;
          document.body.onmousewheel = function(event) {
              event = event || window.event;
              console.dir(event);
              if(event.deltaY>0&&event.layerY>400){
                  that.handleNext();
              }else if(event.layerY>400){
                  that.handlePrev();
              }
          };
      },
      methods:{
          transfer(){
              let locale = this.$i18n.locale
              locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
              this.lang = this.lang === '中文' ? 'English' : '中文'
          },
          handleNext(){
              if(this.activeIndex<5){
                  ++this.activeIndex;
              }else{
                  this.activeIndex=1;
              }
          },
          handlePrev(){
              if(this.activeIndex>1){
                  --this.activeIndex;
              }else{
                  this.activeIndex=5
              }
          }
      }

    }
</script>

<style scoped lang="less">
.home-wrap {
  height: 100%;
  .btn-transfer{
    position: fixed;
    right: 18.75%;
    top: 8.15%;
    z-index: 9999;
    width: 120px;
    text-align: center;
    height: 47px;
    line-height: 47px;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
    img{
      margin-right: 8px;
      &.active{
        transform: rotate(180deg);
      }
    }
  }
  .btn-next{
    position: fixed;
    left: 50%;
    bottom: 75px;
    transform: translateX(-50%);
    z-index: 9999;
    cursor: pointer;
  }
  ul.dot{
    position: fixed;
    right: 15.625%;
    top: 50%;
    z-index:9999;
    transform: translateY(-50%);
    li{
      cursor: pointer;
      width: 20px;
      height: 20px;
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      &.active{
        border-radius: 100%;
        border: 1px solid #C0C0CC;
      }
      div{
        width: 6px;
        height: 6px;
        background-color: #C0C0CC;
        border-radius: 100%;
      }
    }
  }
 ul.box{
   height: 100%;
   li{
     background-color: #fff;
     position: absolute;
     width:100%;
     height: 100%;
     z-index:1;
     &.active{
       z-index:20;
     }
     &.first{
       overflow: hidden;
       background: url("../assets/images/top_bg.png") no-repeat;
       background-size: cover;
        .intro-img{
          width: 29.4%;
          height: auto;
          margin-top: 69px;
        }
       .logo{
         position: absolute;
         left: 18.75%;
         top: 1.85%;
       }
       .box{
         margin-top: 6.29%;
          .p1{
            font-size: 48px;
            color: #fff;
            height: 67px;
            line-height: 67px;
          }
         .p2{
           color: #fff;
           font-size: 32px;
           height: 45px;
           line-height: 45px;
           margin-top: 22px;
           margin-bottom: 56px;
         }
         .p3{
           img{
             margin-right: 30px;
           }
           .btn-download{
             color: #fff;
             text-align: center;
             line-height: 60px;
             border: 2px solid #fff;
             border-radius: 30px;
             display: inline-block;
             width: 180px;
             height: 60px;
             box-sizing: border-box;
             padding-left: 30px;
             background: url("../assets/images/logo_android.png") no-repeat;
             background-position: 21px center;
             background-size: 30px 36px;
             cursor: pointer;
             font-size: 28px;
           }
         }
       }
     }
     &.second{
       display: flex;
       flex-direction: column;
       justify-content: center;
        section{
          display: flex;
          align-items: center;
          justify-content: center;
          dl{
            display: inline-block;
            width:320px;
            height: 420px;
            text-align: center;
            dt{
              height: 100px;
            }
            dd{
              color: #303033;
              height: 56px;
              line-height: 56px;
              margin-top: 80px;
              font-size: 40px;
            }
          }
        }
        p{
          margin-bottom: 60px;
          color: #303033;
          font-size: 40px;
          text-align: center;
        }

     }
     &.third{
       display: flex;
       justify-content: center;
       align-items: center;
       .left{
         .p1{
           hieght: 67px;
           line-height: 67px;
           margin-bottom: 40px;
           color: #303033;
           font-size: 48px;
         }
         .p2{
           font-size: 32px;
           color: #606066;
           height: 45px;
           line-height: 45px;
         }
         margin-right: 170px;
       }
       .right{
         img{
           width: 678px;
           height: auto;
         }
       }
     }
     &.fourth{
       display: flex;
       justify-content: center;
       align-items: center;
       .right{
         .p1{
           hieght: 67px;
           line-height: 67px;
           margin-bottom: 40px;
           color: #303033;
           font-size: 48px;
         }
         .p2{
           font-size: 32px;
           color: #606066;
           height: 45px;
           line-height: 45px;
         }
         margin-left: 170px;
       }
       .left{
         img{
           width: 678px;
           height: auto;
         }
       }
     }
     &.fifth{
       display: flex;
       justify-content: center;
       align-items: center;
       .left{
         .p1{
           hieght: 67px;
           line-height: 67px;
           margin-bottom: 40px;
           color: #303033;
           font-size: 48px;
         }
         .p2{
           font-size: 32px;
           color: #606066;
           height: 45px;
           line-height: 45px;
         }
         .p3{
           margin-top: 40px;
           .btn-download{
             color: #303033;
             text-align: center;
             line-height: 60px;
             border: 2px solid #303033;
             border-radius: 30px;
             display: inline-block;
             width: 180px;
             height: 60px;
             box-sizing: border-box;
             padding-left: 30px;
             background: url("../assets/images/log_android_black.png") no-repeat;
             background-position: 21px center;
             background-size: 30px 36px;
             cursor: pointer;
             font-size: 28px;
           }
         }
         margin-right: 170px;
       }
       .right{
         img{
           width: 678px;
           height: auto;
         }
       }
     }
   }
 }
}
</style>
