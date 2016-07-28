require(["pic_code", "/inc/jquery.min.js"], function($pic_code) {

    $(function(){
		var opt = {
		    div_width: 260,//设置大图的默认宽
		    div_height: 160,//设置大图的默认高
		    crop_div: 50, // 设置移动的小图片的宽高
		    valid_range: 5, // 图片验证正确的容错范围，默认是5
		    unit: "px", // 宽高及容错范围单位 "px|vw", 默认px，且IE6/7/8强制使用px
		    background_url: ["/img/1.jpg","/img/2.jpg","/img/3.jpg","/img/4.jpg"], // 大图路径，数组
		    Callback_error_repeatedly_count: 3 // 触发多次验证失败回调的失败次数
		}
		$pic_code.init(opt)
	})
});
