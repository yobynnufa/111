## 简介
> AJAX通过原生的XMLHttpRequest对象发出HTTP请求，得到服务器返回的数据后，再进行处理。
> AJAX可以是同步请求，也可以是异步请求。但是，大多数情况下，特指异步请求。因为同步的Ajax请求，对浏览器有“堵塞效应”。
## 步骤
1. 创建AJAX对象
```
    var ajax = new XMLHttpRequest();
```
2. 发出HTTP请求
```js
    //向url发送mehod异步请求
    ajax.open(method, url, true);
    //定回调函数，监听通信状态（readyState属性）的变化。
    ajax.onreadystatechange = handleStateChange;
```
3. 接收服务器传回的数据，更新网页数据
一旦拿到服务器返回的数据，AJAX不会刷新整个网页，而是只更新相关部分，从而不打断用户正在做的事情。（注意跨域问题）
```js
    var xhr = new XMLHttpRequest();
    
    // 指定通信过程中状态改变时的回调函数
    xhr.onreadystatechange = function(){
      // 通信成功时，状态值为4
      if (xhr.readyState === 4){
        if (xhr.status === 200){
          console.log(xhr.responseText);
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    
    // open方式用于指定HTTP动词、请求的网址、是否异步
    xhr.open('GET', '/endpoint', true);
    
    // 发送HTTP请求
    xhr.send(null);
```

## readyState
readyState是一个只读属性，用一个整数和对应的常量，表示XMLHttpRequest请求当前所处的状态
- 0，对应常量UNSENT，表示XMLHttpRequest实例已经生成，但是open()方法还没有被调用。

- 1，对应常量OPENED，表示send()方法还没有被调用，仍然可以使用setRequestHeader()，设定HTTP请求的头信息。

- 2，对应常量HEADERS_RECEIVED，表示send()方法已经执行，并且头信息和状态码已经收到。

- 3，对应常量LOADING，表示正在接收服务器传来的body部分的数据，如果responseType属性是text或者空字符串，responseText就会包含已经收到的部分信息。

- 4，对应常量DONE，表示服务器数据已经完全接收，或者本次接收已经失败了。[重点关注]
```js
    if (ajax.readyState == 4) {
      // Handle the response.
    } else {
     // Show the 'Loading...' message or do nothing.
    }
```
只有readyState变为4时，才算确认请求已经成功，其他值都表示请求还在进行中
## status
status属性为只读属性，表示本次请求所得到的HTTP状态码，它是一个整数。一般来说，如果通信成功的话，这个状态码是200。
- 200, OK，访问正常[重点关注]
- 301, Moved Permanently，永久移动
- 302, Move temporarily，暂时移动
- 304, Not Modified，未修改
- 307, Temporary Redirect，暂时重定向
- 401, Unauthorized，未授权
- 403, Forbidden，禁止访问
- 404, Not Found，未发现指定网址
- 500, Internal Server Error，服务器发生错误

## responseText
responseText属性返回从服务器接收到的字符串，该属性为只读。如果本次请求没有成功或者数据不完整，该属性就会等于null。
```js
    var data = ajax.responseText;
```
## 事件监听接口
- onloadstart 请求发出
- onprogress 正在发送和加载数据
- onabort 请求被中止，比如用户调用了abort()方法
- onerror 请求失败
- onload 请求成功完成
- ontimeout 用户指定的时限到期，请求还未完成
- onloadend 请求完成，不管成果或失败

参考：[ajax](http://javascript.ruanyifeng.com/bom/ajax.html#toc4)
