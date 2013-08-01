/** 
* jQuery图片循环滚动插件
* 文档注视 YUIDoc
*
* @module jQuery.fn
* @submodule imagesScrolling
* @author 颜海镜
* @version 2013-01-22 15:16:28
*/
(function($, window){
	'use strict';
	
	/**
	 * 扩展fn,将imagesScrolling添加到下面
	 * @method imagesScrolling 
	 * @param {Object} options 参数
	 */
	$.fn.extend({imagesScrolling:function(options){
		var
			i = 0,
			timeId=null,
			$parent = $(this),
			$scrollings = $parent,
			$divs = $parent.find("div"),
			$div = $divs.eq(0),
			len = $divs.length,
			tempMarginLeft = parseInt($div.css('margin-left'), 10),
            tempMarginRight = parseInt($div.css('margin-right'), 10),
            marginLeft = isNaN(tempMarginLeft) ? 0 : tempMarginLeft,//修复ie下margin的默认值为auto
            marginRight = isNaN(tempMarginRight) ? 0 : tempMarginRight,//修复ie下margin的默认值为auto
			settings = {
			    speed: 50,
			    step: 1,
			    width: $div.outerWidth() + marginLeft + marginRight
			};			
		//判断入口参数，修复width
        if(options){
            if(options.step === 'auto'){
                options.step = $div.outerWidth() + marginLeft + marginRight;
            }else if(options.step === 'outer'){
                options.step = $div.outerWidth();
            }else if(options.step === 'inner'){
                options.step = $div.innerWidth();
            }else if(options.step === 'width'){
                options.step = $div.width();
            }else if(typeof options.step !== 'number'){
                options.step = 1;
            }
        }
        
		$.extend(settings, options);
				

		/**
		 * 图片滚动
		 * @method imageScroll
		 */
		function imageScroll(){
			//移动每一个子元素
			$divs.each(function(index){
				var left = parseInt($(this).css('left'), 10) - settings.step;
				if(left <= -settings.width){
					left = (len - 1)*settings.width;
				}
				$(this).css('left',left + 'px');
			});
			//下一次执行
			timeId=window.setTimeout(function(){imageScroll();},settings.speed);
		}

		/**
		 * 停止滚动
		 * @method imageStop
		 */
		function imageStop(){
			window.clearTimeout(timeId);
		}
		
		/**
		 * 初始化滚动图片
		 * @method initScrolling
		 */
		function initScrolling(){
			var i = 0;
			
			//初始化每个元素的坐标
			$divs.each(function(index){
				$(this).css('left', index*settings.width + 'px');
			});
			
			//帮顶鼠标移入事件
			$scrollings.bind('mouseenter', function(){
				imageStop();				
				//console.log('进入');
			});
			//帮顶鼠标移出事件
			$scrollings.bind('mouseleave', function(){
				imageScroll();
				//console.log('离开');
			});

			imageScroll();
		}
		
		//初始化滚动对象
		initScrolling();
	}});
}(jQuery, window));