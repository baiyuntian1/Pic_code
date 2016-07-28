Pic_code  图片验证码   v1.0.1
===

文件说明：
-----

  pic_code 使用的是绝对路径，需要创建项目才能正常看效果
  
  pic_code_x 下载之后直接打开demo的code.html就可以直接看效果
  
文件结构
----

  1.将pic_code.css , pic_code.less , pic_code.css.map 放在inc文件夹，样式可以在inc里面改
  2.将pic_code.js文件放在jq中（原生规范）或widget/lib（AMD规范）中
页面引用：
----

  原生引用

    1. 页面底部引用/inc/jquery.min.js#1.x , zepto.js
    2. 再引用/jq/pic_code.js

  requirejs引用

    依赖pic_code.js和(jquery.min.js#1.x 或 zepto.js)，成功后返回对象 pic_code
    
    
功能配置及启用：
-----

var opt = {
    div_width: 260,//设置大图的默认宽，默认是260
    div_height: 160,//设置大图的默认高，默认是160
    crop_div: 50, // 设置移动的小图片的宽高，默认是50
    valid_range: 5, // 图片验证正确的容错范围，默认是5
    unit: "px", // 宽高及容错范围单位 "px|vw", 默认px，且IE6/7/8强制使用px
    background_url: ["/img/1.jpg","/img/2.jpg"], // 大图路径，数组
    Callback_error: function() { // 验证失败回调，默认为滑块和拼图小块滑回原位pic_code.doMove();  如果没有自定义方法此参数不传
        alert(11)
    }, 
    Callback_error_repeatedly: function() { // 多次验证失败回调，优先于Callback_error默认事件pic_code.change_background_url(); 如果没有自定义方法此参数不传
        alert('aa')
    }, 
    Callback_error_repeatedly_count: 3, // 触发多次验证失败回调的失败次数
    Callback_success: function() { //验证成功回调，默认方法：pic_code.valid_success_callback()  如果没有自定义方法此参数不传
        alert('bb')
    }
}

pic_code.init(opt);
