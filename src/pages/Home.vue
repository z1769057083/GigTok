<template>
  <div class="home-wrap">
    <div class="btn-transfer" @click="transfer"><img :class="{active:lang==='English'?true:false}" src="../assets/images/fy_down.png" alt=""><span>{{lang}}</span></div>
    <div class="btn-next"><img src="../assets/images/next.png" @click="handleNext" alt=""></div>
    <ul class="box">
      <transition-group :enter-active-class="direction==='down'?'slideInUp':'slideInDown'" :leave-active-class="direction==='down'?'slideOutUp':'slideOutDown'" enter-class="enter" eave-class="enter">
      <li class="first animated" v-show="activeIndex===1?true:false" :class="[{active:activeIndex===1?true:false}]" key="first">
        <img src="../assets/images/logo.png" alt="" class="logo">
        <div class="box">
            <p class="p1 animated swing" key="p1">GigTok</p>
          <p class="p2 animated flipInX" key="p2">{{$t("introduce")}}</p>
          <p class="p3" key="p3">
            <img class="img1 animated fadeInLeft" src="../assets/images/logo_app.png" alt="">
            <span class="btn-download animated fadeInRight">
              Android
            </span>
          </p>
        </div>
        <img class="intro-img animated pulse" src="../assets/images/pic_1.png" alt="">
      </li>
      <li class="second animated" v-show="activeIndex===2?true:false" :class="[{active:activeIndex===2?true:false}]" key="second">
        <p class="animated zoomIn">{{$t("first.title")}}</p>
        <section>
          <dl>
            <dt class="animated rollIn"><img class="pic_hd" src="../assets/images/pic_hd.png" alt=""></dt>
            <dd class="animated jackInTheBox">{{$t("first.in1")}}</dd>
          </dl>
          <dl>
            <dt  class="animated rollIn"><img class="pic_aq" src="../assets/images/pic_aq.png" alt=""></dt>
            <dd class="animated jackInTheBox">{{$t("first.in2")}}</dd>
          </dl>
          <dl>
            <dt  class="animated rollIn"><img class="pic_bj" src="../assets/images/pic_bj.png" alt=""></dt>
            <dd class="animated jackInTheBox">{{$t("first.in3")}}</dd>
          </dl>
        </section>
      </li>
      <li class="third animated" v-show="activeIndex===3?true:false" :class="[{active:activeIndex===3?true:false}]" key="third">
        <div class="left">
          <p class="p1 animated rollIn">{{$t("second.title")}}</p>
          <p class="p2 animated rollIn">{{$t("second.in1")}}</p>
        </div>
        <div class="right">
          <img class="animated bounceInRight" src="../assets/images/pic_hlyh.png" alt="">
        </div>
      </li>
      <li class="fourth animated" v-show="activeIndex===4?true:false" :class="[{active:activeIndex===4?true:false}]" key="fourth">
        <div class="left">
          <img class="animated rollIn" src="../assets/images/pic_xxaq.png" alt="">
        </div>
        <div class="right">
          <p class="p1 animated rotateInDownRight">{{$t("third.title")}}</p>
          <p class="p2 animated rotateInDownRight">{{$t("third.in1")}}</p>
        </div>
      </li>
      <li class="fifth animated" v-show="activeIndex===5?true:false" :class="[{active:activeIndex===5?true:false}]" key="fifth">
        <div class="left">
          <p class="p1 animated rollIn">{{$t("fourth.title")}}</p>
          <p class="p2 animated rollIn">{{$t("fourth.in1")}}</p>
          <p class="p3 animated rollIn">
            <span class="btn-download">
              Android
            </span>
          </p>
        </div>
        <div class="right">
          <img class="animated bounceInRight" src="../assets/images/pic_jdyy.png" alt="">
        </div>
      </li>
      </transition-group>
    </ul>
    <ul class="dot" v-if="showDot">
      <li v-for="i in 5" :key="i" :class="{'active': activeIndex===i?true:false}" @click="handleDotClick" :data-index="i"><div :data-index="i"></div></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
          return{
            lang:'中文',
            activeIndex:1,
            direction:'down',
              showDot:true,
          }
        },
      mounted(){
          var that = this,timer=null;
          document.body.onmousewheel = function(event) {
              event = event || window.event;
              //滚轮向下滚
              if(event.deltaY>0){
                  that.direction = 'down'
                  clearTimeout(timer);
                  timer = setTimeout(function() {
                      that.handleNext();
                  }, 300);

              } else{//向上
                  that.direction = 'top'
                  clearTimeout(timer);
                  timer = setTimeout(function() {
                      that.handlePrev();
                  }, 300);
              }

          };
          if(this.IsPC()){
              this.showDot = true;
          }else{
              this.showDot = false;
          }
      },
      methods:{
          IsPC() {
              var userAgentInfo = navigator.userAgent;
              var Agents = ['Android', 'iPhone',
                  'SymbianOS', 'Windows Phone',
                  'iPad', 'iPod'
              ];
              var flag = true;
              for (var i = 0; i < Agents.length; i++) {
                  if (userAgentInfo.indexOf(Agents[i]) != -1) {
                      flag = false;
                      break;
                  }
              }
              return flag;
          },
          transfer(){
              let locale = this.$i18n.locale
              locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
              this.lang = this.lang === '中文' ? 'English' : '中文'
          },
          handleNext(){
              this.direction = 'down';
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
          },
          handleDotClick(e){
              let i = e.target.dataset.index - 0;
              if(i<this.activeIndex){
                  this.direction = 'up';
              }else{
                  this.direction = 'down';
              }
              this.activeIndex = i;
          }
      }

    }
