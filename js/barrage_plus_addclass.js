/**
*	JQuery-plus Barrage
*		opt.fontSize	Array<Int>
*		opt.fontColor	Array<String>
*		opt.className	Array<String>
*		opt.padding		int		(default 10)
*		opt.heightOffset	int	(default 10)
*		opt.leftRange	int 	(default 50)
*		opt.removeWidth	int		(default 80)
*		opt.heightPre		int (default 80)
*		opt.moveTime	int		(default 1000ms/100px)
*
*	Example:
*		var barrage = $(selector).Barrage() ;
*		barrage.appendMsg("Hello word!");
*	
*	tips :
*		setTimeout(function(){
*			barrage.appendMsg("Hello word!");
*		},257);	
*
*
*	Code by selangshiwo.com
*/
(function(){
	//插件其他配置
	window.pageNo = -1 ;
	window.sceneVersion = -1 ;
	window.memKey = -1 ;
	window.appendMsgTimer = 10 ;
	window.maxCache = 100 ;
	window.maxMsgLength = 15 ;
	window.randomMsgLength = 17 ;
	window.randomOffsetTime = 37 ;
	window.CACHESEND = [] ;
	window.CACHEMSG = [] ;
	
	$.fn.Barrage = function( opt ){
		
		if( !opt )
			opt = {} ;
		
		var that = this ;
		var lastEleKeyPre = "msgIndex" ;
		var leftWidth = width = that.width() , startHeight = height = that.height() , msgIndex = 0 ;

		$(that).css('position', 'relative');
		
		var setting = {
			fontSize : [ 30  ]  ,
			fontColor : [ "3db35c", "ffcd02" , "ff5d37" , "3db35c" ] ,
			padding : 20 ,
			heightOffset : 26 ,
			leftRange : 0 ,
			maxLeftWidth : 2000 ,
			removeWidth : -100 , 
			heightPre : 80 , 
			moveTime : 800 ,
			delayTime : 157
		} ;
		
		$.extend( setting , opt );
		
		this.getLastLeft = function(){
			var lastMsgEle = $("#" + lastEleKeyPre + msgIndex ) ;
			if( lastMsgEle.length != 0 ){
				lastMsgEle.removeAttr("id");
				var lastWidth = lastMsgEle.offset().left + lastMsgEle.width() ;
				
				return (lastWidth > 0 && lastWidth < width ) ? null : lastWidth ;
			}
			return null ;
		};
		
		/**
		 * 	待形成消息模版！
		 */
		this.appendMsg = function( msg,me ){
			if( !msg )
				return ;
			var fontSize = this.randSize() ;
			var fontColor = this.randColor() ;
			var className = this.randClassname() ;
			var msgLength = msg.length ;
			var msgWidth = msgLength * fontSize ;
			var leftWidth = this.getLastLeft() || width ;
			var msgDiv = $($("<div>").appendTo( this ));
			msgDiv.attr("id", lastEleKeyPre + msgIndex );
			//left: 0px; top: 50px;
			if( leftWidth > setting.maxLeftWidth )
				leftWidth = leftWidth%setting.maxLeftWidth + width ;
			
			if(me){
				msgDiv.attr("class", 'line_me');
			}else{
				msgDiv.attr("class", className);
			}
			msgDiv.css({
				"position" : "absolute" ,
				"display" : "block" ,
				"left": Math.floor(Math.random()*setting.leftRange) + leftWidth + "px",
				"top" : (height-startHeight + fontSize )  + "px" ,
				//"width": msgWidth>150?msgWidth*1.2:msgWidth +"px" ,//是否换行,0.x
				"width": msgWidth + 30 +"px" ,
				"padding" : setting.paading + "px" , 
				// "fontSize" : fontSize  + "px" ,
				// "color" : "#" + fontColor 
			});
			
			startHeight = startHeight - fontSize - setting.heightOffset ;
			msgIndex ++ ;
			if( startHeight <= setting.heightPre ){
				startHeight = height ;
				msgIndex = 0 ;
			}
			msgDiv.text( msg );
			//setTimeout(function(){
			msgDiv.animate({"left": (0 - msgWidth + setting.removeWidth )+"px" }, this.calTime( msgWidth + leftWidth ) ,"linear",function(){
				$(this).remove() ;
			}) ; 
			//}, setting.delayTime );
		};
		
		this.randSize = function(){
			//return setting.fontSize[new Date().getTime()%Math.floor(Math.random()*879421)%setting.fontSize.length] ;
			return setting.fontSize[Math.floor(Math.random()*879421)%setting.fontSize.length] ;
		};
		
		this.randColor = function(){
			//return setting.fontColor[new Date().getTime()%Math.floor(Math.random()*879421)%setting.fontColor.length] ;
			return setting.fontColor[Math.floor(Math.random()*879421)%setting.fontColor.length] ;
		};

		this.randClassname = function(){
			//return setting.fontColor[new Date().getTime()%Math.floor(Math.random()*879421)%setting.fontColor.length] ;
			return setting.className[Math.floor(Math.random()*879421)%setting.className.length] ;
		};
		
		this.calTime = function( wValue){
			return (wValue / 80 )*setting.moveTime ;
		};
		
		/**
		 * 	往消息队列里压入消息
		 */
		this.pushMsg = function( msg ){
			window.CACHESEND.push( msg );
			if( window.CACHEMSG.length < window.maxCache )
				window.CACHEMSG.push(msg);
			else
				window.CACHEMSG[Math.floor( Math.random()*1000)%window.maxCache] = msg ;
		};
		
		/**
		 * 	启动消息服务
		 * 		0 - 不启动虚拟消息
		 * 		1 - 启动虚拟消息
		 */
		this.start = function( startType ){
			$.appendMsg4Cache();
			
			if( startType != 0 ){
				$.appendMsg4Data();
			}
		}
		
		return this ;
		
	};
	
	$.appendMsg4Cache = function(){
    	setTimeout(function(){
        	if( window.CACHESEND.length > 0 ){
        		barrage.appendMsg( window.CACHESEND.pop()  );
        	}
   		 	$.appendMsg4Cache();
    	}, window.appendMsgTimer );
	};
	
	$.appendMsg4Data = function(){
        setTimeout(function(){
        	var nowMsgs = barrage.find("div") ;
        	if( nowMsgs.length < window.maxMsgLength ){
        		window.CACHESEND.push( window.CACHEMSG[Math.floor( Math.random()*1000)% window.CACHEMSG.length]  );
        	}
        	$.appendMsg4Data();
        } , 70 );
	};
	
})();