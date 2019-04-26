function readyToShowBooksOnSearchPage()
{
	var r = window.location.search.substr(1).split("=")[1];
	document.getElementById('search_content').innerHTML=decodeURI(r);
    $(document).ready(function()
    {
        $.ajax(
            {
				
                url: "http://vtmer.cn/search" + "=" + decodeURI(r),
                dataType: "json",
                async: true,
                type: "GET",
                success: function(data)
                {
					console.log(data);
					console.log(info);
                    var info = data.bookclass[0].bookInfo[0];
                    showBooks(info);
                }
            }
        )
    })
}

function search_page(){
	var text =document.getElementById("keyword").value;
		if(!text)
		{
			alert('请输入需要搜索的内容');
		}
	var url = '搜索页.html?' + 'seacrh=' + text;
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
function details(info){
	var s = document.getElementById('book_bg');
	$("#book_bg").show(500);
	s.style.display= 'flex';

	document.getElementById('s').innerHTML = decodeURI(window.location.search.substr(1).split("=")[1]);
	var authorintro = document.getElementById("f");
    var authorintro_text = info.ahthorIntro[0];
    authorintro.innerHTML = authorintro_text;
}
function closeborder(){
	var b =document.getElementById('book_bg');
	b.style.display = 'none';
}
Mock.mock(/http:\/\/vtmer\.cn\/search/, {
				// 书的大分类
				'bookclass': [{
					// 书的详情
					'bookInfo|20-80': [{
						// 书名
						title: '@title(1,5)',
						// 作者
						author: '@name()',
						// 出版社
						publish: '@region()出版社',
						// 出版时间
						publishDate: '@date(yyyy-MM-dd)',
						// 图书馆详情
						library: [{
							// 数目
							total: '@natural(0, 100)',
							// 位置
							position: '@natural(2, 7)楼@natural(1,100)架@natural(0, 100)'
						}],
						// 书本链接
						bookUrl: [{
							doubanUrl: '@url()',
							zhihuUrl: '@url()'
						}],
						// 书本购买链接
						buyUrl:[{
							jDUrl: '@url()',
							DangUrl: '@url()',
							AmazonUrl: '@url()'
						}],
						// 作者介绍
						ahthorIntro: '@paragraph(3)',
						// 书本介绍
						bookIntro: '@paragraph(5)',
						// 书本封面链接
						cover: '@image(200x280,@color(),png)',
						// 评分
						score: '@natural(0, 5)'
					}]
				}]
			});