// JavaScript Document
(function($, window){
	$.fn.extend({imagesScrolling:function(){
		var $scrollings = null,
			$divs = null,
			len = 0,
			i = 0,
			timeId=null,
			$parent = $(this);
		function initScrolling(){//初始化函数初始化滚动图片
			var i = 0;
			$scrollings=$parent;
			$divs = $parent.find("div");
			len = $divs.length;
			
			//初始化坐标
			$divs.each(function(index){
				$(this).css('left', index*250 + 'px');
			});
			
			//绑定事件
			$scrollings.delegate('div', 'mouseover', function(){
				imageScroll();
			});
			$scrollings.delegate('div', 'mouseout', function(){
				imageStop();
			});

			imageScroll();
		}
		
		function imageScroll(){
			$divs.each(function(index){
				var left = parseInt($(this).css('left'), 10) - 1;
				if(left < -250){
					left = (len - 1)*250;
				}
				$(this).css('left',left + 'px');
			});
			timeId=window.setTimeout(function(){imageScroll();},50);
		}

		function imageStop(){
			window.clearTimeout(timeId);
		}
		
		initScrolling();
	}});
}(jQuery, window));