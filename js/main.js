//justin touch v1.1 https://github.com/yuminjustin/touch
!function(a){var b,c,d;c=["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","tap","longTap","drag"],c.forEach(function(c){a.fn[c]=function(){var e=new d(a(this),c);return b=arguments[1]||{x:100,y:100},e.start(),this.on(c,arguments[0])}}),d=function(){this.target=arguments[0],this.e=arguments[1]},d.prototype.framework=function(a){return a.changedTouches?a.changedTouches[0]:a.originalEvent.touches[0]},d.prototype.common=function(){return arguments[0].preventDefault(),{t:this.framework(arguments[0]),d:new Date}},d.prototype.start=function(){var a=this;a.target.on("touchstart",function(b){var c=a.common(b);a.ts={x:c.t.pageX,y:c.t.pageY,d:c.d.getTime()}}),a.target.on("touchmove",function(b){var c=a.common(b);return a.tm={x:c.t.pageX,y:c.t.pageY,xs:a.ts.x,ys:a.ts.y},"drag"==a.e?void a.target.trigger(a.e,a.tm):void 0}),a.target.on("touchend",function(b){var c=a.common(b);a.tm=a.tm||a.ts,a.te={x:a.tm.x-a.ts.x,y:a.tm.y-a.ts.y,d:c.d.getTime()-a.ts.d},a.tm=void 0,a.factory()})},d.prototype.factory=function(){var a=Math.abs(this.te.x),c=Math.abs(this.te.y),d=this.te.d,e=this.status;return 5>a&&5>c?e=300>d?"tap":"longTap":a<b.x&&c>b.y?e=250>d?this.te.y>0?"swipeDown":"swipeUp":"swipe":c<b.y&&a>b.x&&(e=250>d?this.te.x>0?"swipeRight":"swipeLeft":"swipe"),e==this.e?void this.target.trigger(this.e):void 0}}(window.jQuery||window.Zepto);

