

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
		className : [ 'line1' , 'line2', 'line3', 'line3', 'line4', 'line5' ],
		hasPhoto: false
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
	barrage.appendMsg(msg,"http://1251097942.cdn.myqcloud.com/1251097942/demos/photo/photo2.jpg");
}
setTimeout(function(){
	infiniteSend();
}, 800)



document.onkeydown=function(event){
    var e = event || window.event;
    if(e && e.keyCode==13){ // enter 键
        $('#send-trigger').trigger('tap');
        // $('#send-trigger').click();
    }
}; 


