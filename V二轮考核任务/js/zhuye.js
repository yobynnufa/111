
function openborder(){
   var a =document.getElementById("log");
   a.style.display = 'block';
   a.style.display = 'flex';
}
function closeborder(){
   var b =document.getElementById("log");
   b.style.display = 'none';
 
}
function changeColor(){
   var b =document.getElementById("close");
   b.style.backgroundColor = 'Orange';
}

function judge(){
   var myVal = $("#username").val();//jq通过id获取input值
   var num = $("#password").val();
  
   if(!myVal&&!num)
   {
alert("请输入用户名");
alert("请输入密码");
   }
   else{
       if(/^[a-za-z]+$/.test( myVal)&&!isNaN(num))
               {
                  if(num.length>6)
                 {
                    var c =document.getElementById("userlogo");
      c.style.display = 'none';
      var d =document.getElementById("show_username");
      d.style.display = 'block';
      document.getElementById("show_username").innerHTML='您好！'+ myVal; 
      var e =closeborder();
       } 
       else
       {
         alert("用户名全部为英文字母且不能有空格,密码为阿拉伯数字最小为六位数，请仔细审查"); 
       }  
                }
                else{
                   alert("用户名全部为英文字母且不能有空格,密码为阿拉伯数字最小为六位数，请仔细审查");
                }    
}
}
function type(){
   document.onclick = function(e){
   var target = e.target;
   x=document.getElementById(target.id);
   var c= document.getElementById("keyword");
   c.value=x.innerHTML;
   var url = '分类页面.html?' + 'class=' + c.value;
  window.open( url);
  return false;
      }
}
function do_search_page(){
   var keynum = event.keyCode;
   if(keynum==13)
   {
      loading();
   }

   return false;
}
 function search_page(){
var text =document.getElementById("keyword").value;
if(!text)
  {
     alert('请输入需要搜索的内容');
  }
   
  return false;
}

function loading(){
   document.getElementById('loading').style.display='block';
   setTimeout("disappeare()",2000);
   
   setTimeout("web_open()",1850); 
}
function web_open(){
var url = '搜索页.html?' + 'seacrh=' +document.getElementById("keyword").value;
window.open(url);
}
function disappeare(){
   document.getElementById('loading').style.display="none";

}

    
function luyou(){
   var url = '主页.html?' + 'http://vtmer.cn/login' ;
   window.href=url;
}
