jquery.imagesScrolling.js
=========================

jquery 图片滚动插件

能实现图片循环滚动播放，支持自定义速度。

介绍：

  定义父元素的定位为relative，作为子元素定位基点，循环移动子元素left，实现循环移动
 可自定义速度，自定义每次移动长度，自定义子元素宽度
 
参数：

 options参数是一个对象，包含三个值
 
options.speed 每个多长时间移动一次，单位毫秒（默认值:50)
options.step(string|number|null) 每次移动长度 (默认值 1)
  step可选值:'auto','outer','inner','width',number,不传入
  'auto':步长为width+padding+border+margin
  'outer':步长为width+padding+border
  'inner':步长为width+padding
  'width':步长为width
  number:步长为传入值
  null:步长为默认值1
options.width 元素的宽度 (默认值 子元素width+padding+border+margin)

Example:

	js:
		$('#test').imagesScrolling();
	
	html
		<div id="test" class="test">
			<div>
				<img src="./images/1.jpg" />
		    </div>
		    <div>
				<img src="./images/2.jpg" />
		    </div>
		</div>
	
	css:
		.test{
			position:relative;
			border:solid 1px #0f0;
			height:200px;
			overflow:hidden;
			width:1120px;
			margin:auto
		}
		.test div{
			position:absolute;
			height:200px;
			width:260px;
			margin:0 10px
		}
		.test div img{
			width:100%;
			height:100%
		}
		
	#[更多例子](http://yanhaijing.github.io/jquery.imagesScrolling.js/example/demo.html)
		
许可：
 本程序遵从MIT许可，但图片来自QQstyle，归tencent所有