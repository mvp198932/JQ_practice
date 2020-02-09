var titles = document.getElementsByClassName('title');
// console.log(titles)
//兩個標題


// var lis=document.getElementsByTagName('li')
// console.log(lis)
// 全部的li   =  $('ul').children

// for(i=0;i<lis.length;i++){
//   console.log(lis[i])}
// 一次幫我找出全部lis

// Array.from(titles).forEach(function(item){
//   console.log(item);
// }) // 找到所有item對象

// console.log(Array.isArray(titles)); 印出fales
// console.log(Array.isArray(Array.from(titles))); 
//  印出true 檢查說是否為數組對象


//  const list = document.querySelector('#book-list li .name'); 
// console.log(list)  //  找單一 第一筆

// const two =document.querySelector('#book-list li:nth-child(2) .name')
// console.log(two)  
// =$('ul').children[1]   jq寫法  指定找法
// 顯示 <span class="name">第二筆資料</span> 

// $('ul').children[0].children[1]   
// 顯示 <span class=​"delete">​delete​</span> jq寫法​


// books=document.querySelectorAll('#book-list li .name') 
// =var books2=document.getElementsByClassName('name')
// console.log(books)
// 顯示 NodeList(4) [span.name, span.name, span.name, span.name]
// 找全部 li底下class name


// Array.from(books).forEach(function(book){
// console.log(book);
// });
// 顯示
// <span class="name">第一筆資料</span>
// <span class="name">第二筆資料</span>
// <span class="name">第三筆資料</span>
// <span class="name">第四筆資料</span>

// Array.from(books).forEach(function(book){
// book.textContent+='(booktitle)'
// });
// book文字內+上你要的內容
// ___________________________________________________________

// const bookList = document.querySelector('#book-list');  

// bookList.innerHTML='<h2>會員增加中...</h2>';
// bookList.innerHTML+='<p>顯示html...</p>';// 直接增加在頁面後面

// console.log('the parent node is:',bookList.parentNode); 
// =$('#book-list').parentElement// 找到父母一層 jq
// console.log('the parent element is:',bookList.parentElement.parentElement);
// =$('#book-list').parentElement.parentElement// 往外再找 body
// console.log(bookList.children); // = $('#book-list').children


// console.log('book-list next sibling is:',bookList.nextSibling);//有可能text

// console.log('book-list next element sibling is:',bookList.nextElementSibling);
// =$('#book-list').nextElementSibling
//對下一個元素  

// console.log('book-list previous  sibling is:',bookList.previousSibling);//有可能text
// console.log('book-list previous element sibling is:',bookList.previousElementSibling);
// = $('#book-list').previousElementSibling  
//對上一個元素 

// bookList.previousElementSibling.querySelector('p').innerHTML +='<br>太厲害加字'
// =$('p').innerHTML+='太厲害加字'
// __________________________________________

// var btns =document.querySelectorAll('#book-list .delete');
var btns=document.getElementsByClassName('delete')

// Array.from(btns).forEach(function(btn){
//   btn.addEventListener('click',function(e){
//     const li=e.target.parentElement;
//     li.parentNode.removeChild(li);
//   })
// })
// 註解:addEventListener監聽事項


// JQ寫法
// $(".delete").click(function (e) {
//   let  li=e.target.parentElement;
//   console.log(li)   
//   li.parentElement.removeChild(li);
// })
//刪除li要先從父母ul開始,再刪除小孩li


// 刪除判斷
const list=document.querySelector('#book-list ul');
// // delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});
// ___________________________________________

// 配click me
// const link = document.querySelector('#page-banner a');
// link.addEventListener('click',function (e) {
// e.preventDefault();//不讓它實行
// // console.log('navigation to',e.target.textContent,'was prevented') 
// })

// ________________________________________________
// var book=document.querySelector('li:first-child .name')
/* <span class="name">第一筆資料</span> */
// book.setAttribute('class','name-2');
/* <span class="name-2">第一筆資料</span> */

// ________________________________________________
// 新增
const addForm=document.forms['add-book'];
addForm.addEventListener('submit',function (e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  // console.log(value);

//create element
const li= document.createElement('li');
const bookName=document.createElement('span');
const deleteBtn=document.createElement('span');

//add content
deleteBtn.textContent='delete';
bookName.textContent= value;

// add classes
bookName.classList.add('name');
deleteBtn.classList.add('delete');

//append to document
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);

});

// 隱藏全部資訊
const hideBox =document.querySelector('#hide');
hideBox.addEventListener('change',function(e){
  if(hideBox.checked){
    list.style.display="none";
  }else{
    list.style.display="initial"
  }
  
})

//搜尋
const searchBar=document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup',function(e) {
  const term=e.target.value.toLowerCase();
  const books=list.getElementsByTagName('li');
  Array.from(books).forEach(function(book) {
    const title=book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term)!=-1){
    book.style.display='block';
  }else{
      book.style.display="none";
  };
});
});


