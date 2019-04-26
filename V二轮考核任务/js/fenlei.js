
function details(){
    var s = document.getElementById('book_bg');
    $("#book_bg").show(500);
    s.style.display= 'flex';
}
function closeborder(){
    var b =document.getElementById('book_bg');
       b.style.display = 'none';
    }
function changeStyle(){
        var r = window.location.search.substr(1).split("=")[1];
        var w =decodeURI(r);
        var z=document.getElementById('Z').innerHTML;
        var x=document.getElementById('X').innerHTML;
        var a=document.getElementById('A').innerHTML;
        var k=document.getElementById('K').innerHTML;
        
         if(w==z)
        {
            document.getElementById('Z').style.color='Orange';
        }
        else{
           if(w==x)
        {
            document.getElementById('X').style.color='Orange';
        }
        else
        {
            if(w==a)
            {
                document.getElementById('A').style.color='Orange';
            }  
            else
            {
                if(w==k)
                {
                    document.getElementById('K').style.color='Orange';
                }
                        } 
        }
        } 
    }
function other_type(){
    document.onclick = function(e){
    var target = e.target;
    x=document.getElementById(target.id);
    var url = '分类页面.html?' + 'class=' + x.innerHTML;
    window.location.href=url;
    return false;
             }
}
function search_page(){
	var text =document.getElementById("keyword").value;
	if(!text)
		  {
			 alert('请输入需要搜索的内容');
		  }
	var url = '搜索页.html?' + 'search=' + text;
	window.open( url);
		  return false;
	}
function do_search_page(){
	var keynum = event.keyCode;
	if(keynum==13)
		{
		search_page();
		}
		return false;
    }
