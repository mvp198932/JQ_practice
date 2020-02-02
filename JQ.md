```html
<h1 id="title">標題</h1>
<p class="content">ok</p>
<p class="content">ok</p>
<p class="content">ok</p>

 <script>
  $("#title").html("進度條");
  $("#title")[0].innerHTML="進度條";
  
  兩種寫法
  $(".content").html("進度條");
  or
  $(function(){
    $(".content").html("進度條");
    document.getElementById("title").innerHTML= "進度條";
  });
 </script>
```
## 選擇器
```html
<h1 id="title">標題</h1>
```
```js
document.getElementById("title").classList.add("myhead");
jQuery("#header").addClass("hishead");
   //  跟樓下一樣意思
$("#header").addClass("yourhead");
```
### 找兄弟姐妹值
```html
<div id="page" style="width:500px;position:relative;">
  <h1 id="header">My JQ Demo List</h1>
  <h2>我的代辦事項</h2>
  <ul>
    <li id="one" class="hot"><b>買</b>午餐</li>
    <li id="two" class="hot">練程式</li>
    <li id="three" class="hot">看影片</li>
    <li id="four">洗洗睡</li>
  </ul>
  <p style="margin-left:500px;">JQ的特色可以類</p>
  <ol>
    <li class="li">DOM非常方便快速</li>
    <li class="li">AJAX使用快且方便</li>
    <li class="li">帶effect特效</li>
  </ol>
</div>
```
```js
console 那找
$("#page")
// 0: div#page
$('#page .hot')
// k.fn.init(3) [li#one.hot, li#two.hot, li#three.hot, prevObject: k.fn.init(1)]
// 0: li#one.hot
// 1: li#two.hot
// 2: li#three.hot
// length: 3
// prevObject: k.fn.init [document]
// __proto__: Object(0)
$('ul #three')
// k.fn.init [li#three.hot, prevObject: k.fn.init(1)]
// 0: li#three.hot
// length: 1
// prevObject: k.fn.init [document]
// __proto__: Object(0)
$('#three').next()   往下找一層 洗洗睡
// k.fn.init [li#four, prevObject: k.fn.init(1)]
$('#three').next().addclass("cold") 直接在他dom增加屬性
// 洗洗睡 直接變藍色
$('#two').next().css("background","yellow")
直接增加css屬性
// k.fn.init [li#three.hot, prevObject: k.fn.init(1)]
$('#one').next().css('fontSize','30px').addClass('cold')  連續串再一起
// k.fn.init [li#two.hot.cold, prevObject: k.fn.init(1)]
var nodeA=$('#one').next().css('fontSize','30px').addClass('cold')
nodeA.css("background",'yellow')
// k.fn.init [li#two.hot.cold, prevObject: k.fn.init(1)]
```
## 引用上面html 找值
```js
$('ul #one')  空格下子子孫孫可以找到
// k.fn.init [li#one.hot, prevObject: k.fn.init(1)]
$('ul>#one')  >找兒子層
// k.fn.init [li#one.hot, prevObject: k.fn.init(1)]
$('li:not(.hot)') 在li底下找到不是not對象  css方式
// k.fn.init(4) [li#four, li.li, li.li, li.li, prevObject: k.fn.init(1)]
$('li').not('.hot') 找出全部再從not去過濾
// k.fn.init(4) [li#four, li.li, li.li, li.li, prevObject: k.fn.init(7)]
前面css寫法  後面jQ寫法
$('li:first') 或是 $('li').first()
$('li:last')  或是 $('li').last()
$('li:first-child') 
$('li:nth-child(4)') css從1開始數
 = $('li:eq(3)')= $('li').eq(3) jQ從0開始數

 $('li:contains(看)') 底下擁有字
// k.fn.init [li#three.hot, prevObject: k.fn.init(1)]
```
### 抓button value
```html
    <input type="text" name="student" value="chen"/>
    <input type="text" name="math" value="99" />
    <input type="button" id="btn" value="假按鈕" />
    <form id="send">
    <input type="submit" value="送出" />
  </form>
    <textarea name="mytext">1111</textarea>
    <p>
      <input type="checkbox" name="a1" value="1" />1
      <input type="checkbox" name="a1" value="2" />2
      <input type="checkbox" name="a1" value="3" />3
    </p>
    <a href="http://www.google.com" taitle="123" alt="1233">Go to google</a>
    <a href="http://www.google.com" taitle="456" alt="456">Go to google</a>
```
```js
$("input[type=button]")
// k.fn.init [input, prevObject: k.fn.init(1)]
$("input[type!=button]")
// k.fn.init(6) [input, input, input, input, input, input, prevObject: k.fn.init(1)]
$("input[value=chen]")
// k.fn.init [input, prevObject: k.fn.init(1)]
$("input[type=text][name=student]")
// k.fn.init [input, prevObject: k.fn.init(1)]
$('a[alt=456]')
$('a[tittle=123]')
$('a[tittle=123][alt=456]');
$(':input') //連textrea都會找到
$('input:submit')
$('input:checked') or $(':checked')

document.getElementsByTagName("ol")[0].innerHTML
=  $('ol').html()
    // <li class="li">DOM非常方便快速</li>
    //     <li class="li">AJAX使用快且方便</li>
    //     <li class="li">帶effect特效</li>
強迫寫入js
document.getElementsByTagName("ol")[0].innerHTML="<li>11</li><li>22</li>" ;
或者 jq
$("ol").html('<li>11</li><li>22</li>')

$("#header").text() //"My JQ Demo List"
$("#header").text('123') //"123"

$('ol').replaceWith("<div>1</div><div>2</div>")
直接取代掉 就找不回來
// k.fn.init [ol, prevObject: k.fn.init(1)]

$('h2').before("<h1>test</h1>")
在h2前插入 dom
// k.fn.init [h2, prevObject: k.fn.init(1)]
$('h2').after("<h1>h2's after</h1>")
在h2 後插入
// k.fn.init [h2, prevObject: k.fn.init(1)]

$('ul').prepend("<li>插入第一位用prepend</li>")
// k.fn.init [ul, prevObject: k.fn.init(1)]

$('ul').append("<li>插入老么用</li>")
// k.fn.init [ul, prevObject: k.fn.init(1)]

aa=$('#four').clone() 把洗洗睡複製起來用aa去接
// k.fn.init [li#four, prevObject: k.fn.init(1)]

$('ol').append(aa) 這列貼入洗洗睡
// k.fn.init [ol, prevObject: k.fn.init(1)]

$('h1')[0] js寫法
// <h1 id="header">My JQ Demo List</h1>

$('h1').eq(1).remove() 殺掉
// k.fn.init [h1, prevObject: k.fn.init(2)]

$("h1").eq(0).empty()  內容被清空
// k.fn.init [h1#header, prevObject: k.fn.init(1)]

$('a').attr('title') 兩組一樣 預選只會抓第一組
// "123"
$('a').eq(1).attr('title')
//"456"

$('a').eq(0).attr('title','555') 把它更改掉
//"555"

$("input").eq(0).attr('name','teacher') 用物件屬性更改值
// k.fn.init [input, prevObject: k.fn.init(7)]
查詢
$("input").eq(0).attr('name')
//"teacher"

$('p').eq(0).attr("style","color:green;font-size:2em")
更改css


更改css
$('p').css({
"font-size":"1em",
"color":"red"
})
// k.fn.init(2) [p, p, prevObject: k.fn.init(1)]

$('p').removeAttr("style") 把P後來STYLE殺掉
// k.fn.init(2) [p, p, prevObject: k.fn.init(1)]

$('P').toggleClass('hot') 像開關方式 打一次開 一次關
// k.fn.init(2) [p, p, prevObject: k.fn.init(1)]

$('input[name=student]').val() 對input抽值出來
// "chen"

$('input[name=student]').attr('value')
// "chen"
$('ol').parent() 比我大爸媽層出來
// k.fn.init [div#page, prevObject: k.fn.init(1)]

$('ol').parents() 阿公阿瑪都出來
// k.fn.init(3) [div#page, body, html, prevObject: k.fn.init(1)]

$('#two').parents()
// k.fn.init(4) [ul, div#page, body, html, prevObject: k.fn.init(1)]
// 0: ul  爸爸
// 1: div#page 阿公
// 2: body  阿奏
// 3: html
// length: 4
// prevObject: k.fn.init [li#two.hot]
// __proto__: Object(0)

$('#two').parents('#page') 縮小範圍
// k.fn.init [div#page, prevObject: k.fn.init(1)]

$('body').children() 那層小孩
// k.fn.init(11) [script, div#page, input, input, input, form#send, textarea, p, a, a, script, prevObject: k.fn.init(1)]

$('body').children("#page").children() page底下小孩
// k.fn.init(5) [h1#header, h2, ul, p, ol, prevObject: k.fn.init(1)]

$('#page').find('.hot') page底下直接找到三個孫子
// k.fn.init(3) [li#one.hot, li#two.hot, li#three.hot, prevObject: k.fn.init(1)]

$('#three').prev() three往前找到two那個
// k.fn.init [li#two.hot, prevObject: k.fn.init(1)]

$('#three').next() three往後找到four
// k.fn.init [li#four, prevObject: k.fn.init(1)]

$('#two').siblings() 兄弟層不包含自己
// k.fn.init(3) [li#one.hot, li#three.hot, li#four, prevObject: k.fn.init(1)]
// 0: li#one.hot
// 1: li#three.hot
// 2: li#four

$('#two').siblings('.hot') 兄弟曾指定有class hot
// k.fn.init(2) [li#one.hot, li#three.hot, prevObject: k.fn.init(1)]
// 0: li#one.hot
// 1: li#three.hot
// length: 2
// prevObject: k.fn.init [li#two.hot]
// __proto__: Object(0)

<script>
所有程式碼跑完就跑alert
       $(document).ready(function(){
        alert($("four").text())
      });
</script>

用on click事件觸發匿名涵式
$(document).ready(function(){
        $("#btn").on("click",function(){
          console.log("click1");
        });

前提放form表單
$("#send").on("submit",function(){
  alert("submit1");
  });    

滑過去整列顯示
$("#three").on("mouseover",function(){
alert(789);
  });    

$("#three").hover(function(){
alert(456);
}); 
```