//countUp
function countUp(a,b,c,d,e,f){for(var g=0,h=["webkit","moz","ms"],i=0;i<h.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[h[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[h[i]+"CancelAnimationFrame"]||window[h[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a){var c=(new Date).getTime(),d=Math.max(0,16-(c-g)),e=window.setTimeout(function(){a(c+d)},d);return g=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),this.options=f||{useEasing:!0,useGrouping:!0,separator:",",decimal:"."},""==this.options.separator&&(this.options.useGrouping=!1),null==this.options.prefix&&(this.options.prefix=""),null==this.options.suffix&&(this.options.suffix="");var j=this;this.d="string"==typeof a?document.getElementById(a):a,this.startVal=Number(b),this.endVal=Number(c),this.countDown=this.startVal>this.endVal?!0:!1,this.startTime=null,this.timestamp=null,this.remaining=null,this.frameVal=this.startVal,this.rAF=null,this.decimals=Math.max(0,d||0),this.dec=Math.pow(10,this.decimals),this.duration=1e3*e||2e3,this.version=function(){return"1.2.0"},this.easeOutExpo=function(a,b,c,d){return 1024*c*(-Math.pow(2,-10*a/d)+1)/1023+b},this.count=function(a){null===j.startTime&&(j.startTime=a),j.timestamp=a;var b=a-j.startTime;if(j.remaining=j.duration-b,j.options.useEasing)if(j.countDown){var c=j.easeOutExpo(b,0,j.startVal-j.endVal,j.duration);j.frameVal=j.startVal-c}else j.frameVal=j.easeOutExpo(b,j.startVal,j.endVal-j.startVal,j.duration);else if(j.countDown){var c=(j.startVal-j.endVal)*(b/j.duration);j.frameVal=j.startVal-c}else j.frameVal=j.startVal+(j.endVal-j.startVal)*(b/j.duration);j.frameVal=Math.round(j.frameVal*j.dec)/j.dec,j.frameVal=j.countDown?j.frameVal<j.endVal?j.endVal:j.frameVal:j.frameVal>j.endVal?j.endVal:j.frameVal,j.d.innerHTML=j.formatNumber(j.frameVal.toFixed(j.decimals)),b<j.duration?j.rAF=requestAnimationFrame(j.count):null!=j.callback&&j.callback()},this.start=function(a){return j.callback=a,isNaN(j.endVal)||isNaN(j.startVal)?(console.log("countUp error: startVal or endVal is not a number"),j.d.innerHTML="--"):j.rAF=requestAnimationFrame(j.count),!1},this.stop=function(){cancelAnimationFrame(j.rAF)},this.reset=function(){j.startTime=null,j.startVal=b,cancelAnimationFrame(j.rAF),j.d.innerHTML=j.formatNumber(j.startVal.toFixed(j.decimals))},this.resume=function(){j.startTime=null,j.duration=j.remaining,j.startVal=j.frameVal,requestAnimationFrame(j.count)},this.formatNumber=function(a){a+="";var b,c,d,e;if(b=a.split("."),c=b[0],d=b.length>1?j.options.decimal+b[1]:"",e=/(\d+)(\d{3})/,j.options.useGrouping)for(;e.test(c);)c=c.replace(e,"$1"+j.options.separator+"$2");return j.options.prefix+c+d+j.options.suffix},j.d.innerHTML=j.formatNumber(j.startVal.toFixed(j.decimals))};

//barrage by wucheng and modified by mask on 2015.03.12
// !function(){window.pageNo=-1,window.sceneVersion=-1,window.memKey=-1,window.appendMsgTimer=10,window.maxCache=100,window.maxMsgLength=15,window.randomMsgLength=17,window.randomOffsetTime=37,window.CACHESEND=[],window.CACHEMSG=[],$.fn.Barrage=function(a){var b,c,e,f,g;return a||(a={}),b=this,c="msgIndex",width=b.width(),e=height=b.height(),f=0,$(b).css("position","relative"),g={fontSize:[39],fontColor:["3db35c","ffcd02","ff5d37","3db35c"],padding:20,heightOffset:20,leftRange:40,maxLeftWidth:2e3,removeWidth:20,heightPre:72,moveTime:900,delayTime:157},$.extend(g,a),this.getLastLeft=function(){var b,a=$("#"+c+f);return 0!=a.length?(a.removeAttr("id"),b=a.offset().left+a.width(),b>0&&width>b?null:b):null},this.appendMsg=function(a){var b,h,i,j,k,l;a&&(b=this.randSize(),this.randColor(),h=this.randClassname(),i=a.length,j=i*b,k=this.getLastLeft()||width,l=$($("<div>").appendTo(this)),l.attr("id",c+f),k>g.maxLeftWidth&&(k=k%g.maxLeftWidth+width),l.attr("class",h),l.css({position:"absolute",display:"block",left:Math.floor(Math.random()*g.leftRange)+k+"px",top:height-e+b+"px",width:j+30+"px",padding:g.paading+"px"}),e=e-b-g.heightOffset,f++,e<=g.heightPre&&(e=height,f=0),l.text(a),l.animate({left:0-j+g.removeWidth+"px"},this.calTime(j+k),"swing",function(){$(this).remove()}))},this.randSize=function(){return g.fontSize[Math.floor(879421*Math.random())%g.fontSize.length]},this.randColor=function(){return g.fontColor[Math.floor(879421*Math.random())%g.fontColor.length]},this.randClassname=function(){return g.className[Math.floor(879421*Math.random())%g.className.length]},this.calTime=function(a){return a/80*g.moveTime},this.pushMsg=function(a){window.CACHESEND.push(a),window.CACHEMSG.length<window.maxCache?window.CACHEMSG.push(a):window.CACHEMSG[Math.floor(1e3*Math.random())%window.maxCache]=a},this.start=function(a){$.appendMsg4Cache(),0!=a&&$.appendMsg4Data()},this},$.appendMsg4Cache=function(){setTimeout(function(){window.CACHESEND.length>0&&barrage.appendMsg(window.CACHESEND.pop()),$.appendMsg4Cache()},window.appendMsgTimer)},$.appendMsg4Data=function(){setTimeout(function(){var a=barrage.find("div");a.length<window.maxMsgLength&&window.CACHESEND.push(window.CACHEMSG[Math.floor(1e3*Math.random())%window.CACHEMSG.length]),$.appendMsg4Data()},70)}}();

//=======================common alert===============================
function showAlert(data,showTime){
    if(showTime==undefined){
        showTime=3400;
        console.log('pop将显示'+showTime+'毫秒');
    }
    if(data!='' && !$('#pop-notification').is(':visible')){
        // $('#pop-notification').html(data).fadeIn().delay(showTime).fadeOut();
        // $('#pop-notification').html(data).fadeIn();
        $('#pop-notification').html(data).css('display', 'block');
        setTimeout(function(){
        	$('#pop-notification').css('display', 'none');
        }, showTime);
    }
}

//=======================shuping wanshua pop===============================
function orient() {
	if (window.orientation == 0 || window.orientation == 180) {
		$('#restrict_heng').hide();
		return false;
	}
	else if (window.orientation == 90 || window.orientation == -90) {
		// orientation = 'landscape';
		$('#restrict_heng').show();
		// alert('请在横屏下玩耍！');
		return false;
	}
}

$(window).bind( 'orientationchange', function(e){
	orient();
});





//=======================calculate chat block height===============================
var barrage;

function setHeight(){
	var wHeight=$(window).height();
	var bHeight=$('#banner').height();
	var fHeight=45;
	var cHeight=wHeight-bHeight-fHeight;
	
	$('#chatBlock').height(cHeight);
	barrage = $('#chatBlock').Barrage({
		className : [ 'line1' , 'line2', 'line3', 'line3', 'line4', 'line5' ]
	});
	// start();
	console.log('yes!');
}
setTimeout(function(){
	setHeight();
}, 500)




//=======================Barrage in chat block===============================
CACHEMSG=[];

CACHEMSG.push("期待张翰");
CACHEMSG.push("霸道总裁变霸道捕快了哈哈");
CACHEMSG.push("魔幻特效很过瘾啊啊啊啊");
CACHEMSG.push("颜值爆表，舔屏中");
CACHEMSG.push("蛮喜欢张翰跟钧甯，期待他们演一对儿");
CACHEMSG.push("陈伟霆，你抛弃大师轰了吗");
CACHEMSG.push("道是无情却有情");
CACHEMSG.push("大捕头相当相当棒");
CACHEMSG.push("不是小说中的无情，小说中无情公子实在太好了");
CACHEMSG.push("希望最后是好结局");
CACHEMSG.push("每周四集！耶耶耶！有点少哦");
CACHEMSG.push("我一直理解不了为什么小说里姬瑶花明明和无情组cp.. 可是到了电影和这部剧里就喜欢了冷血");
CACHEMSG.push("我在想播一集看一集唉还是凑到放假一起看");
CACHEMSG.push("跟小说的不能比啊");
CACHEMSG.push("陈伟霆，我们的追追");
CACHEMSG.push("请继续支持陈伟霆带来的追命");
CACHEMSG.push("一声兄弟，生死同盟");
CACHEMSG.push("心水张翰的，喜欢冷血的，要速度啊");
CACHEMSG.push("张翰加油！四大名捕剧组和谐，粉丝和谐，祝少年四大名捕收视长虹！！！！！");
CACHEMSG.push("大爱安爷，大爱逆相思");
CACHEMSG.push("何晟铭唱歌好好听");
CACHEMSG.push("原文说的是四大美男才子-，-真的啊！");
CACHEMSG.push("欢迎陈伟霆粉丝前来");
CACHEMSG.push("无情让我有一种想保护的冲动");
CACHEMSG.push("钧甯的“读心术”真厉害！");
CACHEMSG.push("唉，鬼鬼为啥不演女一，导演编剧没眼光");
CACHEMSG.push("印象中，无情的腿是受了伤，他一直是坐轮椅的，但这部剧里他的腿怎么好了？");
CACHEMSG.push("骚年四大名捕哈哈哈");
CACHEMSG.push("原来无情也有喜欢离陌");
CACHEMSG.push("支持栋哥一切电视剧");
CACHEMSG.push("冷哥冷嫂的爱好坚定");
CACHEMSG.push("我们的冷爷真的是太帅了！");
CACHEMSG.push("贾青好漂亮呢");
CACHEMSG.push("虽然我喜欢张钧甯，但我不喜欢这种玛丽苏角色");
CACHEMSG.push("最爱鬼鬼，鬼鬼加油！！少四必红！！！！");
CACHEMSG.push("好想看。可惜要到晚上10点12点的。真不想上班");
CACHEMSG.push("不知道这个姬瑶花会有多坏还是多傻多天真");
CACHEMSG.push("美好的凌依依侠女，我爱你");
CACHEMSG.push("这年头的剧不腐怎么红");
CACHEMSG.push("期待张翰变身“浪人”的造型");
CACHEMSG.push("希望早点儿看到冷爷冷嫂在一起");
CACHEMSG.push("安爷好帅好酷好时尚");
CACHEMSG.push("无敌口罩+连衣帽，时尚达人");
CACHEMSG.push("安爷威武！安爷霸气！");
CACHEMSG.push("不离不弃的我们终于迎来了少四的开播！！！！");
CACHEMSG.push("为追命无情打算追剧");
CACHEMSG.push("期待鬼鬼和茅子俊");
CACHEMSG.push("看过好多版本的四大名捕，超爱追命这个角色");
CACHEMSG.push("我爷威武，安爷太帅了");
CACHEMSG.push("凌依依这个角色也很好啊，我很喜欢的");

// function start(){
// 	moli();
// 	setInterval(function(){
// 		moli();
// 	},9000);
// }
// var i=8;
// function moli(){
// 	var length = CACHEMSG.length;
// 	for (var i = 0; i < 6; i++) {

// 			// var id = Math.ceil(Math.random()*window.CACHEMSG.length);
// 			// var msg = window.CACHEMSG[id];
// 			// barrage.appendMsg(msg);
// 	}
// 	// test();
// }


function infiniteSend(){
	setTimeout(function(){
		infiniteSend();
	},Math.random()*600+500);

	var id = Math.ceil(Math.random()*window.CACHEMSG.length);
	var msg = window.CACHEMSG[id];
	// console.log(msg,id);
	barrage.appendMsg(msg);
}
setTimeout(function(){
	infiniteSend();
}, 800)



$('#send-trigger').tap(function() {
	barrage.appendMsg($('#input-content').val(),true);
	$('#input-content').val('');
	setTimeout(function(){
		$('#my-sound')[0].play();
	},800);
});

document.onkeydown=function(event){
    var e = event || window.event;
    if(e && e.keyCode==13){ // enter 键
        $('#send-trigger').trigger('tap');
        // $('#send-trigger').click();
    }
}; 




//=======================update online numbers==============================
var demo = new countUp("total-num", 0, 654543, 0, 3, null);
demo.start();


//=======================zoom img==============================
$(".tuwen_img").fancybox({
	padding: 0,

	openEffect : 'elastic',
	openSpeed  : 300,

	closeEffect : 'elastic',
	closeSpeed  : 300,

	closeClick : true,

	helpers : {
		overlay : {
            css : {
                'background' : 'rgba(0,0,0,0.7)',
                'width':'100%'
            }
        }
	}
});