</script>

<style lang="less">
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
      width:19px;
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
    img{
      width: 51px;
      height: auto;
    }
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
     .animated {
       animation-delay: .5s;
       -webkit-animation-duration: 1s;
       animation-duration: 1s;
       -webkit-animation-fill-mode: both;
       animation-fill-mode: both;
     }
     &.active{
       z-index:20;
     }
     &.first{
       overflow: hidden;
       background: url("../assets/images/top_bg.png") no-repeat;
       background-size: 100% 100%;
        .intro-img{
          width: 29.4%;
          height: auto;
          margin-top: 69px;
        }
       .logo{
         position: absolute;
         left: 18.75%;
         top: 1.85%;
         width: 163px;
         height: auto;
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
             width: 60px;
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
          .pic_hd{
            width: 114px;
          }
          .pic_bj{
            width: 110px;
          }
          .pic_aq{
            width: 140px;
          }
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
@media only screen and (max-width: 1000px) {
  .home-wrap {
    .btn-transfer{
      right: 40px;
      top: 24px;
    }
    .btn-next{

    }
    ul.box{
      height: 100%;
      li{
        &.active{

        }
        &.first{

          .intro-img{
            width: 580px;
            margin-top: 80px;
          }
          .logo{
            left: 40px;
            top: 20px;
          }
          .box{
            margin-top: 80px;
            .p1{

            }
            .p2{

            }
            .p3{
              img{

              }
              .btn-download{
              }
            }
          }
        }
        &.second{
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          section{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            dl{
              display: flex;
              width:100%;
              justify-content: space-around;
              align-items: center;
              height: 120px;
              margin-top: 120px;
              &:first-child{
                margin-top: 60px;
              }
              dt{
                height: 100px;
              }
              dd{
                height: auto;
                line-height: 0;
                margin-top: 0;
              }
            }
          }
          p{
            margin-top: 60px;
          }

        }
        &.third{
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex-direction: column-reverse;
          .left{
            margin-top: 70px;
            .p1{

            }
            .p2{

            }
            margin-right: 0;
          }
          .right{
            margin-top: 70px;
            img{
            }
          }
        }
        &.fourth{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          .right{
            margin-top: 70px;
            .p1{

            }
            .p2{

            }
            margin-left: 0;
          }
          .left{
            margin-top: 70px;
            img{

            }
          }
        }
        &.fifth{
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex-direction: column-reverse;
          .left{
            margin-top: 50px;
            .p1{

            }
            .p2{

            }
            .p3{
              margin-top: 40px;
              .btn-download{

              }
            }
            margin-right: 0;
          }
          .right{
            margin-top: 70px;
            img{

            }
          }
        }
      }
    }
  }

}
</style>
