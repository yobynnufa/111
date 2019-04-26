<!DOCTYPE html>
<html>
<head>
<style>
*{
margin: 0;padding: 0;
}
#box{
/*display: flex;*/
/*justify-content: space-between;*/
}
#box > div{
float: left;
/*width: 20%;*/
/* margin-right: 1.3%;
*/ }
#box>div:last-child{
/*margin-right: 0;*/
}
</style>
<meta charset="UTF-8">
<title>demo</title>
</head>
<body>
<div id='box'>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<script src="mock.js" type="text/javascript" charset="utf-8"></script>
<script src="jquery-3.1.1.min.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
$(function(){
var data = Mock.mock({//模拟图片
"list|120-640":[
{
"height|180-420":4,
'bg':"@color"
}
]
})
const dLen = $("#box>div").length;//获取一共几列
$("#box>div").width(100/dLen+'%');//设置每列的宽度
const len = data.list.length;//获取所有的图片的长度
for(let u=0; u<len; u++){
const min = {//存储最低的元素  和 它对应的下标
h: $("#box>div").eq(0).height(),
i: 0
}
for(let j=1; j<dLen; j++){
let h = $("#box>div").eq(j).height();
if(h < min.h){//通过判断获取最低的元素
min.h = h;
min.i = j;
}
}
var $div = $('<div>').css({//动态添加到最低的div
'height': data.list[u].height+'px',
'background': data.list[u].bg
})
$("#box>div").eq(min.i).append($div);//最后添加到页面里
}
})
</script>
</body>
</html>
